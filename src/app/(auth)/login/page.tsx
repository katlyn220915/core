"use client";
import { useContext } from 'react';
import AuthContext from '@/provider/authProvider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import styles from "./page.module.css"
// import { styled } from '@mui/material/styles';

// const CustomTextField = styled(TextField)({
//     '& .mui-1ll44ll-MuiOutlinedInput-notchedOutline': {
//         borderColor: "#fff"
//     },
// })

export default function Login() {
    const value = useContext(AuthContext);
    const { isLoading, accessToken, isLogin } = value;

    return <Box sx={{}}>

        {isLoading && <div>Loading...</div>}
        {isLogin && <div>Access successfully, your accessToken is {accessToken}</div>}
        {!isLogin && !isLoading && <div>Access denied</div>}
        <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: "500px", margin: "300px auto;" }}>
            <Stack spacing={2}>
             <TextField id="outlined-basic" label="Email" variant="outlined" className={styles.input} sx={{borderColor: "#fff"}} />
             <TextField id="outlined-basic" label="Password" variant="outlined" />
            </Stack>
        </Box>
    </Box>
}
