/**
 * メディア掲載・TV番組取材・大学公式動画データ
 */
export const mediaCategories = [
  { id: 'all', label: 'すべて' },
  { id: 'tv', label: '📺 地上波TV取材' },
  { id: 'web-press', label: '📰 WEB特集・プレスリリース' },
  { id: 'vlog-interview', label: '🎓 公式Vlog・インタビュー' },
  { id: 'campus', label: '🏫 キャンパス・学内バイト' },
];

export const mediaData = [
  {
    id: 'tv-kigyo',
    title: '【Campus 見聞録】＃3 起業愛好会',
    shortTitle: '起業愛好会 TV取材',
    badge: '地上波TV取材',
    badgeColor: 'var(--google-red)',
    type: 'youtube',
    format: 'landscape', // 16:9
    category: 'tv',
    source: '広島ホームテレビ / 広島工業大学',
    mediaUrl: 'https://www.youtube.com/watch?v=lSIKqF87C9o',
    embedId: 'lSIKqF87C9o',
    thumbnail: '/assets/media/tv-kigyo.jpg',
    description: '大学紹介番組「Campus 見聞録」にて起業愛好会の活動が特集されました。「HIT Metaverse・VR商店街にHITPOアプリ、学生のアイディアがビジネスに！！」をテーマに、アイデアを形にする挑戦が取材されています。',
    highlights: ['HIT Metaverse / VR商店街の紹介', '学生アイデアの事業化挑戦', 'テレビ放送取材アーカイブ'],
    featured: true,
    relatedProjectId: 'hit-metaverse-voc'
  },
  {
    id: 'tv-metaverse',
    title: '【HIPPY山のキャンパス場所】#6 HIT Metaverse',
    shortTitle: 'HIT Metaverse TV取材',
    badge: '地上波TV取材',
    badgeColor: 'var(--google-yellow)',
    type: 'youtube',
    format: 'landscape', // 16:9
    category: 'tv',
    source: '広島ホームテレビ / 広島工業大学',
    mediaUrl: 'https://www.youtube.com/watch?v=x9xnbxoze8g',
    embedId: 'x9xnbxoze8g',
    thumbnail: '/assets/media/tv-metaverse.jpg',
    description: 'HIPPY氏が最先端の技術を学ぶ現場を訪れる番組にて、田中が設立・代表を務めたメタバースサークル「HIT Metaverse」が取材されました。「企業と連携 新しい商品開発も！」として活動成果が取り上げられました。',
    highlights: ['設立代表としての取り組み', '企業連携・新商品開発', 'VR/メタバース技術の実践'],
    featured: true,
    relatedProjectId: 'hit-metaverse-voc'
  },
  {
    id: 'article-metacross',
    title: '広島工業大学 オープンキャンパスをメタバースへ拡大 - META CROSS NETWORK',
    shortTitle: 'META CROSS 特集取材',
    badge: 'WEB特集・独占取材',
    badgeColor: 'var(--google-blue)',
    type: 'article',
    format: 'landscape', // 16:9
    category: 'web-press',
    source: 'META CROSS NETWORK',
    date: '2023.08.01',
    mediaUrl: 'https://metacross.net/2023/08/01/%E5%BA%83%E5%B3%B6%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6-%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9%E3%82%92%E3%83%A1%E3%82%BF%E3%83%90%E3%83%BC%E3%82%B9%E3%81%B8/',
    thumbnail: '/assets/media/article-metacross.jpg',
    description: 'メタバース・XRメディア「META CROSS NETWORK」によるHIT Metaverse代表らむね（田中）への独占特集インタビュー。バーチャルオープンキャンパス開催の舞台裏や、大学公認サークル立ち上げの経緯、学生主体でのメタバース活用の実態が深掘り取材されました。',
    highlights: ['代表らむね（田中）独占インタビュー', 'バーチャルオープンキャンパスの舞台裏', '大学におけるメタバースサークルの実態'],
    featured: true,
    relatedProjectId: 'hit-metaverse-voc'
  },
  {
    id: 'press-metapicks',
    title: '広島工大キャンパスを体験できる「VIRTUAL OPEN CAMPUS 2023」開催 - MetaPicks',
    shortTitle: 'MetaPicks プレスリリース掲載',
    badge: '公式プレスリリース掲載',
    badgeColor: 'var(--google-green)',
    type: 'article',
    format: 'landscape', // 16:9
    category: 'web-press',
    source: 'MetaPicks（メタバース・XR専門メディア）',
    date: '2023.07',
    mediaUrl: 'https://metapicks.jp/2023/07/hit-metaverse-virtual-open-campus-2023/',
    thumbnail: '/assets/media/press-metapicks.jpg',
    description: 'メタバース・XR専門ニュースメディア「MetaPicks」に掲載された公式プレスリリース。Cluster上の「バーチャル広島工大」で開催されたVIRTUAL OPEN CAMPUS 2023の企画内容（Meta Quest 2でのVR体験、音楽生演奏、模擬講義、リアルとメタバースを繋ぐバーチャルゲート）や全国大学メタバースサークル連盟の設立が広く報じられました。',
    highlights: ['公式プレスリリース掲載', '600名超動員・VR体験＆ステージ企画', '全国大学メタバースサークル連盟発足'],
    featured: true,
    relatedProjectId: 'hit-metaverse-voc'
  },
  {
    id: 'vlog-day',
    title: '📹広工大・情報コミュニケーション学科4年次生のリアルな1日Vlog💻☀️',
    shortTitle: '情報コミュニケーション学科4年次生の1日Vlog',
    badge: '大学公式Vlog',
    badgeColor: 'var(--google-blue)',
    type: 'youtube-shorts',
    format: 'portrait', // 9:16
    category: 'vlog-interview',
    source: '広島工業大学公式 YouTube Shorts',
    mediaUrl: 'https://www.youtube.com/shorts/etGvHNqDTLY',
    embedId: 'etGvHNqDTLY',
    thumbnail: '/assets/media/vlog-day.jpg',
    description: '朝の散歩から授業、学食、研究室ゼミ、サークル活動、趣味の時間まで。情報コミュニケーション学科の代表学生として、キャンパスでのリアルで充実した1日に密着した公式ショートVlogです。',
    highlights: ['学科の代表学生としての密着', 'リアルな学習・研究室ライフ', 'サークル活動と開発日常'],
    featured: false,
    relatedProjectId: 'student-number-recording'
  },
  {
    id: 'interview-senior',
    title: '＼広工大 先輩に聞いてみた！／',
    shortTitle: '先輩インタビュー（広工大）',
    badge: '公式インタビュー',
    badgeColor: 'var(--google-green)',
    type: 'youtube-shorts',
    format: 'portrait', // 9:16
    category: 'vlog-interview',
    source: '広島工業大学公式 YouTube Shorts',
    mediaUrl: 'https://www.youtube.com/shorts/nQ47nu7f5-w',
    embedId: 'nQ47nu7f5-w',
    thumbnail: '/assets/media/interview-senior.jpg',
    description: '「なぜ広工大を選んだの？」「入学して良かったことは？」「好きな授業は？」。大学公式インタビューにて、情報技術への探求心や学生生活の実感を自身の言葉で語っています。',
    highlights: ['情報科学への進学動機', '実践的な学びへの実感', '後輩へのメッセージ'],
    featured: false,
    relatedProjectId: null
  },
  {
    id: 'reel-parttime',
    title: '＼理系大学生に質問！／バイト何してますか？',
    shortTitle: '学内バイト（ICTサポート）紹介',
    badge: '大学公式リール',
    badgeColor: 'var(--gemini-pink)',
    type: 'instagram',
    format: 'portrait', // 9:16
    category: 'campus',
    source: '広島工業大学公式 Instagram',
    mediaUrl: 'https://www.instagram.com/hit_university/reel/DVgQeWKD-Za/',
    embedId: 'DVgQeWKD-Za',
    thumbnail: '/assets/media/reel-parttime.jpg',
    description: '大学公式Instagram「HITのリアルな日常」シリーズ。学内アルバイト（ICTサポートセンター）の現場を紹介。ここで感じた課題から生まれたのが、ポートフォリオ掲載作「学生番号記録システム」です。',
    highlights: ['ICTサポートセンター業務', '課題発見から自動化開発へ', '公式Instagramリール特集'],
    featured: false,
    relatedProjectId: 'student-number-recording'
  }
];
