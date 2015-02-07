/**
 * Canon for Jenkins Javascript Overrides
 *
 * Leverages Jenkins-included Prototype.js
 *
 * @author Rackspace Web Team
 */
document.observe("dom:loaded", function () {
    // Auto Refresh
    var autoRefreshSelector = $$('#right-top-nav #right-top-nav div.smallfont');
    if (autoRefreshSelector.length > 0) {
        var autoRefreshLink = new Element('span').update(autoRefreshSelector[0].innerHTML);
        $$('span.jenkins_ver')[0].insert({before:autoRefreshLink});
    }
    // Click logo, go home.
    $$('div.logo')[0].on('click', function(){ location = '/'; });

    // Replace annoying 'Help us to localize Jenkins' link with 'Enable auto-refresh' link
    //$('l10n-footer').update($('right-top-nav').innerHTML);
    
    // Replace auto-refresh link in breadcrumb with login links
    //$('right-top-nav').update($('login-field').innerHTML);
   
    // Create table row with logo and search field cells
    //var searchBox = new Element('div', {'id': 'search-wrap', 'style': 'display: inline-block;'});
    
    //var rightTopNav = $('right-top-nav');
    //var wrapperSpan = rightTopNav.childNodes[0];

    // Insert search box next to login box (after 'username' and 'Logout' links)
    //wrapperSpan.childNodes[1].insert({
    //    before: searchBox
    //});
    // Copy search form into search-wrap
    //$('search-wrap').update($$('#top-panel table td:nth-child(2)')[0].innerHTML);

    // Gather tables
    var tables = $$('body table');
    // Add footer-table class to last (footer) table
    tables[tables.length - 1].toggleClassName('footer-table');

    // remove top panel with Jenkins logo (as now we moved search and login fields down to the next header block)
    $('top-panel').remove();

});
