import React from 'react';
import MediaCard from '../Components/MediaCard';
import { Box, TextField } from '@mui/material';
import { useProductsStore } from '../Components/store/ProductStore';

export default function CardsContainer() {
    const { setSearchQuery, filteredProducts } = useProductsStore();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            width: '100%', 
            bgcolor: 'transparent',
            p: 1 
        }}>
            
            <Box sx={{
                width: '100%', 
                maxWidth: { xs: '100%', sm: '60%', md: '40%' }, 
                p: 1 
            }}>
                <TextField
                    label="Buscar"
                    variant="outlined"
                    onChange={handleSearchChange}
                    fullWidth
                />
            </Box>
 
 <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center', 
                width: '100%', 
                '& > :not(style)': {
                    m: 1, 
                    width: { xs: 'calc(100% / 2 - 8px)', sm: 'calc(100% / 3 - 8px)' }, 
                    height: 400,
                },
            }}>
                {filteredProducts().map((product, index) => (
                    <MediaCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        priceLarge={product.priceLarge}
                        priceMedium={product.priceMedium}
                        price={product.price}
                        isVegan={product.isVegan}
                        isVegetarian={product.isVegetarian}
                        isGlutenFree={product.isGlutenFree}
                    />
                ))}
            </Box>
        </Box>
    );
}