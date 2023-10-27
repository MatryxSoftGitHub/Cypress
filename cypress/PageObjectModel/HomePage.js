class homePage
{
    chanelName = "span>#channel-handle"
    subscribe = 
    "#subscribe-button > .style-scope > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill"
    sighIn = "#button > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill"
    subscribed = "ytd-subscribe-button-renderer[class='style-scope ytd-c4-tabbed-header-renderer'] yt-animated-action[class='animated-action__container'] div[class='yt-spec-touch-feedback-shape__fill']"
    subscribedIcon="ytd-menu-service-item-renderer:nth-child(5)"
    //tabs = ".tp-yt-paper-tab"

    tabs = ".yt-tab-group-shape-wiz__tabs"
    playingVideoName = "#above-the-fold > :nth-child(1) > h1.style-scope > .style-scope"

 /*Function: subscribeChannel()
 Description: This function will click subscribe button.*/

    subscribeChannel(){
        cy.wait(5000);
        //Checking subscribe element is visible or not.
        cy.get(this.subscribe).then(($el) => {
            
            if ($el.length) {
                cy.get(this.subscribe).click();
                cy.get(this.sighIn).click();
                //Checking if the channel is subscribed or not.
                cy.get(this.subscribed).then(($ele) => {
                    if ($ele.length) {
                        cy.log('Channel is subscribed');
                    
                    } else {
                        cy.log('Failed to subscribe channel');
                    }
                    });
            
            } else {
                cy.log('Channel is subscribed');
            }
            });
    }

/*Function: subscribeChannel()
 Description: This function will click subscribe button.*/

 unsubscribeChannel(){
    //Checking subscribe element is visible or not.
    cy.get(this.subscribed).then(($el) => {
        
        if ($el.length) {
            cy.get(this.subscribed).click();
            cy.wait(3000);
            cy.get(this.subscribedIcon).click();
            cy.get("button[aria-label='Unsubscribe']").click()
            //Checking if the channes is subscribed or not.
            cy.get(this.subscribe).then(($ele) => {
                if ($ele.length) {
                    cy.log('Channel is unsubscribed');
                
                } else {
                    cy.log('Failed to unsubscribe channel');
                }
                });
        
        } else {
            cy.log('Channel is unsubscribed');
        }
        });
}



/*Function: clickTabs()
 Description: This function will click on tab.*/

    clickTabs(tabNames,urlWithVideo){
        cy.wait(5000);
        cy.get(this.tabs).contains(tabNames).click();
        // cy.get(this.tabs).each(($el, index)=>{
        //     const eletext = $el.text();
        //     cy.log(eletext.toLocaleLowerCase());
        //     cy.log(tabNames.toLocaleLowerCase());
            
        //     if (eletext.toLocaleLowerCase() == tabNames.toLocaleLowerCase()){
        //         cy.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
        //         cy.wrap($el).click();
        //     }
        // })
        cy.wait(5000);
        cy.url().should('include',urlWithVideo);
    }

/*Function: selectVideo()
 Description: This function will click on tab.*/

 selectVideo(videoName){
    cy.clickLink(videoName);
    cy.wait(10000)
    cy.get(this.playingVideoName).should('have.text',videoName);
 }
}
export default homePage;    
