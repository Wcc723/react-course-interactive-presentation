import { Highlight, themes } from 'prism-react-renderer';
import type { CodeBlock as CodeBlockType } from '../types/slide';

interface CodeBlockProps {
  codeBlock: CodeBlockType;
}

export function CodeBlock({ codeBlock }: CodeBlockProps) {
  const { language, code, filename, highlightLines = [] } = codeBlock;

  return (
    <div className="rounded-xl overflow-hidden border border-amber-200/60 shadow-sm bg-white/80">
      {filename && (
        <div className="px-4 py-2.5 bg-amber-100/50 border-b border-amber-200/60 flex items-center gap-2">
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-sm font-mono text-stone-600">{filename}</span>
        </div>
      )}
      <Highlight theme={themes.github} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 overflow-auto text-sm leading-relaxed`}
            style={{ ...style, background: '#fffdf8' }}
          >
            {tokens.map((line, i) => {
              const lineNumber = i + 1;
              const isHighlighted = highlightLines.includes(lineNumber);
              const lineProps = getLineProps({ line });

              return (
                <div
                  key={i}
                  {...lineProps}
                  className={`${lineProps.className || ''} ${
                    isHighlighted
                      ? 'bg-amber-100/70 -mx-4 px-4 border-l-2 border-amber-400'
                      : ''
                  }`}
                >
                  <span className="inline-block w-8 text-stone-400 select-none text-right mr-4 text-xs">
                    {lineNumber}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
