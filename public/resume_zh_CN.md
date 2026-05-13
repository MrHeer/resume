## 📧 联系方式

- 手机：[+86 176 2303 0229](tel:+8617623030229)
- 邮箱：[hlm52pk@163.com](mailto:hlm52pk@163.com)
- 微信：Mr\_\_Heer
- GitHub：[MrHeer](https://github.com/MrHeer)

---

## 🧑‍💻 个人信息

- 何林明
- 本科
- 长沙理工大学
- 电子信息科学与技术

---

## ✨ 在线课程

- [Algorithms, Part I | Coursera](https://www.coursera.org/learn/algorithms-part1)（掌握基础算法与数据结构，完成 10+ 编程实践）
- [Algorithms, Part II | Coursera](https://www.coursera.org/learn/algorithms-part2)（深入学习图论、字符串算法，实现 5 个复杂算法案例）
- [Linear Algebra Refresher Course](https://learn.udacity.com/courses/ud953)（强化矩阵运算基础，应用于图形学与数据计算）
- [Responsive Web Design](https://www.freecodecamp.org/certification/mrheer/responsive-web-design)（系统学习响应式布局，获官方认证）
- [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/certification/mrheer/javascript-algorithms-and-data-structures)（精通 JS 算法实现，完成 40+ 算法挑战）
- [Front End Development Libraries](https://www.freecodecamp.org/certification/mrheer/front-end-development-libraries)（掌握主流前端库应用，构建 3 个综合项目）
- [Data Visualization](https://www.freecodecamp.org/certification/mrheer/data-visualization)（运用 `D3.js` 实现复杂数据可视化，完成 5 个交互图表）

---

## 🛠 技能清单

- **编程语言**：TypeScript / Dart / Rust / ReScript / Java / Go / C
- **编程范式**：OOP（面向对象编程）/ FP（函数式编程）
- **前端框架**：React / Flutter / Vue / Angular
- **状态管理**：Recoil / Jotai / Redux / MobX
- **工具库**：Ramda / Lodash / D3 / fp-ts
- **包管理**：pnpm / yarn / npm
- **版本控制**：Git（熟练使用分支管理、Rebase、Cherry-pick）
- **测试工具**：Jest / Enzyme / Testing Library

---

## 🌈 工作经历

### 水华集团 ( 2024 年 ~ 2025 年 ) **高级前端工程师**

#### 行情数据

实时行情数据处理系统，通过 trans_sdk 接收第三方行情数据，转换为 protobuf 格式，分发到多个下游消息队列

- 设计并实现 Per-Symbol Task 架构：为每个交易品种分配独立发送任务，保证同品种消息顺序，**提高系统吞吐量**
- 设计 Fallback 机制：断连时缓存消息到本地，恢复后按序发送，确保数据零丢失
- 基于 [Tokio](https://tokio.rs) 异步运行时实现高性能数据处理
- 通过 FFI 调用乾隆行情数据 SDK（C++），修复 `.so` 动态库 RPATH 兼容性问题
- 支持多种消息队列发布：Kafka（lz4 压缩、幂等发送）、ZMQ（多部分消息）、文件（CSV 格式自动滚动）
- 实现 Lifecycle 优雅关闭机制，协调所有 worker 有序退出
- 使用 `Decimal` 类型替代 `f64` 进行精确金融计算

#### 统一组件库

基于 [shadcn/ui](https://ui.shadcn.com) 搭建的统一 UI 组件库，供集团内多个项目共享使用

- 设计并实现通用业务组件库：Combobox、DataTable、Tabs、Button 等
- 构建 Tree 工具库：提供树形数据结构操作方法，通过 `compose` 模式支持功能扩展，**提升开发效率**
- 实现表格列固定、排序、筛选等高级功能
- 封装 FilterTree 函数：支持递归树形数据过滤，**提升筛选效率**
- 组件遵循无障碍访问规范，支持键盘导航和焦点管理

#### 数据中心

期权交易数据中心管理平台，用于实时监控和管理期权交易数据

- 基于 `Next.js 16` + `React 19` + `TypeScript` 构建高性能 Web 应用
- 设计可折叠树形视图展示订单层级结构，支持嵌套子订单的展开/收起，**提升订单定位效率**
- 实现 K 线图组件：支持多时间周期切换、缩放控制、工具提示定位
- 添加一键平仓功能：批量处理持仓数据，支持策略选择和价格区间限制
- 开发价格输入脏值追踪机制：防止用户手动修改被自动更新覆盖，**提升用户体验**
- 实现订单自动刷新：定时拉取最新订单和成交数据
- 设计可排序列和颜色编码：区分订单类型（正常/撤销/成交），**提升数据可读性**

#### 渠道通

渠道配置管理系统，用于管理渠道参数配置和日志监控

- 设计复杂的参数配置管理架构：基于动态表单引擎实现灵活字段配置，**大幅提升开发效率**
- 设计并实现渠道配置页面：支持批量配置、参数校验和实时预览功能
- 开发渠道日志页面：实时展示渠道操作日志，支持时间范围筛选
- 实现响应式布局：适配桌面端和移动端

#### 大模型聚合平台

Turborepo Monorepo 项目，聚合多个大语言模型 API，提供统一的调用接口

- 设计并主导整个前后端架构：采用微服务架构设计，明确服务边界和通信协议
- 设计计费系统架构：基于 API Key 记录用量，支持按 Token/请求计费
- 设计 API Key 管理机制：实现密钥生成、权限控制、用量统计和配额管理
- 设计 GPU 配置管理页面：展示 GPU 资源使用情况，支持配置修改
- 实现模型详情页面：展示模型参数、性能指标和调用统计
- 开发聊天功能：集成多模型切换、上下文管理和流式响应
- 暴露 gRPC 服务：供内部系统调用，支持高并发低延迟通信
- 封装 Proto 包：定义统一的数据结构和接口规范

### 独立开发者 ( 2023 年 ~ 2024 年 )

#### Quirk Lab

- [官方网站](https://quirk-lab.com)

  基于 `Next.js` 搭建响应式官网，运用 `Ansible` 实现服务器自动化部署，减少运维成本，提升网站迭代效率。集成 [`motion`](https://motion.dev/docs/react) 动画库实现交互反馈，提升用户体验

- 打牌计分器

  采用 [`Weapp-vite`](https://vite.icebreaker.top) 构建微信小程序，设计智能计分算法，支持多牌型规则自定义。完全独立设计并开发微信原生组件库

- XShot

  使用 `Flutter` 跨平台框架开发桌面截图工具，实现边距、圆角、阴影等个性化编辑功能，集成颜色提取算法，自动生成渐变背景

- [zed-moonbit](https://github.com/quirk-lab/zed-moonbit)

  基于 `Rust` 语言开发 `Zed` 编辑器插件，实现 [`MoonBit`](https://www.moonbitlang.cn) 语言的语法高亮、智能补全功能

#### 开源项目

- [Image Locker](https://github.com/MrHeer/image-locker)

  使用 `React` 构建的一个图片加密工具，利用 `AES-256-GCM` 加密算法来加密图片。实现多个滤镜算法，并且能方便增加新的滤镜。集成 [`motion`](https://motion.dev/docs/react) 动画库实现丰富流畅的交互反馈

- [undo](https://github.com/XFreeCoder/undo)

  框架无关的 undo/redo 工具，提供了简单的集成 `undo` 和 `redo` 功能的方案

- [matrix](https://github.com/MrHeer/matrix)

  `Rust` 实现的向量与矩阵计算库，支持矩阵乘法、转置等 **20+** 运算，单元测试覆盖率 **100%**

#### 挑战项目

- [Advent of Code 2023](https://github.com/MrHeer/advent-of-code)

  一个小型编程谜题的 Advent 日历，适用于各种技能和技能水平，可以用您喜欢的任何编程语言解决。使用 `Rust` 完成全部 25 天编程谜题

- [Advent of TypeScript 2023 | TypeHero](https://typehero.dev/aot-2023)

  一个关于 `TypeScript` 类型系统的挑战，你需要使用 `TypeScript` 的类型系统完成每天的题目。完成 25 天 `TypeScript` 类型系统挑战，实现高级类型工具（如递归类型、条件类型）

#### 兼职项目

- [匠紫](https://jiangziai.com)

  基于 `Canvas` 的智能化在线设计平台，支持关键字/图片生成设计图及多维度编辑。技术栈：`React` + `Redux` + `Konva`

  - 主导 `TypeScript` 重构，消除 **70%** 潜在类型错误，项目稳定性提升 **40%**
  - 重构状态结构（扁平数据 + 精细 `Selector`），页面渲染时间减少 **60%**，操作响应速度提升 **50%**
  - 建立开发文档与 Code Review 机制，团队协作效率提升 **30%**
  - 设计拖动创建功能，统一使用 `path` 字符串存储形状数据，新增形状类型开发成本降低 **80%**
  - 实现 PSD 导入功能：基于 [ag-psd](https://github.com/Agamnentzar/ag-psd) 解析文件，通过**管道模式**转换数据结构，结合 `Web Worker` 后台处理，导入大文件（100MB+）耗时减少 **75%**
  - 开发钢笔工具：基于 `bezierCurveTo` 实现曲线绘制，通过 `React Context` 管理局部状态，用户自定义形状创建效率提升 **40%**

- [ACS Internal Dashboard](https://acs-dashboard.pages.dev)

  - 主导基于 Vue3 框架的 ACS 内部看板系统开发，该看板运用表格可视化技术，精准实现对公司内部项目及服务器数据的实时监控。
  - 运用 [`shadcn/vue`](https://www.shadcn-vue.com) 构建高度定制化的用户界面组件，确保界面交互的流畅性与视觉呈现的专业性。
  - 借助 [`tanstack/vue-query`](https://tanstack.com/query/latest/docs/framework/vue/overview) 实现高效的数据查询逻辑，搭配 [`@tanstack/vue-table`](https://tanstack.com/table/latest/docs/introduction) 完成复杂表格的高性能渲染，显著提升数据展示的效率与准确性。

- Bagua parlay

  - 负责基于 Vue3 的 Bagua parlay 平台开发，通过表格与图表相结合的方式，对各类 [Poly Market](https://polymarket.com) 事件数据进行全面监控与分析。
  - 利用 [`shadcn/vue`](https://www.shadcn-vue.com) 搭建响应式且美观的用户界面，优化用户操作体验。
  - 运用 [`tanstack/vue-query`](https://tanstack.com/query/latest/docs/framework/vue/overview) 和 [`@tanstack/vue-table`](https://tanstack.com/table/latest/docs/introduction) 完成数据的快速查询与表格渲染，同时引入 [`View Transition API`](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)，极大提升了页面切换及数据加载时的用户体验流畅度。

- AI Buddhism Vue

  - 完成基于 Vue3 的 AI 聊天软件原型开发，该原型具备丰富的动态效果与交互设计，为用户提供沉浸式体验。
  - 运用 [`shadcn/vue`](https://www.shadcn-vue.com) 打造简洁直观的用户界面，确保操作便捷性。
  - 借助 [`AppKit`](https://reown.com/appkit) 完成钱包相关组件的开发，实现安全便捷的支付及账户管理功能。
  - 采用 [`motion`](https://motion.dev/docs/vue) 构建细腻的动画与过渡效果，增强软件的视觉吸引力与交互趣味性。

- [AI Buddhism Flutter](https://main.d3l91sjomlbpp7.amplifyapp.com)

  - 承担基于 Flutter 的 AI 聊天及佛经阅读软件的全栈设计与开发工作，打造一站式的宗教文化服务平台。
  - 运用 [`Forui`](https://forui.dev) 构建具有独特风格的用户界面组件，兼顾美观与实用性。
  - 通过 [`graphql_flutter`](https://pub.dev/packages/graphql_flutter) 实现与后端的高效数据交互，确保数据的实时同步与准确传输，为用户提供流畅的使用体验。

### [杭州数建科技有限公司](https://sbuild.cn) ( 2020 年 ~ 2023 年 ) **高级前端工程师**

#### 元筑工具

该工具实现离线化项目进度计划管理。其中分为 _计划编制_、_物资管理_ 和 _清单管理_ 三大模块，实现可量化的项目进度管理，帮助建筑行业智能建造。软件基于 **Local First** 的思想，支持本地化编辑。同时通过 `RxDB` 实现了协同编辑功能

- 设计类似于 **Notion** 的高级筛选功能（高级动态表单和复杂数据结构 [ReScript Variant](https://rescript-lang.org/docs/manual/latest/variant)），支持 **80%+** 自定义筛选需求，减少 **90%** 定制开发工作量，团队开发效率提升 **50%**
- 设计 `UndoManager` 用来管理状态历史，从而实现 `undo` / `redo` 功能，与状态管理无缝集成（API 与 `useAtomCallback` **100%一致**），这使得使用者没有学习成本，能够快速应用到项目中
- 封装 `Tree` 来处理树形结构，提供了大量的常用的方法来处理树形结构的数据。通过函数式编程的思想，抽象出 `Operation`，并利用 `compose` 模式来快速简单的扩展功能，使团队开发速度提升 **40%**
- 封装 [`contextFactory`](https://gist.github.com/MrHeer/f009afee88d84dbd02a2476d20b4a3a9) 来快速创建 `React.Context`，减少了 **90%** 的重复代码

  ```ts
  const [Provider, useValue, useValueUpdater] = contextFactory(initialValue);
  ```

- 封装了常用的 Hook 和 Component
  - `useResize` - 处理拖动事件，通过它实现了 `ResizableLayout`，让通过拖动变化尺寸的布局可以方便实现
  - `useSyncScroll` - 同步滚动多个容器，API 十分简洁，使用简单，能够轻松实现多个容器的同步滚动功能
  - `useObserver` - 通过观察者模式实现了一个跨组件通信的功能，可以方便的实现跨组件的状态管理
  - `MotionList` - 带有动效的列表，具有删除、增加、移动等多种动效，使每一个交互看上去都十分灵动
- 使用 [`motion`](https://motion.dev/docs/react) / [`react-spring`](https://react-spring.dev) / [`FLIP`](https://aerotwist.com/blog/flip-your-animations) 等动效技术来提升用户体验
- 使用 `Recoil` `Jotai` 来管理全局状态，原子化更新 UI，减少组件不必要的 **rerender**，提升 App 性能
- 使用 `RxDB` `Electron` 来提升 **Local First** 的体验
- 使用 `D3.js` 来绘制 Gantt 图
- 使用 [`Virtual`](https://tanstack.com/virtual/v3) 虚拟滚动技术来提高滚动性能，支持了大量数据的流畅展示

#### 北京城建工程管理平台

服务于北京城建机关及其下属项目的工程管理平台。主要功能涵盖：项目进度、人员、物料、日志、文件和报表管理。通过可视化技术展示各个模块总览概况

### [拓维信息系统股份有限公司](https://www.talkweb.com.cn) ( 2018 年 ~ 2020 年 ) **软件工程师**

#### 安微联通大数据项目

- 负责大数据平台维护，开发平台监控工具：对接华为数据接口，用 `Python` 分析数据并生成可视化网页，运维效率提升 **80%**，故障响应时间从 2 小时缩短至 10 分钟
- 独立开发安徽移动数据可视化页面：自学 `React` + `Ant Design` ，7 天内交付 3 个核心页面，用 `ECharts` 实现 **10+** 图表展示，满足领导决策需求，获客户书面表扬

#### 湖南移动爬虫项目

独立负责前端开发，采用 `RESTful` 接口实现前后端分离，基于 `Ant Design` 快速搭建界面，3 周内完成核心功能开发

---

## ❤️ 开源项目

- [Ant Design](https://github.com/ant-design/ant-design)：一套企业级 UI 设计语言和 `React` 组件库。提炼自企业级中后台产品的交互语言和视觉风格。开箱即用的高质量 `React` 组件。我长期关注该项目，持续解决问题，目前贡献排名位于前 **50**。曾经很荣幸的成为了该库的 **Collaborator**
- [Mark Text](https://github.com/marktext/marktext)：一个简单而优雅的开源 `Markdown` 编辑器，专注于速度和可用性。可用于 Linux、macOS 和 Windows。我长期关注该项目，持续解决问题，目前贡献排名位于前 **5**

---

## 🧗🏼 冒险旅程

- [Advent of Code 2023](https://adventofcode.com/2023)
- [Advent of TypeScript 2023 | TypeHero](https://typehero.dev/aot-2023)

---

## 📖 阅读清单

- _Algorithms_
- _Code Complete: A Practical Handbook of Software Construction_
- _Clean Code: A Handbook of Agile Software Craftsmanship_
- _Designing Data-Intensive Applications_
- _Dive Into Design Patterns_
- _Dive Into Refactoring_
- _Mostly adequate guide to FP_
