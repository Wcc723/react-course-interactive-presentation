# 互動式簡報專案實作計劃

## 專案概述
建立 React 教學用的互動式簡報版型，支援步驟切換、程式碼展示與預覽功能。

## 技術環境
- React 19 + Vite 7 + Tailwind CSS v4 + TypeScript
- 程式碼高亮：prism-react-renderer
- 動畫效果：framer-motion

## 設計決策
- **配色方案**：淺色主題
- **動畫效果**：步驟切換淡入淡出
- 簡單，大氣，可參考 Material Design 設計風格

---

## 版型設計

```
┌──────────────────────────────────────────────────────────┐
│  Header: 簡報標題                          步驟 1/5      │
├────────────────────────────┬─────────────────────────────┤
│                            │  ┌─────────────────────────┐│
│                            │  │ [HTML] [CSS] [React]    ││
│      預覽區域              │  ├─────────────────────────┤│
│   (圖片/程式碼結果/組件)   │  │                         ││
│                            │  │   程式碼區域            ││
│                            │  │   (語法高亮)            ││
│                            │  │                         ││
├────────────────────────────┤  │                         ││
│  [← 上一步]  1/5  [下一步 →]│  └─────────────────────────┘│
└────────────────────────────┴─────────────────────────────┘
```

---

## 檔案結構

```
src/
├── types/
│   └── slide.ts               # 型別定義
├── template/
│   ├── index.ts               # 匯出入口
│   └── SlideTemplate.tsx      # 主版型組件
├── components/
│   ├── index.ts               # 匯出入口
│   ├── SlideHeader.tsx        # 標題區
│   ├── PreviewArea.tsx        # 預覽區 (支援 image/code-result/component)
│   ├── NavigationControls.tsx # 導航按鈕
│   ├── CodeBlock.tsx          # 程式碼區塊 (含高亮)
│   └── CodeTabs.tsx           # 多 Tab 切換
└── data/
    └── exampleSlide.ts        # 範例資料
```

---

## 實作步驟

### Phase 1: 基礎架構
1. [ ] 安裝 prism-react-renderer 和 framer-motion
2. [ ] 建立 `/src/types/slide.ts` - 核心型別定義
3. [ ] 建立 `/src/template/SlideTemplate.tsx` - 主版型
4. [ ] 建立 `/src/template/index.ts` - 匯出

### Phase 2: 組件開發
5. [ ] 建立 `/src/components/SlideHeader.tsx`
6. [ ] 建立 `/src/components/NavigationControls.tsx`
7. [ ] 建立 `/src/components/CodeBlock.tsx` - 整合 prism-react-renderer
8. [ ] 建立 `/src/components/CodeTabs.tsx`
9. [ ] 建立 `/src/components/PreviewArea.tsx`
10. [ ] 建立 `/src/components/index.ts` - 匯出

### Phase 3: 資料與整合
11. [ ] 建立 `/src/data/exampleSlide.ts` - 範例資料
12. [ ] 整合測試完整流程

### Phase 4: 增強功能
13. [ ] 鍵盤快捷鍵 (左右箭頭切換步驟)

---

## 核心型別定義

```typescript
// 預覽類型
type Preview =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'code-result'; html: string; css?: string }
  | { type: 'component'; component: React.ComponentType };

// 程式碼區塊
interface CodeBlock {
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'jsx' | 'tsx';
  code: string;
  filename?: string;
  highlightLines?: number[];
}

// 步驟
interface Step {
  id: string;
  title: string;
  description?: string;
  preview: Preview;
  codeBlocks: CodeBlock[];
}

// 簡報 Props
interface SlideTemplateProps {
  title: string;
  steps: Step[];
}
```

---

## 關鍵實作

### State 管理 (SlideTemplate)
```typescript
const [currentStepIndex, setCurrentStepIndex] = useState(0);
const currentStep = steps[currentStepIndex];
const hasPrev = currentStepIndex > 0;
const hasNext = currentStepIndex < steps.length - 1;
```

### PreviewArea 三種類型
- `image`: 顯示圖片 (`<img>`)
- `code-result`: iframe sandbox 渲染 HTML/CSS
- `component`: 直接渲染 React 組件

### CodeBlock 高亮
使用 prism-react-renderer + themes.github (淺色主題)

### 步驟切換動畫 (framer-motion)
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={currentStepIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    {/* 內容 */}
  </motion.div>
</AnimatePresence>
```

---

## 需安裝套件
```bash
pnpm add prism-react-renderer framer-motion
```
