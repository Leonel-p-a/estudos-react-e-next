'use client';
import { useState } from "react";
import DirectContent from "./DirectContent";

export default function DirectTab() { // Pai

    const [tab, setTab] = useState('');

    return (
        <div>
            <button onClick={() => setTab('Conversas')} className="button">Conversas</button>
            <button onClick={() => setTab('Atualizações')} className="button">Atualizações</button>
            <button onClick={() => setTab('Chamadas')} className="button">Chamadas</button>

            <DirectContent name={tab} /*Filho*/ />
        </div>
    )
}