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

- **算法与数据结构**：[Coursera - Algorithms Part I & II](https://www.coursera.org/learn/algorithms-part1)（完成 15+ 编程实践，深入学习图论与字符串算法）
- **前端认证**：[freeCodeCamp](https://www.freecodecamp.org/certification/mrheer/)（响应式设计、JS 算法、React 库、数据可视化，累计完成 50+ 挑战）
- **线性代数**：[Udacity - Linear Algebra Refresher](https://learn.udacity.com/courses/ud953)

---

## 🛠 技术栈

### 前端开发

- **框架**：React / Next.js / Vue 3 / Angular / Flutter
- **状态管理**：Recoil / Jotai / Redux / MobX
- **UI 组件**：shadcn/ui（React + Vue）、Ant Design、Forui
- **可视化**：D3.js、ECharts
- **动效**：motion / react-spring / FLIP

### 工程能力

- **语言**：TypeScript / Dart / Rust / ReScript / Java / Go / C
- **工具库**：Ramda / Lodash / fp-ts
- **测试**：Jest / Enzyme / Testing Library
- **构建**：pnpm / yarn / npm / Turborepo

### 基础设施

- **版本控制**：Git（分支管理、Rebase、Cherry-pick）
- **运行时**：Tokio（异步）、Electron
- **数据库**：RxDB（Local First）

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

  基于 `React` + `Redux` + `Konva` 的智能化在线设计平台，支持关键字/图片生成设计图及多维度编辑

  - 主导 `TypeScript` 重构，消除 **70%** 潜在类型错误，项目稳定性提升 **40%**
  - 重构状态结构（扁平数据 + 精细 `Selector`），页面渲染时间减少 **60%**，操作响应速度提升 **50%**
  - 设计拖动创建功能，统一使用 `path` 字符串存储形状数据，新增形状类型开发成本降低 **80%**
  - 实现 PSD 导入功能：通过**管道模式**转换数据结构，结合 `Web Worker` 后台处理，导入大文件（100MB+）耗时减少 **75%**
  - 开发钢笔工具：基于 `bezierCurveTo` 实现曲线绘制，用户自定义形状创建效率提升 **40%**

- [AI Buddhism](https://main.d3l91sjomlbpp7.amplifyapp.com)

  全栈 AI 聊天及佛经阅读应用。Vue3 版本集成 AppKit 钱包组件；Flutter 版本运用 Forui 构建 UI，通过 GraphQL 与后端交互

- [ACS Dashboard](https://acs-dashboard.pages.dev) / Bagua Parlay

  基于 `Vue3` + `shadcn/vue` + `tanstack/vue-query` 的数据看板系统，实时监控项目及服务器数据。运用 View Transition API 优化页面切换体验

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

## ❤️ 开源贡献

- [Ant Design](https://github.com/ant-design/ant-design)：贡献排名 **Top 50**，曾任 Collaborator
- [Mark Text](https://github.com/marktext/marktext)：贡献排名 **Top 5**

---

## 🧗🏼 编程挑战

- [Advent of Code 2023](https://adventofcode.com/2023) - 使用 Rust 完成全部 25 天编程谜题
- [Advent of TypeScript 2023 | TypeHero](https://typehero.dev/aot-2023) - 完成 25 天 TypeScript 类型系统挑战

---

## 📖 阅读清单

《Algorithms》· 《Code Complete》· 《Clean Code》· 《Designing Data-Intensive Applications》· 《Dive Into Design Patterns》· 《Dive Into Refactoring》· 《Mostly Adequate Guide to FP》
