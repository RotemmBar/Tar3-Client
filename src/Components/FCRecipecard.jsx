import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FCRecipes from './FCRecipes';
import FCIngredient from './FCIngredient';
import { useState } from 'react';

export default function FCRecipecard(props) {

  const calcTotalCalories = () => {
    let totalCalories = 0;
    props.inglist.map((item) => {
      totalCalories += item.Calories;
    });
    return totalCalories; };

    const [isShown, setIsShown] = useState(false);

    const handleclick=()=>{
      setIsShown(current => !current);       
    }

      


  return (
    <div className='col-sm-12'>
    <Card sx={{ maxWidth: 500 }}>
    <CardMedia
      sx={{ height: 300 }}
      image={props.image}
      title={props.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {props.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Cooking Method:{props.cookingmethod}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Cooking Time:{props.cookingtime}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Calories:{calcTotalCalories()}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="large" onClick={handleclick}>Show Ingredients</Button>
    </CardActions>
    <div style={{display: isShown ? 'block' : 'none'}}>            
            {props.inglist.map((ing)=>{    
              return(        
          <FCIngredient 
          key={ing.Id} 
          name={ing.Name}
          image={ing.Image}
          calories={ing.Calories}
          Id={ing.Id}
          />
              )
           })}
       </div>
  </Card>
  </div>
);  
  }
