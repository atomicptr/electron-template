# electron-template

[![Build status](https://ci.appveyor.com/api/projects/status/9x2tyn72ukuphy4v?svg=true)](https://ci.appveyor.com/project/kasoki/electron-template)

Template for writing Electron applications with support for continuous integration.

## Setup

Install all gulp deps and bower:

    npm install
    npm install -g bower
    bower install

## How to use

You can run apps with:

    gulp run

and build Windows apps with

    gulp build
    # and for an installer
    gulp build-installer

Support for OS X and Linux builds comes at some point since I need them too.

## Continuous Integration

This template contains a build file for AppVeyor, if you want to push builds to Github Releases you'll need to add an API token.

## License

MIT
