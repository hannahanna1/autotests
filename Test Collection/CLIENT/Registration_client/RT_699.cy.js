describe("test_699", () => {
  it("Check Already have an account? Log In Now button (Client)", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/register");
    // open register page

    //click the button
    cy.get('a[href="/login"]').click();
    cy.get("form.ant-form.ant-form-horizontal.login_form__2M3Fd")
      .children()
      .eq(0)
      .should("have.text", "Sign In");
  });
});
