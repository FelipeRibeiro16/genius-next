import styled from 'styled-components'

interface props {
  selected: boolean
}

export const GameContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: center;
  align-items: center;
`

export const Genius = styled.div`
  display: grid;
  grid-template-areas:
    'green red'
    'yellow blue';
  grid-gap: 1.5%;
  border: 1px solid white;
  background-color: black;
  border-radius: 100%;
  margin-top: 2%;
  width: 40%;
  height: 80%;
  @media (max-width: 800px) {
    position: relative;
    width: 60%;
    height: 60%;
  }
`

export const Blue = styled.div<props>`
  grid-area: blue;
  cursor: pointer;
  background-color: dodgerblue;
  border-bottom-right-radius: 100%;
  opacity: ${props => (props.selected ? 1 : 0.5)};
  transition: opacity 100ms linear;
  border: midnightblue 0.25em solid;
  box-shadow: inset 0 0 0.5em 0 blue, 0 0 0.5em 0 blue;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: dodgerblue;
    top: 0%;
    left: 0%;
    width: 105%;
    height: 105%;
    border-bottom-right-radius: 100%;
    transform: perspective(5em);
    filter: blur(2em);
    opacity: ${props => (props.selected ? 1 : 0)};
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    box-shadow: 0 0 2em 0.5em blue;
    opacity: 0;
    transition: opacity 100ms linear;
    opacity: ${props => (props.selected ? 1 : 0)};
  }
`

export const Red = styled.div<props>`
  grid-area: red;
  cursor: pointer;
  background-color: red;
  border-top-right-radius: 100%;
  opacity: ${props => (props.selected ? 1 : 0.5)};
  transition: opacity 100ms linear;
  border: lightpink 0.25em solid;
  box-shadow: inset 0 0 0.5em 0 lightpink, 0 0 0.5em 0 lightpink;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: red;
    top: -5%;
    left: 0%;
    width: 105%;
    height: 105%;
    border-top-right-radius: 100%;
    transform: perspective(5em);
    opacity: ${props => (props.selected ? 1 : 0)};
    filter: blur(2em);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    box-shadow: 0 0 2em 0.5em lightpink;
    opacity: ${props => (props.selected ? 1 : 0)};
    transition: opacity 100ms linear;
  }
`

export const Yellow = styled.div<props>`
  grid-area: yellow;
  cursor: pointer;
  background-color: yellow;
  border-bottom-left-radius: 100%;
  opacity: ${props => (props.selected ? 1 : 0.5)};
  transition: opacity 100ms linear;
  border: gold 0.25em solid;
  box-shadow: inset 0 0 0.5em 0 darkgoldenrod, 0 0 0.5em 0 darkgoldenrod;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: yellow;
    top: 0%;
    left: -5%;
    width: 105%;
    height: 105%;
    border-bottom-left-radius: 100%;
    transform: perspective(5em);
    opacity: ${props => (props.selected ? 1 : 0)};
    filter: blur(2em);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    box-shadow: 0 0 2em 0.5em darkgoldenrod;
    opacity: ${props => (props.selected ? 1 : 0)};
    transition: opacity 100ms linear;
  }
`

export const Green = styled.div<props>`
  grid-area: green;
  cursor: pointer;
  background-color: mediumseagreen;
  border-top-left-radius: 100%;
  opacity: ${props => (props.selected ? 1 : 0.5)};
  transition: opacity 100ms linear;
  border: honeydew 0.25em solid;
  box-shadow: inset 0 0 0.5em 0 honeydew, 0 0 0.5em 0 honeydew;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: mediumseagreen;
    top: -5%;
    left: -5%;
    width: 105%;
    height: 105%;
    border-top-left-radius: 100%;
    transform: perspective(5em);
    opacity: ${props => (props.selected ? 1 : 0)};
    filter: blur(2em);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    box-shadow: 0 0 2em 0.5em honeydew;
    opacity: ${props => (props.selected ? 1 : 0)};
    transition: opacity 100ms linear;
  }
`
export const Menu = styled.div`
  display: flex;
  padding: 1%;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 10%;
`
export const Button = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 10%;
  height: 50%;
`
export const Score = styled.span`
  display: flex;
  color: white;
  user-select: none;
  padding: 5px;
`

export const Alert = styled.span`
  display: flex;
  color: white;
  user-select: none;
  padding: 5px;
`
