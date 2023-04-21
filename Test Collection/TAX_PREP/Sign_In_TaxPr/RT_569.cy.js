import Login from "../PageObjects/LoginPage_TP";
describe("test_569", () => {
  it("Reset the password with unregistered email", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    // open signup page

    // click forgot password
    cy.get('a[href="/reset-password"]').click();
    // reset password page is opened
    cy.get('[class="css-1tvr07o"]')
      .should("be.visible")
      .should("have.text", "Reset Password");
    //input unregistered email
    const ln = new Login();
    ln.setunregEmail("hanna+taxp.qwert1@repositax.com");

    cy.get('button[type="submit"]').click();

    cy.get('span[class="ant-form-item-children-icon"]')
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 77, 79)");
    cy.get('div[class="ant-form-item-explain-error"]')
      .should("be.visible")
      .should(
        "have.text",
        "We couldn't find an account associated with that email. Please try a different e-mail address."
      )
      .should("have.css", "color", "rgb(255, 77, 79)");
  });
});
