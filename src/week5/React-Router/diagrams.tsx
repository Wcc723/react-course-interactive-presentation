// 1. 什麼是路由 - 瀏覽器網址切換時頁面替換示意圖
export function WhatIsRoutingDiagram() {
  return (
    <svg width="650" height="420" viewBox="0 0 650 420">
      <rect width="650" height="420" fill="#fffdf8" />

      <text x="325" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        什麼是路由？網址改變 → 頁面內容替換
      </text>

      {/* 左側瀏覽器 - 首頁 */}
      <g>
        {/* 瀏覽器外框 */}
        <rect x="30" y="55" width="260" height="200" rx="8" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="2" />

        {/* 瀏覽器頂部 */}
        <rect x="30" y="55" width="260" height="30" rx="8" fill="#e7e5e4" />
        <rect x="30" y="75" width="260" height="10" fill="#e7e5e4" />

        {/* 紅黃綠按鈕 */}
        <circle cx="48" cy="70" r="5" fill="#ef4444" />
        <circle cx="63" cy="70" r="5" fill="#f59e0b" />
        <circle cx="78" cy="70" r="5" fill="#10b981" />

        {/* 網址列 */}
        <rect x="95" y="62" width="180" height="18" rx="4" fill="white" stroke="#d6d3d1" strokeWidth="1" />
        <text x="105" y="75" fill="#3b82f6" fontSize="10" fontFamily="monospace">
          mysite.com/
        </text>

        {/* 頁面內容 - 首頁 */}
        <rect x="45" y="100" width="230" height="140" fill="white" />
        <text x="160" y="130" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="bold">
          🏠 首頁
        </text>
        <rect x="60" y="145" width="200" height="12" rx="2" fill="#e7e5e4" />
        <rect x="60" y="165" width="180" height="12" rx="2" fill="#e7e5e4" />
        <rect x="60" y="185" width="160" height="12" rx="2" fill="#e7e5e4" />
        <rect x="60" y="210" width="80" height="20" rx="4" fill="#3b82f6" />
        <text x="100" y="224" textAnchor="middle" fill="white" fontSize="10">了解更多</text>
      </g>

      {/* 切換箭頭 */}
      <g>
        <path d="M300,155 L350,155" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowOrange)" />
        <text x="325" y="140" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">
          點擊連結
        </text>
        <text x="325" y="175" textAnchor="middle" fill="#78716c" fontSize="10">
          網址改變
        </text>
      </g>

      {/* 右側瀏覽器 - 關於頁面 */}
      <g>
        {/* 瀏覽器外框 */}
        <rect x="360" y="55" width="260" height="200" rx="8" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="2" />

        {/* 瀏覽器頂部 */}
        <rect x="360" y="55" width="260" height="30" rx="8" fill="#e7e5e4" />
        <rect x="360" y="75" width="260" height="10" fill="#e7e5e4" />

        {/* 紅黃綠按鈕 */}
        <circle cx="378" cy="70" r="5" fill="#ef4444" />
        <circle cx="393" cy="70" r="5" fill="#f59e0b" />
        <circle cx="408" cy="70" r="5" fill="#10b981" />

        {/* 網址列 - 高亮顯示變化 */}
        <rect x="425" y="62" width="180" height="18" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="435" y="75" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">
          mysite.com/about
        </text>

        {/* 頁面內容 - 關於頁面 */}
        <rect x="375" y="100" width="230" height="140" fill="white" />
        <text x="490" y="130" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">
          👤 關於我們
        </text>
        <rect x="390" y="145" width="200" height="12" rx="2" fill="#dcfce7" />
        <rect x="390" y="165" width="180" height="12" rx="2" fill="#dcfce7" />
        <rect x="390" y="185" width="160" height="12" rx="2" fill="#dcfce7" />
        <rect x="390" y="210" width="80" height="20" rx="4" fill="#10b981" />
        <text x="430" y="224" textAnchor="middle" fill="white" fontSize="10">聯絡我們</text>
      </g>

      {/* 說明區域 */}
      <rect x="30" y="280" width="590" height="120" rx="12" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1" />

      <text x="50" y="310" fill="#78716c" fontSize="13" fontWeight="bold">
        路由 (Routing) 的核心概念：
      </text>

      <g>
        <circle cx="60" cy="340" r="8" fill="#3b82f6" />
        <text x="60" y="344" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1</text>
        <text x="80" y="345" fill="#1e293b" fontSize="12">使用者點擊連結或輸入網址</text>
      </g>

      <g>
        <circle cx="60" cy="370" r="8" fill="#f59e0b" />
        <text x="60" y="374" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">2</text>
        <text x="80" y="375" fill="#1e293b" fontSize="12">瀏覽器的 URL 發生改變</text>
      </g>

      <g>
        <circle cx="340" cy="340" r="8" fill="#10b981" />
        <text x="340" y="344" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">3</text>
        <text x="360" y="345" fill="#1e293b" fontSize="12">網頁應用程式根據 URL 顯示對應內容</text>
      </g>

      <g>
        <circle cx="340" cy="370" r="8" fill="#8b5cf6" />
        <text x="340" y="374" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">4</text>
        <text x="360" y="375" fill="#1e293b" fontSize="12">使用者看到新的頁面，但不需重新載入整個網頁</text>
      </g>

      <defs>
        <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
        </marker>
      </defs>
    </svg>
  );
}

// 2. React Router 兩大結構 - 路由表
export function RouterTableDiagram() {
  return (
    <svg width="600" height="400" viewBox="0 0 600 400">
      <rect width="600" height="400" fill="#fffdf8" />

      <text x="300" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        React Router 結構一：路由表 (Route Table)
      </text>

      {/* 路由表視覺化 */}
      <rect x="50" y="55" width="500" height="320" rx="12" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="2" />

      {/* 表頭 */}
      <rect x="50" y="55" width="500" height="40" rx="12" fill="#3b82f6" />
      <rect x="50" y="80" width="500" height="15" fill="#3b82f6" />
      <text x="180" y="82" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">路徑 (Path)</text>
      <line x1="300" y1="55" x2="300" y2="375" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <text x="420" y="82" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">對應元件 (Component)</text>

      {/* 路由項目 */}
      {[
        { path: '/', component: '<Home />', icon: '🏠', color: '#3b82f6' },
        { path: '/about', component: '<About />', icon: '👤', color: '#10b981' },
        { path: '/products', component: '<Products />', icon: '📦', color: '#f59e0b' },
        { path: '/contact', component: '<Contact />', icon: '📧', color: '#8b5cf6' },
      ].map((route, i) => (
        <g key={i}>
          <rect x="60" y={110 + i * 65} width="480" height="55" rx="8" fill="white" stroke="#e7e5e4" strokeWidth="1" />

          {/* 路徑 */}
          <text x="85" y={145 + i * 65} fill={route.color} fontSize="16" fontFamily="monospace" fontWeight="bold">
            {route.path}
          </text>

          {/* 箭頭 */}
          <path d={`M260,${137 + i * 65} L290,${137 + i * 65}`} stroke="#78716c" strokeWidth="2" markerEnd="url(#arrowGray)" />

          {/* 元件 */}
          <text x="310" y={145 + i * 65} fill={route.color} fontSize="14" fontFamily="monospace">
            {route.icon} {route.component}
          </text>
        </g>
      ))}

      <defs>
        <marker id="arrowGray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#78716c" />
        </marker>
      </defs>
    </svg>
  );
}

// 3. React Router 兩大結構 - 頁面元件
export function PageComponentDiagram() {
  return (
    <svg width="600" height="400" viewBox="0 0 600 400">
      <rect width="600" height="400" fill="#fffdf8" />

      <text x="300" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        React Router 結構二：頁面元件 (Page Components)
      </text>

      {/* 元件庫概念 */}
      <rect x="30" y="55" width="540" height="320" rx="12" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="2" />
      <text x="50" y="80" fill="#78716c" fontSize="12" fontWeight="bold">📁 pages/</text>

      {/* 四個頁面元件 */}
      {[
        { name: 'Home.tsx', icon: '🏠', color: '#3b82f6', x: 50, content: ['歡迎標題', '網站介紹', 'CTA 按鈕'] },
        { name: 'About.tsx', icon: '👤', color: '#10b981', x: 300, content: ['團隊介紹', '公司歷史', '願景使命'] },
        { name: 'Products.tsx', icon: '📦', color: '#f59e0b', x: 50, y: 220, content: ['商品列表', '分類篩選', '加入購物車'] },
        { name: 'Contact.tsx', icon: '📧', color: '#8b5cf6', x: 300, y: 220, content: ['聯絡表單', '地圖位置', '社群連結'] },
      ].map((comp, i) => (
        <g key={i}>
          <rect
            x={comp.x}
            y={comp.y || 95}
            width="230"
            height="110"
            rx="8"
            fill="white"
            stroke={comp.color}
            strokeWidth="2"
          />

          {/* 檔案名稱 */}
          <rect x={comp.x} y={comp.y || 95} width="230" height="30" rx="8" fill={comp.color} />
          <rect x={comp.x} y={(comp.y || 95) + 20} width="230" height="10" fill={comp.color} />
          <text x={comp.x + 15} y={(comp.y || 95) + 20} fill="white" fontSize="12" fontWeight="bold">
            {comp.icon} {comp.name}
          </text>

          {/* 內容示意 */}
          {comp.content.map((item, j) => (
            <text
              key={j}
              x={comp.x + 20}
              y={(comp.y || 95) + 50 + j * 20}
              fill="#78716c"
              fontSize="11"
            >
              • {item}
            </text>
          ))}
        </g>
      ))}

      {/* 說明文字 */}
      <text x="300" y="375" textAnchor="middle" fill="#78716c" fontSize="12">
        每個頁面元件負責渲染該頁面的完整內容
      </text>
    </svg>
  );
}

// 4. 路由配對流程圖 - 互動版的靜態說明
export function RoutingFlowDiagram() {
  return (
    <svg width="700" height="420" viewBox="0 0 700 420">
      <rect width="700" height="420" fill="#fffdf8" />

      <text x="350" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        路由運作流程：URL → 路由表比對 → 渲染元件
      </text>

      {/* 瀏覽器網址列 */}
      <g>
        <rect x="30" y="55" width="200" height="80" rx="8" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="2" />
        <text x="130" y="80" textAnchor="middle" fill="#78716c" fontSize="11" fontWeight="bold">瀏覽器網址</text>
        <rect x="45" y="95" width="170" height="25" rx="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
        <text x="130" y="112" textAnchor="middle" fill="#3b82f6" fontSize="11" fontFamily="monospace">
          /products
        </text>
      </g>

      {/* 箭頭 1 */}
      <path d="M230,95 L265,95" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />

      {/* 路由表 */}
      <g>
        <rect x="270" y="50" width="180" height="160" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="360" y="75" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">📋 路由表</text>

        {[
          { path: '/', comp: 'Home', matched: false },
          { path: '/about', comp: 'About', matched: false },
          { path: '/products', comp: 'Products', matched: true },
          { path: '/contact', comp: 'Contact', matched: false },
        ].map((r, i) => (
          <g key={i}>
            <rect
              x="285"
              y={90 + i * 28}
              width="150"
              height="24"
              rx="4"
              fill={r.matched ? '#10b981' : 'white'}
              stroke={r.matched ? '#10b981' : '#e7e5e4'}
              strokeWidth="1"
            />
            <text
              x="295"
              y={106 + i * 28}
              fill={r.matched ? 'white' : '#78716c'}
              fontSize="10"
              fontFamily="monospace"
            >
              {r.path} → {r.comp}
            </text>
            {r.matched && <text x="420" y={106 + i * 28} fill="#10b981" fontSize="12">✓</text>}
          </g>
        ))}
      </g>

      {/* 箭頭 2 */}
      <path d="M450,130 L485,130" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />

      {/* 渲染元件 */}
      <g>
        <rect x="490" y="55" width="180" height="160" rx="8" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
        <text x="580" y="80" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">🎨 渲染元件</text>

        <rect x="510" y="95" width="140" height="100" rx="6" fill="white" stroke="#10b981" strokeWidth="1" />
        <text x="580" y="120" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
          📦 Products
        </text>
        <rect x="525" y="135" width="110" height="8" rx="2" fill="#fef3c7" />
        <rect x="525" y="150" width="90" height="8" rx="2" fill="#fef3c7" />
        <rect x="525" y="165" width="100" height="8" rx="2" fill="#fef3c7" />
      </g>

      {/* 下方流程說明 */}
      <rect x="30" y="240" width="640" height="160" rx="12" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1" />

      <text x="50" y="270" fill="#78716c" fontSize="13" fontWeight="bold">
        完整流程步驟：
      </text>

      {/* 步驟流程 */}
      <g>
        <rect x="50" y="290" width="130" height="50" rx="8" fill="#3b82f6" />
        <text x="115" y="312" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">1. 取得 URL</text>
        <text x="115" y="328" textAnchor="middle" fill="#bfdbfe" fontSize="9">/products</text>
      </g>

      <path d="M180,315 L205,315" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />

      <g>
        <rect x="210" y="290" width="130" height="50" rx="8" fill="#f59e0b" />
        <text x="275" y="312" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">2. 比對路由表</text>
        <text x="275" y="328" textAnchor="middle" fill="#fef3c7" fontSize="9">找到匹配路徑</text>
      </g>

      <path d="M340,315 L365,315" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowOrange2)" />

      <g>
        <rect x="370" y="290" width="130" height="50" rx="8" fill="#10b981" />
        <text x="435" y="312" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">3. 載入元件</text>
        <text x="435" y="328" textAnchor="middle" fill="#bbf7d0" fontSize="9">Products 元件</text>
      </g>

      <path d="M500,315 L525,315" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />

      <g>
        <rect x="530" y="290" width="130" height="50" rx="8" fill="#8b5cf6" />
        <text x="595" y="312" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">4. 顯示頁面</text>
        <text x="595" y="328" textAnchor="middle" fill="#e9d5ff" fontSize="9">渲染到畫面</text>
      </g>

      <text x="350" y="375" textAnchor="middle" fill="#78716c" fontSize="11">
        💡 整個過程不需要重新載入頁面，實現 SPA (Single Page Application) 體驗
      </text>

      <defs>
        <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
        </marker>
        <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
        <marker id="arrowOrange2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
        </marker>
      </defs>
    </svg>
  );
}

// 5. 狀態獨立性示意圖 - 頁面切換狀態遺失
export function StateIsolationDiagram() {
  return (
    <svg width="680" height="240" viewBox="0 0 680 240">
      <rect width="680" height="240" fill="#fffdf8" />

      <text x="340" y="25" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        頁面元件狀態獨立：切換頁面時狀態會重置
      </text>

      {/* 第一階段：A 頁面有資料 */}
      <g>
        <text x="25" y="55" fill="#3b82f6" fontSize="11" fontWeight="bold">階段 1：在 A 頁面輸入資料</text>

        {/* 瀏覽器 */}
        <rect x="25" y="65" width="180" height="150" rx="8" fill="#f5f5f4" stroke="#3b82f6" strokeWidth="2" />
        <rect x="25" y="65" width="180" height="22" rx="8" fill="#3b82f6" />
        <rect x="25" y="80" width="180" height="7" fill="#3b82f6" />
        <circle cx="38" cy="76" r="3" fill="#fbbf24" />
        <circle cx="48" cy="76" r="3" fill="#22c55e" />
        <text x="115" y="79" textAnchor="middle" fill="white" fontSize="8">/page-a</text>

        {/* 頁面內容 */}
        <rect x="35" y="95" width="160" height="110" fill="white" rx="4" />
        <text x="115" y="115" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">📝 A 頁面</text>
        <text x="45" y="135" fill="#78716c" fontSize="9">輸入：</text>
        <rect x="75" y="125" width="110" height="18" rx="3" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
        <text x="130" y="138" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">Hello World</text>
        <text x="115" y="165" textAnchor="middle" fill="#10b981" fontSize="10">✓ 有資料</text>
        <text x="115" y="195" textAnchor="middle" fill="#78716c" fontSize="9">state = "Hello World"</text>
      </g>

      {/* 箭頭：切換到 B */}
      <path d="M215,140 L245,140" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowOrange3)" />
      <text x="230" y="130" textAnchor="middle" fill="#f59e0b" fontSize="9">切換</text>

      {/* 第二階段：切換到 B 頁面 */}
      <g>
        <text x="255" y="55" fill="#10b981" fontSize="11" fontWeight="bold">階段 2：切換到 B 頁面</text>

        {/* 瀏覽器 */}
        <rect x="255" y="65" width="180" height="150" rx="8" fill="#f5f5f4" stroke="#10b981" strokeWidth="2" />
        <rect x="255" y="65" width="180" height="22" rx="8" fill="#10b981" />
        <rect x="255" y="80" width="180" height="7" fill="#10b981" />
        <circle cx="268" cy="76" r="3" fill="#fbbf24" />
        <circle cx="278" cy="76" r="3" fill="#22c55e" />
        <text x="345" y="79" textAnchor="middle" fill="white" fontSize="8">/page-b</text>

        {/* 頁面內容 */}
        <rect x="265" y="95" width="160" height="110" fill="white" rx="4" />
        <text x="345" y="115" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">🔢 B 頁面</text>
        <text x="275" y="135" fill="#78716c" fontSize="9">計數：</text>
        <rect x="315" y="125" width="50" height="18" rx="3" fill="#dcfce7" stroke="#10b981" strokeWidth="1" />
        <text x="340" y="138" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">5</text>
        <text x="345" y="165" textAnchor="middle" fill="#78716c" fontSize="10">B 頁自己的狀態</text>
        <text x="345" y="195" textAnchor="middle" fill="#78716c" fontSize="9">state = 5</text>
      </g>

      {/* 箭頭：切回 A */}
      <path d="M445,140 L475,140" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
      <text x="460" y="130" textAnchor="middle" fill="#ef4444" fontSize="9">切回</text>

      {/* 第三階段：切回 A 頁面，狀態遺失 */}
      <g>
        <text x="485" y="55" fill="#ef4444" fontSize="11" fontWeight="bold">階段 3：切回 A 頁面</text>

        {/* 瀏覽器 */}
        <rect x="485" y="65" width="180" height="150" rx="8" fill="#f5f5f4" stroke="#ef4444" strokeWidth="2" />
        <rect x="485" y="65" width="180" height="22" rx="8" fill="#ef4444" />
        <rect x="485" y="80" width="180" height="7" fill="#ef4444" />
        <circle cx="498" cy="76" r="3" fill="#fbbf24" />
        <circle cx="508" cy="76" r="3" fill="#22c55e" />
        <text x="575" y="79" textAnchor="middle" fill="white" fontSize="8">/page-a</text>

        {/* 頁面內容 */}
        <rect x="495" y="95" width="160" height="110" fill="white" rx="4" />
        <text x="575" y="115" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">📝 A 頁面</text>
        <text x="505" y="135" fill="#78716c" fontSize="9">輸入：</text>
        <rect x="535" y="125" width="110" height="18" rx="3" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" strokeDasharray="3" />
        <text x="590" y="138" textAnchor="middle" fill="#9ca3af" fontSize="10">空白</text>
        <text x="575" y="165" textAnchor="middle" fill="#ef4444" fontSize="10">❌ 資料遺失！</text>
        <text x="575" y="195" textAnchor="middle" fill="#ef4444" fontSize="9">state = "" (重置)</text>
      </g>

      <defs>
        <marker id="arrowOrange3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
        </marker>
        <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
        </marker>
      </defs>
    </svg>
  );
}
