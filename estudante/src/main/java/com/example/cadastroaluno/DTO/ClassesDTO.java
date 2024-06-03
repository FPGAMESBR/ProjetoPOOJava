package com.example.cadastroaluno.DTO;

import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ClassesDTO {
    @Nullable
    private double Portugues;
    private double Redação;
    private double Ingles;
    private double Matematica;
    private double Geometria;
    private double Ciencias;
    private double Historia;
    private double Geografia;
    private double Filosofia;
    private double Arte;
    private double EFisica;
    private double DireitoCidadania;
    private double Religiao;
}
