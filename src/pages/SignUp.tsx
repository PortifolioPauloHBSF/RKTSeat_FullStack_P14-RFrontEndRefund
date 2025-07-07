import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true)
        console.log(name, email, password);
        setIsLoading(false)
    }

    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input
                legend="Nome"
                placeholder="Fulano de Tal"
                onChange={(e) => setName(e.target.value)}
                required
            />
            <Input
                legend="E-mail"
                type="email"
                placeholder="seu@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                legend="Senha"
                type="password"
                placeholder="senha"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Input
                legend="Confirme sua Senha"
                type="password"
                placeholder="senha"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
            />
            <Button isLoading={isLoading} type="submit">
                Cadastrar
            </Button>
            <a
                href="/"
                className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
            >
                Já tenho uma conta
            </a>
        </form>
    );
}
