describe('template spec', () => {
let userData;
before(()=>{
  cy.fixture('demoOpenCart').then(  (data)=>{
    userData = data;
  })
})

  it('passes', () => {
      cy.visit(userData.url);
      cy.get("#input-username").type(userData.Uname);
      cy.get("#input-password").type(userData.pass);
      cy.get("button[type='submit']").click();
       
  })
})