const vscode = require('vscode');

function activate(context) {
    console.log('Galluz Language extension is now active!');
    
    let disposable = vscode.commands.registerCommand('galluz.runFile', function () {
        vscode.window.showInformationMessage('Running Galluz file...');
    });
    
    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
