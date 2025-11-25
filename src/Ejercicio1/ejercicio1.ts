class Persona {
    nombre: string = ""
    edad: number = 0

    constructor(nombre:string , edad:number){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
     console.log("Hola soy "+ this.nombre)
    }

}

let Lista : Persona[] = [
    new Persona('Luis', 25),
    new Persona('Carlos', 23),
    new Persona('Alexander', 24),
];    

console.log(Lista)
Lista[0]!.saludar();  
Lista[1]!.saludar();  
Lista[2]!.saludar();  
