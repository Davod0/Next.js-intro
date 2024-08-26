import { Button, Container, Stack, Typography } from "@mui/material";

export default function Showcase() {
  return (
    <Container component="main">
       <Stack sx={{textAlign:"center", gap: 5, marginY: 5, alignItems:"center"}}>
      <Typography variant="h1" fontWeight={900} >
        The web framework for when it matters
      </Typography>

      <Typography variant="h6">
        Peerless performance, efficiency and developer experience. 
        Next.js is trusted by some of the biggest names of the web.
      </Typography>

      <Stack flexDirection="row" gap={4}>
        <Button variant="contained" >
            Get started
        </Button>
        <Button variant="contained" >
          Learn about maneged next.js
        </Button>
      </Stack>
    
    </Stack>
    </Container>
  );
}
