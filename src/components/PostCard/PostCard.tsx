import React from 'react';
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Button,
  Avatar,
  OutlinedInput,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Post } from '@/types/posts.type';
import Image from 'next/image';
import commentImage from '@/assets/images/Comment.svg';
import LikeImage from '@/assets/images/Like.svg'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CommentCard from '../CommentCard/CommentCard';
import { useAppSelector } from '@/hooks/Store.hooks';
dayjs.extend(relativeTime);

const PostCard = ({ postInfo }: { postInfo: Post }) => {
  let { user } = useAppSelector((store) => store.UserInfoReducer)
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
              xs: 200,
              sm: 300,
              md: 500,
            },
          }}
        >
          {postInfo.image ? (
            <Box
              component="img"
              src={postInfo.image}
              alt="Post image"
              sx={{
                width: { xs: '100%', md: 700 },
                height: { xs: '100%', md: 500 },
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
          ) : null}
        </Box>


      </Box>


      <Box sx={{
        width: { xs: '100%' },
        px: 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2
      }}>
        {/* Actions */}
        <Box
          sx={{
            width: { xs: '100%' },
            mt: { xs: 0, md: 4 },
            mx: 'auto',
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

        <Divider sx={{ width: '90%', borderColor: '#E3E7EF', my: 2, mx: 'auto' }}>Comments</Divider>

        {/* Comments*/}
        <Box sx={{ width: '100%' }}>
          {postInfo.comments.length > 0 && <CommentCard CommentInfo={postInfo.comments[0]} />}
        </Box>

        {/* More Comments*/}
        <Button variant='contained' sx={{ my: 1, mx: 'auto', width: '100%' }}>
          <Typography textTransform={'initial'}>
            Show More Comments
          </Typography>
        </Button>

        {/* CommentInput */}
        <Box
          sx={{
            width: '100%',
            py: 1,
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Avatar
            alt={user?.name}
            src={user?.photo}
            sx={{ width: 45, height: 45 }}
          />

          <OutlinedInput
            placeholder="Share your thoughts here..."
            fullWidth
            sx={{
              height: 44,
              borderRadius: 1.5,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
