package com.edu.icesi.LibraryManagement.persistence.repository;

import com.edu.icesi.LibraryManagement.persistence.model.Author;
import com.edu.icesi.LibraryManagement.persistence.model.Book;

import java.util.List;
import java.util.Optional;

public interface IBookRepository{

    List<Book> getAllBooks();
    Optional<Book> findById(Long id);
    Book saveBook(Book book);
    Boolean uploadBook(Long id,Book book);
    Boolean deleteBook(Long id);
    List<Book> getBooksbyAuthor(Long idAuthor);

}
