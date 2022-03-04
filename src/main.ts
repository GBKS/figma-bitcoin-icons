figma.showUI(__html__, { width: 300, height: 400 })

figma.ui.onmessage = message => {
  let icon: FrameNode;
  icon = figma.createNodeFromSvg(
    message.svg
  );
  console.log(icon.children);
  icon.name = message.type
  icon.x = figma.viewport.center.x
  icon.y = figma.viewport.center.y
  figma.currentPage.selection = [icon]
}
