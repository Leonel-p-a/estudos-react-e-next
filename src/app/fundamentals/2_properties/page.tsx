import { Accommodation, Header } from "@/components/interface";

export default function Page() {
    return (
        <div>
            <h1 className="bg-blue-500">Título propriedades (APP)</h1>
            <Header
                title="São Roque, Brasil"
                description="Perto da vinícola Góes"
                price="R$ 350,00"
            />
            <Accommodation />
            <Header
                title="Rio de Janeiro, Brasil"
                description="De frente pra Urca"
                price="R$ 780,00"
            />
        </div>
    )
}