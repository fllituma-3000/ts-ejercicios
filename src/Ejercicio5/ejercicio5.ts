class Hospital {

  // Calcular dosis de medicamento
  calcularDosis(peso: number, mgPorKg: number): number {
    // Multiplicar peso por miligramos por kg
    return peso * mgPorKg;
  }

  // Calcular IMC
  calcularIMC(peso: number, altura: number): number {
    // Fórmula: peso / (altura * altura)
    return peso / (altura * altura);
  }

  // Registrar visitas
  registrarVisitas(visitasActuales: number, nuevas: number): number {
    // Sumar visitas
    return visitasActuales + nuevas;
  }
}
