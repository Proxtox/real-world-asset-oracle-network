"use client";

import { useState } from 'react';

export default function RWAOracle() {
  const [asset, setAsset] = useState('');

  const handleVerify = () => {
    alert(`Verifying price for ${asset} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">RWA Oracle Network</h1>

      <div className="space-y-4">
        <input type="text" value={asset} onChange={(e) => setAsset(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Asset Symbol" />
        <button onClick={handleVerify} className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Verify Price
        </button>
      </div>
    </div>
  );
}