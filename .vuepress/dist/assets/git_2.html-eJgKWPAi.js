import{_ as i,r as t,o as l,c as o,a as n,d as s,b as e,e as r}from"./app-5QMZSr4R.js";const c="/assets/1698160597662-kZ5uRIb_.png",p="/assets/1698160705000-ot4GdF7I.png",d="/assets/1698160757359-lF6SA_61.png",m="/assets/1698197854184-1REkrbAl.png",v="/assets/1698197881124-3jyUhHya.png",u="/assets/1698198051322-PadNEZEE.png",g="/assets/1698198114880-fQdKImVA.png",b="/assets/1698198137510-TYkfbY4P.png",k="/assets/1698198176614-3lEAEOhJ.png",h="/assets/1698198561152-uPESW_Ln.png",f="/assets/1698199024827-0U70-ads.png",_={},x=n("h2",{id:"_1-搭建git工作环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-搭建git工作环境","aria-hidden":"true"},"#"),s(" 1.搭建Git工作环境")],-1),w=n("h3",{id:"_1-1-下载git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-下载git","aria-hidden":"true"},"#"),s(" 1.1 下载Git")],-1),y={href:"https://git-scm.com/",title:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},G=n("p",null,[n("img",{src:c,alt:"1698160597662"})],-1),q=n("p",null,"选择版本：",-1),E=n("p",null,[n("img",{src:p,alt:"1698160705000"})],-1),L={href:"https://git-scm.com/download/win",title:"https://github.com/git-for-windows/git/releases/download/v2.14.1.windows.1/Git-2.14.1-64-bit.exe",target:"_blank",rel:"noopener noreferrer"},N=r('<p><img src="'+d+'" alt="1698160757359"></p><h3 id="_1-2-安装git" tabindex="-1"><a class="header-anchor" href="#_1-2-安装git" aria-hidden="true">#</a> 1.2 安装git</h3><p><img src="'+m+'" alt="1698197854184"></p><p>选择安装配置信息</p><p><img src="'+v+'" alt="1698197881124"></p><p>一直Next默认就好了，如果需要设置就要仔细读一下安装界面上的选项。</p><h3 id="_1-3-启动git" tabindex="-1"><a class="header-anchor" href="#_1-3-启动git" aria-hidden="true">#</a> 1.3 启动git</h3><p>安装成功后在开始菜单中会有Git项，菜单下有3个程序：</p><p><img src="'+u+'" alt="1698198051322"></p><ul><li><p><strong>Git Bash：</strong> Unix与Linux风格的命令行，使用最多，推荐最多</p><p><img src="'+g+'" alt="1698198114880"></p></li><li><p><strong>Git CMD：</strong> Windows风格的命令行</p><p><img src="'+b+'" alt="1698198137510"></p></li><li><p><strong>Git GUI</strong> ：图形界面的Git，不建议初学者使用，尽量先熟悉常用命令</p><p><img src="'+k+'" alt="1698198176614"></p></li></ul><h3 id="_1-4-bash基本操作命令" tabindex="-1"><a class="header-anchor" href="#_1-4-bash基本操作命令" aria-hidden="true">#</a> 1.4 Bash基本操作命令</h3><ul><li><strong>cd：改变目录。</strong></li><li><strong>cd . . 回退到上一个目录，直接cd进入默认目录</strong></li><li><strong>pwd : 显示当前所在的目录路径。</strong></li><li><strong>ls(ll): 都是列出当前目录中的所有文件，只不过ll(两个ll)列出的内容更为详细。</strong></li><li><strong>touch : 新建一个文件 如 touch index.js 就会在当前目录下新建一个index.js文件。</strong></li><li><strong>rm: 删除一个文件, rm index.js ，就会把index.js文件删除。</strong></li><li><strong>mkdir: 新建一个目录,就是新建一个文件夹。</strong></li><li><strong>rm -r : 删除一个文件夹, rm -r src 删除src目录， 好像不能用通配符。</strong></li><li><strong>mv 移动文件, mv index.html src index.html 是我们要移动的文件, src 是目标文件夹,当然, 这样写,必须保证文件和目标文件夹在同一目录下。</strong></li><li><strong>reset重新初始化终端/清屏。</strong></li><li><strong>clear 清屏。</strong></li><li><strong>history 查看命令历史。</strong></li><li><strong>help 帮助。</strong></li><li><strong>exit 退出。</strong></li><li><strong>#表示注释</strong></li></ul><hr><h3 id="_1-5-git配置-—-git-config-l" tabindex="-1"><a class="header-anchor" href="#_1-5-git配置-—-git-config-l" aria-hidden="true">#</a> 1.5 Git配置 — git config -l</h3><p>使用git config -l 可以查看现在的git环境详细配置</p><p><img src="'+h+`" alt="1698198561152"></p><p>查看不同级别的配置文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看系统config</span>
<span class="token function">git</span> config <span class="token parameter variable">--system</span> <span class="token parameter variable">--list</span>
　　
<span class="token comment"># 查看当前用户（global）配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span>  <span class="token parameter variable">--list</span>
 
<span class="token comment"># 查看当前仓库配置信息</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span>  <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-设置用户名与邮箱-用户标识-必要" tabindex="-1"><a class="header-anchor" href="#_1-6-设置用户名与邮箱-用户标识-必要" aria-hidden="true">#</a> 1.6 设置用户名与邮箱（用户标识，必要）</h3><p>当你安装Git后首先要做的事情是设置你的用户名称和e-mail地址。这是非常重要的，因为每次Git提交都会使用该信息。它被永远的嵌入到了你的提交中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 　　$ git config --global user.name &quot;zhangguo&quot;  #名称
 　　$ git config --global user.email zhangguo@qq.com   #邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt="1698199024827"></p><h3 id="_1-7-更多配置项" tabindex="-1"><a class="header-anchor" href="#_1-7-更多配置项" aria-hidden="true">#</a> 1.7 更多配置项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>   <span class="token comment">#打开所有的默认终端着色</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.ci commit   <span class="token comment">#别名 ci 是commit的别名</span>
<span class="token punctuation">[</span>alias<span class="token punctuation">]</span>  
co <span class="token operator">=</span> checkout  
ci <span class="token operator">=</span> commit  
st <span class="token operator">=</span> status  
pl <span class="token operator">=</span> pull  
<span class="token function">ps</span> <span class="token operator">=</span> push  
dt <span class="token operator">=</span> difftool  
l <span class="token operator">=</span> log <span class="token parameter variable">--stat</span>  
<span class="token function">cp</span> <span class="token operator">=</span> cherry-pick  
ca <span class="token operator">=</span> commit <span class="token parameter variable">-a</span>  
b <span class="token operator">=</span> branch 

user.name  <span class="token comment">#用户名</span>
user.email  <span class="token comment">#邮箱</span>
core.editor  <span class="token comment">#文本编辑器  </span>
merge.tool  <span class="token comment">#差异分析工具  </span>
core.paper <span class="token string">&quot;less -N&quot;</span>  <span class="token comment">#配置显示方式  </span>
color.diff <span class="token boolean">true</span>  <span class="token comment">#diff颜色配置  </span>
alias.co checkout  <span class="token comment">#设置别名</span>
<span class="token function">git</span> config user.name  <span class="token comment">#获得用户名</span>
<span class="token function">git</span> config core.filemode <span class="token boolean">false</span>  <span class="token comment">#忽略修改权限的文件  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有config命令参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>语法: <span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>options<span class="token operator">&gt;</span><span class="token punctuation">]</span>  
  
文件位置  
    <span class="token parameter variable">--global</span>                  <span class="token comment">#use global config file 使用全局配置文件</span>
    <span class="token parameter variable">--system</span>                  <span class="token comment">#use system config file 使用系统配置文件</span>
    <span class="token parameter variable">--local</span>                   <span class="token comment">#use repository config file    使用存储库配置文件</span>
    -f, <span class="token parameter variable">--file</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>         <span class="token comment">#use given config file    使用给定的配置文件</span>
    <span class="token parameter variable">--blob</span> <span class="token operator">&lt;</span>blob-id<span class="token operator">&gt;</span>          <span class="token comment">#read config from given blob object    从给定的对象中读取配置</span>
  
动作  
    <span class="token parameter variable">--get</span>                     <span class="token comment">#get value: name [value-regex]    获得值：[值]名[正则表达式]</span>
    --get-all                 <span class="token comment">#get all values: key [value-regex]    获得所有值：[值]名[正则表达式]</span>
    --get-regexp          <span class="token comment">#get values for regexp: name-regex [value-regex]    得到的值根据正则</span>
    --get-urlmatch            <span class="token comment">#get value specific for the URL: section[.var] URL    为URL获取特定的值</span>
    --replace-all             <span class="token comment">#replace all matching variables: name value [value_regex]    替换所有匹配的变量：名称值[ value_regex ]</span>
    <span class="token parameter variable">--add</span>                     <span class="token comment">#add a new variable: name value    添加一个新变量：name值</span>
    <span class="token parameter variable">--unset</span>                   <span class="token comment">#remove a variable: name [value-regex]    删除一个变量名[值]：正则表达式</span>
    --unset-all               <span class="token comment">#remove all matches: name [value-regex]    删除所有匹配的正则表达式：名称[值]</span>
    --rename-section          <span class="token comment">#rename section: old-name new-name    重命名部分：旧名称 新名称</span>
    --remove-section          <span class="token comment">#remove a section: name    删除部分：名称</span>
    -l, <span class="token parameter variable">--list</span>                <span class="token comment">#list all    列出所有</span>
    -e, <span class="token parameter variable">--edit</span>            <span class="token comment">#open an editor    打开一个编辑器</span>
    --get-color               <span class="token comment">#find the color configured: slot [default]    找到配置的颜色：插槽[默认]</span>
    --get-colorbool           <span class="token comment">#find the color setting: slot [stdout-is-tty]    发现颜色设置：槽[ stdout是TTY ]</span>
  
类型  
    <span class="token parameter variable">--bool</span>                    <span class="token comment">#value is &quot;true&quot; or &quot;false&quot;    值是“真”或“假”。</span>
    <span class="token parameter variable">--int</span>                     <span class="token comment">#value is decimal number    值是十进制数。</span>
    --bool-or-int             <span class="token comment">#value is --bool or --int    值--布尔或int</span>
    <span class="token parameter variable">--path</span>                    <span class="token comment">#value is a path (file or directory name)    值是路径（文件或目录名）</span>
  
其它  
    -z, <span class="token parameter variable">--null</span>                <span class="token comment">#terminate values with NUL byte    终止值与null字节</span>
    --name-only               <span class="token comment">#show variable names only    只显示变量名</span>
    <span class="token parameter variable">--includes</span>                <span class="token comment">#respect include directives on lookup    尊重包括查找指令</span>
    --show-origin             <span class="token comment">#show origin of config (file, standard input, blob, command line)    显示配置（文件、标准输入、数据块、命令行）的来源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,27);function U(j,I){const a=t("ExternalLinkIcon");return l(),o("div",null,[x,w,n("p",null,[s("打开 "),n("a",y,[s("git官网"),e(a)]),s("，下载git对应操作系统的版本。")]),G,q,E,n("p",null,[s("这里我选择下载的是Windows "),n("strong",null,[n("a",L,[s("64-bit Git for Windows Setup"),e(a)])])]),N])}const R=i(_,[["render",U],["__file","git_2.html.vue"]]);export{R as default};
