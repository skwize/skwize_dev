'use strict'
const system_mon = document.getElementById("system_monitoring");
const window_man = document.getElementById("window_manager");
const keyboard_clean = document.getElementById("keyboard_cleaning");
const system_monitoring_page = document.getElementById("system_monitoring_page");
let cpuData = 0;
let ramData = 0;
let gpuData = 0;
let cpuAnimation;

const select_page_first = () => {
    if (system_mon.checked == true)
    {
        cpuAnimation = setInterval(() => {
            cpuData = Math.floor(Math.random() * 65);
            document.getElementById("progress_cpu").style.strokeDashoffset = 565.48 * (100 - cpuData) / 100;
        }, 2500);
        document.getElementById("feature_sys").style.color = "#3E3E3E";
        document.getElementById("feature_win").style.color = "#BFBFBF";
        document.getElementById("feature_key").style.color = "#BFBFBF";
    }else{
        system_mon.checked = true;
        clearInterval(cpuAnimation);
        document.getElementById("feature_sys").style.color = "#3E3E3E";
        document.getElementById("feature_win").style.color = "#BFBFBF";
        document.getElementById("feature_key").style.color = "#BFBFBF";
    }
}
const select_page_sec = () => {
    if (window_man.checked)
    {
        document.getElementById("feature_sys").style.color = "#BFBFBF";
        document.getElementById("feature_win").style.color = "#3E3E3E";
        document.getElementById("feature_key").style.color = "#BFBFBF";
    }else{
        window_man.checked = true;
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