class Animal {
    sonar(): void {
        console.log("El animal hace un sonido");
    }
}

class Perro extends Animal {
    sonar(): void {
        console.log(" El perro ladra: ¡Guau!");
    }
}

class Gato extends Animal {
    sonar(): void {
        console.log(" El gato maúlla: ¡Miau!");
    }
}


const animales: Animal[] = [new Perro(), new Gato(), new Animal()];
animales.forEach(a => a.sonar());
