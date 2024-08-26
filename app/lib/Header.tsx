import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Header(){
    return(
         <AppBar position="static">
        <Toolbar sx={{gap:2, justifyContent: "space-between", background:"white"}}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Stack flexDirection="row" flexGrow={1} gap={2}>
           <Typography variant="h6" component={Link} href="/" sx={{color: "black", textDecoration: "none"}}>
            NEXT.JS
          </Typography>

          <Typography variant="h6" component={Link} href="/showcase" sx={{color: "black", textDecoration: "none"}}>
            Showcase
          </Typography>
          <Typography variant="h6" component={Link} href="/docs" sx={{color: "black", textDecoration: "none"}}>
            Docs
          </Typography>
          <Typography variant="h6" component={Link} href="/blogs" sx={{color: "black", textDecoration: "none"}}>
            Blogs
          </Typography>
          </Stack>

          <Button variant='contained' component={Link} href='/learn' >Learn</Button>
        </Toolbar>
      </AppBar>
    );
}