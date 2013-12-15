/**
 * Canon for Jenkins Javascript Overrides
 *
 * Leverages Jankins-included Prototype.js
 *
 * @author Rackspace Web Team
 * @version 0.1
 */
document.observe("dom:loaded", function () {

    // Replace annoying 'Help us to localize Jenkins' link with 'Enable auto-refresh' link
    $('l10n-footer').update($('right-top-nav').innerHTML);
    
    // Replace auto-refresh link in breadcrumb with login links
    $('right-top-nav').update($('login-field').innerHTML);
   
    // Create table row with logo and search field cells
    var searchBox = new Element('div', {'id': 'search-wrap', 'style': 'display: inline-block;'});
    
    var rightTopNav = $('right-top-nav');
    var wrapperSpan = rightTopNav.childNodes[0];

    // Insert search box next to login box (after 'username' and 'Logout' links)
    wrapperSpan.childNodes[1].insert({
        before: searchBox
    });
    // Copy search form into search-wrap
    $('search-wrap').update($$('#top-panel table td:nth-child(2)')[0].innerHTML);

    // Gather tables
    var tables = $$('body table');
    // Add footer-table class to last (footer) table
    tables[tables.length - 1].toggleClassName('footer-table');
    // Wrap main table with wrapper div to provide textures background between header and footer
    $('main-table').wrap('div', { 'id': 'main-table-wrap' });
    // Clear style attribute for main table
    $('main-table').style = null;

});
