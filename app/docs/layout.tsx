import { Container, Link, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function DocsLayout(props: PropsWithChildren){
    return(

    <Container sx={{display:'flex', paddingTop: 4}}>
        <Stack component="aside" gap={2}>
            <Link href="/docs/data-fetching" >Data Fetching </Link>
            <Link href="/docs/rendering"> Rendering </Link>
            <Link href="/docs/routing" >Routing</Link>

            {/* <Link href="/docs/styling"> Styling LInk</Link>
            <Link href="/docs/optimizing" >Optimizing LInk</Link>
            <Link href="/docs/configuring" >Configuring LInk</Link>
            <Link href="/docs/testing" >Testing LInk</Link> */}
        </Stack>
        {props.children}
    </Container>
    );
}