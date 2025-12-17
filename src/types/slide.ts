import type { ComponentType } from 'react';

// 預覽類型
export type Preview =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'code-result'; html: string; css?: string }
  | { type: 'component'; component: ComponentType };

// 程式碼區塊
export interface CodeBlock {
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'jsx' | 'tsx';
  code: string;
  filename?: string;
  highlightLines?: number[];
}

// 步驟
export interface Step {
  id: string;
  title: string;
  description?: string;
  preview: Preview;
  codeBlocks: CodeBlock[];
}

// 簡報 Props
export interface SlideTemplateProps {
  title: string;
  steps: Step[];
}
