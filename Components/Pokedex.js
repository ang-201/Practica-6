import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material'; 
import './Pokedex.css';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="pokedex-container">
      <Grid container spacing={3}> {}
        {pokemons.map((pokemon, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}> {}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {pokemon.name}
                </Typography>
                <CardMedia
                  component="img"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                  alt={pokemon.name}
                  height="140"
                />
                <Link to={`/pokemon/${index + 1}`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Ver detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Pokedex;
