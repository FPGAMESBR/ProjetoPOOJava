package com.example.cadastroaluno.Exepcion;

public class MensagemException extends RuntimeException{
    public MensagemException(String message){
        super(message);
    }

    public MensagemException(String message, Throwable cause){
        super(message, cause);
    }

}
