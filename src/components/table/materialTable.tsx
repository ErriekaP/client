import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

import React from 'react'

export const materialTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map(row => (
              <TableRow 
              key={row.id} 
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = 
[{
  "id": 1,
  "first_name": "Christoph",
  "last_name": "Higford",
  "email": "chigford0@nasa.gov",
  "gender": "Male",
  "ip_address": "40.76.240.153"
}, {
  "id": 2,
  "first_name": "Seward",
  "last_name": "Doble",
  "email": "sdoble1@indiatimes.com",
  "gender": "Male",
  "ip_address": "137.217.213.84"
}, {
  "id": 3,
  "first_name": "Reyna",
  "last_name": "Hutten",
  "email": "rhutten2@free.fr",
  "gender": "Female",
  "ip_address": "52.165.197.79"
}, {
  "id": 4,
  "first_name": "Herve",
  "last_name": "Bittleson",
  "email": "hbittleson3@pbs.org",
  "gender": "Male",
  "ip_address": "223.113.110.20"
}, {
  "id": 5,
  "first_name": "Shurwood",
  "last_name": "Giscken",
  "email": "sgiscken4@mtv.com",
  "gender": "Male",
  "ip_address": "145.26.30.22"
}, {
  "id": 6,
  "first_name": "Lynna",
  "last_name": "Shann",
  "email": "lshann5@google.cn",
  "gender": "Female",
  "ip_address": "152.105.132.144"
}, {
  "id": 7,
  "first_name": "Dario",
  "last_name": "Collinge",
  "email": "dcollinge6@smh.com.au",
  "gender": "Male",
  "ip_address": "110.85.115.231"
}, {
  "id": 8,
  "first_name": "Hans",
  "last_name": "Mundell",
  "email": "hmundell7@networkadvertising.org",
  "gender": "Male",
  "ip_address": "44.225.221.24"
}, {
  "id": 9,
  "first_name": "Hanan",
  "last_name": "Alp",
  "email": "halp8@bandcamp.com",
  "gender": "Non-binary",
  "ip_address": "84.65.184.235"
}, {
  "id": 10,
  "first_name": "Christen",
  "last_name": "Goodfellowe",
  "email": "cgoodfellowe9@google.co.uk",
  "gender": "Female",
  "ip_address": "44.123.177.27"
}];