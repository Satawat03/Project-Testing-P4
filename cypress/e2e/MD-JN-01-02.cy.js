describe('การจัดการเรซูเม่(ผู้หางาน)', () => {

  beforeEach(() => {
    cy.intercept({method: 'GET',url: /\.(png|jpg|jpeg|gif|svg|webp)$/i,},{ statusCode: 204 })
    cy.viewport(1280, 800)
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ').click()

    cy.get('#email').type('65160356@go.buu.ac.th')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    cy.get('i.fa-regular.fa-user').closest('div[role="button"]').click()
    cy.contains('โปรไฟล์').should('be.visible').click()
  })

  it('TC-JN-01-04-01', () => {})

  it('TC-JN-01-04-02', () => {
    cy.get('select[name="up_prefix"]').select('เด็กชาย')
    cy.contains('button', 'บันทึกข้อมูล').click()
  })

  it('TC-JN-01-05-01', () => {
    cy.get('.delete-resume-btn').click()
    cy.get('.swal2-confirm').should('be.visible').click()
  })

  it('TC-JN-01-05-02', () => {
    cy.contains('a', 'สร้างเรซูเม่').click()
    cy.contains('a', 'ยกเลิก').click()
  })

  it('TC-JN-01-05-03', () => {
    cy.contains('a', 'สร้างเรซูเม่').click()
    cy.contains('button', 'บันทึกเรซูเม่').click()
    cy.get('#validation-errors').should('be.visible')
  })

  it('TC-JN-01-05-04 --> TC-JN-01-05-08', () => {
    cy.contains('a', 'สร้างเรซูเม่').click()
    cy.get('input[name="phone"]').type('กขคabc12345678900').should(($input) => {
    const value = $input.val()
    expect(value).to.match(/^[0-9]*$/)
    expect(value.length).to.be.at.most(10)
  })
    cy.get('button[data-tab="experience"]').click()
    cy.contains('button', 'เพิ่ม').first().click()
    cy.get('input[name="work_experiences[0][start_date]"]').type('2024-09-14')
    cy.get('input[name="work_experiences[0][end_date]"]').type('2024-09-13')
    cy.get('button[data-tab="education"]').click()
    cy.get('button#add-education').should('be.visible').and('not.be.disabled').click()
    cy.get('select[name="educations[0][start_year]"]').select('2565')
    cy.get('select[name="educations[0][end_year]"]').select('2569')


  })

  it('TC-JN-01-05-09', () => {
    cy.contains('a', 'สร้างเรซูเม่').click()
    //กรอกข้อมูลส่วนตัว
    cy.get('input[name="first_name"]').should('be.visible').type('ศตวรรษ')
    cy.get('input[name="middle_name"]').should('be.visible').type('ทิม')
    cy.get('input[name="last_name"]').should('be.visible').type('ไตรธิเลน')
    cy.get('input[name="birth_date"]').should('be.visible').type('2003-09-14')
    cy.get('select[name="gender"]').select('ชาย')
    cy.get('input[type="email"][name="email"][placeholder="อีเมล"]').should('be.visible').clear().type('65160356@go.buu.ac.th')
    cy.get('input[name="phone"]').should('be.visible').type('0987654321')
    cy.get('textarea[name="summary"]').should('be.visible').type('ทดสอบระบบ')

    //กรอกข้อมูลประสบการณ์ทำงาน
    cy.get('button[data-tab="experience"]').click()
    cy.contains('button', 'เพิ่ม').first().click()
    cy.get('input[name="work_experiences[0][job_title]"]').should('be.visible').type('Software Engineer')
    cy.get('input[name="work_experiences[0][company_name]"]').should('be.visible').type('Burapha University')
    cy.get('input[name="work_experiences[0][start_date]"]').should('be.visible').type('2022-05-14')
    cy.get('input[name="work_experiences[0][end_date]"]').should('be.visible').type('2022-05-15')
    cy.get('textarea[name="work_experiences[0][description]"]').type('พัฒนาระบบขององค์กร')
    
    //กรอกข้อมูลการสมัคร
    cy.get('button[data-tab="application"]').click()
    cy.get('input[name="available_start_date"]').should('be.visible').type('2026-12-01')
    cy.get('select[name="preferred_location"]').select('ชลบุรี')
    cy.get('select[name="salary_min"]').select('20000')
    cy.get('select[name="salary_min"]').select('20000')
    cy.get('select[name="salary_max"]').select('35000')
    cy.get('#submit-btn').should('be.visible').click()   
    cy.get('.swal2-confirm').click()
  })

    it('TC-JN-01-05-10', () => {
    cy.contains('a', 'แก้ไข').click()
    cy.get('input[name="phone"]').should('be.visible').clear().type('0980636607')
    cy.get('#submit-btn').click()
    cy.get('.swal2-confirm').click()
  })

    








  


})