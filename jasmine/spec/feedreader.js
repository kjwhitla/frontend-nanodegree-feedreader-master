/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* #1 - first test suite - named 'RSS Feeds' */
    describe('RSS Feeds', function () {

        /* #1.1 - Note: allFeeds variable has been defined */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* #1.2 - Note: This test ensures a URL is defined and not empty within the allFeeds object */
        it('each feed has a URL defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });


        /* #1.3 - Note: This test loop ensures a name is defined in the allFeeds object */
        it('each feed has a name defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });

    });

    /*#2 - second test suite - named "The menu" */
    describe('The menu', function () {

        /* #2.1 - Note: test ensures the element is hidden by default */
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* #2.2 - Note: test ensures the menu changes visibility when clicked */
        it('changes visibility when the menu icon is clicked', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* #3 - third test suite - named "Initial Entries" */
    describe('Initial Entries', function () {


        /* #3.1 - Note:  This test ensures when the loadFeed is called that there is at least one .entry element in the feed */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('has at least one entry in the feed container', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* #4 - fourth test suite:  - named "New Feed Selection" */
    describe('New Feed Selection', function () {

        /* #4.1 - Note: This test ensures when a new feed is loaded the content actually changes */
        var content,
            updatedContent;

        beforeEach(function (done) {
            loadFeed(1, function () {
                content = $('.feed').html();
                done();
            });
        });

        it('changes content when a new feed is loaded', function (done) {
            loadFeed(1, function () {
                updatedContent = $('.feed').html()
                expect(updatedContent).not.toBe(content);
            });
        });

    });
}());