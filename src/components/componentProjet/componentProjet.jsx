import React from "react";

import imgTest from "../../assets/profil.jpg";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Collapse from "@mui/material/Collapse";
import { red } from "@mui/material/colors";

import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ComponentProjet() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="componentProjet">
      {/* <Card sx={{ maxWidth: 345 }}> */}
      <Card sx={{ width: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={imgTest}
          // alt="Paella dish"
        />
        <CardContent>
          <CardActions disableSpacing>
            <Typography variant="h6" gutterBottom>
              Projet Kasa
            </Typography>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Stack direction="row" spacing={1} mx={1}>
            <Chip label="React" />
            <Chip label="Node" />
            <Chip label="Express" />
          </Stack>
        </CardContent>
        {/* <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Stack direction="row" spacing={1} my={3}>
            <List sx={style}>
              <Divider variant="middle" component="li" />
            </List>
          </Stack>
          <Stack direction="row" spacing={1} mx={1}>
            <Typography variant="h6" gutterBottom>
              Contexte
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} mx={1}>
            <Typography variant="subtitle1" gutterBottom>
              Projet OpenClassRooms
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} my={3}>
            <List sx={style}>
              <Divider variant="middle" component="li" />
            </List>
          </Stack>
          <CardContent>
            <Box>
              {/* <Typography variant="body2" color="text.secondary"> */}
              <Stack direction="row" spacing={1}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className="textLeft"
                >
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography className="textLeft">
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
              </Stack>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default ComponentProjet;
