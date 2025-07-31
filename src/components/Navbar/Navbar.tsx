"use client";
import { logout } from "@/Features/user.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Toolbar,
    Typography,
} from "@mui/material";

export default function Navbar() {
  let { user } = useAppSelector((store) => store.UserInfoReducer);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/Login";
  };
  return (
    <>
      {/* Top AppBar Mobile*/}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid #ECF0F5",
          display: { md: "none", xs: "block" },
        }}
      >
        <Toolbar
          sx={{
            px: 2,
            py: 2,
            minHeight: 72,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo + Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              component="img"
              src={"/Vector.svg"}
              sx={{
                width: 26,
                height: 36,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: 20,
                color: "#0C1024",
                textTransform: "capitalize",
                fontFamily: "Manrope",
              }}
            >
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
              fontSize={15}
              sx={{
                fontFamily: "Inter, sans-serif",
                textTransform: "initial",
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
                  width: 30,
                  height: 30,
                  border: "1px solid white",
                  bgcolor: "white",
                  position: "absolute",
                  zIndex: 50,
                }}
              />
            </Box>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Top AppBar*/}
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          borderBottom: "1px solid #ECF0F5",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 2,
            px: 6,
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
