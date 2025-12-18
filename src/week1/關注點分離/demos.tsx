import { useState } from 'react';

// 第 3 頁：傳統 DOM 操作示範
// 展示需要手動觸發多個 function 才能更新所有 UI
export function TraditionalDemo() {
  // 模擬各個 DOM 元素的狀態（獨立管理）
  const [headerName, setHeaderName] = useState('Guest');
  const [sidebarName, setSidebarName] = useState('Guest');
  const [cardName, setCardName] = useState('Guest');
  const [footerName, setFooterName] = useState('Guest');

  // 追蹤哪些已更新
  const [updated, setUpdated] = useState({
    header: false,
    sidebar: false,
    card: false,
    footer: false,
  });

  const newName = 'Alice';

  const resetAll = () => {
    setHeaderName('Guest');
    setSidebarName('Guest');
    setCardName('Guest');
    setFooterName('Guest');
    setUpdated({ header: false, sidebar: false, card: false, footer: false });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-6 p-4 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>傳統方式：</strong>每個 UI 區域需要手動呼叫對應的更新函式。
          請依序點擊下方按鈕，觀察需要多少步驟才能讓所有 UI 同步。
        </p>
      </div>

      {/* UI 展示區 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className={`p-4 rounded-xl border-2 transition-all ${updated.header ? 'border-green-400 bg-green-50' : 'border-stone-200 bg-white'}`}>
          <div className="text-xs text-stone-400 mb-1">Header</div>
          <div className="text-lg font-semibold text-stone-800">使用者：{headerName}</div>
        </div>
        <div className={`p-4 rounded-xl border-2 transition-all ${updated.sidebar ? 'border-green-400 bg-green-50' : 'border-stone-200 bg-white'}`}>
          <div className="text-xs text-stone-400 mb-1">Sidebar</div>
          <div className="text-lg font-semibold text-stone-800">使用者：{sidebarName}</div>
        </div>
        <div className={`p-4 rounded-xl border-2 transition-all ${updated.card ? 'border-green-400 bg-green-50' : 'border-stone-200 bg-white'}`}>
          <div className="text-xs text-stone-400 mb-1">Card</div>
          <div className="text-lg font-semibold text-stone-800">使用者：{cardName}</div>
        </div>
        <div className={`p-4 rounded-xl border-2 transition-all ${updated.footer ? 'border-green-400 bg-green-50' : 'border-stone-200 bg-white'}`}>
          <div className="text-xs text-stone-400 mb-1">Footer</div>
          <div className="text-lg font-semibold text-stone-800">使用者：{footerName}</div>
        </div>
      </div>

      {/* 操作按鈕區 */}
      <div className="p-4 bg-stone-100 rounded-xl">
        <div className="text-sm text-stone-600 mb-3">需要手動呼叫 4 個函式：</div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setHeaderName(newName); setUpdated(u => ({ ...u, header: true })); }}
            disabled={updated.header}
            className="px-3 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            updateHeader()
          </button>
          <button
            onClick={() => { setSidebarName(newName); setUpdated(u => ({ ...u, sidebar: true })); }}
            disabled={updated.sidebar}
            className="px-3 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            updateSidebar()
          </button>
          <button
            onClick={() => { setCardName(newName); setUpdated(u => ({ ...u, card: true })); }}
            disabled={updated.card}
            className="px-3 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            updateCard()
          </button>
          <button
            onClick={() => { setFooterName(newName); setUpdated(u => ({ ...u, footer: true })); }}
            disabled={updated.footer}
            className="px-3 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            updateFooter()
          </button>
          <button
            onClick={resetAll}
            className="px-3 py-2 text-sm bg-stone-500 text-white rounded-lg hover:bg-stone-600 transition-colors ml-auto"
          >
            重置
          </button>
        </div>

        {/* 進度提示 */}
        <div className="mt-4 text-sm">
          {Object.values(updated).every(v => v) ? (
            <span className="text-green-600 font-medium">✓ 終於全部更新完成！但這樣很繁瑣...</span>
          ) : (
            <span className="text-amber-600">
              已更新 {Object.values(updated).filter(Boolean).length} / 4 個區域
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// 第 6 頁：關注點分離示範
// 展示資料更新後，所有 UI 自動同步
export function SeparationDemo() {
  // 單一資料來源
  const [state, setState] = useState({
    userName: 'Guest',
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-6 p-4 bg-green-100/50 rounded-xl border border-green-200">
        <p className="text-sm text-stone-700">
          <strong>關注點分離：</strong>只需更新資料狀態，所有 UI 自動同步更新！
          在下方輸入框中輸入新名稱，觀察所有區域即時變化。
        </p>
      </div>

      <div className="flex gap-6">
        {/* 左側：資料狀態 */}
        <div className="w-1/3">
          <div className="p-4 bg-emerald-500 rounded-xl text-white">
            <div className="text-xs opacity-80 mb-2">State（資料來源）</div>
            <pre className="text-sm font-mono bg-emerald-600/50 p-3 rounded-lg">
{JSON.stringify(state, null, 2)}
            </pre>
          </div>

          {/* 輸入區 */}
          <div className="mt-4 p-4 bg-white rounded-xl border border-stone-200">
            <label className="block text-sm text-stone-600 mb-2">
              更新使用者名稱：
            </label>
            <input
              type="text"
              value={state.userName}
              onChange={(e) => setState({ ...state, userName: e.target.value })}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="輸入名稱..."
            />
          </div>
        </div>

        {/* 右側：UI 展示區 */}
        <div className="flex-1">
          <div className="text-xs text-stone-400 mb-3">所有 UI 自動同步：</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border-2 border-emerald-400 bg-emerald-50">
              <div className="text-xs text-emerald-600 mb-1">Header</div>
              <div className="text-lg font-semibold text-stone-800">使用者：{state.userName}</div>
            </div>
            <div className="p-4 rounded-xl border-2 border-emerald-400 bg-emerald-50">
              <div className="text-xs text-emerald-600 mb-1">Sidebar</div>
              <div className="text-lg font-semibold text-stone-800">使用者：{state.userName}</div>
            </div>
            <div className="p-4 rounded-xl border-2 border-emerald-400 bg-emerald-50">
              <div className="text-xs text-emerald-600 mb-1">Card</div>
              <div className="text-lg font-semibold text-stone-800">使用者：{state.userName}</div>
            </div>
            <div className="p-4 rounded-xl border-2 border-emerald-400 bg-emerald-50">
              <div className="text-xs text-emerald-600 mb-1">Footer</div>
              <div className="text-lg font-semibold text-stone-800">使用者：{state.userName}</div>
            </div>
          </div>

          {/* 同步箭頭說明 */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-emerald-600">
            <span>資料更新</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span>畫面自動同步</span>
          </div>
        </div>
      </div>
    </div>
  );
}
