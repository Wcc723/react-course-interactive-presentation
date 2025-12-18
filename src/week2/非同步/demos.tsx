import { useState } from 'react';

// 互動示範：Alert 阻塞
export function BlockingDemo() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runBlockingDemo = () => {
    setLogs([]);
    setIsRunning(true);

    // Step 1
    setLogs((prev) => [...prev, '1. console.log("開始執行")']);

    // 使用 setTimeout 模擬讓 UI 更新後再執行 alert
    setTimeout(() => {
      setLogs((prev) => [...prev, '2. 執行 alert() - 畫面將被阻塞...']);

      // 使用另一個 setTimeout 讓 log 先顯示
      setTimeout(() => {
        alert('請點擊「確定」繼續執行\n\n⚠️ 注意：在點擊確定之前，整個網頁都無法操作！');

        setLogs((prev) => [...prev, '3. 用戶點擊確定，繼續執行']);
        setLogs((prev) => [...prev, '4. console.log("執行結束")']);
        setIsRunning(false);
      }, 100);
    }, 100);
  };

  const reset = () => {
    setLogs([]);
    setIsRunning(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-6 p-4 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>操作說明：</strong>點擊「執行程式碼」按鈕，觀察 alert() 如何阻塞程式執行。
          在彈出視窗出現時，嘗試操作網頁其他部分，你會發現整個頁面都被「凍結」了。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 程式碼展示 */}
        <div className="p-4 rounded-xl bg-slate-900 text-white">
          <div className="text-xs text-slate-400 mb-3">程式碼</div>
          <pre className="text-sm font-mono leading-relaxed">
            <code>
              <span className="text-blue-400">console</span>
              <span className="text-white">.log(</span>
              <span className="text-green-400">"開始執行"</span>
              <span className="text-white">)</span>
              {'\n\n'}
              <span className="text-yellow-400">alert</span>
              <span className="text-white">(</span>
              <span className="text-green-400">"請點擊確定"</span>
              <span className="text-white">)</span>
              {'\n\n'}
              <span className="text-blue-400">console</span>
              <span className="text-white">.log(</span>
              <span className="text-green-400">"執行結束"</span>
              <span className="text-white">)</span>
            </code>
          </pre>
        </div>

        {/* 執行結果 */}
        <div className="p-4 rounded-xl border-2 border-stone-200 bg-white">
          <div className="text-xs text-stone-400 mb-3">Console 輸出</div>
          <div className="min-h-[120px] font-mono text-sm space-y-1">
            {logs.length === 0 ? (
              <span className="text-stone-300">等待執行...</span>
            ) : (
              logs.map((log, i) => (
                <div key={i} className={`${log.includes('阻塞') ? 'text-red-500' : 'text-stone-700'}`}>
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 操作按鈕 */}
      <div className="mt-6 flex gap-4 justify-center">
        <button
          onClick={runBlockingDemo}
          disabled={isRunning}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isRunning ? '執行中...' : '執行程式碼'}
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-stone-200 text-stone-700 rounded-lg hover:bg-stone-300 transition-colors"
        >
          重置
        </button>
      </div>

      {/* 重點提示 */}
      <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
        <p className="text-sm text-red-700">
          <strong>🛑 阻塞的問題：</strong>alert()、confirm()、prompt() 這類同步對話框會完全阻塞 JavaScript 執行，
          使用者無法與頁面進行任何互動，這在現代 Web 應用中是非常不好的體驗。
        </p>
      </div>
    </div>
  );
}

// 互動示範：setTimeout 執行順序
export function SetTimeoutDemo() {
  const [logs, setLogs] = useState<{ text: string; color: string }[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runDemo = () => {
    setLogs([]);
    setIsRunning(true);

    // 同步：log 1
    setLogs((prev) => [...prev, { text: '1', color: 'text-blue-500' }]);

    // 非同步：setTimeout log 2
    setTimeout(() => {
      setLogs((prev) => [...prev, { text: '2 (setTimeout 完成)', color: 'text-amber-500' }]);
      setIsRunning(false);
    }, 0);

    // 同步：log 3
    setTimeout(() => {
      setLogs((prev) => [...prev, { text: '3', color: 'text-green-500' }]);
    }, 10);

    // 同步：log 4
    setTimeout(() => {
      setLogs((prev) => [...prev, { text: '4', color: 'text-purple-500' }]);
    }, 20);
  };

  const reset = () => {
    setLogs([]);
    setIsRunning(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-6 p-4 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>操作說明：</strong>點擊「執行程式碼」觀察輸出順序。
          即使 setTimeout 設定為 0ms，它的 callback 仍會進入事件佇列，等待同步程式碼執行完畢。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 程式碼展示 */}
        <div className="p-4 rounded-xl bg-slate-900 text-white">
          <div className="text-xs text-slate-400 mb-3">程式碼</div>
          <pre className="text-sm font-mono leading-relaxed">
            <code>
              <span className="text-blue-400">console</span>
              <span className="text-white">.log(</span>
              <span className="text-blue-300">1</span>
              <span className="text-white">)</span>
              {'\n\n'}
              <span className="text-yellow-400">setTimeout</span>
              <span className="text-white">{'(() => {'}</span>
              {'\n'}
              <span className="text-white">{'  '}</span>
              <span className="text-blue-400">console</span>
              <span className="text-white">.log(</span>
              <span className="text-amber-300">2</span>
              <span className="text-white">)</span>
              {'\n'}
              <span className="text-white">{'}, '}</span>
              <span className="text-purple-300">0</span>
              <span className="text-white">)</span>
              {'\n\n'}
              <span className="text-blue-400">console</span>
              <span className="text-white">.log(</span>
              <span className="text-green-300">3</span>
              <span className="text-white">)</span>
              {'\n\n'}
              <span className="text-blue-400">console</span>
              <span className="text-white">.log(</span>
              <span className="text-purple-300">4</span>
              <span className="text-white">)</span>
            </code>
          </pre>
        </div>

        {/* 執行結果 */}
        <div className="p-4 rounded-xl border-2 border-stone-200 bg-white">
          <div className="text-xs text-stone-400 mb-3">Console 輸出順序</div>
          <div className="min-h-[140px] font-mono text-2xl space-y-2">
            {logs.length === 0 ? (
              <span className="text-stone-300 text-base">等待執行...</span>
            ) : (
              logs.map((log, i) => (
                <div key={i} className={`${log.color} font-bold`}>
                  {log.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 操作按鈕 */}
      <div className="mt-6 flex gap-4 justify-center">
        <button
          onClick={runDemo}
          disabled={isRunning}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isRunning ? '執行中...' : '執行程式碼'}
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-stone-200 text-stone-700 rounded-lg hover:bg-stone-300 transition-colors"
        >
          重置
        </button>
      </div>

      {/* 預期結果 */}
      <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
        <p className="text-sm text-emerald-700">
          <strong>💡 執行順序：</strong>1 → 3 → 4 → 2
          <br />
          setTimeout 的 callback 即使延遲 0ms，也會被放入事件佇列，必須等所有同步程式碼執行完畢後才會執行。
        </p>
      </div>
    </div>
  );
}

// 互動示範：完整 Async/Await + Promise 流程
export function AsyncAwaitDemo() {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<{ text: string; type: 'info' | 'success' | 'waiting' | 'data' }[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const simulateFetch = () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('{ "name": "小明", "age": 25 }');
      }, 2000);
    });
  };

  const runAsyncDemo = async () => {
    setLogs([]);
    setData(null);
    setStep(0);
    setIsRunning(true);

    // Step 1: 開始執行 async 函式
    setStep(1);
    setLogs((prev) => [...prev, { text: '1. 呼叫 async 函式 fetchUserData()', type: 'info' }]);
    await sleep(800);

    // Step 2: 建立 Promise
    setStep(2);
    setLogs((prev) => [...prev, { text: '2. 建立 Promise，開始發送 API 請求', type: 'info' }]);
    await sleep(800);

    // Step 3: await 等待
    setStep(3);
    setLogs((prev) => [...prev, { text: '3. await 等待 Promise 完成...', type: 'waiting' }]);
    setLogs((prev) => [...prev, { text: '   ⏳ 等待伺服器回應中 (模擬 2 秒)...', type: 'waiting' }]);

    // 執行 Promise
    const result = await simulateFetch();

    // Step 4: 收到回應
    setStep(4);
    setLogs((prev) => [...prev, { text: '4. ✓ Promise 完成，收到資料！', type: 'success' }]);
    setData(result);
    await sleep(500);

    // Step 5: 繼續執行
    setStep(5);
    setLogs((prev) => [...prev, { text: '5. await 之後的程式碼繼續執行', type: 'info' }]);
    setLogs((prev) => [...prev, { text: `   資料內容: ${result}`, type: 'data' }]);

    setIsRunning(false);
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const reset = () => {
    setLogs([]);
    setData(null);
    setStep(0);
    setIsRunning(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* 說明區 */}
      <div className="mb-6 p-4 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>操作說明：</strong>點擊「執行 API 請求」按鈕，觀察完整的 Async/Await + Promise 執行流程。
          每個步驟會依序顯示，讓你了解非同步程式碼的執行順序。
        </p>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        {/* 流程步驟指示 */}
        {[
          { num: 1, label: 'async 函式', color: 'bg-purple-500' },
          { num: 2, label: 'Promise', color: 'bg-blue-500' },
          { num: 3, label: 'await 等待', color: 'bg-amber-500' },
          { num: 4, label: 'resolve', color: 'bg-green-500' },
          { num: 5, label: '繼續執行', color: 'bg-teal-500' },
        ].map((item) => (
          <div
            key={item.num}
            className={`p-3 rounded-xl text-center transition-all duration-300 ${
              step >= item.num ? `${item.color} text-white scale-105` : 'bg-stone-100 text-stone-400'
            }`}
          >
            <div className="text-lg font-bold">{item.num}</div>
            <div className="text-xs">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 程式碼展示 */}
        <div className="p-4 rounded-xl bg-slate-900 text-white">
          <div className="text-xs text-slate-400 mb-3">程式碼</div>
          <pre className="text-xs font-mono leading-relaxed overflow-x-auto">
            <code>
              <span className="text-gray-500">// 建立 Promise 函式 (模擬 API)</span>
              {'\n'}
              <span className="text-purple-400">function</span>
              <span className="text-yellow-300"> fetchAPI</span>
              <span className="text-white">() {'{'}</span>
              {'\n'}
              <span className="text-white">{'  '}</span>
              <span className="text-purple-400">return new</span>
              <span className="text-yellow-300"> Promise</span>
              <span className="text-white">{'((resolve) => {'}</span>
              {'\n'}
              <span className="text-white">{'    '}</span>
              <span className="text-yellow-300">setTimeout</span>
              <span className="text-white">{'(() => {'}</span>
              {'\n'}
              <span className="text-white">{'      '}</span>
              <span className="text-green-400">resolve</span>
              <span className="text-white">(data)</span>
              {'\n'}
              <span className="text-white">{'    }, 2000)'}</span>
              {'\n'}
              <span className="text-white">{'  })'}</span>
              {'\n'}
              <span className="text-white">{'}'}</span>
              {'\n\n'}
              <span className="text-gray-500">// 使用 async/await 調用</span>
              {'\n'}
              <span className={`${step >= 1 ? 'text-purple-400' : 'text-purple-400/50'}`}>async function</span>
              <span className={`${step >= 1 ? 'text-yellow-300' : 'text-yellow-300/50'}`}> fetchUserData</span>
              <span className="text-white">() {'{'}</span>
              {'\n'}
              <span className="text-white">{'  '}</span>
              <span className={`${step >= 2 ? 'text-purple-400' : 'text-purple-400/50'}`}>const</span>
              <span className="text-white"> data = </span>
              <span className={`${step >= 3 ? 'text-yellow-300 font-bold' : 'text-yellow-300/50'}`}>await</span>
              <span className="text-white"> fetchAPI()</span>
              {'\n'}
              <span className="text-white">{'  '}</span>
              <span className={`${step >= 5 ? 'text-blue-400' : 'text-blue-400/50'}`}>console</span>
              <span className={`${step >= 5 ? 'text-white' : 'text-white/50'}`}>.log(data)</span>
              {'\n'}
              <span className="text-white">{'}'}</span>
            </code>
          </pre>
        </div>

        {/* 執行紀錄 */}
        <div className="p-4 rounded-xl border-2 border-stone-200 bg-white">
          <div className="text-xs text-stone-400 mb-3">執行紀錄</div>
          <div className="min-h-[180px] font-mono text-sm space-y-2">
            {logs.length === 0 ? (
              <span className="text-stone-300">點擊按鈕開始執行...</span>
            ) : (
              logs.map((log, i) => (
                <div
                  key={i}
                  className={`${
                    log.type === 'success'
                      ? 'text-green-600'
                      : log.type === 'waiting'
                        ? 'text-amber-600'
                        : log.type === 'data'
                          ? 'text-blue-600'
                          : 'text-stone-700'
                  }`}
                >
                  {log.text}
                </div>
              ))
            )}
          </div>

          {/* 資料顯示 */}
          {data && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-xs text-green-600 mb-1">收到的資料：</div>
              <div className="font-mono text-green-800">{data}</div>
            </div>
          )}
        </div>
      </div>

      {/* 操作按鈕 */}
      <div className="mt-6 flex gap-4 justify-center">
        <button
          onClick={runAsyncDemo}
          disabled={isRunning}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg font-semibold"
        >
          {isRunning ? '執行中...' : '🚀 執行 API 請求'}
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-stone-200 text-stone-700 rounded-lg hover:bg-stone-300 transition-colors"
        >
          重置
        </button>
      </div>

      {/* 重點提示 */}
      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <p className="text-sm text-blue-700">
          <strong>💡 重點：</strong>
          async 函式會回傳 Promise，await 會暫停函式執行直到 Promise 完成。
          這讓非同步程式碼看起來像同步的，更容易閱讀和維護！
        </p>
      </div>
    </div>
  );
}
