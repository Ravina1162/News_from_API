import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardMedia, CardContent, Button, Typography, Grid, Box } from '@mui/material';
import rpaper from './Images/rpaper.jpg'

// const address = ['country=us', 'sources=bbc-news', 'country=de', 'q=trump']
const Trump = () => {
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        const url='https://newsapi.org/v2/top-headlines?q=trump&apiKey=300599394c264b33b1f958a3ffd4777b';
        const fetchdata = async() =>{
            try{
                const response=await fetch(url);
                const jsondata=await response.json();
                // console.log(jsondata.articles)
                setNotes(jsondata.articles)
            }
            catch(err)
            {
                console.log("error",err);//9-22:url props;onclick
            }
        };
        fetchdata();

    },[]);

    const handleCardHover = (event) => {
        event.currentTarget.style.transform = 'scale(1.2)';
        const title = event.currentTarget.querySelector('.title');
    if (title) {
      title.style.color = 'red';
    }
      };
    
      const handleCardLeave = (event) => {
        event.currentTarget.style.transform = 'scale(1)';
      };

   

  return (
    <div  style={{ marginTop: '100px' }}>
        <Box p={3}>
        <Grid container spacing={5}>
           {notes.map((dataobj, idx)=>{
            return(
                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', borderRadius: '8px' }} key={idx}>
                <CardMedia
                    component="img"
                    alt="no image found"
                    height="180"
                    image= {dataobj.urlToImage || rpaper }
                    // sx={{  paddingTop: '56.25%', objectFit: 'cover', transition: 'transform 0.2s' }}
                    style={{ transition: 'transform 0.5s', transform: 'scale(1)' }}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
                />
            
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: '1.2' }}>
                    {dataobj.title}
                    </Typography> 
                    <p>{dataobj.publishedAt}</p>
                    <Typography variant="body2" color="text.secondary">
                   {dataobj.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={dataobj.url}>Read More</Button>
                </CardActions>
                </Card>
                </Grid>
            )
            
           })
            }
        </Grid>
        </Box>
    </div>
  )
}

export default Trump