import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import { relative } from 'path';

function Slider(props: any)
{
    var items = [
        {
            url:"https://baggage.nl/wp-content/uploads/2018/06/Global-Blue_girl-Shopping-horizontal.jpg"
        },
        {
            url:"https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX32165829.jpg"
        }
    ]

    return (
        <Carousel sx={{maxWidth:'80%',maxHeight:400,margin:'auto'}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props: { item: { url: string | undefined; }; })
{
    return (
        <Paper sx={{position:'relative'}}>
             <CardMedia
        sx={{ height: '450px',width:'100%',margin:'auto',marginTop:1,marginBottom:1}}
        image={props.item.url}
        title="green iguana"
      />
        </Paper>
    )
}

export default Slider