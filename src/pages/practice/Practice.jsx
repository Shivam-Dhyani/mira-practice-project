import styled from "@emotion/styled";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
  Box,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { spacing } from "@mui/system";
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
   

  .MuiDataGrid-row:nth-child(2n) {
      border-left : 5px solid #22965E;
    }
    
`;

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
    <Box sx={{ height: 620, width: "100%" }}>
      <CustomDataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
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
    <>
      <Helmet title="Blank" />
      <Typography variant="h3" gutterBottom display="inline">
        Agents
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Pages
        </Link>
        <Typography>Agents</Typography>
      </Breadcrumbs>

      <Divider my={2} mb={4} />

      <Grid2 container spacing={2}>
        <Grid2 item xs={12}></Grid2>
        <Grid2 item xs={12} sx={{ backgroundColor: "#FFFFFF" }}>
          <DataGridDemo />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Practice;
