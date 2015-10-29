var app = require("app");
var BrowserWindow = require("browser-window");

var packageJson = require("./package.json");

var win = null;

app.on("window-all-closed", function() {
    // TODO: not default behaviour on OS X apps, you may want to change that
    app.quit();
});

app.on("ready", function() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + "/icons/icon.png"
    });

    win.setMenu(null);

    win.loadUrl("file://" + __dirname + "/browser/app.html");

    win.webContents.on("did-finish-load", function() {
        win.setTitle(app.getName());
    });

    win.on("closed", function() {
        win = null;
    });
});
