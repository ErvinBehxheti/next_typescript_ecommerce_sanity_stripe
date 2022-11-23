export type TContext = {
    showCart: boolean;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: any[];
    totalPrice: number;
    totalQuantities: number;
    qty: number;
    incQty: () => void;
    decQty: () => void;
    onAdd: (product: {
        _id: string;
        price: number;
        quantity: number;
        name: string;
    }, quantity: number) => void;
    toggleCartItemQuanitity: (id: string, value: string) => void;
    onRemove: (product: {
        _id: string;
    }) => void;
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    setTotalQuantities: React.Dispatch<React.SetStateAction<number>>;
}

export type TChildrenProps = {
    children: React.ReactNode;
}