import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@mui/material';
import React, { FC } from 'react';
import { useSelector } from 'react-redux'
import { GlobalState } from '../../../redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { DeckMap } from '../../molecules/DeckMap';
import { ArticleCard } from '../../molecules/ArticleCard';

export const Home: FC = () => {
  const statePolygons = useSelector((state: GlobalState) => state.map.polygons);

  return (
    <>
      <OverlayDiv>
        <AppBar>
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
      </OverlayDiv>
      <DeckMap />
      <Box sx={{ width: '100%', height: 550, marginTop: 2 }}>
      </Box>
      <OverlayDiv>
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
      </OverlayDiv>
    </>
  )
}

const OverlayDiv = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
`