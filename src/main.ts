import * as filledIcons from "@runcitadel/bitcoin-icons-svg/filled";
import * as outlineIcons from "@runcitadel/bitcoin-icons-svg/outline";

figma.showUI(__html__, { width: 300, height: 400 })

figma.ui.onmessage = message => {
  let icon: FrameNode;
  if(message.type.endsWith("Outline")) {
    icon = figma.createNodeFromSvg(
      Object(outlineIcons)[message.type].svg
    )
  } else if(message.type.endsWith("Filled")) {
    icon = figma.createNodeFromSvg(
      Object(filledIcons)[message.type].svg
    )
  } else {
    throw new Error("Can't find icon")
  }
  icon.name = message.type
  icon.x = figma.viewport.center.x
  icon.y = figma.viewport.center.y
  figma.currentPage.selection = [icon]
}
