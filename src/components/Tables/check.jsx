import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {FiEdit} from "react-icons/fi"

function createData(photo,Name, Phone, New,ProfileType,BusinesType, Approved) {
  return {
    photo,
    Name,
    Phone,
    New,
    ProfileType,
    BusinesType,
    Approved,
  };
}

const headCells = [
    {
        id: "photo",
        disablePadding: true,
        label: "photo",
        numeric: false,
      },
  {
    id: "Name",
    numeric: false,
    disablePadding: true,
    label: "Business Name",
  },
  {
    id: "Phone",
    numeric: false,
    disablePadding: false,
    label: "Phone",
  },
 
  {
    id: "Profile Type",
    numeric: false,
    disablePadding: false,
    label: "Profile Type",
  },
  {
    id: "New",
    disablePadding: false,
    label: "New",
    numeric: true,
  },
  {
    id: "Business Type",
    numeric: false,
    disablePadding: false,
    label: "Business Type",
  },
  {
    id: "Approved",
    numeric: true,
    disablePadding: false,
    label: "Approved",
  },
  {
    id: "Catagories",
    numeric: true,
    disablePadding: false,
    label: "Catagories",
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
         
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          List of all Businesses
        </Typography>
      )}

      {numSelected > 0 ? (
        <>
        </>
      ) : (
        <div class="relative" style={{ width: 400 }}>
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block p-2 pl-10 w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-100 focus:ring-orane-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Search Mockups, Logos..."
            onChange={(e) => props.SearchFilter(e.target.value)}
          />
        </div>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  let [Search, setSearch] = useState("");
  const rows = [
    createData(
        "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
      "Hassan Shahid",
      1234567890,
      'false',
      'Professional',
      'Business'
    ),
    createData(
        "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
      "Awais",
      1234567890,
      'true',
      'Enterprise',
      'Coustomer'
    ),
    createData(
      "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
    "Hassan Shahid",
    1234567890,
    'false',
    'Professional',
    'Business'
  ),
  createData(
      "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
    "Awais",
    1234567890,
    'true',
    'Enterprise',
    'Coustomer'
  ),
  createData(
    "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
  "Hassan Shahid",
  1234567890,
  'false',
  'Professional',
  'Business'
),
createData(
    "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
  "Awais",
  1234567890,
  'true',
  'Enterprise',
  'Coustomer'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),   createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
  "https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Awais",
1234567890,
'true',
'Enterprise',
'Coustomer'
),
createData(
"https://img.freepik.com/free-psd/packaging-box-concept-mock-up_23-2148698796.jpg?w=2000",
"Hassan Shahid",
1234567890,
'false',
'Professional',
'Business'
),
createData(

)
  ].filter(
    e => e.Name.toLowerCase().indexOf(Search.toLowerCase()) !== -1,
  )
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.Name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, Name) => {
    const selectedIndex = selected.indexOf(Name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (Name) => selected.indexOf(Name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "98%", ml: "1%", mt: "1%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          SearchFilter={setSearch}
          numSelected={selected.length}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 850 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        
                      </TableCell>
                      <TableCell align="right"><img src={row.photo} style={{width:40,height:40,borderRadius:3}} /></TableCell>

                      <TableCell
                        component="th"
                        // id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.Name}
                      </TableCell>
                      <TableCell align="right">{row.Phone}</TableCell>
                      <TableCell align="right">{row.ProfileType}</TableCell>

                      <TableCell align="right">{row.New}</TableCell>
                      <TableCell align="right">{row.BusinesType}</TableCell>

                      <TableCell align="right">
                        <label
                          for={`small-toggle${index}`}
                          class="inline-flex relative items-center  cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            onChange={(e) => console.log(e.isChecked)}
                            value=""
                            id={`small-toggle${index}`}
                            class="sr-only peer"
                          />
                          <div class="w-9 h-5   rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </TableCell>


                      <TableCell>
                        <FiEdit  size={20}  />
                      </TableCell>

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[7, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
