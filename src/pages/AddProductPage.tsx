import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import NavBar from '../components/NavBar';
import AddProduct from '../components/AddProducts';
import useAuthState from '../Auth/useAuthState';
import { useHistory } from 'react-router-dom';

const AddProductPage: React.FC = () => {
  const { loggedIn } = useAuthState();
  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      history.push('/');
    }
  }, [history, loggedIn]);

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" disableGutters>
        <AddProduct />
      </Container>
    </>
  );
};

export default AddProductPage;
