import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={pokemon.name}
        height="140"
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
      />
      <CardContent>
        <Typography variant="h6">{pokemon.name}</Typography>
      </CardContent>
    </Card>
  );
}

export default PokemonCard;
