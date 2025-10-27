import React from "react";
import { useState } from "react";

function AppExercise1() {
    const carList = ["Mercedes S600", "BMW M5", "Audi A8", "Lexus LS500"];
    const colorList = ["Black", "White", "Red", "Blue", "Silver"];

    const [selectedCar, setSelectedCar] = useState({
        car: carList[0],
        color: colorList[0],
    });

    // Khi chọn xe
    const handleCarChange = (event) => {
        const newCar = event.target.value;
        setSelectedCar((prev) => ({
            ...prev,
            car: newCar,
        }));
    };

    // Khi chọn màu
    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setSelectedCar((prev) => ({
            ...prev,
            color: newColor,
        }));
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Select your car</h1>

            <div style={{ marginTop: "20px" }}>
                <label htmlFor="car">Select a car </label>
                <select
                    id="car"
                    value={selectedCar.car}
                    onChange={handleCarChange}
                    style={{ marginLeft: "10px" }}
                >
                    {carList.map((car) => (
                        <option key={car} value={car}>
                            {car}
                        </option>
                    ))}
                </select>
            </div>

            <div style={{ marginTop: "20px" }}>
                <label htmlFor="color">Select a color </label>
                <select
                    id="color"
                    value={selectedCar.color}
                    onChange={handleColorChange}
                    style={{ marginLeft: "10px" }}
                >
                    {colorList.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>

            <p style={{ marginTop: "40px", fontWeight: "bold" }}>
                You selected a {selectedCar.color} - {selectedCar.car}
            </p>
        </div>
    );
}

export default AppExercise1;