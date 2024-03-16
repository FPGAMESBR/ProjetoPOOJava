import java.util.Scanner;

public class Main {
    private String nome;
    private int idade;
    private float altura;
    private float peso;
    private char sexo;

    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);

        System.out.println("Digite o nome do aluno: ");
        String nomeAluno = leitura.nextLine();

        System.out.println("Digite a idade do aluno: ");
        int idadeAluno = leitura.nextInt();
        leitura.nextLine();

        System.out.println("Digite a altura do aluno (em metros): ");
        float alturaAluno = leitura.nextFloat();
        leitura.nextLine();

        System.out.println("Digite o peso do aluno (em quilogramas): ");
        float pesoAluno = leitura.nextFloat();
        leitura.nextLine();

        System.out.println("Digite o sexo do aluno (M/F): ");
        char sexoAluno = leitura.next().charAt(0);
        leitura.close();

        Main aluno = new Main(nomeAluno, idadeAluno, alturaAluno, pesoAluno, sexoAluno);
    }


    public Main(String nome, int idade, float altura, float peso, char sexo) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.sexo = sexo;
    }
}