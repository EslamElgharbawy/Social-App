"use client";
import { signUp } from "@/Features/user.slice";
import { useAppDispatch } from "@/hooks/Store.hooks";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import LoginBackground from "@/assets/images/Backgruond_img.svg";

export default function SignUp() {
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
      dispatsh(signUp(values))
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
          width: "100%",
          minHeight: "100vh",
          overflowY: "auto",
          scrollbarGutter: "stable",
          bgcolor: "#FAFBFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Pretendard, sans-serif",
        }}
      >
        {/* Left blue section */}
        <Box
          sx={{
            flex:1,
            alignSelf: "stretch",
            py: 20,
            bgcolor: "#3971FF",
            borderTopRightRadius: 50,
            display: { xs: "none", xl: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background image with opacity */}
          <Box
            component="img"
            src={LoginBackground.src}
            alt="Background"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              opacity: 0.3,
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 500,
                lineHeight: 1.2,
                textAlign: "center",
                whiteSpace: "pre-line",
                fontSize: 45,
              }}
            >
              {"Let's make every day\nMeaningful together."}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "white",
                fontWeight: 500,
                lineHeight: 1.2,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              &quot;Building meaningful experiences together.&quot;
            </Typography>
          </Box>
        </Box>

      {/* Right white section */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            p: 20,
            gap: 2,
          }}
        >
          {/* Logo */}
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

          {/* Heading and subheading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
              gap: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#171717",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: 1.2,
              }}
            >
              Create Your Account
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#525252",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Join us and start your journey today.
            </Typography>
          </Box>

          {/* Form Fields */}
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexWrap: "wrap", gap: 20 }}
          >
            {/* Name field */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#262626",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                }}
              >
                Name
              </Typography>
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
            </Box>

            {/* Email field */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#262626",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                }}
              >
                Email
              </Typography>
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
            </Box>

            {/* Password field */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#262626",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                }}
              >
                Password
              </Typography>
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
            </Box>

            {/* Confirm Password field */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#262626",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                }}
              >
                Confirm Password
              </Typography>
              <TextField
                label="Confirm Password"
                fullWidth
                size="small"
                type="password"
                name="rePassword"
                value={formik.values.rePassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Box>

            {/* Date Of Birth field */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#262626",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                }}
              >
                Date Of Birth
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="date"
                name="dateOfBirth"
                value={formik.values.dateOfBirth}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Box>

            {/* Gender field */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#262626",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                }}
              >
                Gender
              </Typography>
              <TextField
                fullWidth
                name="gender"
                select
                label="Gender"
                size="small"
                value={formik.values.gender}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                slotProps={{
                  select: {
                    MenuProps: {
                      disableScrollLock: true,
                      keepMounted: true,
                    },
                  },
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {/* Continue Button */}
            <Button
              fullWidth
              type="submit"
              sx={{
                backgroundColor: "#3971FF",
                color: "white",
                textTransform: "none",
                borderRadius: 1,
                height: 44,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#2C5ACC",
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
              sx={{
                color: "#3971FF",
                fontWeight: 800,
                cursor: "pointer",
                textDecoration: "underline",
                ml: 0.5,
              }}
              onClick={() => router.push("/Login")}
            >
              Sign In
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
