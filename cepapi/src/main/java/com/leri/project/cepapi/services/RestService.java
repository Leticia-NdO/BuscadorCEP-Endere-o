package com.leri.project.cepapi.services;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RestService {
    
    private final RestTemplate restTemplate;

    public RestService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public String getCEP(String cep) {

        String url = "https://viacep.com.br/ws/" + cep + "/json/";
	    String result = this.restTemplate.getForObject(url, String.class);
	    return result; 
    }

    public String getAddress (String state, String city, String street){
        String url = "https://viacep.com.br/ws/" + state + "/" + city + "/" + street + "/json/";
	    String result = this.restTemplate.getForObject(url, String.class);
	    return result; 
    }
}
