import { useState } from "react";

export default function App() {
    return <Password />;
}

function Password() {
    const [isHidden, setIsHidden] = useState(true);
    const [password, setPassword] = useState("");

    const criteria = [
        { desc: "8 characters minimum", isMet: password.length >= 8 },
        { desc: "One uppercase letter", isMet: /\p{Lu}/u.test(password) },
        { desc: "One digit", isMet: /\p{Nd}/u.test(password) },
    ];
    const isValid = criteria.every(criterion => criterion.isMet);

    return (
        <label>
            Password
            <input
                type={isHidden ? "password" : "text"}
                name="password"
                value={password}
                className={isValid ? "valid" : "invalid"}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? "Show" : "Hide"}
            </button>
            <ul>
                {criteria.map(({ desc, isMet }) => (
                    <li key={desc} className={isMet ? "checked" : ""}>
                        {desc}
                    </li>
                ))}
            </ul>
        </label>
    );
}
