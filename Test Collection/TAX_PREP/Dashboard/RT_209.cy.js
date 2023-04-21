describe("test_209", () => {
  it.only("Check the ⓘ near the Messages menu icon", () => {
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
    cy.get('svg[aria-description="**Messages**"]')
      .as("svg_M")
      .eq(1)
      .click({ force: true });
    cy.wait(2000);
    cy.get('[class="chmln-title chmln-editable-highlight"]').should(
      "have.css",
      "color",
      "rgb(163, 122, 228)"
    );
    cy.get('[class="chmln-inner chmln-animated chmln-fade_in"]').contains(
      "You may safely send and receive messages related to your tax preparation."
    );
  });
});
