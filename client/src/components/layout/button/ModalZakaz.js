import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import AlertContext from '../../../context/alert/alertContext';


import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const ModalZakaz = () => {
    const[name, setName]=useState('')
    const[tel, setTel]=useState('')
    const[email, setEmail]=useState('')
    const[date, setDate]=useState('')
    const[text, setText]=useState('')

    // const alertContext = useContext(AlertContext);
    // const { setAlert } = alertContext;

    useEffect(() => {
        M.AutoInit();
        // eslint-disable-next-line
    }, [])

    const onSubmit = (e) =>{
        e.preventDefault();

        axios.post('/api/send', { name, tel, email, date, text })
            .then(res => {
                console.log('Server received the message');
                console.log('res.data', res.data);
                M.toast({html: 'Ваше сообщение отправлено'});
            })
            
    }; 

    return (
        <Container id='modal-zakaz' className='modal' >
            <div className="modal-content">
                <h4 style={{textAlign:'center'}}>Заказать экскурсию</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input type="text" id='name' name='name' value={name} onChange={e=>setName(e.target.value)}/>
                        <label htmlFor="name" className='active'>Имя</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">date_range</i>
                        <span></span>
                        <DatePicker dateFormat="yyyy/MM/dd"  onChange={date=>setDate(date)} selected={date} className='red-border'/>
                        <label htmlFor="date" className='active'> Дата</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <input type="text" id='tel' name='tel' value={tel} onChange={e=>setTel(e.target.value)}/>
                        <label htmlFor="tel" className='active'>Телефон</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input type="text"  id='email' name='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                        <label htmlFor="email" className='active'>Электронная почта</label>
                    </div>
                </div>

                    <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="text"  type="text" name='text' value={text} onChange={e=>setText(e.target.value)} className="materialize-textarea"></textarea>
                        <label htmlFor="text">Дополнительная информация</label>
                        </div>
                    </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className ='modal-close waves-effect waves-light btn-flat'>
                    <i className="material-icons right">Отправить</i>
                </a>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width:85%;
    height:85%;
    @media (min-width: 600px) {
        width:65%;
        height:65%;
    }
`
export default ModalZakaz;
