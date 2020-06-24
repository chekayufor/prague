import React, {useRef, useContext } from 'react';
import styled from 'styled-components';
import TourContext from '../../context/tour/tourContext';
import Resizer from 'react-image-file-resizer';


const FileInput = () => {
const tourContext = useContext(TourContext);
const { addPicture, pictures } = tourContext;
    const fileInput = useRef();

    const FileSelect = (e) => {
       let fInput = false;
        e.preventDefault();
        console.log('fileInput.current.files[0]', fileInput.current.files[0]);
        if(fileInput.current.files[0]){
            fInput = true;
        }
        if(fInput) {
            Resizer.imageFileResizer(
                fileInput.current.files[0],
                400,
                400,
                'JPEG',
                100,
                0,
                uri => {
                    // console.log(uri)
                },
                'base64'
            );
            addPicture(fileInput.current.files[0]);
        }
        console.log({pictures});
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

export default FileInput;
  