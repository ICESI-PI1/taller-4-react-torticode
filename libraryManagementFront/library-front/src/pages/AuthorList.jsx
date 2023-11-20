import {useEffect, useState} from 'react'
import axios from  '../config/axios'
import AuthorTable from '../components/AuthorTable' 
import AuthorForm from '../components/AuthorForm' 

function AuthorList({}) {

  const [authorList, setAuthorList] = useState([])
  const [authorEdit, setAuthorEdit] = useState({id:"", name:"", books: []})
  const [authorDetails, setAuthorDetails] = useState(null);
  const [authorBooks, setAuthorBooks] = useState([null])

  const getAuthors = async () => {
    try {
       const res = await axios.get("/autores")
       setAuthorList(res.data)
       console.log(res.data)
       
    }catch(e){
      console.log(e)
 
    }
  }

  useEffect( () => {getAuthors()}, [])

  const addAuthor = async (author) => {
    if (author.id==""){
      author.id= Math.floor(Math.random()*100000)
      try{
        const res = await axios.post("/autores", author)
        if(res.status==201)
        setAuthorList((prevAuthors) => [...prevAuthors, author]);
        getAuthors()
      }catch (e){
        console.log(e)
      }
    }else{
      try{
        const res = await axios.put("/autores/"+author.id, author)
        if(res.status==200)
        getAuthors()
      }catch (e){
        console.log(e)
      }
    }  
  }

  const delAuthor = async (id) => {
    try {
      const res = await axios.delete("/autores/"+id)
      if(res.status==200)
        getAuthors()
    }catch (e){
      console.log(e)
    }
  }

  const showDetails = async (id) => {
    try {
      const res = await axios.get("/autores/" + id);
      setAuthorDetails(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const showBooksByAuthor = async (id) => {
    try {
      const res = await axios.get("/autores/" + id + "/libros");
      setAuthorBooks(res.data);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <>
    <h1>Authors Management</h1>
    <AuthorForm addAuthor={addAuthor} authorEdit={authorEdit} setAuthorEdit={setAuthorEdit}/>
    <AuthorTable authors={authorList} delAuthor={delAuthor} editAuthor={setAuthorEdit} showDetails={showDetails} />
    {authorDetails && (
      <div>
        <h2>Author Details</h2>
        <p>Id: {authorDetails.id}</p>
        <p>Name: {authorDetails.name}</p>
        <p>Nationality: {authorDetails.nationality}</p>      </div>
    )}
  </>
  )
}



export default AuthorList;