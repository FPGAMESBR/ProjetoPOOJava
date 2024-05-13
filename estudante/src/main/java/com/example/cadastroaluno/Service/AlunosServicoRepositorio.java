package com.example.cadastroaluno.Service;

import com.example.cadastroaluno.DTO.AlunosDTO;
import com.example.cadastroaluno.Exepcion.MensagemException;
import com.example.cadastroaluno.Exepcion.NotfoundException;
import com.example.cadastroaluno.Models.AlunosModel;
import com.example.cadastroaluno.Repositorio.AlunosRepositori;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

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
    public  AlunosModel umAluno(Long id){
        Optional<AlunosModel> alun0 = alunosRepositori.findById(id);
        return alun0.orElseThrow(() -> new NotfoundException("Não Encontrado"));

    }
    @Transactional(rollbackOn = Exception.class)
    public AlunosModel inserir(AlunosDTO alunosDTO){
        var alunosModel = new AlunosModel();
        BeanUtils.copyProperties(alunosDTO, alunosModel);
//        Optional<AlunosModel> alunoExiste = alunosRepositori.findEventByCPF(alunosModel.getCPF());
//        if (alunoExiste.isPresent() && alunoExiste.get().getCPF() != alunosModel.getCPF()) {
//            throw new MensagemException("Já existe um evento com o título informado");
//        }
            if (alunosModel.getEmail() == null || alunosModel.getTelefone1() == null) {
                alunosModel.setAlunoStatus("Pendente");
            } else {
                alunosModel.setAlunoStatus("Concluido");
            }
           return alunosRepositori.save(alunosModel);


    }

    @Transactional(rollbackOn = Exception.class)
    public AlunosModel alterar(AlunosModel alunosModel) {
        if (alunosModel.getCPF() > 0 && alunosModel.getTelefone1() != null) {
            alunosModel.setAlunoStatus("Concluido");
        }

        Optional<AlunosModel> alunoExists = alunosRepositori.findEventByCPF(alunosModel.getCPF());
        if (alunoExists.isPresent() && alunoExists.get().getMatricula() != alunosModel.getMatricula()) {
            throw new MensagemException("Já existe um aluno com o CPF informado");
        }

        return alunosRepositori.save(alunosModel);
    }

    public void excluir(Long id) {
        Optional<AlunosModel> alunoExist = alunosRepositori.findById(id);

        AlunosModel alunosModel = alunoExist.orElseThrow(() -> new NotfoundException("Aluno Sumido"));
        alunosRepositori.delete(alunosModel);
    }
}

