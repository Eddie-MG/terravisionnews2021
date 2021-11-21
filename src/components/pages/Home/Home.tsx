import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@mui/material';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import { GlobalState } from '../../../redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { Actions } from '../../../redux/actions/map';
import { DeckMap } from '../../molecules/DeckMap';
import { ArticleCard } from '../../molecules/ArticleCard';
import { GeoJsonStrippedFeature } from '../../../types/entity/CsvDto';

interface Props { geoJson: GeoJsonStrippedFeature[] }

export const Home: FC<Props> = props => {
  const dispatch = useDispatch();
  // Dispatch polygon request action with statically loaded data
  dispatch(Actions.polygonRequest({ geoJson: props.geoJson }));

  const articleData = [
    {
      title: '5 Cheese Hacks Only the Pros Know',
      body: 'Follow these steps and you\'ll be wowing your friends with your cheese skills.',
      category: 'Food',
      date: '21/11/2021'
    },
    {
      title: '11 Hottest Street Light Trends for 2022',
      body: 'Only few people have access to the knowledge on the latest street light trends.',
      category: 'Style & Fashion',
      date: '05/12/2021'
    },
    {
      title: '10 Ways Investing in Maple Syrup Can Make You a Millionaire',
      body: 'Few people know there\'s money in maple syrup read this article to find out how.',
      category: 'Dolla Dolla',
      date: '53/13/2021'
    },
    {
      title: '9 Best Practices for Remote Workers in the Shark Industry',
      body: 'We know remote working has affected all of us but what about the sharks...',
      category: 'Nature',
      date: '29/02/2022'
    },
  ]

  return (
    <>
      <Head>
        <title>Terravision News</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
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
              Terravision News
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
          {articleData.map(article => <Grid key={article.title} item xs={6}>
            <ArticleCard articleTitle={article.title} articleBody={article.body} articleCategory={article.category} articleDate={article.date} />
          </Grid>)}
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