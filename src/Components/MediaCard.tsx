import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaLeaf, FaHeart, FaPagelines } from "react-icons/fa";
import { Box } from '@mui/material';



interface MediaCardProps {
  image: string;
  title: string;
  description: string;
  priceLarge?: string; 
  priceMedium?: string;
  price?: string; 
  isVegan?: boolean;   
  isVegetarian?: boolean; 
  isGlutenFree?: boolean; 

}

export default function MediaCard({ image, title, description, priceLarge, priceMedium, price, isVegan, isVegetarian, isGlutenFree }: MediaCardProps) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: 'transparent' }}>
      <CardMedia
        sx={{ height: 240,  transform: 'translateX(1%) scale(0.9)' }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isVegan && <FaHeart color="lightgreen" style={{ marginRight: 4, fontSize: '1.5rem' }} />}
            {isVegetarian && <FaLeaf color="lightblue" style={{ marginRight: 4, fontSize: '1.5rem' }} />}
            {isGlutenFree && <FaPagelines color="gold" style={{ fontSize: '1.5rem' }} />}
          </Box>
        </Box>
        
      </CardContent>
      <CardActions sx={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        {priceLarge && <Button size="small">Grande  {priceLarge}</Button>}
        {priceMedium && <Button size="small">Mediano {priceMedium}</Button>}
        {!priceLarge && !priceMedium && price && <Button size="small">Precio - {price}</Button>}
      </CardActions>

     
    </Card>
  );
}
