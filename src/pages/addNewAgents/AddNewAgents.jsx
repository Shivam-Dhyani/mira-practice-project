import styled from "@emotion/styled";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { spacing } from "@mui/system";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const AddNewAgents = () => {
  return (
    <>
      <Helmet title="Add New Agent" />

      {/* Navigation Section */}
      <Grid2 container justifyContent="space-between">
        <Grid2 item xs={4}>
          <Typography variant="h3" gutterBottom display="inline">
            Agents
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Pages
            </Link>
            <Link component={NavLink} to="/agents">
              Agents
            </Link>
            <Typography>Add New Agent</Typography>
          </Breadcrumbs>
        </Grid2>
      </Grid2>

      <Divider my={2} mb={4} />

      <Grid2 container spacing={0}>
        <Grid2
          item
          xs={12}
          sx={{ backgroundColor: "#FFFFFF", padding: "20px" }}
        >
          <Accordion sx={{ backgroundColor: "#EFEFF0" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid2>
        <Grid2></Grid2>
      </Grid2>
    </>
  );
};

export default AddNewAgents;
