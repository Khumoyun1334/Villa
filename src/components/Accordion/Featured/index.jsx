import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0.6px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
    borderRadius: " 4px",
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0, 0, 0, .03)" : "rgba(0, 0, 0, .02)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Featured() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            sx={{ fontWeight: "500", fontSize: "18px", color: "#f35525" }}
          >
            Best useful links ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Get <strong> the best villa</strong> website template in HTML CSS
            and Bootstrap for your business. TemplateMo provides you the{" "}
            <a
              className="text-[#0D6EFD]"
              href="https://www.google.com/search?q=best+free+css+templates"
              target="_blank"
            >
              best free CSS templates
            </a>
            in the world. Please tell your friends about it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography
            sx={{ fontWeight: "500", fontSize: "18px", color: "#1e1e1e" }}
          >
            How does this work ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
            tempor incididunt ut labore consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography
            sx={{ fontWeight: "500", fontSize: "18px", color: "#1e1e1e" }}
          >
            Why is Villa Agency the best ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
            tempor incididunt ut labore consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
