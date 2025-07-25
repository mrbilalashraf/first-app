import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';

export default function Home() {
  const [bgColor, setBgColor] = useState('#ffffff'); // default background
  const [color, setColor] = useState('#ffffff');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBgColor(color);
  };

  return (
    <MDBContainer className='d-flex justify-content-center align-items-center min-vh-100'>
      <MDBCard style={{ maxWidth: '400px', width: '100%', backgroundColor: bgColor }}>
        <MDBCardBody>
          <form onSubmit={handleSubmit}>
            <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' />
            <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' />

            <MDBRow className='mb-4'>
              <MDBCol className='d-flex justify-content-center'>
                <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
              </MDBCol>
              <MDBCol>
                <a href='#!'>Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <label htmlFor='colorPicker' className='form-label'>
              Pick Background Color
            </label>
            <input
              id='colorPicker'
              type='color'
              className='form-control form-control-color mb-4'
              value={color}
              onChange={(e) => setColor(e.target.value)}
              title='Choose your color'
            />

            <MDBBtn type='submit' block>
              Change Background Color
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
