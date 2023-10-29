package com.edu.icesi.LibraryManagement.controller;

import com.edu.icesi.LibraryManagement.persistence.model.Author;
import com.edu.icesi.LibraryManagement.persistence.model.Book;
import com.edu.icesi.LibraryManagement.service.IBookService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {

    private final IBookService bookService;
    public BookController(IBookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/libros")
    public List<Book> showAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/libros/{id}")
    public Book showBook(@PathVariable Long id, Model model){
        return bookService.findById(id).orElse(null);
    }
    @PostMapping("/libros")
    public Book createAuthor(@RequestBody Book newBook){
        return bookService.saveBook(newBook);
    }
    @PutMapping("/libros/{id}")
    public Boolean uploadBook(@PathVariable Long id, Book uploadBook){
        return bookService.uploadBook(id,uploadBook);
    }

    @DeleteMapping("/libros/{id}")
    public Boolean deleteBook(@PathVariable Long id){
        return bookService.deleteBook(id);
    }

}
