class Banco {

  // Depositar dinero
  depositar(saldo: number, monto: number): number {
    // Sumar el depósito al saldo actual
    return saldo + monto;
  }

  // Retirar dinero
  retirar(saldo: number, monto: number): number {
    // Validar que haya suficiente dinero
    if (monto > saldo) {
      throw new Error("Fondos insuficientes");
    }
    // Restar el retiro
    return saldo - monto;
  }

  // Transferencia entre cuentas
  transferir(saldoOrigen: number, monto: number): number {
    // Validar fondos
    if (monto > saldoOrigen) {
      throw new Error("No se puede transferir más del saldo disponible");
    }
    // Restar la transferencia del saldo de origen
    return saldoOrigen - monto;
  }
}
