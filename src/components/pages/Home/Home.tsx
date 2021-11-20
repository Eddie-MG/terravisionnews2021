import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@mui/material';
import React, { FC } from 'react';
import { useSelector } from 'react-redux'
import { GlobalState } from '../../../redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { DeckMap } from '../../molecules/DeckMap';
import { ArticleCard } from '../../molecules/ArticleCard';

export const Home: FC = () => {
  const statePolygons = useSelector((state: GlobalState) => state.map.polygons);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            < MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: '100%', height: 550, backgroundColor: 'black', marginTop: 2 }}>
        <DeckMap />
      </Box>
      <Grid container spacing={4} sx={{ marginY: 2 }}>
        <Grid item xs={6}>
          <ArticleCard />
        </Grid>
        <Grid item xs={6}>
          <ArticleCard />
        </Grid>
        <Grid item xs={6}>
          <ArticleCard />
        </Grid>
        <Grid item xs={6}>
          <ArticleCard />
        </Grid>
      </Grid>
    </>
  )
}