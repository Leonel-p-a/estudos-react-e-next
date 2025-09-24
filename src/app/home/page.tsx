import { Header, Menu, Content, Footer } from "@/components/interface"

export default function Page() {
    return (
        <div>
            <Header
                title="AirBnB"
                subtitle="Início"
                className="bg-cyan-700"
            />

            <Menu />

            <Content className="bg-blue-400">
                <h2>Página Início</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus ut nisi voluptas quisquam officiis aperiam in corrupti commodi cum minus, doloremque, atque laborum porro nam vitae qui ullam deserunt quo?
                </p>
            </Content>

            <Footer />
        </div>
    )
}