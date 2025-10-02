interface PropsTab {
    update( name: string ): void
}

export default function DirectTab( props: PropsTab ) { 
    return (
        <div>
            <button onClick={() => props.update('Conversas')} className="button">Conversas</button>
            <button onClick={() => props.update('Atualizações')} className="button">Atualizações</button>
            <button onClick={() => props.update('Chamadas')} className="button">Chamadas</button>
        </div>
    )
}