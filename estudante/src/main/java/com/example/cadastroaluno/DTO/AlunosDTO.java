package com.example.cadastroaluno.DTO;

import jakarta.annotation.Nullable;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;
import java.util.Date;

@Data
@NoArgsConstructor
public class AlunosDTO {
    @NotNull
    @Digits(integer = 10, fraction = 0)
    private Long Matricula;
    @NotBlank(message = "Falta o nome")
    private String Nome;
    private String NomeResponsavel;
    private String Sexo;
    private Date dataNascimento;
    private long CPF;
    private BigDecimal Telefone1;
    @Nullable
    private String Email;
    private BigDecimal Telefone2;
}
