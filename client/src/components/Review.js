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
            <Grid container>
              <Grid item xs={6}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={review.doctor.photo}
                    style={{ width: "100px", padding: "5px" }}
                    alt="Profile"
                  />
                  <CardHeader title={`Dr. ${review.doctor.name}`}></CardHeader>
                </div>
              </Grid>
              <Grid item xs={6}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                  width="300"
                  height="150"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </Grid>
            </Grid>
            <div style={{ textAlign: "center" }}></div>
            <CardContent style={{ paddingTop: "0px" }}>
              <Typography variant="body1">
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
                    <br />
                    <Typography variant="p">
                      Review by {review.owner.name} | Star Given:{" "}
                      {review.rating} ⭐
                    </Typography>
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
