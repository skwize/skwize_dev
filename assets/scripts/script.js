'use strict'
window.onload = function () {
    // Set event listeners
    document.getElementById("cpu-graph").addEventListener('mouseenter', ()=>{
        document.getElementById('cpu-main-text').style.opacity = 0;
        document.getElementById("cpu-percentage").style.opacity = 100;
    });
    document.getElementById("cpu-graph").addEventListener('mouseleave', ()=>{
        document.getElementById('cpu-main-text').style.opacity = 100;
        document.getElementById("cpu-percentage").style.opacity = 0;
    });
    document.getElementById("ram-graph").addEventListener('mouseenter', ()=>{
        document.getElementById('ram-main-text').style.opacity = 0;
        document.getElementById("ram-percentage").style.opacity = 100;
    });
    document.getElementById("ram-graph").addEventListener('mouseleave', ()=>{
        document.getElementById('ram-main-text').style.opacity = 100;
        document.getElementById("ram-percentage").style.opacity = 0;
    });
    document.getElementById("gpu-graph").addEventListener('mouseenter', ()=>{
        document.getElementById('gpu-main-text').style.opacity = 0;
        document.getElementById("gpu-percentage").style.opacity = 100;
    });
    document.getElementById("gpu-graph").addEventListener('mouseleave', ()=>{
        document.getElementById('gpu-main-text').style.opacity = 100;
        document.getElementById("gpu-percentage").style.opacity = 0;
    });

    //Start Animations
    startFeaturePagesAnimation();
}

const sys_mon_span      = document.getElementById("feature_sys");
const win_man_span      = document.getElementById("feature_win");
const kb_clean_span     = document.getElementById("feature_key");

let cpuData;
let ramData;
let gpuData;

const systemMonitoringPage  = document.getElementById("system_monitoring_page");
const windowManagerPage     = document.getElementById("window_manager_page");
const keyboardCleaningPage  = document.getElementById("keyboard_cleaning_page");

let page_number = 0; // 0 sys 1 win 2 key

let feature_pages_animation             = undefined;
let system_monitoring_page_animation    = undefined;
let window_manager_page_animation       = undefined; // Not implemented
let live_wallpaper_page_animation       = undefined; // Not implemented
let re_started_animation                = undefined;


// System monitoring graphs animation
function getFakeData (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startSysMonitoringAnimation () {

    if (system_monitoring_page_animation !== undefined) {
        return;
    }

    system_monitoring_page_animation = setInterval(() => {
        //CPU graph animation
        cpuData = getFakeData(15, 25);
        document.getElementById("cpu-percentage").textContent = cpuData + "%"
        document.getElementById("progress_cpu").style.strokeDashoffset = 565.48 * (100-cpuData) / 100;
        //RAM graph animation
        ramData = getFakeData(30, 45);
        document.getElementById("ram-percentage").textContent = ramData + "%"
        document.getElementById("progress_ram").style.strokeDashoffset = 565.48 * (100 - ramData) / 100;
        //GPU graph animation
        gpuData = getFakeData(5, 10);
        document.getElementById("gpu-percentage").textContent = gpuData + "%"
        document.getElementById("progress_gpu").style.strokeDashoffset = 565.48 * (100 - gpuData) / 100;
    }, 2000);
}

function stopSysMonitoringAnimation () {
    clearInterval(system_monitoring_page_animation);
    system_monitoring_page_animation = undefined;
}

// Animation of page changing
function startFeaturePagesAnimation () {
    if (feature_pages_animation !== undefined) {
        return;
    }

    systemMonitoringPage.style.opacity = 100;
    startSysMonitoringAnimation();

    feature_pages_animation = setInterval (() => {
        switch (page_number){
            case 0:
                
                sys_mon_span.style.color = "#3e3e3e";
                win_man_span.style.color = "#bfbfbf";
                kb_clean_span.style.color = "#bfbfbf";
                
                startSysMonitoringAnimation();
                
                systemMonitoringPage.style.opacity = 100;
                windowManagerPage.style.opacity = 0;
                keyboardCleaningPage.style.opacity = 0;
                page_number = 1;
                break;

            case 1:
                
                sys_mon_span.style.color = "#bfbfbf";
                win_man_span.style.color = "#3e3e3e";
                kb_clean_span.style.color = "#bfbfbf";
                
                stopSysMonitoringAnimation();
                
                systemMonitoringPage.style.opacity = 0;
                windowManagerPage.style.opacity = 100;
                keyboardCleaningPage.style.opacity = 0;

                page_number = 2;
                break;
            
            case 2:
                
                stopSysMonitoringAnimation();
                sys_mon_span.style.color = "#bfbfbf";
                win_man_span.style.color = "#bfbfbf";
                kb_clean_span.style.color = "#3e3e3e";
                
                systemMonitoringPage.style.opacity = 0;
                windowManagerPage.style.opacity = 0;
                keyboardCleaningPage.style.opacity = 100;

                page_number = 0;
                break;
        }

    }, 6500)
}

function stopFeaturePagesAnimation () {
    clearInterval(feature_pages_animation);
    feature_pages_animation = undefined;
}

function re_startFeaturePagesAnimation() {
    if (re_started_animation !== undefined){
        clearTimeout(re_started_animation);
    }

    re_started_animation = setTimeout(()=>{
        startFeaturePagesAnimation();
    },4500);
}


// Page navigation
function select_page_first () {
    sys_mon_span.style.color = "#3e3e3e";
    win_man_span.style.color = "#bfbfbf";
    kb_clean_span.style.color = "#bfbfbf";

    stopFeaturePagesAnimation();
    startSysMonitoringAnimation();
    
    systemMonitoringPage.style.opacity = 100;
    windowManagerPage.style.opacity = 0;
    keyboardCleaningPage.style.opacity = 0;

    page_number = 0;
    re_startFeaturePagesAnimation();
    return;

}
function select_page_sec () {
    sys_mon_span.style.color = "#bfbfbf";
    win_man_span.style.color = "#3e3e3e";
    kb_clean_span.style.color = "#bfbfbf";
    
    stopSysMonitoringAnimation();
    
    systemMonitoringPage.style.opacity = 0;
    windowManagerPage.style.opacity = 100;
    keyboardCleaningPage.style.opacity = 0;

    page_number = 1;
    re_startFeaturePagesAnimation();

    return;
}
function select_page_third () {
    stopSysMonitoringAnimation();
    
    sys_mon_span.style.color = "#bfbfbf";
    win_man_span.style.color = "#bfbfbf";
    kb_clean_span.style.color = "#3e3e3e";
    
    systemMonitoringPage.style.opacity = 0;
    windowManagerPage.style.opacity = 0;
    keyboardCleaningPage.style.opacity = 100;

    page_number = 2;
    re_startFeaturePagesAnimation();
    return;
}