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
    icon.name = message.type;
    icon.x = figma.viewport.center.x;
    icon.y = figma.viewport.center.y;
    figma.currentPage.selection = [icon];
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLWJpdGNvaW4taWNvbnMvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDQwMCB9KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1lc3NhZ2UgPT4ge1xuICAgIGxldCBpY29uO1xuICAgIGljb24gPSBmaWdtYS5jcmVhdGVOb2RlRnJvbVN2ZyhtZXNzYWdlLnN2Zyk7XG4gICAgaWNvbi5uYW1lID0gbWVzc2FnZS50eXBlO1xuICAgIGljb24ueCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgIGljb24ueSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtpY29uXTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=