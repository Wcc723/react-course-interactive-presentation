# 互動式簡報使用指南

這是一個 React 教學用的互動式簡報版型，支援步驟切換、程式碼展示與即時預覽功能。

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
        └── diagrams.tsx     # SVG 圖示
```

## 路由結構

| 路徑 | 頁面 |
|------|------|
| `/` | 課程首頁（列出所有課程） |
| `/week1/separation-of-concerns` | Week 1 - 關注點分離 |

## 新增課程

### 步驟 1：建立課程目錄

```
src/week1/新課程名稱/
├── index.tsx      # 入口組件
├── slides.ts      # 簡報資料
└── diagrams.tsx   # SVG 圖示（選用）
```

### 步驟 2：建立簡報資料 (`slides.ts`)

```typescript
import type { Step } from '../../types/slide';

export const slideTitle = '課程標題';

export const steps: Step[] = [
  {
    id: 'step-1',
    title: '步驟標題',
    description: '步驟說明文字',
    preview: {
      type: 'code-result',
      html: '<div>預覽內容</div>',
      css: '/* CSS 樣式 */',
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'Example.tsx',
        code: `// 程式碼內容`,
        highlightLines: [1, 2, 3],
      },
    ],
  },
];
```

### 步驟 3：建立入口組件 (`index.tsx`)

```tsx
import { SlideTemplate } from '../../template';
import { slideTitle, steps } from './slides';

export function NewCourseSlide() {
  return <SlideTemplate title={slideTitle} steps={steps} />;
}

export { slideTitle, steps } from './slides';
```

### 步驟 4：註冊課程

在 `src/data/courses.ts` 加入課程資料：

```typescript
export const courses: Course[] = [
  // 現有課程...
  {
    id: 'new-course',
    week: 1,
    title: '新課程',
    path: '/week1/new-course',
    description: '課程描述',
  },
];
```

### 步驟 5：設定路由

在 `src/App.tsx` 加入路由：

```tsx
import { NewCourseSlide } from './week1/新課程名稱';

// 在 Routes 內加入
<Route path="/week1/new-course" element={<NewCourseSlide />} />
```

---

## 核心型別

### Step（步驟）

每個步驟包含預覽區和程式碼區的內容：

```typescript
interface Step {
  id: string;           // 唯一識別碼
  title: string;        // 步驟標題（顯示在 Header）
  description?: string; // 步驟說明（顯示在程式碼區上方）
  preview: Preview;     // 預覽內容
  codeBlocks: CodeBlock[]; // 程式碼區塊（支援多個 Tab）
}
```

### Preview（預覽類型）

支援三種預覽模式：

```typescript
type Preview =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'code-result'; html: string; css?: string }
  | { type: 'component'; component: React.ComponentType };
```

#### 1. 圖片預覽

```typescript
preview: {
  type: 'image',
  src: '/path/to/image.png',
  alt: '圖片說明'
}
```

#### 2. HTML/CSS 即時渲染

在 iframe sandbox 中渲染 HTML 和 CSS：

```typescript
preview: {
  type: 'code-result',
  html: '<button class="btn">點擊我</button>',
  css: `.btn {
    padding: 12px 24px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
  }`
}
```

#### 3. React 組件預覽（含 SVG 圖示）

直接渲染 React 組件，適合用於 SVG 圖示：

```typescript
// diagrams.tsx
export function MyDiagram() {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300">
      <rect x="20" y="20" width="100" height="60" rx="8" fill="#3b82f6" />
      <text x="70" y="55" textAnchor="middle" fill="white" fontSize="14">
        方塊
      </text>
    </svg>
  );
}

// slides.ts
import { MyDiagram } from './diagrams';

preview: {
  type: 'component',
  component: MyDiagram
}
```

### CodeBlock（程式碼區塊）

```typescript
interface CodeBlock {
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'jsx' | 'tsx';
  code: string;
  filename?: string;        // 顯示檔案名稱
  highlightLines?: number[]; // 高亮指定行號
}
```

---

## 功能說明

### 課程選單

左上角的「課程」按鈕可展開下拉選單：
- 快速切換不同課程
- 返回課程首頁

### 導航方式

- **按鈕點擊**：點擊「上一步」「下一步」按鈕切換
- **鍵盤快捷鍵**：
  - `←` 左箭頭：上一步
  - `→` 右箭頭：下一步

### 程式碼 Tab 切換

當一個步驟有多個 `codeBlocks` 時，會自動顯示 Tab 切換介面，點擊 Tab 可切換不同程式碼檔案。

### 行號高亮

使用 `highlightLines` 陣列指定要高亮的行號，適合用於強調重點程式碼：

```typescript
codeBlocks: [
  {
    language: 'tsx',
    code: `// 第 1 行
// 第 2 行 - 會高亮
// 第 3 行 - 會高亮
// 第 4 行`,
    highlightLines: [2, 3], // 高亮第 2、3 行
  },
]
```

---

## 版型結構

```
┌──────────────────────────────────────────────────────────┐
│  [課程▾] │ 簡報標題                        步驟 1/5      │
│          │ 步驟標題                                      │
├────────────────────────────┬─────────────────────────────┤
│                            │  步驟說明文字               │
│                            ├─────────────────────────────┤
│      預覽區域              │  [Tab1] [Tab2] [Tab3]       │
│   (圖片/HTML渲染/SVG組件)  │                             │
│                            │   程式碼區域                │
│                            │   (語法高亮 + 行號)         │
│                            │                             │
├────────────────────────────┴─────────────────────────────┤
│  [← 上一步]        ● ● ●─● ●        [下一步 →]          │
└──────────────────────────────────────────────────────────┘
```

---

## 支援的程式語言

- `html`
- `css`
- `javascript`
- `typescript`
- `jsx`
- `tsx`

---

## 完整範例

參考 `src/week1/關注點分離/` 目錄，包含：

- `slides.ts` - 4 個步驟的簡報資料
- `diagrams.tsx` - 4 個 SVG 圖示組件
- `index.tsx` - 入口組件
