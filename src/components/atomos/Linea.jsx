import styled from "styled-components"

export const Linea = styled.div`
background-color: ${({theme}) => theme.color2};
height: 2px;
border-radius: 100px;
margin: 20px 0;
text-align: center;
position: relative;
span{
    top: -10px;
    position: absolute;
    background-color: #fff;
    padding: 0 5px;
    background-color: ${({theme}) => theme.color2};
    font-weight: 700;
}
`