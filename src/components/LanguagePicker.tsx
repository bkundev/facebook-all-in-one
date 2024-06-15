import React from "react";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";

const languageMenuItems = [
    {
        key: "en",
        label: "English",
    },
    {
        key: "vi",
        label: "Tiếng việt",
    },
];

export default function LanguagePicker() {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (e) => {
        localStorage.lang = e.key;
        i18n.changeLanguage(e.key);
    };

    return (
        <Dropdown
            menu={{
                selectable: true,
                items: languageMenuItems,
                defaultSelectedKeys: [localStorage.lang || "en"],
                onClick: handleChangeLanguage,
            }}
            arrow
        >
            <Button
                type="dashed"
                icon={<i className="fa-solid fa-earth-americas"></i>}
            />
        </Dropdown>
    );
}
