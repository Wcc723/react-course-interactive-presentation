# 互動式簡報開發指南

這是一個 React 教學用的互動式簡報版型，支援步驟切換、程式碼展示、即時預覽與互動操作功能。

---

## 專案結構

```
src/
├── types/slide.ts           # 核心型別定義
├── template/
│   ├── SlideTemplate.tsx    # 主版型組件
│   └── index.ts
├── components/
│   ├── SlideHeader.tsx      # 標題區（含選單按鈕）
│   ├── PreviewArea.tsx      # 預覽區
│   ├── NavigationControls.tsx
│   ├── CodeBlock.tsx        # 程式碼區塊
│   ├── CodeTabs.tsx         # 多 Tab 切換
│   ├── MenuButton.tsx       # 課程選單按鈕
│   └── index.ts
├── pages/
│   └── Home.tsx             # 課程首頁
├── data/
│   └── courses.ts           # 課程列表資料
└── week1/                   # 課程簡報（依週分類）
    └── 關注點分離/
        ├── index.tsx        # 入口組件
        ├── slides.ts        # 簡報資料
        ├── diagrams.tsx     # SVG 圖示組件
        └── demos.tsx        # 互動示範組件
```

---

## 核心型別

### Step（步驟）

```typescript
interface Step {
  id: string;            // 唯一識別碼
  title: string;         // 步驟標題（顯示在 Header）
  description?: string;  // 步驟說明文字
  preview: Preview;      // 預覽內容
  codeBlocks?: CodeBlock[]; // 程式碼區塊（可選，省略時為滿版預覽）
}
```

### Preview（預覽類型）

```typescript
type Preview =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'code-result'; html: string; css?: string }
  | { type: 'component'; component: React.ComponentType };
```

### CodeBlock（程式碼區塊）

```typescript
interface CodeBlock {
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'jsx' | 'tsx';
  code: string;
  filename?: string;         // 顯示檔案名稱
  highlightLines?: number[]; // 高亮指定行號
}
```

---

## 兩種版型模式

### 1. 左右分割模式（預設）

當 `codeBlocks` 有內容時，左側顯示預覽，右側顯示程式碼。

```
┌──────────────────────────────────────────────────────────┐
│  [課程▾] │ 簡報標題                        步驟 1/6      │
├────────────────────────────┬─────────────────────────────┤
│                            │  步驟說明文字               │
│      預覽區域              ├─────────────────────────────┤
│   (圖示/HTML/組件)         │  [Tab1] [Tab2]              │
│                            │   程式碼區域                │
│                            │   (語法高亮)                │
├────────────────────────────┴─────────────────────────────┤
│  [← 上一步]        ● ● ● ● ● ●        [下一步 →]        │
└──────────────────────────────────────────────────────────┘
```

### 2. 滿版預覽模式

當 `codeBlocks` 省略或為空陣列時，預覽區域佔滿整個寬度，適合互動示範。

```
┌──────────────────────────────────────────────────────────┐
│  [課程▾] │ 簡報標題                        步驟 3/6      │
├──────────────────────────────────────────────────────────┤
│  步驟說明文字                                            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                    滿版預覽區域                          │
│                 (互動組件/大型圖示)                      │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  [← 上一步]        ● ● ● ● ● ●        [下一步 →]        │
└──────────────────────────────────────────────────────────┘
```

---

## 新增課程完整流程

### 步驟 1：建立課程目錄結構

```
src/weekN/課程名稱/
├── index.tsx      # 入口組件
├── slides.ts      # 簡報資料
├── diagrams.tsx   # SVG 圖示組件（選用）
└── demos.tsx      # 互動示範組件（選用）
```

### 步驟 2：建立 SVG 圖示組件 (`diagrams.tsx`)

用於說明概念的靜態圖示：

```tsx
// 使用米黃色背景配色
export function ConceptDiagram() {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300">
      {/* 背景 */}
      <rect width="400" height="300" fill="#fffdf8" />

      {/* 方塊元素 */}
      <rect x="50" y="50" width="120" height="60" rx="8" fill="#3b82f6" />
      <text x="110" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
        標題文字
      </text>

      {/* 箭頭 */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
      </defs>
      <path d="M170,80 L230,80" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
  );
}
```

**常用配色：**
- 背景：`#fffdf8`（米黃）
- 藍色方塊：`#3b82f6`
- 綠色方塊：`#10b981`
- 橘色方塊：`#f59e0b`
- 紅色警告：`#ef4444`
- 文字灰：`#78716c`

### 步驟 3：建立互動示範組件 (`demos.tsx`)

用於讓學員實際操作體驗的互動組件：

```tsx
import { useState } from 'react';

export function InteractiveDemo() {
  const [value, setValue] = useState('初始值');

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-6 p-4 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>操作說明：</strong>這裡說明如何互動...
        </p>
      </div>

      {/* 互動區域 */}
      <div className="grid grid-cols-2 gap-4">
        {/* UI 展示卡片 */}
        <div className="p-4 rounded-xl border-2 border-stone-200 bg-white">
          <div className="text-xs text-stone-400 mb-1">區域名稱</div>
          <div className="text-lg font-semibold text-stone-800">{value}</div>
        </div>
      </div>

      {/* 操作按鈕 */}
      <div className="mt-6 p-4 bg-stone-100 rounded-xl">
        <button
          onClick={() => setValue('新值')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          更新
        </button>
      </div>
    </div>
  );
}
```

### 步驟 4：建立簡報資料 (`slides.ts`)

```typescript
import type { Step } from '../../types/slide';
import { ConceptDiagram } from './diagrams';
import { InteractiveDemo } from './demos';

export const slideTitle = '課程標題';

export const steps: Step[] = [
  // 一般模式：左右分割（圖示 + 程式碼）
  {
    id: 'concept',
    title: '概念說明',
    description: '這是概念的說明文字...',
    preview: {
      type: 'component',
      component: ConceptDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: 'example.js',
        code: `// 範例程式碼
const example = 'hello';`,
        highlightLines: [2],
      },
    ],
  },

  // 滿版模式：互動示範（無程式碼）
  {
    id: 'interactive',
    title: '實際體驗',
    description: '試試看：操作下方的互動元件...',
    preview: {
      type: 'component',
      component: InteractiveDemo,
    },
    // 省略 codeBlocks 即為滿版預覽
  },
];
```

### 步驟 5：建立入口組件 (`index.tsx`)

```tsx
import { SlideTemplate } from '../../template';
import { slideTitle, steps } from './slides';

export function CourseSlide() {
  return <SlideTemplate title={slideTitle} steps={steps} />;
}

export { slideTitle, steps } from './slides';
```

### 步驟 6：註冊課程

在 `src/data/courses.ts` 加入：

```typescript
{
  id: 'course-id',
  week: 1,
  title: '課程標題',
  path: '/week1/course-id',
  description: '課程簡短描述',
},
```

### 步驟 7：設定路由

在 `src/App.tsx` 加入：

```tsx
import { CourseSlide } from './week1/課程名稱';

<Route path="/week1/course-id" element={<CourseSlide />} />
```

---

## Preview 類型詳解

### 1. 圖片預覽

```typescript
preview: {
  type: 'image',
  src: '/images/diagram.png',
  alt: '圖片說明'
}
```

### 2. HTML/CSS 即時渲染

在 iframe sandbox 中渲染，適合展示純 HTML/CSS 效果：

```typescript
preview: {
  type: 'code-result',
  html: `<button class="btn">按鈕</button>`,
  css: `.btn {
    padding: 12px 24px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
  }`
}
```

### 3. React 組件預覽

直接渲染 React 組件，適合 SVG 圖示和互動元件：

```typescript
import { MyComponent } from './diagrams';

preview: {
  type: 'component',
  component: MyComponent
}
```

---

## 功能說明

### 導航方式
- **按鈕**：「上一步」「下一步」
- **鍵盤**：`←` 上一步、`→` 下一步

### 課程選單
左上角「課程」按鈕可快速切換課程或返回首頁

### 程式碼 Tab
多個 `codeBlocks` 時自動顯示 Tab 切換

### 行號高亮
```typescript
highlightLines: [2, 3, 5]  // 高亮第 2、3、5 行
```

---

## 範例參考

參考 `src/week1/關注點分離/` 目錄：

| 檔案 | 說明 |
|------|------|
| `slides.ts` | 6 個步驟的簡報資料 |
| `diagrams.tsx` | 4 個 SVG 概念圖示 |
| `demos.tsx` | 2 個互動示範組件 |
| `index.tsx` | 入口組件 |

**簡報結構：**
1. 概念說明（圖示 + 程式碼）
2. 問題說明（圖示 + 程式碼）
3. **互動體驗（滿版）**
4. 解決方案（圖示 + 程式碼）
5. 優點說明（圖示 + 程式碼）
6. **互動體驗（滿版）**

這種「說明 → 體驗」的交替模式，有助於學員理解概念後立即實作驗證。
