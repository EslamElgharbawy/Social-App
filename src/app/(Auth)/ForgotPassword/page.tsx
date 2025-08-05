"use client";

import { Box, Typography, Button, TextField, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ForgotPasswordPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#FAFBFF",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Back Button */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          position: "absolute",
          top: 40,
          left: 80,
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon sx={{ color: "#5D6778", fontSize: 20 }} />
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#5D6778",
            lineHeight: "24.5px",
          }}
        >
          Back
        </Typography>
      </Stack>

      {/* Card */}
      <Box
        sx={{
          width: 384,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.01)",
          outline: "1px solid #ECF0F5",
          outlineOffset: "-1px",
          px: 4,
          pt: 3,
          pb: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Box
            component="img"
            src="/Vector.svg"
            alt="Logo"
            sx={{ width: 40, height: 40 }}
          />
          <Typography sx={{ fontSize: 25, fontWeight: 1000, color: "#0C1024" }}>
            Social
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
            color: "#0C1024",
            textAlign: "center",
          }}
        >
          Forgot password
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: 14,
            color: "#5D6778",
            textAlign: "center",
            lineHeight: "24.5px",
            maxWidth: 270,
          }}
        >
          Enter your email to reset your password and access your account.
        </Typography>

        {/* Email Input */}
        <TextField
          variant="outlined"
          placeholder="Email"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "6px",
              px: "10px",
            },
            "& input::placeholder": {
              color: "#707988",
              fontSize: 14,
              fontWeight: 400,
            },
          }}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: 44,
            bgcolor: "#0C1024",
            borderRadius: "6px",
            textTransform: "none",
            fontSize: 14,
            fontWeight: 500,
            ":hover": {
              bgcolor: "#1A1F3D",
            },
          }}
        >
          Send reset link
        </Button>
      </Box>
    </Box>
  );
}
