'use client'
import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useFormik } from 'formik';
import { useAppDispatch } from "@/hooks/Store.hooks";
import { SignUp } from "@/Features/user.slice";

export default function page() {
  const router = useRouter()
  const dispatsh = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: ""
    },
    onSubmit: (values) => {
      dispatsh(SignUp(values)).then((res) => {
        if (res.payload.message == "success") {
          setTimeout(() => {
            router.push("/Login")
          }, 1500);

        }
      }).catch((error) => {
        console.log(error);

      })
    }
  })

  const currencies = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
  ];


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

        {/* Form Fields */}
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}>
          <TextField
            label="Name"
            fullWidth size="small"
            type="text"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <TextField
            label="Email"
            fullWidth size="small"
            type="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            size="small"
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <TextField
            label="rePassword"
            fullWidth
            size="small"
            type="password"
            name="rePassword"
            value={formik.values.rePassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <TextField
            fullWidth
            size="small"
            type="date"
            name="dateOfBirth"
            value={formik.values.dateOfBirth}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}

          />
          <TextField
            fullWidth
            name="gender"
            select
            label="Gender"
            size="small"
            value={formik.values.gender}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/* Terms & Conditions */}
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "#E2E8F0" }} />}
            label={
              <Typography sx={{ fontSize: 14, color: "#5D6778" }}>
                I agree to the <b>Terms</b> and <b>Privacy Policy</b>.
              </Typography>
            }
          />

          {/* Continue Button */}
          <Button
            fullWidth
            type="submit"
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
            Continue
          </Button>
        </form>

        {/* Already have account */}
        <Typography textAlign="center" fontSize={14} color="#4B5669">
          Have an account?
          <Typography
            component="span"
            fontWeight={500}
            sx={{ color: "#0C1024", ml: 0.5, cursor: "pointer" }}
            onClick={() => router.push('/Login')}
          >
            Log In
          </Typography>
        </Typography>
      </Box>
    </Box>

  </>
}
