import React from "react";
import {
  Paper,
  Typography,
  Button,
  Divider,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
} from "@material-ui/core";

const Review = () => {
  return (
    <div>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4">Reviews</Typography>
        </div>
        <br />
        <Card style={{ marginBottom: "20px" }}>
          <CardHeader title="Abhijeet Welankar"></CardHeader>
          <CardContent style={{ paddingTop: "0px" }}>
            <Typography variant="body1">
              <Typography variant="p">
                Review by Aninet Pasthe | Star Given: ⭐ ⭐ ⭐ ⭐ ⭐
              </Typography>
              <Divider style={{ marginTop: "10px" }} />
              <List>
                <ListItem>
                  <b>Review Text:</b>
                </ListItem>
                <ListItem>
                  We have been taking our pet for vaccination to Dr. Velankar
                  for 6 years. Also, our relatives have brought their pets for
                  observation to him since ages now. He is very experienced and
                  has quite a good name in his profession. We have never faced
                  any issues when it comes to his service. He is quite accurate
                  and honest in his advice. Our pet has never fallen severely
                  sick under his guidance. Unlike other veterinary doctors who
                  ask you to get your pet injected with unwanted boosters or
                  syrups, he is not among them. The only issue I find is the
                  clinic. It needs maintenance.
                </ListItem>
                <ListItem style={{ justifyContent: "flex-end" }}>
                  <Button variant="outlined" href="#">
                    View
                  </Button>
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ marginBottom: "20px" }}>
          <CardHeader title="Abhijeet Welankar"></CardHeader>
          <CardContent style={{ paddingTop: "0px" }}>
            <Typography variant="body1">
              <Typography variant="p">
                Review by Aninet Pasthe | Star Given: ⭐ ⭐ ⭐ ⭐ ⭐
              </Typography>
              <Divider style={{ marginTop: "10px" }} />
              <List>
                <ListItem>
                  <b>Review Text:</b>
                </ListItem>
                <ListItem>
                  We have been taking our pet for vaccination to Dr. Velankar
                  for 6 years. Also, our relatives have brought their pets for
                  observation to him since ages now. He is very experienced and
                  has quite a good name in his profession. We have never faced
                  any issues when it comes to his service. He is quite accurate
                  and honest in his advice. Our pet has never fallen severely
                  sick under his guidance. Unlike other veterinary doctors who
                  ask you to get your pet injected with unwanted boosters or
                  syrups, he is not among them. The only issue I find is the
                  clinic. It needs maintenance.
                </ListItem>
                <ListItem style={{ justifyContent: "flex-end" }}>
                  <Button variant="outlined" href="#">
                    View
                  </Button>
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};

export default Review;
