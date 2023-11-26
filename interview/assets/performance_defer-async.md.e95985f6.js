import{_ as s,o as a,c as e,U as o}from"./chunks/framework.8610b7e0.js";const h=JSON.parse('{"title":"defer和async","description":"","frontmatter":{},"headers":[],"relativePath":"performance/defer-async.md","filePath":"performance/defer-async.md"}'),l={name:"performance/defer-async.md"},n=o(`<h1 id="defer和async" tabindex="-1">defer和async <a class="header-anchor" href="#defer和async" aria-label="Permalink to &quot;defer和async&quot;">​</a></h1><p><code>defer</code> 和 <code>async</code> 都是现代浏览器提供的两种加载外部脚本的方式，它们都旨在优化页面加载性能，但它们的工作方式有所不同。</p><h3 id="_1-基础" tabindex="-1">1. 基础 <a class="header-anchor" href="#_1-基础" aria-label="Permalink to &quot;1. 基础&quot;">​</a></h3><p>传统的 <code>&lt;script src=&quot;...&quot;&gt;&lt;/script&gt;</code> 标签会导致页面解析被阻塞，直到脚本完全下载和执行为止。对于大型脚本或者需要从远程服务器获取的脚本，这可能会导致明显的性能问题。<code>defer</code> 和 <code>async</code> 属性旨在解决这个问题。</p><h3 id="_2-defer" tabindex="-1">2. defer <a class="header-anchor" href="#_2-defer" aria-label="Permalink to &quot;2. defer&quot;">​</a></h3><p>当脚本具有 <code>defer</code> 属性时：</p><ul><li>脚本会并行下载，但不会立即执行。</li><li>脚本会按照它们在页面上的出现顺序进行执行。</li><li>所有的 <code>defer</code> 脚本都会在 DOMContentLoaded 事件之前，页面解析完成之后执行。</li></ul><p>示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script1.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script2.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>无论哪个脚本先下载完成，<code>script1.js</code> 总是在 <code>script2.js</code> 之前执行。</p><h3 id="_3-async" tabindex="-1">3. async <a class="header-anchor" href="#_3-async" aria-label="Permalink to &quot;3. async&quot;">​</a></h3><p>当脚本具有 <code>async</code> 属性时：</p><ul><li>脚本会并行下载。</li><li>一旦脚本下载完成，它将尽快执行，而不考虑它在页面上的位置。</li><li>它可能在文档还没有完全解析之前就执行，因此它可能在 DOMContentLoaded 事件之前或之后执行。</li></ul><p>示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script1.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">async</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script2.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">async</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这两个脚本谁先下载完成就先执行谁，所以执行顺序是不确定的。</p><h3 id="_4-区别总结" tabindex="-1">4. 区别总结 <a class="header-anchor" href="#_4-区别总结" aria-label="Permalink to &quot;4. 区别总结&quot;">​</a></h3><ul><li><strong>执行时机</strong>：<code>async</code> 脚本一旦下载完成就会立即执行，而 <code>defer</code> 脚本会等到整个页面都解析完毕后才执行。</li><li><strong>执行顺序</strong>：<code>defer</code> 脚本保证按照它们在 HTML 文档中的顺序执行，而 <code>async</code> 脚本的执行顺序是不可预测的。</li></ul><h3 id="_5-何时使用哪个" tabindex="-1">5. 何时使用哪个？ <a class="header-anchor" href="#_5-何时使用哪个" aria-label="Permalink to &quot;5. 何时使用哪个？&quot;">​</a></h3><ul><li>如果你的脚本是模块化的，或者依赖于其他脚本，那么使用 <code>defer</code> 是明智的选择，因为它可以确保脚本按照正确的顺序执行。</li><li>如果你的脚本完全独立，与页面中的任何其他内容都没有关系，那么使用 <code>async</code> 可能是一个好选择，因为这可以确保脚本尽快执行。</li></ul><p>需要注意的是，如果你在同一个 <code>&lt;script&gt;</code> 标签中同时使用了 <code>async</code> 和 <code>defer</code>，大多数浏览器只会考虑 <code>async</code>，但为了避免可能的混淆，最好不要同时使用两者。</p>`,21),c=[n];function t(p,r,d,i,y,D){return a(),e("div",null,c)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};