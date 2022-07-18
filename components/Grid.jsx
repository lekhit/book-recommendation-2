import { Masonry } from '@mui/lab';
import { Grid } from '@mui/material';
import { Item } from './Grid_top';
import Mycard from './card';
import { useState, useEffect } from 'react';
export default function myGrid(props) {
  const articles = props.articles;
  console.log(articles);
  return (
    <>
      <Masonry columns={{ sx: 1, md: 2, lg: 3 }} spacing={0.5}>
        {articles.map((height, index) => (
          <Grid key={index} item sx={{ p: 2 }}>
            <Item>
              <Mycard key={index} article={height} />
            </Item>
          </Grid>
        ))}
      </Masonry>
    </>
  );
}
