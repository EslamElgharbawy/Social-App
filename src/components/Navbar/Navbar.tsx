"use client";
import { logout } from "@/Features/user.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Typography
} from "@mui/material";

export default function Navbar() {
  const { user } = useAppSelector((store) => store.UserInfoReducer);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/Login";
  };
  return (
    <>
      {/* Top AppBar*/}
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          borderBottom: "1px solid #ECF0F5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 2,
            px: { xs: 2, xl: 6 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={"/Logomark.svg"}
              alt="Logo"
              sx={{
                width: 40,
                height: 40,
              }}
            />
            <Typography variant="h5" fontWeight={800} color="#0C1024">
              Social
            </Typography>
          </Box>
          <Button
            onClick={handleLogout}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              color: "#27364B",
            }}
          >
            <Typography
              fontWeight={600}
              fontSize={18}
              sx={{
                fontFamily: "Inter, sans-serif",
                textTransform: "initial",
                pr: 1,
              }}
            >
              logout
            </Typography>
            <Box
              sx={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src={user?.photo}
                sx={{
                  width: 40,
                  height: 40,
                  border: "1px solid white",
                  bgcolor: "white",
                  position: "absolute",
                  zIndex: 50,
                }}
              />
            </Box>
          </Button>
        </Box>
      </AppBar>
    </>
  );
}
