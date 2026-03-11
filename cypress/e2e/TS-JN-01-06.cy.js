describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1280, 800) 
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ')
      .should('be.visible')
      .click()
    //admin
    cy.get('#email').type('filllovezaza@go.buu.ac.th')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    
    cy.contains('a','ประกาศงาน').click()
    
    cy.get('tbody tr').its('length').should('be.gte', 1)
  })
})