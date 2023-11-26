import{_ as e,o as a,c as o,U as r}from"./chunks/framework.8610b7e0.js";const _=JSON.parse('{"title":"tree-shaking 实现原理","description":"","frontmatter":{},"headers":[],"relativePath":"build-tool/tree-shaking.md","filePath":"build-tool/tree-shaking.md"}'),t={name:"build-tool/tree-shaking.md"},i=r('<h1 id="tree-shaking-实现原理" tabindex="-1">tree-shaking 实现原理 <a class="header-anchor" href="#tree-shaking-实现原理" aria-label="Permalink to &quot;tree-shaking 实现原理&quot;">​</a></h1><p>Tree-shaking 是一种通过静态分析移除 JavaScript 中未引用代码的技术。这一术语来源于想象一个树上挂着未使用的代码，这些代码像枯叶一样被“摇动”（shaken）掉。Tree-shaking 的实现原理依赖于 ES6 模块的静态结构特性，允许工具在编译阶段确定哪些导出被使用，哪些没有。</p><h2 id="静态导入导出" tabindex="-1">静态导入导出 <a class="header-anchor" href="#静态导入导出" aria-label="Permalink to &quot;静态导入导出&quot;">​</a></h2><ul><li>ES6 模块的导入 (<code>import</code>) 和导出 (<code>export</code>) 语句是静态的，这意味着它们不能是动态改变的，必须在代码的顶层作用域中声明。</li><li>这种静态结构使得工具能够在编译时分析模块间的依赖关系。</li></ul><h2 id="编译时分析" tabindex="-1">编译时分析 <a class="header-anchor" href="#编译时分析" aria-label="Permalink to &quot;编译时分析&quot;">​</a></h2><ul><li>构建工具（如 Webpack 或 Rollup）在打包过程中解析这些 <code>import</code> 和 <code>export</code> 语句，构建起模块间的依赖图。</li><li>通过分析这个依赖图，工具可以确定哪些模块和模块内的哪些部分被其他模块引用了。</li></ul><h2 id="移除未引用代码" tabindex="-1">移除未引用代码 <a class="header-anchor" href="#移除未引用代码" aria-label="Permalink to &quot;移除未引用代码&quot;">​</a></h2><ul><li>在确定了哪些代码没有被引用之后，这些代码在最终的打包文件中可以被“摇掉”（即不包括在内）。</li><li>这通常通过压缩工具（如 Terser）实现，它们在压缩代码的同时移除未被引用的部分。</li></ul><h2 id="其他考虑" tabindex="-1">其他考虑 <a class="header-anchor" href="#其他考虑" aria-label="Permalink to &quot;其他考虑&quot;">​</a></h2><ul><li><strong>副作用（Side Effects）</strong>: 不是所有的模块都适合 Tree-shaking。如果模块在导入时有副作用（如立即执行的代码），那么这部分代码不能安全地被摇掉。在 <code>package.json</code> 中的 <code>&quot;sideEffects&quot;</code> 属性可以用来指示哪些文件是有副作用的。</li><li><strong>标记未使用代码</strong>：一些工具可能不是完全移除未使用的代码，而是在初步阶段标记这些代码。最终的移除工作由压缩阶段完成。</li></ul><h2 id="commonjs-与-tree-shaking" tabindex="-1">CommonJS 与 Tree-shaking <a class="header-anchor" href="#commonjs-与-tree-shaking" aria-label="Permalink to &quot;CommonJS 与 Tree-shaking&quot;">​</a></h2><p>相比之下，CommonJS 模块（Node.js 使用的模块系统）允许动态的导入和导出，其依赖关系可能在运行时才能确定。例如，你可以根据条件动态地 require 不同的模块，或者在函数内部进行 require。这使得在编译时静态分析并移除未使用的代码变得更加困难，甚至不可能。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Tree-shaking 是一种基于 ES6 模块静态结构的编译时优化技术，通过构建工具的静态分析实现。它可以有效地减小打包文件的大小，提高应用性能。正确地使用 ES6 模块并注意代码的副作用，可以最大化 Tree-shaking 的效果。</p>',14),l=[i];function n(s,h,c,d,u,k){return a(),o("div",null,l)}const p=e(t,[["render",n]]);export{_ as __pageData,p as default};