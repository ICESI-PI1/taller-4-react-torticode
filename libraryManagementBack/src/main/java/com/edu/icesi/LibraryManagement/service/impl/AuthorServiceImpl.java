package com.edu.icesi.LibraryManagement.service.impl;

import com.edu.icesi.LibraryManagement.persistence.model.Author;
import com.edu.icesi.LibraryManagement.persistence.model.Book;
import com.edu.icesi.LibraryManagement.persistence.repository.IAuthorRepository;
import com.edu.icesi.LibraryManagement.service.IAuthorService;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements IAuthorService {

    IAuthorRepository authorRepository;

    public AuthorServiceImpl(IAuthorRepository authorRepository){
        this.authorRepository = authorRepository;
    }

    @Override
    public List<Author> getAllAuthors() {
        return authorRepository.getAllAuthors();
    }

    @Override
    public Optional<Author> findById(Long id) {
        return authorRepository.findById(id);
    }

    @Override
    public Author saveAuthor(Author author) {
        return authorRepository.saveAuthor(author);
    }

    @Override
    public Boolean uploadAuthor(Long id, Author author) {
        return authorRepository.uploadAuthor(id,author);
    }

    @Override
    public Boolean deleteAuthor(Long id) {
        return authorRepository.deleteAuthor(id);
    }

}
