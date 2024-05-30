package com.example.cadastroaluno.Repositorio;

import com.example.cadastroaluno.Models.AlunosModel;
import com.example.cadastroaluno.Models.ClassesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ClasesRepositorio extends JpaRepository<ClassesModel, Long> {
    @Query("SELECT c.alunosModel.Nome, c.alunosModel.dataNascimento,c.Nota1, c.Nota2, c.Nota3, c.Nota4, c.Nota5, c.Nota6 FROM ClassesModel c")
    List<Object[]> buscarNotasComNomeDosAlunos();
    Optional<ClassesModel> findByAlunosModel(AlunosModel aluno);
}
