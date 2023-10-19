class videoStreaming{

streamingVideo = ".video-stream.html5-main-video"
timedMarkers = ".ytp-timed-markers-container"
liked ="ytd-menu-renderer[class='style-scope ytd-watch-metadata'] div[id='segmented-like-button'] button[aria-pressed='false']"
like ="ytd-menu-renderer[class='style-scope ytd-watch-metadata'] div[id='segmented-like-button'] button[aria-pressed='true']"
replayButton = "button[data-title-no-tooltip='Replay']"

/*Function: clickLike()
 Description: This function will click like button.*/

 clickLike(){
    //Checking like element is visible or not.
    cy.get(this.like).then(($el) => {
        
        if ($el.length) {
            cy.get(this.like).click();

            //Checking if the like button is selected or not.
            cy.get(this.liked).then(($ele) => {
                if ($ele.length) {
                    cy.log('successfully click the like button');
                
                } else {
                    cy.log('Failed to click like button');
                }
                });
        
        } else {
            cy.log('Alredy like button is click.');
            
        }
        });
}


//Function:clickingOnVideoStreaming()
//Discription: This method will click on video streaming line untill video will completed. 

clickingOnVideoStreaming(){
    cy.get(this.streamingVideo).trigger('mouseover');
    cy.wait(5000);
    cy.get(this.timedMarkers).click('center', { force: true });
    cy.wait(5000);
    
    cy.get(this.timedMarkers).click('right', { force: true });
    cy.wait(5000);
    cy.get(this.replayButton).should('be.visible');

}

}
export default videoStreaming;