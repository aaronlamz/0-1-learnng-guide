import{_ as a,o as s,c as n,U as o}from"./chunks/framework.8610b7e0.js";const g=JSON.parse('{"title":"React 的 reconciliation 算法是什么？它是如何工作的？","description":"","frontmatter":{},"headers":[],"relativePath":"react/reconciliation.md","filePath":"react/reconciliation.md"}'),l={name:"react/reconciliation.md"},t=o(`<h1 id="react-的-reconciliation-算法是什么-它是如何工作的" tabindex="-1">React 的 reconciliation 算法是什么？它是如何工作的？ <a class="header-anchor" href="#react-的-reconciliation-算法是什么-它是如何工作的" aria-label="Permalink to &quot;React 的 reconciliation 算法是什么？它是如何工作的？&quot;">​</a></h1><p>React 的 Reconciliation（协调）算法是一个高效的 diffing 算法，用于在有状态更改时确定哪些部分需要更新。这是 React 用来提高应用性能的关键技术之一。下面是它的基本工作机制：</p><h2 id="基本原则" tabindex="-1">基本原则 <a class="header-anchor" href="#基本原则" aria-label="Permalink to &quot;基本原则&quot;">​</a></h2><ol><li><p><strong>不跨级别对比</strong>: Reconciliation 算法不会跨级别进行对比。如果一个组件的元素结构发生了较大的变化，整个旧组件树将被销毁，然后构建一个全新的组件树。</p></li><li><p><strong>对比同类型元素</strong>: 当比较两个相同类型的 React 元素时，React 会保留 DOM 节点，并仅更改该节点的属性或内容。</p></li><li><p><strong>不同类型的元素会产生不同的树</strong>: 如果两个元素不是同一类型的，React 会销毁原始树并构建一个全新的树。</p></li><li><p><strong>列表中的子元素应具有 key 属性</strong>: 当元素是列表中的子元素时，每个元素都应该有一个唯一的 &quot;key&quot; 属性，这样 React 可以更准确、更快速地进行 diff。</p></li></ol><h2 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h2><p>假设有两个不同的组件树 <code>A</code> 和 <code>B</code>，<code>A</code> 是应用当前的状态，而 <code>B</code> 是应用下一个状态。</p><ol><li><p><strong>Tree Construction</strong>: React 创建两个内存中的“虚拟 DOM 树”以代表 <code>A</code> 和 <code>B</code>。</p></li><li><p><strong>Begin Work</strong>: React 从两个树的根节点开始进行 diffing。</p></li><li><p><strong>对比同一层级的子节点</strong>: React 在同一层级内进行元素对比，如果找到了差异，将计划相应的更新。</p></li><li><p><strong>计算差异并更新队列</strong>: 差异会被加入到一个更新队列中。</p></li><li><p><strong>应用更新</strong>: 根据更新队列，React 进行最少量的 DOM 操作来同步 <code>A</code> 与 <code>B</code>。</p></li></ol><h2 id="时间复杂度" tabindex="-1">时间复杂度 <a class="header-anchor" href="#时间复杂度" aria-label="Permalink to &quot;时间复杂度&quot;">​</a></h2><p>标准的 diff 算法通常具有 O(n^3) 的复杂度，但 React 通过各种优化手段，将复杂度降低到了接近 O(n)。</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>考虑下面两个不同的 DOM 树：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 旧的 DOM 树</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hi</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Text</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 新的 DOM 树</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Text</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ol><li>React 首先对比两个 <code>&lt;div&gt;</code> 元素，发现它们类型相同。</li><li>然后 React 对比两个 <code>&lt;h1&gt;</code> 元素，它们类型相同，但内容不同（一个是 &quot;Hi&quot;，另一个是 &quot;Hello&quot;）。</li><li>React 将更新 <code>&lt;h1&gt;</code> 元素的内容，而不是销毁并重新创建它。</li><li>最后，React 对比两个 <code>&lt;p&gt;</code> 元素，发现它们完全相同，因此不执行任何操作。</li></ol><p>通过这样的方式，React 能够最小化真实 DOM 的操作量，从而提高性能。</p>`,14),e=[t];function c(p,i,r,d,D,F){return s(),n("div",null,e)}const h=a(l,[["render",c]]);export{g as __pageData,h as default};