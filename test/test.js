const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {

  it('Primera condicion: La palabra termina en "ar", se le quitan esos dos caracteres.', function() {
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })
  it('Segunda condicion: Si la palabra inicia con "Z", se añade "pe" al final.', function() {
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarpe")
  })
  it('Tercera condicion: Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion en el medio.', function() {
    const translation = platzom("Abecedario")
    expect(translation).to.equal("Abece-dario")
  })
  it('Cuarta condicion: Si la palabra origina es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function() {
    const translation = platzom("Sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})
