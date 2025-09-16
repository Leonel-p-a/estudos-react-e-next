export function Accommodation() {
    return (
        <div>
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>Rio de Janeiro, Brasil</h1>
            <p>Descrição: Perto do Cristo Redentor</p>
        </div>
    )
}

export function Header( props: any ) {
    return (
        <div className="bg-teal-600">
            <h1>Logo</h1>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
            {Menu()}
        </div>
    )
}

export function Menu() {
    return (
        <div className="bg-teal-600">
            Acododações | Experiências
        </div>
    )
}