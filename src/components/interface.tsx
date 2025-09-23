import Link from "next/link"

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
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
        </div>
    )
}

export function Menu() {
    return (
        <div className="bg-teal-600">
            <MenuItem text="Início" url="/home" />
            <MenuItem text="Acomodações" url="/accomodations" />
            <MenuItem text="Help" url="/home" />
        </div>
    )
}

export function MenuItem( props: any ) {
    return (
        <Link href={props.url} className="p-2">
            {props.text}
        </Link>
    )
}

export function Footer() {
    return (
        <div className="bg-teal-400">
            <p>Rodapé</p>
        </div>
    )
}

export function Content( props: any ) {
    return (
        <div className="bg-blue-400">
            {props.children}
        </div>
    )
}