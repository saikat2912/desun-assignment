import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Avatar,
    Grid,
    Divider,
} from '@mui/material';
import EggDetailCard from '../EggDetailCard/EggDetailCard';

const EggDetailHead = () => {
    return (
     
            <Grid container spacing={2} sx={{ backgroundColor: '#fff', padding: 2, borderRadius: 1 }} style={{ marginLeft: '250px', padding: '20px', width: '80vw' }}>
                <Grid item xs={3} sm={3} md={3}>
                     <EggDetailCard/>
                </Grid>
                <Grid item xs={9} sm={9} md={9}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container>
                                <Grid item xs={2} sm={2} md={2}>
                                    <Typography variant="h4">0273 / 24</Typography>
                                </Grid>
                                <Grid item xs={3} sm={3} md={3}>

                                </Grid>
                                <Grid item xs={7} sm={7} md={7}>
                                    <Grid container>
                                        <Grid item xs={6} md={6} sm={6}>
                                            <Grid container>
                                                <Grid item xs={3} md={3} sm={3}>
                                                <Avatar src="modi.jpg" alt="Jordan Stevenson" sx={{ width: 40, height: 40, marginBottom: 1 }} />
                                                </Grid>
                                                <Grid item xs={9} sm={9} md={9}>
                                                <Typography variant="body2">Jordan Stevenson</Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Updated on 1 Apr 2024
                                                </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={3} md={3} sm={3}> <Button variant="outlined" color="error" sx={{ mr: 1 }}>
                                            Discard
                                        </Button></Grid>
                                        <Grid item xs={3} md={3} sm={3}> <Button variant="contained" color="success">
                                            Allocate
                                        </Button></Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={4} md={4} sm={4}><Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#ffecb3',
                                    borderRadius: 1,
                                    padding: 2,
                                }}
                            >
                                <Avatar src="/card_details/img1.png" alt="Weight Icon" sx={{ marginRight: 2 }} />
                                <Box>
                                    <Typography variant="h6">Not Added</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Current weight
                                    </Typography>
                                </Box>
                            </Box></Grid>
                            <Grid item xs={4} md={4} sm={4}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: '#e0f7fa',
                                        borderRadius: 1,
                                        padding: 2,
                                    }}
                                >
                                    <Avatar src="/card_details/img2.png" alt="Condition Icon" sx={{ marginRight: 2 }} />
                                    <Box>
                                        <Typography variant="h6">Intact</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Warm Condition
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} md={4} sm={4}><Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#e0f7fa',
                                    borderRadius: 1,
                                    padding: 2,
                                }}
                            >
                                <Avatar src="/card_details/img3.png" alt="Condition Icon" sx={{ marginRight: 2 }} />
                                <Box>
                                    <Typography variant="h6">Intact</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Warm Condition
                                    </Typography>
                                </Box>
                            </Box></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
};

export default EggDetailHead;