import React from "react";
import { IoMoonSharp } from "react-icons/io5";
import { RiSunFill } from "react-icons/ri";

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
            {isWhiteBackground ? <span style={{ color: '#484E47', fontSize: '24px' }}><IoMoonSharp /></span> : <RiSunFill />}
        </div>
    );
};

export default EmojiButton;