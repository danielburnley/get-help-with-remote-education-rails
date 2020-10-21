// Used to set, get and check for cookie consent
function checkForCookies(name) {
    return !!getCookie(name);
}

function getCookie(name) {
    let cookieArray = document.cookie.split(';');
    return cookieArray.find(cookieCrumb => cookieCrumb.substring(name.length, 0) === name);
}

function setCookie(name, value, options) {
    if (typeof options === 'undefined') {
        options = {}
    }
    var cookieString = name + '=' + value + '; path=/'
    if (options.days) {
        var date = new Date()
        date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000))
        cookieString = cookieString + '; expires=' + date.toGMTString()
    }
    if (document.location.protocol === 'https:') {
        cookieString = cookieString + '; Secure'
    }
    document.cookie = cookieString
}

function updateBanner() {
    document.getElementById("cookie-actions-container").style.display = "none";
    document.getElementById("cookie-confirmation").style.display = "block";
}

function unhideBanner() {
    document.getElementById("app-cookie-banner").style.display = "block";
}

function hideBanner() {
    document.getElementById("app-cookie-banner").style.display = "none";
}

function acceptAllCookies() {
    setCookie("ghre_allow_cookies", true, { days: 365 });
    updateBanner();
}

export { setCookie, getCookie, checkForCookies, acceptAllCookies, hideBanner, unhideBanner };