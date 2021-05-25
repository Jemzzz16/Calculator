describe('my first test', () => {
  it('should visit our calculator', () => {
    cy.visit('http://127.0.0.1:5501/Index.html')
  });


  it('should contain 0', () => {
    cy.get('.zeros').contains('0')
  })

  it('should clear and display ', () => {
    cy.get('.ac-clear').click()
    cy.get('.calculator__display').should('have.value', )
  })
});

// describe('addition operator', () => {
//   it('should equal 10', () => {
//     cy.get('.five').click()
//     cy.get('.plus').click()
//     cy.get('.five').click()
//     cy.get('.equal').click()
//     cy.get('.calculator__display').should('have.value', 10)
//   })
// });

// describe('times operator', () => {
//   it('should equal 100', () => {
//     cy.get('.one').click()
//     cy.get('.zeros').click()
//     cy.get('.times').click()
//     cy.get('.one').click()
//     cy.get('.zeros').click()
//     cy.get('.equal').click()
//     cy.get('.calculator__display').should('have.value', 100)
//   })
// });

describe('minus operator', () => {
    it('should minus -5 ', () => {
      cy.get('.one').click()
      cy.get('.five').click()
      cy.get('.minus').click()
      cy.get('.two').click()
      cy.get('.zeros').click()
      cy.get('.equal').click()
      cy.get('.calculator__display').should('have.value', -5)
    })
  });
