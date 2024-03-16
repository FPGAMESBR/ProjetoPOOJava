package negocio;

import javax.swing.*;

public class Aluno {
    private String nome;
    private int idade;
    private float altura;
    private float peso;
    private char sexo;

    public Aluno(String nome, int idade, float altura, float peso, char sexo) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.sexo = sexo;
    }

    //Valores padrões
    public Aluno() {
        this.nome = "";
        this.idade = 0;
        this.altura = 0.0f;
        this.peso = 0.0f;
        this.sexo = '\0';
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public char getSexo() {
        return sexo;
    }
}