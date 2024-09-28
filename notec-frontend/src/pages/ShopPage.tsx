import * as React from 'react';
import Grid2 from '@mui/material/Grid2';
import { Container } from '@mui/material';
import NavBar from "../components/NavBar.tsx";
import ItemCard from "../components/ItemCard.tsx";
import axiosInstance from "../axiosConfig.js";
import { MouseContext } from "../context/mouseContext.tsx";
import ShopModal from "../components/ShopModal.tsx";
import {useContext, useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function RecursiveGrid({ items }: { items: any[] }) {
    const { cursorChangeHandler } = useContext(MouseContext);
    const [open, setOpen] = useState(false); // Zarządzanie stanem modala
    const modalData = React.useRef<() => JSX.Element>(() => <div></div>); // Referencja do danych modala

    if (items.length === 0) return null;

    const [first, ...rest] = items;

    const onClickItem = (name: string, price: number) => {
        cursorChangeHandler(name);
        // Ustawienie zawartości modala
        modalData.current = () => (
            <>
                <Typography id="modal-modal-title" variant="h6">
                    {name}
                </Typography>
                <Typography id="modal-modal-description" variant="body2" sx={{ color: 'text.secondary' }}>
                    Price: {price} points
                </Typography>
                <div className="w-full flex justify-center">
                    <Button>Buy</Button>
                </div>
            </>
        );
        setOpen(true); // Otworzenie modala
    };

    return (
        <>
            <Grid2
                item
                xs={12} sm={6} md={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <ItemCard
                    title={first.context || first.name}
                    image={`/${first.name}.png`}
                    price={first.price}
                    onClick={() => onClickItem(first.name, first.price)} // Przekazanie danych do modala
                    setOpen={setOpen}
                    modalData={modalData}
                    cursorChangeHandler={()=>cursorChangeHandler(first.name)}
                />
            </Grid2>
            <RecursiveGrid items={rest} />
            <ShopModal open={open} setOpen={setOpen}>
                <modalData.current />
            </ShopModal>
        </>
    );
}

function ShopPage() {
    const [frames, setFrames] = useState<any[]>([]);
    const [icons, setIcons] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axiosInstance.get("/shop");
                const data = response.data;
                setFrames(data.frames);
                setIcons(data.icons);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading items: {error.message}</div>;
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="mb-4">
                <NavBar />
            </div>
            <div className="flex-grow overflow-y-auto">
                <Container>
                    <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>Frames</h1>
                    <Grid2 container spacing={4} justifyContent="center" alignItems="center">
                        <RecursiveGrid items={frames} />
                    </Grid2>

                    <h1 style={{ textAlign: 'center', fontSize: '3rem', marginTop: '3rem', marginBottom: '2rem' }}>Icons</h1>
                    <Grid2 container spacing={4} justifyContent="center" alignItems="center">
                        <RecursiveGrid items={icons} />
                    </Grid2>
                </Container>
            </div>
        </div>
    );
}

export default ShopPage;
