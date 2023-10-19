package com.edu.icesi.librarymanagement.controller;
import org.springframework.web.bin.annotation.RestController;
import org.springframework.web.bin.annotation.RequestMapping;

@RestController
public class AuthorController{
    @RequestMapping(value = "prueba")
    public String prueba(){
        return "prueba";
    }
}

