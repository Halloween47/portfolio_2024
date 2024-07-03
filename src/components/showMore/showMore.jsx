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
            Web Developper
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
          <div className="accordionDetailsRow1">
            <Typography>ER Digital </Typography>
            <Typography>14000 Houlgate</Typography>
          </div>
          <div className="accordionDetailsRow2">
            <Typography>
              En tant que développeur web j'ai utilisé mes compétences en PHP
              pour créer des applications web dynamiques et interactives..
            </Typography>
          </div>
          <div className="accordionDetailsRow3">
            <p>Tech1</p>
            <p>Tech1</p>
            <p>Tech1</p>
            <p>Tech1</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ backgroundColor: "lightgreen" }}
        >
          <Typography className="accordionTypography">
            Web Developper
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
          <div className="accordionDetailsRow1">
            <Typography>ER Digital </Typography>
            <Typography>14000 Houlgate</Typography>
          </div>
          <div className="accordionDetailsRow2">
            <Typography>
              En tant que développeur web j'ai utilisé mes compétences en PHP
              pour créer des applications web dynamiques et interactives..
            </Typography>
          </div>
          <div className="accordionDetailsRow3">
            <p>Tech1</p>
            <p>Tech1</p>
            <p>Tech1</p>
            <p>Tech1</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ backgroundColor: "lightgreen" }}
        >
          <Typography className="accordionTypography">
            Web Developper
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
          <div className="accordionDetailsRow1">
            <Typography>ER Digital </Typography>
            <Typography>14000 Houlgate</Typography>
          </div>
          <div className="accordionDetailsRow2">
            <Typography>
              En tant que développeur web j'ai utilisé mes compétences en PHP
              pour créer des applications web dynamiques et interactives..
            </Typography>
            <code>
              En tant que développeur web j'ai utilisé mes compétences en PHP
              pour créer des applications web dynamiques et interactives..
            </code>
          </div>
          <div className="accordionDetailsRow3">
            <p>Tech1</p>
            <p>Tech1</p>
            <p>Tech1</p>
            <p>Tech1</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default ShowMore;
