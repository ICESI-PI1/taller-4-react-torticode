import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material';

function AuthorForm({ addAuthor, authorEdit }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");

  useEffect(() => {
    if (authorEdit) {
      setId(authorEdit.id || "");
      setName(authorEdit.name || "");
      setNationality(authorEdit.nationality || "");
    }
  }, [authorEdit]);

  const handleClick = () => {
    addAuthor({ id, name, nationality });
    setId("");
    setName("");
    setNationality("");
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Nombre" variant="standard" value={name} onChange={(e) => { setName(e.target.value); }} />
      <TextField label="Nacionalidad" variant="standard" value={nationality} onChange={(e) => { setNationality(e.target.value); }} />
      <Button variant="contained" onClick={handleClick}>Guardar</Button>
    </Box>
  );
}

AuthorForm.propTypes = {
  addAuthor: PropTypes.func,
  authorEdit: PropTypes.object
};

export default AuthorForm;