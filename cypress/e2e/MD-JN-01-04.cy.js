describe('การจัดการใบสมัครงาน(ผู้ประกอบการ)', () => {

  beforeEach(() => {
    cy.intercept({method: 'GET',url: /\.(png|jpg|jpeg|gif|svg|webp)$/i,},{ statusCode: 204 })
    cy.viewport(1280, 800)
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ').click()

    cy.get('#email').type('filllovezaza@go.buu.ac.th')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    cy.contains('a','ใบสมัครงาน').click()
  })

  it('TC-JN-01-09-01', () => {})

  it('TC-JN-01-09-02 --> TC-JN-01-09-04', () => {
    cy.get('select[id="perPage"]').select('10')

  })

  it('TC-JN-01-10-01 --> TC-JN-01-10-10  ', () => {
    cy.get('input[id="filterName"]').clear().type('Satawat')
    cy.contains('button','ค้นหา').click()
    cy.contains('td','Satawat').should('exist')
  
    cy.get('input[id="filterTitle"]').clear().type('ทดสอบการเพิ่มการประกาศงาน')
    cy.contains('button','ค้นหา').click()
    cy.contains('a','ล้าง').click()

    cy.get('select[id="filterStatus"]').select('รอประเมิน')
    cy.get('#filterDate').type('2026-03-31')
    cy.contains('button','ค้นหา').click()
  })

  it('TC-JN-01-11-01', () => {
    cy.get('button[title="บันทึกเป็นตัวเต็ง"]').first().click()
  })

  it('TC-JN-01-11-02 --> TC-JN-01-11-03', () => {
    cy.contains('tr', 'รอประเมิน').within(() => {
    cy.get('a[title="ดูรายละเอียด"]').click()})
    cy.get('textarea[name="internal_note"]').clear().type('มีทักษะที่ดี')
    cy.contains('button', 'บันทึกโน้ต').click()
    cy.get('button[id="btn-accepted"]').click()
    cy.get('.swal2-confirm').click()
  })

  it('TC-JN-01-11-04', () => {
    cy.contains('tr', 'รอประเมิน').within(() => {
    cy.get('a[title="ดูรายละเอียด"]').click()})
    cy.get('button[id="btn-rejected"]').click()
    cy.get('.swal2-confirm').click()

  })







  


})