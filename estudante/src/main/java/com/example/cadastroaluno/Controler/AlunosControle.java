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
    public ResponseEntity<List<AlunosModel>> todosAlunos(){
        List<AlunosModel> alunos = alunosServicoRepositorio.todosAlunos();

        return ResponseEntity.ok(alunos);
    }
    @GetMapping("/matriculaPendente")
    public ResponseEntity<List<AlunosModel>> bucarMatrucilaPendenste(){
        List<AlunosModel> alunos = alunosServicoRepositorio.bucarMatrucilaPendenste();
        return ResponseEntity.ok(alunos);
    }
    @GetMapping("/{id}")
    public ResponseEntity<AlunosModel> umAluno(@PathVariable(value = "id")long id) {
        AlunosModel alunosModel = alunosServicoRepositorio.umAluno(id);
        return ResponseEntity.ok(alunosModel);
    }

    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:5173/")
    public ResponseEntity<AlunosModel> inserir(@RequestBody @Valid AlunosDTO alunosDTO) {
        AlunosModel alunosModel = alunosServicoRepositorio.inserir(alunosDTO);

        return ResponseEntity.status(201).body(alunosModel);
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
