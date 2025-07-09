import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Dashboard() {
    const [name, setName] = useState("");

    function fetchRefunds(e: React.FormEvent) {
        e.preventDefault();
        console.log(name);
    }

    return (
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

            <form
                onSubmit={fetchRefunds}
                className="flex items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
            >
                <Input
                    placeholder="Pesquisar pelo nome"
                    onChange={(e) => setName(e.target.value)}
                />
                <Button variant="icon">Teste</Button>
            </form>
        </div>
    );
}
