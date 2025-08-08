import { useAppSelector } from "@/hooks/Store.hooks";
import { Comment } from "@/types/posts.type";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import toast from "react-hot-toast";
dayjs.extend(relativeTime);
export default function CommentCard({
  CommentInfo,
  onCommentDeleted
}: {
  CommentInfo: Comment;
  onCommentDeleted?: () => void;
}) {
  const { token } = useAppSelector((store) => store.userReducer);

  async function DeleteComment() {
    try {
      const options = {
        url: `https://linked-posts.routemisr.com/comments/${CommentInfo._id}`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      const { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success("Comment has been deleted");
         if (onCommentDeleted) {
          onCommentDeleted();
        }
      }
      console.log(data);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        gap={1}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            src={CommentInfo.commentCreator.photo}
            alt={CommentInfo.commentCreator.name}
            sx={{ width: 48, height: 48 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              fontWeight={500}
              fontSize={17}
              color="#0C1024"
            >
              {CommentInfo.commentCreator.name}
            </Typography>

            {/* Time */}
            <Box display="flex" justifyContent="space-between">
              <Typography variant="caption" color="#707988">
                {dayjs(CommentInfo.createdAt).fromNow()}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Options + Time */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "6px",
          }}
        >
          <IconButton
            size="medium"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon sx={{ fontSize: 23, color: "#5D6778" }} />
          </IconButton>

          <Menu
            id="basic-menu"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
            disableScrollLock
          >
            <MenuItem
              onClick={() => {
                handleClose();
                DeleteComment();
              }}
            >
              Delete
            </MenuItem>
          </Menu>
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
