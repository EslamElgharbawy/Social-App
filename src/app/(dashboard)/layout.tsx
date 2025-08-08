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
import { ReactNode, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SendIcon from "/public/Send.svg";
import Image from "next/image";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProfile = pathname === "/Profile";
  const isNotifications = pathname === "/Notifications";
  const { user } = useAppSelector((store) => store.UserInfoReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(setToken(token));
    dispatch(geUserInfo());
  }, [dispatch]);
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
        <Grid container sx={{ mx: { xs: 1, xl: 5 }, py: 3, my: 8 }}>
          {/* Sidebar */}
          <Grid size={3} sx={{ display: { xs: "none", xl: "block" } }}>
            <UserCard />
          </Grid>

          {/* Main Content */}
          <Grid size={{ xs: 12, xl: isProfile || isNotifications ? 9 : 6 }}>
            {children}
          </Grid>

          {isHome && (
            <>
              {/* Suggestions*/}
              <Grid
                size={3}
                sx={{ pl: 5, display: { xs: "none", xl: "block" } }}
              >
                <SuggestedFriendsCard fixed />
                <Footer fixed />
              </Grid>
            </>
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
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Profile"
            onClick={() => router.push("/Profile")}
            icon={<Avatar src={user?.photo} sx={{ width: 20, height: 24 }} />}
          />
          <BottomNavigationAction
            label="Alerts"
            onClick={() => router.push("/Notifications")}
            icon={<NotificationsNoneIcon sx={{ fontSize: 20 }} />}
          />
          <BottomNavigationAction
            label="Message"
            icon={
              <Image
                src={SendIcon}
                alt="Send"
                width={20}
                height={24}
                style={{ objectFit: "contain" }}
              />
            }
            onClick={() => router.push("/Messages")}
          />
          <BottomNavigationAction
            label="Home"
            onClick={() => router.push("/")}
            icon={<HomeIcon sx={{ fontSize: 20 }} />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
