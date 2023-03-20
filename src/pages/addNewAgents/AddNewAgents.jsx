import React, { useState } from "react";
import styled from "@emotion/styled";
import { Add, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card,
  CardContent,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider as MuiDivider,
  FormControlLabel,
  FormGroup,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { spacing } from "@mui/system";
import PropTypes from "prop-types";
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

const Checkboxes = ({ checkboxState, setCheckboxState }) => {
  const handleChange = (event) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
    console.log("checkedddd", event, event.target.name);
  };

  const { life, annuity } = checkboxState;

  return (
    <Grid container direction="row">
      <Grid item>
        <Typography
          variant="outlined"
          sx={{ color: "#7A7A7A" }}
          gutterBottom
          display="inline"
        >
          Type*
        </Typography>
      </Grid>
      <Grid item>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ padding: "0px 0px 0px 20px" }}
                checked={life}
                onChange={handleChange}
                name="life"
              />
            }
            label="Life"
          />
        </FormGroup>
      </Grid>

      <Grid item>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ padding: "0px 0px 0px 20px" }}
                checked={annuity}
                onChange={handleChange}
                name="annuity"
              />
            }
            label="Annuity"
          />
        </FormGroup>
      </Grid>
    </Grid>
  );
};

const SelectCarriersModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Card mb={6}>
      <CardContent>
        <Paper mt={4}>
          <div>
            <Button
              mr={2}
              variant="contained"
              color="primary"
              sx={{ padding: "10px 25px" }}
              onClick={() => setOpen(true)}
            >
              <Add />
              Add Carrier
            </Button>
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                Select Carriers
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={antoine}
                      // onChange={handleChange}
                      name="antoine"
                    />
                  }
                  label="Select All"
                />
              </DialogTitle>
              <DialogContent>{/* Add Checkboxes Here */}</DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ padding: "10px 40px" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ padding: "10px 40px" }}
                >
                  Continue
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Paper>
      </CardContent>
    </Card>
  );
};

const AccordionSummaryContent = () => (
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
);

const AccordionDetailsContent = ({ checkboxState, setCheckboxState }) => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "-30px" }}
    >
      <Grid item>
        <Grid container columnGap={10}>
          <Grid item sx={{ marginTop: "20px" }}>
            <Typography>Primary Agent</Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="standard"
              id="standard-multiline-flexible"
              label="Primary Agent Name"
              required
            />
          </Grid>
          <Grid item>
            <TextField
              variant="standard"
              id="standard-multiline-flexible"
              label="Primary Agent Email"
              required
            />
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid item>
        <Grid container columnGap={9}>
          <Grid item sx={{ marginTop: "20px" }}>
            <Typography>Secondary Agent</Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="standard"
              id="standard-multiline-flexible"
              label="Primary Agent Name"
              required
            />
          </Grid>
          <Grid item>
            <TextField
              variant="standard"
              id="standard-multiline-flexible"
              label="Primary Agent Email"
              required
            />
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid item>
        <Checkboxes
          checkboxState={checkboxState}
          setCheckboxState={setCheckboxState}
        />
      </Grid>
    </Grid>
  );
};

const SimpleAccordion = ({ checkboxState, setCheckboxState }) => {
  let [flagAccordianExpanded, setFlagAccordianExpanded] = useState(false);
  // console.log(flagAccordianExpanded);
  return (
    <Accordion
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

const TabsContainer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Life | Template" {...a11yProps(0)} />
          <Tab label="Annuity | Template" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Grid container>
        <Grid item>
          <TabPanel value={value} index={0}>
            <Grid
              sx={{
                backgroundColor: "#FFFFFF",
                width: "77.5vw",
                height: "45vh",
                padding: "none !important",
              }}
              container
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Grid item>
                <SelectCarriersModal />
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
        <Grid item>
          <TabPanel value={value} index={1}>
            <Grid
              sx={{
                backgroundColor: "#FFFFFF",
                width: "77.5vw",
                height: "45vh",
                padding: "none !important",
              }}
              container
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Grid item>
                <SelectCarriersModal />
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
};

const AddNewAgents = () => {
  const [checkboxState, setCheckboxState] = React.useState({
    life: false,
    annuity: false,
  });
  return (
    <div>
      <Helmet title="Add New Agent" />

      {/* Navigation Section */}
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginBottom: "15px" }}
      >
        <Grid item xs={4}>
          <Typography variant="h3" gutterBottom display="inline">
            Agents
          </Typography>
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
            <Grid item>
              <TabsContainer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddNewAgents;
