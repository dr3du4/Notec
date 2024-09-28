import * as React from 'react';
import NavBar from "../components/NavBar.tsx";
import ItemCard from "../components/ItemCard.tsx";
import Grid2 from '@mui/material/Grid2';
import { Container } from '@mui/material';

const items = new Array(8).fill(null);


function RecursiveGrid({ items }: { items: any[] }) {
    if (items.length === 0) return null;

    const [first, ...rest] = items;

    return (
        <>
            <Grid2 item xs={12} sm={6} md={4}>
                <ItemCard />
            </Grid2>
            <RecursiveGrid items={rest} />
        </>
    );
}

function ShopPage() {
    return (
        <div className="flex flex-col h-screen">
            <div className="mb-4">
                <NavBar />
            </div>
            <div className="flex-grow overflow-y-auto">
                <Container>
                    <Grid2 container spacing={4}>
                        <RecursiveGrid items={items} />
                    </Grid2>
                </Container>
            </div>
        </div>
    );
}

export default ShopPage;
