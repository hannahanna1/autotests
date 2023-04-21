describe("test_81", () => {
  it("Sign in with empty fields", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    // open signup page
    cy.get('button[type="submit"]').click();
    // email field
    cy.get('[class="ant-form-item-explain-error"]')
      .contains("Email is required")
      .should("have.css", "color", "rgb(255, 77, 79)")
      .should("be.visible");
    // password field
    cy.get('[class="ant-form-item-explain-error"]')
      .contains("Password is required")
      .should("have.css", "color", "rgb(255, 77, 79)")
      .should("be.visible");
  });
});
