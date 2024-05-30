package com.example.cadastroaluno.Controler;

import com.example.cadastroaluno.DTO.ClassesDTO;
import com.example.cadastroaluno.Models.ClassesModel;
import com.example.cadastroaluno.Service.ClasesServicoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("/api/classes")
@Controller
@RestController
public class ClassesControle {
    @Autowired
    ClasesServicoRepositorio clasesServicoRepositorio;
    ClassesControle(ClasesServicoRepositorio clasesServicoRepositorio){
        this.clasesServicoRepositorio = clasesServicoRepositorio;}

    @GetMapping("/notas-alunos")
    public List<Object[]> buscarNotasComNomeDosAlunos() {
        return clasesServicoRepositorio.buscarNotasComNomeDosAlunos();
    }
    @PostMapping("/adicionar-notas/{id}")
    public ClassesModel adicionarNotas(@PathVariable(value = "id")long id, @RequestBody ClassesDTO classesDTO) {
        return clasesServicoRepositorio.adicionarNotas(id, classesDTO);
    }
    @PutMapping("/")
    public ClassesModel modificarNotas(@RequestBody ClassesModel classesModel){
        return clasesServicoRepositorio.modificarNotas(classesModel);

    }
}



