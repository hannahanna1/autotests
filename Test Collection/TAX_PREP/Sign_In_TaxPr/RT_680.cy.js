import Login from "../PageObjects/LoginPage_TP.js";
describe("test_680", () => {
  it("Reset the password with empty email field", () => {
    cy.viewport("macbook-15");
    // open signup page
    cy.visit("/");

    // click forgot password
    cy.get('a[href="/reset-password"]').click();

    // reset password page is opened
    cy.get('[class="css-1tvr07o"]')
      .should("be.visible")
      .should("have.text", "Reset Password");

    //leave email field empty
    cy.get('button[type="submit"]').click();

    //check the red sign (cross) on the right of the field
    cy.get('[class="ant-form-item-children-icon"]')
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 77, 79)");
    //check the info message
    cy.get('div[class="ant-form-item-explain-error"]')
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 77, 79)");
  });
});
