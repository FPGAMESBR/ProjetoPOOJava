package com.example.cadastroaluno.DTO;

import jakarta.annotation.Nullable;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;
import java.util.Date;

@Data
@NoArgsConstructor
public class AlunosDTO {
    private Long cpf;

    private String rgAluno;
    private String nis;
    private String numeroCertidao;
    private String serieAno;
    private String nomeAluno;
    private String alunoStatus;
    private String naturnalidadeEstado;
    private String nacionalidade;
    private String tipoSanguinio;
    private String genero;

    private String nomePai;
    private String nomeMae;
    private String emailResposavel;
    private String cpfPai;
    private String cpfMae;
    private String rgPai;
    private String rgMae;
    private String endereco;
    private String dataNascimento;
}