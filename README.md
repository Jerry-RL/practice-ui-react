# practice-ui-react
A React UI library for personal practice, use with caution in projects

## Technical Solution

### 1. Technology Stack
- **Core Framework**: React 19+
- **Styling Solution**: PostCSS + Autoprefixer
- **Type System**: TypeScript 5.7+
- **State Management**: (Optional - not included in current dependencies)
- **Routing Management**: (Optional - not included in current dependencies)
- **Testing Solution**:
  - Unit Testing: Jest + React Testing Library
  - Accessibility Testing: jest-axe
- **Build Tools**: Vite + Rollup
- **Code Standards**: ESLint + Prettier + Husky + lint-staged
- **Documentation Tools**: Storybook + Chromatic
- **Version Management**: standard-version
- **Commit Standards**: commitizen + cz-conventional-changelog

### 2. Component Design Principles
- **Atomic Design**: Adopt Atomic Design philosophy, dividing components into Atoms, Molecules, Organisms, Templates, and Pages
- **Single Responsibility**: Each component handles a single responsibility
- **Composability**: Components can be flexibly combined
- **Customizability**: Control component behavior through props, support theme customization
- **Accessibility**: Follow WAI-ARIA standards

### 3. Directory Structure
```

├── assets/ # Static resources
├── components/ # Base components
│ ├── Button/ # Button component
│ ├── Input/ # Input component
│ └── ... # Other components
├── hooks/ # Custom hooks
├── styles/ # Global styles
├── utils/ # Utility functions
├── theme/ # Theme configuration
└── index.ts # Entry file
```

### 4. Development Standards
- Use PascalCase for component naming
- Define component props using TypeScript
- Each component should have accompanying Storybook documentation
- Follow Semantic Versioning (SemVer)
- Commit messages follow Conventional Commits specification
- Use lint-staged for pre-commit checks
- Format code with Prettier
- Enforce code quality with ESLint

### 5. Performance Optimization
- Use React.memo for component rendering optimization
- Use useMemo/useCallback for computation and callback optimization
- Implement lazy loading for components (React.lazy)
- Use code splitting
- Implement virtual lists for large data rendering optimization

### 6. Testing Strategy
- Unit test coverage >= 80%
- 100% test coverage for core components
- Use @testing-library/user-event for interaction testing
- Use Storybook + Chromatic for visual regression testing
- Automatically run tests in continuous integration

### 7. Release Process
1. Develop new features/fix bugs
2. Write test cases
3. Update documentation and examples
4. Run all tests
5. Update version number using `npm run release`
6. Generate CHANGELOG
7. Publish to npm
8. Update online documentation

### 8. Development Scripts
#### bash
##### Lint code
`npm run lint`
##### Format code
`npm run format`
##### Prepare git hooks
`npm run prepare`
##### Create new release
`npm run release`

### 9. Dependencies
The project uses modern development tools including:
- React 19
- TypeScript 5.7
- Vite 6
- Storybook 8
- Jest 29
- ESLint 8
- Prettier 3
- Husky 9
- standard-version 9

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
