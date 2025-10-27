import { useState } from "react";

function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    function increase() {
        setCount((prev) => prev + addAmount);
    }

    return [count, increase];
}

export default useIncrement;