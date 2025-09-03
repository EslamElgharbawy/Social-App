"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SuggestedFriendsCard from "@/components/SuggestedFriends/SuggestedFriends";
import UserCard from "@/components/UserCard/UserCard";
import { setToken } from "@/Features/user.slice";
import { geUserInfo } from "@/Features/UserInfo.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks";
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAppSelector((store) => store.UserInfoReducer);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (pathname === "/Profile") setValue(0);
    else if (pathname === "/Notifications") setValue(1);
    else if (pathname === "/Messages") setValue(2);
    else if (pathname === "/") setValue(3);

    const token = localStorage.getItem("token");
    dispatch(setToken(token));
    dispatch(geUserInfo());
  }, [pathname, dispatch]);

  const isHome = pathname === "/";
  const isProfile = pathname === "/Profile";
  const isNotifications = pathname === "/Notifications";

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#FAFBFF",
          py: { xs: 0, xl: 3 },
          my: { xs: 0 },
        }}
      >
        <Grid container sx={{ mx: { xs: 1, xl: 5 }, py: 3, mb: 6, mt: 8 }}>
          {/* Sidebar */}
          <Grid size={3} sx={{ display: { xs: "none", xl: "block" } }}>
            <UserCard />
          </Grid>

          {/* Main Content */}
          <Grid size={{ xs: 12, xl: isProfile || isNotifications ? 9 : 6 }}>
            {children}
          </Grid>

          {isHome && (
            <Grid size={3} sx={{ pl: 5, display: { xs: "none", xl: "block" } }}>
              <SuggestedFriendsCard fixed />
              <Footer fixed />
            </Grid>
          )}
        </Grid>
      </Box>

      {/* Bottom Navigation */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xl: "none", xs: "block" },
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            if (newValue === 0) router.push("/Profile");
            else if (newValue === 1) router.push("/Notifications");
            else if (newValue === 2) router.push("/Messages");
            else if (newValue === 3) router.push("/");
          }}
        >
          <BottomNavigationAction
            label="Profile"
            icon={<Avatar src={user?.photo} sx={{ width: 24, height: 24 }} />}
          />
          <BottomNavigationAction
            label="Alerts"
            icon={<NotificationsNoneIcon sx={{ fontSize: 20 }} />}
          />
          <BottomNavigationAction
            label="Message"
            icon={<TelegramIcon sx={{ fontSize: 20 }} />}
          />
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon sx={{ fontSize: 20 }} />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
