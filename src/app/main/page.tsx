export function Accommodation() {
    return (
        <div>
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>Rio de Janeiro, Brasil</h1>
            <p>Descrição: Perto do Cristo Redentor</p>
        </div>
    )
}

export default function Page() {
    return (
        <div>
            {Accommodation()}
            <hr />
            {Accommodation()}
            <hr />
        </div>
    )
}