// Firebase Functions環境でも動作する軽量版OGP画像生成
export default async function handler(req, res) {
  try {
    const { 
      title = 'MeltingHack', 
      description = 'ハッカソン愛好家のネットワーク',
      type = 'default' 
    } = req.query;

    // SVGベースの画像生成（canvasライブラリ不要）
    const width = 1200;
    const height = 630;
    
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="100%" height="100%" fill="url(#bg)"/>
        
        <!-- Title -->
        <text x="40" y="200" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="white">
          ${escapeXml(title.length > 20 ? title.substring(0, 20) + '...' : title)}
        </text>
        
        <!-- Description -->
        <text x="40" y="280" font-family="Arial, sans-serif" font-size="32" fill="#f0f0f0">
          ${escapeXml(description.length > 40 ? description.substring(0, 40) + '...' : description)}
        </text>
        
        <!-- Site Name -->
        <text x="40" y="${height - 60}" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white">
          MeltingHack
        </text>
        
        <!-- Logo placeholder -->
        <circle cx="${width - 100}" cy="100" r="60" fill="rgba(255,255,255,0.2)"/>
        <text x="${width - 100}" y="110" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle">
          MH
        </text>
      </svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.send(svg);

  } catch (error) {
    console.error('OG Image generation error:', error);
    res.status(500).json({ error: 'Failed to generate OG image' });
  }
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
} 