import{_ as i,r as c,o,c as p,a as s,d as n,b as e,e as t}from"./app-ZorzO_PF.js";const l="/assets/1698201938306-t-Xcxiex.png",r="/assets/1698202041319-djRm0gYW.png",u={},d=t(`<h3 id="_1-常用操作指令" tabindex="-1"><a class="header-anchor" href="#_1-常用操作指令" aria-hidden="true">#</a> 1. 常用操作指令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载远程仓库的所有变动</span>
$ <span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 显示所有远程仓库</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 显示某个远程仓库的信息</span>
$ <span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 增加一个新的远程仓库，并命名</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># 取回远程仓库的变化，并与本地分支合并</span>
$ <span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 上传本地指定分支到远程仓库</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--force</span>

<span class="token comment"># 推送所有分支到远程仓库</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--all</span>

<span class="token comment">#简单查看远程---所有仓库</span>
<span class="token function">git</span> remote  （只能查看远程仓库的名字）<span class="token comment">#查看单个仓库</span>
<span class="token function">git</span>  remote show <span class="token punctuation">[</span>remote-branch-name<span class="token punctuation">]</span>

<span class="token comment">#新建远程仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>branchname<span class="token punctuation">]</span>  <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment">#修改远程仓库</span>
<span class="token function">git</span> remote <span class="token function">rename</span> <span class="token punctuation">[</span>oldname<span class="token punctuation">]</span> <span class="token punctuation">[</span>newname<span class="token punctuation">]</span>

<span class="token comment">#删除远程仓库</span>
<span class="token function">git</span> remote <span class="token function">rm</span> <span class="token punctuation">[</span>remote-name<span class="token punctuation">]</span>

<span class="token comment">#获取远程仓库数据</span>
<span class="token function">git</span> fetch <span class="token punctuation">[</span>remote-name<span class="token punctuation">]</span> <span class="token punctuation">(</span>获取仓库所有更新，但不自动合并当前分支<span class="token punctuation">)</span>
<span class="token function">git</span> pull <span class="token punctuation">(</span>获取仓库所有更新，并自动合并到当前分支<span class="token punctuation">)</span>

<span class="token comment">#上传数据，如git push origin master</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote-name<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-git-clone-克隆" tabindex="-1"><a class="header-anchor" href="#_2-git-clone-克隆" aria-hidden="true">#</a> 2.git clone 克隆</h3><p>远程操作的第一步，通常是从远程主机克隆一个版本库，这时就要用到 <code>git clone</code>命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone <span class="token operator">&lt;</span>版本库的网址<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令会在本地主机生成一个目录，与远程主机的版本库同名。如果要指定不同的目录名，可以将目录名作为 <code>git clone</code>命令的第二个参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone <span class="token operator">&lt;</span>版本库的网址<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>本地目录名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git clone</code>支持多种协议，除了HTTP(s)以外，还支持SSH、Git、本地文件协议等，下面是一些例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone http<span class="token punctuation">[</span>s<span class="token punctuation">]</span>://example.com/path/to/repo.git/
$ <span class="token function">git</span> clone ssh://example.com/path/to/repo.git/
$ <span class="token function">git</span> clone git://example.com/path/to/repo.git/
$ <span class="token function">git</span> clone /opt/git/project.git 
$ <span class="token function">git</span> clone file:///opt/git/project.git
$ <span class="token function">git</span> clone ftp<span class="token punctuation">[</span>s<span class="token punctuation">]</span>://example.com/path/to/repo.git/
$ <span class="token function">git</span> clone rsync://example.com/path/to/repo.git/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),m={href:"http://git-scm.com/book/en/Git-on-the-Server-The-Protocols",title:"http://git-scm.com/book/en/Git-on-the-Server-The-Protocols",target:"_blank",rel:"noopener noreferrer"},v=t('<h3 id="_3-在命令行中同步本地仓库示例" tabindex="-1"><a class="header-anchor" href="#_3-在命令行中同步本地仓库示例" aria-hidden="true">#</a> 3. 在命令行中同步本地仓库示例</h3><p><img src="'+l+'" alt="1698201938306"></p><p>Gitee中查看提交结果：</p><p><img src="'+r+'" alt="1698202041319"></p><h3 id="_4-资源与资料下载" tabindex="-1"><a class="header-anchor" href="#_4-资源与资料下载" aria-hidden="true">#</a> 4.资源与资料下载</h3>',5),k={href:"http://git.oschina.net/progit/",title:"http://git.oschina.net/progit/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://git-scm.com/",title:"http://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://git-scm.com/docs",title:"http://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"},b={href:"http://git.oschina.net/oschina/git-osc/wikis/%E5%B8%AE%E5%8A%A9#%E7%BB%A7%E7%BB%AD%E9%98%85%E8%AF%BB",title:"http://git.oschina.net/oschina/git-osc/wikis/%E5%B8%AE%E5%8A%A9#%E7%BB%A7%E7%BB%AD%E9%98%85%E8%AF%BB",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001373962845513aefd77a99f4145f0a2c7a7ca057e7570000",title:"http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001373962845513aefd77a99f4145f0a2c7a7ca057e7570000",target:"_blank",rel:"noopener noreferrer"},_=s("hr",null,null,-1);function x(B,E){const a=c("ExternalLinkIcon");return o(),p("div",null,[d,s("p",null,[n("通常来说，Git协议下载速度最快，SSH协议用于需要用户认证的场合。各种协议优劣的详细讨论请参考"),s("a",m,[n("官方文档"),e(a)]),n("。")]),v,s("ul",null,[s("li",null,[n("权威Git书籍"),s("a",k,[n(" ProGit（中文版）"),e(a)])]),s("li",null,[n("git官网："),s("a",h,[n("git-scm.com"),e(a)])]),s("li",null,[n("git手册："),s("a",g,[n("git-scm.com/docs"),e(a)])]),s("li",null,[n("网友整理的Git@osc教程，请"),s("a",b,[n("点击这里"),e(a)]),n("；")]),s("li",null,[n("一份很好的 Git 入门教程，请"),s("a",f,[n("点击这里"),e(a)]),n("；")])]),_])}const w=i(u,[["render",x],["__file","git_4.html.vue"]]);export{w as default};
