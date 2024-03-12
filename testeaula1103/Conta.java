package testeaula1103;

public class Conta {
    int numero;
    String titular;
    double saldo;
}

public static void main(String[] args) {
    Conta conta1 = new Conta();
    conta1.numero= 2024001;
    conta1.titular = "José";
    conta1.saldo = 500;

    Conta conta2 = new Conta();
    conta2.numero = 2024002;

    System.out.println("Número da conta 1: " + conta1.numero);
    System.out.println("Número da conta 2: " + conta2.numero);
}