package com.techbrenda.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class TodoJpaController {
  
  @Autowired
  private TodoRepository todoRepository;
  
  @GetMapping("/jpa/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {
    return todoRepository.findByUsername(username);
  }
  
  @GetMapping("/jpa/users/{username}/todos/{id}")
  public Todo getTodo(@PathVariable String username, @PathVariable long id) {
    return todoRepository.findById(id).get();
  }
  
  @PostMapping("/jpa/users/{username}/todos")
  public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
    Todo createdTodo = todoRepository.save(todo);
    
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
    
    return ResponseEntity.created(uri).build();
  }
  
  @PutMapping("/jpa/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
    return new ResponseEntity<Todo>(todoRepository.save(todo), HttpStatus.OK);
  }
  
  @DeleteMapping("/jpa/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
    todoRepository.deleteById(id);
    return ResponseEntity.noContent().build();
  }
}