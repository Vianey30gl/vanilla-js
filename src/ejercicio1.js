let contador = {
  valor: 0,
  siguiente: function () {
// Inserte el código aquí
   this.valor += 1;
   return this.valor;
  },
};

export { contador };