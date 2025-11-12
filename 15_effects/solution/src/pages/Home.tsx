import { Nav } from "components/Nav.tsx";
import { Link } from "lib/router";
import { useEffect, useState } from "react";

type Note = {
    id: number;
    content: string;
};

export function Home() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        fetch("/api/notes")
            .then(res => res.json().then(notes => setNotes(notes)));
    }, []);

    return (
        <>
            <Nav />
            <ul>
                {notes.map(note => (
                    <li>
                        <Link to={`/${note.id}`}>{note.content}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
