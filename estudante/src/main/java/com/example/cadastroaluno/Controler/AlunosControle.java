package com.example.cadastroaluno.Controler;

import com.example.cadastroaluno.DTO.AlunosDTO;
import com.example.cadastroaluno.Models.AlunosModel;
import com.example.cadastroaluno.Service.AlunosServicoRepositorio;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/api/alunos")
public class AlunosControle {
    @Autowired
    AlunosServicoRepositorio alunosServicoRepositorio;
    AlunosControle(AlunosServicoRepositorio alunosServicoRepositorio){
        this.alunosServicoRepositorio = alunosServicoRepositorio;
    }

    @GetMapping("/")
    public List<AlunosModel> todosAlunos(){
        return alunosServicoRepositorio.todosAlunos();
    }
    @GetMapping("/matriculaPendente")
    public List<AlunosModel> bucarMatrucilaPendenste(){
        return alunosServicoRepositorio.bucarMatrucilaPendenste();
    }
    @GetMapping("/{id}")
    public AlunosModel umAluno(@PathVariable(value = "id")long id) {
        return alunosServicoRepositorio.umAluno(id);

    }

    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:5173/")
    public AlunosModel inserir(@RequestBody @Valid AlunosDTO alunosDTO){
        return alunosServicoRepositorio.inserir(alunosDTO);
    }
    @PutMapping("/")
    public AlunosModel alterar(@RequestBody AlunosModel alunosModel){
        return alunosServicoRepositorio.alterar(alunosModel);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable(value = "id") Long id){
        alunosServicoRepositorio.excluir(id);
       return ResponseEntity.ok().build();
    }
}
