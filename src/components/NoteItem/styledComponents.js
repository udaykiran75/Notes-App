import styled from 'styled-components'

export const ListItem = styled.li`
    list-style-type: none;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #d8d8d8;
    border-radius: 7px;
    @media screen and (min-width: 768px){
        width: 310px;
        margin: 5px;
    }
`
export const Title = styled.h1`
    font-family: Roboto;
    font-size: 17px;
`
export const Text = styled.p`
    font-family: Roboto;
    font-size: 15px;
`
