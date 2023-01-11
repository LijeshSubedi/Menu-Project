
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" sx={{color:"#e1dfdf"}}>
      {'Copyright © '}
      <Link color="inherit" href="localhost:3000">
        Hotel FOOD-GASM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <>
    <Box textAlign="center" sx={{color:"#e1dfdf", bgcolor:"#224"}}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      }}
    >
      
    
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Deepak Sharma & Lijesh Subedi
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
    </Box>
    </>
  )
}

export default Footer