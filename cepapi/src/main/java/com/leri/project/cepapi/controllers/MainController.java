package com.leri.project.cepapi.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leri.project.cepapi.services.RestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping(value = "/")
public class MainController {

    @Autowired
    private RestService service;
    
    @GetMapping
    public String index(){
        return "Você está conectado!";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/{cep}")
    public String getcep(@PathVariable String cep){
        return service.getCEP(cep);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/address/{state}/{city}/{street}")
    public String getAddress(@PathVariable String state, @PathVariable String city, @PathVariable String street){
        return service.getAddress(state, city, street);
    }
}
