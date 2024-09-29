import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";

function QuizCard({ id, title, tags, onClick }) {
    return (
        <Card sx={{ maxWidth: '80vw', width: '80vw', minHeight: '8rem', maxHeight: '10rem' }} onClick={onClick}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6">
                        Quiz ID: {id}
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Tags: {tags && tags.length > 0 ? tags.join(', ') : 'No tags available'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default QuizCard;
