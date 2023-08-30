const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win; // 主窗口
function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 700,
        icon:"src/main/icon.svg",
        webPreferences: {}
    });
    // win.setMenu(null); /* 取消菜单栏 */
    win.loadFile('src/renderer/index.html');
    // win.openDevTools();
}

app.on('ready', () => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) { createWindow(); }
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { app.quit(); }
}); 