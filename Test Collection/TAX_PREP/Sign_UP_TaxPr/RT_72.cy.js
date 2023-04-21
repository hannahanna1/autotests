import Register from "../../PageObjects/Register_TP";
describe("test_72", () => {
  it("Registration with an existing email", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/register");
    // open register page

    //input First name
    const ln = new Register();
    ln.setFirstName();

    //input Last name
    ln.setLastName();

    //input registered email
    cy.get("#email").type("hanna+taxp.1@repositax.com");
    //input password
    ln.setPassword();
    cy.get(".ant-form-item-children-icon")
      .eq(0)
      .should("have.css", "color", "rgb(82, 196, 26)");

    //confirm password
    ln.setConfirmPassword();
    cy.get(".ant-form-item-children-icon")
      .eq(1)
      .should("have.css", "color", "rgb(82, 196, 26)");

    // select a tax preparer type
    cy.get('[class="ant-form ant-form-horizontal register_form__GKcr2"]')
      .find('[class="ant-radio-button-wrapper"]')
      .then((radioButtons) => {
        cy.wrap(radioButtons).eq(0).click();
      });

    // mark the chekbox
    cy.get('label[class="ant-checkbox-wrapper"]').contains(
      "I agree to the Terms of Service & Privacy Policy"
    );
    cy.get('[type="checkbox"]').click();

    // click button
    cy.get('button[type="submit"]').click();

    cy.get('[class="ant-form-item-explain-error"]')
      .should("be.visible")
      .and("have.text", "user with this email address already exists.")
      .and("have.css", "color", "rgb(255, 77, 79)");
  });
});
