package com.lalitp.user.service.exceptions;

public class ResourceNotFoundException  extends RuntimeException{

    //extra properties that you want to manage
    public ResourceNotFoundException()
    {
        super("Resource Not Found on Server !!");
    }

    public ResourceNotFoundException(String msg){
        super(msg);
    }
}
