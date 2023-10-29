package com.edu.icesi.LibraryManagement.persistence.repository.impl;

import com.edu.icesi.LibraryManagement.persistence.model.Author;
import com.edu.icesi.LibraryManagement.persistence.model.Book;
import com.edu.icesi.LibraryManagement.persistence.repository.IBookRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class BookRepositoryImpl implements IBookRepository {

    List<Book> books = new ArrayList<>();

    public BookRepositoryImpl(){}


    @Override
    public List<Book> getAllBooks() {
        return books;
    }

    @Override
    public Optional<Book> findById(Long id) {
        return books.stream().filter(p->p.getId() == id).findFirst();
    }

    @Override
    public Book saveBook(Book book) {
        Book existingBook = findById(book.getId()).orElse(null);
        if(existingBook!=null){
            books.remove(existingBook);
            Book newBook = new Book(book);
            books.add(newBook);
        }else{
            books.add(book);
        }
        return book;
    }

    @Override
    public Boolean uploadBook(Long id, Book book) {
        Book bookToUpdate = findById(id).orElse(null);

        if (bookToUpdate != null){
            bookToUpdate.setTitle(book.getTitle());
            bookToUpdate.setPublicationDate(book.getPublicationDate());
            bookToUpdate.setAuthor(book.getAuthor());
            saveBook(bookToUpdate);
            return true;
        }
        return false;
    }

    @Override
    public Boolean deleteBook(Long id) {
        boolean flag = false;
        Book book = findById(id).orElse(null);

        if(book!=null){
            books.remove(book);
            flag = true;
        }else {
            throw new NoSuchElementException("No book found with the given ID: " + id);
        }
        return flag;
    }
    @Override
    public List<Book> getBooksbyAuthor(Long idAuthor) {
        return books.stream().filter(p -> p.getAuthor().getId() == idAuthor).collect(Collectors.toList());
    }


}
