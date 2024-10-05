// preloading effect

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector("#preloader");
    window.addEventListener("load", () => {
      preloader.classList.add("preloaded");
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    });
  });
// Function to get server info
async function getServerInfo() {
    try {
        const response = await fetch('/serverinfo');
        const data = await response.json();
        const totalMembersElement = document.getElementById('totalMembers');
        const onlineMembersElement = document.getElementById('onlineMembers');

        totalMembersElement.innerHTML = `
        <span class="inline-flex">
          <svg class="h-[0.6rem] w-[0.6rem] fill-[#b5bac1] dark:fill-[#4e5058]" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9 488.9 384.5 488.9 256 384.5 23.05 256 23.05z"></path></svg
            ></span>
        ${data.totalMembers} Online
    `;
  
    onlineMembersElement.innerHTML = `
    <span class="inline-flex"
    ><svg class="h-[0.6rem] w-[0.6rem] fill-[#23a559]" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9 488.9 384.5 488.9 256 384.5 23.05 256 23.05z"></path></svg
  ></span>
        ${data.onlineMembers} Members
    `;
    } catch (error) {
        console.error(error);
        // Handle error if necessary
    } finally {
        // Remove preloader when everything is loaded
        preloader();
    }
}

// Load server info and preloader when window is fully loaded
window.onload = function () {
    getServerInfo();
};



// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

document.querySelectorAll('.video-container video').forEach(vid => {
  vid.onclick = () => {
      document.querySelector('.popup-video').style.display = 'block';
      document.querySelector('.popup-video video').src = vid.getAttribute('src');
  }
});

document.querySelector('.popup-video span').onclick = () => {
  document.querySelector('.popup-video').style.display = 'none';
}
