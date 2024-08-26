import { Container, Link, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function DocsLayout(props: PropsWithChildren){
    return(

    <Container sx={{display:'flex', paddingTop: 4}}>
        <Stack component="aside" gap={2}>
            <Link href="/docs/data-fetching" >Data Fetching </Link>
            <Link href="/docs/rendering"> Rendering </Link>
            <Link href="/docs/routing" >Routing</Link>
        </Stack>
        {props.children}
    </Container>
    );
}