"use client";
import commentImage from "@/assets/images/Comment.svg";
import LikeImage from "@/assets/images/Like.svg";
import { getMyPosts, getPosts } from "@/Features/posts.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks";
import { Post } from "@/types/posts.type";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import CommentCard from "../CommentCard/CommentCard";
import { useRouter } from "next/navigation";
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

const PostCard = ({
  postInfo,
  ShowAllComments = false,
}: {
  postInfo: Post;
  ShowAllComments?: boolean;
}) => {
  const router = useRouter();
  const [localPostInfo, setLocalPostInfo] = useState(postInfo);
  const [InValue, setInValue] = useState(false);
  const dispatch = useAppDispatch();
  const commentInputRef = useRef<HTMLInputElement>(null);
  const { user } = useAppSelector((store) => store.UserInfoReducer);
  const { token } = useAppSelector((store) => store.userReducer);

  const handleInputChange = () => {
    const currentValue = commentInputRef.current?.value || "";
    setInValue(currentValue.trim().length > 0);
  };

  async function createCommentCard() {
    try {
      const Content = commentInputRef.current?.value || "";
      const commentData = {
        content: Content,
        post: postInfo._id,
      };
      const options = {
        url: "https://linked-posts.routemisr.com/comments",
        method: "POST",
        headers: {
          token,
          "Content-Type": "application/json",
        },
        data: JSON.stringify(commentData),
      };
      const { data } = await axios.request(options);
      if (data.message == "success") {
        toast.success("Comment created");
        await getComments();
      }
      if (commentInputRef.current) {
        commentInputRef.current.value = "";
        setInValue(false);
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }

  async function getComments() {
    try {
      const options = {
        url: `https://linked-posts.routemisr.com/posts/${postInfo._id}/comments`,
        method: "GET",
        headers: {
          token,
        },
      };
      const { data } = await axios.request(options);
      console.log(data);
      setLocalPostInfo({ ...postInfo, comments: data.comments });
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }
  async function DeletePost() {
    try {
      const options = {
        url: `https://linked-posts.routemisr.com/posts/${postInfo._id}`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      const { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success("Post has been deleted");
        dispatch(getPosts());
        if (user?._id) {
          dispatch(getMyPosts(user._id));
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
  const post_Id = localPostInfo._id;
  const handleShowMore = (post_Id: string) => {
    console.log("Navigating to post with ID:", post_Id);
    router.push(`/Post/${post_Id}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: "24px 0 ",
        backgroundColor: "white",
        overflow: "hidden",
        borderRadius: 2,
        border: "2px solid #ECF0F5",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        mb: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, md: 5 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Avatar + Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component={"img"}
            src={postInfo.user.photo}
            sx={{ width: { xs: "45px", xl: "50px" } }}
            alt={postInfo.user.name}
          />
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 15, xl: 17 },
                fontWeight: 500,
                color: "#0C1024",
              }}
            >
              {postInfo.user.name}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 13, xl: 15 },
                fontWeight: 400,
                color: "#707988",
              }}
            >
              {dayjs.utc(postInfo.createdAt).tz(dayjs.tz.guess()).fromNow()}
            </Typography>
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
            <MoreHorizIcon sx={{ fontSize: 25, color: "#5D6778" }} />
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
                DeletePost();
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ width: "100%", borderColor: "#E3E7EF" }} />

      {/* Post Content */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography
          sx={{
            width: "100%",
            fontSize: 17,
            fontWeight: 400,
            color: "#27364B",
            lineHeight: "24.5px",
            fontFamily: "Inter, sans-serif",
            textTransform: "initial",
          }}
        >
          {postInfo.body}
        </Typography>
        {postInfo.image ? (
          <>
            <Box
              sx={{
                width: "100%",
                maxWidth: 700,
                borderRadius: 2,
                overflow: "hidden",
                height: {
                  xs: 200,
                  sm: 300,
                  lg: 400,
                  xl: 500,
                },
              }}
            >
              <Box
                component="img"
                src={postInfo.image}
                alt="Post image"
                sx={{
                  width: { xs: "100%", md: 700 },
                  height: "auto",
                  borderRadius: 2,
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </>
        ) : null}
      </Box>

      <Box
        sx={{
          width: { xs: "100%" },
          px: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Actions */}
        <Box
          sx={{
            width: { xs: "100%" },
            mt: { xs: 0, md: 4 },
            mx: "auto",
            px: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
            onClick={() => {
              commentInputRef.current?.focus();
            }}
          >
            <Box
              component={"img"}
              src={commentImage.src}
              alt="Comment"
              sx={{
                width: { xs: "20px", xl: "24px" },
                height: { xs: "20px", xl: "24px" },
                objectFit: "cover",
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: 14, xl: 17 },
                fontWeight: 500,
                color: "#5D6778",
                lineHeight: "24.5px",
                textTransform: "initial",
              }}
            >
              Comment
            </Typography>
          </Button>
          <Button>
            <Box
              component={"img"}
              src={LikeImage.src}
              alt="Like"
              sx={{
                width: { xs: "20px", xl: "24px" },
                height: { xs: "20px", xl: "24px" },
                objectFit: "cover",
              }}
            />
          </Button>
        </Box>

        <Divider
          sx={{ width: "90%", borderColor: "#E3E7EF", my: 2, mx: "auto" }}
        >
          Comments
        </Divider>

        {/* Comments*/}
        <Box sx={{ width: "100%" }}>
          {localPostInfo.comments &&
            localPostInfo.comments.length > 0 &&
            !ShowAllComments && (
              <CommentCard
                CommentInfo={localPostInfo.comments[0]}
                onCommentDeleted={getComments}
              />
            )}
          {localPostInfo.comments &&
            localPostInfo.comments.length > 1 &&
            ShowAllComments &&
            localPostInfo.comments.map((comment) => (
              <CommentCard
                key={comment._id}
                CommentInfo={comment}
                onCommentDeleted={getComments}
              />
            ))}
        </Box>

        {localPostInfo.comments &&
          !ShowAllComments &&
          localPostInfo.comments.length > 1 && (
            <>
              {/* More Comments*/}
              <Button
                onClick={() => {
                  handleShowMore(post_Id);
                }}
                variant="contained"
                sx={{ my: 1, mx: "auto", width: "100%" }}
              >
                <Typography textTransform={"initial"}>
                  Show More Comments
                </Typography>
              </Button>
            </>
          )}

        {/* CommentInput */}
        <Box
          sx={{
            width: "100%",
            py: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            alt={user?.name}
            src={user?.photo}
            sx={{ width: 45, height: 45 }}
          />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <OutlinedInput
              placeholder="Add Comment..."
              inputRef={commentInputRef}
              onInput={handleInputChange}
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={createCommentCard}
                    disabled={!InValue}
                    edge="end"
                    sx={{
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <SendIcon sx={{ color: InValue ? "#4C68D5" : "#ccc" }} />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                height: { xs: 40, xl: 44 },
                borderRadius: 1.5,
                pr: 2,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
