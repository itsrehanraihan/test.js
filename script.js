document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('[data-role="menu"]'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

        });
    });
    }


    //Dropdown
    const $dropdown = Array.prototype.slice.call(document.querySelectorAll('[data-role="dropdown"]'), 0);

    // Check if there are any navbar burgers
    if ($dropdown.length > 0) {

    // Add a click event on each of them
    $dropdown.forEach( el => {
        el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-show');

        });
    });
    }
    
    //Accordion
    const accordionBtns = Array.prototype.slice.call(document.querySelectorAll('[data-role="accordion"]'), 0);

    accordionBtns.forEach((accordion) => {
        accordion.onclick = function () {
            this.classList.toggle("active");

            let content = this.nextElementSibling;

            if (content.style.maxHeight) {
            content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    });
    /*!
    *   Modal Js
    */

    // Functions to open and close a modal
	function openModal($el) {
        $el.classList.add('is-active');
    }
    function closeModal($el) {
        $el.classList.remove('is-active');
    }
    
    function closeAllModals() {
        (document.querySelectorAll('.modal, .toast') || []).forEach(($modal) => {
          closeModal($modal);
        });
    }
    
      // Add a click event on buttons to open a specific modal & Toast
      (document.querySelectorAll('[data-trigger="modal"],[data-trigger="toast"]') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);
        console.log($target);
    
        $trigger.addEventListener('click', () => {
          openModal($target);
        });
      });
      
      // Add a click event on various child elements to close the parent modal
      (document.querySelectorAll('.toast-close, [aria-label="close"], .modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
          let $target = $close.closest('.modal, .toast');
    
          $close.addEventListener('click', () => {
              closeModal($target);
          });
      });
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
    const e = event || window.event;
        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });


    //Tabs

    const tabs = document.querySelectorAll('[data-role="tab"]'),
    tabContents = document.querySelectorAll(".tab-panel");

    tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tc) => {
        tc.classList.remove("is-active");
        });
        target.classList.add("is-active");

        tabs.forEach((t) => {
        t.classList.remove("is-active");
        });
        tab.classList.add("is-active");
    });
    });


});
