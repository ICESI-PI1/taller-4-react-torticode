package com.edu.icesi.LibraryManagement.service.impl;

import com.edu.icesi.LibraryManagement.persistence.model.Author;
import com.edu.icesi.LibraryManagement.persistence.model.Book;
import com.edu.icesi.LibraryManagement.persistence.repository.IBookRepository;
import com.edu.icesi.LibraryManagement.service.IBookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements IBookService {

    IBookRepository bookRepository;

    public BookServiceImpl(IBookRepository bookRepository){
        this.bookRepository=bookRepository;
    }
    @Override
    public List<Book> getAllBooks() {
        return bookRepository.getAllBooks();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Book saveBook(Book book) {
        return bookRepository.saveBook(book);
    }

    @Override
    public Boolean uploadBook(Long id, Book book) {
        return bookRepository.uploadBook(id,book);
    }
    @Override
    public Boolean deleteBook(Long id) {
        return bookRepository.deleteBook(id);
    }
    @Override
    public List<Book> getBooksbyAuthor(Long idAuthor) {
        System.out.println(bookRepository.getBooksbyAuthor(idAuthor));
        return bookRepository.getBooksbyAuthor(idAuthor);
    }
}
