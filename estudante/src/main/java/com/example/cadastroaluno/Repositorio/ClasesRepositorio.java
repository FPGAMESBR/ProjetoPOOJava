package com.example.cadastroaluno.Repositorio;

import com.example.cadastroaluno.Models.AlunosModel;
import com.example.cadastroaluno.Models.ClassesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ClasesRepositorio extends JpaRepository<ClassesModel, Long> {
    @Query("SELECT c.alunosModel.nomeAluno, c.alunosModel.dataNascimento,c.Portugues, c.Redação, c.Ingles, c.Matematica, c.Geografia, c.Ciencias, c.Historia, c.Geometria, c.Filosofia, c.Arte, c.EFisica, c.DireitoCidadania, c.Religiao FROM ClassesModel c")
    List<Object[]> buscarNotasComNomeDosAlunos();
    Optional<ClassesModel> findByAlunosModel(AlunosModel aluno);
}


