export type RefundItemProps = {
    id: string;
    username: string;
    category: string;
    amount: string;
    categoryImg: string;
};

type props = React.ComponentProps<"a"> & {
    data: RefundItemProps;
};

export function RefundItem({ data, ...rest }: props) {
    return (
        <a
            className="flex items-center gap-3 hover:bg-green-100/5 cursor:pointer rounded-md p-2"
            {...rest}
        >
            <img src={data.categoryImg} alt="Icone da Categoria" className="w-8 h-8" />

            <div className="flex flex-col flex-1">
                <strong className="text-sm text-gray-100">{data.username}</strong>
                <span className="text-xs text-gray-200">{data.category}</span>
            </div>

            <span className="text-sm text-gray-100 font-semibold">
                <small className="font-normal text-gray-200">R$ </small>
                {data.amount}
            </span>
        </a>
    );
}
