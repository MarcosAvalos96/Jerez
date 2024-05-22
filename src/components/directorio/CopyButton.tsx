import Copy from "@assets/icons/Directory/Copy";
import { Tooltip } from "@nextui-org/react";
import { useCallback, useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }, [textToCopy]);

  return (
    <Tooltip content={copied ? "Copied!" : "Copy"} showArrow={true}>
      <button
        onClick={handleCopy}
        className="text-textColor transition-colors duration-200 hover:text-YellowPrimary focus:outline-none"
      >
        <Copy />
      </button>
    </Tooltip>
  );
}

export default CopyButton;
