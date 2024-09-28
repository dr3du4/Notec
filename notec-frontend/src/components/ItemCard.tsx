import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {MutableRefObject} from "react";
import Button from "@mui/material/Button";


export default function ItemCard({setOpen, modalData}: {setOpen: (e:boolean) => void, modalData:  MutableRefObject<() => JSX.Element>}) {
    const clickHandler = () => {
        modalData.current = () => <>
            <Typography id="modal-modal-title" variant="body2" sx={{ color: 'text.secondary' }}>
               Lizards are a widespread group of squamate reptiles, with over 6,000
               species, ranging across all continents except Antarctica
            </Typography>

            <div className={"w-full flex justify-center"}>
               <Button>Buy</Button>
            </div>
        </>
        setOpen(true)
    }

    return (
        <Card sx={{ maxWidth: 345 }} onClick={clickHandler}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/lemur.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography>
                        Price: 100 points
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>


        </Card>
    );
}
