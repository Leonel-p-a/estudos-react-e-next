import Image from "next/image"

export default function Page() {
    return (
        <div>
            <h1>Imagens</h1>
            <Image
                src="/img/betinha14.jpg"
                alt="Betinha's image"
                width={250}
                height={0} />
        </div>
    )
}