export default function Page() {
    const users = [
        {id: 1, name: "Roberta", email: "betinhafofinha@gmail.com"},
        {id: 2, name: "Leonel", email: "leonelalmeida.10.la@gmail.com"},
        {id: 3, name: "Manuela", email: "manu@gmail.com"},
        {id: 4, name: "Larissa", email: "larissa@gmail.com"},
        {id: 5, name: "João", email: "joao@gmail.com"},
    ];

    const list = users.map(user => 
        <li key={user.id}>{user.name} ({user.email})</li>
    )

    return (
        <ul>
            {list}
        </ul>
    )
}