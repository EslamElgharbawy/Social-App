import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    Button,
    TextField,
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const CreatePostCard = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '21px 28px',
                mb: 3,
                backgroundColor: 'white',
                overflow: 'hidden',
                borderRadius: 2,
                border: '1px solid #ECF0F5',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            {/* Top Section */}
            <Box
                sx={{
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Avatar
                    src="https://placehold.co/40x40"
                    sx={{ width: 40, height: 40 }}
                />
                <Box
                    sx={{
                        flex: '1 1 0',
                        height: 64,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <TextField
                        id="standard-basic"
                        label="What's on your mind?"
                        variant="standard"
                        fullWidth
                    />
                </Box>
            </Box>

            {/* Bottom Section */}
            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: { xs: 0, md: '290px' },
                }}
            >
                <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AddPhotoAlternateIcon
                        sx={{ fontSize: 25, color: '#27364B' }}
                    />
                    <Typography
                        sx={{
                            fontSize: 17,
                            fontWeight: 500,
                            color: '#27364B',
                            fontFamily: 'Inter, sans-serif',
                            lineHeight: '24.5px',
                            textTransform: 'initial'
                        }}
                    >
                        Add Media
                    </Typography>
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        height: 32,
                        padding: '1px 20px',
                        borderRadius: '100px',
                        backgroundColor: '#4C68D5',
                        textTransform: 'none',
                        fontSize: 16,
                        fontWeight: 500,
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: '24.5px',
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#3b54b2',
                            boxShadow: 'none',
                        },
                    }}
                >
                    Post
                </Button>
            </Box>
        </Box>
    );
};

export default CreatePostCard;
