import { Box, Avatar, Typography, Divider, Stack, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

export default function MyPostCard() {
  return (
    <Box
      sx={{
        width: 582,
        pt: 3,
        pb: 4,
        backgroundColor: "white",
        borderRadius: 2,
        border: "1px solid #ECF0F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3.5,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          px: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* User Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src="https://placehold.co/56x56"
            sx={{ width: 56, height: 56 }}
          />
          <Box>
            <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#0C1024" }}>
              Robert Fox
            </Typography>
            <Typography sx={{ fontSize: 12, fontWeight: 400, color: "#27364B" }}>
              Software Engineer
            </Typography>
          </Box>
        </Box>

        {/* Actions */}
        <Box sx={{ textAlign: "right" }}>
          <IconButton size="small">
            <MoreHorizIcon sx={{ fontSize: 20, color: "#5D6778" }} />
          </IconButton>
          <Typography sx={{ fontSize: 12, fontWeight: 400, color: "#707988" }}>
            3 days ago
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ width: "100%", borderColor: "#F1F4F9" }} />

      {/* Content */}
      <Box sx={{ px: 4, textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#27364B",
            lineHeight: "24.5px",
            maxWidth: 486,
          }}
        >
          Received a lot of questions about breaking into the tech industry lately.
          If you're starting out or looking to switch careers, feel free to connect with me.
          I'm here to help and share insights! 🚀
        </Typography>
      </Box>

      {/* Actions */}
      <Box
        sx={{
          width: 518,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ChatBubbleOutlineIcon sx={{ fontSize: 20, color: "#5D6778" }} />
          <Typography
            sx={{ fontSize: 14, fontWeight: 500, color: "#5D6778", lineHeight: "24.5px" }}
          >
            Comment
          </Typography>
        </Box>
        <ShareIcon sx={{ fontSize: 20, color: "#5D6778" }} />
      </Box>
      
    </Box>
  );
}
