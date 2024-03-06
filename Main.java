public class Aluno {
    private String nome;
    private String cpf;
    private String rg;

    // Construtor
    public Aluno(String nome, String cpf, String rg) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
    }

    // Métodos para acessar e modificar as propriedades
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    // Outros métodos para manipular os dados do aluno
}