
describe ( "calcular",()=>{
  it ('modulo',()=>{

 cy.wait(2000); 
cy.visit('http://qainterview.pythonanywhere.com/');
cy.get('#number').click();
cy.get('#number').type('{backspace}');
cy.get('#number').type('{rightarrow}');
cy.get('#number').type('{leftarrow}');
cy.get('#number').type('52');
cy.get('#getFactorial').click();


it ("hasta aqui llegamos",()=>{
cy.wait(2000);
})


  })


})


