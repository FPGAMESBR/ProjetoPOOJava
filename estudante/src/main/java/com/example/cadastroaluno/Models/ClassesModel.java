package com.example.cadastroaluno.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.RoundingMode;

@Getter
@Setter
@Table(name = "Clases")
@Entity
public class ClassesModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double Nota1;
    private double Nota2;
    private double Nota3;
    private double Nota4;
    private double Nota5;
    private double Nota6;
    private double media;

    public double getMedia() {
        double rawMedia = (Nota1 + Nota2 + Nota3 + Nota4 + Nota5 + Nota6) / 6;
        return BigDecimal.valueOf(rawMedia)
                .setScale(2, RoundingMode.HALF_UP)
                .doubleValue();
    }
    @ManyToOne
    @JoinColumn(name = "Matricula", referencedColumnName = "Matricula")
    @JsonBackReference
    private AlunosModel alunosModel;
}
