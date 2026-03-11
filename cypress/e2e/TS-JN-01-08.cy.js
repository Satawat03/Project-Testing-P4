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
    
    cy.contains('a','ประกาศงาน').click()
    cy.contains('a','เพิ่มประกาศงาน').click()

    cy.get('input[name="rc_title"]').clear().type('Senior Frontend Developer')
    cy.get('textarea[name="rc_description"]').clear().type('รับสมัครพนักงาน')
    cy.get('textarea[name="rc_requirements"]').clear().type('จบการศึกษาปริญาตรี')
    cy.get('input[name="rc_salary"]').clear().type('28000')
    cy.get('select[name="rc_work_mode"]').select('Onsite')
    cy.get('select[name="rc_type"]').select('Full-time')
    cy.get('input[name="rc_location_text"]').clear().type('ชลบุรี')
    cy.get('input[name="rc_location_link"]').clear().type('https://www.google.com/maps')
    cy.get('input[name="rc_application_url"]').clear().type('https://www.youtube.com/')
    cy.get('input[name="rc_posted_at"]').should('be.visible').type('2026-03-05T22:30')
    cy.get('input[name="rc_expire_at"]').should('be.visible').type('2030-03-05')
    cy.get('select[name="skills[0][skill_group_id]"]').select('handicrafts')
    cy.get('select[name="skills[0][skill_id]"]').select('flute sizes')
    cy.get('select[name="skills[0][proficiency_level]"]').select('Expert')
    cy.get('input[name="languages[0][language]"]').clear().type('ไทย')
    cy.get('select[name="languages[0][proficiency]"]').select('เจ้าของภาษา')
    cy.contains('button', 'บันทึก').click()
    cy.get('tbody tr').its('length').should('be.gte', 1)

    cy.get('button[title="ตั้งเป็นฉบับร่าง"]').first().click()
    cy.get('button[title="เผยแพร่"]').first().click()
    cy.get('a[title="แก้ไข"]').first().click()
    cy.get('button[title="ลบ"]').first().click()
    


  })
})