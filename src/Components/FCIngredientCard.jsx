import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function FCIngredientCard(props) {
  return (
    <div className='ingredients' style={{ display:'flex', justifyContent:'center' }} > 
    <Card  sx={{ maxWidth: 400 }}>
    <CardMedia
      sx={{ height: 300 }}
      image={props.image}
      title={props.name}
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {props.Id}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
      {props.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Calories:{props.calories}
      </Typography>
    </CardContent>
  </Card>
    </div>
  )
}
