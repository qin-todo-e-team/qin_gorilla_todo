import { SelectRow } from "@component/MyPage/SelectRow";
import { settings, supports } from "@config/mypage";
import React from "react";

export const MyPage: React.VFC = () => (
  <div>
    <div className="my-8">
      <div className="px-5 w-full text-sm font-bold text-left text-gray-300">
        設定
      </div>
      <ul className={"px-5 pt-2"}>
        {settings.map(({ label, url }) => (
          <div key={label}>
            <SelectRow url={url}>{label}</SelectRow>
          </div>
        ))}
      </ul>
    </div>

    <div className="my-8">
      <div className="px-5 w-full text-sm font-bold text-left text-gray-300">
        サポート
      </div>
      <ul className={"px-5 pt-2"}>
        {supports.map(({ label, url }) => (
          <div key={label}>
            <SelectRow url={url}>{label}</SelectRow>
          </div>
        ))}
        <li>
          <button className="py-2 w-full font-bold text-left ">
            お問い合わせ
          </button>
        </li>
        <li className="flex">
          <div className="py-2 w-full font-bold text-left ">バージョン</div>
          <div className="py-2 w-full font-bold text-right">1.0.0</div>
        </li>
      </ul>
    </div>
  </div>
);
