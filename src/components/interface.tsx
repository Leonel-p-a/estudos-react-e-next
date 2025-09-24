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

interface HeaderProps {
    title: string,
    subtitle: string,
    className?: string
}

export function Header( props: HeaderProps ) {
    const propsClass = props.className ?? ""
    return (
        <div className={"p-3 " + propsClass}>
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
        <Link href={props.url} className="p-3">
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

interface ContentProps {
    className: string,
    children: any
}

export function Content( props: ContentProps ) {
    return (
        <div className={props.className + " p-3"}>
            {props.children}
        </div>
    )
}