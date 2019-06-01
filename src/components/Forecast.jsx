import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';


function Forecast(props) {
  const { classes } = props;

  const card = (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography  color="textSecondary" gutterBottom>
            Date
          </Typography>
          <img src='http://openweathermap.org/img/w/10d.png' />
          <Typography variant="h5" component="h2">
            description
          </Typography>
          <Typography variant="body2" component="p">
            Min Temp
          </Typography>
          <Typography variant="body2" component="p">
            Max Temp
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const cards = [];

  for (var i=0;i<5;i++) {
    cards.push(
      <Grid item xs={2} key={i}>
        {card}
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid direction="row" justify="space-between" alignItems="center" container>
          {cards}
      </Grid>
    </Grid>
  );
}

export default Forecast;
