import { useState, useEffect } from "react";

export default function useClock() {
    const [time, setTime] = useState("");
    const [ampm, setAmpm] = useState("");

    const updateTime = () => {
        const dateInfo = new Date();
        let hour = 0;

        if (dateInfo.getHours() === 0) {
            hour = 12;
        } else if (dateInfo.getHours() > 12) {
            hour = dateInfo.getHours() - 12;
        } else {
            hour = dateInfo.getHours();
        }

        const minutes =
            dateInfo.getMinutes() < 10
                ? "0" + dateInfo.getMinutes()
                : dateInfo.getMinutes();

        const seconds =
            dateInfo.getSeconds() < 10
                ? "0" + dateInfo.getSeconds()
                : dateInfo.getSeconds();

        const ampmValue = dateInfo.getHours() >= 12 ? "PM" : "AM";

        setAmpm(ampmValue);
        setTime(`${hour}:${minutes}:${seconds}`);
    };

    useEffect(() => {
        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return [time, ampm];
}