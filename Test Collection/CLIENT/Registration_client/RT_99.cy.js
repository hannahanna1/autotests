import Register from "../../PageObjects/Register_client.js";
describe("test_99", () => {
  it("Required field 'Password' is empty", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/register");
    // open register page

    // input First Name
    const ln = new Register();
    ln.setFirstName();

    //input Last Name
    ln.setLastName();

    //input email
    ln.setEmail();

    // confirm password
    ln.setConfirmPassword();
    cy.get(".ant-form-item-children-icon")
      .eq(0)
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
    cy.get('button[type="submit"]').should("be.disabled");
    cy.get(".ant-form-item-explain-error")
      .should("be.visible")
      .and("have.text", "The two passwords that you entered do not match!")
      .and("have.css", "color", "rgb(255, 77, 79)");
  });
});
