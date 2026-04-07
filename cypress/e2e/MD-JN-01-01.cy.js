describe('จัดการทักษะ(ผู้ดูแลระบบ)', () => {
  beforeEach(() => {
    cy.intercept({method: 'GET',url: /\.(png|jpg|jpeg|gif|svg|webp)$/i,},{ statusCode: 204 })
    cy.viewport(1280, 800)
    cy.visit('http://prepro2.informatics.buu.ac.th:8091/')

    cy.contains('a', 'เข้าสู่ระบบ').click()

    cy.get('#email').type('admin@jobnexis.com')
    cy.get('#password').type('zxcvbnM.1')
    cy.contains('button', 'เข้าสู่ระบบ').click()
  })

  it('TC-JN-01-01-01', () => {
    cy.contains('a','คลังทักษะ ESCO').should('be.visible').click()
    cy.get('tr.border-b.hover\\:bg-gray-50').should('have.length.greaterThan', 0)
  })
  it('TC-JN-01-01-02, TC-JN-01-01-03', () => {
    cy.contains('a','คลังทักษะ ESCO').click()
    cy.contains('a','ถัดไป').should('be.visible').click()
    cy.contains('a','ก่อนหน้า').should('be.visible').click()
  })

  it('TC-JN-01-01-04', () => {
    cy.contains('a','คลังทักษะ ESCO').click()
    cy.get('#perPage').should('be.visible').select('25').should('have.value', '25')
  })

  it('TC-JN-01-01-05 ,TC-JN-01-01-06', () => {
    cy.contains('a','คลังทักษะ ESCO').click()
    // 1. เก็บข้อมูลก่อน sort
    let beforeSort = []
    cy.get('table tbody tr td:first-child').each(($el) => {
      beforeSort.push($el.text().trim())
    }).then(() => {
      // 2. กด sort
      cy.get('thead').contains('a', 'ทักษะ').click()
      // 3. เก็บข้อมูลหลัง sort
      let afterSort = []
      cy.get('table tbody tr td:first-child').each(($el) => {
        afterSort.push($el.text().trim())
      }).then(() => {
        // 4. เปรียบเทียบ
        expect(afterSort).to.not.deep.equal(beforeSort)
        cy.get('thead').contains('a', 'ทักษะ').click()
      })
      let afterSort2 = []
      cy.get('table tbody tr td:first-child').each(($el) => {
        afterSort2.push($el.text().trim())
      }).then(() => {
        // 5. เปรียบเทียบครั้งที่2
        expect(afterSort).to.not.deep.equal(afterSort2)

      })
    })
  })

    it('TC-JN-01-01-07, TC-JN-01-01-08', () => {
    cy.contains('a','คลังทักษะ ESCO').click()
    // 1. เก็บข้อมูลก่อน sort
    let beforeSort = []
    cy.get('table tbody tr td:first-child').each(($el) => {
      beforeSort.push($el.text().trim())
    }).then(() => {
      // 2. กด sort
      cy.contains('a','กลุ่มทักษะ').click()
      // 3. เก็บข้อมูลหลัง sort
      let afterSort = []
      cy.get('table tbody tr td:first-child').each(($el) => {
        afterSort.push($el.text().trim())
      }).then(() => {
        // 4. เปรียบเทียบ
        expect(afterSort).to.not.deep.equal(beforeSort)
        cy.contains('a','กลุ่มทักษะ').click()
      })
      let afterSort2 = []
      cy.get('table tbody tr td:first-child').each(($el) => {
        afterSort2.push($el.text().trim())
      }).then(() => {
        // 5. เปรียบเทียบครั้งที่2
        expect(afterSort).to.not.deep.equal(afterSort2)

      })

    })
  })

  it('TC-JN-01-02-01 --> TC-JN-01-02-06 ', () => {
  cy.contains('a','คลังทักษะ ESCO').click()
  cy.get('input[name="search"]').clear().type('ABAP')
  cy.contains('button','ค้นหา').click()
  cy.contains('td','ABAP').should('exist')
  cy.contains('a','ล้าง').click()

  cy.get('input[name="search"]').clear().type('@')
  cy.contains('button','ค้นหา').click()
  cy.get('tbody tr').should('have.length', 0)

  cy.get('input[name="search"]').clear().type('89898')
  cy.contains('button','ค้นหา').click()
  cy.get('tbody tr').should('have.length', 0)

 cy.get('input[name="search"]').clear().type('Software Engineer')
 cy.contains('button','ค้นหา').click()
 cy.get('body').then(($body) => {
   if ($body.find('tbody tr').length > 0) {
     cy.log('พบข้อมูล Software Engineer')
     cy.get('tbody tr').each(($tr) => {
      cy.wrap($tr).should('contain.text', 'Software Engineer')
     })
   } else {
     cy.log('ไม่พบข้อมูล Software Engineer (ถูกต้อง)')

   }
  })

 cy.get('input[name="search"]').clear().type('วิศวกรรมซอฟต์แวร์')
 cy.contains('button','ค้นหา').click()
 cy.get('body').then(($body) => {
   if ($body.find('tbody tr').length > 0) {
     cy.log('พบข้อมูล วิศวกรรมซอฟต์แวร์')
     cy.get('tbody tr').each(($tr) => {
      cy.wrap($tr).should('contain.text', 'วิศวกรรมซอฟต์แวร์')
     })
   } else {
     cy.log('ไม่พบข้อมูล วิศวกรรมซอฟต์แวร์ (ถูกต้อง)')

   }
  })

  })

  it('TC-JN-01-03-01', () => {
    cy.contains('a','คลังทักษะ ESCO').click()
    cy.get('a[href*="data.europa.eu/esco/skill"]').first().should('have.attr', 'href').and('include', 'data.europa.eu/esco/skill')
  })
  it('TC-JN-01-03-02', () => {

  cy.contains('a','คลังทักษะ ESCO').click()

  // ดึงชื่อหมวดจาก title
  cy.get('a[title*="กรองเฉพาะหมวดหมู่"]')
    .first()
    .then(($a) => {

      const title = $a.attr('title') // "กรองเฉพาะหมวดหมู่ medical diagnostic and treatment technology"
      const category = title.replace('กรองเฉพาะหมวดหมู่ ', '').trim()

      // กด filter
      cy.wrap($a).click()

      // ตรวจทุกแถว
      cy.get('tbody tr').each(($tr) => {

        cy.wrap($tr)
          .find('td')
          .eq(1) // column หมวดหมู่
          .find('a')
          .should('contain.text', category)

      })

    })
})

  


})