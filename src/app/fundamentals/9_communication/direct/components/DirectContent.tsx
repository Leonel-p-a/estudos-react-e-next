interface PropsContent {
    name: string
}

export default function IndirectContent( props: PropsContent ) {
    return (
        <div>
            <span>{props.name}</span>
        </div>
    )
}