import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';

interface Props { articleTitle: string; articleBody: string; articleCategory: string; articleDate: string }

export const ArticleCard: FC<Props> = props => {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.articleCategory}
        </Typography>
        <Typography variant="h5" component="div">
          {props.articleTitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.articleDate}
        </Typography>
        <Typography variant="body2">
          {props.articleBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { window.location.href = 'https://mobile.twitter.com/realDonaldTrump' }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}