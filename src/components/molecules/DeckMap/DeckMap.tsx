import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { useSelector } from 'react-redux'
import { GlobalState } from '../../../redux';

export const DeckMap: FC = () => {
  const statePolygons = useSelector((state: GlobalState) => state.map.polygons);

  return (
    <Typography color={'white'}>This is the Map</Typography>
  )
}