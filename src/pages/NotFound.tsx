export function NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className=" text-gray-100 font-semibold text-2xl mb-2">
                Ops! Essa página não existe. 😿
            </h1>
            <a
                className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
                href="/"
            >
                Clique aqui para voltar
            </a>
        </div>
    );
}
