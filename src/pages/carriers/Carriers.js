import React from "react";
import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
  Box,
  Grid,
  InputBase,
  TextField,
  InputAdornment,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { alpha, spacing } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Helmet } from "react-helmet-async";
import { Link, NavLink, useNavigate } from "react-router-dom";

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
    visibility: none;
  }

  .MuiDataGrid-row {
    background-color: rgba(27, 36, 48, 0.07);
    margin: 1px 0;
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
  );
}

function CustomPagination() {
  //   const page = useGridSelector(apiRef, gridPageSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={1}
      count={8}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      // onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const columns = [
  {
    headerName: "",
    width: 60,
  },
  { field: "name", headerName: "Name", width: 240, sortable: "false" },
  {
    field: "type",
    headerName: "Type",
    width: 1175,
    renderCell: (params) => <img src={params.value} />,
  },
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
    name: "Shivam",
    type: LifeInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 2,
    name: "Kaval Prajapati",
    type: AnnuityInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 3,
    name: "Divyanshu Barot",
    type: LifeInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 4,
    name: "Harshil Chudasama",
    type: AnnuityInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 5,
    name: "Birud",
    type: LifeInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 6,
    name: "Nikunj",
    type: AnnuityInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 7,
    name: "Dhaval",
    type: LifeInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 8,
    name: "Harsh",
    type: AnnuityInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 9,
    name: "Mihir",
    type: LifeInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 10,
    name: "Deep",
    type: AnnuityInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 11,
    name: "Anand",
    type: LifeInsuranceChip,
    kebabMenuIcon: KebabMenuIcon,
  },
  {
    id: 12,
    name: "Nitin",
    type: AnnuityInsuranceChip,
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
        // disableColumnMenu
        // disableColumnFilter
        // disableColumnSelector
        disableSorting
        slots={{
          pagination: CustomPagination,
        }}
      />
    </Box>
  );
}

const Carriers = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet title="Carriers" />

      {/* Navigation Section */}
      <Grid container justifyContent="space-between">
        <Grid item xs={4}>
          <Typography variant="h3" gutterBottom display="inline">
            Carriers
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Pages
            </Link>
            <Typography>Carriers</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={5} mt={4} direction="row">
          <Grid container direction="row">
            <Grid item>
              <Checkboxes />
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

      {/* Agent Data Table Section */}
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sx={{ backgroundColor: "#FFFFFF" }}>
          <DataGridDemo />
        </Grid>
      </Grid>
    </>
  );
};

export default Carriers;
