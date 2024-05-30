package com.example.cadastroaluno.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jdk.jshell.Snippet;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.cfg.defs.EmailDef;

import javax.xml.crypto.Data;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "TB_alunos")
public class AlunosModel  implements Serializable {
    @Id
    private long Matricula;
    private String Nome;
    private String Email;
    private String NomeResponsavel;
    @Temporal(TemporalType.DATE)
    private Date dataCadastro = new Date();
    @Temporal(TemporalType.DATE)
    private Date dataNascimento;
    private long CPF;
    private BigDecimal Telefone1;
    private BigDecimal Telefone2;
    private long serieAluno;

    private String AlunoStatus;
    private String Sexo;

    @OneToMany(mappedBy = "alunosModel", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<ClassesModel> notas;


}
