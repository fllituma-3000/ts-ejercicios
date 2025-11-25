class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito realizado: $${monto}`);
        } else {
            console.log("Error: El monto debe ser positivo");
        }
    }

    mostrarSaldo(): void {
        console.log(`Saldo actual: $${this.saldo}`);
    }
}


const cuenta = new CuentaBancaria(100);
cuenta.mostrarSaldo();
cuenta.depositar(50);
cuenta.mostrarSaldo();
