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
            alignItems: 'center', // Asegura que todo está centrado
            width: '100%', // Asegura que el Box ocupe todo el ancho disponible
            bgcolor: 'transparent',
            p: 1 // Padding general para todo el contenedor
        }}>
            {/* Contenedor para la barra de búsqueda */}
            <Box sx={{
                width: '100%', // Ocupa todo el ancho disponible
                maxWidth: { xs: '100%', sm: '60%', md: '40%' }, // Anchos máximos en diferentes tamaños de pantalla
                p: 1 // Padding alrededor de la barra de búsqueda
            }}>
                <TextField
                    label="Buscar"
                    variant="outlined"
                    onChange={handleSearchChange}
                    fullWidth
                />
            </Box>
 {/* Contenedor para las tarjetas de productos */}
 <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center', // Centra las tarjetas en la línea
                width: '100%', // Asegura que este Box ocupe todo el ancho disponible
                '& > :not(style)': {
                    m: 1, // Margen alrededor de cada tarjeta para separación
                    width: { xs: 'calc(100% / 2 - 8px)', sm: 'calc(100% / 3 - 8px)' }, // Responsividad para el ancho de las tarjetas
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
                    />
                ))}
            </Box>
        </Box>
    );
}