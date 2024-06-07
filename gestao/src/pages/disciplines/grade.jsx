import React from "react";
import { Link } from "react-router-dom";
import "./grade.css";

function GradeDisc (){
    return (
       
        <div className="grade-students-page"> 
            <div className="list-students-grades">
                <h1>Atribuir Notas </h1>

                <div className="give-grade-list">
                    <div className="give-grade-list-header">
                        <p>Selecionar</p>
                        <p>Nome</p>
                        <p>Série</p>
                        <p>CPF</p>
                        <p>Sexo</p>
                        <p>Nota</p>
                    </div>
                    <div className="student-grade">
                        <label className="custom-checkbox">                        
                            <input name="dummy" type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <p>Mayron Wilke Ferreira Freire</p>
                        <p>Maternal II</p>
                        <p>142.250.044-65</p>
                        <p>Masculino</p>
                        <input className="grade-input" placeholder="Nota" class="input" name="firstName" type="number"></input>
                    </div>
                    <div className="student-grade">
                        <label className="custom-checkbox">                        
                            <input name="dummy" type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <p>Mônica dos Santos Ferreira</p>
                        <p>9° Ano</p>
                        <p>123.123.123-87</p>
                        <p>Feminino</p>
                        <input className="grade-input" placeholder="Nota" class="input" name="firstName" type="number"></input>
                    </div>     
                </div>
            </div>
        </div>
    );
}

export default GradeDisc;
