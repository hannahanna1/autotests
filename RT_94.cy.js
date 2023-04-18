describe("test_94", () => {
  it("Sign in with valid data", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/login");
    // open signup page
    cy.get('[placeholder="Enter Email"]')
      .click()
      .type("hanna+client.client01@repositax.com");
    cy.get('[placeholder="Enter password"]').click().type("1password!");
    cy.get('button[type="submit"]').click();
    cy.get('[class="ant-row ant-row-middle"]').should("be.visible");
    //.should("have.value", "div[dashboard_navigation_link__3zq_B]");
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
