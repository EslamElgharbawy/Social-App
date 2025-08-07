import { Comment } from "@/types/posts.type";
import { Avatar, Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default function CommentCard({ CommentInfo }: { CommentInfo: Comment }) {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "#F1F4F9",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        fontFamily: "Inter, sans-serif",
        mb: 2,
      }}
    >
      {/* Header: Avatar + Name + Title */}
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar
          src={CommentInfo.commentCreator.photo}
          alt={CommentInfo.commentCreator.name}
          sx={{ width: 48, height: 48 }}
        />
        <Box>
          <Typography
            variant="body1"
            fontWeight={500}
            fontSize={17}
            color="#0C1024"
          >
            {CommentInfo.commentCreator.name}
          </Typography>

          {/* Footer: Time + Reply */}
          <Box display="flex" justifyContent="space-between" px={0.5}>
            <Typography variant="caption" color="#707988">
              {dayjs(CommentInfo.createdAt).fromNow()}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Comment Text */}
      <Typography
        variant="body2"
        color="#27364B"
        sx={{
          lineHeight: "24.5px",
          px: 2,
          fontWeight: 400,
          fontSize: 17,
        }}
      >
        {CommentInfo.content}
      </Typography>
    </Box>
  );
}
