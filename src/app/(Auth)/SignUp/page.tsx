// "use client";
// import { signUp } from "@/Features/user.slice";
// import { useAppDispatch } from "@/hooks/Store.hooks";
// import {
//   Box,
//   Button,
//   MenuItem,
//   TextField,
//   Typography
// } from "@mui/material";
// import { useFormik } from "formik";
// import { useRouter } from "next/navigation";

// export default function SignUp() {
//   const router = useRouter();
//   const dispatsh = useAppDispatch();

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//       rePassword: "",
//       dateOfBirth: "",
//       gender: "",
//     },
//     onSubmit: (values) => {
//       dispatsh(signUp(values))
//         .then((res) => {
//           if (res.payload.message == "success") {
//             setTimeout(() => {
//               router.push("/Login");
//             }, 1500);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   });

//   const currencies = [
//     {
//       value: "male",
//       label: "Male",
//     },
//     {
//       value: "female",
//       label: "Female",
//     },
//   ];

//   return (
//     <>
//       <Box
//         sx={{
//           minHeight: "100vh",
//           bgcolor: "#FAFBFF",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           p: 2,
//         }}
//       >
//         <Box
//           sx={{
//             width: 384,
//             bgcolor: { xl: "white" },
//             borderRadius: { xl: 2 },
//             boxShadow: { xl: "2px 2px 10px rgba(0, 0, 0, 0.01)" },
//             outline: { xl: "1px solid #ECF0F5" },
//             outlineOffset: { xl: "-1px" },
//             display: "flex",
//             flexDirection: "column",
//             px: 4,
//             pt: 3,
//             pb: 5,
//             gap: 2,
//           }}
//         >
//           {/* Header */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mb: 3,
//               gap: 1,
//             }}
//           >
//             <Box
//               component="img"
//               src={"/Vector.svg"}
//               alt="Logo"
//               sx={{
//                 width: 40,
//                 height: 40,
//               }}
//             ></Box>
//             <Typography sx={{ fontSize: 25, fontWeight: 1000 }}>
//               Social
//             </Typography>
//           </Box>

//           {/* Form Fields */}
//           <form
//             onSubmit={formik.handleSubmit}
//             style={{ display: "flex", flexWrap: "wrap", gap: 15 }}
//           >
//             <TextField
//               label="Name"
//               fullWidth
//               size="small"
//               type="text"
//               name="name"
//               value={formik.values.name}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//             />
//             <TextField
//               label="Email"
//               fullWidth
//               size="small"
//               type="email"
//               name="email"
//               value={formik.values.email}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//             />

//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               size="small"
//               name="password"
//               value={formik.values.password}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//             />
//             <TextField
//               label="rePassword"
//               fullWidth
//               size="small"
//               type="password"
//               name="rePassword"
//               value={formik.values.rePassword}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//             />
//             <TextField
//               fullWidth
//               size="small"
//               type="date"
//               name="dateOfBirth"
//               value={formik.values.dateOfBirth}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//             />
//             <TextField
//               fullWidth
//               name="gender"
//               select
//               label="Gender"
//               size="small"
//               value={formik.values.gender}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//             >
//               {currencies.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>

//             {/* Continue Button */}
//             <Button
//               fullWidth
//               type="submit"
//               sx={{
//                 backgroundColor: "#2A2E46",
//                 color: "white",
//                 textTransform: "none",
//                 borderRadius: 1,
//                 height: 44,
//                 transition: "all 0.2s ease",
//                 "&:hover": {
//                   backgroundColor: "#0C1024",
//                 },
//               }}
//             >
//               Continue
//             </Button>
//           </form>

//           {/* Already have account */}
//           <Typography textAlign="center" fontSize={14} color="#4B5669">
//             Have an account?
//             <Typography
//               component="span"
//               fontWeight={500}
//               sx={{ color: "#0C1024", ml: 0.5, cursor: "pointer" }}
//               onClick={() => router.push("/Login")}
//             >
//               Log In
//             </Typography>
//           </Typography>
//         </Box>
//       </Box>
//     </>
//   );
// }
"use client";
import { signUp } from "@/Features/user.slice";
import { useAppDispatch } from "@/hooks/Store.hooks";
import LoginBackground from "@/assets/images/Backgruond_img.svg";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

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
              "Building meaningful experiences together."
            </Typography>
          </Box>
        </Box>

        {/* Right white section */}
        <Box
          sx={{
            flex: 1,
            alignSelf: "stretch",
            px: 20,
            py: 10,
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

          {/* Form inputs */}
          <form
            onSubmit={formik.handleSubmit}
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
            }}
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
                Full Name
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
              label="Password"
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
              label="Password"
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

            {/* Date of birth field */}
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
                variant="outlined"
                type="date"
                fullWidth
                size="small"
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
                label="Gender"
                variant="outlined"
                fullWidth
                select
                size="small"
                name="gender"
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
            </Box>

            {/* Sign Up button */}
            <Button
              fullWidth
              type="submit"
              sx={{
                backgroundColor: "#4C68D5",
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
              Sign Up
            </Button>
          </form>

          {/* Already have account */}
          <Typography textAlign="center" fontSize={14} color="#4B5669">
            Have an account?
            <Typography
              component="span"
              fontWeight={500}
              sx={{
                textDecoration: "underline",
                color: "#0C1024",
                ml: 0.5,
                cursor: "pointer",
              }}
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
