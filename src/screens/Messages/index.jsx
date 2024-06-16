import { useEffect, useState } from "react";
import {
    App,
    Avatar,
    Button,
    Dropdown,
    Row,
    Space,
    Tag,
    Typography,
} from "antd";
import {
    MessageTwoTone,
    DownloadOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import fileDownload from 'js-file-download'
import useStore, { selectors } from "../../store";
import MyTable from "../../components/MyTable";
import { getAllMessages, getFbUrlFromId } from "../../utils/facebook";
import { numberWithCommas, objectToCsv } from "../../utils/helper";

const { Title } = Typography;

export default function Messages() {
    const { message } = App.useApp();
    const { t } = useTranslation();
    const profile = useStore(selectors.profile) ?? {};
    const messages = useStore(selectors.messages) ?? [];
    const setMessages = useStore(selectors.setMessages);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // onClickReload();
    }, [profile?.uid]);

    const onClickReload = () => {
        if (loading) return;
        message.info(t("Fetching messages..."));
        setLoading(true);
        getAllMessages()
            .then((data) => {
                console.log(data);
                if (!data?.length) return message.error(t("No data to show"));
                setMessages(data);
                message.success(t("Fetch completed"));
            })
            .catch((err) => {
                message.error(t("Failed to fetch") + ": " + err.message);
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const onClickExport = (selectedData, type) => {
        let dataToSave = selectedData?.length ? selectedData : messages;

        if (!dataToSave?.length) return message.error(t("No data to export"));

        if (type == "json") {
            fileDownload(JSON.stringify(dataToSave), "messages.json");
        } else if (type == "csv") {
            dataToSave = dataToSave.map((_) => {
                return {
                    ..._,
                    participants: _.participants.map((_) => _.name).join(", "),
                    participantIds: _.participants.map((_) => _.id).join(", "),
                };
            });
            const csv = objectToCsv(dataToSave);
            fileDownload(csv, "messages.csv");
        } else message.error(t("Unsupported file type"));
    };

    const onClickDelete = (selectedData) => {
        console.log(selectedData);
    };

    const columns = [
        {
            title: "#",
            key: "recent",
            dataIndex: "recent",
            sorter: (a, b) => a.recent - b.recent,
            // render: (text, record, index) => index + 1,
            render: (text, record, index) => record.recent + 1,
            width: 70,
            align: "center",
            headerAlign: "center",
        },
        {
            title: t("Name"),
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
            render: (text, record, index) => {
                return (
                    <Row align="middle">
                        {record.isGroup ? (
                            <Dropdown
                                arrow
                                overlayStyle={{
                                    maxHeight: "350px",
                                    overflow: "auto",
                                    border: "1px dashed gray",
                                    borderRadius: "5px",
                                }}
                                menu={{
                                    items: [
                                        {
                                            key: "-1",
                                            type: "group",
                                            label: (
                                                <Title level={5} style={{ textAlign: "center" }}>
                                                    {t("{{count}} members", {
                                                        count: record.participants?.length,
                                                    })}
                                                </Title>
                                            ),
                                        },
                                        { type: "divider" },
                                        ...(record.participants?.map?.((_) => ({
                                            key: _.id,
                                            label: <b>{_.name}</b>,
                                            icon: <Avatar shape="square" src={_.avatar} />,
                                            onClick: () => window.open(getFbUrlFromId(_.id)),
                                        })) || []),
                                    ],
                                }}
                            >
                                <Space>
                                    <Avatar.Group maxCount={10}>
                                        {record.participants
                                            .filter((_) => _.id != profile?.id)
                                            .map((_) => (
                                                <Avatar key={_.id} src={_.avatar} />
                                            ))}
                                    </Avatar.Group>
                                </Space>
                            </Dropdown>
                        ) : (
                            <Avatar shape="square" src={record.participants[0].avatar} />
                        )}
                        <a href={record.url} target="_blank" style={{ marginLeft: "10px" }}>
                            <b>{record.name}</b>
                        </a>
                    </Row>
                );
            },
            filters: [
                {
                    text: t("Inactive"),
                    value: "inactive",
                },
            ],
            onFilter: (value, record) => {
                if (value == "inactive")
                    return (
                        record.name == "-no data-" || record.name == "Người dùng Facebook"
                    );

                return true;
            },
            width: "auto",
        },
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            sorter: (a, b) => a.id > b.id,
            width: 150,
        },
        {
            title: t("Messages"),
            dataIndex: "count",
            key: "count",
            sorter: (a, b) => a.count - b.count,
            render: (text, record, index) => numberWithCommas(record.count),
            width: 100,
            align: "right",
        },
        {
            title: t("Type"),
            dataIndex: "type",
            key: "type",
            // sorter: (a, b) => a.isGroup > b.isGroup,
            render: (text, record, index) =>
                record.isGroup ? t("Group") : t("Personal"),
            filters: [
                {
                    text: t("Group"),
                    value: true,
                },
                {
                    text: t("Personal"),
                    value: false,
                },
            ],
            onFilter: (value, record) => record.isGroup == value,
            width: 100,
            align: 'right'
        },
        {
            title: t("Action"),
            dataIndex: "action",
            key: "download",
            render: (text, record, index) => (
                <>
                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        style={{ marginRight: "5px" }}
                    ></Button>
                    <Button type="primary" danger icon={<DeleteOutlined />}></Button>
                </>
            ),
            width: 100,
            align: "right",
        },
    ];

    return (
        <>
            <Row align="middle" style={{ margin: "16px" }}>
                <MessageTwoTone style={{ fontSize: "24px", marginRight: "10px" }} />
                <Title level={3} style={{ margin: 0 }}>
                    {t("Messages manager")}
                </Title>
                <Tag style={{ marginLeft: "10px", fontWeight: "bold", color: "#888" }}>
                    {messages.length}
                </Tag>
            </Row>
            <MyTable
                data={messages}
                columns={columns}
                size="small"
                searchable
                selectable
                loadingOnReloadButton={loading}
                onClickReload={onClickReload}
                onClickExport={onClickExport}
                onClickDelete={onClickDelete}
                keyExtractor={(_) => _.id}
            />
        </>
    );
}
