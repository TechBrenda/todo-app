package com.techbrenda.rest.webservices.restfulwebservices.jwt.resource;

public class JwtAuthenticationException extends RuntimeException {
  private static final long serialVersionUID = 1L;

  public JwtAuthenticationException(String message, Throwable cause) {
    super(message, cause);
  }
}