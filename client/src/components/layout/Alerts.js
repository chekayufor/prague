import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import styled from 'styled-components'
const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <Alert key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </Alert>
    ))
  );
};

const Alert = styled.div`
    padding: 0.7rem;
    margin: 1rem 0;
    opacity: 0.9;
    background: var(--light-color);
    color: #333;
`

export default Alerts;
