import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";

function ShowMore(props) {
  return (
    <div className="show-more">
      {/* <p>test {props.nom}</p> */}
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ backgroundColor: "lightgreen" }}
        >
          <Typography className="accordionTypography">
            Développeur d'applications JavaScript React
          </Typography>
          <Typography
            className="accordionTypography"
            sx={{ color: "text.secondary" }}
          >
            {" "}
            2022 - 2024
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordionDetails">
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> */}
          <Typography>RNCP Niveau 6 (bac +3/4) - OpenClassRooms</Typography>
          <ul class="">
            <li>Intégration de maquettes (HTML, CSS)</li>
            <li>Responsive web design</li>
            <li>Animation CSS3</li>
            <li>JavaScript (DOM, Event, ...)</li>
            <li>Accessibilité</li>
            <li>Création d'application ReactJS</li>
            <li>Système de gestion d'état avec Redux</li>
            <li>Optimisation des performances</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default ShowMore;
