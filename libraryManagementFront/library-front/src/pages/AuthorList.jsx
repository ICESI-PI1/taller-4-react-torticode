import {useEffect, useState} from 'react'
import axios from  '../config/axios'
import AuthorTable from '../components/AuthorTable' 
import AuthorForm from '../components/AuthorForm' 
import PropTypes from 'prop-types'
import { AuthorContext } from '../context/AuthorContext' 

function AuthorList({owner}) {

  const [authorList, setAuthorList] = useState([])
  const [authorEdit, setAuthorEdit] = useState({id:"", name:"", books: []})

  const getAuthors = async () => {
    try {
       /* const res = await axios.get("/autores")
       console.log(res.data)
       setAuthorList(res.data) */
       let url = "http://localhost:8080/ic_rest_interfaces_test/api"
       let config = {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + localStorage.getItem('token')
        },
    

    }
       let response = await fetch(url,config)
       let res = await response.json()
       console.log(res)
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

  return (
    <AuthorContext.Provider value={{authorEdit, setAuthorEdit}}>
      <h1>Authors Management</h1>
      <AuthorForm addAuthor={addAuthor} authorEdit={authorEdit}/>
      <AuthorTable authorList={authorList} delAuthor={delAuthor} editAuthor={setAuthorEdit}/>
    </AuthorContext.Provider>
  )
}

AuthorList.propTypes = {
 
}

export default AuthorList;