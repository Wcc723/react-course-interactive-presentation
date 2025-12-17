// 步驟 1: 傳統 DOM 操作示意圖
export function TraditionalDOMDiagram() {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300">
      {/* 背景 */}
      <rect width="400" height="300" fill="#fffdf8" />

      {/* JS 程式碼區塊 */}
      <rect x="20" y="120" width="100" height="60" rx="8" fill="#f59e0b" />
      <text x="70" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        JavaScript
      </text>
      <text x="70" y="162" textAnchor="middle" fill="white" fontSize="10">
        程式碼
      </text>

      {/* DOM 元素們 */}
      <rect x="200" y="30" width="80" height="40" rx="6" fill="#3b82f6" />
      <text x="240" y="55" textAnchor="middle" fill="white" fontSize="11">
        標題 DOM
      </text>

      <rect x="200" y="90" width="80" height="40" rx="6" fill="#3b82f6" />
      <text x="240" y="115" textAnchor="middle" fill="white" fontSize="11">
        按鈕 DOM
      </text>

      <rect x="200" y="150" width="80" height="40" rx="6" fill="#3b82f6" />
      <text x="240" y="175" textAnchor="middle" fill="white" fontSize="11">
        列表 DOM
      </text>

      <rect x="200" y="210" width="80" height="40" rx="6" fill="#3b82f6" />
      <text x="240" y="235" textAnchor="middle" fill="white" fontSize="11">
        輸入 DOM
      </text>

      {/* 箭頭 - JS 直接操作每個 DOM */}
      <defs>
        <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
        </marker>
      </defs>

      <path d="M120,135 Q160,50 195,50" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow1)" />
      <path d="M120,145 Q160,110 195,110" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow1)" />
      <path d="M120,155 Q160,170 195,170" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow1)" />
      <path d="M120,165 Q160,230 195,230" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow1)" />

      {/* 說明文字 */}
      <text x="320" y="140" textAnchor="start" fill="#78716c" fontSize="11">
        直接操作
      </text>
      <text x="320" y="158" textAnchor="start" fill="#78716c" fontSize="11">
        DOM 元素
      </text>
    </svg>
  );
}

// 步驟 2: 多處存取資料的問題
export function MultiAccessProblemDiagram() {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="#fffdf8" />

      {/* 多個 JS 區塊 */}
      <rect x="20" y="30" width="90" height="50" rx="6" fill="#f59e0b" />
      <text x="65" y="50" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        功能 A
      </text>
      <text x="65" y="65" textAnchor="middle" fill="white" fontSize="9">
        JavaScript
      </text>

      <rect x="20" y="100" width="90" height="50" rx="6" fill="#f59e0b" />
      <text x="65" y="120" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        功能 B
      </text>
      <text x="65" y="135" textAnchor="middle" fill="white" fontSize="9">
        JavaScript
      </text>

      <rect x="20" y="170" width="90" height="50" rx="6" fill="#f59e0b" />
      <text x="65" y="190" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        功能 C
      </text>
      <text x="65" y="205" textAnchor="middle" fill="white" fontSize="9">
        JavaScript
      </text>

      <rect x="20" y="240" width="90" height="50" rx="6" fill="#f59e0b" />
      <text x="65" y="260" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        功能 D
      </text>
      <text x="65" y="275" textAnchor="middle" fill="white" fontSize="9">
        JavaScript
      </text>

      {/* 共用資料 DOM */}
      <rect x="200" y="115" width="90" height="70" rx="8" fill="#3b82f6" />
      <text x="245" y="145" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
        使用者資料
      </text>
      <text x="245" y="165" textAnchor="middle" fill="white" fontSize="10">
        DOM 元素
      </text>

      {/* 混亂的箭頭 */}
      <defs>
        <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
        </marker>
      </defs>

      <path d="M110,55 Q155,80 195,130" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow2)" strokeDasharray="4,2" />
      <path d="M110,125 L195,145" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow2)" strokeDasharray="4,2" />
      <path d="M110,195 L195,160" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow2)" strokeDasharray="4,2" />
      <path d="M110,265 Q155,220 195,170" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow2)" strokeDasharray="4,2" />

      {/* 警告符號 */}
      <circle cx="330" cy="150" r="30" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="330" y="145" textAnchor="middle" fill="#ef4444" fontSize="24" fontWeight="bold">
        !
      </text>
      <text x="330" y="165" textAnchor="middle" fill="#ef4444" fontSize="9">
        混亂
      </text>

      {/* 說明 */}
      <text x="330" y="220" textAnchor="middle" fill="#78716c" fontSize="10">
        多處同時存取
      </text>
      <text x="330" y="235" textAnchor="middle" fill="#78716c" fontSize="10">
        難以維護
      </text>
    </svg>
  );
}

// 步驟 3: 關注點分離概念
export function SeparationOfConcernsDiagram() {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="#fffdf8" />

      {/* 資料層 */}
      <rect x="140" y="20" width="120" height="70" rx="10" fill="#10b981" />
      <text x="200" y="48" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
        資料狀態
      </text>
      <text x="200" y="68" textAnchor="middle" fill="white" fontSize="11">
        State / Data
      </text>

      {/* 分隔線與說明 */}
      <line x1="80" y1="150" x2="320" y2="150" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="8,4" />
      <rect x="165" y="138" width="70" height="24" fill="#fffdf8" />
      <text x="200" y="155" textAnchor="middle" fill="#78716c" fontSize="11">
        分離
      </text>

      {/* UI 層 */}
      <rect x="40" y="200" width="80" height="50" rx="8" fill="#3b82f6" />
      <text x="80" y="222" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        標題
      </text>
      <text x="80" y="238" textAnchor="middle" fill="white" fontSize="9">
        UI
      </text>

      <rect x="160" y="200" width="80" height="50" rx="8" fill="#3b82f6" />
      <text x="200" y="222" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        列表
      </text>
      <text x="200" y="238" textAnchor="middle" fill="white" fontSize="9">
        UI
      </text>

      <rect x="280" y="200" width="80" height="50" rx="8" fill="#3b82f6" />
      <text x="320" y="222" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        統計
      </text>
      <text x="320" y="238" textAnchor="middle" fill="white" fontSize="9">
        UI
      </text>

      {/* 連接箭頭 */}
      <defs>
        <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
      </defs>

      <path d="M170,90 L80,195" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow3)" />
      <path d="M200,90 L200,195" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow3)" />
      <path d="M230,90 L320,195" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow3)" />

      {/* 標籤 */}
      <rect x="310" y="30" width="70" height="24" rx="4" fill="#d1fae5" />
      <text x="345" y="47" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">
        單一來源
      </text>

      <rect x="310" y="260" width="70" height="24" rx="4" fill="#dbeafe" />
      <text x="345" y="277" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="bold">
        畫面呈現
      </text>
    </svg>
  );
}

// 步驟 4: 資料聯動優點
export function DataSyncBenefitDiagram() {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="#fffdf8" />

      {/* 資料更新動作 */}
      <rect x="30" y="110" width="70" height="80" rx="8" fill="#f59e0b" />
      <text x="65" y="140" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        使用者
      </text>
      <text x="65" y="158" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        操作
      </text>
      <text x="65" y="176" textAnchor="middle" fill="white" fontSize="9">
        (更新資料)
      </text>

      {/* 資料狀態 */}
      <rect x="145" y="110" width="90" height="80" rx="10" fill="#10b981" />
      <text x="190" y="138" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
        State
      </text>
      <text x="190" y="158" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
        count: 5
      </text>
      <text x="190" y="178" textAnchor="middle" fill="#d1fae5" fontSize="9">
        資料來源
      </text>

      {/* 多個 UI 同步更新 */}
      <rect x="290" y="20" width="90" height="50" rx="6" fill="#3b82f6" />
      <text x="335" y="42" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        Header
      </text>
      <text x="335" y="58" textAnchor="middle" fill="#bfdbfe" fontSize="12">
        顯示: 5
      </text>

      <rect x="290" y="90" width="90" height="50" rx="6" fill="#3b82f6" />
      <text x="335" y="112" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        Sidebar
      </text>
      <text x="335" y="128" textAnchor="middle" fill="#bfdbfe" fontSize="12">
        顯示: 5
      </text>

      <rect x="290" y="160" width="90" height="50" rx="6" fill="#3b82f6" />
      <text x="335" y="182" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        Card
      </text>
      <text x="335" y="198" textAnchor="middle" fill="#bfdbfe" fontSize="12">
        顯示: 5
      </text>

      <rect x="290" y="230" width="90" height="50" rx="6" fill="#3b82f6" />
      <text x="335" y="252" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        Footer
      </text>
      <text x="335" y="268" textAnchor="middle" fill="#bfdbfe" fontSize="12">
        顯示: 5
      </text>

      {/* 箭頭 */}
      <defs>
        <marker id="arrow4a" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
        </marker>
        <marker id="arrow4b" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
      </defs>

      <path d="M100,150 L140,150" stroke="#f59e0b" strokeWidth="3" fill="none" markerEnd="url(#arrow4a)" />

      <path d="M235,130 Q262,45 285,45" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow4b)" />
      <path d="M235,140 Q260,115 285,115" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow4b)" />
      <path d="M235,160 Q260,185 285,185" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow4b)" />
      <path d="M235,170 Q262,255 285,255" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow4b)" />

      {/* 同步標示 */}
      <circle cx="270" cy="150" r="18" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
      <text x="270" y="154" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">
        同步
      </text>
    </svg>
  );
}
