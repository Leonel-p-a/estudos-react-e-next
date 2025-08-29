export default function Page() {

    const rule = <h1>Maior de idade</h1>;
    const name = 'Leonel Almeida';
    const id = 'documentId' //document.getElementById('id');
    const lista = [
        <h1>Leonel</h1>,
        <h1>Roberta</h1>,
        <h1>Manuela</h1>,
        <h1>Leandro</h1>,
        <h1>Lis</h1>,
    ]

    let salary = 1000;
    let bonus = 200;

    const user = {
        name: 'Leonel',
        age: 26,
        profession: 'Software developer',
    }

    function MyButton() {
        return (
            <button>Clique aqui</button>
        )
    }

    return (
        <div id={id}>
            <p>Olá, {name}!</p>
            {lista[1]}
            <p>{10 + 3}</p>
            <p>O salário total é {salary + bonus}</p>
            <p>Dados do usuário: nome: {user.name} - {user.age} anos - profissão: {user.profession}</p>
            {MyButton()}
        </div>
    )
}