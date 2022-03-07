type Types = {
  label: string;
  url: string;
};

export const settings: Types[] = [
  {
    label: "プロフィール設定",
    url: "/",
  },
  {
    label: "アカウント設定",
    url: "/1/account/accountSetting",
  },
  {
    label: "テーマ",
    url: "/1/account/theme",
  },
];

export const supports: Types[] = [
  {
    label: "プライバシーポリシー",
    url: "/",
  },
  {
    label: "利用規約",
    url: "/",
  },
  {
    label: "オープンソースライセンス",
    url: "/",
  },
];
