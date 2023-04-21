import Login from "../PageObjects/LoginPage_TP";
describe("test_91", () => {
  it("Reset the password", () => {
    cy.viewport("macbook-15");
    // open signup page
    cy.visit("/");

    // click forgot password
    cy.get('a[href="/reset-password"]').click();

    // reset password page is opened
    cy.get('[class="css-1tvr07o"]')
      .should("be.visible")
      .should("have.text", "Reset Password");

    //input valid email
    const ln = new Login();
    ln.setEmail("hanna+taxp.1@repositax.com");

    //check the green sign on the right of the field
    cy.get('[class="ant-form-item-children-icon"]')
      .should("be.visible")
      .should("have.css", "color", "rgb(82, 196, 26)");

    cy.get('button[type="submit"]').click();

    cy.get('[class="ant-alert ant-alert-success ant-alert-banner"]')
      .should("be.visible")
      .should(
        "have.text",
        "Your request has been sent. It may may take a few minutes. Please check your Junk/Spam folder."
      )
      .should("have.css", "background-color", "rgb(246, 255, 237)");
  });
});
