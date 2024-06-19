import {ListItem, Title, Text} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {id, title, noteText} = noteDetails

  return (
    <ListItem>
      <Title>{title}</Title>
      <Text>{noteText}</Text>
    </ListItem>
  )
}
export default NoteItem
