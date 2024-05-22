import Link from "@assets/icons/Directory/Link";
import { Tooltip } from "@nextui-org/react";

interface IrButtonProps {
  route: string;
}

function IrButton({ route }: IrButtonProps) {
  return (
    <Tooltip content="Ir" showArrow={true}>
      <a
        href={route}
        target="_blank"
        rel="noopener noreferrer"
        className="text-textColor transition-colors duration-200 hover:text-SoftBlue focus:outline-none"
      >
        <Link />
      </a>
    </Tooltip>
  );
}

export default IrButton;
