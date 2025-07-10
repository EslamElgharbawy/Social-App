'use client'
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SuggestedFriendsCard from "@/components/SuggestedFriends/SuggestedFriends";
import UserCard from "@/components/UserCard/UserCard";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const isProfile = pathname === '/Profile';

    return <>
        <Navbar />
        <Box sx={{ bgcolor: '#FAFBFF', py: 3, my: { xs: 0 } }}>
            <Grid container sx={{ mx: { xs: 1, md: 5 }, py: 3, my: { xs: 0, md: 8 } }}>
                {/* Sidebar */}
                <Grid size={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <UserCard />
                </Grid>

                {/* Main Content */}
                <Grid size={{ xs: 12, md: isProfile ? 9 : 6 }} >
                    {children}
                </Grid>

                {isHome && <>
                    {/* Suggestions*/}
                    <Grid size={3} sx={{ pl: 5, display: { xs: 'none', md: 'block' } }} >
                        <Box sx={{
                            position: 'sticky',
                            top: 100,
                            alignSelf: 'flex-start',
                        }}>
                            <SuggestedFriendsCard fixed />
                            <Footer fixed />
                        </Box>
                    </Grid></>}
            </Grid>
        </Box>

    </>
}
