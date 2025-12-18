import { useMemo } from 'react';
import type { Preview } from '../types/slide';

interface PreviewAreaProps {
  preview: Preview;
  fullWidth?: boolean;
}

export function PreviewArea({ preview, fullWidth = false }: PreviewAreaProps) {
  const iframeContent = useMemo(() => {
    if (preview.type !== 'code-result') return '';

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 24px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fffbf5;
    }
    ${preview.css || ''}
  </style>
</head>
<body>
  ${preview.html}
</body>
</html>`;
  }, [preview]);

  const padding = fullWidth ? 'p-8' : 'p-5';
  const imageMaxHeight = fullWidth ? 'max-h-[500px]' : 'max-h-[280px]';

  switch (preview.type) {
    case 'image':
      return (
        <div className={`flex items-center justify-center h-full ${padding} bg-amber-50/50`}>
          <img
            src={preview.src}
            alt={preview.alt || '預覽圖片'}
            className={`max-w-full ${imageMaxHeight} object-contain rounded-lg shadow-sm`}
          />
        </div>
      );

    case 'code-result':
      return (
        <div className={`h-full ${padding} bg-amber-50/50`}>
          <div className="h-full rounded-xl overflow-hidden border border-amber-200/60 shadow-inner bg-white/80">
            <iframe
              srcDoc={iframeContent}
              sandbox="allow-scripts"
              className="w-full h-full"
              title="程式碼預覽"
            />
          </div>
        </div>
      );

    case 'component': {
      const Component = preview.component;
      return (
        <div className={`h-full ${padding} bg-amber-50/50 overflow-auto`}>
          <div className="h-full rounded-xl border border-amber-200/60 shadow-inner bg-white/80 p-6 flex items-center justify-center">
            <Component />
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
