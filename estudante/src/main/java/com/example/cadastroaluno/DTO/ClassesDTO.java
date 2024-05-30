package com.example.cadastroaluno.DTO;

import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ClassesDTO {
    @Nullable
    private double Nota1;
    private double Nota2;
    private double Nota3;
    private double Nota4;
    private double Nota5;
    private double Nota6;
}
