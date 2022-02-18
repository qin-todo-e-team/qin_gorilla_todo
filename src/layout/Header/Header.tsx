import type { VFC } from "react";
import { QinLogo } from "src/component/Logo/QinLogo";

/**
 * @package
 */

export const Header: VFC = () => (
  <div>
    <nav className="p-4 bg-white ">
      <div className="flex flex-row justify-between">
        <div></div>
        <div className="text-xl text-center">
          <QinLogo />
        </div>
        <div className="mr-0 w-8 h-8 bg-blue-300 rounded-full"></div>
      </div>
    </nav>
  </div>
);
