describe("test_323", () => {
  it.only("Check the ⓘ near the Notififcations menu icon", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/login");
    // open signup page

    cy.get('[placeholder="Enter Email"]')
      .click()
      .type("hanna+taxp.109@repositax.com");
    cy.get('[placeholder="Enter password"]').click().type("1password!");

    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.wait(2000);
    cy.get('svg[aria-description="**Notifications**"]')
      .as("svg_N")
      .click({ force: true });
    cy.wait(2000);
    cy.get('[class="chmln-title chmln-editable-highlight"]').should(
      "have.css",
      "color",
      "rgb(156, 105, 223)"
    );
    cy.get('[id="chmln-step-dialog-63bdb21890d8da10491587f7"]').contains(
      "Get alerts for important updates or any changes to your tax preparation process."
    );
  });
});
