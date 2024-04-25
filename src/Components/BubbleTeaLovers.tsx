
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { LiaStarSolid } from "react-icons/lia";
import "../styles/BubbleTeaLovers.css";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ReviewCard = ({ avatar, title, content }: { avatar: string; title: string; content: string })=> {
  return (
    <Card sx={{ maxWidth: 345 }} className="review-card">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
            {avatar}
          </Avatar>
        }
 action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
  <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon /> 
        </IconButton>
        <CardActions disableSpacing className="card-actions">
        <div className="stars">
          <LiaStarSolid className="star-icon" />
          <LiaStarSolid className="star-icon" />
          <LiaStarSolid className="star-icon" />
          <LiaStarSolid className="star-icon" />
          <LiaStarSolid className="star-icon" />
        </div>
      </CardActions>
      </CardActions>

      
    </Card>
  );
};

const BubbleTeaLovers = () => {
  return (
    <div className="bubble-tea-lovers-wrapper">
      <div className="bubble-tea-lovers">
        <h2>Bubble Tea Lovers <IconButton  aria-label="add to favorites" style={{ color: 'red' }}>
          <FavoriteIcon />
        </IconButton></h2>
        <div className="review-container">
          <div className="column">
            <ReviewCard
              avatar="T"
              title="Tingting Panda #拉丁靈魂的台灣小女孩"
              content="Sabor real y 100% Natural sin adictivo quimico, bebidas típica de Taiwán 👌"
            />
            <ReviewCard
              avatar="A"
              title="Augusto escobar garcia"
              content="Excelente bebida completamente natural."
            />
            
          </div>
          <div className="column">
            <ReviewCard
              avatar="J"
              title="Javier Liang"
              content="Es un buen lugar para disfrutar del té de burbujas y pasar el rato con amigos."
            />
            <ReviewCard
              avatar="E"
              title="Esteban Chuang"
              content="Súper recomendado el bubble tea."
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleTeaLovers;