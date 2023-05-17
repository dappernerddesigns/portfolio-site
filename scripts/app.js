const menuClick = document.getElementById("mobile-menu");
const menuItems = document.getElementById("mobile-links");
const ghIcon = document.getElementById("github-icon");
const LiIcon = document.getElementById("linkedIn-icon");
const emIcon = document.getElementById("mail-icon");
const smolghIcon = document.getElementById("github-icon-mobile");
const smolLiIcon = document.getElementById("linkedIn-icon-mobile");
const smolemIcon = document.getElementById("mail-icon-mobile");
const mobileMenu = document.getElementById("mobile-menu");
const dice = document.getElementById("dice-icon");
const smolDice = document.getElementById("mobile-dice");
const logo = document.getElementById("dnLogo");
const smolLogo = document.getElementById("dnLogoMobile");

menuItems.classList.add("hide");
const showMenu = () => {
    if (menuItems.classList[0] === "hide") {
        menuItems.classList.remove("hide");
        menuItems.classList.add("show");
    } else if (menuItems.classList.value.includes("show")) {
        menuItems.classList.remove("show");
        menuItems.classList.add("hide");
    }
};

const themes = [
    "green",
    "pastel",
    "purple",
    "candy-floss",
    "autumn",
    "greys",
    "liquorice",
    "sage",
];

const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    ghIcon.src = `../assets/icons/${theme}/githubIcon.svg`;
    LiIcon.src = `../assets/icons/${theme}/linkedIn.svg`;
    emIcon.src = `../assets/icons/${theme}/contact.svg`;
    smolghIcon.src = `../assets/icons/${theme}/githubIcon.svg`;
    smolLiIcon.src = `../assets/icons/${theme}/linkedIn.svg`;
    smolemIcon.src = `../assets/icons/${theme}/contact.svg`;
    mobileMenu.src = `../assets/icons/${theme}/menu.svg`;
    dice.src = `../assets/icons/${theme}/dice-solid.svg`;
    smolDice.src = `../assets/icons/${theme}/dice-solid.svg`;
    logo.src = `../assets/icons/${theme}/DN-logo.svg`;
    smolLogo.src = `../assets/icons/${theme}/DN-logo.svg`;
};
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
}

const setRandomTheme = () => {
    let randomNum = Math.floor(Math.random() * 8);
    randomNum < 0 ? (randomNum = 0) : null;
    setTheme(themes[randomNum]);
};
