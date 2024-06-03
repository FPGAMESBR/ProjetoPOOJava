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
    private double media;

    public double getMedia() {
        double rawMedia = (Portugues + Redação + Ingles + Matematica + Geometria + Ciencias + Historia + Geografia + Filosofia
                + Arte + EFisica + DireitoCidadania + Religiao ) / 14;
        return BigDecimal.valueOf(rawMedia)
                .setScale(2, RoundingMode.HALF_UP)
                .doubleValue();
    }
    @ManyToOne
    @JoinColumn(name = "CPF", referencedColumnName = "CPF")
    @JsonBackReference
    private AlunosModel alunosModel;
}
