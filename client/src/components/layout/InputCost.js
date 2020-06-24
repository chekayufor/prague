import React, {useEffect, useContext} from 'react';
import styled from 'styled-components'
import TourContext from '../../context/tour/tourContext';

const InputCost= ({tourCost, setTourCost, cost})=> {
    const tourContext = useContext(TourContext);
    const {current } = tourContext;

    useEffect(()=> {
        if (current !== null && cost) setTourCost(cost);
        else setTourCost([]);
        // eslint-disable-next-line
    },[current, cost]);

    const handleChange = (e)=> {
        e.preventDefault();
        setTourCost( {...tourCost, [e.target.name]: e.target.value} )
    }
    //  console.log('Object.values(tourCost)', Object.values(tourCost))
  return (
    <Form >
        <label> Цена за 1-3 чел:
        <InputText 
            type='text'
            name='tourCost[0]'
            value={tourCost[0]}
            onChange={handleChange}
        />
        </label>
        <label> Цена за 4-7 чел:
            <InputText 
                type='text'
                name='tourCost[1]'
                value={tourCost[1]}
                onChange={handleChange}
            />
        </label>
        <label> Цена за 8-15 чел:
            <InputText 
                type='text'
                name='tourCost[2]'
                value={tourCost[2]}
                onChange={handleChange}
            />
        </label>
        <label> Цена за 16 и более чел:
            <InputText 
                type='text'
                name='tourCost[3]'
                value={tourCost[3]}
                onChange={handleChange}
            />
        </label>  
    </Form>
    )

 
}
const Form = styled.div`
    display:grid;
`
const InputText = styled.input`
    margin-left:20px;   
 `
export default InputCost;

