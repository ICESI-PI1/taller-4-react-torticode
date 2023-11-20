import { Box, Select,MenuItem } from '@mui/material'
import React, { useEffect,useState } from 'react'
import axios from  '../config/axios'
import { Button, TextField } from '@mui/material'
import PropTypes from 'prop-types';


function BookForm({addBook, bookEdit}) {

  
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [publicationDate, setPublicationDate] = useState('')
  const [selectAuthor, setSelectAuthor] = useState('')
  const [authors, setAuthors] = useState([])
  

  useEffect(() => {
    renderAuthors();
    setId(bookEdit.id || '');
    setTitle(bookEdit.title || '');
    setPublicationDate(bookEdit.publicationDate || '');
    setSelectAuthor(bookEdit.author ? bookEdit.author.id : '')
  },[bookEdit])

  

  const renderAuthors = async () => {
  
    try{
      const rest = await axios.get("/autores")

      if (rest.status==200){
        const listAuthors = rest.data
        setAuthors(listAuthors)
      }else{
        console.log("Error al cargar los autores")
      }
      
    }catch(e){
      console.log(e + "Error al cargar los autores")
    }
  }
  
  const handleClick = () => {

    const author = authors.find((author) => author.id == selectAuthor)
    const book = {id, title, publicationDate, author}
    addBook(book) 
    console.log(book)
    setId('')
    setTitle('')
    setPublicationDate('')
    setSelectAuthor('')  
  }

  return (
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField label="Title" variant="standard" value={title} onChange={(e) => { setTitle(e.target.value); }} />
      <TextField label="Publication date" variant="standard" value={publicationDate} onChange={(e) => { setPublicationDate(e.target.value); }} />
      <Select value={selectAuthor} onChange={(e) => setSelectAuthor(e.target.value)}>
        {authors.map((author) => (
          <MenuItem key={author.id} value={author.id}>
            {author.name}
          </MenuItem>
        ))}
      </Select>
      <Button variant="contained" onClick={handleClick}>Add</Button>
    </Box>
  )
}

BookForm.propTypes = {
  addAuthor: PropTypes.func,
}

export default BookForm;
