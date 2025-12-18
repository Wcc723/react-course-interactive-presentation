// 1. 同步執行示意圖 - JavaScript 逐行執行
export function SyncExecutionDiagram() {
  return (
    <svg width="500" height="400" viewBox="0 0 500 400">
      {/* 背景 */}
      <rect width="500" height="400" fill="#fffdf8" />

      {/* 標題 */}
      <text x="250" y="35" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        JavaScript 同步執行
      </text>

      {/* 執行緒軌道 */}
      <rect x="60" y="60" width="380" height="300" rx="12" fill="#fef3c7" stroke="#fcd34d" strokeWidth="2" />
      <text x="250" y="85" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">
        主執行緒 (Main Thread)
      </text>

      {/* 程式碼行 - 逐行執行 */}
      {[
        { y: 110, code: 'console.log("第一行")', num: '1' },
        { y: 160, code: 'const a = 10', num: '2' },
        { y: 210, code: 'const b = 20', num: '3' },
        { y: 260, code: 'console.log(a + b)', num: '4' },
        { y: 310, code: 'console.log("結束")', num: '5' },
      ].map((item, i) => (
        <g key={i}>
          {/* 行號圓圈 */}
          <circle cx="95" cy={item.y + 15} r="14" fill="#3b82f6" />
          <text x="95" y={item.y + 20} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            {item.num}
          </text>

          {/* 程式碼區塊 */}
          <rect x="120" y={item.y} width="300" height="35" rx="6" fill="white" stroke="#d6d3d1" strokeWidth="1" />
          <text x="135" y={item.y + 22} fill="#1e293b" fontSize="13" fontFamily="monospace">
            {item.code}
          </text>

          {/* 箭頭連接（除了最後一個） */}
          {i < 4 && (
            <path
              d={`M95,${item.y + 32} L95,${item.y + 45}`}
              stroke="#3b82f6"
              strokeWidth="2"
              markerEnd="url(#arrowBlue)"
            />
          )}
        </g>
      ))}

      {/* 箭頭定義 */}
      <defs>
        <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  );
}

// 2. 阻塞示意圖 - Alert 阻塞執行
export function BlockingDiagram() {
  return (
    <svg width="550" height="400" viewBox="0 0 550 400">
      <rect width="550" height="400" fill="#fffdf8" />

      <text x="275" y="35" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        阻塞 (Blocking) - Alert 會暫停執行
      </text>

      {/* 執行緒軌道 */}
      <rect x="40" y="55" width="470" height="320" rx="12" fill="#fef3c7" stroke="#fcd34d" strokeWidth="2" />

      {/* 程式碼執行 */}
      <g>
        {/* 第一行 */}
        <rect x="60" y="80" width="200" height="40" rx="6" fill="#10b981" />
        <text x="160" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          console.log("開始")
        </text>
        <text x="280" y="105" fill="#10b981" fontSize="12" fontWeight="bold">✓ 立即執行</text>
      </g>

      <path d="M160,120 L160,140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue2)" />

      {/* Alert 阻塞 */}
      <g>
        <rect x="60" y="150" width="200" height="80" rx="6" fill="#ef4444" />
        <text x="160" y="180" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          alert("請點擊確定")
        </text>
        <text x="160" y="210" textAnchor="middle" fill="#fecaca" fontSize="11">
          ⏸️ 等待用戶操作...
        </text>

        {/* 阻塞標記 */}
        <rect x="280" y="165" width="180" height="50" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
        <text x="370" y="185" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">
          🛑 執行緒被阻塞
        </text>
        <text x="370" y="203" textAnchor="middle" fill="#b91c1c" fontSize="10">
          後續程式碼無法執行
        </text>
      </g>

      <path d="M160,230 L160,250" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue2)" />

      {/* 繼續執行 */}
      <g>
        <rect x="60" y="260" width="200" height="40" rx="6" fill="#10b981" />
        <text x="160" y="285" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          console.log("繼續")
        </text>
        <text x="280" y="285" fill="#10b981" fontSize="12" fontWeight="bold">✓ 用戶點擊後才執行</text>
      </g>

      <path d="M160,300 L160,320" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue2)" />

      <g>
        <rect x="60" y="330" width="200" height="35" rx="6" fill="#10b981" />
        <text x="160" y="352" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          console.log("結束")
        </text>
      </g>

      <defs>
        <marker id="arrowBlue2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  );
}

// 3. Event Queue 示意圖 - setTimeout 改變執行順序
export function EventQueueDiagram() {
  return (
    <svg width="600" height="450" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#fffdf8" />

      <text x="300" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        setTimeout 與事件佇列
      </text>

      {/* 左側：程式碼 */}
      <rect x="20" y="50" width="180" height="180" rx="8" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1" />
      <text x="110" y="70" textAnchor="middle" fill="#78716c" fontSize="11" fontWeight="bold">程式碼</text>

      <text x="30" y="95" fill="#3b82f6" fontSize="11" fontFamily="monospace" fontWeight="bold">1</text>
      <text x="45" y="95" fill="#1e293b" fontSize="11" fontFamily="monospace">console.log(1)</text>

      <text x="30" y="120" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">2</text>
      <text x="45" y="120" fill="#1e293b" fontSize="10" fontFamily="monospace">setTimeout(()=&gt;</text>
      <text x="55" y="135" fill="#1e293b" fontSize="10" fontFamily="monospace">log(2), 0)</text>

      <text x="30" y="160" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">3</text>
      <text x="45" y="160" fill="#1e293b" fontSize="11" fontFamily="monospace">console.log(3)</text>

      <text x="30" y="185" fill="#8b5cf6" fontSize="11" fontFamily="monospace" fontWeight="bold">4</text>
      <text x="45" y="185" fill="#1e293b" fontSize="11" fontFamily="monospace">console.log(4)</text>

      {/* Call Stack */}
      <rect x="220" y="50" width="150" height="180" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="295" y="70" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">Call Stack (執行堆疊)</text>

      <rect x="235" y="85" width="120" height="30" rx="4" fill="#3b82f6" />
      <text x="295" y="105" textAnchor="middle" fill="white" fontSize="11">log(1) ✓</text>

      <rect x="235" y="120" width="120" height="30" rx="4" fill="#10b981" />
      <text x="295" y="140" textAnchor="middle" fill="white" fontSize="11">log(3) ✓</text>

      <rect x="235" y="155" width="120" height="30" rx="4" fill="#8b5cf6" />
      <text x="295" y="175" textAnchor="middle" fill="white" fontSize="11">log(4) ✓</text>

      <rect x="235" y="190" width="120" height="30" rx="4" fill="#f59e0b" />
      <text x="295" y="210" textAnchor="middle" fill="white" fontSize="11">log(2) ✓ 最後!</text>

      {/* Web APIs */}
      <rect x="390" y="50" width="180" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
      <text x="480" y="70" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Web APIs</text>
      <rect x="405" y="85" width="150" height="35" rx="4" fill="#f59e0b" />
      <text x="480" y="107" textAnchor="middle" fill="white" fontSize="10">setTimeout(log(2), 0)</text>

      {/* 箭頭：setTimeout 到 Web APIs */}
      <path d="M200,125 Q300,60 390,90" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowOrange)" strokeDasharray="4" />

      {/* Event Queue */}
      <rect x="390" y="150" width="180" height="80" rx="8" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
      <text x="480" y="170" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">事件佇列 (Event Queue)</text>
      <rect x="405" y="185" width="150" height="35" rx="4" fill="#10b981" />
      <text x="480" y="207" textAnchor="middle" fill="white" fontSize="10">callback: log(2)</text>

      {/* 箭頭：Web APIs 到 Event Queue */}
      <path d="M480,130 L480,150" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />

      {/* 輸出結果 */}
      <rect x="20" y="260" width="550" height="170" rx="12" fill="#1e293b" />
      <text x="40" y="285" fill="#94a3b8" fontSize="12" fontWeight="bold">Console 輸出：</text>

      <text x="40" y="315" fill="#3b82f6" fontSize="14" fontFamily="monospace">1</text>
      <text x="60" y="315" fill="#64748b" fontSize="11">← 同步執行</text>

      <text x="40" y="345" fill="#10b981" fontSize="14" fontFamily="monospace">3</text>
      <text x="60" y="345" fill="#64748b" fontSize="11">← 同步執行</text>

      <text x="40" y="375" fill="#8b5cf6" fontSize="14" fontFamily="monospace">4</text>
      <text x="60" y="375" fill="#64748b" fontSize="11">← 同步執行</text>

      <text x="40" y="405" fill="#f59e0b" fontSize="14" fontFamily="monospace">2</text>
      <text x="60" y="405" fill="#fbbf24" fontSize="11">← 非同步！延後執行</text>

      {/* 順序說明 */}
      <rect x="300" y="290" width="250" height="120" rx="8" fill="#334155" />
      <text x="425" y="315" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">
        執行順序：1 → 3 → 4 → 2
      </text>
      <text x="320" y="345" fill="#94a3b8" fontSize="11">setTimeout 即使設定 0ms，</text>
      <text x="320" y="365" fill="#94a3b8" fontSize="11">callback 仍會進入事件佇列，</text>
      <text x="320" y="385" fill="#94a3b8" fontSize="11">等待同步程式碼執行完畢後才執行</text>

      <defs>
        <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
        </marker>
        <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  );
}

// 4. API 串接示意圖
export function ApiConnectionDiagram() {
  return (
    <svg width="600" height="380" viewBox="0 0 600 380">
      <rect width="600" height="380" fill="#fffdf8" />

      <text x="300" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        API 串接 - 無法預期回應時間
      </text>

      {/* 前端 */}
      <rect x="40" y="60" width="140" height="100" rx="12" fill="#3b82f6" />
      <text x="110" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">前端</text>
      <text x="110" y="115" textAnchor="middle" fill="#bfdbfe" fontSize="11">JavaScript</text>
      <text x="110" y="135" textAnchor="middle" fill="#bfdbfe" fontSize="11">React App</text>

      {/* 後端 */}
      <rect x="420" y="60" width="140" height="100" rx="12" fill="#10b981" />
      <text x="490" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">後端</text>
      <text x="490" y="115" textAnchor="middle" fill="#bbf7d0" fontSize="11">API Server</text>
      <text x="490" y="135" textAnchor="middle" fill="#bbf7d0" fontSize="11">Database</text>

      {/* 網路雲 */}
      <ellipse cx="300" cy="110" rx="60" ry="35" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4" />
      <text x="300" y="115" textAnchor="middle" fill="#6b7280" fontSize="11">🌐 網路</text>

      {/* 請求箭頭 */}
      <path d="M180,90 L240,90" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowBlue3)" />
      <text x="210" y="80" textAnchor="middle" fill="#3b82f6" fontSize="10">Request</text>

      <path d="M360,90 L420,90" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowBlue3)" />

      {/* 回應箭頭 */}
      <path d="M420,130 L360,130" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowGreen2)" />
      <text x="390" y="145" textAnchor="middle" fill="#10b981" fontSize="10">Response</text>

      <path d="M240,130 L180,130" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowGreen2)" />

      {/* 時間軸 */}
      <rect x="40" y="190" width="520" height="170" rx="12" fill="#fef3c7" stroke="#fcd34d" strokeWidth="2" />
      <text x="300" y="215" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">
        ⏱️ 回應時間不可預期
      </text>

      {/* 時間案例 */}
      <g>
        <rect x="60" y="235" width="150" height="50" rx="6" fill="#dcfce7" stroke="#10b981" strokeWidth="1" />
        <text x="135" y="255" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">快速回應</text>
        <text x="135" y="275" textAnchor="middle" fill="#166534" fontSize="16">50ms</text>
      </g>

      <g>
        <rect x="225" y="235" width="150" height="50" rx="6" fill="#fef9c3" stroke="#f59e0b" strokeWidth="1" />
        <text x="300" y="255" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">一般回應</text>
        <text x="300" y="275" textAnchor="middle" fill="#92400e" fontSize="16">500ms</text>
      </g>

      <g>
        <rect x="390" y="235" width="150" height="50" rx="6" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" />
        <text x="465" y="255" textAnchor="middle" fill="#b91c1c" fontSize="11" fontWeight="bold">慢速回應</text>
        <text x="465" y="275" textAnchor="middle" fill="#b91c1c" fontSize="16">3000ms</text>
      </g>

      {/* 問題說明 */}
      <text x="300" y="320" textAnchor="middle" fill="#78716c" fontSize="12">
        ❓ 程式碼該如何「等待」資料回來？
      </text>
      <text x="300" y="345" textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="bold">
        → 這就是為什麼需要非同步處理！
      </text>

      <defs>
        <marker id="arrowBlue3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
        </marker>
        <marker id="arrowGreen2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  );
}

// 5. Async/Await 同步概念示意圖
export function AsyncAwaitDiagram() {
  return (
    <svg width="600" height="400" viewBox="0 0 600 400">
      <rect width="600" height="400" fill="#fffdf8" />

      <text x="300" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        Async/Await - 讓非同步像同步一樣執行
      </text>

      {/* 左側：傳統 callback 地獄 */}
      <rect x="20" y="55" width="260" height="160" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="150" y="75" textAnchor="middle" fill="#b91c1c" fontSize="12" fontWeight="bold">
        ❌ 傳統 Callback 巢狀
      </text>

      <text x="35" y="100" fill="#1e293b" fontSize="10" fontFamily="monospace">fetchUser(id, (user) =&gt; {'{'}</text>
      <text x="45" y="118" fill="#1e293b" fontSize="10" fontFamily="monospace">fetchPosts(user, (posts) =&gt; {'{'}</text>
      <text x="55" y="136" fill="#1e293b" fontSize="10" fontFamily="monospace">fetchComments(posts, (cmt) =&gt; {'{'}</text>
      <text x="65" y="154" fill="#1e293b" fontSize="10" fontFamily="monospace">// 越來越深...</text>
      <text x="55" y="172" fill="#1e293b" fontSize="10" fontFamily="monospace">{'}'})</text>
      <text x="45" y="190" fill="#1e293b" fontSize="10" fontFamily="monospace">{'}'})</text>
      <text x="35" y="208" fill="#1e293b" fontSize="10" fontFamily="monospace">{'}'})</text>

      {/* 右側：Async/Await 優雅寫法 */}
      <rect x="320" y="55" width="260" height="160" rx="8" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
      <text x="450" y="75" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">
        ✓ Async/Await 同步風格
      </text>

      <text x="335" y="100" fill="#8b5cf6" fontSize="10" fontFamily="monospace" fontWeight="bold">async</text>
      <text x="370" y="100" fill="#1e293b" fontSize="10" fontFamily="monospace">function getData() {'{'}</text>
      <text x="345" y="125" fill="#1e293b" fontSize="10" fontFamily="monospace">const user =</text>
      <text x="430" y="125" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">await</text>
      <text x="465" y="125" fill="#1e293b" fontSize="10" fontFamily="monospace">fetchUser()</text>
      <text x="345" y="150" fill="#1e293b" fontSize="10" fontFamily="monospace">const posts =</text>
      <text x="435" y="150" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">await</text>
      <text x="470" y="150" fill="#1e293b" fontSize="10" fontFamily="monospace">fetchPosts()</text>
      <text x="345" y="175" fill="#1e293b" fontSize="10" fontFamily="monospace">const cmt =</text>
      <text x="420" y="175" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">await</text>
      <text x="455" y="175" fill="#1e293b" fontSize="10" fontFamily="monospace">fetchComments()</text>
      <text x="335" y="200" fill="#1e293b" fontSize="10" fontFamily="monospace">{'}'}</text>

      {/* 執行流程圖 */}
      <rect x="20" y="235" width="560" height="150" rx="12" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1" />
      <text x="300" y="260" textAnchor="middle" fill="#78716c" fontSize="12" fontWeight="bold">
        Await 執行流程
      </text>

      {/* 步驟 */}
      <g>
        <rect x="40" y="280" width="100" height="45" rx="6" fill="#3b82f6" />
        <text x="90" y="300" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">執行程式碼</text>
        <text x="90" y="315" textAnchor="middle" fill="#bfdbfe" fontSize="9">fetchUser()</text>
      </g>

      <path d="M140,302 L165,302" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue4)" />

      <g>
        <rect x="170" y="280" width="100" height="45" rx="6" fill="#f59e0b" />
        <text x="220" y="300" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">await 等待</text>
        <text x="220" y="315" textAnchor="middle" fill="#fef3c7" fontSize="9">⏳ 暫停</text>
      </g>

      <path d="M270,302 L295,302" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowOrange2)" />

      <g>
        <rect x="300" y="280" width="100" height="45" rx="6" fill="#10b981" />
        <text x="350" y="300" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">收到回應</text>
        <text x="350" y="315" textAnchor="middle" fill="#bbf7d0" fontSize="9">✓ 繼續執行</text>
      </g>

      <path d="M400,302 L425,302" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen3)" />

      <g>
        <rect x="430" y="280" width="130" height="45" rx="6" fill="#8b5cf6" />
        <text x="495" y="300" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">執行下一行</text>
        <text x="495" y="315" textAnchor="middle" fill="#e9d5ff" fontSize="9">fetchPosts()...</text>
      </g>

      <text x="300" y="365" textAnchor="middle" fill="#78716c" fontSize="11">
        💡 程式碼看起來是同步的，但實際上是非同步執行！
      </text>

      <defs>
        <marker id="arrowBlue4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
        </marker>
        <marker id="arrowOrange2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
        </marker>
        <marker id="arrowGreen3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  );
}

// 6. Promise 基礎示意圖
export function PromiseDiagram() {
  return (
    <svg width="600" height="400" viewBox="0 0 600 400">
      <rect width="600" height="400" fill="#fffdf8" />

      <text x="300" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        Promise - 非同步操作的承諾
      </text>

      {/* Promise 狀態圖 */}
      <rect x="20" y="50" width="560" height="130" rx="12" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1" />
      <text x="300" y="75" textAnchor="middle" fill="#78716c" fontSize="12" fontWeight="bold">Promise 三種狀態</text>

      {/* Pending */}
      <g>
        <rect x="50" y="95" width="140" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="120" y="120" textAnchor="middle" fill="#92400e" fontSize="13" fontWeight="bold">⏳ Pending</text>
        <text x="120" y="140" textAnchor="middle" fill="#92400e" fontSize="10">等待中</text>
      </g>

      {/* 箭頭 */}
      <path d="M190,115 L230,95" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen4)" />
      <path d="M190,135 L230,155" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

      {/* Fulfilled */}
      <g>
        <rect x="230" y="70" width="140" height="50" rx="8" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
        <text x="300" y="92" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="bold">✓ Fulfilled</text>
        <text x="300" y="108" textAnchor="middle" fill="#166534" fontSize="10">成功完成</text>
      </g>

      {/* Rejected */}
      <g>
        <rect x="230" y="130" width="140" height="50" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="300" y="152" textAnchor="middle" fill="#b91c1c" fontSize="13" fontWeight="bold">✗ Rejected</text>
        <text x="300" y="168" textAnchor="middle" fill="#b91c1c" fontSize="10">失敗拒絕</text>
      </g>

      {/* .then() / .catch() */}
      <path d="M370,95 L410,95" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen4)" />
      <rect x="410" y="75" width="140" height="40" rx="6" fill="#10b981" />
      <text x="480" y="100" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">.then(result)</text>

      <path d="M370,155 L410,155" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
      <rect x="410" y="135" width="140" height="40" rx="6" fill="#ef4444" />
      <text x="480" y="160" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">.catch(error)</text>

      {/* 程式碼範例 */}
      <rect x="20" y="195" width="560" height="185" rx="12" fill="#1e293b" />
      <text x="40" y="220" fill="#94a3b8" fontSize="11" fontWeight="bold">Promise 基本語法：</text>

      <text x="40" y="250" fill="#c084fc" fontSize="12" fontFamily="monospace">const</text>
      <text x="80" y="250" fill="#f8fafc" fontSize="12" fontFamily="monospace">promise =</text>
      <text x="155" y="250" fill="#fbbf24" fontSize="12" fontFamily="monospace">new Promise</text>
      <text x="250" y="250" fill="#f8fafc" fontSize="12" fontFamily="monospace">((resolve, reject) =&gt; {'{'}</text>

      <text x="55" y="275" fill="#6b7280" fontSize="11" fontFamily="monospace">// 非同步操作...</text>

      <text x="55" y="300" fill="#c084fc" fontSize="12" fontFamily="monospace">if</text>
      <text x="75" y="300" fill="#f8fafc" fontSize="12" fontFamily="monospace">(success) {'{'}</text>
      <text x="70" y="320" fill="#4ade80" fontSize="12" fontFamily="monospace">resolve</text>
      <text x="125" y="320" fill="#f8fafc" fontSize="12" fontFamily="monospace">(data)</text>
      <text x="180" y="320" fill="#6b7280" fontSize="11" fontFamily="monospace">// 成功時調用</text>

      <text x="55" y="340" fill="#f8fafc" fontSize="12" fontFamily="monospace">{'}'}</text>
      <text x="70" y="340" fill="#c084fc" fontSize="12" fontFamily="monospace">else</text>
      <text x="100" y="340" fill="#f8fafc" fontSize="12" fontFamily="monospace">{'{'}</text>
      <text x="70" y="360" fill="#f87171" fontSize="12" fontFamily="monospace">reject</text>
      <text x="115" y="360" fill="#f8fafc" fontSize="12" fontFamily="monospace">(error)</text>
      <text x="175" y="360" fill="#6b7280" fontSize="11" fontFamily="monospace">// 失敗時調用</text>

      <text x="40" y="375" fill="#f8fafc" fontSize="12" fontFamily="monospace">{'}'})</text>

      <defs>
        <marker id="arrowGreen4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
        <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
        </marker>
      </defs>
    </svg>
  );
}

// 7. Async + Promise 完整示意圖
export function AsyncPromiseDiagram() {
  return (
    <svg width="600" height="420" viewBox="0 0 600 420">
      <rect width="600" height="420" fill="#fffdf8" />

      <text x="300" y="30" textAnchor="middle" fill="#78716c" fontSize="16" fontWeight="bold">
        Async/Await + Promise 完整流程
      </text>

      {/* 流程圖 */}
      <rect x="20" y="50" width="560" height="140" rx="12" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1" />

      {/* Step 1: async function */}
      <g>
        <rect x="40" y="70" width="110" height="55" rx="8" fill="#8b5cf6" />
        <text x="95" y="92" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1. async 函式</text>
        <text x="95" y="110" textAnchor="middle" fill="#e9d5ff" fontSize="9">宣告非同步函式</text>
      </g>

      <path d="M150,98 L170,98" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowPurple)" />

      {/* Step 2: await */}
      <g>
        <rect x="175" y="70" width="100" height="55" rx="8" fill="#f59e0b" />
        <text x="225" y="92" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">2. await</text>
        <text x="225" y="110" textAnchor="middle" fill="#fef3c7" fontSize="9">等待 Promise</text>
      </g>

      <path d="M275,98 L295,98" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowOrange3)" />

      {/* Step 3: Promise */}
      <g>
        <rect x="300" y="70" width="100" height="55" rx="8" fill="#3b82f6" />
        <text x="350" y="92" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">3. Promise</text>
        <text x="350" y="110" textAnchor="middle" fill="#bfdbfe" fontSize="9">執行非同步操作</text>
      </g>

      <path d="M400,98 L420,98" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue5)" />

      {/* Step 4: resolve */}
      <g>
        <rect x="425" y="70" width="130" height="55" rx="8" fill="#10b981" />
        <text x="490" y="92" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">4. resolve/reject</text>
        <text x="490" y="110" textAnchor="middle" fill="#bbf7d0" fontSize="9">回傳結果</text>
      </g>

      {/* 回傳箭頭 */}
      <path d="M490,130 Q490,165 225,165 Q175,165 175,125" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen5)" strokeDasharray="4" />
      <text x="350" y="178" textAnchor="middle" fill="#10b981" fontSize="10">結果傳回 await</text>

      {/* 程式碼範例 */}
      <rect x="20" y="200" width="560" height="200" rx="12" fill="#1e293b" />
      <text x="40" y="225" fill="#94a3b8" fontSize="11" fontWeight="bold">完整程式碼範例：</text>

      {/* Promise 函式 */}
      <text x="40" y="255" fill="#6b7280" fontSize="11" fontFamily="monospace">// 建立 Promise 函式</text>
      <text x="40" y="275" fill="#c084fc" fontSize="11" fontFamily="monospace">function</text>
      <text x="95" y="275" fill="#fbbf24" fontSize="11" fontFamily="monospace">fetchData</text>
      <text x="165" y="275" fill="#f8fafc" fontSize="11" fontFamily="monospace">() {'{'}</text>
      <text x="55" y="293" fill="#c084fc" fontSize="11" fontFamily="monospace">return new</text>
      <text x="125" y="293" fill="#fbbf24" fontSize="11" fontFamily="monospace">Promise</text>
      <text x="180" y="293" fill="#f8fafc" fontSize="11" fontFamily="monospace">((resolve) =&gt;</text>
      <text x="300" y="293" fill="#4ade80" fontSize="11" fontFamily="monospace">resolve</text>
      <text x="352" y="293" fill="#f8fafc" fontSize="11" fontFamily="monospace">("資料"))</text>
      <text x="40" y="311" fill="#f8fafc" fontSize="11" fontFamily="monospace">{'}'}</text>

      {/* Async 函式 */}
      <text x="40" y="336" fill="#6b7280" fontSize="11" fontFamily="monospace">// 使用 async/await 調用</text>
      <text x="40" y="356" fill="#c084fc" fontSize="11" fontFamily="monospace">async function</text>
      <text x="135" y="356" fill="#fbbf24" fontSize="11" fontFamily="monospace">main</text>
      <text x="165" y="356" fill="#f8fafc" fontSize="11" fontFamily="monospace">() {'{'}</text>
      <text x="55" y="374" fill="#c084fc" fontSize="11" fontFamily="monospace">const</text>
      <text x="95" y="374" fill="#f8fafc" fontSize="11" fontFamily="monospace">data =</text>
      <text x="145" y="374" fill="#fbbf24" fontSize="11" fontFamily="monospace">await</text>
      <text x="185" y="374" fill="#f8fafc" fontSize="11" fontFamily="monospace">fetchData()</text>
      <text x="280" y="374" fill="#6b7280" fontSize="10" fontFamily="monospace">// 等待 Promise 完成</text>
      <text x="55" y="392" fill="#f8fafc" fontSize="11" fontFamily="monospace">console.log(data)</text>
      <text x="185" y="392" fill="#6b7280" fontSize="10" fontFamily="monospace">// 輸出: "資料"</text>
      <text x="40" y="408" fill="#f8fafc" fontSize="11" fontFamily="monospace">{'}'}</text>

      <defs>
        <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#8b5cf6" />
        </marker>
        <marker id="arrowOrange3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
        </marker>
        <marker id="arrowBlue5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
        </marker>
        <marker id="arrowGreen5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  );
}
