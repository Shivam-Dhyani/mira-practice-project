import React from "react";
import styled from "@emotion/styled";
import { Add, Search } from "@mui/icons-material";

import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
  Box,
  Grid,
  InputBase,
  Button,
  TextField,
  InputAdornment,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { alpha, spacing } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Helmet } from "react-helmet-async";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PrimaryLogo from "../../assets/primary-logo.png";
import SecondaryLogo from "../../assets/secondary-logo.png";
import LifeInsuranceChip from "../../assets/life-insurance-chip.png";
import AnnuityInsuranceChip from "../../assets/annuity-insurance-chip.png";
import KebabMenuIcon from "../../assets/kebab-menu-icon.png";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const CustomDataGrid = styled(DataGrid)`
  border: none;
  padding: 20px;
  .MuiDataGrid-columnHeaders {
    background-color: #233044;
    color: white;
  }
  .MuiDataGrid-iconSeparator,
  .MuiDataGrid-sortIcon {
    display: none;
  }
  .MuiDataGrid-row {
    background-color: rgba(27, 36, 48, 0.07);
    margin: 1px 0;
    border-left: 5px solid green;
  }
  .MuiDataGrid-row:nth-child(even) {
    border-left: 5px solid #962222;
  }

  .MuiDataGrid-row:nth-child(odd) {
    border-left: 5px solid #22965e;
  }
`;

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

const CustomSearch = styled("span")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      // "&:focus": {
      //   width: "20ch",
      // },
    },
  },
}));

function CheckboxesGroup() {
  const [state, setState] = React.useState({
    signed: true,
    not_signed: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { signed, not_signed } = state;

  return (
    // <Card mb={6}>
    //   <CardContent>
    //     <Typography variant="h6" gutterBottom>
    //       Checkboxes
    //     </Typography>
    //     <Typography variant="body2" gutterBottom>
    //       Checkboxes allow the user to select one or more items from a set.
    //     </Typography>
    //     <Paper mt={3}>
    //       <FormControl component="fieldset" variant="standard">
    //         <FormLabel component="legend">Assign responsibility</FormLabel>
    //         <FormGroup>
    //           <FormControlLabel
    //             control={
    //               <Checkbox
    //                 checked={signed}
    //                 onChange={handleChange}
    //                 name="signed"
    //               />
    //             }
    //             label="Gilad Gray"
    //           />
    //           <FormControlLabel
    //             control={
    //               <Checkbox
    //                 checked={not_signed}
    //                 onChange={handleChange}
    //                 name="not_signed"
    //               />
    //             }
    //             label="Jason Killian"
    //           />
    //         </FormGroup>
    //       </FormControl>
    //     </Paper>
    //   </CardContent>
    // </Card>
    <Grid container direction="row">
      <Grid item>
        <Typography
          variant="outlined"
          sx={{ color: "#7A7A7A" }}
          gutterBottom
          display="inline"
        >
          NDA status
        </Typography>
      </Grid>
      <Grid item>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ padding: "0px 0px 0px 20px" }}
                checked={signed}
                onChange={handleChange}
                name="signed"
              />
            }
            label="Signed"
          />
        </FormGroup>
      </Grid>

      <Grid item>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ padding: "0px 0px 0px 20px" }}
                checked={not_signed}
                onChange={handleChange}
                name="not_signed"
              />
            }
            label="Not Signed"
          />
        </FormGroup>
      </Grid>
    </Grid>
    // <FormControl component="fieldset" variant="standard">
    //   <FormLabel component="legend">Assign responsibility</FormLabel>
    //   <FormGroup>
    //     <FormControlLabel
    //       control={
    //         <Checkbox checked={signed} onChange={handleChange} name="signed" />
    //       }
    //       label="Gilad Gray"
    //     />
    // <FormControlLabel
    //   control={
    //     <Checkbox
    //       checked={not_signed}
    //       onChange={handleChange}
    //       name="not_signed"
    //     />
    //   }
    //   label="Jason Killian"
    // />
    //   </FormGroup>
    // </FormControl>
  );
}

function Checkboxes() {
  const [state, setState] = React.useState({
    life: true,
    annuity: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { life, annuity } = state;

  return (
    <Grid container direction="row">
      <Grid item>
        <Typography
          variant="outlined"
          sx={{ color: "#7A7A7A" }}
          gutterBottom
          display="inline"
        >
          Type
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
    // <FormControl component="fieldset" variant="standard">
    //   <FormLabel component="legend">Assign responsibility</FormLabel>
    //   <FormGroup>
    //     <FormControlLabel
    //       control={
    //         <Checkbox checked={signed} onChange={handleChange} name="signed" />
    //       }
    //       label="Gilad Gray"
    //     />
    // <FormControlLabel
    //   control={
    //     <Checkbox
    //       checked={not_signed}
    //       onChange={handleChange}
    //       name="not_signed"
    //     />
    //   }
    //   label="Jason Killian"
    // />
    //   </FormGroup>
    // </FormControl>
  );
}

const columns = [
  {
    field: "logo",
    headerName: "",
    width: 50,
    renderCell: (params) => {
      console.log("Logo Params : ", params);
      return <img src={params.value} />;
    },
  },
  { field: "name", headerName: "Name", width: 190 },
  { field: "email", headerName: "Email", width: 300 },
  {
    field: "type",
    headerName: "Type",
    width: 190,
    renderCell: (params) => <img src={params.value} />,
  },
  { field: "lifeTemplate", headerName: "Life Template", width: 180 },
  { field: "annuityTemplate", headerName: "Annuity Template", width: 180 },
  { field: "createdDate", headerName: "Created Date", width: 170 },
  { field: "ndaStatus", headerName: "NDA Status", width: 210 },
  {
    field: "kebabMenuIcon",
    headerName: "",
    width: 10,
    renderCell: (params) => (
      <img src={params.value} style={{ cursor: "pointer" }} />
    ),
  },
];

const rows = [
  {
    id: 1,
    logo: PrimaryLogo,
    name: "Shivam",
    email: "shivamdhyani@gmail.com",
    type: LifeInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Signed",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 2,
    logo: SecondaryLogo,
    name: "Kaval",
    email: "shivamdhyani@gmail.com",
    type: AnnuityInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Sent at 30/12/2022 18:44:22",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 3,
    logo: PrimaryLogo,
    name: "Divyanshu",
    email: "shivamdhyani@gmail.com",
    type: LifeInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Signed",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 4,
    logo: SecondaryLogo,
    name: "Harshil",
    email: "shivamdhyani@gmail.com",
    type: AnnuityInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Sent at 30/12/2022 18:44:22",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 5,
    logo: PrimaryLogo,
    name: "Birud",
    email: "shivamdhyani@gmail.com",
    type: LifeInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Signed",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 6,
    logo: SecondaryLogo,
    name: "Nikunj",
    email: "shivamdhyani@gmail.com",
    type: AnnuityInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Sent at 30/12/2022 18:44:22",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 7,
    logo: PrimaryLogo,
    name: "Dhaval",
    email: "shivamdhyani@gmail.com",
    type: LifeInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Signed",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 8,
    logo: SecondaryLogo,
    name: "Harsh",
    email: "shivamdhyani@gmail.com",
    type: AnnuityInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Sent at 30/12/2022 18:44:22",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 9,
    logo: PrimaryLogo,
    name: "Mihir",
    email: "shivamdhyani@gmail.com",
    type: LifeInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Signed",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 10,
    logo: SecondaryLogo,
    name: "Deep",
    email: "shivamdhyani@gmail.com",
    type: AnnuityInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Sent at 30/12/2022 18:44:22",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 11,
    logo: PrimaryLogo,
    name: "Anand",
    email: "shivamdhyani@gmail.com",
    type: LifeInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Signed",
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 12,
    logo: SecondaryLogo,
    name: "Nitin",
    email: "shivamdhyani@gmail.com",
    type: AnnuityInsuranceChip,
    lifeTemplate: "Gold",
    annuityTemplate: "Platinum",
    createdDate: "01/06/2023",
    ndaStatus: "Sent at 30/12/2022 18:44:22",
    kebabMenuIcon: KebabMenuIcon,
  },
];

function DataGridDemo() {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <CustomDataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        experimentalFeatures={{ newEditingApi: true }}
        disableSelectionOnClick
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
      />
    </Box>
  );
}

const Agents = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet title="Agents" />

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
            <Typography>Agents</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={5} mt={4} direction="row">
          <Grid container direction="row">
            <Grid item>
              <CheckboxesGroup />
            </Grid>
            <Grid item>
              <Checkboxes />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2.8} mt={3}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                mr={2}
                variant="contained"
                color="primary"
                onClick={() => navigate("addNewAgents")}
              >
                <Add />
                New Agent
              </Button>
            </Grid>
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

      {/* Agent Data Table Section */}
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sx={{ backgroundColor: "#FFFFFF" }}>
          <DataGridDemo />
        </Grid>
      </Grid>
    </>
  );
};

export default Agents;
