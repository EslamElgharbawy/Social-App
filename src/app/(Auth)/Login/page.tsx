"use client";
import LoginBackground from "@/assets/images/Backgruond_img.svg";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { login } from "@/Features/user.slice";
import { useAppDispatch } from "@/hooks/Store.hooks";
import { object, string } from "yup";
export default function LoginPage() {
  const validationSchema = object({
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
    password: string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const router = useRouter();
  const dispatsh = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatsh(login(values))
        .then((res) => {
          if (res.payload.message == "success") {
            setTimeout(() => {
              router.push("/");
            }, 1000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Left blue section */}
        <Box
          sx={{
            flex: 1,
            alignSelf: "stretch",
            p: { lg: 5, xl: 20 },
            bgcolor: "#3971FF",
            borderTopRightRadius: 50,
            display: { xs: "none", lg: "flex" },
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
              opacity: 0.5,
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
                fontSize: { lg: 29, xl: 45 },
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
                fontSize: { lg: 14, xl: 16 },
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
            flex: 1,
            alignSelf: "stretch",
            p: { xs: 3, sm: 5, md: 8, lg: 10, xl: 20 },
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", xl: "flex-start" },
            gap: 2,
          }}
        >
          <Box sx={{ width: "100%" }}>
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 2, md: 3 },
                gap: 1,
              }}
            >
              <Box
                component="img"
                src={"/Vector.svg"}
                alt="Logo"
                sx={{
                  width: { xs: 30, md: 40 },
                  height: { xs: 30, md: 40 },
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 25 },
                  fontWeight: 1000,
                }}
              >
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
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#171717",
                  fontWeight: 700,
                  fontSize: { xs: "26px", lg: "26px", xl: "32px" },
                  lineHeight: 1.3,
                }}
              >
                Log in to Your Account
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: { xs: "80%", lg: "100%" },
                  color: "#525252",
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "15px", xl: "16px" },
                  lineHeight: "1.6",
                }}
              >
                Welcome back! Choose your preferred sign-in method.
              </Typography>
            </Box>

            {/* Form inputs */}
            <form
              onSubmit={formik.handleSubmit}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
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
                  fullWidth
                  type="email"
                  placeholder="Email"
                  size="small"
                  variant="outlined"
                  name="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <Typography
                    variant="body2"
                    color="error"
                    marginTop={1}
                    fontWeight={500}
                  >
                    {formik.errors.email}
                  </Typography>
                )}
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
                  fullWidth
                  placeholder="Password"
                  size="small"
                  variant="outlined"
                  type="password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="password"
                />
                {formik.errors.password && formik.touched.password && (
                  <Typography
                    variant="body2"
                    color="error"
                    marginTop={1}
                    fontWeight={500}
                  >
                    {formik.errors.password}
                  </Typography>
                )}
              </Box>

              {/* Sign in button */}
              <Button
                fullWidth
                type="submit"
                sx={{
                  backgroundColor: "#3971FF",
                  color: "white",
                  textTransform: "none",
                  borderRadius: 1,
                  height: { xs: 40, md: 44 },
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#2C5ACC",
                  },
                }}
              >
                Sign in
              </Button>
            </form>

            {/* Signup prompt */}
            <Typography
              align="center"
              sx={{
                color: "#4B5669",
                fontSize: { xs: 12, md: 14 },
                mt: 3,
              }}
            >
              Don&apos;t have an account?{" "}
              <Typography
                component="span"
                sx={{
                  color: "#3971FF",
                  fontWeight: 800,
                  cursor: "pointer",
                  textDecoration: "underline",
                  ml: 0.5,
                }}
                onClick={() => router.push("/SignUp")}
              >
                Sign up
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
