describe('การจัดการใบเรซูเม่(ผู้ประกอบการ)', () => {

  beforeEach(() => {
    cy.intercept({method: 'GET',url: /\.(png|jpg|jpeg|gif|svg|webp)$/i,},{ statusCode: 204 })
    cy.viewport(1280, 800)
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ').click()

    cy.get('#email').type('filllovezaza@go.buu.ac.th')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    cy.contains('a','ใบ Resume ผู้สมัคร').click()
  })

  it('TC-JN-01-12-01', () => {})

  it('TC-JN-01-12-02 --> TC-JN-01-12-04', () => {
    cy.get('select[id="perPage"]').select('10')
    cy.contains('a','ถัดไป').click()
    cy.contains('a','ก่อนหน้า').click()
    
  })
    it('TC-JN-01-12-01 --> TC-JN-01-12-08  ', () => {
    cy.get('input[name="q"]').clear().type('Satawat')
    cy.contains('button','ค้นหา').click()
    cy.contains('td','Satawat').should('exist')
  
    cy.get('input[name="location"]').clear().type('ชลบุรี')
    cy.contains('button','ค้นหา').click()
    cy.contains('a','ล้าง').click()

    cy.get('input[name="saved_only"]').click()
    cy.contains('button','ค้นหา').click()
  })

    it('TC-JN-01-14-01', () => {
        cy.get('a[title="ดูรายละเอียด Resume"]').first().click()
    })
    it('TC-JN-01-14-02', () => {
        cy.get('button[title="บันทึกผู้สมัคร"]').first().click()
    })
    it('TC-JN-01-14-03', () => {
        cy.get('.candidate-invite-btn').first().click()
        cy.get('#invite-recruitment').find('option').eq(1).then(option => {cy.get('#invite-recruitment').select(option.val())})
        cy.get('.swal2-confirm').click()
    })


})