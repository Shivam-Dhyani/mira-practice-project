import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Add, MoreVert, Search } from "@mui/icons-material";
import {
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
  Button,
  IconButton,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import { alpha, spacing } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import LifeInsuranceChip from "../../assets/life-insurance-chip.png";
import AnnuityInsuranceChip from "../../assets/annuity-insurance-chip.png";
import KebabMenuIcon from "../../assets/kebab-menu-icon.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Divider = styled(MuiDivider)(spacing);

const CustomDataGrid = styled(DataGrid)`
  border: none;
  padding: 20px;
  .MuiDataGrid-columnHeaders {
    background-color: #233044;
    color: white;
  }

  .MuiDataGrid-cell:focus {
    outline: none;
  }

  ,
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

const Templates = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchString, setSearchString] = React.useState("");

  // const [open, setOpen] = React.useState({
  //   status: false,
  //   id: 0,
  // });

  const [rows, setRows] = useState([
    {
      template_id: 1,
      template_name: "Brittaney",
      template_created_by_user_id: "07d4d444-2cda-41b2-b706-300559e9680d",
      template_created_by_username: "Brittaney Eddoes",
      carrier_life_flag: true,
      template_carrier_count: 37,
    },
    {
      template_id: 2,
      template_name: "Darryl",
      template_created_by_user_id: "e7d14c8f-83b3-4f70-923a-dac364368d2a",
      template_created_by_username: "Darryl Ausiello",
      carrier_life_flag: false,
      template_carrier_count: 33,
    },
    {
      template_id: 3,
      template_name: "Melania",
      template_created_by_user_id: "cdba8f91-a7fd-48bf-b671-64319771e171",
      template_created_by_username: "Melania McLugaish",
      carrier_life_flag: true,
      template_carrier_count: 54,
    },
    {
      template_id: 4,
      template_name: "Klement",
      template_created_by_user_id: "e28d3b59-49cc-406e-b45e-0657a1ac0176",
      template_created_by_username: "Klement Cockshtt",
      carrier_life_flag: false,
      template_carrier_count: 27,
    },
    {
      template_id: 5,
      template_name: "Shay",
      template_created_by_user_id: "42edfcc9-137c-4ab0-879e-b1c35f89ad42",
      template_created_by_username: "Shay Balducci",
      carrier_life_flag: true,
      template_carrier_count: 58,
    },
    {
      template_id: 6,
      template_name: "Shae",
      template_created_by_user_id: "b1757ef1-7470-4a75-ba8e-6087b901e1c5",
      template_created_by_username: "Shae Van Weedenburg",
      carrier_life_flag: true,
      template_carrier_count: 18,
    },
    {
      template_id: 7,
      template_name: "Terrill",
      template_created_by_user_id: "927dbbcf-f696-4cf5-892d-0b11676b3e19",
      template_created_by_username: "Terrill Dufaur",
      carrier_life_flag: false,
      template_carrier_count: 70,
    },
    {
      template_id: 8,
      template_name: "Saundra",
      template_created_by_user_id: "58523fff-c79d-412d-b800-9bd340f03754",
      template_created_by_username: "Saundra Filchakov",
      carrier_life_flag: false,
      template_carrier_count: 51,
    },
    {
      template_id: 9,
      template_name: "Flory",
      template_created_by_user_id: "24b070d5-95c3-4699-8c79-923b7d57d589",
      template_created_by_username: "Flory Budge",
      carrier_life_flag: true,
      template_carrier_count: 66,
    },
    {
      template_id: 10,
      template_name: "Lorens",
      template_created_by_user_id: "8cef757f-cea4-4975-a239-fecd7c51644f",
      template_created_by_username: "Lorens Maunder",
      carrier_life_flag: true,
      template_carrier_count: 93,
    },
    {
      template_id: 11,
      template_name: "Dyane",
      template_created_by_user_id: "ffb056e5-e958-411e-b378-2dbeb711868c",
      template_created_by_username: "Dyane Milch",
      carrier_life_flag: false,
      template_carrier_count: 63,
    },
    {
      template_id: 12,
      template_name: "Jana",
      template_created_by_user_id: "318f5d55-914b-4401-9aec-4760b7fb7a65",
      template_created_by_username: "Jana Sibson",
      carrier_life_flag: true,
      template_carrier_count: 88,
    },
    {
      template_id: 13,
      template_name: "Alden",
      template_created_by_user_id: "204615fd-f210-47c5-8df7-3675e7c0e83e",
      template_created_by_username: "Alden Windrus",
      carrier_life_flag: false,
      template_carrier_count: 13,
    },
    {
      template_id: 14,
      template_name: "Marylee",
      template_created_by_user_id: "daf5502e-5a6d-4280-84cb-5507814ae019",
      template_created_by_username: "Marylee Fessby",
      carrier_life_flag: false,
      template_carrier_count: 43,
    },
    {
      template_id: 15,
      template_name: "Burnard",
      template_created_by_user_id: "2a75bb8f-8198-42c1-b0cb-e3048773bc8e",
      template_created_by_username: "Burnard Skeleton",
      carrier_life_flag: true,
      template_carrier_count: 52,
    },
    {
      template_id: 16,
      template_name: "Kyrstin",
      template_created_by_user_id: "bb788df7-1294-4e26-bd04-b51259d20a1e",
      template_created_by_username: "Kyrstin Humpatch",
      carrier_life_flag: false,
      template_carrier_count: 16,
    },
    {
      template_id: 17,
      template_name: "Ebonee",
      template_created_by_user_id: "b51c3545-5f75-42c2-bc79-e0cc56470201",
      template_created_by_username: "Ebonee Markovich",
      carrier_life_flag: true,
      template_carrier_count: 69,
    },
    {
      template_id: 18,
      template_name: "Dyanna",
      template_created_by_user_id: "08853f51-69f3-4560-989c-b93523eeea22",
      template_created_by_username: "Dyanna Enrich",
      carrier_life_flag: false,
      template_carrier_count: 67,
    },
    {
      template_id: 19,
      template_name: "Hayden",
      template_created_by_user_id: "2ef6078a-b441-4790-a584-0b21593a8565",
      template_created_by_username: "Hayden Meeke",
      carrier_life_flag: false,
      template_carrier_count: 69,
    },
    {
      template_id: 20,
      template_name: "Arlin",
      template_created_by_user_id: "4c791dcb-89f1-484d-b82b-cf29b9cb6e1c",
      template_created_by_username: "Arlin Matthew",
      carrier_life_flag: true,
      template_carrier_count: 44,
    },
    {
      template_id: 21,
      template_name: "Tulley",
      template_created_by_user_id: "c5c06193-58d9-4342-b4bc-20a9e68a1fdf",
      template_created_by_username: "Tulley Skinner",
      carrier_life_flag: true,
      template_carrier_count: 45,
    },
    {
      template_id: 22,
      template_name: "Emlyn",
      template_created_by_user_id: "bb05ef02-2229-4553-92ca-867fa09f736e",
      template_created_by_username: "Emlyn Matijevic",
      carrier_life_flag: true,
      template_carrier_count: 4,
    },
    {
      template_id: 23,
      template_name: "Renaldo",
      template_created_by_user_id: "b8e0c573-ee6c-4cee-bfb1-12e3f89b8f18",
      template_created_by_username: "Renaldo Lasselle",
      carrier_life_flag: false,
      template_carrier_count: 78,
    },
    {
      template_id: 24,
      template_name: "Janna",
      template_created_by_user_id: "5ef7db82-9cb2-41a8-9d31-bb11b9dd6c12",
      template_created_by_username: "Janna Fawcitt",
      carrier_life_flag: false,
      template_carrier_count: 62,
    },
    {
      template_id: 25,
      template_name: "Olva",
      template_created_by_user_id: "766ca50c-1ca7-489c-b1b6-2a90a212b9df",
      template_created_by_username: "Olva Ausher",
      carrier_life_flag: false,
      template_carrier_count: 40,
    },
    {
      template_id: 26,
      template_name: "Dorisa",
      template_created_by_user_id: "21a40298-7cb8-4e55-9222-21b71673b49a",
      template_created_by_username: "Dorisa Humfrey",
      carrier_life_flag: true,
      template_carrier_count: 19,
    },
    {
      template_id: 27,
      template_name: "Massimiliano",
      template_created_by_user_id: "73866f9f-a57c-4679-9c77-4b90c2cf4d2d",
      template_created_by_username: "Massimiliano Naish",
      carrier_life_flag: false,
      template_carrier_count: 49,
    },
    {
      template_id: 28,
      template_name: "Alvin",
      template_created_by_user_id: "b05b29ad-80e0-4df4-b3c4-6393f8a6c93c",
      template_created_by_username: "Alvin Yearne",
      carrier_life_flag: true,
      template_carrier_count: 47,
    },
    {
      template_id: 29,
      template_name: "Quillan",
      template_created_by_user_id: "82addb7d-224a-4465-a94b-5ccd6598a2ee",
      template_created_by_username: "Quillan Goodricke",
      carrier_life_flag: false,
      template_carrier_count: 67,
    },
    {
      template_id: 30,
      template_name: "Sophie",
      template_created_by_user_id: "367c2892-2217-4150-96d7-add4adacbf54",
      template_created_by_username: "Sophie Le Sieur",
      carrier_life_flag: true,
      template_carrier_count: 34,
    },
  ]);

  const [globalRows, setGlobalRows] = useState([
    {
      template_id: 1,
      template_name: "Brittaney",
      template_created_by_user_id: "07d4d444-2cda-41b2-b706-300559e9680d",
      template_created_by_username: "Brittaney Eddoes",
      carrier_life_flag: true,
      template_carrier_count: 37,
    },
    {
      template_id: 2,
      template_name: "Darryl",
      template_created_by_user_id: "e7d14c8f-83b3-4f70-923a-dac364368d2a",
      template_created_by_username: "Darryl Ausiello",
      carrier_life_flag: false,
      template_carrier_count: 33,
    },
    {
      template_id: 3,
      template_name: "Melania",
      template_created_by_user_id: "cdba8f91-a7fd-48bf-b671-64319771e171",
      template_created_by_username: "Melania McLugaish",
      carrier_life_flag: true,
      template_carrier_count: 54,
    },
    {
      template_id: 4,
      template_name: "Klement",
      template_created_by_user_id: "e28d3b59-49cc-406e-b45e-0657a1ac0176",
      template_created_by_username: "Klement Cockshtt",
      carrier_life_flag: false,
      template_carrier_count: 27,
    },
    {
      template_id: 5,
      template_name: "Shay",
      template_created_by_user_id: "42edfcc9-137c-4ab0-879e-b1c35f89ad42",
      template_created_by_username: "Shay Balducci",
      carrier_life_flag: true,
      template_carrier_count: 58,
    },
    {
      template_id: 6,
      template_name: "Shae",
      template_created_by_user_id: "b1757ef1-7470-4a75-ba8e-6087b901e1c5",
      template_created_by_username: "Shae Van Weedenburg",
      carrier_life_flag: true,
      template_carrier_count: 18,
    },
    {
      template_id: 7,
      template_name: "Terrill",
      template_created_by_user_id: "927dbbcf-f696-4cf5-892d-0b11676b3e19",
      template_created_by_username: "Terrill Dufaur",
      carrier_life_flag: false,
      template_carrier_count: 70,
    },
    {
      template_id: 8,
      template_name: "Saundra",
      template_created_by_user_id: "58523fff-c79d-412d-b800-9bd340f03754",
      template_created_by_username: "Saundra Filchakov",
      carrier_life_flag: false,
      template_carrier_count: 51,
    },
    {
      template_id: 9,
      template_name: "Flory",
      template_created_by_user_id: "24b070d5-95c3-4699-8c79-923b7d57d589",
      template_created_by_username: "Flory Budge",
      carrier_life_flag: true,
      template_carrier_count: 66,
    },
    {
      template_id: 10,
      template_name: "Lorens",
      template_created_by_user_id: "8cef757f-cea4-4975-a239-fecd7c51644f",
      template_created_by_username: "Lorens Maunder",
      carrier_life_flag: true,
      template_carrier_count: 93,
    },
    {
      template_id: 11,
      template_name: "Dyane",
      template_created_by_user_id: "ffb056e5-e958-411e-b378-2dbeb711868c",
      template_created_by_username: "Dyane Milch",
      carrier_life_flag: false,
      template_carrier_count: 63,
    },
    {
      template_id: 12,
      template_name: "Jana",
      template_created_by_user_id: "318f5d55-914b-4401-9aec-4760b7fb7a65",
      template_created_by_username: "Jana Sibson",
      carrier_life_flag: true,
      template_carrier_count: 88,
    },
    {
      template_id: 13,
      template_name: "Alden",
      template_created_by_user_id: "204615fd-f210-47c5-8df7-3675e7c0e83e",
      template_created_by_username: "Alden Windrus",
      carrier_life_flag: false,
      template_carrier_count: 13,
    },
    {
      template_id: 14,
      template_name: "Marylee",
      template_created_by_user_id: "daf5502e-5a6d-4280-84cb-5507814ae019",
      template_created_by_username: "Marylee Fessby",
      carrier_life_flag: false,
      template_carrier_count: 43,
    },
    {
      template_id: 15,
      template_name: "Burnard",
      template_created_by_user_id: "2a75bb8f-8198-42c1-b0cb-e3048773bc8e",
      template_created_by_username: "Burnard Skeleton",
      carrier_life_flag: true,
      template_carrier_count: 52,
    },
    {
      template_id: 16,
      template_name: "Kyrstin",
      template_created_by_user_id: "bb788df7-1294-4e26-bd04-b51259d20a1e",
      template_created_by_username: "Kyrstin Humpatch",
      carrier_life_flag: false,
      template_carrier_count: 16,
    },
    {
      template_id: 17,
      template_name: "Ebonee",
      template_created_by_user_id: "b51c3545-5f75-42c2-bc79-e0cc56470201",
      template_created_by_username: "Ebonee Markovich",
      carrier_life_flag: true,
      template_carrier_count: 69,
    },
    {
      template_id: 18,
      template_name: "Dyanna",
      template_created_by_user_id: "08853f51-69f3-4560-989c-b93523eeea22",
      template_created_by_username: "Dyanna Enrich",
      carrier_life_flag: false,
      template_carrier_count: 67,
    },
    {
      template_id: 19,
      template_name: "Hayden",
      template_created_by_user_id: "2ef6078a-b441-4790-a584-0b21593a8565",
      template_created_by_username: "Hayden Meeke",
      carrier_life_flag: false,
      template_carrier_count: 69,
    },
    {
      template_id: 20,
      template_name: "Arlin",
      template_created_by_user_id: "4c791dcb-89f1-484d-b82b-cf29b9cb6e1c",
      template_created_by_username: "Arlin Matthew",
      carrier_life_flag: true,
      template_carrier_count: 44,
    },
    {
      template_id: 21,
      template_name: "Tulley",
      template_created_by_user_id: "c5c06193-58d9-4342-b4bc-20a9e68a1fdf",
      template_created_by_username: "Tulley Skinner",
      carrier_life_flag: true,
      template_carrier_count: 45,
    },
    {
      template_id: 22,
      template_name: "Emlyn",
      template_created_by_user_id: "bb05ef02-2229-4553-92ca-867fa09f736e",
      template_created_by_username: "Emlyn Matijevic",
      carrier_life_flag: true,
      template_carrier_count: 4,
    },
    {
      template_id: 23,
      template_name: "Renaldo",
      template_created_by_user_id: "b8e0c573-ee6c-4cee-bfb1-12e3f89b8f18",
      template_created_by_username: "Renaldo Lasselle",
      carrier_life_flag: false,
      template_carrier_count: 78,
    },
    {
      template_id: 24,
      template_name: "Janna",
      template_created_by_user_id: "5ef7db82-9cb2-41a8-9d31-bb11b9dd6c12",
      template_created_by_username: "Janna Fawcitt",
      carrier_life_flag: false,
      template_carrier_count: 62,
    },
    {
      template_id: 25,
      template_name: "Olva",
      template_created_by_user_id: "766ca50c-1ca7-489c-b1b6-2a90a212b9df",
      template_created_by_username: "Olva Ausher",
      carrier_life_flag: false,
      template_carrier_count: 40,
    },
    {
      template_id: 26,
      template_name: "Dorisa",
      template_created_by_user_id: "21a40298-7cb8-4e55-9222-21b71673b49a",
      template_created_by_username: "Dorisa Humfrey",
      carrier_life_flag: true,
      template_carrier_count: 19,
    },
    {
      template_id: 27,
      template_name: "Massimiliano",
      template_created_by_user_id: "73866f9f-a57c-4679-9c77-4b90c2cf4d2d",
      template_created_by_username: "Massimiliano Naish",
      carrier_life_flag: false,
      template_carrier_count: 49,
    },
    {
      template_id: 28,
      template_name: "Alvin",
      template_created_by_user_id: "b05b29ad-80e0-4df4-b3c4-6393f8a6c93c",
      template_created_by_username: "Alvin Yearne",
      carrier_life_flag: true,
      template_carrier_count: 47,
    },
    {
      template_id: 29,
      template_name: "Quillan",
      template_created_by_user_id: "82addb7d-224a-4465-a94b-5ccd6598a2ee",
      template_created_by_username: "Quillan Goodricke",
      carrier_life_flag: false,
      template_carrier_count: 67,
    },
    {
      template_id: 30,
      template_name: "Sophie",
      template_created_by_user_id: "367c2892-2217-4150-96d7-add4adacbf54",
      template_created_by_username: "Sophie Le Sieur",
      carrier_life_flag: true,
      template_carrier_count: 34,
    },
  ]);

  const [type, setType] = useState({
    flagLife: true,
    flagAnnuity: true,
  });

  useEffect(() => {
    if (type.flagLife == true && type.flagAnnuity == false) {
      let temp = [...globalRows];
      temp = temp.filter((row) => row.carrier_life_flag == true);
      setRows(temp);
    } else if (type.flagLife == false && type.flagAnnuity == true) {
      let temp = [...globalRows];
      temp = temp.filter((row) => row.carrier_life_flag == false);
      setRows(temp);
    } else {
      setRows(globalRows);
    }
  }, [type]);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const options = ["None", "Atria"];
  const ITEM_HEIGHT = 48;

  const handleOptionClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (searchQuery) => {
    setSearchString(searchQuery);
    let tempFiltered = [];

    if (!searchQuery) {
      if (type.flagLife == true && type.flagAnnuity == true) {
        setRows(globalRows);
      } else if (type.flagLife == true) {
        globalRows.map((element) => {
          if (element.carrier_life_flag == true) {
            tempFiltered.push(element);
          }
        });
        setRows(tempFiltered);
      } else if (type.flagAnnuity == true) {
        globalRows.map((element) => {
          if (element.carrier_life_flag == false) {
            tempFiltered.push(element);
          }
        });
        setRows(tempFiltered);
      }
    } else {
      if (type.flagLife == true && type.flagAnnuity == true) {
        tempFiltered = [...globalRows];
      } else if (type.flagLife == true) {
        globalRows.map((element) => {
          if (element.carrier_life_flag == true) {
            tempFiltered.push(element);
          }
        });
      } else if (type.flagAnnuity == true) {
        globalRows.map((element) => {
          if (element.carrier_life_flag == false) {
            tempFiltered.push(element);
          }
        });
      }

      tempFiltered = tempFiltered.filter(
        (nn) =>
          nn.template_name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
      );
      setRows(tempFiltered);
    }
  };

  function Checkboxes() {
    const handleChange = (event, boxType) => {
      if (boxType == "life") {
        if (event.target.checked == false) {
          if (type.flagAnnuity == true) {
            setType((a) => {
              let tempData = { ...a };
              tempData.flagLife = event.target.checked;
              return tempData;
            });
          }
        } else {
          setType((a) => {
            console.log(a);
            let tempData = { ...a };
            tempData.flagLife = event.target.checked;
            return tempData;
          });
        }
      } else if (boxType == "annuity") {
        if (event.target.checked == false) {
          if (type.flagLife == true) {
            setType((a) => {
              let tempData = { ...a };
              tempData.flagAnnuity = event.target.checked;
              return tempData;
            });
          }
        } else {
          setType((a) => {
            let tempData = { ...a };
            tempData.flagAnnuity = event.target.checked;
            return tempData;
          });
        }
      }
    };

    const { flagLife, flagAnnuity } = type;

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
                  checked={flagLife}
                  onChange={(event) => {
                    handleChange(event, "life");
                  }}
                  name="flagLife"
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
                  checked={flagAnnuity}
                  onChange={(event) => {
                    handleChange(event, "annuity");
                  }}
                  name="flagAnnuity"
                />
              }
              label="Annuity"
            />
          </FormGroup>
        </Grid>
      </Grid>
    );
  }

  const columns = [
    {
      headerName: "",
      width: 60,
    },
    {
      field: "template_name",
      headerName: "Name",
      width: 600,
      sortable: "false",
    },
    {
      field: "carrier_life_flag",
      headerName: "Type",
      width: 660,
      renderCell: (params) =>
        params.row.carrier_life_flag ? (
          <img src={LifeInsuranceChip} />
        ) : (
          <img src={AnnuityInsuranceChip} />
        ),
    },
    {
      field: "template_carrier_count",
      headerName: "# Carriers",
      width: 139,
      sortable: "false",
    },
    {
      field: "template_id",
      headerName: "",
      width: 10,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  className="demoMenu"
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </>
        );
      },
    },
  ];

  function DataGridDemo() {
    return (
      <Box sx={{ height: 686, width: "100%" }}>
        <CustomDataGrid
          rows={rows}
          columns={columns}
          pageSize={rows.length}
          getRowId={(row) => row?.template_id}
          experimentalFeatures={{ newEditingApi: true }}
          disableSelectionOnClick
          disableSorting
          hideFooterPagination
          hideFooter
          // rowsPerPageOptions={[12]}
          // disableColumnMenu
          // disableColumnFilter
          // disableColumnSelector
          // slots={{
          //   pagination: CustomPagination,
          // }}
        />
      </Box>
    );
  }

  return (
    <>
      <Helmet title="Carriers" />

      {/* Navigation Section */}
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginBottom: "15px" }}
      >
        <Grid item lg={4.5}>
          <Typography variant="h3" gutterBottom display="inline">
            Templates
          </Typography>
        </Grid>
        <Grid item lg={4} mt={4} direction="row">
          <Grid container direction="row">
            <Grid item>
              <Checkboxes />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Button
                mr={2}
                variant="contained"
                color="primary"
                onClick={() => navigate("addNewTemplate")}
              >
                <Add />
                New Template
              </Button>
            </Grid>
            <Grid item>
              <CustomTextField
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
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

      {/* Template Table Section */}
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sx={{ backgroundColor: "#FFFFFF" }}>
          <DataGridDemo />
        </Grid>
      </Grid>
    </>
  );
};

export default Templates;
