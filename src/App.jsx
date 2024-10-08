import React, { useState } from "react";
import NotesPage from "./pages/NotesPage";
import NotesProvider from "./context/NotesContext";
import EmojiButton from "./components/EmojiButton";

function App() {
    
    
    
    const [backgroundColor, setBackgroundColor] = useState("");
    const [isWhiteBackground, setIsWhiteBackground] = useState(false);

    const handleEmojiClick = () => {
        if (isWhiteBackground) {
            setBackgroundColor("");
        } else {
            setBackgroundColor("#FFFBF6");
        }
        setIsWhiteBackground(!isWhiteBackground);
    };

    return (
        <div id="app" style={{ backgroundColor, backgroundImage: isWhiteBackground
            ? "linear-gradient(#adaeb7 .1em, transparent .1em), linear-gradient(90deg, #d5d6de .1em, transparent .1em)"
            : ""
   }}>
            <NotesProvider>
                <NotesPage />
                <EmojiButton onClick={handleEmojiClick} isWhiteBackground={isWhiteBackground} />
            </NotesProvider>
        </div>
    );
}

export default App;
