import { SelectRow } from "@component/MyPage/SelectRow";
import React from "react";

type Types = {
  label: string;
};

const settings: Types[] = [
  {
    label: "プロフィール設定",
  },
  {
    label: "アカウント設定",
  },
  {
    label: "テーマ",
  },
];

const supports: Types[] = [
  {
    label: "プライバシーポリシー",
  },
  {
    label: "利用規約",
  },
  {
    label: "オープンソースライセンス",
  },
];

export const MyPage: React.VFC = () => (
  <div>
    <div className="my-8">
      <div className="px-5 w-full text-sm font-bold text-left text-gray-300">
        設定
      </div>
      <ul className={"px-5 pt-2"}>
        {settings.map(({ label }) => (
          <div key={label}>
            <SelectRow>{label}</SelectRow>
          </div>
        ))}
      </ul>
    </div>

    <div className="my-8">
      <div className="px-5 w-full text-sm font-bold text-left text-gray-300">
        サポート
      </div>
      <ul className={"px-5 pt-2"}>
        {supports.map(({ label }) => (
          <div key={label}>
            <SelectRow>{label}</SelectRow>
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
