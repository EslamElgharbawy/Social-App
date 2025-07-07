import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';

export default function Profile() {
  return <>

    <Box
      width={934}
      height={233}
      position="relative"
      bgcolor="white"
      borderRadius={2}
      border="1px solid #ECF0F5"
    >
      {/* Header Section */}
      <Stack direction="row" spacing={3} position="absolute" top={32} left={44}>
        <Avatar
          src="https://placehold.co/96x96"
          sx={{ width: 96, height: 96, border: '2px solid white' }}
        />
        <Box position="relative" height={52}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6" fontWeight={600} color="#27364B">
              Robert Fox
            </Typography>
            <Typography variant="body2" color="#5D6778">
              /
            </Typography>
            <Typography fontSize={12} color="#5D6778">
              @robert
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="#4B5669"
            sx={{ position: 'absolute', top: 37 }}
          >
            Software Engineer
          </Typography>
        </Box>
      </Stack>

      {/* Divider */}
      <Divider
        sx={{
          position: 'absolute',
          top: 168,
          width: '100%',
          borderColor: '#F1F4F9',
        }}
      />

      {/* Tabs */}
      <Stack direction="row" spacing={4} position="absolute" top={188} left={40}>
        <Typography fontWeight={500} fontSize={14} color="#0C1024">
          My Posts
        </Typography>
        <Typography fontWeight={500} fontSize={14} color="#5D6778">
          Saved Posts
        </Typography>
        <Typography fontWeight={500} fontSize={14} color="#5D6778">
          Settings
        </Typography>
      </Stack>

      {/* Stats */}
      <Stack direction="row" spacing={6} position="absolute" top={54} left={683}>
        {[
          { label: 'Posts', value: 12 },
          { label: 'Followers', value: 207 },
          { label: 'Following', value: 64 },
        ].map((item) => (
          <Stack key={item.label} alignItems="center" spacing={1}>
            <Typography fontWeight={700} fontSize={24} color="#27364B">
              {item.value}
            </Typography>
            <Typography fontWeight={400} fontSize={12} color="#4B5669">
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
    {/* <Grid container sx={{ mx: { xs: 1, md: 5 }, py: 3, my: { xs: 0, md: 8 } }}>
      <Grid size={3} sx={{ pl: 5, display: { xs: 'none', md: 'block' } }} >
            <SuggestedFriendsCard />
            <Footer />
          </Grid>
    </Grid> */}


  </>
}
