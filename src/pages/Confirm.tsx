import { Navigate, useLocation } from "react-router"
import submitedSvg from "../assets/ok.svg"

export function Confirm() {
    const location = useLocation()

    if (!location.state?.fromSubmit) {
        return <Navigate to="/" />
    }

    return (
        <div className="bg-gray-500 lg:w-[512px] rounded-xl flex flex-col items-center p-10 gap-6">
            <h1 className="text-2xl font-bold text-center text-green-100">Solicitação enviada!</h1>
            <img src={ submitedSvg } alt="Ícone de Ok" className="w-28" />
            <p className="text-sm text-gray-200 text-center">Tudo certo! Sua solicitação será analisada e, em breve, o setor financeiro irá te contatar.</p>
            <a className="w-full p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear" href="/">Nova solicitação</a>
        </div>
    )
}