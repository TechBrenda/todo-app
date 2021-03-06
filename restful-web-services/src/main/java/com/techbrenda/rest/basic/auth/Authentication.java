package com.techbrenda.rest.basic.auth;

public class Authentication {
  private String message;

  public Authentication(String message) {
    this.message = message;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  @Override
  public String toString() {
    return "Authentication [message=" + message + "]";
  }
  
}