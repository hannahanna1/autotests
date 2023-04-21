class Register {
  setEmail(email) {
    cy.get("#email").type("hanna+taxp.taxp0@repositax.com");
  }
  setFirstName(firstname) {
    cy.get("#firstName").type("Michelle");
  }
  setLastName(lastname) {
    cy.get("#lastName").type("Gregory");
  }
  setPassword(password) {
    cy.get('[placeholder="Password"][type="password"]').type("1password!");
  }
  setConfirmPassword(confirmpassword) {
    cy.get('[id="confirmPassword"]').type("1password!");
  }
}

export default Register;
