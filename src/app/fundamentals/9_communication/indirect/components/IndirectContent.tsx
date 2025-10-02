import { useState } from "react";
import IndirectTab from "./IndirectTab";

export default function IndirectContent() {

    const [ tab, setTab ] = useState('');

    function changeName( name: string ) {
        setTab(name);
    }

    return (
        <div>
            <span>{tab}</span>
            <hr />
            <IndirectTab update={changeName} />
        </div>
    )
}