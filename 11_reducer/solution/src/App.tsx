import { useReducer } from "react";

export default function App() {
    return <Cart />;
}

const initialProducts = [{ id: 1, name: "Apple", price: 1, quantity: 2 }, {
    id: 2,
    name: "Banana",
    price: 2,
    quantity: 2,
}];

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type CartAction =
    | { type: "empty" }
    | { type: "deleteItem"; productId: number }
    | { type: "changeQuantity"; productId: number; quantity: number };

function cartReducer(
    products: Array<Product>,
    action: CartAction,
): Array<Product> {
    switch (action.type) {
        case "empty": {
            return [];
        }
        case "deleteItem": {
            return products.filter(p => p.id !== action.productId);
        }
        case "changeQuantity": {
            return products.map(p =>
                p.id === action.productId
                    ? { ...p, quantity: action.quantity }
                    : p
            );
        }
    }
}

function Cart() {
    const [products, dispatch] = useReducer(cartReducer, initialProducts);
    const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

    function handleDelete(productId: number): void {
        dispatch({ type: "deleteItem", productId });
    }

    function handleChangeQuantity(productId: number, quantity: number): void {
        dispatch({ type: "changeQuantity", productId, quantity });
    }

    return (
        <>
            <button onClick={() => dispatch({ type: "empty" })}>Empty</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <Item
                            key={product.id}
                            {...product}
                            onDelete={handleDelete}
                            onQuantityChange={(quantity) =>
                                handleChangeQuantity(product.id, quantity)}
                        />
                    ))}
                </tbody>
            </table>
            <p>Total: {total}</p>
        </>
    );
}

type ItemProps = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    onDelete: (id: number) => void;
    onQuantityChange: (quantity: number) => void;
};

function Item(
    { id, name, price, quantity, onDelete, onQuantityChange }: ItemProps,
) {
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => onQuantityChange(Number(e.target.value))}
                />
            </td>
            <td>
                <button onClick={() => onDelete(id)}>Delete</button>
            </td>
        </tr>
    );
}
