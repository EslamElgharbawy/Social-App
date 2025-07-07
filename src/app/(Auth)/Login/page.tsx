'use client';

import {
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { login } from '@/Features/user.slice';
import { useAppDispatch } from '@/hooks/Store.hooks';

export default function page() {
    const router = useRouter()
    const dispatsh = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            dispatsh(login(values)).then((res) => {
                if (res.payload.message == "success") {
                    setTimeout(() => {
                        router.push("/")
                    }, 1500);

                }
            }).catch((error) => {
                console.log(error);
            })

        }
    })





    return <>
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
            }}
        >
            <Box
                sx={{
                    width: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 3,
                        gap: 1
                    }}
                >
                    <Box
                        component="img"
                        src={"/Vector.svg"}
                        alt="Logo"
                        sx={{
                            width: 40,
                            height: 40
                        }}

                    >

                    </Box>
                    <Typography sx={{ fontSize: 25, fontWeight: 1000 }}>
                        Social
                    </Typography>
                </Box>

                <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}>

                    {/* Email field */}
                    <TextField
                        fullWidth
                        type='email'
                        placeholder="Email"
                        size="small"
                        variant="outlined"
                        name='email'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />

                    {/* Password field */}
                    <TextField
                        fullWidth
                        placeholder="Password"
                        size="small"
                        variant="outlined"
                        type="password"
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        name='password'
                    />

                    {/* Forget password */}
                    <Typography
                        align="right"
                        sx={{
                            color: '#5D6778', fontSize: 12, cursor: 'pointer',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: '#0C1024',
                            },
                        }}
                    >
                        Forget Password?
                    </Typography>

                    {/* Login button */}
                    <Button
                        fullWidth
                        type='submit'
                        sx={{
                            backgroundColor: '#2A2E46',
                            color: 'white',
                            textTransform: 'none',
                            borderRadius: 1,
                            height: 44,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                backgroundColor: '#0C1024',
                            },
                        }}
                    >
                        Log in
                    </Button>
                </form>

                {/* Signup prompt */}
                <Typography align="center" sx={{ color: '#4B5669', fontSize: 14 }}>
                    Don't have an account?{' '}
                    <Typography
                        component="span"
                        sx={{
                            color: '#0C1024',
                            fontWeight: 500,
                            cursor: 'pointer',
                            ml: 0.5,
                        }}
                        onClick={() => router.push('/SignUp')}
                    >
                        Sign up
                    </Typography>
                </Typography>
            </Box>
        </Box>
    </>
}
