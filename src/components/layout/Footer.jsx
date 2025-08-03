import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        textAlign: 'center',
        padding: 2,
        marginTop: 4,
      }}
      component="footer"
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Watch Sitcom. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
