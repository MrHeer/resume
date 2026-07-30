---
title: "Resume - Linming He"
description: "Linming He — Full-Stack Developer with expertise in React, TypeScript, Node.js, and cloud-native architectures. View my professional experience, projects, and contact information."
---

## 📧 Contact Information

- Mobile: [+86 176 2303 0229](tel:+8617623030229)
- Email: [hlm52pk@163.com](mailto:hlm52pk@163.com)
- WeChat: Mr\_\_Heer
- GitHub: [MrHeer](https://github.com/MrHeer)

---

## 🧑‍💻 Personal Information

- Linming He
- Bachelor's Degree
- Changsha University of Science and Technology
- Electronic Information Science and Technology

---

## ✨ Online Courses

- **Algorithms & Data Structures**: [Coursera - Algorithms Part I & II](https://www.coursera.org/learn/algorithms-part1) (Completed 15+ programming practices, in-depth study of graph theory and string algorithms)
- **Front-end Certifications**: [freeCodeCamp](https://www.freecodecamp.org/certification/mrheer/) (Responsive Design, JS Algorithms, React Libraries, Data Visualization, 50+ challenges completed)
- **Linear Algebra**: [Udacity - Linear Algebra Refresher](https://learn.udacity.com/courses/ud953)

---

## 🛠 Tech Stack

### Front-end Development

- **Frameworks**: React / Next.js / Vue 3 / Angular / Flutter
- **State Management**: Recoil / Jotai / Redux / MobX
- **UI Components**: shadcn/ui (React + Vue), Ant Design, Forui
- **Visualization**: D3.js, ECharts
- **Animation**: motion / react-spring / FLIP

### Engineering

- **Languages**: TypeScript / Dart / Rust / ReScript / Java / Go / C
- **Utilities**: Ramda / Lodash / fp-ts
- **Testing**: Jest / Enzyme / Testing Library
- **Build Tools**: pnpm / yarn / npm / Turborepo

### Infrastructure

- **Version Control**: Git (branch management, Rebase, Cherry-pick)
- **Runtimes**: Tokio (async), Electron
- **Database**: RxDB (Local First)

---

## 🌈 Work Experience

### Shuihua Group (2025 ~ Now) **Senior Front-end Engineer**

#### [Compute Platform](https://do.top)

Turborepo Monorepo project that aggregates multiple large language model APIs and provides a unified calling interface.

- Designed and led the entire front-end and back-end architecture: front-end based on **TanStack Start**, back-end based on **NestJS**, adopting microservices architecture design, clarifying service boundaries and communication protocols
- Designed billing system architecture: recording usage based on API Key, supporting per-token and per-request billing
- Designed API Key management mechanism: implementing key generation, permission control, usage statistics, and quota management
- Designed GPU configuration management page: displaying GPU resource usage and supporting configuration modification
- Implemented model detail page: displaying model parameters, performance metrics, and call statistics
- Developed chat feature: integrating multi-model switching, context management, and streaming responses
- Exposed gRPC services for internal system calls
- Encapsulated Proto package: defining unified data structures and interface specifications

#### Market Data

Real-time market data processing system that receives third-party market data through trans_sdk, converts it to protobuf format, and distributes it to multiple downstream message queues.

- Designed and implemented Per-Symbol Task architecture: allocating independent sending tasks for each trading symbol to ensure message ordering within the same symbol, **improving system throughput**
- Designed Fallback mechanism: caching messages locally during disconnection and sending them in order after recovery to ensure zero data loss
- Implemented high-performance data processing based on [Tokio](https://tokio.rs) async runtime
- Called Qianlong Market Data SDK via FFI (C++), fixed `.so` dynamic library RPATH compatibility issues
- Supported multiple message queue publishing: Kafka (lz4 compression, idempotent sending), ZMQ (multi-part messages), File (CSV format with automatic rotation)
- Implemented Lifecycle graceful shutdown mechanism to coordinate orderly exit of all workers
- Used `Decimal` type instead of `f64` for precise financial calculations

#### Unified Component Library

A unified UI component library built on [shadcn/ui](https://ui.shadcn.com) for sharing across multiple projects within the group.

- Designed and implemented a common business component library: Combobox, DataTable, Tabs, Button, etc.
- Built Tree utility library: providing methods for tree-structured data operations, supporting function extension through `compose` pattern, **improving development efficiency**
- Implemented advanced table features including column pinning, sorting, and filtering
- Encapsulated FilterTree function: supporting recursive tree data filtering, **improving filtering efficiency**
- Components comply with accessibility standards, supporting keyboard navigation and focus management

#### Data Center

Options trading data center management platform for real-time monitoring and management of options trading data.

- Built high-performance web application based on `Next.js 16` + `React 19` + `TypeScript`
- Designed collapsible tree view to display order hierarchy, supporting nested sub-order expansion/collapse, **improving order location efficiency**
- Implemented K-line chart component: supporting multi-timeframe switching, zoom control, and tooltip positioning
- Added one-click position liquidation feature: batch processing position data, supporting strategy selection and price range limits
- Developed price input dirty tracking mechanism: preventing user manual edits from being overwritten, **improving user experience**
- Implemented order auto-refresh: periodically fetching the latest order and trade data
- Designed sortable columns with color coding: distinguishing order types (normal/cancelled/filled), **improving data readability**

#### Channel Management

Channel configuration management system for managing channel parameter configuration and log monitoring.

- Designed complex parameter configuration management architecture: implementing flexible field configuration based on dynamic form engine, **significantly improving development efficiency**
- Designed and implemented channel configuration page: supporting batch configuration, parameter validation, and real-time preview
- Developed channel log page: displaying channel operation logs in real-time, supporting time range filtering
- Implemented responsive layout: adapting to desktop and mobile

### Independent Developer (2023 ~ 2025)

#### Quirk Lab

- [Official Website](https://quirk-lab.com)

  Built a responsive official website based on `Next.js`, implemented automated server deployment using `Ansible` to reduce operation and maintenance costs and improve website iteration efficiency. Integrated the [`motion`](https://motion.dev/docs/react) animation library to achieve interactive feedback and enhance user experience.

- Card Game Scorekeeper

  Developed a WeChat mini-program using [`Weapp-vite`](https://vite.icebreaker.top), designed an intelligent scoring algorithm that supports custom rules for multiple card types. Completely independently designed and developed a WeChat native component library.

- XShot

  Developed a desktop screenshot tool using the Flutter cross-platform framework, implemented personalized editing functions such as margins, rounded corners, and shadows, integrated a color extraction algorithm, and automatically generated gradient backgrounds.

- [zed-moonbit](https://github.com/quirk-lab/zed-moonbit)

  Developed a `Zed` editor plugin based on the Rust language to implement syntax highlighting and intelligent completion functions for the [`MoonBit`](https://www.moonbitlang.cn) language.

#### Open Source Projects

- [Image Locker](https://github.com/MrHeer/image-locker)

  An image encryption tool built with React, which uses the `AES-256-GCM` encryption algorithm to encrypt images. Implemented multiple filter algorithms and can easily add new filters. Integrated the [`motion`](https://motion.dev/docs/react) animation library to achieve rich and smooth interactive feedback.

- [undo](https://github.com/XFreeCoder/undo)

  A framework-agnostic undo/redo tool that provides a simple solution for integrating `undo` and `redo` functions.

- [matrix](https://github.com/MrHeer/matrix)

  A vector and matrix calculation library implemented in Rust, supporting over 20 operations such as matrix multiplication and transposition, with 100% unit test coverage.

#### Challenge Projects

- [Advent of Code 2023](https://github.com/MrHeer/advent-of-code)

  An Advent calendar of small programming puzzles suitable for various skills and skill levels, which can be solved using any programming language you like. Completed all 25 days of programming puzzles using Rust.

- [Advent of TypeScript 2023 | TypeHero](https://typehero.dev/aot-2023)

  A challenge about the TypeScript type system, where you need to use TypeScript's type system to complete daily tasks. Completed 25 days of TypeScript type system challenges and implemented advanced type tools (such as recursive types, conditional types).

#### Part-time Projects

- [Jiangzi](https://jiangziai.com)

  An intelligent online design platform based on `React` + `Redux` + `Konva`, supporting keyword/image-generated design drawings and multi-dimensional editing.

  - Led TypeScript refactoring, eliminated **70%** of potential type errors, improved project stability by **40%**
  - Reconstructed state structure (flat data + fine-grained `Selector`), reduced page rendering time by **60%**, improved operation response speed by **50%**
  - Designed drag-and-drop creation, uniformly using `path` strings for shape data, reducing new shape type development cost by **80%**
  - Implemented PSD import: pipeline pattern for data transformation, Web Worker for background processing, reduced large file (100MB+) import time by **75%**
  - Developed pen tool with `bezierCurveTo`, improved custom shape creation efficiency by **40%**

- [AI Buddhism](https://main.d3l91sjomlbpp7.amplifyapp.com)

  Full-stack AI chat and Buddhist scripture reading app. Vue3 version with AppKit wallet integration; Flutter version using Forui, GraphQL for backend communication.

- [ACS Dashboard](https://acs-dashboard.pages.dev)

  Data dashboard system based on `Vue3` + `shadcn/vue` + `tanstack/vue-query`, real-time monitoring of projects and server data. View Transition API for smooth page transitions.

### [Hangzhou Shujian Technology Co., Ltd.](https://sbuild.cn) (2020 ~ 2023) **Senior Front-end Engineer**

#### Yuanzhu Tool

This tool realizes offline project schedule management. It is divided into three modules: _plan formulation_, _material management_ and _list management_, realizing quantifiable project progress management and helping the construction industry with intelligent construction. The software is based on the idea of **Local First** and supports localized editing. At the same time, collaborative editing functions are realized through `RxDB`.

- Designed an advanced filtering function similar to **Notion** (advanced dynamic forms and complex data structures [ReScript Variant](https://rescript-lang.org/docs/manual/latest/variant)), supporting more than 80% of custom filtering requirements, reducing 90% of customized development workload, and improving team development efficiency by 50%.
- Designed `UndoManager` to manage state history, so as to realize `undo` / `redo` functions, which are seamlessly integrated with state management (API is 100% consistent with `useAtomCallback`), so that users have no learning cost and can quickly apply it to projects.
- Encapsulated `Tree` to process tree structures, providing a large number of common methods to process tree-structured data. Through the idea of functional programming, abstract `Operation` and use the `compose` mode to quickly and simply expand functions, which increased the team's development speed by 40%.
- Encapsulated [`contextFactory`](https://gist.github.com/MrHeer/f009afee88d84dbd02a2476d20b4a3a9) to quickly create `React.Context`, reducing 90% of duplicate code.

  ```ts
  const [Provider, useValue, useValueUpdater] = contextFactory(initialValue);
  ```

- Encapsulated commonly used Hooks and Components
  - `useResize` - Handles drag events, through which `ResizableLayout` is realized, making layouts that change size through dragging easy to implement.
  - `useSyncScroll` - Synchronizes scrolling of multiple containers, with a very simple API, easy to use, and can easily realize synchronous scrolling of multiple containers.
  - `useObserver` - Realized a cross-component communication function through the observer pattern, which can easily realize cross-component state management.
  - `MotionList` - A list with motion effects, with various motion effects such as deletion, addition, and movement, making each interaction look very flexible.
- Used motion technologies such as [`motion`](https://motion.dev/docs/react) / [`react-spring`](https://react-spring.dev) / [`FLIP`](https://aerotwist.com/blog/flip-your-animations) to improve user experience.
- Used `Recoil` and `Jotai` to manage global states, atomically update the UI, reduce unnecessary **rerenders** of components, and improve App performance.
- Used `RxDB` and `Electron` to improve the **Local First** experience.
- Used `D3.js` to draw Gantt charts.
- Used [`Virtual`](https://tanstack.com/virtual/v3) virtual scrolling technology to improve scrolling performance and support smooth display of large amounts of data.

#### Beijing Urban Construction Engineering Management Platform

A project management platform serving Beijing Urban Construction authorities and their subordinate projects. The main functions include: project progress, personnel, materials, logs, documents, and report management. Visualization technology is used to display the overview of each module.

### [Talkweb Information System Co., Ltd.](https://www.talkweb.com.cn) (2018 ~ 2020) **Software Engineer**

#### Anhui Unicom Big Data Project

- Responsible for big data platform maintenance, developed platform monitoring tools: connected to Huawei data interfaces, analyzed data with `Python` and generated visual web pages, improved operation and maintenance efficiency by 80%, and shortened fault response time from 2 hours to 10 minutes.
- Independently developed Anhui Mobile data visualization pages: self-learned `React` + `Ant Design`, delivered 3 core pages within 7 days, realized more than 10 chart displays with `ECharts`, met the needs of leadership decision-making, and received written praise from customers.

#### Hunan Mobile Crawler Project

Independently responsible for front-end development, adopted `RESTful` interfaces to realize front-end and back-end separation, quickly built interfaces based on `Ant Design`, and completed core function development within 3 weeks.

---

## ❤️ Open Source Contributions

- [Ant Design](https://github.com/ant-design/ant-design): **Top 50** contributor, former Collaborator
- [Mark Text](https://github.com/marktext/marktext): **Top 5** contributor

---

## 🧗🏼 Programming Challenges

- [Advent of Code 2023](https://adventofcode.com/2023) - Completed all 25 days of programming puzzles in Rust
- [Advent of TypeScript 2023 | TypeHero](https://typehero.dev/aot-2023) - Completed 25 days of TypeScript type system challenges

---

## 📖 Reading List

_Algorithms_ · _Code Complete_ · _Clean Code_ · _Designing Data-Intensive Applications_ · _Dive Into Design Patterns_ · _Dive Into Refactoring_ · _Mostly Adequate Guide to FP_
