package com.techbrenda.rest.webservices.restfulwebservices.helloworld;

//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
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
    return new HelloWorldBean("Hello World Bean");
  }
  
  @GetMapping(path = "/hello-world/{name}")
  public HelloWorldBean helloWorldName(@PathVariable String name) {
    /* throw new RuntimeException("Something went wrong"); */
    return new HelloWorldBean(String.format("Hello World, %s", name));
  }
}