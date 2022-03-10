figma.showUI(__html__, { width: 300, height: 400 });

figma.ui.onmessage = (message: { type: string; svg: string; }) => {
  let iconFrame: FrameNode;
  iconFrame = figma.createNodeFromSvg(
    message.svg
  );
  let icon = figma.group([...iconFrame.children], figma.currentPage);
  iconFrame.remove();
  icon.name = message.type
  icon.x = figma.viewport.center.x
  icon.y = figma.viewport.center.y
  icon.constrainProportions = true
  figma.currentPage.selection = [icon]
}
