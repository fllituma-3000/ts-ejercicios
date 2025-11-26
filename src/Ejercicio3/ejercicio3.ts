class Auto {

  // Acelerar auto
  acelerar(velocidadActual: number, incremento: number): number {
    // Sumar km/h a la velocidad
    return velocidadActual + incremento;
  }

  // Frenar auto
  frenar(velocidadActual: number, decremento: number): number {
    // Restar velocidad
    const nuevaVelocidad = velocidadActual - decremento;
    // Si queda negativa, se devuelve 0
    return nuevaVelocidad < 0 ? 0 : nuevaVelocidad;
  }

  // Calcular velocidad media
  recorrer(distancia: number, tiempo: number): number {
    // Fórmula: distancia / tiempo
    return distancia / tiempo;
  }
}
