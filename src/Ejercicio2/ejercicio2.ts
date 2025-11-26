class Estudiante {

  // Actualizar promedio con nueva nota
  agregarNota(promedio: number, nuevaNota: number): number {
    // Sumar ambas notas y dividir para obtener el nuevo promedio
    return (promedio + nuevaNota) / 2;
  }

  // Verificar si aprueba
  aprobar(nota: number, minima: number): boolean {
    // Retorna true si la nota es mayor o igual
    return nota >= minima;
  }

  // Calcular total de faltas
  calcularFaltas(faltasActuales: number, nuevas: number): number {
    // Sumar las nuevas faltas a las actuales
    return faltasActuales + nuevas;
  }
}
