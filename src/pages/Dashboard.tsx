import { useState } from "react";
import searchSvg from "../assets/search.svg";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RefundItem, type RefundItemProps } from "../components/RefundItem";
import { Pagination } from "../components/Pagination";

import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";

const REFUND_EXAMPLE = {
    id: "123",
    username: "Usuário",
    category: "Categoria",
    amount: formatCurrency(123.4),
    categoryImg: CATEGORIES.accommodation.icon,
};

export function Dashboard() {
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE]);

    function fetchRefunds(e: React.FormEvent) {
        e.preventDefault();
        console.log(name);
    }

    function handlePagination(action: "next" | "previous") {
        setPage((prevPage) => {
            if (action === "next" && prevPage < totalPages) {
                return prevPage + 1;
            }
            if (action === "previous" && prevPage > 1) {
                return prevPage - 1;
            }
            return prevPage;
        });
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
                <Button type="submit" variant="icon">
                    <img className="w-5" src={searchSvg} alt="Ícone de Pesquisar" />
                </Button>
            </form>

            <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
                {
                refunds.map((item) => (
                    <RefundItem 
                        key={item.id} 
                        data={item} 
                        href={`/refund/${item.id}`}
                />
                ))}
            </div>

            <div>
                <Pagination
                    current={page}
                    total={totalPages}
                    onNext={() => handlePagination("next")}
                    onPrevious={() => handlePagination("previous")}
                />
            </div>
        </div>
    );
}
