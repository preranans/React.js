import React from "react";
import './index.css'

const emojis = ['😄', '🎁', '❤️'];

function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

const SlotM = () => {
    const x = getRandomEmoji();
    const y = getRandomEmoji();
    const z = getRandomEmoji();

    if (x === y && y === z) {
        return (
            <>
                <div className="slot_inner">
                    <h4>{x}{y}{z}</h4>
                    <h4>This is matching</h4>
                    <hr />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="slot_inner">
                    <h4>{x}{y}{z}</h4>
                    <h4>This is not matching</h4>
                    <hr />
                </div>
            </>
        )
    }
}

const App = () => {
    return (
        <>
            <h1 className="heading_style">🎰Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>🎰</h1>
            <div className="slotmachine">
                <SlotM />
                <SlotM />
                <SlotM />
                <SlotM />
            </div>
        </>
    );
};

export default App;
