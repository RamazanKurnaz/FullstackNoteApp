import React, { useState } from "react";
import { useContext } from "react";
import { SketchPicker } from "react-color";
import { NotesContext } from "../context/NotesContext";
import { db } from "../appwrite/databases";

const Color = ({ color }) => {
    const { selectedNote, notes, setNotes } = useContext(NotesContext);
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [currentColor, setCurrentColor] = useState(color.colorHeader);

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const handleChange = (color) => {
        setCurrentColor(color.hex);
        changeColor(color.hex);
    };

    const changeColor = (newColor) => {
        if (!selectedNote) {
            alert("You must select a note before changing colors");
            return;
        }

        try {
            const currentNoteIndex = notes.findIndex(
                (note) => note.$id === selectedNote.$id
            );

            const updatedNote = {
                ...notes[currentNoteIndex],
                colors: JSON.stringify({
                    ...JSON.parse(notes[currentNoteIndex].colors),
                    colorHeader: newColor,
                    colorBody: newColor,
                }),
            };

            const newNotes = [...notes];
            newNotes[currentNoteIndex] = updatedNote;
            setNotes(newNotes);

            db.notes.update(selectedNote.$id, {
                colors: JSON.stringify({
                    ...JSON.parse(notes[currentNoteIndex].colors),
                    colorHeader: newColor,
                    colorBody: newColor,
                }),
            });
        } catch (error) {
            console.error("Error updating color:", error);
        }
    };

    return (
        <div>
            <div
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            >
                <img src="src\assets\Colorpallete.png" alt="Color Picker Icon" />
            </div>
            {displayColorPicker ? (
                <div style={{ position: "absolute", zIndex: "2" }}>
                    <div
                        style={{
                            position: "fixed",
                            top: "0px",
                            right: "0px",
                            bottom: "0px",
                            left: "0px",
                        }}
                        onClick={handleClose}
                    />
                    <SketchPicker
                        color={currentColor}
                        onChange={handleChange}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Color;
