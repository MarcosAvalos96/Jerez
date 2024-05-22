import Copy from "@assets/icons/Directory/Copy";
import { Tooltip } from "@nextui-org/react";
function CopyButton() {
  return (
    <Tooltip content="Copy" showArrow={true}>
      <button className="text-textColor transition-colors duration-200 hover:text-YellowPrimary focus:outline-none">
        <Copy />
      </button>
    </Tooltip>
  );
}

export default CopyButton;
