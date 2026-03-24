describe('การจัดการประกาศงาน(ผู้ประกอบการ)', () => {

  beforeEach(() => {
    cy.intercept({method: 'GET',url: /\.(png|jpg|jpeg|gif|svg|webp)$/i,},{ statusCode: 204 })
    cy.viewport(1280, 800)
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ').click()

    cy.get('#email').type('filllovezaza@go.buu.ac.th')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    cy.contains('a','ประกาศงาน').click()
  })

  it('TC-JN-01-06-01', () => {})

  it('TC-JN-01-06-02 --> TC-JN-01-06-04', () => {
    cy.get('select[id="perPage"]').select('10')
    cy.contains('a','ถัดไป').click()
    cy.contains('a','ก่อนหน้า').click()
    
  })

    it('TC-JN-01-07-01 --> TC-JN-01-07-09  ', () => {
  cy.get('input[name="q"]').clear().type('ทดสอบการเพิ่มการประกาศงาน')
  cy.contains('button','ค้นหา').click()
  cy.contains('td','ทดสอบการเพิ่มการประกาศงาน').should('exist')

  cy.get('input[name="q"]').clear().type('@')
  cy.contains('button','ค้นหา').click()
  cy.get('body').then($body => {
  if ($body.find('td:contains("@")').length > 0) {
    cy.log('พบข้อความ "@"')
  } else {
    cy.log('ไม่พบข้อความ "@"')
  }
  })

  cy.get('input[name="q"]').clear().type('1234')
  cy.contains('button','ค้นหา').click()
  cy.get('body').then($body => {
  if ($body.find('td:contains("1234")').length > 0) {
    cy.log('พบข้อความ "1234"')
  } else {
    cy.log('ไม่พบข้อความ "1234"')
  }
  })
  cy.get('input[name="q"]').clear().type('Developer')
  cy.contains('button','ค้นหา').click()
  cy.get('body').then($body => {
  if ($body.find('td:contains("Developer")').length > 0) {
    cy.log('พบข้อความ "Developer"')
  } else {
    cy.log('ไม่พบข้อความ "Developer"')
  }
  })
  cy.get('input[name="q"]').clear().type('นักพัฒนาเว็บไซต์')
  cy.contains('button','ค้นหา').click()
  cy.get('body').then($body => {
  if ($body.find('td:contains("นักพัฒนาเว็บไซต์")').length > 0) {
    cy.log('พบข้อความ "นักพัฒนาเว็บไซต์"')
  } else {
    cy.log('ไม่พบข้อความ "นักพัฒนาเว็บไซต์"')
  }
  })
  cy.contains('a','ล้าง').click()
  cy.get('select[name="status"]').select('เปิดรับ')
  cy.contains('button','ค้นหา').click()
  cy.get('table tbody tr').should('have.length.at.least', 1)

  cy.contains('a','ล้าง').click()
  cy.get('select[name="type"]').select('เต็มเวลา (Full-time)')
  cy.contains('button','ค้นหา').click()
  cy.get('table tbody tr').should('have.length.at.least', 1)

  cy.contains('a','ล้าง').click()
  cy.get('select[name="work_mode"]').select('เข้าออฟฟิศ (Work on Site)')
  cy.contains('button','ค้นหา').click()
  cy.get('table tbody tr').should('have.length.at.least', 1)

  })

  it('TC-JN-01-08-01', () => {
    cy.contains('a','เพิ่มประกาศงาน').click()
    cy.get('input[name="rc_title"]').type('ทดสอบการเพิ่มการประกาศงาน')
    cy.get('textarea[name="rc_description"]').type('ไม่ระบุรายละเอียดงาน')
    cy.get('select[name="rc_work_mode"]').select('ทำที่บ้าน (Work from Home)')
    cy.get('select[name="rc_type"]').select('เต็มเวลา (Full-time)')
    cy.get('input[id="salary_negotiable"]').click()
    cy.get('select[name="rc_gender"]').select('ไม่จำกัดเพศ')
    cy.get('select[name="rc_education_level"]').select('ไม่จำกัดวุฒิ')
    cy.get('select[name="rc_experience_level"]').select('3-5 ปี')
    cy.get('textarea[name="rc_requirements"]').type('สามารถพูดอินเดียได้')
    cy.get('input[id="expire_no_limit"]').click()
    cy.get('#btn-submit').click()
    cy.get('.swal2-confirm').click()
  })

  it('TC-JN-01-08-02, TC-JN-01-08-03', () => {
    cy.get('button[title="ปิดรับ"]').first().click()
    cy.get('button[title="เปิดรับ"]').first().click()
  })

  it('TC-JN-01-08-04', () => {
    cy.get('a[title="แก้ไข"]').first().click()
    cy.get('input[name="rc_title"]').clear().type('ทดสอบการแก้ไขการประกาศงาน')
    cy.get('#btn-submit').click()
    cy.get('.swal2-confirm').click()
  })

  it('TC-JN-01-08-05', () => {
    cy.get('button[title="ลบ"]').first().click()
    cy.get('.swal2-confirm').click()
  })

    it('TC-JN-01-08-06 --> TC-JN-01-08-08', () => {
    cy.get('button[title="ลิ้งก์และ QR Code"]').first().click()
    cy.get('#swal-job-url').should('not.have.value', '')
    cy.get('#swal-copy-btn').click()
    cy.get('#swal-dl-btn').click()

  })







  


})