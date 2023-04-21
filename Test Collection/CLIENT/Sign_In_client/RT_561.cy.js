import Login from "../PageObjects/LoginPage_client.js";
describe("test_561", () => {
  it("Sign in with empty password field", () => {
    cy.viewport("macbook-15");
    // open signup page
    cy.visit("/");

    // input login
    const ln = new Login();
    ln.setEmail("hanna+client.client01@repositax.com");

    // click Login button
    cy.get('button[type="submit"]').click();

    // check password field

    cy.get('[class="ant-form-item-explain-error"]')
      .contains("Password is required")
      .should("have.css", "color", "rgb(255, 77, 79)")
      .should("be.visible");
  });
});
