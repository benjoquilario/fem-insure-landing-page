const btnMenu=document.querySelector(".btn--menu"),navMenu=document.querySelector(".nav__menu"),icon=document.querySelector(".nav__menu--icon"),body=document.querySelector("body");btnMenu.addEventListener("click",(()=>{navMenu.classList.toggle("show"),navMenu.classList.contains("show")?(icon.src="./images/icon-close.svg",btnMenu.setAttribute("aria-expanded",!0),body.classList.add("no-scroll")):(icon.src="./images/icon-hamburger.svg",btnMenu.setAttribute("aria-expanded",!1),body.classList.remove("no-scroll"))}));
//# sourceMappingURL=script.js.map