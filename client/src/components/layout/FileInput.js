import React, {useRef, useState } from 'react';
import styled from 'styled-components';

const FileInput = ({pic, setPic}) => {
const [selectedFile, setSelectedFile] = useState(null)
    const fileInput = useRef();

    const FileSelect = (e) => {
        e.preventDefault();
        // alert(
        //     `Selected file - ${fileInput.current.files[0].name}`
        // );
        // console.log(fileInput.current.files[0])
        setSelectedFile(fileInput.current.files[0]);
    }

    const HandleSubmit = () => {
        setPic([...pic, selectedFile]);
    }
//   console.log(selectedFile);
      return (
        <Form >
            <Label>
                Загрузите файл:
                <Input type="file" ref={fileInput} onChange={FileSelect}/>
            </Label>
            <Button onClick={HandleSubmit} >Add</Button>
        </Form>
      );
  }

const Form = styled.div`
    display:grid;
    line-height: 2em;
    grid-template-columns: 3fr 1fr;
    margin-top: 20px;
    font-size: 1.2rem;
`
const Label = styled.label`
    display: grid;
    font-size: 1em;
    /* color: #fff; */
    opacity: .9;
    font-weight: bold;
    align-items: center;
    justify-content: flex-start;
  `
const Input=styled.input`
    cursor: pointer !Important;
    border: none;
    margin-top:10px;
    padding: 5px 12px;
    background: #3da4c3;
    color: #fff;
    font-size: 1em;
    transition: all .4s;
    border-radius: 5px;
`

const Button =styled.button`
    display:flex;
    font-size:16px;
    cursor: pointer !Important;
    background:red;
    color: #fff;
    justify-content: center;
    text-align: center;
    height: 35px;
    align-items: flex-end;
    align-self: flex-end;
    border-radius: 5px;
    padding: 5px 12px;

`  
export default FileInput;
  