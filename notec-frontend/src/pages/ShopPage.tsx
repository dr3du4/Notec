import * as React from 'react';
import NavBar from "../components/NavBar.tsx";
import ItemCard from "../components/ItemCard.tsx";
import Grid2 from '@mui/material/Grid2';
import { Container } from '@mui/material';
import axiosInstance from "../axiosConfig.js";
import { MouseContext } from "../context/mouseContext.tsx";
import {useContext, useEffect, useState} from "react";

function RecursiveGrid({ items }: { items: any[] }) {
    const { cursorChangeHandler } = useContext(MouseContext);

    if (items.length === 0) return null;

    const [first, ...rest] = items;

    const onClickItem = (name: string) => {
        cursorChangeHandler(name);
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
                    onClick={() => onClickItem(first.name)}
                />
            </Grid2>
            <RecursiveGrid items={rest} />
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
