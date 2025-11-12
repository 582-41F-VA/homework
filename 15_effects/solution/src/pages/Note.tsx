import { Nav } from "components/Nav.tsx";
import { useParams } from "lib/router";
import { useEffect, useState } from "react";

export function Note() {
    const { noteId: id } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/api/notes/${id}`)
            .then(res => res.json().then(note => setContent(note.content)));
    }, []);

    async function handleClick() {
        await fetch(`/api/notes/${id}`, {
            method: "put",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id, content }),
        });
    }

    return (
        <>
            <Nav />
            <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
            >
                {content}
            </textarea>
            <button onClick={handleClick}>Save</button>
        </>
    );
}
