/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds is defined and not empty', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        it('feed has url', () => {
            allFeeds.forEach((thisFeed) => {
                expect(thisFeed.url).toBeDefined();
                expect(thisFeed.url).not.toBe(null);
            }
        )});

        it('feed name is defined', () => {
            allFeeds.forEach((thisFeed) => {
                expect(thisFeed['name']).toBeDefined();
                expect(thisFeed['name'].length).not.toEqual(0);
            }
        )});
    });

describe('The menu', () => {
    it('menu hidden by default', function () {
        const body = document.querySelector('body');
        expect(body.classList.contains('menu-hidden')).toBe(true);
    });

    it('menu appears when icon is clicked', () => {
        const body = document.querySelector('body');
        const menu = document.querySelector('.menu-icon-link');

        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(false);
    });  
});

describe('Initial Entries', () => {

    beforeEach((done) => {
        loadFeed(0, done);
    });

    it('at least one entry found when done', () => {
        const feed = document.querySelector('.feed');
        expect(feed.children.length > 0).toBe(true);
    });
}); 
    
describe('New Feed Selection', () => {
   let feedOne,
       feedTwo;

       beforeEach(done => {
           loadFeed(0, () => {
               feedOne = document.querySelector('.feed').innerHTML;
               done();
           });

           loadFeed(1, () => {
               feedTwo = document.querySelector('.feed').innerHTML;
               done();
           })
       });

    it('content changes when new feed is loaded', () => {
       expect(feedOne === feedTwo).toBe(false);
    });
});
}());
