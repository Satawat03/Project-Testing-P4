describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1280, 800) 
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ')
      .should('be.visible')
      .click()
    //admin
    cy.get('#email').type('filllovezaza@gmil.com')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    
    cy.contains('a','ผู้ประกอบการ').click()
    cy.contains('a','ประกาศงาน').click()
    
    cy.get('input[name="q"]').clear().type('ทดสอบการเพิ่มการประกาศงาน')
    cy.get('select[name="status"]').select('เปิดรับ')
    cy.get('select[name="type"]').select('Part-time')
    cy.get('select[name="work_mode"]').select('Remote')

    cy.contains('button','ค้นหา').click()
    cy.get('tbody tr').its('length').should('be.gte', 1)

    cy.contains('a','ล้าง').click()
  })
})