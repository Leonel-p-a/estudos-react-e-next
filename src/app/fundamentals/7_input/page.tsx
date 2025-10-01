'use client';

import { useState } from "react";

export default function Input() {
    const [value, setValue] = useState('');
    function changeValue( e: any ) {
        setValue( e.target.value );
    }

    return (
        <div className="p-2">
            <h1>Entrada de dados</h1>
            <input
                type="text"
                name=""
                id=""
                className="input-text"
                placeholder="Digite aqui"
                value={value}
                // onChange={e => setValue(e.target.value)}
                onChange={changeValue}
            />
            <h2>Valor digitado: {value}</h2>
        </div>
    )
}