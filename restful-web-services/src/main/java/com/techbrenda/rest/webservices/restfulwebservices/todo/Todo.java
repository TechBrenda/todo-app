package com.techbrenda.rest.webservices.restfulwebservices.todo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Todo {
  @EqualsAndHashCode.Include
  private long id;
  private String username;
  private String description;
  private Date targetDate;
  private boolean isDone;
}