import { useState } from 'react';

// 模擬的頁面元件
function HomePage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-blue-600 mb-3">🏠 首頁</h2>
      <p className="text-stone-600 mb-2">歡迎來到我們的網站！</p>
      <div className="space-y-2">
        <div className="h-3 bg-blue-100 rounded w-full" />
        <div className="h-3 bg-blue-100 rounded w-4/5" />
        <div className="h-3 bg-blue-100 rounded w-3/5" />
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
        了解更多
      </button>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-green-600 mb-3">👤 關於我們</h2>
      <p className="text-stone-600 mb-2">我們是一個充滿熱情的團隊</p>
      <div className="space-y-2">
        <div className="h-3 bg-green-100 rounded w-full" />
        <div className="h-3 bg-green-100 rounded w-4/5" />
        <div className="h-3 bg-green-100 rounded w-2/3" />
      </div>
    </div>
  );
}

function ProductsPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-amber-600 mb-3">📦 產品列表</h2>
      <div className="grid grid-cols-2 gap-2">
        {['商品 A', '商品 B', '商品 C', '商品 D'].map((item) => (
          <div key={item} className="p-2 bg-amber-50 rounded border border-amber-200 text-sm text-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-purple-600 mb-3">📧 聯絡我們</h2>
      <div className="space-y-2">
        <input className="w-full p-2 border border-purple-200 rounded text-sm" placeholder="您的姓名" readOnly />
        <input className="w-full p-2 border border-purple-200 rounded text-sm" placeholder="您的信箱" readOnly />
        <button className="w-full py-2 bg-purple-500 text-white rounded text-sm">
          送出
        </button>
      </div>
    </div>
  );
}

// 路由表配置
const routes = [
  { path: '/', name: '首頁', icon: '🏠', component: HomePage, color: 'blue' },
  { path: '/about', name: '關於', icon: '👤', component: AboutPage, color: 'green' },
  { path: '/products', name: '產品', icon: '📦', component: ProductsPage, color: 'amber' },
  { path: '/contact', name: '聯絡', icon: '📧', component: ContactPage, color: 'purple' },
];

// 1. 路由切換互動示範
export function RoutingSwitchDemo() {
  const [currentPath, setCurrentPath] = useState('/');
  const [showRouteTable, setShowRouteTable] = useState(true);

  const currentRoute = routes.find((r) => r.path === currentPath) || routes[0];
  const CurrentComponent = currentRoute.component;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* 說明區 */}
      <div className="mb-4 p-3 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>操作說明：</strong>點擊下方的導航按鈕，觀察網址變化與頁面切換。
          同時觀察右側路由表的匹配過程！
        </p>
      </div>

      <div className="flex gap-4">
        {/* 左側：模擬瀏覽器 */}
        <div className="flex-1">
          {/* 瀏覽器外框 */}
          <div className="rounded-xl overflow-hidden border-2 border-stone-300 bg-stone-100">
            {/* 瀏覽器頂部 */}
            <div className="bg-stone-200 px-3 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* 網址列 */}
              <div className="flex-1 bg-white rounded-md px-3 py-1.5 flex items-center gap-2 border border-stone-300">
                <span className="text-stone-400 text-xs">🔒</span>
                <span className="text-stone-500 text-sm">mysite.com</span>
                <span className={`font-mono text-sm font-bold text-${currentRoute.color}-600`}>
                  {currentPath}
                </span>
              </div>
            </div>

            {/* 導航列 */}
            <div className="bg-white border-b border-stone-200 px-3 py-2 flex gap-2">
              {routes.map((route) => (
                <button
                  key={route.path}
                  onClick={() => setCurrentPath(route.path)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    currentPath === route.path
                      ? `bg-${route.color}-500 text-white`
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {route.icon} {route.name}
                </button>
              ))}
            </div>

            {/* 頁面內容 */}
            <div className="bg-white min-h-[200px]">
              <CurrentComponent />
            </div>
          </div>
        </div>

        {/* 右側：路由表視覺化 */}
        <div className="w-64">
          <button
            onClick={() => setShowRouteTable(!showRouteTable)}
            className="w-full mb-2 px-3 py-1.5 bg-stone-200 rounded-lg text-sm text-stone-600 hover:bg-stone-300"
          >
            {showRouteTable ? '隱藏路由表' : '顯示路由表'}
          </button>

          {showRouteTable && (
            <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-3">
              <h3 className="text-sm font-bold text-amber-800 mb-2">📋 路由表</h3>
              <div className="space-y-1.5">
                {routes.map((route) => (
                  <div
                    key={route.path}
                    className={`p-2 rounded-lg text-xs font-mono transition-all ${
                      currentPath === route.path
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-stone-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{route.path}</span>
                      {currentPath === route.path && <span>✓</span>}
                    </div>
                    <div className="text-[10px] opacity-75">→ {route.name}Page</div>
                  </div>
                ))}
              </div>

              {/* 匹配說明 */}
              <div className="mt-3 p-2 bg-green-100 rounded-lg border border-green-300">
                <p className="text-xs text-green-800">
                  <strong>匹配結果：</strong>
                  <br />
                  路徑 <code className="bg-green-200 px-1 rounded">{currentPath}</code>
                  <br />
                  渲染 <code className="bg-green-200 px-1 rounded">{currentRoute.name}Page</code>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 2. 狀態獨立性互動示範
export function StateIsolationDemo() {
  const [currentPage, setCurrentPage] = useState<'A' | 'B'>('A');
  const [pageAInput, setPageAInput] = useState('');
  const [pageBCount, setPageBCount] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [accessAttempt, setAccessAttempt] = useState<{ page: string; result: string } | null>(null);

  // 模擬頁面切換時重置狀態
  const switchToPage = (page: 'A' | 'B') => {
    const fromPage = currentPage;
    setCurrentPage(page);
    setAccessAttempt(null);

    // 記錄歷史
    setHistory((prev) => [...prev, `${fromPage} → ${page}`]);

    // 模擬頁面切換時狀態重置
    if (page === 'A') {
      setPageAInput(''); // 模擬 A 頁面重新掛載，狀態重置
    } else {
      setPageBCount(0); // 模擬 B 頁面重新掛載，狀態重置
    }
  };

  // 模擬嘗試存取另一頁面的狀態
  const tryAccessOtherPageState = () => {
    if (currentPage === 'A') {
      setAccessAttempt({
        page: 'B',
        result: 'undefined（B 頁面未掛載，無法存取其 state）',
      });
    } else {
      setAccessAttempt({
        page: 'A',
        result: 'undefined（A 頁面未掛載，無法存取其 state）',
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-4 p-3 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>操作說明：</strong>
          1. 在 A 頁面輸入文字 → 2. 點擊「試著讀取 B 頁的狀態」→ 3. 觀察結果。
          你會發現無法讀取另一個頁面的狀態！
        </p>
      </div>

      <div className="flex gap-4">
        {/* 模擬瀏覽器 */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden border-2 border-stone-300 bg-stone-100">
            {/* 瀏覽器頂部 */}
            <div className="bg-stone-200 px-3 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1.5 border border-stone-300">
                <span className="text-stone-500 text-sm">mysite.com</span>
                <span
                  className={`font-mono text-sm font-bold ml-1 ${
                    currentPage === 'A' ? 'text-blue-600' : 'text-green-600'
                  }`}
                >
                  /page-{currentPage.toLowerCase()}
                </span>
              </div>
            </div>

            {/* 導航 */}
            <div className="bg-white border-b border-stone-200 px-3 py-2 flex gap-2">
              <button
                onClick={() => switchToPage('A')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === 'A' ? 'bg-blue-500 text-white' : 'bg-stone-100 text-stone-600'
                }`}
              >
                📝 A 頁面
              </button>
              <button
                onClick={() => switchToPage('B')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === 'B' ? 'bg-green-500 text-white' : 'bg-stone-100 text-stone-600'
                }`}
              >
                🔢 B 頁面
              </button>
            </div>

            {/* 頁面內容 */}
            <div className="bg-white min-h-[280px] p-4">
              {currentPage === 'A' ? (
                <div>
                  <h2 className="text-lg font-bold text-blue-600 mb-3">📝 A 頁面 - 文字輸入</h2>
                  <div className="mb-3">
                    <label className="block text-sm text-stone-600 mb-1">請輸入一些文字：</label>
                    <input
                      type="text"
                      value={pageAInput}
                      onChange={(e) => setPageAInput(e.target.value)}
                      placeholder="輸入後切換頁面看看..."
                      className="w-full p-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div
                    className={`p-3 rounded-lg mb-3 ${
                      pageAInput ? 'bg-green-100 border border-green-300' : 'bg-stone-100 border border-stone-200'
                    }`}
                  >
                    <p className="text-sm">
                      A 頁面狀態：
                      <span className={pageAInput ? 'text-green-600 font-bold' : 'text-stone-400'}>
                        {pageAInput || '(空白)'}
                      </span>
                    </p>
                  </div>

                  {/* 嘗試讀取另一頁面狀態 */}
                  <button
                    onClick={tryAccessOtherPageState}
                    className="w-full py-2 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600"
                  >
                    🔍 試著讀取 B 頁的狀態 (pageBCount)
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-lg font-bold text-green-600 mb-3">🔢 B 頁面 - 計數器</h2>
                  <div className="flex items-center gap-4 mb-3">
                    <button
                      onClick={() => setPageBCount((c) => c - 1)}
                      className="w-10 h-10 bg-red-500 text-white rounded-lg text-xl font-bold"
                    >
                      -
                    </button>
                    <div className="text-3xl font-bold text-green-600 w-16 text-center">{pageBCount}</div>
                    <button
                      onClick={() => setPageBCount((c) => c + 1)}
                      className="w-10 h-10 bg-green-500 text-white rounded-lg text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                  <div className="p-3 rounded-lg mb-3 bg-green-100 border border-green-300">
                    <p className="text-sm">
                      B 頁面狀態：<span className="text-green-600 font-bold">{pageBCount}</span>
                    </p>
                  </div>

                  {/* 嘗試讀取另一頁面狀態 */}
                  <button
                    onClick={tryAccessOtherPageState}
                    className="w-full py-2 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600"
                  >
                    🔍 試著讀取 A 頁的狀態 (pageAInput)
                  </button>
                </div>
              )}

              {/* 存取結果 */}
              {accessAttempt && (
                <div className="mt-3 p-3 bg-red-100 border-2 border-red-400 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>❌ 嘗試讀取 {accessAttempt.page} 頁面的狀態：</strong>
                  </p>
                  <p className="text-sm text-red-600 font-mono mt-1">{accessAttempt.result}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 右側：狀態說明 */}
        <div className="w-64 space-y-3">
          {/* 元件狀態說明 */}
          <div className="rounded-xl border-2 border-purple-300 bg-purple-50 p-3">
            <h3 className="text-sm font-bold text-purple-800 mb-2">🔄 元件生命週期</h3>
            <div className="space-y-2 text-xs">
              <div className={`p-2 rounded border ${currentPage === 'A' ? 'bg-blue-50 border-blue-300' : 'bg-stone-100 border-stone-200'}`}>
                <div className="font-bold text-blue-600">A 頁面</div>
                <div className={currentPage === 'A' ? 'text-blue-600' : 'text-stone-400'}>
                  {currentPage === 'A' ? '✓ 已掛載' : '✗ 已卸載（無法存取）'}
                </div>
              </div>
              <div className={`p-2 rounded border ${currentPage === 'B' ? 'bg-green-50 border-green-300' : 'bg-stone-100 border-stone-200'}`}>
                <div className="font-bold text-green-600">B 頁面</div>
                <div className={currentPage === 'B' ? 'text-green-600' : 'text-stone-400'}>
                  {currentPage === 'B' ? '✓ 已掛載' : '✗ 已卸載（無法存取）'}
                </div>
              </div>
            </div>
          </div>

          {/* 切換歷史 */}
          <div className="rounded-xl border-2 border-stone-300 bg-stone-50 p-3">
            <h3 className="text-sm font-bold text-stone-700 mb-2">📜 切換歷史</h3>
            <div className="space-y-1 max-h-24 overflow-auto">
              {history.length === 0 ? (
                <p className="text-xs text-stone-400">尚無切換記錄</p>
              ) : (
                history.slice(-4).map((h, i) => (
                  <div key={i} className="text-xs bg-white p-1.5 rounded border border-stone-200">
                    {h} <span className="text-red-500">(重置)</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* 重點提示 */}
          <div className="rounded-xl border-2 border-red-300 bg-red-50 p-3">
            <h3 className="text-sm font-bold text-red-800 mb-1">⚠️ 重點</h3>
            <p className="text-xs text-red-700">
              每個頁面元件是獨立的，無法直接存取另一個頁面的 state！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
