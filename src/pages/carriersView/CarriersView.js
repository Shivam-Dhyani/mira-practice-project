import React from "react";
import styled from "@emotion/styled";
import { ExpandMore, Search } from "@mui/icons-material";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { spacing } from "@mui/system";
import { Helmet } from "react-helmet-async";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LifeInsuranceLogo from "../../assets/life-insurance-logo.png";
import AnnuityInsuranceLogo from "../../assets/annuity-insurance-logo.png";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

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

const CustomLabelTypography = styled(Typography)`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #7a7a7a;
`;

const CustomInputTypography = styled(Typography)`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #000000;
`;

const CarrierDetailSection = () => (
  <Grid
    item
    sx={{
      backgroundColor: "#EFEFF0",
      width: "99.5%",
      padding: "15px 20px",
      borderRadius: "10px",
    }}
  >
    <Grid container>
      {/* Left Column */}
      <Grid item xs={9.4}>
        <Grid container justifyContent="space-between" paddingRight={4}>
          <Grid item xs={5}>
            <Grid container>
              <Grid item sx={{ width: "100%", padding: "5px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    <CustomLabelTypography>Cut Off</CustomLabelTypography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomInputTypography>Friday</CustomInputTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "5px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    <CustomLabelTypography>Release Date</CustomLabelTypography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomInputTypography>Tuesday</CustomInputTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "5px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    <CustomLabelTypography>
                      Min Ck/Min EFT
                    </CustomLabelTypography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomInputTypography>
                      Check: $50: EPF: $50
                    </CustomInputTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "5px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    <CustomLabelTypography>
                      Commissionable Policy
                    </CustomLabelTypography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomInputTypography>
                      Over $250K varies ~$65
                    </CustomInputTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "5px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    <CustomLabelTypography>
                      Changeback Schedue
                    </CustomLabelTypography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomInputTypography>
                      100% Month 1-6 50% Month 7-12 CB to agent BA 40$ bonus
                      will be CB to us
                    </CustomInputTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "5px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    <CustomLabelTypography>
                      Advancement Cap
                    </CustomLabelTypography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomInputTypography>
                      $5,000 per policy
                    </CustomInputTypography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container>
              <Grid item sx={{ width: "100%", padding: "5px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    <CustomLabelTypography>
                      Commission Contact
                    </CustomLabelTypography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomInputTypography>800-255-2702</CustomInputTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "5px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    <CustomLabelTypography>
                      Carrier Grids Dated
                    </CustomLabelTypography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomInputTypography>
                      2019-07-01To07:00:00.000z
                    </CustomInputTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "5px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    <CustomLabelTypography>Other Notes</CustomLabelTypography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomInputTypography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </CustomInputTypography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          color="#1565C0"
          paddingTop="15px"
          sx={{
            fontFamily: "Nunito",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "13px",
            lineHeight: "18px",
          }}
        >
          All % are subject to change. This grid does not serve as a binding
          contract. Please contact your &BA recruiter with any questions you may
          have.
        </Grid>
      </Grid>
      {/* Horizontal Line */}
      <Grid item xs={0.2}>
        <hr
          style={{
            width: "0.5px",
            height: "95%",
            //   marginLeft: "-500px",
            marginRight: "500px",
          }}
        />
      </Grid>
      {/* Right Column */}
      <Grid item xs={2.4}>
        <Grid
          container
          color="#00345E"
          justifyContent="center"
          paddingBottom={3}
        >
          Internal Only Info
        </Grid>
        <Grid container flexDirection="column" rowSpacing={4}>
          <Grid item xs={12}>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A">
                <CustomLabelTypography>
                  Street Level/SGA Level
                </CustomLabelTypography>
              </Grid>
              <Grid item>
                <CustomInputTypography>11/11</CustomInputTypography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: "2px !important" }}>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A">
                <CustomLabelTypography>BA Level</CustomLabelTypography>
              </Grid>
              <Grid item>
                <CustomInputTypography>19</CustomInputTypography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: "2px !important" }}>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A">
                <CustomLabelTypography>Upline</CustomLabelTypography>
              </Grid>
              <Grid item>
                <CustomInputTypography>Direct</CustomInputTypography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: "2px !important" }}>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A">
                <CustomLabelTypography>BA Appt Number</CustomLabelTypography>
              </Grid>
              <Grid item>
                <CustomInputTypography>Q262</CustomInputTypography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: "2px !important" }}>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A" xs={12}>
                <CustomLabelTypography>Drive Folder</CustomLabelTypography>
              </Grid>
              <Grid
                item
                color="#206FB9"
                xs={12}
                sx={{
                  wordWrap: "break-word",
                  fontFamily: "Nunito",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "13px",
                  lineHeight: "18px",
                }}
              >
                https://drive.google.com/drive/folder/path
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const LevelTable = () => {
  return (
    <Grid item xs={12} textAlign="center">
      <Grid container className="" sx={{ justifyContent: "center" }}>
        <TableContainer
          className=""
          sx={{ minHeight: "50vh" }}
          component={Paper}
        >
          <Table
            className="templateCarrierTable"
            aria-label="a dense table"
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  className="header-color sticky-table-head sticky-table-head-1"
                  stickyHeader
                >
                  #
                </TableCell>

                <TableCell
                  className="header-color sticky-table-head sticky-table-head-2"
                  align="left"
                  nowrap
                  stickyHeader
                >
                  Carrier
                </TableCell>

                <TableCell
                  className="header-color sticky-table-head sticky-table-head-3"
                  align="left"
                  nowrap
                  stickyHeader
                >
                  BA Level
                </TableCell>

                <TableCell
                  className="header-color sticky-table-head sticky-table-head-4"
                  align="left"
                  nowrap
                  stickyHeader
                >
                  Direct Carrier
                </TableCell>

                {Array.from(10).map((rr, i) => {
                  return (
                    <TableCell
                      key={i}
                      className="font-color header-color"
                      align="left"
                    >
                      DL
                    </TableCell>
                  );
                })}

                <TableCell
                  className="header-color sticky-table-head sticky-table-head-5"
                  align="left"
                  nowrap
                  stickyHeader
                >
                  {/* Delete Button Head */}
                </TableCell>
              </TableRow>
            </TableHead>

            {/* <TableBody>
              {selectedCarrier.map((row, i) => (
                <TableRow
                  key={row.name}
                  className=""
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className="sticky-table-body sticky-table-body-1"
                    stickyHeader
                  >
                    {i + 1}
                  </TableCell>

                  <TableCell
                    align="left"
                    className="sticky-table-body sticky-table-body-2"
                    stickyHeader
                  >
                    {row.carrier_name}
                  </TableCell>

                  <TableCell
                    align="left"
                    className="sticky-table-body sticky-table-body-3"
                    stickyHeader
                  >
                    <FormControl m={2}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className="ba-level"
                        size="small"
                        onChange={(e) => {
                          if (e.target.value) {
                            let filteredCarrier = [...selectedCarrier].map(
                              (ff) => {
                                if (
                                  ff.carrier_types[0]["carrier_id"] ==
                                  row.carrier_types[0].carrier_id
                                ) {
                                  ff["baLevel"] = e.target.value;
                                }
                                return ff;
                              }
                            );
                            setSelectedCarrier(filteredCarrier);
                          }
                        }}
                      >
                        {BALevel.map((menu) => {
                          if (
                            menu.carrier_id == row.carrier_types[0].carrier_id
                          ) {
                            return menu?.carrier_level_data.map(
                              (name, index) => (
                                <MenuItem key={index} value={name}>
                                  {name.carrier_level_name}
                                </MenuItem>
                              )
                            );
                          }
                        })}
                      </Select>
                    </FormControl>
                  </TableCell>

                  <TableCell
                    align="left"
                    className="sticky-table-body sticky-table-body-4"
                    stickyHeader
                  >
                    <FormControl m={2}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className="ba-level"
                        size="small"
                        // value={ }
                        onChange={(e) => {
                          if (e.target.value) {
                            var filterdata = directLevel
                              ?.filter(
                                (rr) =>
                                  rr.carrier_id ==
                                  row.carrier_types[0].carrier_id
                              )[0]
                              ["carrier_level_data"].filter(
                                (rr) =>
                                  rr.carrier_level_sequence >
                                  e.target.value.carrier_level_sequence
                              );
                            let filteredCarrier = [...selectedCarrier].map(
                              (ff) => {
                                if (
                                  ff.carrier_types[0]["carrier_id"] ==
                                  row.carrier_types[0].carrier_id
                                ) {
                                  ff["directCarrierSelectList"] = filterdata;
                                  ff["directCarrier"] = e.target.value;
                                }
                                return ff;
                              }
                            );
                            setSelectedCarrier(filteredCarrier);
                          }
                        }}
                      >
                        {directLevel?.map((menu) => {
                          if (
                            menu.carrier_id == row.carrier_types[0].carrier_id
                          ) {
                            return menu?.carrier_level_data.map(
                              (name, index) => (
                                <MenuItem key={index} value={name}>
                                  {name.carrier_level_name}
                                </MenuItem>
                              )
                            );
                          }
                        })}
                      </Select>
                    </FormControl>
                  </TableCell>

                  
                  {Array.from({ length: DLLength }).map((mm, j) => {
                    return (
                      <>
                        <TableCell align="left">
                          <FormControl m={2}>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              className="ba-level"
                              size="small"
                              value={
                                row?.directCarrierSelectList[j]
                                  ? row?.directCarrierSelectList[j]
                                  : ""
                              }
                              onChange={(e) => {
                                var findDownlineList =
                                  row?.directCarrierSelectList.filter(
                                    (rr) =>
                                      rr.carrier_level_sequence >=
                                      e.target.value.carrier_level_sequence
                                  );
                                var selectedDownlineList =
                                  row?.directCarrierSelectList.filter(
                                    (rr) =>
                                      rr.carrier_level_sequence <
                                      row?.directCarrierSelectList[j][
                                        "carrier_level_sequence"
                                      ]
                                  );
                                var finalConcatDownList =
                                  selectedDownlineList.concat(findDownlineList);
                                let filteredCarrier = [...selectedCarrier].map(
                                  (ff) => {
                                    if (
                                      ff.carrier_types[0]["carrier_id"] ==
                                      row.carrier_types[0].carrier_id
                                    ) {
                                      ff["directCarrierSelectList"] =
                                        finalConcatDownList;
                                    }
                                    return ff;
                                  }
                                );
                                setSelectedCarrier(filteredCarrier);
                              }}
                            >
                              {directLevel?.map((menu) => {
                                if (
                                  menu.carrier_id ==
                                  row.carrier_types[0].carrier_id
                                ) {
                                  return menu?.carrier_level_data.map(
                                    (name, index) => {
                                      if (
                                        row?.directCarrier
                                          ?.carrier_level_sequence <=
                                        name.carrier_level_sequence
                                      ) {
                                        return (
                                          <MenuItem key={index} value={name}>
                                            {name.carrier_level_name}
                                          </MenuItem>
                                        );
                                      }
                                    }
                                  );
                                }
                              })}
                            </Select>
                          </FormControl>
                        </TableCell>
                      </>
                    );
                  })}

                  <TableCell className="sticky-table-body sticky-table-body-5">
                    <DeleteMenu
                      data={row}
                      onClick={(e) => {
                        console.log("setSelectedCarrierIdx", row.carrier_id);

                        console.log("e.target.value", e.target.value);
                        // setSelectedCarrierIdx(row.carrier_id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
const CustomAccordion = styled(Accordion)({
  marginBottom: "20px !important",
});

const CarrierDetailsAccordian = () => {
  return (
    <CustomAccordion
      defaultExpanded
      sx={{
        backgroundColor: "#EFEFF0",
        borderRadius: "10px",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ color: "#1565C0", fontWeight: "600" }}
      >
        Carrier Details
      </AccordionSummary>
      <AccordionDetails sx={{ marginTop: "-10px" }}>
        <CarrierDetailSection />
      </AccordionDetails>
    </CustomAccordion>
  );
};

const ResourcesAccordian = () => {
  return (
    <CustomAccordion
      sx={{
        backgroundColor: "#EFEFF0",
        borderRadius: "10px",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ color: "#1565C0", fontWeight: "600" }}
      >
        Resources
      </AccordionSummary>
      <AccordionDetails sx={{ marginTop: "-10px" }}>
        <CarrierDetailSection />
      </AccordionDetails>
    </CustomAccordion>
  );
};

const LevelsAccordian = () => {
  return (
    <CustomAccordion
      defaultExpanded
      sx={{
        backgroundColor: "#EFEFF0",
        borderRadius: "10px",
        // maxWidth: "100% !important",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ color: "#1565C0", fontWeight: "600" }}
      >
        Levels
      </AccordionSummary>
      <AccordionDetails sx={{}}>
        <LevelTable />
      </AccordionDetails>
    </CustomAccordion>
  );
};

const CarriersView = () => {
  // const navigate = useNavigate();

  return (
    <>
      <Helmet title="Carriers" />

      {/* Navigation Section */}
      <Grid container justifyContent="space-between">
        <Grid item xs={4} color="#7A7A7A">
          <Grid container columnGap={5}>
            <Grid item>
              <Typography variant="h3" gutterBottom display="inline">
                AGLA
              </Typography>

              <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                <Link component={NavLink} to="/">
                  Pages
                </Link>
                <Link component={NavLink} to="carriers">
                  Carriers
                </Link>
                <Typography>AGLA</Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item marginTop="20px">
              <img
                src={LifeInsuranceLogo}
                alt="life-insurance"
                fontSize="100px !important"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2.6} mt={3}>
          <Grid container justifyContent="flex-end">
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

      {/* Carrier View Section */}
      <Grid container spacing={2} mt={1}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#FFFFFF",
            padding: "15px !important",
          }}
        >
          <Grid
            container
            sx={{
              maxHeight: "100%",
            }}
          >
            <Grid item xs={12}>
              {/* Carrier Details Section */}
              <CarrierDetailsAccordian />
            </Grid>

            <Grid item xs={12}>
              {/* Resources Section */}
              <ResourcesAccordian />
            </Grid>

            <Grid item xs={12}>
              {/* Levels Section */}
              <LevelsAccordian />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CarriersView;
