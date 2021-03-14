describe('Uploading a tennis score file', () => {
    it('Uploads the file and reads the scores to the screen', () => {
        cy.visit('http://localhost:3000');

        //Get file fixture and attach to button
        // eslint-disable-next-line jest/valid-expect-in-promise
        cy.fixture('full_tournament.txt').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
            });
        });

        //Check the match lists length is 2
        cy.get('[data-testid=matchList] > div').should('have.length', 2);

        //Check the results within the matches
        cy.get('[data-testid=matchList').within(() => {
            //NOTE:: Making an assumption that the display will be correct in both cases if its correct in one, as the component tests should be checking the rest.
            cy.get('table').eq(0).within(() => {
                //Check that table contains the two player strings
                cy.get('tr').eq(0).within(() => {
                    cy.get('td').eq(0).should('contain.text', 'Person A');
                    cy.get('td').eq(1).should('contain.text', 6);
                    cy.get('td').eq(2).should('contain.text', 6);
                    cy.get('td').eq(3).should('contain.text', 2);
                });
                cy.get('tr').eq(1).within(() => {
                    cy.get('td').eq(0).should('contain.text', 'Person B');
                    cy.get('td').eq(1).should('contain.text', 0);
                    cy.get('td').eq(2).should('contain.text', 0);
                    cy.get('td').eq(3).should('contain.text', 0);
                });

            });
        })
    });
});

export { }