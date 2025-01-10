# practice-ui-react
一个用于个人练习的 React UI 库，项目中请谨慎使用

## 技术方案

### 1. 技术栈
- **核心框架**: React 19+
- **样式方案**: PostCSS + Autoprefixer
- **类型系统**: TypeScript 5.7+
- **状态管理**: (可选 - 当前依赖中未包含)
- **路由管理**: (可选 - 当前依赖中未包含)
- **测试方案**:
  - 单元测试: Jest + React Testing Library
  - 可访问性测试: jest-axe
- **构建工具**: Vite + Rollup
- **代码规范**: ESLint + Prettier + Husky + lint-staged
- **文档工具**: Storybook + Chromatic
- **版本管理**: standard-version
- **提交规范**: commitizen + cz-conventional-changelog

### 2. 组件设计原则
- **原子设计**: 采用原子设计理念，将组件分为原子、分子、有机体、模板和页面
- **单一职责**: 每个组件只处理单一职责
- **可组合性**: 组件可以灵活组合
- **可定制性**: 通过 props 控制组件行为，支持主题定制
- **可访问性**: 遵循 WAI-ARIA 标准

### 3. 目录结构
```
├── assets/ # 静态资源
├── components/ # 基础组件
│ ├── Button/ # 按钮组件
│ ├── Input/ # 输入组件
│ └── ... # 其他组件
├── hooks/ # 自定义 hooks
├── styles/ # 全局样式
├── utils/ # 工具函数
├── theme/ # 主题配置
└── index.ts # 入口文件
```
### 4. 开发规范
- 使用 PascalCase 命名组件
- 使用 TypeScript 定义组件 props
- 每个组件应有相应的 Storybook 文档
- 遵循语义化版本控制 (SemVer)
- 提交信息遵循 Conventional Commits 规范
- 使用 lint-staged 进行提交前检查
- 使用 Prettier 格式化代码
- 使用 ESLint 保证代码质量

### 5. 性能优化
- 使用 React.memo 优化组件渲染
- 使用 useMemo/useCallback 优化计算和回调
- 实现组件懒加载 (React.lazy)
- 使用代码分割
- 实现虚拟列表优化大数据渲染

### 6. 测试策略
- 单元测试覆盖率 >= 80%
- 核心组件 100% 测试覆盖率
- 使用 @testing-library/user-event 进行交互测试
- 使用 Storybook + Chromatic 进行视觉回归测试
- 在持续集成中自动运行测试

### 7. 发布流程
1. 开发新功能/修复 bug
2. 编写测试用例
3. 更新文档和示例
4. 运行所有测试
5. 使用 `npm run release` 更新版本号
6. 生成 CHANGELOG
7. 发布到 npm
8. 更新在线文档

### 8. 开发脚本
#### bash
##### 代码检查
`npm run lint`
##### 代码格式化
`npm run format`
##### 准备 git hooks
`npm run prepare`
##### 创建新版本
`npm run release`

### 9. 依赖项
项目使用现代开发工具，包括：
- React 19
- TypeScript 5.7
- Vite 6
- Storybook 8
- Jest 29
- ESLint 8
- Prettier 3
- Husky 9
- standard-version 9
