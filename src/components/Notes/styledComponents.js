import styled from 'styled-components'

export const Notesbgcontainer = styled.div`
    min-height: 100vh;
    padding: 20px;
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 70px;
    }
`
export const Heading = styled.h1`
    font-family: Bree Serif;
    font-size: 25px;
    text-align: center;
    color: #4c63b6;
    @media screen and (min-width: 768px){
        font-size: 35px;
    }
`
export const NoteInputsCard = styled.form`
    border-radius: 8px;
    box-shadow: 0px 4px 16px 0px #bfbfbf;
    padding: 15px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px){
        width: 70vw;
    }
`
export const NameInput = styled.input`
    font-family: Roboto;
    font-size: 20px;
    margin-bottom: 20px;
    padding: 5px;
    outline: none;
    padding-left: 0px;
    border: none;
`
export const TextArea = styled.textarea`
    font-family: Roboto;
    font-size: 18px;
    height: 200px;
    outline: none;
    border: none;
`
export const Addbutton = styled.button`
    background-color: #4c63b6;
    color: #ffffff;
    font-family: Roboto;
    font-size: 16px;
    width: 80px;
    height: 35px;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    border: none;
    margin-top: 10px;
    align-self: flex-end;
`
export const EmptyNoteView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`
export const Image = styled.img`
    width: 75px;
    @media screen and (min-width: 768px){
        width: 100px;
    }
`
export const NonotesHeading = styled.h1`
    font-family: Roboto;
    font-size: 18px;
    color: #475569;
`
export const NonotesText = styled.p`
    font-family: Roboto;
    font-size: 15px;
    margin: 0px;
    color: #475569;
`
export const NotesListItems = styled.ul`
    padding: 0px;
    margin-top: 30px;
    @media screen and (min-width: 768px){
        display: flex;
        flex-wrap: wrap;
        width: 72vw;
    }
`
