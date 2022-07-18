import { Masonry } from '@mui/lab';
import { Grid, Container } from '@mui/material';
import { Item } from './Grid_top';
import Mycard from './card';
import Mysample from './sample';
import { useState, useEffect } from 'react';
import Backdrop from './backdrop';

var axios = require('axios').default;

export default function LinearDeterminate(props) {
  const [articles, setArticles] = useState();
  const [open, setOpen] = useState(false);
  const isbn = props.isbn;
  useEffect(() => {
    if (props.articles) setOpen(false);
    else setOpen(true);
  });

  return (
    <>
      <Container sx={{ minHeight: 253, pt: 18 }} id="scrollableDiv">
        <Masonry columns={{ sx: 1, md: 2, lg: 3 }} spacing={2.5}>
          {open && Backdrop}
          {props.articles &&
            props.articles.map((height, index) => (
              <Grid key={index}>
                <Item>
                  <Mycard key={index} article={height} open={true} />
                </Item>
              </Grid>
            ))}
        </Masonry>
      </Container>
    </>
  );
}
