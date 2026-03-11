describe('template spec', () => {
  it('passes', () => {
        cy.intercept(
      {
        method: 'GET',
        url: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
      },
      { statusCode: 204 }
    )
    cy.viewport(1280, 800) 
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ')
      .should('be.visible')
      .click()
    //admin
    cy.get('#email').type('filllovezaza@go.buu.ac.th')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    
    cy.contains('a','ใบสมัครงาน').click()
    
    cy.get('tbody tr').its('length').should('be.gte', 1)
  })
})