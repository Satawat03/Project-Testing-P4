describe('template spec', () => {
  it('passes', () => {

    cy.viewport(1280, 800) 
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ')
      .should('be.visible')
      .click()
    //admin
    cy.get('#email').type('65160356@go.buu.ac.th')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    
    // เปิด user dropdown
    cy.get('i.fa-regular.fa-user').closest('div[role="button"]').click()

    // คลิกเมนูโปรไฟล์
    cy.contains('โปรไฟล์').should('be.visible').click()
  })
})