import React from "react";
import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
  Grid,
  TextField,
  InputAdornment,
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
        <Grid container justifyContent="space-between" paddingRight="15px">
          <Grid item xs={5}>
            <Grid container>
              <Grid item sx={{ width: "100%", padding: "10px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    Cut Off
                  </Grid>
                  <Grid item xs={8}>
                    Friday
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "10px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    Release Date
                  </Grid>
                  <Grid item xs={8}>
                    Tuesday
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "10px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    Min Ck/Min EFT
                  </Grid>
                  <Grid item xs={8}>
                    Check: $50: EPF: $50
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "10px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    Commissionable Policy
                  </Grid>
                  <Grid item xs={8}>
                    Over $250K varies ~$65
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "10px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    Changeback Schedue
                  </Grid>
                  <Grid item xs={8}>
                    100% Month 1-6 50% Month 7-12 CB to agent BA 40$ bonus will
                    be CB to us
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "10px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    Advancement Cap
                  </Grid>
                  <Grid item xs={8}>
                    $5,000 per policy
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container>
              <Grid item sx={{ width: "100%", padding: "10px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    Commission Contact
                  </Grid>
                  <Grid item xs={8}>
                    800-255-2702
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "10px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    Commission Grids Dated
                  </Grid>
                  <Grid item xs={8}>
                    2019-07-01To07:00:00.000z
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%", padding: "10px 0" }}>
                <Grid container>
                  <Grid item xs={4} color="#7A7A7A">
                    Other Notes
                  </Grid>
                  <Grid item xs={8}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
          <Grid item>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A">
                Street Level/SGA Level
              </Grid>
              <Grid item>11/11</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A">
                BA Level
              </Grid>
              <Grid item>19</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A">
                Upline
              </Grid>
              <Grid item>Direct</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A">
                BA Appt Number
              </Grid>
              <Grid item>Q262</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container flexDirection="column">
              <Grid item color="#7A7A7A">
                Drive Folder
              </Grid>
              <Grid item color="#206FB9">
                https://drive.google.com/drive/folder/path
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container></Grid>
      </Grid>
    </Grid>
  </Grid>
);

const CarrierTableSection = () => <Grid item></Grid>;

const CarriersView = () => {
  const navigate = useNavigate();
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
            height: "67vh",
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
            {/* Carrier Details Section */}
            <CarrierDetailSection />

            {/* Carrier Table Section */}
            <CarrierTableSection />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CarriersView;
