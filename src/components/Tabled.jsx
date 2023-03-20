import { Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material'
import React from 'react'
import  { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';

const color = blue[400];
const color2 = blueGrey[900];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: color2,
      color: color,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));



const Tabled = () => {
    var tvalues = [
        { name: "Nikhil", age: 20, place: "kallur" },
        { name: "Muhsina", age: 21, place: "thrissur" },
        { name: "Neeraj", age: 20, place: "Chalakudy" }
    ]
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Age</StyledTableCell>
                            <StyledTableCell>Place</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tvalues.map((value, index) => {
                            return <TableRow>
                                <StyledTableCell key={index}>{value.name}</StyledTableCell>
                                <StyledTableCell key={index}>{value.age}</StyledTableCell>
                                <StyledTableCell key={index}>{value.place}</StyledTableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Tabled
