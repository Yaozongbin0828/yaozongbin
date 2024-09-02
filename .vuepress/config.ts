import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  base: "/",
  // base: "/yaozongbin/",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,user-scalable=no,maximum-scale=1",
      },
    ],
  ],
  title: "Yaozongbin's Blog",
  description: "Yaozongbin's Blog",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "yaozongbin",
    authorAvatar: "/head.jpg",
    docsRepo: "https://github.com/yaozongbin",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    //colorMode: "dark",   默认主题颜dark色
    // series 为原 sidebar
    series: {
      sidebarDepth: 1,
      series: "auto",
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
      // git
      "/docs/git_use/": [
        {
          text: "Git的使用方法",
          children: ["git_1", "git_2", "git_3", "git_4"],
        },
      ],
      // 前端
      "/docs/frontend/": [
        {
          text: "基础",
          children: ["HTML5", "CSS3", "JavaScript", "jQuery", "JSON", "AJAX"],
        },
        {
          text: "进阶",
          children: [
            "TypeScript",
            "Vue",
            "React",
            "Angular",
            "Webpack",
            "Axios",
            "Echarts",
            "Threejs",
          ],
        },
        {
          text: "UI框架",
          children: [
            "ElementPlus",
            "NavieUI",
            "AntDesignUI",
            "VantUI",
            "uv-ui",
          ],
        },
      ],
      "/docs/backend/": [
        {
          text: "后端编程语言",
          children: ["Java", "Node.js", "MySQL", "SQLServer", "Oracle", "Go"],
        },
        {
          text: "后端框架",
          children: ["SpringBoot"],
        },
        {
          text: "后端容器化和虚拟化技术",
          children: ["Docker", "Kubernetes"],
        },
      ],
    },
    navbar: [
      { text: "主页", icon: "Home", link: "/" },
      {
        text: "前端",
        icon: "ApplicationMobile",
        link: "/docs/frontend/frontend",
      },
      {
        text: "后端",
        icon: "DataStructured",
        link: "/docs/backend/backend",
      },
      {
        text: "关于",
        icon: "Share",
        link: "/",
        children: [
          { text: "Github", link: "https://github.com/yaozongbin0828" },
          { text: "Gitee", link: "https://gitee.com/yaozongbin" },
        ],
      },
      {
        text: "工具",
        icon: "HeatMap",
        link: "",
        children: [
          { text: "Git", link: "/docs/git_use/git_1" },
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    //   body: [
    //     {
    //       type: 'text',
    //       content: `🎉🎉🎉 欢迎来到我的博客！🎉🎉🎉`,
    //       style: 'font-size: 12px;'
    //     },
    //     { type: 'hr' },
    //     { type: 'title', content: 'QQ' },
    //     {
    //       type: 'text',
    //       content: `
    //       <p><img src=" https://s3.bmp.ovh/imgs/2023/10/22/78825ad3d1909e1e.jpg" alt=""></p>
    //       `,
    //       style: 'font-size: 12px;'
    //     },
    //     { type: 'hr' },
    //     { type: 'title', content: 'Wechat' },
    //     {
    //       type: 'text',
    //       content: `
    //         <p><img src="https://s3.bmp.ovh/imgs/2023/10/23/03982514c0652335.jpg" alt=""></p>
    //      `,
    //     },
    //     { type: 'hr' },
    //     { type: 'title', content: 'GitHub or Gitee' },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/yaozongbin">GitHub<a/></li>
    //         <li><a href="https://gitee.com/yaozongbin/yaozongbin">Gitee<a/></li>
    //       </ul>`,
    //       style: 'font-size: 12px;'
    //     },
    //   ],
    // }
    // 评论
    commentConfig: {
      type: "valine",
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        appId: "4luecWhWwi5XWq9cUyxvZhWk-gzGzoHsz",
        appKey: "dJFjQBSLtl9XKdzle4nqmipH",
        placeholder: "填写邮箱可以收到回复提醒哦！",
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        hideComments: true,
      },
    },
  }),
  // plugins: [backToTopPlugin(), nprogressPlugin()],
  // debug: true,
});
