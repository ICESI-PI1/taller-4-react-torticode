import {useEffect, useState} from 'react'
import axios from  '../config/axios'
import BookTable from '../components/BookTable' 
import BookForm from '../components/BookForm' 

export default function BookList({}) {

    const [bookList, setBookList] = useState([])
    const [bookEdit, setBookEdit] = useState({id:"", title:"",publicationDate:"", author:{id:"", name:"",nationality:""}})
    const [bookDetails, setBookDetails] = useState(null);


    const getBooks = async () => {

        try{
            const res = await axios.get("/libros")
            setBookList(res.data)
            console.log(res.data)
        }catch(e){
            console.log(e)
        }
    }
    useEffect( () => {getBooks()}, [])

    const addBook = async (book) => {
        if (book.id==""){
            book.id= Math.floor(Math.random()*100000)
            try{
                const res = await axios.post("/libros", book)
                if(res.status==201)
                setBookList((prevBooks) => [...prevBooks, book]);
            }catch (e){
                console.log(e + "Error al agregar libro")
            }
        }else{
            try{
                const res = await axios.put("/libros/"+book.id, book)
                if(res.status==200)
                getBooks()
            }catch (e){
                console.log(e)
            }
        }  
    }

    const delBook = async (id) => {
        try {
            const res = await axios.delete("/libros/"+id)
            if(res.status==200)
            getBooks()
        }catch (e){
            console.log(e + "No se puede eliminar el libro")
        }
    
    }
    const showDetails = async (id) => {
        try {
            const res = await axios.get("/libros/" + id);
            setBookDetails(res.data);
        }catch (e){
            console.log(e)
        }
    }

  return (
    <>
        <h1>Libros</h1>
        <BookTable bookList={bookList} delBook={delBook} showDetails={showDetails} setBookEdit={setBookEdit}/>
        <BookForm addBook={addBook} bookEdit={bookEdit} />

    </>
  )
}

