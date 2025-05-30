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
  - **LinkedIn特有の要件対応**:
    - `og:image:secure_url`
    - `og:image:alt`
    - `article:author`、`article:publisher`
    - `article:published_time`、`article:modified_time`
    - Schema.org構造化データ

### 2. 動的OGP画像生成
- **ファイル**: `pages/api/og-image.js`
- **機能**: SVGベースの軽量OGP画像を動的生成
- **特徴**:
  - Firebase Functions環境対応
  - 外部ライブラリ不要
  - キャッシュ最適化済み
  - **注意**: LinkedInはSVG画像をサポートしていない可能性があるため、デフォルトでは既存のPNG画像を使用

### 3. ページ別OGP設定
以下のページでOGP対応済み:
- **ホームページ** (`pages/index.jsx`)
- **イベント一覧** (`pages/events.jsx`)
- **ガイドページ** (`pages/guide.jsx`)

**LinkedIn対応のため、すべてのページで既存のロゴ画像（PNG形式）をデフォルトOGP画像として使用**

### 4. SEO最適化
- **robots.txt**: 検索エンジン向け設定
- **sitemap.xml**: サイトマップ
- **Firebase Hosting**: キャッシュ設定最適化
- **_document.js**: デフォルトOGPメタタグ設定

## LinkedIn Post Inspector対応

### 修正内容
1. **絶対URL使用**: すべてのURL（画像含む）を絶対URLに変更
2. **LinkedIn特有メタタグ追加**:
   - `og:image:secure_url`
   - `og:image:alt`
   - `article:author`
   - `article:publisher`
   - `article:published_time`
   - `article:modified_time`
3. **Schema.org構造化データ追加**
4. **デフォルト画像をPNG形式に変更**（SVGではなく）

### 検証方法
1. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

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
        image={mainData.ogImage} // デフォルトのPNG画像を使用
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

**注意**: LinkedInでの表示を確実にするため、現在はデフォルトでPNG画像を使用しています。

## Firebase デプロイ設定

### 環境変数設定
Firebase Hostingで以下の環境変数を設定:
```
NEXT_PUBLIC_SITE_URL=https://melting-hack.tokyo
```

### デプロイコマンド
```bash
npm run build
firebase deploy
```

## OGP検証ツール

実装後、以下のツールでOGPが正しく設定されているか確認:

1. **LinkedIn Post Inspector**
   - https://www.linkedin.com/post-inspector/
   - **重要**: キャッシュクリアが必要な場合があります

2. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/

3. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator

## ファイル構成

```
├── components/
│   └── SEO/
│       └── OGPMeta.jsx          # OGPメタタグコンポーネント（LinkedIn対応済み）
├── pages/
│   ├── api/
│   │   └── og-image.js          # 動的OGP画像生成API
│   ├── index.jsx                # ホームページ（OGP対応済み）
│   ├── events.jsx               # イベント一覧（OGP対応済み）
│   ├── guide.jsx                # ガイドページ（OGP対応済み）
│   └── _document.js             # 基本メタタグ設定（デフォルトOGP追加）
├── public/
│   ├── robots.txt               # 検索エンジン設定
│   └── sitemap.xml              # サイトマップ
├── lib/
│   └── data.jsx                 # OGP用メタデータ
├── firebase.json                # Firebase設定（キャッシュ最適化）
└── next.config.js               # Next.js設定（SEO最適化）
```

## 注意事項

1. **画像形式**: LinkedInとの互換性のため、デフォルトでPNG画像を使用
2. **絶対URL**: すべてのOGP関連URLは絶対URLを使用
3. **キャッシュ**: OGP画像は1年間キャッシュされます
4. **文字制限**: タイトルは20文字、説明文は40文字で自動切り詰め
5. **言語設定**: 日本語（ja）に設定済み

## トラブルシューティング

### LinkedIn Post Inspectorで画像が表示されない場合

1. **絶対URLの確認**:
   ```
   ✓ https://melting-hack.tokyo/images/meltinghack_logo_bg_clear.png
   ✗ /images/meltinghack_logo_bg_clear.png
   ```

2. **画像形式の確認**:
   - PNG、JPEG形式を使用（SVGは避ける）
   - 推奨サイズ: 1200x630px

3. **メタタグの確認**:
   ```html
   <meta property="og:image" content="https://melting-hack.tokyo/images/meltinghack_logo_bg_clear.png" />
   <meta property="og:image:secure_url" content="https://melting-hack.tokyo/images/meltinghack_logo_bg_clear.png" />
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="630" />
   <meta property="og:image:alt" content="ページタイトル - 説明文" />
   ```

4. **キャッシュクリア**:
   - LinkedIn Post Inspectorでキャッシュをクリア
   - ブラウザのキャッシュもクリア

### メタタグが反映されない場合
1. ページのビルドが正常に完了しているか確認
2. OGPMetaコンポーネントが正しくインポートされているか確認
3. 環境変数`NEXT_PUBLIC_SITE_URL`が正しく設定されているか確認

### 画像が404エラーになる場合
1. 画像ファイルが`public/images/`に存在するか確認
2. ファイル名の大文字小文字が正確か確認
3. Firebase Hostingにファイルが正しくデプロイされているか確認

## 今後の拡張

- 個別イベントページのOGP対応
- ブログ記事のOGP対応
- 多言語対応
- PNG形式の動的画像生成機能（canvasライブラリ使用） 