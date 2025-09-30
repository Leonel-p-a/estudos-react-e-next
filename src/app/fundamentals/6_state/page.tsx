'use client';

import { useState } from "react";

export default function Page() {
    let [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Estados</h1>
            <button
                onClick={increment}
                className="bg-blue-400 p-2"
            >
                Incrementar
            </button>
            <br />
            <br />
            <button
                onClick={decrement}
                className="bg-blue-400 p-2"
            >
                Decrementar
            </button>
            <p>Número: {count}</p>
        </div>
    )
}