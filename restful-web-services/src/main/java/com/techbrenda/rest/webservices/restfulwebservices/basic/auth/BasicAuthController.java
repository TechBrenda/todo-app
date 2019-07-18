package com.techbrenda.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicAuthController {
  @GetMapping(path = "/basicauth")
  public Authentication authenticationBean() {
    return new Authentication("You are authenticated");
  }
}