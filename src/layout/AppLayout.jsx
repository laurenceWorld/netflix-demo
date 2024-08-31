import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const navigate = useNavigate();

  const goHomepage = () => {
    navigate('/');
  };
  const goMoviesPage = () => {
    navigate('/movies');
  };

  return (
    <div>
      <Navbar
        expand='lg'
        className='bg-body-tertiary'
        // bg='dark'
        // data-bs-theme='dark'
      >
        <Container fluid>
          <Navbar.Brand>
            <img
              width={100}
              src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg'
              alt='netflix-logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={goHomepage}>Home</Nav.Link>
              <Nav.Link onClick={goMoviesPage}>Movies</Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-danger'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
