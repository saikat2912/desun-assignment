import React from 'react';
import { Box, Typography, Paper, Divider, IconButton, Grid, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import weight from "../../../img/card_details/weight.jpg";
import length from "../../../img/card_details/length.png";
import width from "../../../img/card_details/width.png";

const EggDetailsHistory = () => {
    return (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                borderRadius: 2,
            }}
        >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Egg History - EDIT</Typography>
                <IconButton color="primary">
                    <EditIcon />
                </IconButton>
            </Box>

            <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                        <Grid container>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Site </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom>Yelahanka</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Section </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom>SEC0012</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Enclosure </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom>24D</Typography>
                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Cage </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom>C112</Typography>
                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Nest Box </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom>N123</Typography>
                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Shape </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom>Normal</Typography>
                            </Grid>
                        </Grid>



                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                        <Grid container>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Mother id :</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" ><span style={{ color: 'blue' }}>0000123456</span></Typography>
                            </Grid>


                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Father id : </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom><a href="#" style={{ color: 'blue' }}>Probable (5)</a></Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Collected on </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom> 1 Apr 2024</Typography>
                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Lay Date </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom>1 Apr 2024</Typography>
                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Clutch No</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom>NA</Typography>
                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2">Collected By  </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Typography variant="body2" gutterBottom>Jordan Steveson</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="subtitle1" gutterBottom>Initial Measurement</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box textAlign="center">
                            <Grid container>
                                <Grid item xs={2}>    <Avatar src={length} alt="Condition Icon" sx={{ marginRight: 2 }} /></Grid>
                                <Grid item xs={5}><Grid container>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="body2">Not Added</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="body2" color="textSecondary">Length</Typography>
                                    </Grid>
                                </Grid></Grid>


                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box textAlign="center">
                            <Grid container>
                                <Grid item xs={2}>    <Avatar src={width} alt="Condition Icon" sx={{ marginRight: 2 }} /></Grid>
                                <Grid item xs={5}><Grid container>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="body2">Not Added</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="body2" color="textSecondary">Width</Typography>
                                    </Grid>
                                </Grid></Grid>
                            </Grid>



                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box textAlign="center">
                            <Grid container>
                                <Grid item xs={2}>   <Avatar src={weight} alt="Condition Icon" sx={{ marginRight: 2 }} /></Grid>
                                <Grid item xs={5}><Grid container>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="body2">Not Added</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="body2" color="textSecondary">Weight</Typography>
                                    </Grid>
                                </Grid></Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default EggDetailsHistory;