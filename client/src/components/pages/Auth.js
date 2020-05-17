import React, {useEffect, useContext} from 'react';
import styled from 'styled-components'
import AuthTours from '../tours/AuthTours'
import TourForm from '../tours/TourForm'
import TourFilter from '../tours/TourFilter'
import AuthContext from '../../context/auth/authContext'


const Auth = () => {
  const authContext = useContext(AuthContext);
  
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  
    return (
      <Container>
        <ColumnL>
          <TourForm />
        </ColumnL>
        <ColumnR>
          <TourFilter />
          <AuthTours />
        </ColumnR>
    </Container>
  );
}

const Container = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  margin-bottom:20px;
  height:100%;
`
const ColumnL = styled.div`
  display: grid;
  margin-top:120px;
  padding:20px 40px; 
`
const ColumnR = styled.div`
  display: grid;
  margin-top:120px;
  padding:20px 40px; 
  grid-template-rows: 100px auto;
`
export default Auth;
