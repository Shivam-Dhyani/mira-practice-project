import styled from "@emotion/styled";
import { Add, Search } from "@mui/icons-material";

import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
  Box,
  InputBase,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { alpha, spacing } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";

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
  width: "200px",
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

// const newColumns = [
//   { field: "name", headerName: "Name" },
//   { field: "email", headerName: "Email" },
//   { field: "type", headerName: "Type" },
//   { field: "life-template", headerName: "Life Template" },
//   { field: "annuity-template", headerName: "Annuity Template" },
//   { field: "created-date", headerName: "Created Date" },
//   { field: "nda-status", headerName: "NDA Status" },
// ];

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 340,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 340,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 340,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 340,
    align: "left",
    headerAlign: "left",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, status: "active" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    status: "inactive",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    status: "active",
  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, status: "inactive" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 23,
    status: "active",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "ITTS",
    age: 150,
    status: "inactive",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    status: "active",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    status: "inactive",
  },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, status: "active" },
  {
    id: 10,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    status: "inactive",
  },
  { id: 11, lastName: "Snow", firstName: "Jon", age: 35, status: "active" },
  {
    id: 12,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    status: "inactive",
  },
  {
    id: 13,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    status: "active",
  },
  { id: 14, lastName: "Stark", firstName: "Arya", age: 16, status: "inactive" },
  {
    id: 15,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 23,
    status: "active",
  },
  {
    id: 16,
    lastName: "Melisandre",
    firstName: "ITTS",
    age: 150,
    status: "inactive",
  },
  {
    id: 17,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    status: "active",
  },
  {
    id: 18,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    status: "inactive",
  },
  { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65, status: "active" },
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

const Practice = () => {
  return (
    <div>
      <Helmet title="Practice" />
      <Grid container justifyContent="space-between">
        <Grid item xs={8}>
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
        <Grid item xs={2.6}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button mr={2} variant="contained" color="primary">
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

      <Grid2 container spacing={2}>
        <Grid2 item xs={12}></Grid2>
        <Grid2 item xs={12} sx={{ backgroundColor: "#FFFFFF" }}>
          <DataGridDemo />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Practice;
