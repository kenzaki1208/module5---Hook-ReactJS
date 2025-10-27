import { useState, useEffect } from "react";

function Timer() {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        if (timer === 0) {
            alert("Time's up");
            return;
        }

        const intervalId = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timer]);

    return (
        <div style={{ padding: "40px", fontSize: "24px" }}>
            <h2>Count down from {timer}</h2>
        </div>
    );
}

export default Timer;