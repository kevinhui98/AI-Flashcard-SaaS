import { Nav } from "../../components/nav"
import { Grid, Typography, Box } from "@mui/material"
import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
    return (
        <Grid bgcolor={'#F6F6F2'}>
            <Nav />
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} pt={10}>
                <SignIn />
            </Box>
        </Grid>
    )
}