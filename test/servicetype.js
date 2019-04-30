
describe('unicef', function () {

  before(function (browser, done) {
    // runs before all tests in this block
    done();
  });

  beforeEach(function (browser, done) {
    // runs before each test in this block
    done();
  });

  it('TC-1=>Check with the Language selection', function (browser, done) {
    
    browser.init();
    browser.expect.element('.agree-button').to.be.visible;
    browser.click('.agree-button');
    browser.pause(100);


    browser.expect.element('.language-link[href="/fr"]').to.be .visible;
    browser.click('.language-link[href="/fr"]');
    browser.pause(100);
    browser.expect.element('.language-link[href="/"]').to.be .visible;
    browser.click('.language-link[href="/"]');
    browser.pause(100);
    
    browser.expect.element('.dropdown--list').to.be.visible;
    browser.click('.dropdown--list');
    browser.pause(1000);
    browser.expect.element('.dropdown--menu-explore .expanded.dropdown.dropdown--items-explore:nth-child(4)').to.be.visible;
    browser.click('.dropdown--menu-explore .expanded.dropdown.dropdown--items-explore:nth-child(4)');
    browser.pause(10000);

    browser.init();

    browser.expect.element('.btn--default').to.be.visible;
    browser.click('.btn--default[href="/media/press-centre"]');
    browser.pause(1000);

    browser.expect.element('.donate_white_orange').to.be.visible;
    browser.click('.donate_white_orange');
    browser.pause(10000);

    browser.init();
    browser.expect.element('.nav--menu-item:nth-child(1)').to.be.visible;
    browser.click(' .nav--menu-item:nth-child(1)');
    browser.pause(10000);
    
    
    browser.expect.element('.search-label').to.be.visible;
    browser.click('.search-label');
    browser.pause(1000);

    browser.expect.element('#edit-query').to.be.visible;
    browser.setValue('input[type="text"]',['srikanth',browser.keys.ENTER]);
    browser.pause(1000);

    browser.expect.element('.glyphicon-search').to.be.visible;
    browser.click('.glyphicon-search');
    browser.pause(1000);

    browser.init();
    browser.expect.element('#collapseFooter1 li:nth-child(1)').to.be.visible;
    browser.click('#collapseFooter1 li:nth-child(1)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('#collapseFooter1 li:nth-child(2)').to.be.visible;
    browser.click('#collapseFooter1 li:nth-child(2)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('#collapseFooter1 li:nth-child(3)').to.be.visible;
    browser.click('#collapseFooter1 li:nth-child(3)');
    browser.pause(10000);


    browser.init();
    browser.expect.element('#collapseFooter1 li:nth-child(4)').to.be.visible;
    browser.click('#collapseFooter1 li:nth-child(4)');
    browser.pause(10000);


    browser.init();
    browser.expect.element('#collapseFooter2 li:nth-child(1)').to.be.visible;
    browser.click('#collapseFooter2 li:nth-child(1)');
    browser.pause(10000);
    
    browser.init();
    browser.expect.element('#collapseFooter2 li:nth-child(2)').to.be.visible;
    browser.click('#collapseFooter2 li:nth-child(2)');
    browser.pause(10000);

    
    browser.init();
    browser.expect.element('#collapseFooter2 li:nth-child(3)').to.be.visible;
    browser.click('#collapseFooter2 li:nth-child(3)');
    browser.pause(10000);

    
    browser.init();
    browser.expect.element('#collapseFooter2 li:nth-child(4)').to.be.visible;
    browser.click('#collapseFooter2 li:nth-child(4)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('#collapseFooter3 li:nth-child(1)').to.be.visible;
    browser.click('#collapseFooter3 li:nth-child(1)');
    browser.pause(10000);
    
    browser.init();
    browser.expect.element('#collapseFooter3 li:nth-child(2)').to.be.visible;
    browser.click('#collapseFooter3 li:nth-child(2)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('#collapseFooter3 li:nth-child(3)').to.be.visible;
    browser.click('#collapseFooter3 li:nth-child(3)');
    browser.pause(10000);
    
    browser.init();
    browser.expect.element('#collapseFooter3 li:nth-child(4)').to.be.visible;
    browser.click('#collapseFooter3 li:nth-child(4)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('.footer--social-follow li:nth-child(1)').to.be.visible;
    browser.click('.footer--social-follow li:nth-child(1)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('.footer--social-follow li:nth-child(2)').to.be.visible;
    browser.click('.footer--social-follow li:nth-child(2)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('.footer--social-follow li:nth-child(3)').to.be.visible;
    browser.click('.footer--social-follow li:nth-child(3)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('.footer--social-follow li:nth-child(4)').to.be.visible;
    browser.click('.footer--social-follow li:nth-child(4)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('.footer--social-follow li:nth-child(5)').to.be.visible;
    browser.click('.footer--social-follow li:nth-child(5)');
    browser.pause(10000);

    browser.init();
    browser.expect.element('.footer--social-follow li:nth-child(6)').to.be.visible;
    browser.click('.footer--social-follow li:nth-child(6)');
    browser.pause(10000);

  });
});








