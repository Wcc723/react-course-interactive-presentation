# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive slide presentation template for React teaching. Supports step-by-step navigation, code display with syntax highlighting, and preview functionality.

## Development Commands

```bash
pnpm dev      # Start development server
pnpm build    # TypeScript compile + Vite build
pnpm lint     # Run ESLint
pnpm preview  # Preview production build
```

## Tech Stack

- React 19 + Vite 7 + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite plugin)
- prism-react-renderer (code syntax highlighting)
- framer-motion (animations)

## Architecture

```
src/
├── types/slide.ts           # Core type definitions (Step, Preview, CodeBlock)
├── template/
│   ├── SlideTemplate.tsx    # Main slide layout component
│   └── index.ts
├── components/
│   ├── SlideHeader.tsx      # Title area
│   ├── PreviewArea.tsx      # Supports image/code-result/component
│   ├── NavigationControls.tsx
│   ├── CodeBlock.tsx        # Syntax highlighted code
│   ├── CodeTabs.tsx         # Multi-tab code switching
│   └── index.ts
└── data/exampleSlide.ts     # Example slide data
```

### Key Types

- `Preview`: Union type for `image | code-result | component` preview modes
- `CodeBlock`: Code snippet with language, optional filename, highlight lines
- `Step`: Single slide step with preview and code blocks
- `SlideTemplateProps`: Main component props (title + steps array)

### Component Pattern

SlideTemplate manages `currentStepIndex` state and renders:
- Left panel: Preview area + navigation
- Right panel: Code tabs + code blocks

PreviewArea renders based on preview type:
- `image`: `<img>` element
- `code-result`: Sandboxed iframe with HTML/CSS
- `component`: Direct React component render
