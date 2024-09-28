import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { MutableRefObject } from "react";
import Button from "@mui/material/Button";

interface ItemCardProps {
    title: string;
    image: string;
    price: number;
    setOpen: (e: boolean) => void;
    modalData: MutableRefObject<() => JSX.Element>;
}

export default function ItemCard({ title, image, price, setOpen, modalData }: ItemCardProps) {
    const clickHandler = () => {
        // Zaktualizowanie zawartości modalData po kliknięciu
        modalData.current = () => (
            <>
                <Typography id="modal-modal-title" variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                <div className="w-full flex justify-center">
                    <Button>Buy</Button>
                </div>
            </>
        );
        setOpen(true); // Otwieramy modal
    };

    return (
        <Card sx={{ maxWidth: 300, minWidth: 300, minHeight: 450, maxHeight: 450 }} onClick={clickHandler}>
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
