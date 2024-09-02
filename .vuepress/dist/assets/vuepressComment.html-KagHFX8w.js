import{_ as t,r as o,o as r,c,a as n,d as s,b as e,e as p}from"./app-5QMZSr4R.js";const l="/assets/1698475932418-7a1Bjs3j.png",i="/assets/1698810605586-Ca6E9ugg.png",u="/assets/1698809483780-Ye2jVhhV.png",d="/assets/1698810060337-1JA9Yfw4.png",k={},m=p('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>vuepress-reco主题内置评论插件 <code>@vuepress-reco/vuepress-plugin-comments</code>，目前支持 <code>Valine、Waline、Giscus</code>；</p><p>如果你想默认不加载评论，而只在某些页面显示评论功能，可以在 <code>commentConfig.options</code> 中设置 <code>hideComments: true</code>，并在需要展示评论的页面设置 <code>hideComments: false</code>。</p><p>如果仅是某篇文章不想设置开启评论功能，可以在 <code>front-matter</code> 设置 <code>hideComments: true</code>。</p><p><img src="'+l+`" alt="1698475932418"></p><h2 id="option-api" tabindex="-1"><a class="header-anchor" href="#option-api" aria-hidden="true">#</a> Option API</h2><h3 id="valine" tabindex="-1"><a class="header-anchor" href="#valine" aria-hidden="true">#</a> Valine</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">commentConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;valine&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token comment">// your appId</span>
        <span class="token literal-property property">appKey</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token comment">// your appKey</span>
        <span class="token literal-property property">hideComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 全局隐藏评论，默认 false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v={href:"https://valine.js.org/configuration.html",target:"_blank",rel:"noopener noreferrer"},h=p(`<h3 id="waline" tabindex="-1"><a class="header-anchor" href="#waline" aria-hidden="true">#</a> Waline</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">commentConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;waline&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;your serverURL&#39;</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
        <span class="token literal-property property">hideComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 全局隐藏评论，默认 false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"},g=p(`<h3 id="giscus" tabindex="-1"><a class="header-anchor" href="#giscus" aria-hidden="true">#</a> Giscus</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">commentConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;giscus&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;reco/blog-comments&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">repoId</span><span class="token operator">:</span> <span class="token string">&#39;R_kgDOxxxxxx&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;Announcements&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token string">&#39;xxxxx&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
        <span class="token literal-property property">hideComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 全局隐藏评论，默认 false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y={href:"https://giscus.app/",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),s(" 使用")],-1),_={href:"https://valine.js.org/configuration.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.leancloud.cn/",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[n("img",{src:i,alt:"1698810605586"})],-1),C=n("p",null,[n("img",{src:u,alt:"1698809483780"})],-1),j={href:"https://www.leancloud.cn/",target:"_blank",rel:"noopener noreferrer"},V=n("p",null,[n("img",{src:d,alt:"1698810060337"})],-1),I=n("hr",null,null,-1);function U(T,L){const a=o("ExternalLinkIcon");return r(),c("div",null,[m,n("p",null,[s("具体可以查看"),n("a",v,[s("Valine官网"),e(a)]),s("。")]),h,n("p",null,[s("使用教程及 options 其它参数参考 "),n("a",b,[s("Waline 官网"),e(a)]),s("。")]),g,n("p",null,[s("使用教程及 options 其它参数参考"),n("a",y,[s("Giscusopen"),e(a)]),s("。")]),f,n("p",null,[s("这里我选择的是 "),n("a",_,[s("Valine"),e(a)]),s(" ，你需要配合 "),n("a",w,[s("Leancloud"),e(a)]),s(" 来获取你的appID合appKey。")]),x,C,n("p",null,[s("如需查看评论数据可以去"),n("a",j,[s("Leancloud"),e(a)]),s("控制台查看数据信息。")]),V,I])}const E=t(k,[["render",U],["__file","vuepressComment.html.vue"]]);export{E as default};
