import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";

function ShowMore(props) {
  return (
    <div className="show-more">
      <p>test {props.nom}</p>
      <Accordion className="testColor">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ backgroundColor: 'lightgreen' }}
        >
          <Typography>Développeur d'applications JavaScript React</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Decembre 2022 - Fevrier 2024</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default ShowMore;
