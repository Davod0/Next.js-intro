import { Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container component="main">
       <Stack sx={{textAlign:"center", gap: 5, marginY: 5}}>
      <Typography variant="h1"  fontWeight={900}>
        The React Framework for the web
      </Typography>

      <Typography variant="h6">
      Used by some of the world's largest companies, Next.js enables you 
      to create high-quality web applications with the power of React components.
      </Typography>
      
    
    </Stack>
    </Container>
   
  );
}
