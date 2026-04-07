describe('การสมัครงานและการติดตามการสมัครงาน(ผู้หางาน)', () => {

  beforeEach(() => {
    cy.intercept({method: 'GET',url: /\.(png|jpg|jpeg|gif|svg|webp)$/i,},{ statusCode: 204 })
    cy.viewport(1280, 800)
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ').click()

    cy.get('#email').type('65160356@go.buu.ac.th')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
  })

   it('TC-JN-01-15-01', () => {
     cy.contains('a','หางาน').click()
   })

it('TC-JN-01-16-01 --> TC-JN-01-16-08', () => {
  cy.contains('a','หางาน').click()
  // ค้นหาด้วยคำว่า 'ทดสอบรับงาน'
  cy.get('input[name="q"]').clear().type('ทดสอบการเพิ่มการประกาศงาน')
  cy.contains('button', 'ค้นหา').click()
  cy.contains('h2', 'ทดสอบการเพิ่มการประกาศงาน').should('exist')
  cy.contains('a', 'ทดสอบการเพิ่มการประกาศงาน').should('be.visible')
  cy.contains('a', 'ล้าง').click()

  // ทดสอบค้นหาด้วยประเภทงาน (type)
  cy.get('select[name="type"]').select('เต็มเวลา (Full-time)')
  cy.contains('button', 'ค้นหา').click()
  // ตรวจสอบว่ามีการ์ดงานแสดงผลอย่างน้อย 1 รายการ
  cy.get('.flex.flex-col.h-full.p-4').should('have.length.at.least', 1)
  // ตรวจสอบว่างานที่แสดงมีประเภทงานตรงตามที่เลือก
  cy.get('.flex.flex-col.h-full.p-4').first().within(() => {
    cy.contains('span', 'เต็มเวลา (Full-time)').should('exist')
  })
  cy.contains('a', 'ล้าง').click()

  // ทดสอบค้นหาด้วยโหมดทำงาน (work_mode)
  cy.get('select[name="work_mode"]').select('เข้าออฟฟิศ (Work on Site)')
  cy.contains('button', 'ค้นหา').click()
  // ตรวจสอบว่ามีการ์ดงานแสดงผลอย่างน้อย 1 รายการ
  cy.get('.flex.flex-col.h-full.p-4').should('have.length.at.least', 1)
  // ตรวจสอบว่างานที่แสดงมีโหมดทำงานตรงตามที่เลือก
  cy.get('.flex.flex-col.h-full.p-4').first().within(() => {
    cy.contains('span', 'เข้าออฟฟิศ (Work on Site)').should('exist')
  })
})

   it('TC-JN-01-17-01', () => {
     cy.contains('a','หางาน').click()
     cy.contains('a', 'ดูรายละเอียด').first().click()
   })
   it('TC-JN-01-17-02', () => {
     cy.contains('a','หางาน').click()
     cy.contains('a', 'ดูรายละเอียด').first().click()
     cy.get('#btn-apply').click()
     cy.get('.swal2-confirm').click()
   })

   it('TC-JN-01-17-01', () => {
    cy.get('i.fa-regular.fa-user').closest('div[role="button"]').click()
    cy.contains('ติดตามการสมัครงาน').should('be.visible').click()
   })
    it('TC-JN-01-18-01 --> TC-JN-01-18-04', () => {
    cy.get('i.fa-regular.fa-user').closest('div[role="button"]').click()
    cy.contains('ติดตามการสมัครงาน').should('be.visible').click()
    cy.get('select[id="perPage"]').select('10')
    cy.contains('a','ถัดไป').click()
    cy.contains('a','ก่อนหน้า').click()
   })

    it('TC-JN-01-19-01', () => {
    cy.get('i.fa-regular.fa-user').closest('div[role="button"]').click()
    cy.contains('ติดตามการสมัครงาน').should('be.visible').click()
    cy.get('a[title="ดูประกาศงาน"]').first().click()
   })

    it('TC-JN-01-19-02', () => {
    cy.get('i.fa-regular.fa-user').closest('div[role="button"]').click()
    cy.contains('ติดตามการสมัครงาน').should('be.visible').click()
    cy.get('a[title="ดูประกาศงาน"]').first().click()
    cy.contains('a','เปิดแผนที่ในแท็บใหม่').click()
    
   })
    it('TC-JN-01-19-02', () => {
    cy.get('i.fa-regular.fa-user').closest('div[role="button"]').click()
    cy.contains('ติดตามการสมัครงาน').should('be.visible').click()
    cy.get('a[title="ดูประกาศงาน"]').first().click()
    cy.get('#btn-apply').click()
    cy.get('.swal2-confirm').click()
    
   })


  
})