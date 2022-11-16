// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'mobile', label: 'Mobile', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',

  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 170,
    align: 'right',

  },
  {
    id: 'pro_pic',
    label: 'Picture',
    minWidth: 170,
    align: 'center',
  }
]

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [users, setUsers] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  useEffect(() => {
    fetch('https://smanager-user.dev-sheba.xyz/api/v1/partners/37900/pos-users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
  }, [users.length])


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={user._id}>
                  {columns.map((column, i) => {
                    const value = user[column.id]
                    return (
                      <TableCell key={i} align={column.align}>
                        {column.id == "pro_pic" ? <img src={user.pro_pic} alt={user.name} height={50} width={50} /> : value && value ? value : "N/A"}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
