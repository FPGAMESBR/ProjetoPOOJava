package com.example.cadastroaluno.Exepcion;

public class NotfoundException extends  RuntimeException{

    public NotfoundException(String message){
        super(message);
    }

    public NotfoundException(String message, Throwable cause){
        super(message, cause);
    }

}
