import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
   
    maxWidth:225,
    minWidth:225,
    minHeight:200,
    maxHeight:200,
    textAlign:"left",
    paddingLeft:15,
    display: "inline-block",
    margin:12
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function ProdCard(props) {
    const classes = useStyles();
   
  
    return (
     
      <Card className={classes.root}>
        <CardContent>
         
          <Typography variant="h4" >
           {props.name}
          </Typography>
        
          <Typography variant="h5" component="p">
           Price {props.price}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
     
    );
  }
export default ProdCard;