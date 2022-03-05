const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 850,
    height: 600,
    center: true,
    hasShadow: true,
    frame: false,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})