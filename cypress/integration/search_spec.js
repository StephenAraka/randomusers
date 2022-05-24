describe('search', () => {
  it('user can search', () => {
    // open the app
    cy.visit('http://localhost:3000');

    // select gender
    cy.findByRole('radio', { name: /female/i }).check();

    // select countries
    cy.findByRole('button', { name: /tag/i }).click();
    cy.get('[data-value="Brazil - BR"]').click();
    cy.get('[data-value="Turkey - TR"]').click();
    cy.get('[data-value="France - FR"]').click();

    // close countries dropdown - ESC
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(100);
    cy.get('body').trigger('keyup', { keyCode: 27 });

    // click search button
    cy.findByRole('button', { name: /search/i }).click();
    cy.wait(2000);

    // view more details of a row
    cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root > [data-testid="KeyboardArrowDownIcon"]').click();

    // show / hide columns
    cy.get('[data-testid="MoreVertIcon"]').click();
    cy.findByRole('checkbox', { name: /gender/i }).click();
    cy.findByRole('checkbox', { name: /email/i }).click();
    cy.findByRole('checkbox', { name: /date of birth/i }).click();

    // close columns menu
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(100);
    cy.get('body').trigger('keyup', { keyCode: 27 });

    // check if users = 10
    cy.get('.users__table').find('tr').should('have.length', 10 * 2);

    // scroll to bottom to trigger infinite scrolling
    cy.scrollTo('bottom');

    cy.wait(2000); // wait for request

    // check if users = more 10
    cy.get('.users__table').find('tr').should('have.length', 20 * 2);

    cy.scrollTo('top');

    cy.findByRole('button', { name: /download/i }).click();
  })
})