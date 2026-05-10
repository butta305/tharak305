# Learn Playwright

A comprehensive learning repository for mastering Playwright automation testing framework, along with essential JavaScript basics and development tools.

## 📚 Project Overview

This repository contains structured learning materials organized into chapters, covering:
- **Playwright Basics**: Getting started with browser automation
- **JavaScript Fundamentals**: Core concepts and commands
- **Development Tools**: VS Code shortcuts and Git workflows

## 📁 Project Structure

```
LearnPlaywright/
├── chapter_01_Basics/          # Introduction to Playwright
│   ├── 01_Basics.js           # Hello World example
│   ├── 02_JSCommands.js       # JavaScript process commands
│   ├── 04_HotCode.js          # Hot reloading concepts
│   └── JS.js                  # JavaScript basics
├── chapter_02_Basics/         # Advanced Playwright concepts
│   └── JS_Basics-01.js        # JavaScript fundamentals
├── chapter_03_Keywords/       # JavaScript keywords and rules
│   ├── 01_IdentifierRules1.js
│   ├── 02_IdentifierRules2.js
│   ├── 03_JSIdentifierRules.js
│   └── comments.js
└── VSCode_Shortcuts/          # Development tools
    ├── Keyboard_Shortcuts.js  # VS Code shortcuts
    └── gitcommands.js         # Git workflow commands
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/LearnPlaywright.git
   cd LearnPlaywright
   ```

2. Install Playwright:
   ```bash
   npm install playwright
   ```

3. Install browsers (optional):
   ```bash
   npx playwright install
   ```

## 📖 Learning Path

### Chapter 1: Basics
- **01_Basics.js**: Your first Playwright script
- **02_JSCommands.js**: Understanding Node.js environment
- **04_HotCode.js**: Development workflow concepts
- **JS.js**: JavaScript language introduction

### Chapter 2: Advanced Basics
- **JS_Basics-01.js**: Deep dive into JavaScript fundamentals

### Chapter 3: Keywords & Rules
- Identifier naming rules and conventions
- JavaScript reserved keywords
- Commenting best practices

### Development Tools
- **VSCode_Shortcuts**: Essential keyboard shortcuts for productivity
- **Git Commands**: Complete Git workflow for version control

## 🛠️ Usage

Each JavaScript file can be run individually:

```bash
node chapter_01_Basics/01_Basics.js
```

For Playwright-specific scripts, use:
```bash
npx playwright test
```

## 📋 Git Workflow

This repository includes a complete Git workflow guide in `VSCode_Shortcuts/gitcommands.js`:

```bash
# Initialize repository
git init

# Add and commit changes
git add .
git commit -m "Your message"

# Push to GitHub
git push origin main
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

If you have questions or suggestions, feel free to open an issue or reach out!

---

**Happy Learning! 🎉**