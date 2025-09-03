"use client";
import { signUp } from "@/Features/user.slice";
import { useAppDispatch } from "@/hooks/Store.hooks";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import LoginBackground from "@/assets/images/Backgruond_img.svg";
import { date, object, ref, string } from "yup";

export default function SignUp() {
  const PasswordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const router = useRouter();
  const dispatsh = useAppDispatch();

  const validationSchema = object({
    name: string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
    password: string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .matches(
        PasswordRegex,
        "Password | Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: string()
      .min(6, "Password must be at least 6 characters")
      .required("Confirm Password is required")
      .oneOf([ref("password")], "Passwords must match"),

    dateOfBirth: date()
      .max(new Date(), "Date of birth cannot be in the future")
      .required("Date of birth is required"),

    gender: string()
      .oneOf(["male", "female"], "Please select a valid gender")
      .required("Gender is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    validationSchema,
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
          height: "100vh", 
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, 
          bgcolor: "#FAFBFF",
        }}
      >
        {/* Left blue section */}
        <Box
          sx={{
            position: "relative",
            bgcolor: "#3971FF",
            borderTopRightRadius: { lg: 50, xs: 0 },
            display: { xs: "none", lg: "flex" }, 
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            height: "100vh", 
          }}
        >
          {/* Background image */}
          <Box
            component="img"
            src={LoginBackground.src}
            alt="Background"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0.5,
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              px: 3,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 500,
                fontSize: { lg: 29, xl: 43 },
                lineHeight: 1.2,
                whiteSpace: "pre-line",
              }}
            >
              {"Let's make every day\nMeaningful together."}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: 500,
                fontSize: { lg: 14, xl: 16 },
                mt: 2,
              }}
            >
              "Building meaningful experiences together."
            </Typography>
          </Box>
        </Box>

        {/* Right white section (form) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            p: { xs: 3, sm: 5, md: 8, xl: 20 },
            overflowY: "auto", 
            height: "100vh", 
          }}
        >
          <Box sx={{ width: "100%", maxWidth: { xs: 300, sm: 500 } }}>
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
              ></Box>
              <Typography
                sx={{ fontSize: { xs: 20, md: 25 }, fontWeight: 1000 }}
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
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#171717",
                  fontWeight: 700,
                  fontSize: { xs: "25px", md: "28px", lg: "30", xl: "32px" },
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
                  fontSize: { xs: "13px", md: "14px", xl: "16px" },
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
                {formik.errors.name && formik.touched.name && (
                  <Typography
                    variant="body2"
                    color="error"
                    marginTop={1}
                    fontWeight={500}
                  >
                    {formik.errors.name}
                  </Typography>
                )}
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
                  label="Password"
                  type="password"
                  fullWidth
                  size="small"
                  name="password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
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
                {formik.errors.rePassword && formik.touched.rePassword && (
                  <Typography
                    variant="body2"
                    color="error"
                    marginTop={1}
                    fontWeight={500}
                  >
                    {formik.errors.rePassword}
                  </Typography>
                )}
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
                {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
                  <Typography
                    variant="body2"
                    color="error"
                    marginTop={1}
                    fontWeight={500}
                  >
                    {formik.errors.dateOfBirth}
                  </Typography>
                )}
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
                {formik.errors.gender && formik.touched.gender && (
                  <Typography
                    variant="body2"
                    color="error"
                    marginTop={1}
                    fontWeight={500}
                  >
                    {formik.errors.gender}
                  </Typography>
                )}
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
            <Typography
              align="center"
              sx={{ color: "#4B5669", fontSize: { xs: 12, md: 14 }, mt: 3 }}
            >
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
      </Box>
    </>
  );
}

