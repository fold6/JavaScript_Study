import React, { useState } from 'react';
import './App.css';
import Box from './component/box';
import Checkbox from './component/cheackbox';
import styled, {css} from 'styled-components';

// styled-component 선언
const Circle = styled.div`
  margin: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: skyblue;
  border-radius: 50%;
`;
const Circle2 = styled.div`
  margin: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: ${props => props.color || 'black'};
  border-radius: 50%;
`;
const Circle3 = styled.div`
  margin: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props => props.huge && 
    css`
    width: 10rem;
    height: 10rem;
    `}
`;
const Input = styled.input`
    width: 20rem;
    height: 20rem;

    &:hover{
      background-color: #333
    }
`;
const Button = styled.button`
    display: line-flex;
    margin: 1rem;
    padding: 1rem 2rem;
    // width: 8rem;
    // height: 4rem;
    fontsize: 1.2rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: ${props => props.bgcolor || 'skyblue'};

    &:hover {
      background-color: #333;
      color: #ffffff;
    }

    &:active {
      background-color: blue;
    }
`

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked)
  };

  return (
    <div className="App">
      <Box></Box>
      <br></br>
      <Checkbox onChange={onChange} checked={check}>약관에 모두 동의</Checkbox>
      <p className='Checkbox'>
        <b>check : </b>{check ? 'true' : 'false'}
      </p>
      <br></br>

      <Circle></Circle>
      <Circle2></Circle2>
      <Circle2 color='blue'></Circle2>
      <Circle3 color='lemonchiffon'></Circle3>
      <Circle3 color='red' huge></Circle3>
      <br></br>

      <Button>BUTTON</Button>
      <Button bgcolor='lavender'>BUTTON</Button>
      <br/>

      <Input/>
    </div>
  );
}

export default App;