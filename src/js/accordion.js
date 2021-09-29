import { addClass, removeClass } from "./utils-class";

function accordion() {
    const accordionContainer = document.getElementsByClassName("accordion");

    for (let index = 0; index < accordionContainer.length; index++) {
        const e = accordionContainer[index];

        const button = document.createElement("button");
        addClass(
            button,
            "absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 rotate-0"
        );

        button.style.top = "50%";
        button.innerHTML = `<svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9.75 7.5L18.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

        const ulList = e.getElementsByTagName("ul")[0];
        addClass(ulList, "transition duration-200");

        function onClickAccordion() {
            if (ulList.className.indexOf("h-0") > -1) {
                addClass(button, "rotate-180");
                addClass(ulList, "opacity-100");
                removeClass(ulList, "h-0 invisible opacity-0");
            } else {
                removeClass(button, "rotate-180");
                removeClass(ulList, "opacity-100");
                addClass(ulList, "h-0 invisible opacity-0");
            }
        }
        button.addEventListener("click", onClickAccordion);

        e.getElementsByTagName("h5")[0].append(button);
    }
}

if (window.innerWidth < 768) window.addEventListener("load", accordion);
