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
    /* first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        /* #1. - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* #2 Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        /*Note: #2 This test ensures a URL is defined and not empty within the allFeeds object */
        it('each feed has a URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });


        /* #3 Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        
        /* Note: #3 This test loop ensures a name is defined in the allFeeds object */
        it('each feed has a name defined', function() {
            allFeeds.forEach(function(feed) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name).not.toBe('');
            });
        });
        
    });

    /* second test suite: Write a new test suite named "The menu" */
        describe('The menu', function() {
            
            /*Note: #4 tests to ensure the element is hidden by default */
             it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
            
            
            
            
        
        /* #5 Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* #6 Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
            
        /* Note: #6 ensures the menu changes visibility when clicked */
         it('changes visibility when the menu icon is clicked', function() {
             $('.menu-icon-link').trigger('click');

             expect($('body').hasClass('menu-hidden')).toBe(false);

             $('.menu-icon-link').trigger('click');

             expect($('body').hasClass('menu-hidden')).toBe(true);
         });
        });

    /* #7 Write a new test suite named "Initial Entries" */

        /* #8 Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* #9 Write a new test suite named "New Feed Selection"

        /* #10 Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
