const extend = require("js-base/core/extend");
const Router = require("sf-core/ui/router");
const System = require("sf-core/device/system");
const Image = require('sf-core/ui/image');

// Get generated UI code
const Page1Design = require("ui/ui_page1");

const Page1 = extend(Page1Design)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    const page = this;
    superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    const page = this;
    superOnLoad();

    page.headerBar.leftItemEnabled = false;
    
    page.flexLayout1.children.imageView1.image = Image.createFromFile("images://ninegag.png");
    page.flexLayout1.children.imageView2.image = Image.createFromFile("images://bobiler.png");
    page.flexLayout1.children.imageView3.image = Image.createFromFile("images://cheezburger.png");
    page.flexLayout1.children.imageView4.image = Image.createFromFile("images://collagehumor.png");
    page.flexLayout1.children.imageView5.image = Image.createFromFile("images://funnyordie.png");
    page.flexLayout1.children.imageView6.image = Image.createFromFile("images://quickmeme.png");    
    page.flexLayout1.children.imageView7.image = Image.createFromFile("images://memecenter.png"); 
    page.flexLayout1.children.imageView8.image = Image.createFromFile("images://funnyjunk.png"); 
    
    
    // Image onTouch 
    page.flexLayout1.children.imageView1.onTouch = image_onPress.bind(page,ninegag);
    page.flexLayout1.children.imageView2.onTouch = image_onPress.bind(page,bobiler);
    page.flexLayout1.children.imageView3.onTouch = image_onPress.bind(page,cheezburger);
    page.flexLayout1.children.imageView4.onTouch = image_onPress.bind(page,collagehumor);
    page.flexLayout1.children.imageView5.onTouch = image_onPress.bind(page,funnyordie);
    page.flexLayout1.children.imageView6.onTouch = image_onPress.bind(page,quickmeme);
    page.flexLayout1.children.imageView7.onTouch = image_onPress.bind(page,memecenter);
    page.flexLayout1.children.imageView8.onTouch = image_onPress.bind(page,funnyjunk);
   
}

function image_onPress(address) {
    const page = this;
    Router.go("page2",address);
}


/**
*  The object of the gags 
*/
var ninegag = {
    name: "9GAG",
    url : "https://9gag.com/"
};

var bobiler = {
    name: "BOBILER",
    url : "https://bobiler.org/"
};

var cheezburger = {
    name  :"cheezburger",
    url   :"https://www.cheezburger.com/"
}

var collagehumor = {
    name : "collagehumor",
    url  : "http://www.collegehumor.com/"
}

var funnyordie = {
    name :"funnyordie",
    url  : "https://www.funnyordie.com/"
}

var quickmeme =  {
    name:"quickmeme",
    url : "http://www.quickmeme.com/"
}

var memecenter = {
    name : "memecenter",
    url  : "https://www.memecenter.com/"
}

var funnyjunk ={
    name :"funnyjunk",
    url  :"https://funnyjunk.com/"
}

module.exports = Page1;
