const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // Remove border and show class from all tabs and contents
    removeBorder();
    removeShow();
    
    // Add border to the clicked tab
    this.classList.add('tab-border');
    
    // Grab the related content item based on the ID of the clicked tab
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // Add the 'show' class to the appropriate content
    tabContentItem.classList.add('show');
    
    // Log the id of the clicked tab
    console.log(this.id);
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Event listener - Listen for a click on each tab
tabItems.forEach(item => item.addEventListener('click', selectItem));
