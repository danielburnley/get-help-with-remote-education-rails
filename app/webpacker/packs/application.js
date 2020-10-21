require.context('govuk-frontend/govuk/assets');

import '../styles/application.scss';
import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks';
import { initAll } from 'govuk-frontend';
import * as cookieOptions from './cookie-consent';

Rails.start();
Turbolinks.start();
initAll();

if(!cookieOptions.checkForCookies("ghre_allow_cookies")) {
    cookieOptions.unhideBanner(); // Hide cookies if consent already given
};

document.getElementById("accept-cookies").onclick = cookieOptions.acceptAllCookies;
document.getElementById("hide-button").onclick = cookieOptions.hideBanner;