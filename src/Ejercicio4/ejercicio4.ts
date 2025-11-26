class Restaurante {

  // Calcular total sin descuento
  calcularTotal(precio: number, cantidad: number): number {
    // Multiplicar precio por cantidad
    return precio * cantidad;
  }

  // Aplicar descuento
  aplicarDescuento(total: number, descuento: number): number {
    // Descuento porcentual
    return total - (total * descuento / 100);
  }

  // Calcular propina
  calcularPropina(total: number, porcentaje: number): number {
    // Propina porcentual
    return total * (porcentaje / 100);
  }
}
