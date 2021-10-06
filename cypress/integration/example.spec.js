
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('Fight Button works', ()=>{
            cy.get('#submit').click();
        });
    });


    describe('HTML elements', ()=>{   
        it('Refresh button should add 1 and reset all others', ()=>{
            cy.get('#refresh').click();
        });
    });
});