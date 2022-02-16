import type { VFC } from "react";

/**
 * @package
 */

export const Header: VFC = () => (
  <div>
    <nav className="p-4 bg-white ">
      <div className="flex flex-row justify-between">
        <div></div>
        <div className="text-xl text-center">Qin Todo</div>
        <div className="mr-0 w-8 h-8 bg-blue-300 rounded-full"></div>
      </div>
    </nav>
  </div>
);
