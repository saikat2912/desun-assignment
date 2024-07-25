import './style.css';
import { Grid ,Paper,Typography} from '@mui/material';
export const Card1 =({number,title,logo,fontcolor,logoBackground})=>{
    return (
        <Grid item xs={12} sm={6} md={4} lg={2}>
        <Paper style={{ padding: '16px', textAlign: 'center' }}>
        <Grid container>
            <Grid item xs={3} md={3} sm={3}>
            <div style={{ fontSize: '2rem' }}>{logo}</div>
            </Grid>
            <Grid item xs={9} md={9} sm={9}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h6" component="p" style={{color:fontcolor}}>{number}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="subtitle1">{title}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Paper>
        </Grid>

    )
}

export default Card1;