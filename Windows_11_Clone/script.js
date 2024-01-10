// let taskbar = document.getElementsByClassName("taskbar")[0];
// let start_menu = document.getElementsByClassName("start-menu")[0];

// taskbar.addEventListener("click", () => {
//     if (start_menu.style.bottom == "127px") {
//         start_menu.style.bottom = "-555px"

//     }
    
//     else {
//         start_menu.style.bottom = "127px";
//     }
// })

document.addEventListener("DOMContentLoaded", function() {
    let taskbar = document.getElementsByClassName("taskbar")[0];
    let start_menu = document.getElementsByClassName("start-menu")[0];

    if (taskbar && start_menu) {
        taskbar.addEventListener("click", () => {
            if (start_menu.style.bottom === "127px") {
                start_menu.style.bottom = "-555px";
            } else {
                start_menu.style.bottom = "127px";
            }
        });
    } else {
        console.error("Elements with class 'taskbar' or 'start-menu' not found.");
    }
});
