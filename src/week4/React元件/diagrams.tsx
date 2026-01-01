// 步驟 1: 電腦元件組成示意圖
export function ComputerComponentsDiagram() {
  return (
    <svg width="700" height="400" viewBox="0 0 700 400">
      {/* 背景 */}
      <rect width="700" height="400" fill="#fffdf8" />

      {/* 標題 */}
      <text x="350" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        電腦由多個元件組成，各司其職
      </text>

      {/* 主機板 - 中央大區塊 */}
      <rect x="200" y="100" width="300" height="250" rx="12" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="2" />
      <text x="350" y="125" textAnchor="middle" fill="#059669" fontSize="14" fontWeight="bold">
        主機板 Motherboard
      </text>

      {/* CPU */}
      <rect x="230" y="150" width="100" height="70" rx="8" fill="#3b82f6" />
      <text x="280" y="180" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        CPU
      </text>
      <text x="280" y="200" textAnchor="middle" fill="#bfdbfe" fontSize="10">
        處理運算
      </text>

      {/* 記憶體 */}
      <rect x="370" y="150" width="100" height="70" rx="8" fill="#8b5cf6" />
      <text x="420" y="180" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        記憶體
      </text>
      <text x="420" y="200" textAnchor="middle" fill="#ddd6fe" fontSize="10">
        暫存資料
      </text>

      {/* 顯示卡 */}
      <rect x="230" y="250" width="100" height="70" rx="8" fill="#f59e0b" />
      <text x="280" y="280" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        顯示卡
      </text>
      <text x="280" y="300" textAnchor="middle" fill="#fef3c7" fontSize="10">
        輸出畫面
      </text>

      {/* 硬碟 */}
      <rect x="370" y="250" width="100" height="70" rx="8" fill="#ec4899" />
      <text x="420" y="280" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        硬碟
      </text>
      <text x="420" y="300" textAnchor="middle" fill="#fbcfe8" fontSize="10">
        儲存資料
      </text>

      {/* 鍵盤 - 外部元件 */}
      <rect x="30" y="180" width="90" height="50" rx="8" fill="#64748b" />
      <text x="75" y="200" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
        ⌨️ 鍵盤
      </text>
      <text x="75" y="218" textAnchor="middle" fill="#e2e8f0" fontSize="9">
        輸入
      </text>

      {/* 滑鼠 - 外部元件 */}
      <rect x="30" y="250" width="90" height="50" rx="8" fill="#64748b" />
      <text x="75" y="270" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
        🖱️ 滑鼠
      </text>
      <text x="75" y="288" textAnchor="middle" fill="#e2e8f0" fontSize="9">
        輸入
      </text>

      {/* 螢幕 - 外部元件 */}
      <rect x="580" y="200" width="90" height="70" rx="8" fill="#0ea5e9" />
      <text x="625" y="228" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
        🖥️ 螢幕
      </text>
      <text x="625" y="248" textAnchor="middle" fill="#e0f2fe" fontSize="9">
        輸出畫面
      </text>

      {/* 連接線 - 鍵盤到主機板 */}
      <defs>
        <marker id="arrow-comp" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
        </marker>
      </defs>

      <path d="M120,205 L195,205" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-comp)" strokeDasharray="4,2" />
      <path d="M120,275 L195,275" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-comp)" strokeDasharray="4,2" />

      {/* 顯卡到螢幕 */}
      <path d="M330,285 L505,235" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-comp)" />
      <path d="M505,235 L575,235" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow-comp)" />

      {/* 說明文字 */}
      <text x="350" y="380" textAnchor="middle" fill="#78716c" fontSize="13">
        每個元件都有專屬功能，透過介面彼此連接、傳遞資料
      </text>
    </svg>
  );
}

// 步驟 2: 為什麼要使用元件 - 程式碼太長
export function WhyComponentCodeLengthDiagram() {
  return (
    <svg width="600" height="350" viewBox="0 0 600 350">
      <rect width="600" height="350" fill="#fffdf8" />

      {/* 標題 */}
      <text x="300" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        問題一：程式碼太長，難以閱讀維護
      </text>

      {/* 左側：一個超長檔案 */}
      <rect x="50" y="60" width="180" height="250" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="140" y="85" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">
        App.tsx（500+ 行）
      </text>

      {/* 模擬程式碼行 */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect key={i} x="65" y={100 + i * 15} width={100 + (i % 3) * 30} height="8" rx="2" fill="#fca5a5" opacity="0.6" />
      ))}

      <text x="140" y="310" textAnchor="middle" fill="#dc2626" fontSize="11">
        所有程式碼擠在一起 😰
      </text>

      {/* 右側：拆分成多個檔案 */}
      <rect x="320" y="60" width="230" height="250" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
      <text x="435" y="85" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">
        拆分成多個元件
      </text>

      {/* 多個小檔案 */}
      <rect x="340" y="100" width="90" height="50" rx="6" fill="#10b981" />
      <text x="385" y="120" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Header.tsx</text>
      <text x="385" y="138" textAnchor="middle" fill="#d1fae5" fontSize="9">50 行</text>

      <rect x="450" y="100" width="90" height="50" rx="6" fill="#3b82f6" />
      <text x="495" y="120" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Menu.tsx</text>
      <text x="495" y="138" textAnchor="middle" fill="#bfdbfe" fontSize="9">40 行</text>

      <rect x="340" y="165" width="90" height="50" rx="6" fill="#f59e0b" />
      <text x="385" y="185" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">ProductList.tsx</text>
      <text x="385" y="203" textAnchor="middle" fill="#fef3c7" fontSize="9">80 行</text>

      <rect x="450" y="165" width="90" height="50" rx="6" fill="#8b5cf6" />
      <text x="495" y="185" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Cart.tsx</text>
      <text x="495" y="203" textAnchor="middle" fill="#ddd6fe" fontSize="9">60 行</text>

      <rect x="340" y="230" width="90" height="50" rx="6" fill="#ec4899" />
      <text x="385" y="250" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Footer.tsx</text>
      <text x="385" y="268" textAnchor="middle" fill="#fbcfe8" fontSize="9">30 行</text>

      <text x="435" y="310" textAnchor="middle" fill="#059669" fontSize="11">
        各自獨立，易於維護 ✓
      </text>

      {/* 箭頭 */}
      <path d="M240,185 L310,185" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-benefit)" />

      <defs>
        <marker id="arrow-benefit" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  );
}

// 步驟 5: 為什麼要使用元件 - 邏輯拆分
export function WhyComponentLogicSplitDiagram() {
  return (
    <svg width="600" height="350" viewBox="0 0 600 350">
      <rect width="600" height="350" fill="#fffdf8" />

      {/* 標題 */}
      <text x="300" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        問題三：不同功能的邏輯混在一起
      </text>

      {/* 左側：邏輯混亂 */}
      <rect x="30" y="60" width="180" height="250" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="120" y="85" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">
        邏輯混雜的程式碼
      </text>

      <rect x="50" y="100" width="140" height="25" rx="4" fill="#3b82f6" opacity="0.7" />
      <text x="120" y="117" textAnchor="middle" fill="white" fontSize="9">Header 邏輯</text>

      <rect x="50" y="130" width="140" height="25" rx="4" fill="#10b981" opacity="0.7" />
      <text x="120" y="147" textAnchor="middle" fill="white" fontSize="9">Cart 邏輯</text>

      <rect x="50" y="160" width="140" height="25" rx="4" fill="#3b82f6" opacity="0.7" />
      <text x="120" y="177" textAnchor="middle" fill="white" fontSize="9">Header 樣式</text>

      <rect x="50" y="190" width="140" height="25" rx="4" fill="#f59e0b" opacity="0.7" />
      <text x="120" y="207" textAnchor="middle" fill="white" fontSize="9">Product 邏輯</text>

      <rect x="50" y="220" width="140" height="25" rx="4" fill="#10b981" opacity="0.7" />
      <text x="120" y="237" textAnchor="middle" fill="white" fontSize="9">Cart 樣式</text>

      <rect x="50" y="250" width="140" height="25" rx="4" fill="#f59e0b" opacity="0.7" />
      <text x="120" y="267" textAnchor="middle" fill="white" fontSize="9">Product 樣式</text>

      <text x="120" y="310" textAnchor="middle" fill="#dc2626" fontSize="11">
        功能散落各處 😰
      </text>

      {/* 右側：邏輯分離 */}
      <rect x="300" y="60" width="270" height="250" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
      <text x="435" y="85" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">
        元件化：各自負責獨立功能
      </text>

      {/* Header 元件 */}
      <rect x="320" y="105" width="110" height="70" rx="6" fill="#3b82f6" />
      <text x="375" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Header.tsx</text>
      <text x="375" y="150" textAnchor="middle" fill="#bfdbfe" fontSize="9">導航、標題邏輯</text>
      <text x="375" y="165" textAnchor="middle" fill="#bfdbfe" fontSize="9">專屬樣式</text>

      {/* Cart 元件 */}
      <rect x="450" y="105" width="110" height="70" rx="6" fill="#10b981" />
      <text x="505" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Cart.tsx</text>
      <text x="505" y="150" textAnchor="middle" fill="#d1fae5" fontSize="9">購物車邏輯</text>
      <text x="505" y="165" textAnchor="middle" fill="#d1fae5" fontSize="9">專屬樣式</text>

      {/* Product 元件 */}
      <rect x="320" y="190" width="110" height="70" rx="6" fill="#f59e0b" />
      <text x="375" y="215" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Product.tsx</text>
      <text x="375" y="235" textAnchor="middle" fill="#fef3c7" fontSize="9">商品列表邏輯</text>
      <text x="375" y="250" textAnchor="middle" fill="#fef3c7" fontSize="9">專屬樣式</text>

      {/* Footer 元件 */}
      <rect x="450" y="190" width="110" height="70" rx="6" fill="#8b5cf6" />
      <text x="505" y="215" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Footer.tsx</text>
      <text x="505" y="235" textAnchor="middle" fill="#ddd6fe" fontSize="9">頁尾邏輯</text>
      <text x="505" y="250" textAnchor="middle" fill="#ddd6fe" fontSize="9">專屬樣式</text>

      <text x="435" y="310" textAnchor="middle" fill="#059669" fontSize="11">
        職責分明，獨立運作 ✓
      </text>

      {/* 箭頭 */}
      <path d="M220,185 L290,185" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-benefit)" />
    </svg>
  );
}

// 步驟 6: 網頁元件結構範例
export function WebpageComponentsDiagram() {
  return (
    <svg width="700" height="450" viewBox="0 0 700 450">
      <rect width="700" height="450" fill="#fffdf8" />

      {/* 標題 */}
      <text x="350" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        React 元件結構範例：電商網站
      </text>

      {/* 網頁框架 */}
      <rect x="50" y="60" width="600" height="360" rx="12" fill="white" stroke="#d4d4d4" strokeWidth="2" />

      {/* Header */}
      <rect x="60" y="70" width="580" height="50" rx="8" fill="#3b82f6" />
      <text x="350" y="100" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
        Header 元件
      </text>

      {/* Navbar 在 Header 內 */}
      <rect x="400" y="78" width="230" height="34" rx="6" fill="#1d4ed8" />
      <text x="515" y="100" textAnchor="middle" fill="white" fontSize="11">
        Navbar 元件
      </text>

      {/* 主要內容區 */}
      <g>
        {/* Sidebar */}
        <rect x="60" y="130" width="120" height="230" rx="8" fill="#10b981" />
        <text x="120" y="160" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          Sidebar
        </text>
        <text x="120" y="180" textAnchor="middle" fill="#d1fae5" fontSize="10">
          元件
        </text>

        {/* Menu 在 Sidebar 內 */}
        <rect x="70" y="200" width="100" height="60" rx="6" fill="#059669" />
        <text x="120" y="235" textAnchor="middle" fill="white" fontSize="10">
          Menu 元件
        </text>

        {/* Filter 在 Sidebar 內 */}
        <rect x="70" y="270" width="100" height="80" rx="6" fill="#059669" />
        <text x="120" y="315" textAnchor="middle" fill="white" fontSize="10">
          Filter 元件
        </text>
      </g>

      {/* Main Content */}
      <g>
        <rect x="190" y="130" width="340" height="230" rx="8" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2" />
        <text x="360" y="155" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="bold">
          Main 元件（內容區）
        </text>

        {/* ProductCard 們 */}
        <rect x="205" y="170" width="95" height="80" rx="6" fill="#f59e0b" />
        <text x="252" y="205" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ProductCard</text>
        <text x="252" y="222" textAnchor="middle" fill="#fef3c7" fontSize="8">元件</text>

        <rect x="310" y="170" width="95" height="80" rx="6" fill="#f59e0b" />
        <text x="357" y="205" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ProductCard</text>
        <text x="357" y="222" textAnchor="middle" fill="#fef3c7" fontSize="8">元件</text>

        <rect x="415" y="170" width="95" height="80" rx="6" fill="#f59e0b" />
        <text x="462" y="205" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ProductCard</text>
        <text x="462" y="222" textAnchor="middle" fill="#fef3c7" fontSize="8">元件</text>

        <rect x="205" y="260" width="95" height="80" rx="6" fill="#f59e0b" />
        <text x="252" y="295" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ProductCard</text>
        <text x="252" y="312" textAnchor="middle" fill="#fef3c7" fontSize="8">元件</text>

        <rect x="310" y="260" width="95" height="80" rx="6" fill="#f59e0b" />
        <text x="357" y="295" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ProductCard</text>
        <text x="357" y="312" textAnchor="middle" fill="#fef3c7" fontSize="8">元件</text>

        <rect x="415" y="260" width="95" height="80" rx="6" fill="#f59e0b" />
        <text x="462" y="295" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ProductCard</text>
        <text x="462" y="312" textAnchor="middle" fill="#fef3c7" fontSize="8">元件</text>
      </g>

      {/* Cart Sidebar */}
      <rect x="540" y="130" width="100" height="230" rx="8" fill="#8b5cf6" />
      <text x="590" y="160" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        Cart
      </text>
      <text x="590" y="180" textAnchor="middle" fill="#ddd6fe" fontSize="10">
        元件
      </text>

      {/* CartItem 在 Cart 內 */}
      <rect x="550" y="200" width="80" height="40" rx="4" fill="#7c3aed" />
      <text x="590" y="225" textAnchor="middle" fill="white" fontSize="9">CartItem</text>

      <rect x="550" y="250" width="80" height="40" rx="4" fill="#7c3aed" />
      <text x="590" y="275" textAnchor="middle" fill="white" fontSize="9">CartItem</text>

      <rect x="550" y="300" width="80" height="40" rx="4" fill="#6d28d9" />
      <text x="590" y="325" textAnchor="middle" fill="white" fontSize="9">Total</text>

      {/* Footer */}
      <rect x="60" y="370" width="580" height="40" rx="8" fill="#64748b" />
      <text x="350" y="395" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        Footer 元件
      </text>

      {/* 說明 */}
      <text x="350" y="435" textAnchor="middle" fill="#78716c" fontSize="12">
        每個區塊都是獨立元件，可以嵌套使用、重複使用
      </text>
    </svg>
  );
}

// 步驟 8: Props 元件間資料傳輸
export function PropsDataFlowDiagram() {
  return (
    <svg width="700" height="400" viewBox="0 0 700 400">
      <rect width="700" height="400" fill="#fffdf8" />

      {/* 標題 */}
      <text x="350" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        React 元件資料傳輸：Props（單向資料流）
      </text>

      {/* 父元件 */}
      <rect x="150" y="60" width="400" height="300" rx="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="350" y="90" textAnchor="middle" fill="#1d4ed8" fontSize="14" fontWeight="bold">
        App（父元件）
      </text>

      {/* 資料來源 */}
      <rect x="180" y="110" width="140" height="60" rx="8" fill="#10b981" />
      <text x="250" y="135" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
        State 資料
      </text>
      <text x="250" y="155" textAnchor="middle" fill="#d1fae5" fontSize="10">
        person = {'{'}name: 'Alice'{'}'}
      </text>

      {/* 箭頭指向子元件 */}
      <defs>
        <marker id="arrow-props" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
        </marker>
      </defs>

      <path d="M250,172 L250,195" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-props)" />
      <text x="300" y="188" textAnchor="start" fill="#d97706" fontSize="11" fontWeight="bold">
        props 傳遞
      </text>

      {/* 子元件 */}
      <rect x="180" y="200" width="340" height="140" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
      <text x="350" y="225" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="bold">
        PersonCard（子元件）
      </text>

      {/* 接收到的 props */}
      <rect x="200" y="240" width="140" height="45" rx="6" fill="#f59e0b" />
      <text x="270" y="260" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        接收 props
      </text>
      <text x="270" y="277" textAnchor="middle" fill="#fef3c7" fontSize="9">
        {'{'}person{'}'}
      </text>

      {/* 渲染結果 */}
      <rect x="360" y="240" width="140" height="45" rx="6" fill="#3b82f6" />
      <text x="430" y="260" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        渲染 UI
      </text>
      <text x="430" y="277" textAnchor="middle" fill="#bfdbfe" fontSize="9">
        顯示：Alice
      </text>

      <path d="M342,262 L358,262" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-props)" />

      {/* 不可以反向傳輸 */}
      <rect x="200" y="295" width="300" height="35" rx="6" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,2" />
      <text x="350" y="318" textAnchor="middle" fill="#dc2626" fontSize="10">
        ✗ 子元件不能直接修改父元件的資料
      </text>

      {/* 右側說明 */}
      <rect x="560" y="80" width="120" height="140" rx="8" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
      <text x="620" y="105" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold">
        重點
      </text>
      <text x="620" y="130" textAnchor="middle" fill="#059669" fontSize="10">
        1. 資料從上往下
      </text>
      <text x="620" y="150" textAnchor="middle" fill="#059669" fontSize="10">
        2. 透過 props
      </text>
      <text x="620" y="170" textAnchor="middle" fill="#059669" fontSize="10">
        3. 單向傳遞
      </text>
      <text x="620" y="195" textAnchor="middle" fill="#059669" fontSize="10">
        4. 不能跨層級
      </text>

      {/* 底部說明 */}
      <text x="350" y="385" textAnchor="middle" fill="#78716c" fontSize="12">
        Props 是 React 元件之間傳遞資料的唯一方式（外層傳給內層）
      </text>
    </svg>
  );
}

// 步驟 9: Props 程式碼結構圖解
export function PropsCodeStructureDiagram() {
  return (
    <svg width="700" height="450" viewBox="0 0 700 450">
      <rect width="700" height="450" fill="#fffdf8" />

      {/* 標題 */}
      <text x="350" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        Props 程式碼結構詳解
      </text>

      {/* 上半部：傳遞 Props */}
      <rect x="50" y="50" width="600" height="160" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="350" y="75" textAnchor="middle" fill="#1d4ed8" fontSize="13" fontWeight="bold">
        外層元件：傳遞 Props
      </text>

      {/* 程式碼區塊 */}
      <rect x="70" y="90" width="280" height="100" rx="6" fill="#1e293b" />
      <text x="90" y="115" fill="#94a3b8" fontSize="10" fontFamily="monospace">
        // App.tsx（外層）
      </text>
      <text x="90" y="135" fill="#f8fafc" fontSize="11" fontFamily="monospace">
        const person = {'{'} name: 'Alice' {'}'};
      </text>
      <text x="90" y="160" fill="#f8fafc" fontSize="11" fontFamily="monospace">
        return (
      </text>
      <text x="100" y="180" fill="#f8fafc" fontSize="11" fontFamily="monospace">
        <tspan fill="#fbbf24">&lt;PersonCard</tspan>
        <tspan fill="#a5f3fc"> person</tspan>
        <tspan fill="#f8fafc">=</tspan>
        <tspan fill="#86efac">{'{'}person{'}'}</tspan>
        <tspan fill="#fbbf24"> /&gt;</tspan>
      </text>

      {/* 解說框 */}
      <rect x="380" y="90" width="250" height="100" rx="6" fill="white" stroke="#3b82f6" strokeWidth="1" />
      <text x="505" y="115" textAnchor="middle" fill="#1d4ed8" fontSize="11" fontWeight="bold">
        語法解析
      </text>

      <text x="400" y="140" fill="#78716c" fontSize="10">
        <tspan fill="#fbbf24" fontWeight="bold">&lt;PersonCard</tspan>
        <tspan> → 使用子元件</tspan>
      </text>
      <text x="400" y="160" fill="#78716c" fontSize="10">
        <tspan fill="#a5f3fc" fontWeight="bold">person</tspan>
        <tspan> → Props 名稱（屬性名）</tspan>
      </text>
      <text x="400" y="180" fill="#78716c" fontSize="10">
        <tspan fill="#86efac" fontWeight="bold">{'{'}person{'}'}</tspan>
        <tspan> → 傳入的值</tspan>
      </text>

      {/* 箭頭 */}
      <defs>
        <marker id="arrow-flow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
        </marker>
      </defs>

      <path d="M350,215 L350,235" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arrow-flow)" />
      <text x="380" y="230" fill="#d97706" fontSize="12" fontWeight="bold">
        Props 傳遞
      </text>

      {/* 下半部：接收 Props */}
      <rect x="50" y="245" width="600" height="170" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
      <text x="350" y="270" textAnchor="middle" fill="#d97706" fontSize="13" fontWeight="bold">
        內層元件：接收 Props
      </text>

      {/* 程式碼區塊 */}
      <rect x="70" y="285" width="320" height="110" rx="6" fill="#1e293b" />
      <text x="90" y="310" fill="#94a3b8" fontSize="10" fontFamily="monospace">
        // PersonCard.tsx（內層）
      </text>
      <text x="90" y="335" fill="#f8fafc" fontSize="11" fontFamily="monospace">
        <tspan fill="#c084fc">function</tspan>
        <tspan fill="#fbbf24"> PersonCard</tspan>
        <tspan fill="#f8fafc">(</tspan>
        <tspan fill="#86efac">{'{'}person{'}'}</tspan>
        <tspan fill="#f8fafc">) {'{'}</tspan>
      </text>
      <text x="100" y="358" fill="#f8fafc" fontSize="11" fontFamily="monospace">
        <tspan fill="#c084fc">return</tspan>
        <tspan> &lt;div&gt;{'{'}person.name{'}'}&lt;/div&gt;</tspan>
      </text>
      <text x="90" y="381" fill="#f8fafc" fontSize="11" fontFamily="monospace">
        {'}'}
      </text>

      {/* 解說框 */}
      <rect x="420" y="285" width="210" height="110" rx="6" fill="white" stroke="#f59e0b" strokeWidth="1" />
      <text x="525" y="310" textAnchor="middle" fill="#d97706" fontSize="11" fontWeight="bold">
        語法解析
      </text>

      <text x="440" y="335" fill="#78716c" fontSize="10">
        <tspan fill="#86efac" fontWeight="bold">{'{'}person{'}'}</tspan>
        <tspan> → 解構 props</tspan>
      </text>
      <text x="440" y="355" fill="#78716c" fontSize="10">
        等同於 props.person
      </text>
      <text x="440" y="380" fill="#78716c" fontSize="10">
        可直接使用 person 變數
      </text>

      {/* 底部總結 */}
      <text x="350" y="435" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">
        外層用屬性傳入 → 內層用參數接收，這就是 Props 的完整流程！
      </text>
    </svg>
  );
}
