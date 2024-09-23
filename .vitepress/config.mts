import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "决战塔科夫",
  description: "决战塔科夫",
  themeConfig: {
    logo: "/eft.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "开始拍摄", link: "/开始" },
      { text: "游玩规则", link: "/游玩规则" },
      { text: "拍摄须知", link: "/拍摄须知/熊派" },
    ],

    sidebar: [
      {
        text: "开始",
        items: [
          { text: "开始拍摄", link: "/开始" },
          { text: "游玩规则", link: "/游玩规则" },
        ],
      },
      {
        text: "拍摄须知",
        items: [
          { text: "熊派", link: "/拍摄须知/熊派" },
          { text: "鹰派", link: "/拍摄须知/鹰派" },
          { text: "当地武装", link: "/拍摄须知/当地武装" },
        ],
      },
      // {
      //   text: "Part1",
      //   items: [
      //     { text: "Usec", link: "/part1/usec" },
      //     { text: "Bear", link: "/part1/bear" },
      //     { text: "Scav", link: "/part1/scav" },
      //   ],
      // },
      // {
      //   text: "关于我们",
      //   items: [
      //     { text: "关于我们", link: "/关于我们/关于我们" },
      //     { text: "凯文不是大叔", link: "/关于我们/凯文不是大叔" },
      //   ],
      // },
    ],
    search: {
      provider: "local",
    },
  },
});
