import styled from "@emotion/styled";
import { ExpandMore, Search } from "@mui/icons-material";
import {
  Grid,
  Typography,
  Divider as MuiDivider,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { spacing } from "@mui/system";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/back-icon.png";

const CustomTextField = styled(TextField)({
  backgroundColor: "#EFEFF0",
  width: "230px",
  "& input": {
    padding: "9px 16px",
  },
  "& fieldset": {
    border: "none",
  },
});

const Divider = styled(MuiDivider)(spacing);

const AccordionSummaryContent = () => (
  <Grid container sx={{ width: "100%" }} columnGap={10}>
    <Grid item xs={2.5}>
      {/* <Grid container>
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
      </Grid> */}
    </Grid>
    <Grid item xs={2.5}>
      {/* <Grid container>
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
          <Typography>johnson@gmail.com</Typography>
        </Grid>
      </Grid> */}
    </Grid>
    <Grid item xs={1}>
      {/* <Grid container columnSpacing={3}>
        <Grid item xs={6}>
          <img src={LifeInsuranceChip} alt="life-insurance" />
        </Grid>
        <Grid item xs={6}>
          <img src={AnnuityInsuranceChip} alt="annuity-insurance" />
        </Grid>
      </Grid> */}
    </Grid>
  </Grid>
);

const AccordionDetailsContent = ({ checkboxState, setCheckboxState }) => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "-30px" }}
    ></Grid>
  );
};

const SimpleAccordion = ({ checkboxState, setCheckboxState }) => {
  let [flagAccordianExpanded, setFlagAccordianExpanded] = useState(false);
  // console.log(flagAccordianExpanded);
  return (
    <Accordion
      defaultExpanded="true"
      sx={{
        backgroundColor: "#EFEFF0",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => setFlagAccordianExpanded(!flagAccordianExpanded)}
      >
        {!flagAccordianExpanded && <AccordionSummaryContent />}
      </AccordionSummary>
      <AccordionDetails>
        <AccordionDetailsContent
          checkboxState={checkboxState}
          setCheckboxState={setCheckboxState}
        />
      </AccordionDetails>
    </Accordion>
  );
};

const AddNewTemplate = () => {
  const navigate = useNavigate();
  const [checkboxState, setCheckboxState] = React.useState({
    life: false,
    annuity: false,
  });
  return (
    <>
      <Helmet title="Carriers" />

      {/* Navigation Section */}
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginBottom: "15px" }}
      >
        <Grid item>
          <img
            src={BackIcon}
            alt="previous page"
            // style={{ marginTop: "10px" }}
          />
          {"  "}
          <Typography variant="h3" display="inline">
            New Template
          </Typography>
        </Grid>

        <Grid item>
          <Grid
            container
            sx={{ justifyContent: { xs: "flex-start", md: "flex-end" } }}
          >
            <Grid item>
              <CustomTextField
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider my={2} mb={4} />

      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          sx={{ backgroundColor: "#FFFFFF", padding: "20px", height: "67vh" }}
        >
          <SimpleAccordion
            checkboxState={checkboxState}
            setCheckboxState={setCheckboxState}
          />
          <Grid
            container
            sx={{
              backgroundColor: "#EFEFF0",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <Grid item>{/* <TabsContainer /> */}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AddNewTemplate;
