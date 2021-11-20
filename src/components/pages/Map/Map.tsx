import { FC } from 'react';
import { useSelector } from 'react-redux'
import { GlobalState } from '../../../redux';

export const PolygonPage: FC = () => {
  const statePolygons = useSelector((state: GlobalState) => state.map.polygons);
  const stateCountries = useSelector((state: GlobalState) => state.map.countries);

  console.log(stateCountries)

  return <h1>{JSON.stringify(statePolygons)}</h1>
}