"use client";
import { SignUp } from "@/Features/user.slice";
import { useAppDispatch } from "@/hooks/Store.hooks";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const dispatsh = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    onSubmit: (values) => {
      dispatsh(SignUp(values))
        .then((res) => {
          if (res.payload.message == "success") {
            setTimeout(() => {
              router.push("/Login");
            }, 1500);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const currencies = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#FAFBFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: 384,
            bgcolor: { xl: "white" },
            borderRadius: { xl: 2 },
            boxShadow: { xl: "2px 2px 10px rgba(0, 0, 0, 0.01)" },
            outline: { xl: "1px solid #ECF0F5" },
            outlineOffset: { xl: "-1px" },
            display: "flex",
            flexDirection: "column",
            px: 4,
            pt: 3,
            pb: 5,
            gap: 2,
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={"/Vector.svg"}
              alt="Logo"
              sx={{
                width: 40,
                height: 40,
              }}
            ></Box>
            <Typography sx={{ fontSize: 25, fontWeight: 1000 }}>
              Social
            </Typography>
          </Box>

          {/* Form Fields */}
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexWrap: "wrap", gap: 15 }}
          >
            <TextField
              label="Name"
              fullWidth
              size="small"
              type="text"
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <TextField
              label="Email"
              fullWidth
              size="small"
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

            {/* Continue Button */}
            <Button
              fullWidth
              type="submit"
              sx={{
                backgroundColor: "#2A2E46",
                color: "white",
                textTransform: "none",
                borderRadius: 1,
                height: 44,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#0C1024",
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
              onClick={() => router.push("/Login")}
            >
              Log In
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
