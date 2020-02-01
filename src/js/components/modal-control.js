const addToElementClassListIfNotContains = require('../helpers/addToElementClassListIfNotContains');
const removeClassFromElementIfContains = require('../helpers/removeClassFromElementIfContains');
const modalsOverlays = document.getElementsByClassName('component-modal');
const scrollbarWidth = require('../services/scrollbar/getScrollbarWidth')();

let wasExitPopupShown = false;

controlModalJustifyContent();
addEventListener('resize', controlModalJustifyContent);

function controlModalJustifyContent() {
    for (let i = 0; i < modalsOverlays.length; i++) {
        // 40 pixels of .modal-component padding
        if (modalsOverlays[i].firstElementChild.getBoundingClientRect().height < innerHeight - 40) {
            addToElementClassListIfNotContains(modalsOverlays[i], 'align-items-center');
        } else {
            removeClassFromElementIfContains(modalsOverlays[i], 'align-items-center');
        }
    }
}

document.addEventListener('mouseleave', () => {
    if (wasExitPopupShown) {
        return;
    }

    wasExitPopupShown = true;
    // TODO: ENABLE IT WHEN MODAL DONE
    // openModal('popup-exit');
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = scrollbarWidth + 'px';
    modal.style.visibility = 'unset';
    modal.style.opacity = 1;
}

window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.classList.add('fade-out');
    document.body.style.marginRight = '0';
    document.body.style.overflow = 'unset';

    setTimeout(() => {
        modal.style.visibility = 'hidden';
        modal.classList.remove('fade-out');
    }, 300);
};

// control closing modals when clicking in overlay
for (let i = 0; i < modalsOverlays.length; i++) {
    modalsOverlays[i].onclick = (e) => {
        if (e.target === modalsOverlays[i]) {
            closeModal(e.target.id);
        }
    };
}
