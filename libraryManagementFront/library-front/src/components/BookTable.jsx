import React from 'react'
import PropTypes from 'prop-types'
import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import BookRow from './BookRow';

function BookTable({bookList, delBook, showDetails, setBookEdit}) {

  const renderBooks = () => {
    if(!bookList){
      return <div>Loading...</div>;
    }
    return bookList.map((book) => 
      (<BookRow key={book.id} book={book} delBook={delBook} showDetails={showDetails} setBookEdit={setBookEdit}/>));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Editorial</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderBooks()}
        </TableBody>
      </Table>
    </TableContainer>
  )
  
}

PropTypes.BookTable = {
  bookList: PropTypes.array,
  delBook: PropTypes.func,
  showDetails: PropTypes.func,
  setBookEdit: PropTypes.func,
}
export default BookTable;
