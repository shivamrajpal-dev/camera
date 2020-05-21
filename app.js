// variables
const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const section1 = document.querySelector("#landing-page");
const section2 = document.querySelector("#features-page");
const section3 = document.querySelector("#soon-page");

const main = () => {
// functions for dot
    const fors1 = () => {
        dot1.classList.add("active");
        dot2.classList.remove("active");
        dot3.classList.remove("active");
        section1.classList.remove("open");
        section2.classList.add("open");
        section3.classList.add("open");
    }

    const fors2 = () => {
        dot2.classList.add("active");
        dot1.classList.remove("active");
        dot3.classList.remove("active");
        section1.classList.add("open");
        section2.classList.remove("open");
        section3.classList.add("open");
    }

    const fors3 = () => {
        dot3.classList.add("active");
        dot2.classList.remove("active");
        dot1.classList.remove("active");
        section1.classList.add("open");
        section2.classList.add("open");
        section3.classList.remove("open");
    }
    // event listener 
    dot1.addEventListener("click", fors1);
    dot2.addEventListener("click", fors2);
    dot3.addEventListener("click", fors3);

}
main()
