import React, {useState} from 'react';
import styled from 'styled-components';

    const ResizableTextarea = (props) =>{
    // const [val, setVal]=useState('');
    const [rows, setRows]=useState(5);
    const minRows = 5;
    const maxRows = 10;
	
	
	
	const handleChange = (event) => {
		const textareaLineHeight = 24;
		
		const previousRows = event.target.rows;
  	    event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
            
		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}
    
		// setVal(event.target.value);
		
        (currentRows < maxRows) ? setRows(currentRows) : setRows(maxRows);
	};
	const twoCalls = e => {
		handleChange(e);
		props.onChange(e);
	  }

	return (
		<Textarea
			type='text'
			rows={rows}
			value={props.value}
			name={props.name}
			placeholder={props.placeholder}
			onChange={twoCalls}
		/>
	);
}
const Textarea = styled.textarea`
	box-sizing: border-box;
	border: none;
	border-radius: 3px;
	resize: none;
	font-size: 1.2rem;
	line-height: 24px;
	overflow: auto;
	height: auto;
	padding: 8px;
	-webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.78);
	-moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.78);
	box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.78);
	background: aliceblue;	
	&:placeholder{
		color: gainsboro;
	}
	
	&:focus{
		outline: none
	}
`
export default ResizableTextarea;


