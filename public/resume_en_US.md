## 📧 Contract

- Mobile: [+86 176 2303 0229](<tel:(+86)17623030229>)
- Email: [hlm52pk@163.com](mailto:hlm52pk@163.com)
- WeChat: Mr\_\_Heer
- GitHub: [MrHeer](https://github.com/MrHeer)

---

## 🧑‍💻 About

- He Linming
- Bachelor
- Changsha University of Science & Technology
- Electronic Information Science and Technology

---

## ✨ Course

- [Algorithms, Part I | Coursera](https://www.coursera.org/learn/algorithms-part1)
- [Algorithms, Part II | Coursera](https://www.coursera.org/learn/algorithms-part2)
- [Interactive 3D Graphics](https://learn.udacity.com/courses/cs291)
- [Linear Algebra Refresher Course](https://learn.udacity.com/courses/ud953)
- [Responsive Web Design](https://www.freecodecamp.org/certification/mrheer/responsive-web-design)
- [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/certification/mrheer/javascript-algorithms-and-data-structures)
- [Front End Development Libraries](https://www.freecodecamp.org/certification/mrheer/front-end-development-libraries)
- [Data Visualization](https://www.freecodecamp.org/certification/mrheer/data-visualization)

---

## 🛠 Skill

- TypeScript / ReScript / Java / Dart / Rust / Go / C
- OOP / FP
- React / Angular / Vue / Flutter
- Recoil / Jotai / Redux / MobX
- Ramda / Lodash / D3 / fp-ts
- pnpm / yarn / npm
- Git
- Jest / Enzyme / Testing Library

---

## 🌈 Experience

### What am I doing during the gap period? ( 2023-03 ~ Now )

#### Road Trip

- The large loop line in Jiangsu, Zhejiang and Shanghai
- The small loop line in western Sichuan
- Jiuzhaigou - Ruoergai prairie

#### Game

- Sekiro: Shadows Die Twice(Platinum)
- Black Myth: Wukong(Platinum)
- ELDEN RING
- Red Dead Redemption 2
- Grand Theft Auto V

#### Open Source

- [Advent of Code 2023](https://github.com/MrHeer/advent-of-code)

  Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like

- [Advent of TypeScript 2023 | TypeHero](https://typehero.dev/aot-2023)

  A challenge about the `TypeScript` type system. You need to use the `TypeScript` type system to complete the daily questions.

- [matrix](https://github.com/MrHeer/matrix)

  A vector and matrix calculation library built with `Rust`

- [Image Locker](https://github.com/MrHeer/image-locker)

  A picture encryption tool built with `React` uses the `AES-256-GCM` encryption algorithm to encrypt pictures.

- Countdown

  A countdown widget.

  [countdown-gpui](https://github.com/MrHeer/countdown-gpui) - Built with [`GPUI`](https://www.gpui.rs/)

  [countdown](https://github.com/MrHeer/countdown) - Built with `Flutter`

### [Hangzhou Guofen Creative Design Co., Ltd](https://jiangziai.com/login) ( 2022-12 ~ 2023-03 ) **Head of Front-end**

#### Jiangzi Design

It based on `Canvas` and provides an intelligent online design platform. Generate a design drawing of a specified size by entering keywords or uploading images, and provide basic editing functions such as editing text, modifying colors, changing transparency, and moving position. The main technology stacks used are `React`, `Redux` and `Konva`.

- Use `TypeScript` to refactor the project to make it more stable
- Refactoring state structure to reduce unnecessary rendering and optimize performance. Optimization methods include the use of flatter data structures, finer `selectors`, smaller components
- Write development documents, introduce review mechanisms, and standardize the development process
- Develop the drag creation function, select the shape to drawn, and drag on the canvas to complete the creation. The data structure of the shape stored uniformly using the `path` string, which can increase the variety of shapes
- Develop PSD import function, use [ag-psd](https://github.com/Agamnentzar/ag-psd) to parse PSD files, use **pipeline patterns** to process data structures, and convert them into canvas board data structures. Use `Web Worker` to let the import process execute in the background to improve performance and user experience
- Design pen tool so users can create custom shapes. It mainly uses Canvas's `bezierCurveTo` API to draw curves, and `React Context` to achieve local state management

### [Hangzhou Shujian Technology Co., Ltd](https://sbuild.cn/) ( 2020-05 ~ 2022-12 ) **Senior Front-end Engineer**

#### MetaBuild

The tool enables offline project schedule management. It divided into three major modules: _Planning_, _Materials_ and _Inventory_ Management to achieve quantifiable project schedule management and help the construction industry build intelligently. The software based on the idea of **Local First** and supports localized editing. It also supports collaborative editing through `CRDT` and `RxDB`, etc.

- Design advanced filtering functionality like **Notion** (advanced dynamic forms and complex data structures [ReScript Variant](https://rescript-lang.org/docs/manual/latest/variant)), Allows users to customize filtering logic without the need for custom development of filtering functions, greatly enhancing the development efficiency of the team
- Design `UndoManager` to manage state history for `undo` `redo` functionality. It can integrated with state management, providing `useUndoCallback` and `useAtomCallback` together using a unified API, which makes it possible for users to apply it to their projects without learning costs
- Encapsulating `tree` to handle tree structures provides common methods to handle tree-structured data, allowing teams to improve development efficiency and reduced a lot of duplicate code
- Encapsulating [`contextFactory`](https://gist.github.com/MrHeer/f009afee88d84dbd02a2476d20b4a3a9) to create `React.Context`, reducing **90%** of repetitive code

  ```ts
  const [Provider, useValue, useValueUpdater] = contextFactory(initialValue);
  ```

- Develop common Hooks and Components
  - `useResize` - Handles drag events and implements `ResizableLayout` through it. Make it easy to change the size of the layout by dragging
  - `useSyncScroll` - synchronous scrolling of containers, simple API. Enables easy synchronized scrolling of containers
  - `useObserver` - implements a cross-component communication via the observer pattern. Easy to cross-component state management
  - `MotionList` - a list with motion effects, with _delete_, _add_, _move_, etc, Make every interaction look dynamic
- Use `framer-motion` `react-spring` [`FLIP`](https://aerotwist.com/blog/flip-your-animations/) and other motion technologies to enhance the user experience
- Use `Recoil` `Jotai` to manage the global state and update UI atomically, reduce unnecessary **rerender** of components and improve App performance
- Use `RxDB` `Electron` to enhance the **Local-First** experience
- Use `D3.js` to draw Gantt graphs
- Use [`Virtual`](https://tanstack.com/virtual/v3) scrolling technology to improve scrolling performance and support smooth display of large amounts of data

#### Beijing Urban Construction Project Management Platform

A project management platform serving Beijing Urban Construction and its subordinate projects. The main functions cover project progress, stuffs, material, log, document, and report management. Show the overview of each module through visualization technology.

### [Hangzhou tongxuema Technology Co., Ltd](http://www.hzcoding.com/) ( 2019-09 ~ 2020-04 ) **Algorithm Instructor**

- I am in charge of daily teaching in this company, mainly in `C++ / Scratch / Algorithms`. I am also good at using [`visualization`](https://visualgo.net/en) techniques to show the principles of algorithms in my classes to make it easier for students to understand them

### [Tuowei Information System Co., Ltd](https://www.talkweb.com.cn/) ( 2018-07 ~ 2019-07 ) **Software Engineer**

#### Anwei Unicom Big Data

- I was mainly responsible for maintaining the big data platform in this project, I developed a platform monitoring tool during the period, and with the help of Huawei leaders, I was able to read the relevant data of the platform, then analyze the data through `Python`, and generate a web page, through this monitoring tool can greatly improve the efficiency of operation and maintenance
- Anhui Mobile asked me for a visual data page, and through self-learning `React` and `Ant Design`, I was able to develop the front-end page. I also used `ECharts` to solve the data visualization from the leader

#### Hunan Mobile Crawler

- Independent of the front-end development tasks, I worked with the back-end staff to keep the front and back separate through a `RESTful` style interface
- Developed the front-end interface using `Ant Design`

### Hunan Source Technology Development Co., Ltd ( 2018-01 ~ 2018-07 ) **Software Engineer**

- Maintain the `Jave Web / Spring` web platform
- Develop `task distribution` and `location punching` functions for `Android` and `iOS` platforms

---

## ❤️ Contribution

- [Ant Design](https://github.com/ant-design/ant-design): a set of enterprise UI design language and `React` component library. Distilled from the interaction language and visual style of enterprise-class middle and backend products. High-quality `React` components out of the box. I've been following the project for a long time, solving problems on an ongoing basis, and ranking in the top **50** contributors. I've had the pleasure of being a **Collaborator** at the library
- [Mark Text](https://github.com/marktext/marktext): a simple and elegant open source `Markdown` editor, focused on speed and usability. Available for Linux, macOS, and Windows. I've been following the project for a long time, consistently solving problems, and have a top **5** contribution ranking

---

## 🧗🏼 Adventure

- [Advent of Code 2023](https://adventofcode.com/2023)
- [Advent of TypeScript 2023 | TypeHero](https://typehero.dev/aot-2023)

---

## 📖 Reading

- _Algorithms_
- _Code Complete: A Practical Handbook of Software Construction_
- _Clean Code: A Handbook of Agile Software Craftsmanship_
- _Designing Data-Intensive Applications_
- _Dive Into Design Patterns_
- _Dive Into Refactoring_
- _Mostly adequate guide to FP_
