package com.example.cadastroaluno.DTO;

import java.util.ArrayList;
import java.util.List;

public class ValidationErrorDTO extends StandardErrorDTO {
    private List<FieldMessageDTO> errors = new ArrayList<FieldMessageDTO>();


    public ValidationErrorDTO(Long timestamp, Integer status, String error, String message, String path) {
        super(timestamp, status, error, message, path);
    }

    public List<FieldMessageDTO> getErrors() {
        return errors;
    }

    public void addError(String fieldName, String message) {
        errors.add(new FieldMessageDTO(fieldName, message));
    }

}
