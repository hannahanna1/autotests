import Register from "../../PageObjects/Register_client.js";
describe("test_97", () => {
  it("Required field 'First Name' is empty", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/register");
    // open register page

    // input Second Name
    const ln = new Register();
    ln.setLastName();

    //input email
    ln.setEmail();

    //input Password
    ln.setPassword();
    cy.get(".ant-form-item-children-icon")
      .eq(0)
      .should("have.css", "color", "rgb(82, 196, 26)");

    // confirm password
    ln.setConfirmPassword();
    cy.get(".ant-form-item-children-icon")
      .eq(1)
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
  });
});
