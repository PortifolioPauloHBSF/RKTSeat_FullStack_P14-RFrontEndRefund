import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignIn() {
    return (
        <form className="w-full flex flex-col gap-4">
            <Input legend="E-mail" required type="email" placeholder="seu@email.com" />
            <Input legend="Senha" required type="password" placeholder="senha" />
            <Button>Entrar</Button>
        </form>
    )
}
