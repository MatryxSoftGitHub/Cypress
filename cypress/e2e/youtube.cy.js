import homePage from "../PageObjectModel/HomePage";
import videoStreaming from "../PageObjectModel/videoStreamingPage";

describe('youtube spec',()=>{
    let youTubeData;
   before(()=>{
    cy.fixture('youTube').then(  (data)=>{
        youTubeData = data;
    })
    cy.visit('https://www.youtube.com/@matryxsofttech6572');
   })

   after(()=>{
        cy.contains(youTubeData.url).end();

   })

   it('youTubeTest',()=>{
        const hm =new homePage();
        const vs = new videoStreaming();
       // hm.subscribeChannel();
        hm.clickTabs(youTubeData.tabName, 'https://www.youtube.com/@matryxsofttech6572/videos');
        hm.selectVideo(youTubeData.videoName);
        //vs.clickLike();
        vs.clickingOnVideoStreaming();
        cy.go('back')
        //hm.unsubscribeChannel();
        cy.url().should('include','https://www.youtube.com/@matryxsofttech6572/videos');
   })
})