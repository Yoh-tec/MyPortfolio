# 田中太郎 - Webデザイナーポートフォリオ

モダンで美しいWebデザイナーのポートフォリオサイトです。React、TypeScript、Tailwind CSS、Framer Motionを使用して構築されています。

## 🚀 特徴

- **レスポンシブデザイン**: すべてのデバイスで最適な表示
- **モダンなアニメーション**: Framer Motionによる滑らかなアニメーション
- **アクセシビリティ**: アクセシビリティを考慮したデザイン
- **パフォーマンス**: 高速で軽量なWebサイト
- **SEO最適化**: 検索エンジン最適化済み

## 🛠️ 技術スタック

- **フロントエンド**: React 18, TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **ビルドツール**: Vite
- **フォント**: Inter, JetBrains Mono

## 📦 セットアップ

### 前提条件

- Node.js 16.0以上
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone <repository-url>
cd portfolio_me
```

2. 依存関係をインストール
```bash
npm install
# または
yarn install
```

3. 開発サーバーを起動
```bash
npm run dev
# または
yarn dev
```

4. ブラウザで `http://localhost:3000` を開く

## 📁 プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   ├── Header.tsx      # ナビゲーションヘッダー
│   ├── Hero.tsx        # ヒーローセクション
│   ├── About.tsx       # 私についてセクション
│   ├── Skills.tsx      # スキルセクション
│   ├── Projects.tsx    # 作品集セクション
│   ├── Experience.tsx  # 経験セクション
│   ├── Contact.tsx     # お問い合わせセクション
│   └── Footer.tsx      # フッター
├── App.tsx             # メインアプリケーション
├── main.tsx           # エントリーポイント
└── index.css          # グローバルスタイル
```

## 🎨 カスタマイズ

### 色の変更

`tailwind.config.js` でプライマリカラーを変更できます：

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... 他の色階
  }
}
```

### コンテンツの変更

各コンポーネントファイルで以下の内容をカスタマイズできます：

- 個人情報（名前、経歴、スキルなど）
- プロジェクト情報
- 連絡先情報
- ソーシャルメディアリンク

### 画像の追加

`public/` ディレクトリに画像を追加し、コンポーネント内で参照してください。

## 📱 レスポンシブ対応

- モバイル: 320px以上
- タブレット: 768px以上
- デスクトップ: 1024px以上

## 🚀 デプロイ

### GitHub Pages（推奨）

1. GitHubにリポジトリをプッシュ
2. リポジトリの設定で「Pages」を有効化
3. ソースを「GitHub Actions」に設定
4. mainブランチにプッシュすると自動デプロイ

#### 手動デプロイ
```bash
# gh-pagesパッケージをインストール
npm install gh-pages --save-dev

# デプロイ
npm run deploy
```

### Vercel

1. Vercelにプロジェクトをインポート
2. 自動デプロイが設定されます

### Netlify

1. Netlifyにプロジェクトをインポート
2. ビルドコマンド: `npm run build`
3. 公開ディレクトリ: `dist`

### その他のプラットフォーム

```bash
# ビルド
npm run build

# プレビュー
npm run preview
```

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 貢献

プルリクエストやイシューの報告を歓迎します。

## 📞 お問い合わせ

ご質問やご提案がございましたら、お気軽にお問い合わせください。

---

**田中太郎** - Webデザイナー & フロントエンド開発者 