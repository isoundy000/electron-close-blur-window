'use strict';

const Electron = require('electron');
const BrowserWindow = Electron.BrowserWindow;
const app = Electron.app;

// quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  // main window
  let mainWindow = new BrowserWindow( {
    title: 'Main',
    width: 800,
    height: 600,
  });

  mainWindow.loadUrl(`file://${__dirname}/page/index.html`);
  mainWindow.show();
  // mainWindow.openDevTools();

  // about window
  let postion_ = mainWindow.getPosition();
  let size_ = mainWindow.getSize();
  let x = (postion_[0] + size_[0]/2 - 200);
  let y = (postion_[1] + size_[1]/2 - 90);

  let aboutWindow = new BrowserWindow({
    'title': 'about',
    'x': Math.floor(x),
    'y': Math.floor(y),
    'width': 400,
    'height': 200,
    'always-on-top': true,
    'show': false,
    'resizable': false,
  });

  aboutWindow.loadUrl(`file://${__dirname}/page/index.html`);
  aboutWindow.setMenuBarVisibility(false);
  aboutWindow.show();
  aboutWindow.on('blur',function () {
    aboutWindow.close();
  });

});

