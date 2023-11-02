
import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import AuthorRow from './AuthorRow';
//import { obtenerAutores } from './api'; // Asegúrate de importar la función de la API

function AuthorTable ({authors, delAuthor, editAuthor }) {


  const renderAuthors = () => {
    return authors.map((author) => (
      <AuthorRow key={author.id} author={author} delAuthor={delAuthor} editAuthor={editAuthor} />
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="left">Nacionalidad</TableCell>
            <TableCell align="left">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderAuthors()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

AuthorTable.propTypes = {
  authors : PropTypes.array, 
  delAuthor: PropTypes.func,
  editAuthor: PropTypes.func
};

export default AuthorTable;