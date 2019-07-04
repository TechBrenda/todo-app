package com.techbrenda.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class HelloWorldController {
  // GET
  // URI - /hello-world
  // method "Hello World"
  //@RequestMapping(method = RequestMethod.GET, path = "/hello-world")
  @GetMapping(path = "/hello-world")
  public String helloWorld() {
    return "Hello World";
  }
  
  // hello-world-bean
  @GetMapping(path = "/hello-world-bean")
  public HelloWorldBean helloWorldBean() {
    return new HelloWorldBean("Hello World");
  }
  
  @GetMapping(path = "/hello-world/{name}")
  public HelloWorldBean helloWorldName(@PathVariable String name) {
    return new HelloWorldBean(String.format("Hello World, %s", name));
  }
}