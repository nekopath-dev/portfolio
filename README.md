# Tanasuke Portfolio

> A Google-inspired portfolio that shows who I am and what I've built — at a glance.

Tanasukeのポートフォリオサイトです。開発した作品、学生団体の立ち上げ・運営、メディア掲載などの実績をまとめています。

**サイト:** https://portfolio-nekopaths-projects.vercel.app

## 目的

就職活動で、自分の実績を一目で伝えるために作りました。
作品ごとに「背景・使用技術・処理の流れ・工夫や反省・成果」を詳細ページとしてまとめ、TV取材やWEB特集などのメディア掲載もあわせて確認できるようにしています。

## 主なページ・機能

| ページ | パス | 内容 |
|---|---|---|
| Home | `/` | Google検索風のヒーロー、自己紹介ダイジェスト、注目の実績（`featured: true` の作品）、注目メディア掲載、スキル、連絡先 |
| Projects | `/projects` | 全作品の一覧。「AI・アプリ開発」「コミュニティ・組織」のカテゴリで絞り込み |
| プロジェクト詳細 | `/projects/:id` | 作品ごとのケーススタディ（背景・使用技術・処理の流れ・工夫・成果・関連メディア・リンク）。前後の作品へ移動可能 |
| About | `/about` | 自己紹介、メディア掲載一覧（カテゴリ絞り込み付き）、経歴タイムライン |
| Philosophy | `/philosophy` | 技術と人間の幸福についての考えをまとめたマニフェスト |

- **メディア掲載モーダル** — メディアカードをクリックすると、YouTube・Instagramの動画や記事の詳細をモーダルで表示
- **ページ遷移** — framer-motion によるページ切り替えアニメーションと、画面上部のプログレスバー

## こだわり

- **オープニングアニメーション** — アバターから色付きの球が飛び出してアイコンが形成され、その後検索バーに「Hello, I'm Tanasuke.」がタイピングされます（アニメーションは1セッションにつき1回のみ）
- **Philosophy ページ** — 実績の一覧だけでなく、技術と人間の幸福についての考えを文章で伝えるページ
- **メディア掲載セクション** — 地上波TV取材・WEB特集・プレスリリース・公式Vlogなどを1か所に集約し、関連する作品の詳細ページからも参照できるようにしています
- **Google風デザイン** — Google Sans / Material Symbols、Material Design 3 風のボタンやチップ、Googleトップページ風のフッター（「I'm Feeling Lucky」など）

## 作り方

1. **Google Stitch** でデザイン案を作成（`stitch_about_professional_history/` フォルダがそのデザイン案です）
2. **Google Antigravity** で実装

## 技術スタック

- React 19 / React DOM
- Vite 7（`@vitejs/plugin-react`）
- React Router DOM 7
- framer-motion（アニメーション・ページ遷移）
- react-icons（SNSアイコン）
- canvas-confetti（フッターの紙吹雪演出）
- ESLint 9
- フォント・アイコン: Google Fonts（Google Sans / Inter / Noto Sans JP）、Material Symbols Outlined
- ホスティング: Vercel

## ディレクトリ構成

```
.
├── index.html
├── public/                 # 画像（作品画像・メディアのサムネイルなど）
├── src/
│   ├── main.jsx            # エントリーポイント
│   ├── App.jsx             # ルーティング・共通フッター
│   ├── pages/              # Home / Projects / ProjectDetail / About / Philosophy
│   ├── components/
│   │   ├── layout/         # ナビゲーション
│   │   ├── sections/       # Hero・Skills・Contact・MediaSection など
│   │   └── ui/             # カード・モーダル・タイムライン など
│   └── data/
│       ├── projectsData.js # 作品・活動データ
│       └── mediaData.js    # メディア掲載データ
└── stitch_about_professional_history/  # Google Stitch のデザイン案
```

## 作品データの追加方法

作品やメディア掲載は、データファイルの配列にオブジェクトを追加するだけで反映されます。

- **作品・活動:** `src/data/projectsData.js` の `projectsData` に追加
  - 主なキー: `id`, `numericId`, `title`, `shortTitle`, `description`, `tags`, `category`, `link`, `featured`, `icon`（Material Symbols のアイコン名）, `accentColor`, `details`
  - `featured: true` にすると Home の「注目の実績」に表示されます
  - `details` には `background` / `tools` / `flow` / `impressions` / `future` / `images` / `links` / `relatedMediaIds` などを書けます（書いた項目だけ詳細ページに表示されます）
- **メディア掲載:** `src/data/mediaData.js` の `mediaData` に追加
  - `category` は `mediaCategories` の `id`（`tv` / `web-press` / `vlog-interview` / `campus`）から選びます
  - 作品側の `details.relatedMediaIds` にメディアの `id` を書くと、その作品の詳細ページに関連メディアとして表示されます

## ローカルでの起動

```bash
npm install
npm run dev      # 開発サーバーを起動
npm run build    # 本番用ビルド（dist/ に出力）
npm run preview  # ビルド結果をローカルで確認
```

## デプロイ

Vercel でホスティングしています。

## 作者

Tanasuke — [@nekopath-dev](https://github.com/nekopath-dev)
