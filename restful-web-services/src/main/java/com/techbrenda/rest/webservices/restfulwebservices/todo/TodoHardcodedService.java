package com.techbrenda.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
  private static List<Todo> todos = new ArrayList<>();
  private static long idCounter = 1;

  static {
    todos.add(new Todo(idCounter++, "techbrenda", "Learn to Dance", new Date(), false));
    todos.add(new Todo(idCounter++, "techbrenda", "Learn about Microservices", new Date(), false));
    todos.add(new Todo(idCounter++, "techbrenda", "Learn about Redux", new Date(), false));
  }

  public List<Todo> findAll() {
    return todos;
  }

  public Todo findById(long id) {
    for (Todo todo : todos) {
      if (todo.getId() == id) {
        return todo;
      }
    }
    return null;
  }
  
  public Todo save(Todo todo) {
    if(todo.getId() == 0) {
      todo.setId(idCounter++);
      todos.add(todo);
    } else {
      deleteById(todo.getId());
      todos.add(todo);
    }
    return todo;
  }

  public Todo deleteById(long id) {
    Todo todo = findById(id);
    if (todo == null) {
      return null;
    }
    if (todos.remove(todo)) {
      return todo;
    }
    return null;
  }
}