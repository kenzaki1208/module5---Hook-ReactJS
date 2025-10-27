import useIncrement from "../hook/useIncrement";

function Counter2() {
    const [count, increase] = useIncrement(2);

    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>Count: {count}</h3>
            <button onClick={increase}>Add 2</button>
        </div>
    );
}

export default Counter2;