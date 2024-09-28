import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardActionArea} from "@mui/material";

function QuizCard() {
    return (
        <Card sx={{ maxWidth: '80vw', width: '80vw', minHeight: '8rem', maxHeight: '10rem' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Math Quiz
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        No taki fajny quiz ze analize zdalem es
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography>
                    Tags:
                </Typography>
            </CardActions>
        </Card>
    );
}

export default QuizCard;
