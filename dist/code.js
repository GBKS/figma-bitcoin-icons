/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

figma.showUI(__html__, { width: 300, height: 400 });
figma.ui.onmessage = message => {
    let icon;
    icon = figma.createNodeFromSvg(message.svg);
    console.log(icon.children);
    icon.name = message.type;
    icon.x = figma.viewport.center.x;
    icon.y = figma.viewport.center.y;
    figma.currentPage.selection = [icon];
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtYml0Y29pbi1pY29ucy8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAzMDAsIGhlaWdodDogNDAwIH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gbWVzc2FnZSA9PiB7XG4gICAgbGV0IGljb247XG4gICAgaWNvbiA9IGZpZ21hLmNyZWF0ZU5vZGVGcm9tU3ZnKG1lc3NhZ2Uuc3ZnKTtcbiAgICBjb25zb2xlLmxvZyhpY29uLmNoaWxkcmVuKTtcbiAgICBpY29uLm5hbWUgPSBtZXNzYWdlLnR5cGU7XG4gICAgaWNvbi54ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgaWNvbi55ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2ljb25dO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==