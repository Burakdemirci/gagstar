/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Page2Design = require('ui/ui_page2');
const Router = require("sf-core/ui/router");
var webv;
const Page2 = extend(Page2Design)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow,address) {
  superOnShow();
  webv.loadURL(address.url);
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  const page = this; 
  superOnLoad();
  page.headerBar.leftItemEnabled = true;
  page.android.onBackButtonPressed = () => { Router.goBack(); };
  webv= page.webView1;
}

module && (module.exports = Page2);