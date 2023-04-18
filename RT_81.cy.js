describe("test_81", () => {
  it("Sign in with empty fields", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/login");
    // open signup page
    cy.get('button[type="submit"]').click();
    cy.get('[class="ant-form-item-explain-error"]')
      .contains("Email is required")
      .should("have.css", "color", "rgb(255, 77, 79)")
      .should("be.visible");
    //.should("have.value", "div[dashboard_navigation_link__3zq_B]");
  });
});
