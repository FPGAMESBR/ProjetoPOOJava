package com.example.cadastroaluno.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FieldMessageDTO {

    private String fieldName;
    private String message;

}
