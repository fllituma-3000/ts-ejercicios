class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log("Hola soy " + this.nombre);
    }
}

class Estudiante extends Persona {
    curso: string;

    constructor(nombre: string, edad: number, curso: string){
        super(nombre, edad);  
        this.curso = curso;   
    }

    imprimirCurso(){
        console.log("Estoy en el curso: " + this.curso);
    }
}

// Ejemplo usando la clase Estudiante
let estudiante1 = new Estudiante("Franklin", 20, "Programación");

estudiante1.saludar();        
estudiante1.imprimirCurso();  