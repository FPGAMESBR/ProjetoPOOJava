package com.example.cadastroaluno.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jdk.jshell.Snippet;
import org.hibernate.validator.cfg.defs.EmailDef;

import javax.xml.crypto.Data;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

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

    public String getSexo() {
        return Sexo;
    }

    public void setSexo(String sexo) {
        Sexo = sexo;
    }

    private String AlunoStatus;
    private String Sexo;

    public String getAlunoStatus() {
        return AlunoStatus;
    }

    public void setAlunoStatus(String alunoStatus) {
        AlunoStatus = alunoStatus;
    }

    public long getCPF() {
        return CPF;
    }

    public void setCPF(long CPF) {
        this.CPF = CPF;
    }

    public BigDecimal getTelefone1() {
        return Telefone1;
    }

    public void setTelefone1(BigDecimal telefone1) {
        Telefone1 = telefone1;
    }

    public BigDecimal getTelefone2() {
        return Telefone2;
    }

    public void setTelefone2(BigDecimal telefone2) {
        Telefone2 = telefone2;
    }

    public long getMatricula() {
        return Matricula;
    }

    public void setMatricula(long matricula) {
        Matricula = matricula;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getNomeResponsavel() {
        return NomeResponsavel;
    }

    public void setNomeResponsavel(String nomeResponsavel) {
        NomeResponsavel = nomeResponsavel;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

}
