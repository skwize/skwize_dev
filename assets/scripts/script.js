'use strict'
const system_mon = document.getElementById("system_monitoring");
const window_man = document.getElementById("window_manager");
const keyboard_clean = document.getElementById("keyboard_cleaning");
const system_monitoring_page = document.getElementById("system_monitoring_page");
let cpuData = 0;
let ramData = 0;
let gpuData = 0;
let cpuAnimation;
let ramAnimation;
let gpuAnimation;
let cpuMouseOver;
let ramMouseOver;
let gpuMouseOver;
let isAnimStarted = false;

window.onload = function () {
    startAnimation();
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
}

function getFakeData (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function startAnimation () {
    cpuAnimation = setInterval(() => {
        cpuData = getFakeData(15, 25);
        document.getElementById("cpu-percentage").textContent = cpuData + "%"
        document.getElementById("progress_cpu").style.strokeDashoffset = 565.48 * (100-cpuData) / 100;
    }, 1500);
    ramAnimation = setInterval(() => {
        ramData = getFakeData(30, 45);
        document.getElementById("ram-percentage").textContent = ramData + "%"
        document.getElementById("progress_ram").style.strokeDashoffset = 565.48 * (100 - ramData) / 100;
    }, 1500);
    gpuAnimation = setInterval(() => {
        gpuData = getFakeData(5, 10);
        document.getElementById("gpu-percentage").textContent = gpuData + "%"
        document.getElementById("progress_gpu").style.strokeDashoffset = 565.48 * (100 - gpuData) / 100;
    }, 1500);
    isAnimStarted = true;
}



function replaceRamData () {
    document.getElementById("cpu-percentage").innerText = cpuData;
}

function replaceGpuData () {
    document.getElementById("cpu-percentage").innerText = cpuData;
}

function stopAnimation () {
    clearInterval(cpuAnimation);
    clearInterval(ramAnimation);
    clearInterval(gpuAnimation);
    isAnimStarted = false;
}

const select_page_first = () => {
    if (system_mon.checked == true)
    {
        if (!isAnimStarted){
            startAnimation();
        }
        document.getElementById("system_monitoring_page").style.opacity = 100;
        document.getElementById("feature_sys").style.color = "#3E3E3E";
        document.getElementById("feature_win").style.color = "#BFBFBF";
        document.getElementById("feature_key").style.color = "#BFBFBF";
    }else{
        system_mon.checked = true;
        document.getElementById("system_monitoring_page").style.opacity = 100;
        document.getElementById("feature_sys").style.color = "#3E3E3E";
        document.getElementById("feature_win").style.color = "#BFBFBF";
        document.getElementById("feature_key").style.color = "#BFBFBF";
    }
}
const select_page_sec = () => {
    if (window_man.checked)
    {
        stopAnimation();
        document.getElementById("system_monitoring_page").style.opacity = 0;
        document.getElementById("feature_sys").style.color = "#BFBFBF";
        document.getElementById("feature_win").style.color = "#3E3E3E";
        document.getElementById("feature_key").style.color = "#BFBFBF";
    }else{
        window_man.checked = true;
        stopAnimation();
        document.getElementById("system_monitoring_page").style.opacity = 0;
        document.getElementById("feature_sys").style.color = "#BFBFBF";
        document.getElementById("feature_win").style.color = "#3E3E3E";
        document.getElementById("feature_key").style.color = "#BFBFBF";
    }
}
const select_page_third = () => {
    if (keyboard_clean.checked)
    {
        document.getElementById("feature_sys").style.color = "#BFBFBF";
        document.getElementById("feature_win").style.color = "#BFBFBF";
        document.getElementById("feature_key").style.color = "#3E3E3E";
    }else{
        keyboard_clean.checked = true;
        document.getElementById("feature_sys").style.color = "#BFBFBF";
        document.getElementById("feature_win").style.color = "#BFBFBF";
        document.getElementById("feature_key").style.color = "#3E3E3E";
    }
}