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
    cy.get('#email').type('65160356@go.buu.ac.th')
    cy.get('#password').type('Fill#577242')
    cy.contains('button', 'เข้าสู่ระบบ').click()
    
    // เปิด user dropdown
    cy.get('i.fa-regular.fa-user').closest('div[role="button"]').click()

    // คลิกเมนูโปรไฟล์
    cy.contains('โปรไฟล์').should('be.visible').click()

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
    cy.contains('button', 'ถัดไป').click()

    //กรอกข้อมูลประสบการณ์ทำงาน
    cy.contains('button', 'เพิ่มประสบการณ์').click()
    cy.contains('button', 'ลบประสบการณ์นี้').click()
    cy.on('window:confirm', () => true)
    cy.contains('button', 'เพิ่มประสบการณ์').click()
    cy.get('input[name="work_experiences[1][job_title]"]').should('be.visible').type('Software Engineer')
    cy.get('input[name="work_experiences[1][company_name]"]').should('be.visible').type('Burapha University')
    cy.get('input[name="work_experiences[1][start_date]"]').should('be.visible').type('2022-05-14')
    cy.get('input[name="work_experiences[1][is_current]"]').check()
    cy.get('textarea[name="work_experiences[1][description]"]').type('พัฒนาระบบขององค์กร')
    cy.contains('button', 'ถัดไป').click()

    //กรอกข้อมูลทักษะความสามารถ
    cy.contains('button', 'เพิ่มทักษะ').click()
    cy.contains('button', 'ลบ').click({ force: true })
    cy.on('window:confirm', () => true)
    cy.contains('button', 'เพิ่มทักษะ').click()
    cy.get('select[name="skills[0][skill_group_id]"]').find('option').eq(1).then(option => {
    cy.get('select[name="skills[0][skill_group_id]"]').select(option.val())})
    cy.get('select[name="skills[0][skill_id]"]').find('option').eq(1).then(option => {
    cy.get('select[name="skills[0][skill_id]"]').select(option.val())})
    cy.get('select[name="skills[0][proficiency_level]"]').select('ปานกลาง')
    cy.contains('button', 'ถัดไป').click()
    
    //กรอกข้อมูลการศึกษา
    cy.contains('button', 'เพิ่มการศึกษา').click()
    cy.contains('button', 'ลบการศึกษานี้').click()
    cy.on('window:confirm', () => true)
    cy.contains('button', 'เพิ่มการศึกษา').click()
    cy.get('input[name="educations[1][education_level]"]').should('be.visible').type('ปริญญาตรี')
    cy.get('input[name="educations[1][field_of_study]"]').should('be.visible').type('วิศวกรรมคอมพิวเตอร์')
    cy.get('input[name="educations[1][institution]"]').should('be.visible').type('มหาวิทยาลัยบูรพา')
    cy.get('input[name="educations[1][start_year]"]').should('be.visible').type('2565')
    cy.get('input[name="educations[1][end_year]"]').should('be.visible').type('2569')

    cy.contains('button', 'เพิ่มใบรับรอง').click()
    cy.get('button.remove.ml-3').click()
    cy.on('window:confirm', () => true)
    cy.contains('button', 'เพิ่มใบรับรอง').click()
    cy.get('input[name="certificates[1][name]"]').should('be.visible').type('AWS')
    cy.get('input[name="certificates[1][issued_by]"]').should('be.visible').type('Amazom Web')
    cy.get('input[name="certificates[1][issued_year]"]').should('be.visible').type('2568')

    cy.contains('button', 'เพิ่มภาษา').click()
    cy.get('button.remove.w-full').last().click()
    cy.on('window:confirm', () => true)
    cy.contains('button', 'เพิ่มภาษา').click()
    cy.get('input[name="languages[1][language]"]').should('be.visible').type('ภาษาอังกฤษ')
    cy.get('select[name="languages[1][level]"]').select('สนทนาได้')
    cy.contains('button', 'ถัดไป').click()

    cy.get('input[name="available_start_date"]').should('be.visible').type('2026-03-01')
    cy.get('input[name="preferred_location"]').should('be.visible').type('ชลบุรี')
    cy.get('input[name="expected_salary"]').should('be.visible').type('25000')
    cy.get('#submit-btn').should('be.visible').click()

  })
})