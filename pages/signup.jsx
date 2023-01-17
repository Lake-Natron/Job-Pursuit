import Link from 'next/link';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link as MuiLink } from '@mui/material/Link';
import Radio from '@mui/material/Radio';


const Signup = () => {
  const [signUpAs, setSignUpAs] = useState(null);

  return (
    <Container maxWidth='xs'>
      {!signUpAs && <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        Are you looking to sign up as a Job-Seeker or a Company?
        <Box
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
          <Button variant="contained" sx={{ margin: '10px' }} onClick={() => {setSignUpAs('seeker')}} >Job Seeker</Button>
          <Button variant="contained" sx={{ margin: '10px' }} onClick={() => {setSignUpAs('employer')}}>Employer</Button>
        </Box>
      </Box>}
    </Container>
  );
};

export default Signup;