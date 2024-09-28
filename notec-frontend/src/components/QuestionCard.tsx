import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface QuestionCardProps {
    title: string;
    options: { option: string }[];
}

export default function QuestionCard({ title, options }: QuestionCardProps) {
    return (
        <Card sx={{ maxWidth: '80vw', width: '80vw', minHeight: '8rem', maxHeight: '10rem', marginBottom: '1rem' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                {options.map((option, index) => (
                    <Button key={index} size="small">
                        {option.option}
                    </Button>
                ))}
            </CardActions>
        </Card>
    );
}
