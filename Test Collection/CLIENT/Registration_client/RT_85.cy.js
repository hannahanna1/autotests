import Register from "../../PageObjects/Register_client.js";
describe("test_85", () => {
  it("Registration with correct data", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/register");
    // open register page

    // input First Name
    const ln = new Register();
    ln.setFirstName();

    // input Second Name
    ln.setLastName();

    //input Email
    ln.setEmail();
    cy.get(".ant-form-item-children-icon")
      .eq(0)
      .should("have.css", "color", "rgb(82, 196, 26)");

    //input Password
    ln.setPassword();
    cy.get(".ant-form-item-children-icon")
      .eq(1)
      .should("have.css", "color", "rgb(82, 196, 26)");

    // confirm password
    ln.setConfirmPassword();
    cy.get(".ant-form-item-children-icon")
      .eq(2)
      .should("have.css", "color", "rgb(82, 196, 26)");

    // select a client type
    cy.get('[class="ant-form ant-form-horizontal register_form__GKcr2"]')
      .find('[class="ant-radio-button-wrapper"]')
      .then((radioButtons) => {
        cy.wrap(radioButtons).eq(1).click();
      });

    // mark the chekbox
    cy.get('label[class="ant-checkbox-wrapper"]').contains(
      "I agree to the Terms of Service & Privacy Policy"
    );
    cy.get('[type="checkbox"]').click();

    // click button
    cy.get('button[type="submit"]').click();

    cy.get(".email_verification_email_verification_wrapper__1RXDw")
      .should("be.visible")
      .contains("Your email address needs to be confirmed before proceeding.");
  });
});
