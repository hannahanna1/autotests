import Register from "../../PageObjects/Register_client.js";
describe("test_559", () => {
  it("Registration with different passwords", () => {
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

    //input first password
    ln.setPassword();

    // confirmwith another password
    cy.get('[id="confirmPassword"]').type("1passwpass");
    cy.get(".ant-form-item-children-icon")
      .eq(2)
      .should("have.css", "color", "rgb(255, 77, 79)");

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
    cy.get(".ant-form-item-explain-error")
      .should("be.visible")
      .and("have.text", "The two passwords that you entered do not match!")
      .and("have.css", "color", "rgb(255, 77, 79)");
  });
});
