(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{21:function(e,t,a){e.exports=a(37)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(17),c=a.n(r),i=a(2),o=a(3),s=(a(26),a(11)),m=(a(27),["btn--primary","btn--outline"]),u=["btn--medium","btn--large","btn--mobile","btn--wide"],E=["primary","blue","red","green"],b=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,i=e.buttonColor,o=m.includes(r)?r:m[0],s=u.includes(c)?c:u[0],b=E.includes(i)?i:null;return l.a.createElement("button",{className:"btn ".concat(o," ").concat(s," ").concat(b),onClick:n,type:a},t)},d=(a(28),a(10)),g=a(7),v=a(0);var p=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(s.a)(c,2),m=o[0],u=o[1],E=Object(n.useState)("home"),p=Object(s.a)(E,2),h=p[0],N=p[1],f=function(){r(!1)},k=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(n.useEffect)((function(){k()}),[]),window.addEventListener("resize",k),l.a.createElement(l.a.Fragment,null,l.a.createElement(v.b.Provider,{value:{color:"#fff"}},l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container container"},l.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:f},l.a.createElement(d.a,{className:"navbar-icon"}),"DEMOREACT"),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!a)}},a?l.a.createElement(g.f,null):l.a.createElement(g.a,null)),l.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item",onClick:function(){return N("home")}},l.a.createElement(i.b,{to:"/",className:"home"===h?"nav-links active-menu":"nav-links",onClick:f},"Home")),l.a.createElement("li",{className:"nav-item",onClick:function(){return N("services")}},l.a.createElement(i.b,{to:"/services",className:"services"===h?"nav-links active-menu":"nav-links",onClick:f},"Services")),l.a.createElement("li",{className:"nav-item",onClick:function(){return N("products")}},l.a.createElement(i.b,{to:"/products",className:"products"===h?"nav-links active-menu":"nav-links",onClick:f},"Products")),l.a.createElement("li",{className:"nav-btn",onClick:function(){return N("signup")}},m?l.a.createElement(i.b,{to:"/sign-up",className:"signup"===h?"btn-link active-button":"btn-link"},l.a.createElement(b,{buttonStyle:"btn--outline",onClick:f},"SIGN UP")):l.a.createElement(i.b,{to:"/sign-up",className:"signup"===h?"btn-link active-button":"btn-link"},l.a.createElement(b,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",onClick:f},"SIGN UP"))))))))};a(34);var h=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join our exclusive membership to receive the latest news and trends"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(b,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(i.b,{to:"/sign-up"},"How it works"),l.a.createElement(i.b,{to:"/"},"Testimonials"),l.a.createElement(i.b,{to:"/"},"Careers"),l.a.createElement(i.b,{to:"/"},"Investors"),l.a.createElement(i.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(i.b,{to:"/"},"Contact"),l.a.createElement(i.b,{to:"/"},"Support"),l.a.createElement(i.b,{to:"/"},"Destinations"),l.a.createElement(i.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(i.b,{to:"/"},"Submit Video"),l.a.createElement(i.b,{to:"/"},"Ambassadors"),l.a.createElement(i.b,{to:"/"},"Agency"),l.a.createElement(i.b,{to:"/"},"Influencer")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(i.b,{to:"/"},"Instagram"),l.a.createElement(i.b,{to:"/"},"Facebook"),l.a.createElement(i.b,{to:"/"},"Youtube"),l.a.createElement(i.b,{to:"/"},"Twitter")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(i.b,{to:"/",className:"social-logo"},l.a.createElement(d.a,{className:"navbar-icon"}),"DEMOREACT")),l.a.createElement("small",{className:"website-rights"},"DEMOREACT \xa9 2020"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(i.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement(g.b,null)),l.a.createElement(i.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement(g.d,null)),l.a.createElement(i.b,{className:"social-icon-link",to:"//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber",target:"_blank","aria-label":"Youtube"},l.a.createElement(g.h,null)),l.a.createElement(i.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement(g.g,null)),l.a.createElement(i.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement(g.e,null))))))};a(35);var N=function(e){var t=e.lightBg,a=e.topLine,n=e.lightText,r=e.lightTextDesc,c=e.headline,o=e.description,s=e.buttonLabel,m=e.img,u=e.alt,E=e.imgStart;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t?"home__hero-section":"home__hero-section darkBg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===E?"row-reverse":"row"}},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-text-wrapper"},l.a.createElement("div",{className:"top-line"},a),l.a.createElement("h1",{className:n?"heading":"heading dark"},c),l.a.createElement("p",{className:r?"home__hero-subtitle":"home__hero-subtitle dark"},o),l.a.createElement(i.b,{to:"/sign-up"},l.a.createElement(b,{buttonSize:"btn--wide",buttonColor:"blue"},s)))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-img-wrapper"},l.a.createElement("img",{className:"home__hero-img",src:m,alt:u})))))))},f=a(19),k=a(20);a(36);var _=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.b.Provider,{value:{color:"#fff",size:64}},l.a.createElement("div",{className:"pricing__section"},l.a.createElement("div",{className:"pricing__wrapper"},l.a.createElement("h1",{className:"pricing__heading"}," Pricing "),l.a.createElement("div",{className:"pricing__container"},l.a.createElement(i.b,{to:"/sign-up",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(g.c,null)),l.a.createElement("h3",null," Starter "),l.a.createElement("h4",null," $8.99 "),l.a.createElement("p",null," per month "),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null," 100 Transactions "),l.a.createElement("li",null," 2% Cash Back"),l.a.createElement("li",null," $10,000 Limit ")),l.a.createElement(b,{buttonSize:"btn--wide",buttonColor:"primary"}," Choose Plan "))),l.a.createElement(i.b,{to:"/sign-up",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(f.a,null)),l.a.createElement("h3",null," Gold "),l.a.createElement("h4",null," $28.99 "),l.a.createElement("p",null," per month "),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null," 1000 Transactions "),l.a.createElement("li",null," 5% Cash Back"),l.a.createElement("li",null," $100,000 Limit ")),l.a.createElement(b,{buttonSize:"btn--wide",buttonColor:"blue"}," Choose Plan "))),l.a.createElement(i.b,{to:"/sign-up",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(k.a,null)),l.a.createElement("h3",null," Diamond "),l.a.createElement("h4",null," $99.99 "),l.a.createElement("p",null," per month "),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null," Unlimited Transactions "),l.a.createElement("li",null," 5% Cash Back"),l.a.createElement("li",null," Unlimited Spending ")),l.a.createElement(b,{buttonSize:"btn--wide",buttonColor:"primary"}," Choose Plan "))))))))},w={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"images/svg-1.svg",alt:"Credit Card"},y={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"100% SECURE",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"",img:"images/svg-5.svg",alt:"Vault"},S={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"images/svg-7.svg",alt:"Vault"},C={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"images/svg-8.svg",alt:"Vault"};var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,w),l.a.createElement(N,S),l.a.createElement(N,y),l.a.createElement(_,null),l.a.createElement(N,C))};var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(N,C))};var L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,y),l.a.createElement(_,null))};var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,S),l.a.createElement(_,null))};var D=function(){return l.a.createElement(i.a,null,l.a.createElement(p,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:T}),l.a.createElement(o.a,{path:"/services",component:x}),l.a.createElement(o.a,{path:"/products",component:L}),l.a.createElement(o.a,{path:"/sign-up",component:A})),l.a.createElement(h,null))};c.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f97dd70c.chunk.js.map