import React from 'react'

const ZakazButton = () => {
    return (
        <div className='fixed-action-btn'>
            <a href='#modal-zakaz'  style={{backgroundColor:'#ff0b0bb5', filter: 'drop-shadow(2px 4px 6px black)'}} className ='waves-effect waves-light large btn modal-trigger'>заказать экскурсию </a>
        </div>
    )
}

export default ZakazButton;
