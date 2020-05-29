import React, {useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import TourContext from '../../context/tour/tourContext';

const FileInput = ({pic, setPic}) => {
const [selectedFile, setSelectedFile] = useState(null);
const tourContext = useContext(TourContext);
const { addPicture, loading, pictures } = tourContext;
    const fileInput = useRef();

    const FileSelect = (e) => {
        e.preventDefault();
        console.log('fileInput.current.files[0]', fileInput.current.files[0]);
        addPicture(fileInput.current.files[0]);
        console.log({pictures})
        // setPic([...pic, fileInput.current.files[0]]);
    }

      return (
        <Form >
            <Label>
                Загрузите файл:
                <Input type="file" name="file" ref={fileInput} onChange={FileSelect}/>
            </Label>
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
  