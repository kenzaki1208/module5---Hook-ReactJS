import useIncrement from "../hook/useIncrement";

function Counter1() {
    const [count, increase] = useIncrement(1);

    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>Count: {count}</h3>
            <button onClick={increase}>Add 1</button>
        </div>
    );
}

export default Counter1;