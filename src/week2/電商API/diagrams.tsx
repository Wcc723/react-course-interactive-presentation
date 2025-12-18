// 第一頁：前端與伺服器的關係圖
export function FrontendServerDiagram() {
  return (
    <svg viewBox="0 0 800 400" className="w-full max-w-4xl">
      {/* 背景 */}
      <defs>
        <linearGradient id="frontendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <marker id="arrowRequest" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
        </marker>
        <marker id="arrowResponse" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
        </marker>
      </defs>

      {/* 前端區塊 */}
      <g>
        {/* 瀏覽器外框 */}
        <rect x="40" y="100" width="180" height="200" rx="12" fill="white" stroke="#3b82f6" strokeWidth="3" />
        {/* 瀏覽器標題列 */}
        <rect x="40" y="100" width="180" height="35" rx="12" fill="url(#frontendGrad)" />
        <rect x="40" y="123" width="180" height="12" fill="url(#frontendGrad)" />
        {/* 瀏覽器按鈕 */}
        <circle cx="58" cy="118" r="6" fill="#ef4444" />
        <circle cx="78" cy="118" r="6" fill="#f59e0b" />
        <circle cx="98" cy="118" r="6" fill="#22c55e" />
        {/* 網址列 */}
        <rect x="55" y="145" width="150" height="20" rx="4" fill="#f1f5f9" />
        <text x="65" y="159" fontSize="10" fill="#64748b">https://shop.com</text>
        {/* 內容區 */}
        <rect x="55" y="175" width="150" height="110" rx="4" fill="#f8fafc" />
        <text x="90" y="210" fontSize="12" fill="#475569" fontWeight="600">電商網站</text>
        <rect x="70" y="225" width="120" height="20" rx="4" fill="#e2e8f0" />
        <rect x="70" y="255" width="80" height="20" rx="4" fill="#3b82f6" />
        <text x="85" y="269" fontSize="10" fill="white">購買商品</text>
      </g>
      <text x="130" y="330" fontSize="16" fill="#1e40af" fontWeight="600" textAnchor="middle">前端 (Frontend)</text>
      <text x="130" y="352" fontSize="12" fill="#64748b" textAnchor="middle">使用者的瀏覽器</text>

      {/* 請求箭頭 */}
      <g>
        <line x1="230" y1="180" x2="420" y2="180" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowRequest)" strokeDasharray="8,4" />
        <rect x="280" y="160" width="90" height="24" rx="4" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
        <text x="325" y="176" fontSize="12" fill="#b45309" fontWeight="600" textAnchor="middle">Request</text>
        <text x="325" y="145" fontSize="10" fill="#78716c" textAnchor="middle">發送請求</text>
      </g>

      {/* 回應箭頭 */}
      <g>
        <line x1="420" y1="240" x2="230" y2="240" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowResponse)" strokeDasharray="8,4" />
        <rect x="280" y="248" width="90" height="24" rx="4" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
        <text x="325" y="264" fontSize="12" fill="#059669" fontWeight="600" textAnchor="middle">Response</text>
        <text x="325" y="288" fontSize="10" fill="#78716c" textAnchor="middle">回傳資料</text>
      </g>

      {/* 伺服器區塊 */}
      <g>
        <rect x="430" y="120" width="160" height="180" rx="12" fill="white" stroke="#10b981" strokeWidth="3" />
        <rect x="430" y="120" width="160" height="40" rx="12" fill="url(#serverGrad)" />
        <rect x="430" y="148" width="160" height="12" fill="url(#serverGrad)" />
        {/* 伺服器圖示 */}
        <rect x="485" y="132" width="40" height="16" rx="2" fill="white" opacity="0.3" />
        <circle cx="495" cy="140" r="3" fill="white" />
        <circle cx="505" cy="140" r="3" fill="white" />
        <circle cx="515" cy="140" r="3" fill="white" />
        {/* API 端點 */}
        <text x="510" y="185" fontSize="12" fill="#065f46" fontWeight="600" textAnchor="middle">API Server</text>
        <rect x="450" y="200" width="120" height="22" rx="4" fill="#d1fae5" />
        <text x="510" y="215" fontSize="10" fill="#047857" textAnchor="middle">/api/products</text>
        <rect x="450" y="230" width="120" height="22" rx="4" fill="#d1fae5" />
        <text x="510" y="245" fontSize="10" fill="#047857" textAnchor="middle">/api/orders</text>
        <rect x="450" y="260" width="120" height="22" rx="4" fill="#d1fae5" />
        <text x="510" y="275" fontSize="10" fill="#047857" textAnchor="middle">/api/users</text>
      </g>
      <text x="510" y="330" fontSize="16" fill="#065f46" fontWeight="600" textAnchor="middle">後端 (Backend)</text>
      <text x="510" y="352" fontSize="12" fill="#64748b" textAnchor="middle">API 伺服器</text>

      {/* 資料庫區塊 */}
      <g>
        {/* 資料庫圓柱體 */}
        <ellipse cx="700" cy="145" rx="55" ry="20" fill="url(#dbGrad)" />
        <rect x="645" y="145" width="110" height="120" fill="url(#dbGrad)" />
        <ellipse cx="700" cy="265" rx="55" ry="20" fill="#7c3aed" />
        <ellipse cx="700" cy="145" rx="55" ry="20" fill="#a78bfa" />
        {/* 資料庫線條 */}
        <ellipse cx="700" cy="185" rx="55" ry="15" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5" />
        <ellipse cx="700" cy="225" rx="55" ry="15" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5" />
        {/* 資料圖示 */}
        <rect x="670" y="165" width="60" height="8" rx="2" fill="white" opacity="0.4" />
        <rect x="670" y="195" width="45" height="8" rx="2" fill="white" opacity="0.4" />
        <rect x="670" y="225" width="55" height="8" rx="2" fill="white" opacity="0.4" />
      </g>
      <text x="700" y="310" fontSize="16" fill="#6d28d9" fontWeight="600" textAnchor="middle">資料庫</text>
      <text x="700" y="332" fontSize="12" fill="#64748b" textAnchor="middle">Database</text>

      {/* 伺服器與資料庫連線 */}
      <line x1="590" y1="205" x2="645" y2="205" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,2" />
      <text x="617" y="195" fontSize="9" fill="#7c3aed" textAnchor="middle">存取</text>
    </svg>
  );
}

// 第三頁：前端與伺服器的授權關係圖
export function AuthenticationDiagram() {
  return (
    <svg viewBox="0 0 800 450" className="w-full max-w-4xl">
      <defs>
        <linearGradient id="authFrontendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="authServerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="tokenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <marker id="authArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
        </marker>
        <marker id="tokenArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
        </marker>
      </defs>

      {/* 標題 */}
      <text x="400" y="35" fontSize="18" fill="#374151" fontWeight="700" textAnchor="middle">驗證流程 (Authentication Flow)</text>

      {/* 前端區塊 */}
      <g>
        <rect x="50" y="80" width="180" height="180" rx="12" fill="white" stroke="#3b82f6" strokeWidth="3" />
        <rect x="50" y="80" width="180" height="35" rx="12" fill="url(#authFrontendGrad)" />
        <rect x="50" y="103" width="180" height="12" fill="url(#authFrontendGrad)" />
        <circle cx="68" cy="98" r="5" fill="#ef4444" />
        <circle cx="85" cy="98" r="5" fill="#f59e0b" />
        <circle cx="102" cy="98" r="5" fill="#22c55e" />
        {/* 登入表單 */}
        <text x="140" y="140" fontSize="12" fill="#1e40af" fontWeight="600" textAnchor="middle">登入表單</text>
        <rect x="75" y="155" width="130" height="25" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
        <text x="85" y="172" fontSize="10" fill="#94a3b8">帳號</text>
        <rect x="75" y="190" width="130" height="25" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
        <text x="85" y="207" fontSize="10" fill="#94a3b8">密碼</text>
        <rect x="100" y="225" width="80" height="25" rx="6" fill="#3b82f6" />
        <text x="140" y="242" fontSize="11" fill="white" fontWeight="500" textAnchor="middle">登入</text>
      </g>
      <text x="140" y="285" fontSize="14" fill="#1e40af" fontWeight="600" textAnchor="middle">前端 (Client)</text>

      {/* 步驟 1：發送登入請求 */}
      <g>
        <path d="M 235 140 Q 320 100 405 140" fill="none" stroke="#6366f1" strokeWidth="2" markerEnd="url(#authArrow)" />
        <rect x="280" y="85" width="100" height="35" rx="6" fill="#eef2ff" stroke="#6366f1" strokeWidth="1" />
        <text x="330" y="100" fontSize="9" fill="#4f46e5" fontWeight="600" textAnchor="middle">1 發送請求</text>
        <text x="330" y="113" fontSize="8" fill="#6366f1" textAnchor="middle">帳號 + 密碼</text>
      </g>

      {/* 伺服器區塊 */}
      <g>
        <rect x="410" y="80" width="180" height="180" rx="12" fill="white" stroke="#10b981" strokeWidth="3" />
        <rect x="410" y="80" width="180" height="35" rx="12" fill="url(#authServerGrad)" />
        <rect x="410" y="103" width="180" height="12" fill="url(#authServerGrad)" />
        {/* 伺服器圖示 */}
        <text x="500" y="100" fontSize="11" fill="white" fontWeight="600" textAnchor="middle">API Server</text>
        {/* 驗證邏輯 */}
        <rect x="435" y="130" width="130" height="50" rx="6" fill="#fdf2f8" stroke="#ec4899" strokeWidth="1" />
        <text x="500" y="150" fontSize="10" fill="#be185d" fontWeight="600" textAnchor="middle">驗證機制</text>
        <text x="500" y="168" fontSize="9" fill="#9d174d" textAnchor="middle">檢查帳號密碼</text>
        {/* Token 生成 */}
        <rect x="435" y="190" width="130" height="50" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
        <text x="500" y="210" fontSize="10" fill="#b45309" fontWeight="600" textAnchor="middle">產生 Token</text>
        <text x="500" y="228" fontSize="8" fill="#92400e" textAnchor="middle" fontFamily="monospace">JWT / Session</text>
      </g>
      <text x="500" y="285" fontSize="14" fill="#065f46" fontWeight="600" textAnchor="middle">後端 (Server)</text>

      {/* 步驟 2：回傳 Token */}
      <g>
        <path d="M 405 200 Q 320 250 235 200" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#tokenArrow)" />
        <rect x="280" y="230" width="100" height="35" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
        <text x="330" y="245" fontSize="9" fill="#b45309" fontWeight="600" textAnchor="middle">2 回傳 Token</text>
        <text x="330" y="258" fontSize="8" fill="#92400e" textAnchor="middle">驗證成功</text>
      </g>

      {/* Token 儲存區塊 */}
      <g>
        <rect x="50" y="320" width="180" height="100" rx="12" fill="white" stroke="#f59e0b" strokeWidth="2" />
        <rect x="50" y="320" width="180" height="30" rx="12" fill="url(#tokenGrad)" />
        <rect x="50" y="340" width="180" height="10" fill="url(#tokenGrad)" />
        <text x="140" y="340" fontSize="11" fill="white" fontWeight="600" textAnchor="middle">用戶端儲存</text>
        {/* Token 展示 */}
        <rect x="65" y="360" width="150" height="22" rx="4" fill="#fef3c7" />
        <text x="75" y="375" fontSize="9" fill="#92400e" fontWeight="500">cookie</text>
        <rect x="65" y="390" width="150" height="20" rx="4" fill="#fffbeb" stroke="#fcd34d" strokeDasharray="2,2" />
        <text x="75" y="404" fontSize="8" fill="#b45309" fontFamily="monospace">token: "eyJhbG..."</text>
      </g>
      <text x="140" y="440" fontSize="12" fill="#b45309" fontWeight="500" textAnchor="middle">3 儲存 Token</text>

      {/* 步驟 4：後續請求帶 Token */}
      <g>
        <path d="M 235 355 Q 400 290 500 260" fill="none" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#authArrow)" strokeDasharray="6,3" />
        <rect x="310" y="295" width="130" height="40" rx="6" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="1" />
        <text x="375" y="310" fontSize="9" fill="#6d28d9" fontWeight="600" textAnchor="middle">4 後續 API 請求</text>
        <text x="375" y="325" fontSize="8" fill="#7c3aed" textAnchor="middle">Header: Bearer Token</text>
      </g>
    </svg>
  );
}
