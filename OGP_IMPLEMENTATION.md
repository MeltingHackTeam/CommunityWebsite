# OGP (Open Graph Protocol) 実装ガイド

Firebase + Hosting + Functions環境でのOGP対応が完了しました。

## 実装内容

### 1. OGPメタタグコンポーネント
- **ファイル**: `components/SEO/OGPMeta.jsx`
- **機能**: 各ページに適切なOGPメタタグを自動生成
- **対応項目**:
  - Open Graph (Facebook, LinkedIn等)
  - Twitter Card
  - 基本的なSEOメタタグ
  - 日本語対応

### 2. 動的OGP画像生成
- **ファイル**: `pages/api/og-image.js`
- **機能**: SVGベースの軽量OGP画像を動的生成
- **特徴**:
  - Firebase Functions環境対応
  - 外部ライブラリ不要
  - キャッシュ最適化済み

### 3. ページ別OGP設定
以下のページでOGP対応済み:
- **ホームページ** (`pages/index.jsx`)
- **イベント一覧** (`pages/events.jsx`)
- **ガイドページ** (`pages/guide.jsx`)

### 4. SEO最適化
- **robots.txt**: 検索エンジン向け設定
- **sitemap.xml**: サイトマップ
- **Firebase Hosting**: キャッシュ設定最適化

## 使用方法

### 新しいページにOGP追加

```jsx
import OGPMeta from '@/components/SEO/OGPMeta';
import { mainData } from '@/lib/data';

export default function YourPage() {
  return (
    <>
      <OGPMeta
        title="ページタイトル"
        description="ページの説明文"
        url={`${mainData.siteUrl}/your-page`}
        image="/api/og-image?title=ページタイトル&description=説明文"
        type="website" // または "article"
      />
      {/* ページコンテンツ */}
    </>
  );
}
```

### 動的OGP画像のカスタマイズ

OGP画像APIのパラメータ:
- `title`: 画像に表示するタイトル
- `description`: 画像に表示する説明文
- `type`: 画像のタイプ（将来の拡張用）

例:
```
/api/og-image?title=MeltingHack&description=ハッカソンコミュニティ
```

## Firebase デプロイ設定

### 環境変数設定
Firebase Hostingで以下の環境変数を設定:
```
NEXT_PUBLIC_SITE_URL=https://meltinghack.com
```

### デプロイコマンド
```bash
npm run build
firebase deploy
```

## OGP検証ツール

実装後、以下のツールでOGPが正しく設定されているか確認:

1. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/

2. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator

3. **LinkedIn Post Inspector**
   - https://www.linkedin.com/post-inspector/

## ファイル構成

```
├── components/
│   └── SEO/
│       └── OGPMeta.jsx          # OGPメタタグコンポーネント
├── pages/
│   ├── api/
│   │   └── og-image.js          # 動的OGP画像生成API
│   ├── index.jsx                # ホームページ（OGP対応済み）
│   ├── events.jsx               # イベント一覧（OGP対応済み）
│   ├── guide.jsx                # ガイドページ（OGP対応済み）
│   └── _document.js             # 基本メタタグ設定
├── public/
│   ├── robots.txt               # 検索エンジン設定
│   └── sitemap.xml              # サイトマップ
├── lib/
│   └── data.jsx                 # OGP用メタデータ
├── firebase.json                # Firebase設定（キャッシュ最適化）
└── next.config.js               # Next.js設定（SEO最適化）
```

## 注意事項

1. **画像サイズ**: OGP画像は1200x630pxで生成されます
2. **キャッシュ**: OGP画像は1年間キャッシュされます
3. **文字制限**: タイトルは20文字、説明文は40文字で自動切り詰め
4. **言語設定**: 日本語（ja）に設定済み

## トラブルシューティング

### OGP画像が表示されない場合
1. URLが正しいか確認
2. Firebase Functionsが正常に動作しているか確認
3. キャッシュをクリアして再テスト

### メタタグが反映されない場合
1. ページのビルドが正常に完了しているか確認
2. OGPMetaコンポーネントが正しくインポートされているか確認
3. ブラウザのキャッシュをクリア

## 今後の拡張

- 個別イベントページのOGP対応
- ブログ記事のOGP対応
- 多言語対応
- より高度な画像生成機能 