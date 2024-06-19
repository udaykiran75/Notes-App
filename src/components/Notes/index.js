import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  Notesbgcontainer,
  Heading,
  NoteInputsCard,
  NameInput,
  TextArea,
  Addbutton,
  EmptyNoteView,
  Image,
  NonotesHeading,
  NonotesText,
  NotesListItems,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, updateNoteText] = useState('')
  const [notesList, updateList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNoteText = event => {
    updateNoteText(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      noteText,
    }
    updateList(prevList => [...prevList, newNote])
    setTitle('')
    updateNoteText('')
  }

  return (
    <Notesbgcontainer>
      <Heading>Notes</Heading>
      <NoteInputsCard onSubmit={onSubmitForm}>
        <NameInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <TextArea
          type="text"
          placeholder="Take a Note..."
          value={noteText}
          onChange={onChangeNoteText}
        />
        <Addbutton type="submit">Add</Addbutton>
      </NoteInputsCard>
      {notesList.length === 0 ? (
        <EmptyNoteView>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NonotesHeading>No Notes Yet</NonotesHeading>
          <NonotesText>Notes you add will appear here</NonotesText>
        </EmptyNoteView>
      ) : (
        <NotesListItems>
          {notesList.map(noteItem => (
            <NoteItem key={noteItem.id} noteDetails={noteItem} />
          ))}
        </NotesListItems>
      )}
    </Notesbgcontainer>
  )
}
export default Notes
