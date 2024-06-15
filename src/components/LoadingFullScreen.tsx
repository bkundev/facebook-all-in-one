import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default function LoadingFullScreen({ onlyFillContainer = false }) {
    return (
        <div
            style={{
                ...(onlyFillContainer
                    ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }
                    : {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }),
                background: "#fffd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
            }}
        >
            <LoadingOutlined style={{ color: "blue", fontSize: "3em" }} />
            {/* <Spin size="large" /> */}
            {/* <i
        className="fa-solid fa-circle-notch fa-spin fa-2xl"
        style={{ fontSize: "3em", color: "blue" }}
      ></i> */}
        </div>
    );
}
