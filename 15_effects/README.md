# Homework: Effects

For this assignment, your task is to create a small note taking
application. Here are the requirements:

- Users can view a list of notes. Each note consists of an ID and
  content. In the list, only the first line of a note's content is
  displayed.
- Clicking on a note opens a separate page where users can edit its
  content. On the edit page, a button allows users to save their
  changes.
- Users can create a new note by clicking a button in the navigation
  bar. This action creates a new note and immediately opens its edit
  page.

Use the provided "server.ts" module for the server-side logic. It
exposes the following endpoints:

- `GET /`: Serves the content of "index.html".
- `GET /api/notes`: Returns an array of notes, where each note is an
  object with `id` and `content` properties.
- `GET /api/notes/<id>`: Returns the note matching the `<id>`.
- `PUT /api/notes/<id>`: Replaces the note matching the `<id>` with the
  note given in the request's body.
- `POST /api/notes/create`: Create a new note. The body of the request
  must be an object with a `content` property.
