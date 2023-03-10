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
import Grid from "@mui/material/Grid";
import { spacing } from "@mui/system";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";
import PrimaryLogo from "../../assets/primary-logo.png";
import SecondaryLogo2 from "../../assets/secondary2-logo.png";
import Agent from "../../assets/agent.png";
import Mail from "../../assets/mail.png";
import LifeInsuranceChip from "../../assets/life-insurance-chip.png";
import AnnuityInsuranceChip from "../../assets/annuity-insurance-chip.png";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const SimpleAccordion = () => {
  return (
    <Accordion sx={{ backgroundColor: "#EFEFF0" }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container sx={{ width: "100%" }} columnGap={10}>
          <Grid item xs={2.5}>
            <Grid container>
              <Grid item xs={2} textAlign="center">
                <img src={PrimaryLogo} />
              </Grid>
              <Grid item xs={1} textAlign="center">
                <img src={Agent} />
              </Grid>
              <Grid item xs={3.5} textAlign="center">
                <Typography>Herry Stuart</Typography>
              </Grid>
              <Grid item xs={0.5} textAlign="center">
                <hr
                  style={{
                    border: "none",
                    borderLeft: "1px solid #A3A3A3",
                    height: "20px",
                    width: "0",
                    marginTop: "1px",
                    marginBottom: "0px",
                    padding: "none",
                  }}
                />
              </Grid>

              <Grid item xs={1} textAlign="center" sx={{ paddingLeft: "none" }}>
                <img src={Mail} />
              </Grid>
              <Grid item xs={4}>
                <Typography>herryb@gmail.com</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2.5}>
            <Grid container>
              <Grid item xs={1.5}>
                <img src={SecondaryLogo2} />
              </Grid>
              <Grid item xs={1} textAlign="center">
                <img src={Agent} />
              </Grid>
              <Grid item xs={3.5} textAlign="center">
                <Typography>Johnson M</Typography>
              </Grid>
              <Grid item xs={0.5} textAlign="center">
                {" "}
                <hr
                  style={{
                    border: "none",
                    borderLeft: "1px solid #A3A3A3",
                    height: "20px",
                    width: "0",
                    marginTop: "1px",
                    marginBottom: "0px",
                    padding: "none",
                  }}
                />{" "}
              </Grid>

              <Grid item xs={1} textAlign="center" sx={{ paddingLeft: "none" }}>
                <img src={Mail} />
              </Grid>
              <Grid item xs={4}>
                <Typography>johnson@gmail.com</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container columnSpacing={3}>
              <Grid item xs={6}>
                <img src={LifeInsuranceChip} alt="life-insurance" />
              </Grid>
              <Grid item xs={6}>
                <img src={AnnuityInsuranceChip} alt="annuity-insurance" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const AddNewAgents = () => {
  return (
    <>
      <Helmet title="Add New Agent" />

      {/* Navigation Section */}
      <Grid container justifyContent="space-between">
        <Grid item xs={4}>
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
        </Grid>
      </Grid>

      <Divider my={2} mb={4} />

      <Grid container spacing={0}>
        <Grid item xs={12} sx={{ backgroundColor: "#FFFFFF", padding: "20px" }}>
          <SimpleAccordion />
        </Grid>
      </Grid>
    </>
  );
};

export default AddNewAgents;
