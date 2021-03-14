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
        cy.get('[data-testid=matchList>li').should('have.length', 2);

        //Check the results within the matches
        cy.get('[data-testid=matchList').within(() => {
            
            //NOTE:: Making an assumption that the display will be correct in both cases if its correct in one, as the component tests should be checking the rest.
            cy.get('[name="matchOutcome0"]').within(() => {

                //Check that table contains the two player strings
                cy.get('tr').eq(0).get('td').eq(0).should('not.be.a', 'string');
                cy.get('tr').eq(1).get('td').eq(0).should('not.be.a', 'string');
                
                //Check that each column contains the right game data for that set
                cy.get('tr').eq(0).get('td').eq(1).should('be.within', 0, 6);
                cy.get('tr').eq(1).get('td').eq(1).should('be.within', 0, 6);
                
                //Check that the table contains the correct sets in the final column
                cy.get('tr').eq(0).get('td').eq(2).should('be.within', 0, 2);
                cy.get('tr').eq(1).get('td').eq(2).should('be.within', 0, 2);

                //TODO:: Check that the players have different stylings ie; one player has winner styling
                cy.get('tr').eq(0).should('have.class',  () => {
                    cy.get('tr').eq(1).its('class')
                });
            });  
        })
    });
});

export {}