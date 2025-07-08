import React from 'react';
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Button,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Post } from '@/types/posts.type';
import Image from 'next/image';
import commentImage from '@/assets/images/Comment.svg';
import LikeImage from '@/assets/images/Like.svg'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const PostCard = ({ postInfo }: { postInfo: Post }) => {
  return (
    <Box
      sx={{
        width: '100%',
        p: '24px 0 ',
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 2,
        border: '1px solid #ECF0F5',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        mb: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          px: { xs: 2, md: 5 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Avatar + Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Image src={postInfo.user.photo} width={50} height={50} alt={postInfo.user.name} />
          <Box>
            <Typography sx={{ fontSize: 17, fontWeight: 500, color: '#0C1024' }}>
              {postInfo.user.name}
            </Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 400, color: '#707988' }}>
              {dayjs(postInfo.createdAt).fromNow()}
            </Typography>
          </Box>
        </Box>

        {/* Options + Time */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
          <IconButton size="medium">
            <MoreHorizIcon sx={{ fontSize: 25, color: '#5D6778' }} />
          </IconButton>

        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ width: '100%', borderColor: '#E3E7EF' }} />

      {/* Post Content */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          px: 2
        }}
      >
        <Typography
          sx={{
            width: '100%',
            fontSize: 17,
            fontWeight: 400,
            color: '#27364B',
            lineHeight: '24.5px',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'initial'


          }}
        >
          {postInfo.body}
        </Typography>


        <Box
          sx={{
            width: '100%',
            maxWidth: 700,
            borderRadius: 2,
            overflow: 'hidden',
            height: {
              xs: 300,
              md: 500,
            },
          }}
        >
          {postInfo.image ? (
            <img src={postInfo.image} alt="Post image" width={700} height={500} />
          ) : ""}
        </Box>


      </Box>

      {/* Actions */}
      <Box
        sx={{
          width: { xs: '100%', md: 518 },
          mt: 4,
          px: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            component={'img'}
            src={commentImage.src}
            alt="Comment"
            sx={{
              width: '24px',
              height: '24px',
              objectFit: 'cover',
            }}
          />


          <Typography
            sx={{
              fontSize: 17,
              fontWeight: 500,
              color: '#5D6778',
              lineHeight: '24.5px',
              textTransform: 'initial'
            }}
          >
            Comment
          </Typography>
        </Button>
        <Button>
          <Box
            component={'img'}
            src={LikeImage.src}
            alt="Like"
            sx={{
              width: '24px',
              height: '24px',
              objectFit: 'cover',
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default PostCard;
