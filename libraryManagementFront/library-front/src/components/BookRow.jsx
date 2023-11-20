
import React from 'react'
import PropTypes from 'prop-types';
import { TableRow, TableCell, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function BookRow({book, delBook, editBook, showDetails}) {

    const handleDelete = () => {
        delBook(book.id);
    }
    const handleDetails = () => {
        showDetails(book.id);
    }  

  return (
    <TableRow key={book.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
            {book.id}
        </TableCell>
        <TableCell align="right">{book.title}</TableCell>
        <TableCell align="left">{book.publicationDate}</TableCell>
        <TableCell align="left">{book.author.name}</TableCell>
        <TableCell align="left">
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>&nbsp;
            <Button variant="contained" color="success" onClick={() => { editBook(book); }}>Edit</Button>
            <Link to={"/libros/" + book.id}>
                <Button variant="contained" color="primary" onClick={handleDetails}>Details</Button>
            </Link>        
        </TableCell>
    </TableRow>)
}

PropTypes.BookRow = {
  book: PropTypes.object,
  delBook: PropTypes.func,
  editBook: PropTypes.func,
  showDetails: PropTypes.func
};
export default BookRow;
