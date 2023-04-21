import Login from "../PageObjects/LoginPage_TP";
describe("test_83", () => {
  it("Sign in with empty password field", () => {
    cy.viewport("macbook-15");
    // open signup page
    cy.visit("/");

    // input password
    const ln = new Login();
    ln.setEmail("hanna+taxp.1@repositax.com");

    // click Login button
    cy.get('button[type="submit"]').click();

    // check password field

    cy.get('div[class="ant-form-item-explain ant-form-item-explain-connected"]')
      .contains("Password is required")
      .should("have.css", "color", "rgb(255, 77, 79)")
      .should("be.visible");
  });
});
