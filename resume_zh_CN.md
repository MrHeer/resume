## 📧 联系方式

- 手机：[+86 176 2303 0229](<tel:(+86)17623030229>)
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

- [Algorithms, Part I | Coursera](https://www.coursera.org/learn/algorithms-part1)
- [Algorithms, Part II | Coursera](https://www.coursera.org/learn/algorithms-part2)
- [Interactive 3D Graphics](https://learn.udacity.com/courses/cs291)
- [Linear Algebra Refresher Course](https://learn.udacity.com/courses/ud953)
- [Responsive Web Design](https://www.freecodecamp.org/certification/mrheer/responsive-web-design)
- [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/certification/mrheer/javascript-algorithms-and-data-structures)
- [Front End Development Libraries](https://www.freecodecamp.org/certification/mrheer/front-end-development-libraries)
- [Data Visualization](https://www.freecodecamp.org/certification/mrheer/data-visualization)

---

## 🛠 技能清单

- TypeScript / ReScript / Java / Dart / Rust / Go / C
- OOP / FP
- React / Angular / Vue / Flutter
- Recoil / Jotai / Redux / MobX
- Ramda / Lodash / D3 / fp-ts
- pnpm / yarn / npm
- Git
- Jest / Enzyme / Testing Library

---

## 🌈 工作经历

### 独立开发者 ( 2023 年 ~ 至今 )

#### Quirk Lab

- [官方网站](https://quirk-lab.com)

  基于 `Next.js` 搭建响应式官网，运用 `Ansible` 实现服务器自动化部署，减少运维成本，提升网站迭代效率

- 打牌计分器

  采用 [`Weapp-vite`](https://vite.icebreaker.top/) 构建微信小程序，设计智能计分算法，支持多牌型规则自定义

- XShot

  使用 `Flutter` 跨平台框架开发桌面截图工具，实现边距、圆角、阴影等个性化编辑功能，集成颜色提取算法

- [zed-moonbit](https://github.com/zed-moonbit)

  基于 `Rust` 语言开发 `Zed` 编辑器插件，实现 `MoonBit` 语言的语法高亮、智能补全功能

#### 开源项目

- [Advent of Code 2023](https://github.com/MrHeer/advent-of-code)

  一个小型编程谜题的 Advent 日历，适用于各种技能和技能水平，可以用您喜欢的任何编程语言解决

- [Advent of TypeScript 2023 | TypeHero](https://typehero.dev/aot-2023)

  一个关于 `TypeScript` 类型系统的挑战，你需要使用 `TypeScript` 的类型系统完成每天的题目

- [matrix](https://github.com/MrHeer/matrix)

  使用 `Rust` 构建的向量和矩阵计算库

- [Image Locker](https://github.com/MrHeer/image-locker)

  使用 `React` 构建的一个图片加密工具，利用 `AES-256-GCM` 加密算法来加密图片

- Countdown

  一个倒计时小工具

  [countdown-gpui](https://github.com/MrHeer/countdown-gpui) - 使用 [`GPUI`](https://www.gpui.rs/) 构建

  [countdown](https://github.com/MrHeer/countdown) - 使用 `Flutter` 构建

### [杭州数建科技有限公司](https://sbuild.cn/) ( 2020 年 ~ 2023 年 ) **高级前端工程师**

#### 元筑工具

该工具实现离线化项目进度计划管理。其中分为 _计划编制_、_物资管理_ 和 _清单管理_ 三大模块，实现可量化的项目进度管理，帮助建筑行业智能建造。软件基于 **Local First** 的思想，支持本地化编辑。同时通过 `CRDT` 和 `RxDB` 等实现了协同编辑功能

- 设计类似于 **Notion** 的高级筛选功能（高级动态表单和复杂数据结构 [ReScript Variant](https://rescript-lang.org/docs/manual/latest/variant)），让用户可以自定义各种筛选逻辑，不需要定制开发各种筛选功能，极大的提升了团队的开发效率
- 设计 `UndoManager` 用来管理状态历史，从而实现 `undo` `redo` 功能。它和状态管理能够有机结合，提供的 `useUndoCallback` 与 `useAtomCallback` 保持 **100%** 一致的 API，这使得使用者没有学习成本，能够快速应用到项目中
- 封装 `tree` 来处理树形结构，提供了大量的常用的方法来处理树形结构的数据，使得团队提升了开发效率，减少了大量重复代码
- 封装 [`contextFactory`](https://gist.github.com/MrHeer/f009afee88d84dbd02a2476d20b4a3a9) 来快速创建 `React.Context`，减少了 **90%** 的重复代码

  ```ts
  const [Provider, useValue, useValueUpdater] = contextFactory(initialValue);
  ```

- 封装了常用的 Hook 和 Component
  - `useResize` - 处理拖动事件，通过它实现了 `ResizableLayout`，让通过拖动变化尺寸的布局可以方便实现
  - `useSyncScroll` - 同步滚动多个容器，API 十分简洁，使用简单，能够轻松实现多个容器的同步滚动功能
  - `useObserver` - 通过观察者模式实现了一个跨组件通信的功能，可以方便的实现跨组件的状态管理
  - `MotionList` - 带有动效的列表，具有删除、增加、移动等多种动效，使每一个交互看上去都十分灵动
- 使用 `framer-motion` `react-spring` [`FLIP`](https://aerotwist.com/blog/flip-your-animations/) 等动效技术来提升用户体验
- 使用 `Recoil` `Jotai` 来管理全局状态，原子化更新 UI，减少组件不必要的 **rerender**，提升 App 性能
- 使用 `RxDB` `Electron` 来提升 **Local First** 的体验
- 使用 `D3.js` 来绘制 Gantt 图
- 使用 [`Virtual`](https://tanstack.com/virtual/v3) 虚拟滚动技术来提高滚动性能，支持了大量数据的流畅展示

#### 北京城建工程管理平台

服务于北京城建机关及其下属项目的工程管理平台。主要功能涵盖：项目进度、人员、物料、日志、文件和报表管理。通过可视化技术展示各个模块总览概况

### [拓维信息系统股份有限公司](https://www.talkweb.com.cn/) ( 2018 年 ~ 2020 年 ) **软件工程师**

#### 安微联通大数据项目

- 我在此项目中主要负责维护大数据平台，我在期间开发了一个平台监控工具，在华为领导人的帮助下，我能够读取平台的相关数据，然后通过 `Python` 分析数据，最后生成网页，通过这个监控工具能够极大的提升运维效率
- 安徽移动向我提出一个可视化数据页面的需求，通过自学 `React` `Ant Design`，能够快速的开发前端页面。我还利用 `ECharts` 来解决了领导提出的数据可视化的需求

#### 湖南移动爬虫项目

- 独立负责前端的开发任务，我和后端人员通过 `RESTful` 风格的接口来让前后分离
- 使用 `Ant Design` 快速的开发了前端界面

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
