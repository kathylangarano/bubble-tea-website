import React from 'react';
import MediaCard from './MediaCard';
import { Box } from '@mui/material';

export default function CardsContainer() {
  return (
    <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: { xs: 'calc(100% / 2 - 8px)', sm: 'calc(100% / 3 - 8px)' }, // 2 tarjetas en xs y 3 en sm en adelante
          height: 400,
        },
        justifyContent: 'center',
        bgcolor: 'transparent'
    }}>
    
      <MediaCard image="/src/assets/bubble jamaica tea.jpeg" title="Bubble jamaica tea" description="Té Frutal"  priceLarge="$4.75" 
  priceMedium="$3.75" />
      <MediaCard image="/src/assets/bubble tea fresa.jpeg" title="Bubble tea de fresa" description="Té Frutal" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/bubble tea mango.jpeg" title="Bubble tea de mango" description="Té Frutal" priceLarge="$4.75" 
  priceMedium="$3.75" />
      <MediaCard image="/src/assets/ice bubble tea.jpeg" title=" Iced Bubble Tea" description="Té Frutal" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/mora.jpeg" title="Bubble tea de mora" description="Té Frutal" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/manzana.jpeg" title="Bubble tea de manzana" description="Té Frutal" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/no products.jpeg" title=" Bubble tea de maracuyá" description="Té Frutal" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/no products.jpeg" title="Bubble tea de piña" description="Té Frutal" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/no products.jpeg" title="Chia bubble tea" description="Té Frutal" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/no products.jpeg" title="Pop pop Tea" description="Té Frutal" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/bubble tea.jpeg" title="Bubble Tea" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/guru bubble coffee.jpeg" title="Guru bubble coffee" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/matcha bubble.jpeg" title="Matcha Bubble Tea" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/matchalatte.jpeg" title="Matchalatte" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75"  /> 
      <MediaCard image="/src/assets/panela bubble tea.jpeg" title="Panela Bubble Tea" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75" />
      <MediaCard image="/src/assets/taro bubble tea.jpeg" title="Taro Bubble Tea" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75" />
      <MediaCard image="/src/assets/no products.jpeg" title="Bubble flan" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75" />
      <MediaCard image="/src/assets/no products.jpeg" title="Jelly Bubble" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75" />
      <MediaCard image="/src/assets/no products.jpeg" title="Pop pop Bubble Tea" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75"  />
      <MediaCard image="/src/assets/oreo.jpeg" title="Oreo Bubble Tea" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75" />
      <MediaCard image="/src/assets/no products.jpeg" title="Guru Tea" description="Bubble Tea" priceLarge="$4.75" 
  priceMedium="$3.75" />
      <MediaCard image="/src/assets/frape de taro.jpeg" title="Frape de taro" description="Frapé" priceLarge="$0" 
  priceMedium="$0" />
      <MediaCard image="/src/assets/frape fresa.jpeg" title="Frape de fresa" description="Frapé" priceLarge="$0" 
  priceMedium="$0" />
      <MediaCard image="/src/assets/frape frutos rojos.jpeg" title="Frape de frutos rojos" description="Frapé" priceLarge="$0" 
  priceMedium="$0" />
      <MediaCard image="/src/assets/frape piña.jpeg" title="Frape de piña" description="Frapé" priceLarge="$0" 
  priceMedium="$0" />
      <MediaCard image="/src/assets/ice cream.jpeg" title="Ice cream" description="Ice cream" price="$0"/>
      <MediaCard image="/src/assets/candy milk.jpeg" title="Candy milk" description="Postres" price="$0"/>
      <MediaCard image="/src/assets/guru cake.jpeg" title="Guru Cake" description="Postres" price="$0"/>
      <MediaCard image="/src/assets/pastel luna.jpeg" title="Pastel de luna" description="Postres" price="$2.99"/>
      <MediaCard image="/src/assets/pastel piña.jpeg" title="Pastel de piña" description="Postres" price="$2.99"/>
      <MediaCard image="/src/assets/no products.jpeg" title="Pastel del día" description="Postres" price="$2.99"/>
      <MediaCard image="/src/assets/guru dumpling frito.jpeg" title="Guru dumpling frito" description="Especial Guru Guru" price="$3.99"/>
      <MediaCard image="/src/assets/rollo primavera.jpeg" title="Rollo primavera" description="Especial Guru Guru" price="$3.99"/>
      <MediaCard image="/src/assets/no products.jpeg" title="Guru Pollo" description="Especial Guru Guru" price="$0"/>
      <MediaCard image="/src/assets/papi guru pollo.jpeg" title="PapiGuruPollo" description="Papitas" price="$4.25"/>
      <MediaCard image="/src/assets/salchipapita.jpeg" title="Salchipapita" description="Papitas" price="$4.25"/>
      <MediaCard image="/src/assets/combo 1.png" title="Bubble tea/te frutal + snacks" description="Combos 1" price="$5"/>
      <MediaCard image="/src/assets/combo 2.png" title="Bubble tea/te frutal + postres" description="Combo 2" price="$6.4"/>
      <MediaCard image="/src/assets/combo 3.png" title="Bubble tea/te frutal + guru special" description="Combo 3" price="$7.25"/>



    </Box>
  );
}
