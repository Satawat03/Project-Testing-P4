describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1280, 800) 
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ')
      .should('be.visible')
      .click()
    //admin
    cy.get('#email').type('admin@jobnexis.com')
    cy.get('#password').type('zxcvbnM.1')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    
    cy.contains('a','คลังทักษะ ESCO').click()
  })
})