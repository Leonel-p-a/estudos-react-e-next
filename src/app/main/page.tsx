import { Accommodation, Header } from "@/components/interface"

export default function Page() {
    return (
        <div>
            {Header()}
            <hr />
            {Accommodation()}
        </div>
    )
}