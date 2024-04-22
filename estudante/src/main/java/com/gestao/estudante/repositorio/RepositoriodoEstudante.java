package com.gestao.estudante.repositorio;

import com.gestao.estudante.modelo.Estudante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoriodoEstudante extends JpaRepository<Estudante, Integer>{
}
