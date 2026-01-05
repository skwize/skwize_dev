'use strict'

const laptop_screen = document.getElementById("laptop_screen");
const snap_area = document.getElementById("snap-area-block");
const taskbar = document.getElementById("taskbar");

let windowManagerAnimation = undefined;

function getPosition (positionId) {
    const screenW = laptop_screen.offsetWidth
    const screenH = laptop_screen.offsetHeight;
    const taskbarH = taskbar.offsetHeight;

    let SnapPosition;

    let w;
    let h;
    let l;
    let t;

    switch (positionId){
        case 0:
            w = Math.floor(screenW/2) - 12;
            h = screenH - 12 - taskbarH;
            l = 6;
            t = 6;
            break;
        case 1:
            w = Math.floor(screenW/2) - 12;
            h = screenH - 12 - taskbarH;
            l = Math.floor(screenW/2) + 6;
            t = 6
            break;
        case 2:
            w = screenW - 12;
            h = screenH - 12 - taskbarH;
            l = 6;
            t = 6;
            break;
        case 3:
            w = Math.floor(screenW/2) - 12;
            h = Math.floor(screenH/2) - 12;
            l = 6;
            t = 6;
            break;
        case 4:
            w = Math.floor(screenW/2) - 12;
            h = Math.floor(screenH/2) - 12;
            l = Math.floor(screenW/2) + 6;
            t = 6;
            break;
        case 5:
            w = Math.floor(screenW/2) - 12;
            h = Math.floor(screenH/2) - 12 - taskbarH;
            l = Math.floor(screenW/2) + 6;
            t = Math.floor(screenH/2) + 6;
            break;
        case 6:
            w = Math.floor(screenW/2) - 12;
            h = Math.floor(screenH/2) - 12 - taskbarH;
            l = 6;
            t = Math.floor(screenH/2) + 6;
            break;
    }

    return SnapPosition = [w,h,l,t];

}

function StartWindowManagerAnimation () {
    if(windowManagerAnimation != undefined){
        return;
    }

    let pos = 1;

    windowManagerAnimation = setInterval (() => {
        let SnapPos = getPosition(pos);

        snap_area.style.width = `${SnapPos[0]}px`;
        snap_area.style.height = `${SnapPos[1]}px`;
        snap_area.style.left = `${SnapPos[2]}px`;
        snap_area.style.top = `${SnapPos[3]}px`;
        
        if (pos == 6){
            pos = 0;
        }else{
            pos++;
        }
    }, 1600)
}

function StopWindowManagerAnimation () {
    if(windowManagerAnimation == undefined){
        return;
    }

    clearInterval(windowManagerAnimation);
    windowManagerAnimation = undefined;
}