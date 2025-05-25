import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    actionUpdateCartItem,
    actionDeleteCartItem,
} from "../redux/actions/cartActions";

export default function CartItem({ item, index }) {
    const dispatch = useDispatch();
    const [editedQuantity, setEditedQuantity] = useState(item.quantity);

    useEffect(() => {
        setEditedQuantity(item.quantity);
    }, [item.quantity]);

    const handleQuantityChange = (e) => {
        setEditedQuantity(e.target.value);
    };

    const handleUpdate = () => {
        const quantity = Number(editedQuantity);

        if (!isNaN(quantity) && quantity > 0) {
            dispatch(actionUpdateCartItem(item.id, quantity));
        } else {
            setEditedQuantity(item.quantity);
            alert("Số lượng phải là một số lớn hơn 0.");
        }
    };

    const handleDelete = () => {
        if (
            window.confirm(`Bạn có chắc muốn xóa ${item.name} khỏi giỏ hàng?`)
        ) {
            dispatch(actionDeleteCartItem(item.id));
        }
    };

    const isChanged = Number(editedQuantity) !== item.quantity;

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.price} USD</td>
            <td>
                <input
                    type="number"
                    min="1"
                    className="form-control form-control-sm text-center"
                    style={{ width: "70px" }}
                    value={editedQuantity}
                    onChange={handleQuantityChange}
                />
            </td>
            <td>
                <button
                    className="btn btn-info btn-sm me-2"
                    onClick={handleUpdate}
                    disabled={!isChanged}
                >
                    Update
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
