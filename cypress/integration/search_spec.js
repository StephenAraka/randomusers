describe('search', () => {
  it('user can search', () => {
    cy.visit('http://localhost:3000');

    cy.findByRole('radio', { name: /female/i }).check();

    cy.findByRole('button', { name: /tag/i }).click()
    cy.get('[data-value="Brazil - BR"]').click()
    cy.get('[data-value="Turkey - TR"]').click()
    cy.get('[data-value="France - FR"]').click()

    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(100);
    cy.get('body').trigger('keyup', { keyCode: 27 });

    cy.findByRole('button', { name: /search/i }).click();

    cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root > [data-testid="KeyboardArrowDownIcon"]').click();

    cy.get('[data-testid="MoreVertIcon"]').click();
    cy.findByRole('checkbox', { name: /gender/i }).click();
    cy.findByRole('checkbox', { name: /email/i }).click();
    cy.findByRole('checkbox', { name: /date of birth/i }).click();

    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(100);
    cy.get('body').trigger('keyup', { keyCode: 27 });

    cy.get('.users__table').find('tr').should('have.length', 10 * 2);

    cy.wait(2000);

    cy.scrollTo('bottom');

    cy.wait(2000);

    cy.get('.users__table').find('tr').should('have.length', 20 * 2);
  })
})