import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

// 第二頁：HTTP Methods 互動示範
export function HttpMethodsDemo() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: '藍牙耳機', price: 1200 },
    { id: 2, name: '無線滑鼠', price: 800 },
  ]);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [logs, setLogs] = useState<{ method: string; message: string; type: 'request' | 'response' }[]>([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [editProduct, setEditProduct] = useState<{ id: number; name: string; price: string } | null>(null);
  const [nextId, setNextId] = useState(3);

  const methods = [
    { name: 'GET', color: 'bg-blue-500', description: '取得資料', action: '讀取' },
    { name: 'POST', color: 'bg-green-500', description: '新增資料', action: '新增' },
    { name: 'PUT', color: 'bg-amber-500', description: '更新資料', action: '編輯' },
    { name: 'DELETE', color: 'bg-red-500', description: '刪除資料', action: '刪除' },
  ];

  const addLog = (method: string, message: string, type: 'request' | 'response') => {
    setLogs(prev => [...prev.slice(-5), { method, message, type }]);
  };

  const handleGet = () => {
    setSelectedMethod('GET');
    addLog('GET', 'GET /api/products', 'request');
    setTimeout(() => {
      addLog('GET', `回傳 ${products.length} 筆商品資料`, 'response');
    }, 500);
  };

  const handlePost = () => {
    if (!newProduct.name || !newProduct.price) return;
    setSelectedMethod('POST');
    addLog('POST', `POST /api/products { name: "${newProduct.name}", price: ${newProduct.price} }`, 'request');
    setTimeout(() => {
      const product = { id: nextId, name: newProduct.name, price: Number(newProduct.price) };
      setProducts(prev => [...prev, product]);
      setNextId(prev => prev + 1);
      setNewProduct({ name: '', price: '' });
      addLog('POST', `新增成功！ID: ${product.id}`, 'response');
    }, 500);
  };

  const handlePut = () => {
    if (!editProduct) return;
    setSelectedMethod('PUT');
    addLog('PUT', `PUT /api/products/${editProduct.id} { name: "${editProduct.name}", price: ${editProduct.price} }`, 'request');
    setTimeout(() => {
      setProducts(prev => prev.map(p =>
        p.id === editProduct.id
          ? { ...p, name: editProduct.name, price: Number(editProduct.price) }
          : p
      ));
      addLog('PUT', `更新成功！ID: ${editProduct.id}`, 'response');
      setEditProduct(null);
    }, 500);
  };

  const handleDelete = (id: number) => {
    setSelectedMethod('DELETE');
    addLog('DELETE', `DELETE /api/products/${id}`, 'request');
    setTimeout(() => {
      setProducts(prev => prev.filter(p => p.id !== id));
      addLog('DELETE', `刪除成功！ID: ${id}`, 'response');
    }, 500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      {/* HTTP Methods 說明 */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {methods.map(method => (
          <div
            key={method.name}
            className={`p-4 rounded-xl text-center transition-all ${
              selectedMethod === method.name ? 'ring-2 ring-offset-2 ring-gray-400 scale-105' : ''
            }`}
          >
            <div className={`${method.color} text-white font-bold py-2 px-4 rounded-lg mb-2`}>
              {method.name}
            </div>
            <div className="text-sm text-gray-600">{method.description}</div>
            <div className="text-xs text-gray-400 mt-1">{method.action}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 左側：資料庫模擬 */}
        <div className="bg-white rounded-2xl border-2 border-purple-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 4 3h8c2.5 0 4-1 4-3V7M4 7c0-2 1.5-3 4-3h8c2.5 0 4 1 4 3M4 7h16M8 12h.01M12 12h.01M16 12h.01" />
              </svg>
            </div>
            <span className="font-semibold text-purple-700">資料庫 - Products 表</span>
          </div>

          {/* 商品列表 */}
          <div className="space-y-2 mb-4">
            {products.map(product => (
              <div key={product.id} className="flex items-center justify-between bg-purple-50 rounded-lg p-3">
                <div>
                  <span className="text-xs text-purple-400">ID: {product.id}</span>
                  <div className="font-medium text-gray-700">{product.name}</div>
                  <div className="text-sm text-gray-500">${product.price}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditProduct({ id: product.id, name: product.name, price: String(product.price) })}
                    className="p-1.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-600"
                    title="編輯"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-1.5 rounded bg-red-100 hover:bg-red-200 text-red-600"
                    title="刪除"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <div className="text-center text-gray-400 py-4">暫無商品資料</div>
            )}
          </div>

          {/* GET 按鈕 */}
          <button
            onClick={handleGet}
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            GET - 取得所有商品
          </button>
        </div>

        {/* 右側：操作面板 */}
        <div className="space-y-4">
          {/* POST 新增商品 */}
          <div className="bg-white rounded-2xl border-2 border-green-200 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
              <span className="text-sm font-medium text-gray-700">新增商品</span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="商品名稱"
                value={newProduct.name}
                onChange={e => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                className="flex-1 px-3 py-2 border rounded-lg text-sm"
              />
              <input
                type="number"
                placeholder="價格"
                value={newProduct.price}
                onChange={e => setNewProduct(prev => ({ ...prev, price: e.target.value }))}
                className="w-24 px-3 py-2 border rounded-lg text-sm"
              />
              <button
                onClick={handlePost}
                disabled={!newProduct.name || !newProduct.price}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white rounded-lg text-sm font-medium transition-colors"
              >
                新增
              </button>
            </div>
          </div>

          {/* PUT 編輯商品 */}
          {editProduct && (
            <div className="bg-white rounded-2xl border-2 border-amber-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">PUT</span>
                <span className="text-sm font-medium text-gray-700">編輯商品 ID: {editProduct.id}</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editProduct.name}
                  onChange={e => setEditProduct(prev => prev ? { ...prev, name: e.target.value } : null)}
                  className="flex-1 px-3 py-2 border rounded-lg text-sm"
                />
                <input
                  type="number"
                  value={editProduct.price}
                  onChange={e => setEditProduct(prev => prev ? { ...prev, price: e.target.value } : null)}
                  className="w-24 px-3 py-2 border rounded-lg text-sm"
                />
                <button
                  onClick={handlePut}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  更新
                </button>
                <button
                  onClick={() => setEditProduct(null)}
                  className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-lg text-sm"
                >
                  取消
                </button>
              </div>
            </div>
          )}

          {/* 請求日誌 */}
          <div className="bg-gray-900 rounded-2xl p-4 text-sm font-mono">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-xs">Console</span>
            </div>
            <div className="space-y-1 h-32 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-gray-500">// 點擊按鈕查看 API 請求日誌...</div>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className={log.type === 'request' ? 'text-cyan-400' : 'text-green-400'}>
                    {log.type === 'request' ? '→' : '←'} [{log.method}] {log.message}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 第四頁：用戶角色與權限互動示範
export function UserRolesDemo() {
  const [currentUser, setCurrentUser] = useState<'guest' | 'admin'>('guest');
  const [token, setToken] = useState<string | null>(null);
  const [logs, setLogs] = useState<{ message: string; type: 'info' | 'success' | 'error' | 'warning' }[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const addLog = (message: string, type: 'info' | 'success' | 'error' | 'warning') => {
    setLogs(prev => [...prev.slice(-6), { message, type }]);
  };

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const confirmLogin = () => {
    setShowLoginModal(false);
    const newToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
    setToken(newToken);
    setCurrentUser('admin');
    addLog('管理者登入成功', 'success');
    addLog(`Token: ${newToken.substring(0, 30)}...`, 'info');
    addLog('Token 已儲存至 cookie', 'info');
  };

  const handleLogout = () => {
    setCurrentUser('guest');
    setToken(null);
    addLog('已登出', 'info');
  };

  const handleAccessPublicAPI = () => {
    addLog('GET /api/products (公開 API)', 'info');
    addLog('✓ 取得商品列表成功', 'success');
  };

  const handleAccessProtectedAPI = () => {
    addLog('GET /api/admin/orders (需要授權)', 'info');
    if (currentUser === 'admin' && token) {
      addLog('Header: Authorization: Bearer ' + token.substring(0, 20) + '...', 'info');
      addLog('✓ 取得訂單資料成功', 'success');
    } else {
      addLog('✗ 401 Unauthorized - 需要管理者權限', 'error');
    }
  };

  const handleModifyData = () => {
    addLog('PUT /api/admin/products/1 (需要授權)', 'info');
    if (currentUser === 'admin' && token) {
      addLog('Header: Authorization: Bearer ' + token.substring(0, 20) + '...', 'info');
      addLog('✓ 商品資料更新成功', 'success');
    } else {
      addLog('✗ 403 Forbidden - 無權限修改資料', 'error');
    }
  };

  const getLogColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      default: return 'text-cyan-400';
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* 訪客 */}
        <div className={`bg-white rounded-2xl border-2 p-5 transition-all ${
          currentUser === 'guest' ? 'border-gray-400 ring-2 ring-gray-200' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-700">訪客</div>
                <div className="text-xs text-gray-400">Guest</div>
              </div>
            </div>
            {currentUser === 'guest' && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">目前狀態</span>
            )}
          </div>
          <div className="text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-red-400">✗</span> 無 Token
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-400">✓</span> 可瀏覽公開資料
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400">✗</span> 無法存取後台
            </div>
          </div>
        </div>

        {/* 管理者 */}
        <div className={`bg-white rounded-2xl border-2 p-5 transition-all ${
          currentUser === 'admin' ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-amber-700">管理者</div>
                <div className="text-xs text-gray-400">Admin</div>
              </div>
            </div>
            {currentUser === 'admin' && (
              <span className="px-2 py-1 bg-amber-100 text-amber-600 text-xs rounded-full">目前狀態</span>
            )}
          </div>
          <div className="text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-400">✓</span> 擁有 Token
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-400">✓</span> 可瀏覽公開資料
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 可存取/修改後台
            </div>
          </div>
          {currentUser !== 'admin' && (
            <button
              onClick={handleLogin}
              className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              登入為管理者
            </button>
          )}
        </div>
      </div>

      {/* Token 顯示 */}
      {token && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span className="font-medium text-amber-700">目前的 Token</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors"
            >
              登出
            </button>
          </div>
          <div className="mt-2 font-mono text-xs text-amber-600 bg-amber-100 rounded p-2 break-all">
            {token}
          </div>
        </div>
      )}

      {/* API 操作按鈕 */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <button
          onClick={handleAccessPublicAPI}
          className="p-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl transition-colors"
        >
          <div className="text-green-600 font-semibold mb-1">公開 API</div>
          <div className="text-xs text-gray-500">GET /api/products</div>
          <div className="mt-2 text-xs text-green-500">✓ 所有人可存取</div>
        </button>

        <button
          onClick={handleAccessProtectedAPI}
          className="p-4 bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-xl transition-colors"
        >
          <div className="text-amber-600 font-semibold mb-1">後台 API（讀取）</div>
          <div className="text-xs text-gray-500">GET /api/admin/orders</div>
          <div className="mt-2 text-xs text-amber-500">🔒 需要管理者 Token</div>
        </button>

        <button
          onClick={handleModifyData}
          className="p-4 bg-red-50 hover:bg-red-100 border-2 border-red-200 rounded-xl transition-colors"
        >
          <div className="text-red-600 font-semibold mb-1">後台 API（修改）</div>
          <div className="text-xs text-gray-500">PUT /api/admin/products/1</div>
          <div className="mt-2 text-xs text-red-500">🔒 需要管理者 Token</div>
        </button>
      </div>

      {/* Console 日誌 */}
      <div className="bg-gray-900 rounded-2xl p-4 text-sm font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs">API Console</span>
        </div>
        <div className="space-y-1 h-36 overflow-y-auto">
          {logs.length === 0 ? (
            <div className="text-gray-500">// 點擊上方按鈕測試 API 權限...</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className={getLogColor(log.type)}>
                {log.message}
              </div>
            ))
          )}
        </div>
      </div>

      {/* 登入彈窗 */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowLoginModal(false)}>
          <div className="bg-white rounded-2xl p-6 w-80" onClick={e => e.stopPropagation()}>
            <h3 className="font-semibold text-lg mb-4">管理者登入</h3>
            <div className="space-y-3 mb-4">
              <input
                type="text"
                placeholder="帳號"
                defaultValue="admin@shop.com"
                className="w-full px-3 py-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="密碼"
                defaultValue="********"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowLoginModal(false)}
                className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                取消
              </button>
              <button
                onClick={confirmLogin}
                className="flex-1 py-2 text-white rounded-lg transition-colors bg-amber-500 hover:bg-amber-600"
              >
                登入
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
