const collapse = document.getElementById('collapse');
const togglers = collapse.getElementsByClassName('toggler');

for (let i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener('click', (e) => {
        accordionClick(e);
    });
}

const accordionClick = (e) => {
    let targetClicked = e.target;
    let classClicked = targetClicked.classList;

    while (classClicked[0] !== "toggler") {
        targetClicked = targetClicked.parentElement;
        classClicked = targetClicked.classList;
    }

    const content = targetClicked.nextElementSibling;
    const toggler = targetClicked.children[0];

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        toggler.classList.remove('active');
        content.classList.remove('active');
    } else {
        const contents = collapse.getElementsByClassName('content');

        for (let i = 0; i < contents.length; i++) {
            if (contents[i].style.maxHeight) {
                contents[i].style.maxHeight = null;
                contents[i].classList.remove('active');
                contents[i].previousElementSibling.firstElementChild.classList.remove('active');
            }
        }

        content.style.maxHeight = content.scrollHeight + "px";
        toggler.classList.add('active');
        content.classList.add('active');
    }
};
