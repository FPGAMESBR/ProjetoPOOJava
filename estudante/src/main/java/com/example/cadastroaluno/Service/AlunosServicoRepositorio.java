package com.example.cadastroaluno.Service;

import com.example.cadastroaluno.DTO.AlunosDTO;
import com.example.cadastroaluno.Models.AlunosModel;
import com.example.cadastroaluno.Repositorio.AlunosRepositori;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class AlunosServicoRepositorio {
    AlunosRepositori alunosRepositori;
    AlunosServicoRepositorio(AlunosRepositori alunosRepositori){
        this.alunosRepositori = alunosRepositori;
    }
    public List<AlunosModel> todosAlunos(){
        return alunosRepositori.findAll();
    }
    public List<AlunosModel> bucarMatrucilaPendenste(){
        return alunosRepositori.buscarMatriculaPendente();
    }
    public  AlunosModel umAluno(Long id){
        Optional<AlunosModel> alun0 = alunosRepositori.findById(id);
        if(alun0.isEmpty()){
            throw new RuntimeException("não tem");
        }
        return alun0.get();

    }
    public AlunosModel inserir(AlunosDTO alunosDTO){
        var alunosModel = new AlunosModel();
        BeanUtils.copyProperties(alunosDTO, alunosModel);
            if (alunosModel.getCPF() == 0 || alunosModel.getTelefone1() == null) {
                alunosModel.setAlunoStatus("Pendente");
            } else {
                alunosModel.setAlunoStatus("Concluido");
            }
            return alunosRepositori.save(alunosModel);

    }
    public AlunosModel alterar(AlunosModel alunosModel){
        if (alunosModel.getCPF()>0 && alunosModel.getTelefone1()!=null){
            alunosModel.setAlunoStatus("Concluido");
        }
        return alunosRepositori.saveAndFlush(alunosModel);
    }
    public void excluir(Long id){
        AlunosModel alunosModel = alunosRepositori.findById(id).get();
        alunosRepositori.delete(alunosModel);
    }
}
