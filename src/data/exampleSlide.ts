import type { Step } from '../types/slide';

export const exampleSlideTitle = 'React 基礎教學 - 建立第一個組件';

export const exampleSteps: Step[] = [
  {
    id: 'step-1',
    title: '建立 HTML 結構',
    description: '首先，我們來看一個簡單的 HTML 按鈕結構。',
    preview: {
      type: 'code-result',
      html: '<button class="btn">點擊我</button>',
      css: `.btn {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  background: #2563eb;
}`,
    },
    codeBlocks: [
      {
        language: 'html',
        code: `<button class="btn">點擊我</button>`,
        filename: 'index.html',
      },
      {
        language: 'css',
        code: `.btn {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.btn:hover {
  background: #2563eb;
}`,
        filename: 'styles.css',
      },
    ],
  },
  {
    id: 'step-2',
    title: '轉換為 React 組件',
    description: '接下來，我們將 HTML 轉換為 React 函式組件。',
    preview: {
      type: 'code-result',
      html: '<button class="btn">點擊我</button>',
      css: `.btn {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  background: #2563eb;
}`,
    },
    codeBlocks: [
      {
        language: 'tsx',
        code: `function Button() {
  return (
    <button className="btn">點擊我</button>
  );
}

export default Button;`,
        filename: 'Button.tsx',
        highlightLines: [1, 2, 3, 4, 5],
      },
    ],
  },
  {
    id: 'step-3',
    title: '加入 Props',
    description: '讓組件可以接收外部傳入的文字內容。',
    preview: {
      type: 'code-result',
      html: `<div style="display: flex; gap: 8px;">
  <button class="btn">確認</button>
  <button class="btn btn-secondary">取消</button>
</div>`,
      css: `.btn {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  background: #2563eb;
}
.btn-secondary {
  background: #6b7280;
}
.btn-secondary:hover {
  background: #4b5563;
}`,
    },
    codeBlocks: [
      {
        language: 'tsx',
        code: `interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

function Button({ children, variant = 'primary' }: ButtonProps) {
  const className = variant === 'secondary'
    ? 'btn btn-secondary'
    : 'btn';

  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default Button;`,
        filename: 'Button.tsx',
        highlightLines: [1, 2, 3, 4, 6],
      },
    ],
  },
  {
    id: 'step-4',
    title: '加入點擊事件',
    description: '最後，加入 onClick 事件處理器，讓按鈕可以執行動作。',
    preview: {
      type: 'code-result',
      html: `<button class="btn" onclick="alert('按鈕被點擊了！')">點擊我</button>`,
      css: `.btn {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  background: #2563eb;
}`,
    },
    codeBlocks: [
      {
        language: 'tsx',
        code: `interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

function Button({
  children,
  variant = 'primary',
  onClick
}: ButtonProps) {
  const className = variant === 'secondary'
    ? 'btn btn-secondary'
    : 'btn';

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;`,
        filename: 'Button.tsx',
        highlightLines: [4, 10, 17],
      },
      {
        language: 'tsx',
        code: `import Button from './Button';

function App() {
  const handleClick = () => {
    alert('按鈕被點擊了！');
  };

  return (
    <Button onClick={handleClick}>
      點擊我
    </Button>
  );
}`,
        filename: 'App.tsx',
        highlightLines: [4, 5, 6, 9],
      },
    ],
  },
];
