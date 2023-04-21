describe("test_553", () => {
  it("Sign in with valid data", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/login");
    // open signup page
    cy.get('[placeholder="Enter Email"]').type(
      "hanna+client.client01@repositax.com"
    );
    cy.get('[placeholder="Enter password"]').type("1password!");
    cy.get('button[type="submit"]').click();
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.get('div[class="dashboard_header_header__1t7Rh"]').should(
      "be.visible",
      "have.text",
      "Dashboard",
      "Entities",
      "Calendar",
      "Resources"
    );
  });
});
