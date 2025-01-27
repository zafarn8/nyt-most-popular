describe('NY Times App', () => {
    it('loads articles on the home page', () => {
      cy.visit('/');
      cy.contains('NY Times Most Popular Articles');
    });
  
    it('navigates to article details', () => {
      cy.visit('/');
      cy.get('li').first().click();
      cy.contains('Read Full Article');
    });
  });  