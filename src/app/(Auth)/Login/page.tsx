"use client";
import LoginBackground from "@/assets/images/Backgruond_img.svg";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { login } from "@/Features/user.slice";
import { useAppDispatch } from "@/hooks/Store.hooks";
export default function LoginPage() {
  const router = useRouter();
  const dispatsh = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
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
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      {/* Left blue section */}
      <Box
        sx={{
          flex: 1,
          alignSelf: "stretch",
          p: 20,
          bgcolor: "#3971FF",
          borderTopRightRadius: 50,
          display: "flex",
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
          flex: 1,
          alignSelf: "stretch",
          p: 20,
          bgcolor: "white",
          borderBottomLeftRadius: 50,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
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
            Log in to Your Account
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
            Welcome back! Choose your preferred sign-in method.
          </Typography>
        </Box>

        {/* Form inputs */}
        <form
          onSubmit={formik.handleSubmit}
          style={{ width: "100%", display: "flex", flexWrap: "wrap", gap: 20 }}
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
              height: 44,
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
        <Typography align="center" sx={{ color: "#4B5669", fontSize: 14 }}>
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
  );
}
