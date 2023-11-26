import{_ as s,o as a,c as n,U as l}from"./chunks/framework.8610b7e0.js";const C=JSON.parse('{"title":"闭包","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/closure.md","filePath":"javascript/closure.md"}'),o={name:"javascript/closure.md"},p=l(`<h1 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h1><p>JavaScript 中的闭包是一种比较高级和强大的特性，它来源于函数和词法作用域的组合使用。闭包允许一个函数记住并访问它自己被声明时所在的词法作用域，即使这个函数在不同的作用域中执行。</p><h3 id="什么是闭包" tabindex="-1">什么是闭包？ <a class="header-anchor" href="#什么是闭包" aria-label="Permalink to &quot;什么是闭包？&quot;">​</a></h3><p>简单来说，闭包就是一个函数“记住”了访问它自己外部变量的能力，即使函数在其词法作用域之外执行。</p><h3 id="如何创建闭包" tabindex="-1">如何创建闭包？ <a class="header-anchor" href="#如何创建闭包" aria-label="Permalink to &quot;如何创建闭包？&quot;">​</a></h3><p>闭包通常是在一个函数内部创建的，并返回这个内部函数。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">outer</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">outerVariable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I&#39;m from outer function!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">inner</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">outerVariable</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 访问外部函数的变量</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inner</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myClosure </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">outer</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \`myClosure\` 就是一个闭包</span></span>
<span class="line"><span style="color:#82AAFF;">myClosure</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出 &quot;I&#39;m from outer function!&quot;</span></span></code></pre></div><p>在这个例子中，<code>inner</code> 函数是在 <code>outer</code> 函数的作用域内定义的，因此它可以访问 <code>outer</code> 函数的变量。当 <code>outer</code> 函数返回 <code>inner</code> 函数并赋值给 <code>myClosure</code> 时，一个闭包形成了。</p><h3 id="闭包的用途" tabindex="-1">闭包的用途 <a class="header-anchor" href="#闭包的用途" aria-label="Permalink to &quot;闭包的用途&quot;">​</a></h3><ol><li><p><strong>数据封装和私有变量</strong>: 闭包允许我们隐藏不应该直接访问的变量。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">counter</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myCounter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">counter</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">myCounter</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">myCounter</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出 2</span></span></code></pre></div><p>在这个例子里，<code>count</code> 是一个私有变量，外部无法直接访问。</p></li><li><p><strong>动态函数生成</strong>: 闭包可以用于生成具有特定行为的函数。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">multiplier</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">factor</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">factor</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> doubler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">multiplier</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">doubler</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出 8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tripler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">multiplier</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">tripler</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出 12</span></span></code></pre></div></li><li><p><strong>函数柯里化</strong>: 通过使用闭包，我们可以实现函数柯里化，它能生成具有某些参数预设的新函数。</p></li></ol><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ol><li><strong>内存消耗</strong>: 过度使用闭包可能会导致内存消耗增加，因为闭包的外部变量直到闭包消失才会被释放。</li><li><strong>调试困难</strong>: 由于闭包可以访问外部作用域，因此有时很难调试。</li></ol><h3 id="内存泄漏问题" tabindex="-1">内存泄漏问题 <a class="header-anchor" href="#内存泄漏问题" aria-label="Permalink to &quot;内存泄漏问题&quot;">​</a></h3><p>在JavaScript中，闭包可以是非常有用的工具，但如果不正确地使用它们，可能会导致内存泄漏或过度的内存使用。这主要是因为闭包会保持对其外部作用域的变量的引用，这样做的话，那些变量就不会被垃圾回收器回收，直到闭包自身被销毁。</p><p>以下是一些减少或避免闭包导致内存泄漏的方法：</p><h3 id="_1-手动解除引用外部变量" tabindex="-1">1. 手动解除引用外部变量 <a class="header-anchor" href="#_1-手动解除引用外部变量" aria-label="Permalink to &quot;1. 手动解除引用外部变量&quot;">​</a></h3><p>在闭包使用完外部作用域的变量后，你可以手动将其设置为<code>null</code>来解除引用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">outer</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bigArray</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1000000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">inner</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">bigArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inner</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myClosure </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">outer</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">myClosure</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 执行闭包</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 手动解除引用</span></span>
<span class="line"><span style="color:#A6ACCD;">bigArray </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span></code></pre></div><h3 id="_2-使用局部作用域" tabindex="-1">2. 使用局部作用域 <a class="header-anchor" href="#_2-使用局部作用域" aria-label="Permalink to &quot;2. 使用局部作用域&quot;">​</a></h3><p>尽量避免在全局作用域内创建闭包，这样做容易导致内存泄漏。应该在局部作用域（如函数内）创建和使用闭包。</p><h3 id="_3-注意dom引用" tabindex="-1">3. 注意DOM引用 <a class="header-anchor" href="#_3-注意dom引用" aria-label="Permalink to &quot;3. 注意DOM引用&quot;">​</a></h3><p>避免通过闭包持有DOM元素的引用。这样不仅仅是JavaScript对象不能被回收，DOM元素也不能被正确地销毁。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">attachHandler</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-element</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">onClick</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Element clicked!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 解除引用</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onClick</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="_4-使用更简单的数据结构" tabindex="-1">4. 使用更简单的数据结构 <a class="header-anchor" href="#_4-使用更简单的数据结构" aria-label="Permalink to &quot;4. 使用更简单的数据结构&quot;">​</a></h3><p>如果可能，避免在闭包中使用大型数据结构（如数组或对象）。这会减少内存使用。</p><h3 id="_5-利用弱引用" tabindex="-1">5. 利用弱引用 <a class="header-anchor" href="#_5-利用弱引用" aria-label="Permalink to &quot;5. 利用弱引用&quot;">​</a></h3><p>在某些情况下，您可以使用<code>WeakMap</code>或<code>WeakSet</code>来存储对对象的引用，这些数据结构不会阻止其键（<code>WeakMap</code>）或值（<code>WeakSet</code>）被垃圾回收。</p><h3 id="_6-定期运行垃圾回收" tabindex="-1">6. 定期运行垃圾回收 <a class="header-anchor" href="#_6-定期运行垃圾回收" aria-label="Permalink to &quot;6. 定期运行垃圾回收&quot;">​</a></h3><p>在一些运行环境（如Node.js）中，您有能力手动触发垃圾回收，从而清除不再需要的闭包。</p><h3 id="_7-使用工具和分析" tabindex="-1">7. 使用工具和分析 <a class="header-anchor" href="#_7-使用工具和分析" aria-label="Permalink to &quot;7. 使用工具和分析&quot;">​</a></h3><p>利用浏览器的开发者工具和其他内存分析工具，定期检查应用程序的内存使用情况。这样，您可以更容易地识别任何潜在的内存泄漏。</p><p>注意：尽管这些是减轻内存泄漏问题的一些方法，但最重要的还是要理解闭包是如何工作的，以及何时使用它们是恰当的。适当而谨慎地使用闭包是防止内存泄漏的关键。</p>`,32),e=[p];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};