import { BunRequest, serve } from "bun";
import index from "./index.html";

type Note = { id: number; content: string };

let nextId = 1;
const notes: Array<Note> = [];

const server = serve({
    routes: {
        "/": index,
        "/api/notes": {
            GET(): Response {
                return Response.json(notes);
            },
        },
        "/api/notes/:id": {
            GET(req: BunRequest): Response {
                const id = Number(req.params.id);
                const note = notes.find(n => n.id === id);
                if (!note) return new Response(null, { status: 404 });
                return Response.json(note);
            },
            async PUT(req: BunRequest): Promise<Response> {
                const { id, content } = await req.json();
                const note = notes.find(n => n.id === Number(id));
                if (!note) return new Response(null, { status: 404 });
                note.content = content;
                return new Response();
            },
        },
        "/api/notes/create": {
            async POST(req: BunRequest): Promise<Response> {
                const { content } = await req.json();
                const note = { id: nextId++, content };
                notes.push(note);
                return Response.json(note);
            },
        },
    },
    development: true,
});

console.log(`Listening on ${server.url}`);
