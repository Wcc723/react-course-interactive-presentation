import { useState } from 'react';
import type { CodeBlock as CodeBlockType } from '../types/slide';
import { CodeBlock } from './CodeBlock';

interface CodeTabsProps {
  codeBlocks: CodeBlockType[];
}

const languageLabels: Record<string, string> = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  jsx: 'JSX',
  tsx: 'TSX',
};

const languageColors: Record<string, string> = {
  html: 'bg-orange-400',
  css: 'bg-sky-400',
  javascript: 'bg-yellow-400',
  typescript: 'bg-blue-400',
  jsx: 'bg-cyan-400',
  tsx: 'bg-indigo-400',
};

export function CodeTabs({ codeBlocks }: CodeTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (codeBlocks.length === 0) {
    return null;
  }

  if (codeBlocks.length === 1) {
    return <CodeBlock codeBlock={codeBlocks[0]} />;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-1 mb-3">
        {codeBlocks.map((block, index) => {
          const label = block.filename || languageLabels[block.language] || block.language;
          const isActive = index === activeIndex;
          const colorClass = languageColors[block.language] || 'bg-stone-400';

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-stone-700 text-white shadow-md'
                  : 'text-stone-600 hover:bg-amber-100/60 border border-transparent hover:border-amber-200/60'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${colorClass}`} />
              {label}
            </button>
          );
        })}
      </div>
      <div className="flex-1 overflow-auto">
        <CodeBlock codeBlock={codeBlocks[activeIndex]} />
      </div>
    </div>
  );
}
