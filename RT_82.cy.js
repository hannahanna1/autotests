import Login from "../PageObjects/LoginPage.js";
describe("test_82", () => {
  it("Sign in with empty email field", () => {
    cy.viewport("macbook-15");
    // open signup page
    cy.visit("/");

    // input password
    const ln = new Login();
    ln.setPassword("1password!");

    // click Login button
    cy.get('button[type="submit"]').click();

    // check email field

    cy.get('[class="ant-form-item-explain-error"]')
      .contains("Email is required")
      .should("have.css", "color", "rgb(255, 77, 79)")
      .should("be.visible");
  });
});
