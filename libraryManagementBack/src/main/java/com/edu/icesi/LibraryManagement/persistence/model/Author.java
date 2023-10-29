package com.edu.icesi.LibraryManagement.persistence.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Author {

    private Long id;
    private String name;
    private String nationality;

    public Author(Author author){
        this(author.getId(),author.getName(),author.getNationality());
    }
}
