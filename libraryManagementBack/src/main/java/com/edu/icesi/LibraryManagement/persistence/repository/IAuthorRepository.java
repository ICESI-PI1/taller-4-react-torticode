package com.edu.icesi.LibraryManagement.persistence.repository;

import com.edu.icesi.LibraryManagement.persistence.model.Author;
import com.edu.icesi.LibraryManagement.persistence.model.Book;

import java.util.List;
import java.util.Optional;

public interface IAuthorRepository {
    List<Author> getAllAuthors();
    Optional<Author> findById(Long id);
    Author saveAuthor(Author author);
    Boolean uploadAuthor(Long id, Author author);
    Boolean deleteAuthor(Long id);

}
