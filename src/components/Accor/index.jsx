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

export default function Accor() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="w-[790px] mt-12">
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
        <AccordionDetails sx={{ backgroundColor: "#FAFAFA" }}>
          <Typography>
            Dolor <span className="font-bold">almesit amet, </span> consectetur
            adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan
            crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same
            vice, chillwave vexillologist incididunt ut labore consectetur
            <span className="ml-2 text-[#D633A3] ">adipiscing</span> elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
