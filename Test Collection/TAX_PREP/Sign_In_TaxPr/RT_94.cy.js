import Login from "../PageObjects/LoginPage_TP";
describe("test_94", () => {
  it("Sign in with valid data", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/login/");
    // open signup page
    const ln = new Login();
    ln.setEmail("hanna+taxp.1@repositax.com");
    ln.setPassword("1password!");
    cy.get('button[type="submit"]').click();
    cy.get(".dashboard_header_header__1t7Rh div").should(
      "be.visible",
      "have.text",
      "Dashboard",
      "Clients",
      "Firm Management",
      "Resources"
    );
  });
});
