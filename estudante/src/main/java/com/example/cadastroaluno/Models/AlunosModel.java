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

@Getter@Setter
@NoArgsConstructor
@Entity
@Table(name = "TB_alunos")
public class AlunosModel  implements Serializable {
    @Id
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




    @Temporal(TemporalType.DATE)
    private Date dataCadastro = new Date();
    @Temporal(TemporalType.DATE)
    private Date dataNascimento;

    @OneToMany(mappedBy = "alunosModel", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<ClassesModel> notas;


}
