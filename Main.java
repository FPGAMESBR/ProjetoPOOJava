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
    }
}