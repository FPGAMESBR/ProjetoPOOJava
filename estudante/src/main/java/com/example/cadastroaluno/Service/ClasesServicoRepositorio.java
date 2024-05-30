package com.example.cadastroaluno.Service;

import com.example.cadastroaluno.DTO.ClassesDTO;
import com.example.cadastroaluno.Exepcion.NotfoundException;
import com.example.cadastroaluno.Models.AlunosModel;
import com.example.cadastroaluno.Models.ClassesModel;
import com.example.cadastroaluno.Repositorio.AlunosRepositori;
import com.example.cadastroaluno.Repositorio.ClasesRepositorio;
import lombok.NoArgsConstructor;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@NoArgsConstructor
@Service
public class ClasesServicoRepositorio {

    @Autowired
    AlunosRepositori alunosRepositori;
    ClasesServicoRepositorio(AlunosRepositori alunosRepositori){
        this.alunosRepositori = alunosRepositori;
    }
    @Autowired
    ClasesRepositorio clasesRepositorio;
    ClasesServicoRepositorio(ClasesRepositorio clasesRepositorio){
        this.clasesRepositorio = clasesRepositorio;
    }
    public List<ClassesModel> exibirNotas(){
        return clasesRepositorio.findAll();
    }
    public List<Object[]> buscarNotasComNomeDosAlunos() {
        return clasesRepositorio.buscarNotasComNomeDosAlunos();
    }
    public ClassesModel adicionarNotas(Long id, ClassesDTO classesDTO) {
        var classesModel = new ClassesModel();
        BeanUtils.copyProperties(classesDTO, classesModel);
        Optional<AlunosModel> optionalAluno = alunosRepositori.findById(id);
        if (optionalAluno.isPresent()) {
            AlunosModel aluno = optionalAluno.get();

            Optional<ClassesModel> existingClasses = clasesRepositorio.findByAlunosModel(aluno);
            if (existingClasses.isPresent()) {
                throw new NotfoundException("Já existe uma entrada de classe para o aluno com ID: " + id);
            }
            classesModel.setAlunosModel(aluno);

            return clasesRepositorio.save(classesModel);
        } else {
            throw new NotfoundException("Aluno não encontrado com ID: " + id);
        }
    }
    public ClassesModel modificarNotas(ClassesModel classesModel){
        return clasesRepositorio.save(classesModel);

    }
}
