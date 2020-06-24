
import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components'
import TourContext from '../../context/tour/tourContext';
import Emoji from '../layout/Emoji'

const AuthTour = ({ tour }) => {
  const tourContext = useContext(TourContext);
  const { deleteTour, setCurrent, clearCurrent } = tourContext;

  const {_id, name, section,text, img, cost1,cost2,cost3,cost4,start,duration,included,unincluded,necessary,location,language,type} = tour;

  const [open, setOpen] = useState(false);
  const refContainer=useRef(_id)
  const onDelete = () => {
    deleteTour(_id);
    clearCurrent();
  };
  const onOpen = () => {
    setOpen(!open);
  }

  return (
    <Container ref={refContainer}>
      <h3 style={{fontSize:'1.4rem', textAlign:'start'}}>
        {name}
        {(!open) ? (<Button style={{background:'none'}} onClick={onOpen}><Emoji symbol='✅' label="button"/></Button>) : (<Button style={{background:'none'}} onClick={onOpen}><Emoji symbol='❎' label='button'/></Button>)
      }
      </h3>
      {open && <div>
          <Ul>
          {section && (
            <LiSection>
            <h6>{section.charAt(0).toUpperCase() + section.slice(1)}</h6>
            </LiSection>
          )}
          {text && (
            <li>
            {text}
            </li>
          )}
          {cost1 && (
            <p>
              Цена за 1-3 чел:
              <li>
              {cost1}
              </li>
            </p>
          )}
          {cost2 && (
            <p>
              Цена за 4-7 чел:
              <li>
              {cost2}
              </li>
            </p>
          )}
          {cost3 && (
            <p>
              Цена за 8-15 чел:
              <li>
              {cost3}
              </li>
            </p>
          )}
          {cost4 && (
            <p>
              Цена за 16 и более чел:
              <li>
              {cost4}
              </li>
            </p>
          )}
          {duration && (
            <p>
              Продолжительность экскурсии:
              <li>
              {duration}
              </li>
            </p>
          )}
          {included && (
            <p>
              Включено в стоимость:
              <li>
              {included}
              </li>
            </p>
          )}
          {unincluded && (
            <p>
              Не включено в стоимость экскурсии:
              <li>
              {unincluded}
              </li>
            </p>
          )}
          {location && (
            <p>
              Место встречи:
              <li>
              {location}
              </li>
            </p>
          )}
          {necessary && (
            <p>
              Необходимо иметь при себе:
              <li>
              {necessary}
              </li>
            </p>
          )}
          {language && (
            <p>
              Язык: 
              <li>
              {language}
              </li>
            </p>
          )}
          {type && (
            <p>
              Вид экскурсии:
              <li>
              {type}
              </li>
            </p>
          )}
          {start && (
            <p>
            Время начала экскурси:
            <li>
            {start}
            </li>
            </p>
          )}
          {img && (
            (!Array.isArray(img))?(
              <li key={img.name}><img  alt={img.name} src={img}/></li>):(
              <ul>
                {img.map((i, index) => (
                    <div key={index}>
                      <li key={i.name}><img  alt={i.name} src={i}/></li>
                    </div>
                  ))
                }
              </ul>)  
          )}
          </Ul>
        </div>
        }
      <p>
        <button
        style={{background:'#6dc43a', color: 'white'}}
          onClick={() => setCurrent(tour)}
        >
          Edit
        </button>
        <button  
          style={{background:'rgb(255, 0, 0)', color: 'white'}}
          onClick={onDelete}>
          Delete
        </button>
      </p>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid black;
  padding-left: 10px;
  margin: 5px;
`
const Button = styled.button`
  border:none;
  transition: all .4s;
  font-size:1.2rem;
  cursor: pointer;
  background-color:none;
  &&:focus {
    outline: none;
    background-color: none;
  }
`
const Ul = styled.ul`
li{
  font-weight:normal;
}
p{
  display: grid;
  justify-items: start;
  font-weight:bolder;
}
`
const LiSection = styled.li`
  font-size:1rem;
  text-align:start;
` 

export default AuthTour;

// { arr.reduce((acc, current, index) => {
//   console.log(current, cost[index])
//  return [...acc, current, cost[index]]
// }, []).map((x, i) => <p key={i}>{x}</p>)
// }