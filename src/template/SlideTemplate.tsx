import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { SlideTemplateProps } from '../types/slide';
import {
  SlideHeader,
  NavigationControls,
  PreviewArea,
  CodeTabs,
} from '../components';

export function SlideTemplate({ title, steps }: SlideTemplateProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentStep = steps[currentStepIndex];
  const hasPrev = currentStepIndex > 0;
  const hasNext = currentStepIndex < steps.length - 1;

  const goToPrev = useCallback(() => {
    if (hasPrev) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  }, [hasPrev]);

  const goToNext = useCallback(() => {
    if (hasNext) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  }, [hasNext]);

  // 鍵盤快捷鍵
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  if (!currentStep) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50/50">
        <p className="text-stone-500">沒有可顯示的步驟</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/80 p-8">
      <div className="w-full max-w-6xl min-h-[800px] bg-amber-50/90 rounded-2xl shadow-lg shadow-amber-900/10 overflow-hidden border border-amber-200/60 flex flex-col">
        <SlideHeader
          title={title}
          currentStep={currentStepIndex + 1}
          totalSteps={steps.length}
          stepTitle={currentStep.title}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col lg:flex-row"
          >
            {/* 判斷是否有程式碼區塊 */}
            {currentStep.codeBlocks && currentStep.codeBlocks.length > 0 ? (
              <>
                {/* 左側：預覽區 */}
                <div className="lg:w-1/2 border-b lg:border-b-0 lg:border-r border-amber-200/60">
                  <PreviewArea preview={currentStep.preview} />
                </div>

                {/* 右側：程式碼區 */}
                <div className="lg:w-1/2 flex flex-col bg-white/60">
                  {currentStep.description && (
                    <div className="px-5 py-3 border-b border-amber-200/60 bg-gradient-to-r from-amber-100/50 to-orange-100/30">
                      <p className="text-sm text-stone-700 leading-relaxed">{currentStep.description}</p>
                    </div>
                  )}
                  <div className="flex-1 p-5 overflow-auto">
                    <CodeTabs codeBlocks={currentStep.codeBlocks} />
                  </div>
                </div>
              </>
            ) : (
              /* 滿版預覽模式 */
              <div className="w-full flex flex-col">
                {currentStep.description && (
                  <div className="px-5 py-3 border-b border-amber-200/60 bg-gradient-to-r from-amber-100/50 to-orange-100/30">
                    <p className="text-sm text-stone-700 leading-relaxed">{currentStep.description}</p>
                  </div>
                )}
                <div className="flex-1">
                  <PreviewArea preview={currentStep.preview} fullWidth />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <NavigationControls
          currentStep={currentStepIndex + 1}
          totalSteps={steps.length}
          hasPrev={hasPrev}
          hasNext={hasNext}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      </div>
    </div>
  );
}
