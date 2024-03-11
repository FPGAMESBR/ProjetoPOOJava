package persistencia;

import java.util.ArrayList;
import negocio.Aluno;

public class ControlaAluno {
    private ArrayList<Aluno> alunos = new ArrayList<>();

    public boolean salvar (Aluno a) {
        if (a != null) {
            alunos.add(a);
            return true;
        }else{
            return false;
        }
    }
    public ArrayList<Aluno> retornarTodos () {
        return alunos;
    }
}