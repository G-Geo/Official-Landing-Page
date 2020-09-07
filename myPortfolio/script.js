closeWindow = () => {
    document.getElementById("window").classList.toggle('hide');
    document.getElementById("chromeLogo").classList.toggle('hide');
    document.getElementById("chromeLogo2").classList.toggle('hide');
    document.getElementById('taskbar').classList.toggle('showTaskbar');
}
maximizeWindow = () => {
    document.getElementById("window").classList.toggle('maximize');
}

minimizeWindow = () => {
    document.getElementById('window').classList.toggle('minimize')
    document.getElementById('taskbar').classList.toggle('showTaskbar');
}

openWindowsMenu = () => {
    document.getElementById('windowsMenu').classList.toggle('showMenu');
    document.getElementById('invisibleElement1').classList.toggle('coverTaskbar')
}

closeElements = () => {
    document.getElementById('invisibleElement1').classList.toggle('coverTaskbar');
    document.getElementById('windowsMenu').classList.toggle('showMenu');

}