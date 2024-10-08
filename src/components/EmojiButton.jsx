import React from "react";

const EmojiButton = ({ onClick, isWhiteBackground }) => {
    return (
        <div
            onClick={onClick}
            style={{
                position: "fixed",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                fontSize: "24px",
            }}
        >
            {isWhiteBackground ? "🌜" : "🌞"}
        </div>
    );
};

export default EmojiButton;