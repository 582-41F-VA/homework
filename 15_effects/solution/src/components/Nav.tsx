import { Link, useNavigate } from "lib/router";
import { MouseEvent } from "react";

export function Nav() {
    const navigate = useNavigate();
    async function handleClick(e: MouseEvent) {
        e.preventDefault();
        const res = await fetch("/api/notes/create", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ content: "lorem" }),
        });
        const { id } = await res.json();
        navigate(`/${id}`);
    }
    return (
        <nav>
            <Link to="/">Home</Link>
            <a onClick={handleClick}>Create Note</a>
        </nav>
    );
}
