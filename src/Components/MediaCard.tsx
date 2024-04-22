import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface MediaCardProps {
  image: string;
  title: string;
  description: string;
  priceLarge?: string; 
  priceMedium?: string;
  price?: string; 

}

export default function MediaCard({ image, title, description, priceLarge, priceMedium, price }: MediaCardProps) {
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
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        {priceLarge && <Button size="small">Grande  {priceLarge}</Button>}
        {priceMedium && <Button size="small">Mediano {priceMedium}</Button>}
        {!priceLarge && !priceMedium && price && <Button size="small">Precio - {price}</Button>}
      </CardActions>
    </Card>
  );
}
