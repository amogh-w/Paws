import React from "react";
import {
  Paper,
  Typography,
  // Button,
  Divider,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  Grid,
} from "@material-ui/core";

import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../queries/queries";

const SingleReview = ({ loading, error, data }) => {
  if (loading) return <Typography>Loading ...</Typography>;
  if (error) return <Typography>Error ...</Typography>;

  console.log(data);

  return (
    <div>
      {data.reviews.map((review) => {
        return (
          <Card style={{ marginBottom: "20px" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={review.doctor.photo}
                style={{ width: "100px", padding: "5px" }}
                alt="Profile"
              />
              <CardHeader title={`Dr. ${review.doctor.name}`}></CardHeader>
            </div>
            <CardContent style={{ paddingTop: "0px" }}>
              <Typography variant="body1">
                <Typography variant="p">
                  Review by {review.owner.name} | Star Given: {review.rating} ⭐
                </Typography>
                <Divider style={{ marginTop: "10px" }} />
              </Typography>
              <Grid container>
                <Grid item xs={6}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={review.owner.photo}
                      style={{ width: "100px", padding: "5px" }}
                      alt="Profile"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <List>
                    <ListItem>
                      <b>Review Text:</b>
                    </ListItem>
                    <ListItem>
                      <Typography>{review.feedback}</Typography>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

const Review = () => {
  const { loading, error, data } = useQuery(GET_REVIEWS);

  return (
    <div>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4">Reviews</Typography>
        </div>
        <br />
        <SingleReview loading={loading} error={error} data={data} />
      </Paper>
    </div>
  );
};

export default Review;
