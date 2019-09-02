import React, { Component } from 'react';
import './style.less';

const Footer = ()=> {
    return (
    <div class="mdt-container__footer">
        <div class="icons">
            <a href="https://kyiv.deveducation.com/"><img class="icon__dev icon" id="btnDev" src="images/dev.png" alt="dev education" /></a>
            <a href="https://www.facebook.com/DEVeducation.Ukraine/"><img class="icon__fb icon" id="btnFb" src="images/fb.png" alt="dev education" /></a>
            <a href="https://www.instagram.com/dev.education/"><img class="icon__insta icon" id="btnInsta" src="images/insta.png" alt="dev education" /></a>
            <a href="https://www.youtube.com/channel/UCOgVyVrC6Plr8QZK6pom9Bg"><img class="icon__youtube icon" id="btnYoutube" src="images/youtube.png" alt="dev education" /></a>
            <a href="https://kyiv.deveducation.com/contacts/"><img class="icon__google icon" id="btnGoogle" src="images/gmail-logo.png" alt="dev education" /></a>
        </div>
        <div class="copyright">
            <a class="copyright__dev-education" id="btnCopyrights">© Copyright 2019 | Multiplatform Dev Tools</a>
        </div>
    </div>
    )
}

export default Footer;