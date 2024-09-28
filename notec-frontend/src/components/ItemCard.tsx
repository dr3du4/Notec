import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface ItemCardProps {
    title: string;
    image: string;
    price: number;
    onClick: ()=>void;
}

export default function ItemCard({ title, image, price,onClick }: ItemCardProps) {
    return (
        <Card sx={{ maxWidth: 300, minWidth: 300, minHeight: 450, maxHeight: 450 }} onClick={onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography>
                        Price: {price} points
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
