package com.example.cadastroaluno.DTO;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data
@NoArgsConstructor
public class AlunosDTO {
    @NotBlank
    @Length(min = 10, max = 10, message = "Não Pode")
    private long Matricula;
    @NotBlank(message = "Falta o nome")
    private String Nome;
    private String NomeResponsavel;

}
