package com.edu.icesi.LibraryManagement.persistence.repository.impl;

import com.edu.icesi.LibraryManagement.persistence.model.Author;
import com.edu.icesi.LibraryManagement.persistence.model.Book;
import com.edu.icesi.LibraryManagement.persistence.repository.IAuthorRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Repository
public class AuthorRepositoryImpl implements IAuthorRepository {

    List<Author> authors = new ArrayList<>();

    public AuthorRepositoryImpl(){};

    @Override
    public List<Author> getAllAuthors() {
        return authors;
    }

    @Override
    public Optional<Author> findById(Long id) {
        return authors.stream().filter(b->b.getId().equals (id)).findFirst();
    }

    @Override
    public Author saveAuthor(Author author) {
        Author existingAuthor = findById(author.getId()).orElse(null);
        if(existingAuthor!=null){
            authors.remove(existingAuthor);
            Author newAuthor = new Author(author);
            authors.add(newAuthor);
        }else{
            authors.add(author);
        }
        return author;
    }

    @Override
    public Boolean uploadAuthor(Long id, Author author) {

        Author authorToUptade = findById(id).orElse(null);
        if(authorToUptade!=null){
            authorToUptade.setName(author.getName());
            authorToUptade.setNationality(author.getNationality());
            saveAuthor(authorToUptade);
            return true;
        }
        return false;
    }

    @Override
    public Boolean deleteAuthor(Long id) {
        Author existingAuthor = findById(id).orElse(null);
        boolean flag = false;
        if(existingAuthor!=null){
            authors.remove(existingAuthor);
            flag=true;
        }else{
            throw new NoSuchElementException("No author found with the given ID: " + id);
        }
        return flag;
    }


}
