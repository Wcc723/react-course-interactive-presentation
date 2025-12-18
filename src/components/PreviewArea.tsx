import { useMemo, useState, useEffect } from 'react';
import type { Preview } from '../types/slide';

interface PreviewAreaProps {
  preview: Preview;
  fullWidth?: boolean;
}

// 滿版按鈕組件
function FullscreenButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/80 hover:bg-white border border-stone-200 shadow-sm transition-all hover:scale-105 group"
      title="放大檢視"
    >
      <svg
        className="w-4 h-4 text-stone-500 group-hover:text-stone-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
        />
      </svg>
    </button>
  );
}

// 滿版模態框組件
function FullscreenModal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  // ESC 鍵關閉
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors"
          title="關閉 (ESC)"
        >
          <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 內容區域 */}
        <div className="w-full h-full p-8 flex items-center justify-center overflow-auto bg-amber-50/30">
          {children}
        </div>
      </div>
    </div>
  );
}

export function PreviewArea({ preview, fullWidth = false }: PreviewAreaProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  // 渲染預覽內容
  const renderContent = (isModal = false) => {
    switch (preview.type) {
      case 'image':
        return (
          <img
            src={preview.src}
            alt={preview.alt || '預覽圖片'}
            className={`max-w-full ${isModal ? 'max-h-[80vh]' : imageMaxHeight} object-contain rounded-lg shadow-sm`}
          />
        );

      case 'code-result':
        return (
          <div className={`${isModal ? 'w-full h-full' : 'h-full'} rounded-xl overflow-hidden border border-amber-200/60 shadow-inner bg-white/80`}>
            <iframe
              srcDoc={iframeContent}
              sandbox="allow-scripts"
              className="w-full h-full"
              title="程式碼預覽"
            />
          </div>
        );

      case 'component': {
        const Component = preview.component;
        return (
          <div
            className={`${isModal ? 'w-full max-w-6xl' : 'h-full'} rounded-xl border border-amber-200/60 shadow-inner bg-white/80 p-6 flex items-center justify-center`}
            style={isModal ? { transform: 'scale(1.2)', transformOrigin: 'center' } : undefined}
          >
            <Component />
          </div>
        );
      }

      default:
        return null;
    }
  };

  switch (preview.type) {
    case 'image':
      return (
        <>
          <div className={`relative flex items-center justify-center h-full ${padding} bg-amber-50/50`}>
            <FullscreenButton onClick={() => setIsFullscreen(true)} />
            {renderContent()}
          </div>
          {isFullscreen && (
            <FullscreenModal onClose={() => setIsFullscreen(false)}>
              {renderContent(true)}
            </FullscreenModal>
          )}
        </>
      );

    case 'code-result':
      return (
        <>
          <div className={`relative h-full ${padding} bg-amber-50/50`}>
            <FullscreenButton onClick={() => setIsFullscreen(true)} />
            {renderContent()}
          </div>
          {isFullscreen && (
            <FullscreenModal onClose={() => setIsFullscreen(false)}>
              {renderContent(true)}
            </FullscreenModal>
          )}
        </>
      );

    case 'component': {
      return (
        <>
          <div className={`relative h-full ${padding} bg-amber-50/50 overflow-auto`}>
            <FullscreenButton onClick={() => setIsFullscreen(true)} />
            {renderContent()}
          </div>
          {isFullscreen && (
            <FullscreenModal onClose={() => setIsFullscreen(false)}>
              {renderContent(true)}
            </FullscreenModal>
          )}
        </>
      );
    }

    default:
      return null;
  }
}
