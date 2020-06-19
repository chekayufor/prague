import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TourContext from '../../context/tour/tourContext';
import ResizableTextarea from '../layout/ResizableTextarea';
import FileInput from '../layout/FileInput'
// import InputCost from '../layout/InputCost';
import Emoji from '../layout/Emoji'

const TourForm = () => {
    const [pic, setPic] = useState([]);
    const [tour, setTour] = useState({
      name:'',
      section:'',
      text:'',
      img:'',
      cost1:'',
      cost2:'',
      cost3:'',
      cost4:'',
      duration:'',
      included:'',
      unincluded:'',
      necessary:'',
      location:'',
      language:'',
      type:'',
      start:''
});
  // const pictureRef = useRef(null);

    const tourContext = useContext(TourContext);
    const { addTour, updateTour, clearCurrent, current, pictures, loading, deletePicture, setPictures } = tourContext;

    console.log({pictures})

  useEffect(() => {
    if (current !== null) {
      setTour(current);
      setTimeout(()=>{if(current.img!==null) setPictures(current.img)}, 300);
    } else {
      setTour(tour);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const { name, section,text, img, cost1,cost2,cost3,cost4,duration,included,unincluded,necessary,location,language,type,start } = tour;

  const onChange = e => {
    console.log(e.target.value );
    if (e.target.value === '')  e.target.value = null;
    setTour({ ...tour, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault();
    const newTour = { ...tour, img:pictures };
    setTour(newTour);
    if (current === null) {
      addTour(newTour);
    } else {
      updateTour(newTour);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
    setTour({
      name:'',
      section:'',
      text:'',
      img:[],
      cost1:'',
      cost2:'',
      cost3:'',
      cost4:'',
      duration:'',
      included:'',
      unincluded:'',
      necessary:'',
      location:'',
      language:'',
      type:'',
      start:''
    })
  };

  const deleteItem = index => {
    const newInventory = pictures.filter(
      (item, itemIndex) => index !== itemIndex
    );
    return setPictures([...newInventory]);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <h4>
        {current ? 'Изменить Экскурсию' : 'Добавить экскурсию'}
      </h4>
      <Label> Название Экскурсии:
        <Input
          type='text'
          name='name'
          value={name || ''}
          onChange={onChange}
        />
      </Label>
      <Label> Раздел:</Label>
        <p>
          <label>
            <input
            className='browser-default'
              type='radio'
              name='section'
              value='Экскурсии по Европе'
              checked={section === 'Экскурсии по Европе'}
              onChange={onChange}
            />
            <span>Экскурсии по Европе</span>
          </label>
        </p>
        <p>
          <label>
            <input
              type='radio'
              name='section'
              value='Экскурсии по Праге'
              checked={section === 'Экскурсии по Праге'}
              onChange={onChange}
            />
            <span>Экскурсии по Праге</span>
          </label>
        </p>
        <p>
          <label>
            <input
              type='radio'
              name='section'
              value='Экскурсии по Чехии'
              checked={section === 'Экскурсии по Чехии'}
              onChange={onChange}
            />
            <span>Экскурсии по Чехии</span>
          </label>
        </p>
        <p>
          <label>
            <input
              type='radio'
              name='section'
              value='услуги'
              checked={section === 'услуги'}
              onChange={onChange}
            />
            <span>Услуги</span>
          </label>
        </p>
      <Label> Описание экскурсии:
        <ResizableTextarea
        type='text'
        placeholder='описание экскурсии'
        name='text'
        value={text}
        onChange={onChange}
        />
      </Label>
      <Label> Продолжительность экскурсии:
        <Input
          type='text'
          // placeholder='продолжительность экскурсии'
          name='duration'
          value={duration}
          onChange={onChange}
        />
      </Label>
      <LabelCost> Стоимость:
      <p>
        <label>
        Цена за 1-3 чел:
        <Input
            type='text'
            name='cost1'
            value={cost1}
            onChange={onChange}
          />
          </label>
        </p>
        <p>
          <label>
          Цена за 4-7 чел:
            <Input
              type='text'
              name='cost2'
              value={cost2}
              onChange={onChange}
            />
          </label>
        </p>
        <p>
          <label>
          Цена за 8-15 чел:
            <Input
              type='text'
              name='cost3'
              value={cost3}
              onChange={onChange}
          />
        </label>
        </p>
        <p>
          <label> Цена за 16 и более чел:
            <Input
              type='text'
              name='cost4'
              value={cost4}
              onChange={onChange}
            />
          </label>
        </p>
      </LabelCost>
      <Label> Включено в стоимость:
        <Input
          type='text'
          name='included'
          value={included}
          onChange={onChange}
        />
      </Label>
      <Label> Не включено в стоимость экскурсии:
        <Input
          type='text'
          // placeholder='не включено в стоимость экскурсии'
          name='unincluded'
          value={unincluded}
          onChange={onChange}
        />
      </Label>
      <Label> Необходимо иметь при себе:
        <Input
          type='text'
          // placeholder='необходимо иметь при себе'
          name='necessary'
          value={necessary}
          onChange={onChange}
        />
      </Label>
      <Label> Место встречи:
        <Input
          type='text'
          // placeholder='место встречи'
          name='location'
          value={location}
          onChange={onChange}
        />
      </Label>
      <Label> Время начала экскурси:
        <Input
          type='text'
          // placeholder='время начала экскурсии'
          name='start'
          value={start}
          onChange={onChange}
        />
      </Label>
      <Label> Язык:
      <Input
          type='text'
          // placeholder='время начала экскурсии'
          name='language'
          value={language}
          onChange={onChange}
          />
      </Label>
      <Label> Вид экскурсии:</Label>
      <p>
        <label>
          <input
          className='browser-default'
            type='radio'
            name='type'
            value='europe'
            checked={type === 'europe'}
            onChange={onChange}
          />
          <span>Европа</span>
        </label>
      </p>
      <p>
        <label>
          <input
            type='radio'
            name='type'
            value='prague'
            checked={type === 'prague'}
            onChange={onChange}
          />
          <span>Прага</span>
        </label>
      </p>
      <p>
        <label>
          <input
            type='radio'
            name='type'
            value='czech'
            checked={type === 'czech'}
            onChange={onChange}
          />
          <span>Чехия</span>
        </label>
      </p>
      <p>
        <label>
          <input
            type='radio'
            name='type'
            value='transfer'
            checked={type === 'transfer'}
            onChange={onChange}
          />
          <span>Трансфер</span>
        </label>
      </p>

      <FileInput pic={pic} setPic={setPic}/>
      <div>
        <ul>
          {pictures && pictures !== null && pictures.length!== 0? (pictures.map((i, index) => (
              <PicContainer key={index} >
                  <img width='auto' height='150' alt={i.filename} src={i.path.replace(/^\.\.\/client\/public/, '')}/>
                  <p>{i.filename}</p>
                 <DeleteButton onClick={e => {
                    e.preventDefault();
                    deleteItem(index);
                    // deletePicture(i.filename)
                  }}>
                    X
                    </DeleteButton>
              </PicContainer>
            ))):(
              <p style={{fontFamily:'cursive'}}>Нет загруженных фотографий</p>
            )
          }
          </ul>
      </div>
    <ButtonContainer>
      <div>
        <Input
          type='submit'
          value={current ? 'Изменить' : 'Добавить'}
          style={{background:'#6dc43a', height:'50px',color: 'white', width:'100px'}}
        />
      </div>
      {current && (
        <div>
          <button onClick={clearAll} style={{background:'rgb(255, 0, 0)', height:'50px', color: 'white',width:'100px'}}>
            Очистить поля
          </button>
        </div>
        
      )}
    </ButtonContainer>
    </FormContainer>
  );
};

const FormContainer= styled.form`
  display:grid;
  min-height:100vh;
  height:fit-content;
`
const Label = styled.label`
  margin-top:20px;
  font-size:1.2rem;
`
const LabelCost = styled.label`
  display:grid;
  margin-top:20px;
  font-size:1.2rem;
  label {
    padding-left:30px;
    padding-top:20px;
    font-size:1rem;

  }
`
const Input = styled.input`
  background:#0000000d;

`
const ButtonContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  margin-top: 30px;
  align-items: center;
  justify-items: start;
`
const PicContainer=styled.li`
    display:grid;
    grid-template-columns: 2fr 2fr 0.5fr;
    align-items: center;
    justify-items: self-start;
    padding: 5px 5px;
`
const DeleteButton = styled.button`
    justify-self: self-end;
    height: 20px;
    width: 20px;
    border: none;
    color:red;
    font-weight:900;
    font-size: 1.4rem;
    background: none;
`
export default TourForm;
