import React, { useReducer } from "react";

const initialState = {
    name: "",
    email: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        default:
            return state;
    }
};

export default function ManagerForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Họ tên:", state.name);
        console.log("Email:", state.email);
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            <div>
                <label>Họ tên:</label>
                <br />
                <input
                    style={{ padding: "10px", borderRadius: "6px" }}
                    type="text"
                    value={state.name}
                    onChange={(e) =>
                        dispatch({ type: "SET_NAME", payload: e.target.value })
                    }
                />
            </div>
            <br />
            <div>
                <label>Email:</label>
                <br />
                <input
                    style={{ padding: "10px", borderRadius: "6px" }}
                    type="email"
                    value={state.email}
                    onChange={(e) =>
                        dispatch({ type: "SET_EMAIL", payload: e.target.value })
                    }
                />
            </div>
            <br />
            <button type="submit">Gửi</button>
        </form>
    );
}
