# Document

## Head

## Body

### Root

- Navbar
  - Div
    - Anchor
      - Img
    - `user`
      - Text
      - Img
      - Button
- `route = "/"`
  - Home
    Api: [fetchNotes]()
    State: [notes]()
    - AddNewNode
      Props: [notes, setNotes]()
      State: [open]()
      - `open`
        - NewNoteModal
          Props: [notes, setNotes, setOpen]()
          Api: [addNewNote]()
          - Modal
            Props: [children]()
            - Div
            - Div
              - children (Nested Div)
      - Button
    - NotesContainer
      Props: [notes, setNotes]()
      - NoteCard
        Api: [deleteNote, togglePin]()
        Props: [note, notes, setNotes]()
        State: [openEditModal, openViewModal]()
        - `openEditModal`
          - EditModal
            Api: [updateNote]()
            Props: [note, notes, setNotes, setOpenEditModal]()
            - Modal
              Props: [children]()
              - Div
              - Div
                - children (Nested Div)
        - `openViewModal`
          - ViewModal
            Props: [note, setOpenViewModal]()
            - Modal
              Props: [children]()
              - Div
              - Div
                - children (Nested Div)
- `route = "/signup"`
  - signup
    - Form
      - H3
      - Input
      - Input
      - Button
      - Anchor
- `route = "/login"`
  - login
    - Form
      - H3
      - Input
      - Input
      - Button
      - Anchor
- `route = "/*"`
  - error
    - Para
