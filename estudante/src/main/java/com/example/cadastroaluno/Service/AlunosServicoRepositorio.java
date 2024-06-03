package com.example.cadastroaluno.Service;

import com.example.cadastroaluno.DTO.AlunosDTO;
import com.example.cadastroaluno.Exepcion.NotfoundException;
import com.example.cadastroaluno.Models.AlunosModel;
import com.example.cadastroaluno.Repositorio.AlunosRepositori;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunosServicoRepositorio {

    @Autowired
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
    public List<AlunosModel> buscarPorSerie(String serieAno) {
        return alunosRepositori.findBySerieAno(serieAno);
    }

    public  AlunosModel umAluno(Long id){
        Optional<AlunosModel> alun0 = alunosRepositori.findById(id);
        return alun0.orElseThrow(() -> new NotfoundException("Não Encontrado"));

    }
    @Transactional(rollbackOn = Exception.class)
    public AlunosModel inserir(AlunosDTO alunosDTO){
        var alunosModel = new AlunosModel();
        BeanUtils.copyProperties(alunosDTO, alunosModel);
            if (alunosModel.getEmailResposavel() == null || alunosModel.getTipoSanguinio() == null) {
                alunosModel.setAlunoStatus("Pendente");
            } else {
                alunosModel.setAlunoStatus("Concluido");
            }
           return alunosRepositori.save(alunosModel);


    }

    @Transactional(rollbackOn = Exception.class)
    public AlunosModel alterar(AlunosModel alunosModel) {
        if (alunosModel.getEmailResposavel() != null && alunosModel.getTipoSanguinio() != null) {
            alunosModel.setAlunoStatus("Concluido");
        }
        return alunosRepositori.save(alunosModel);
    }

    public void excluir(Long id) {
        Optional<AlunosModel> alunoExist = alunosRepositori.findById(id);

        AlunosModel alunosModel = alunoExist.orElseThrow(() -> new NotfoundException("Aluno Sumido"));
        alunosRepositori.delete(alunosModel);
    }
}

