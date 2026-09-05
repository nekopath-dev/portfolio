export const projectCategories = ['All', 'AI・アプリ開発', 'コミュニティ・組織'];

export const projectsData = [
  {
    id: 'google-ai-ambassador-mvp',
    numericId: 8,
    title: 'Google AI学生アンバサダー MVP受賞',
    shortTitle: 'Google AI Ambassador MVP',
    description: 'Google AI学生アンバサダーとして活動中、2025年9月に行われたSNS投稿部門（Weekly Challenge）においてMVPを受賞。',
    tags: ['Google AI', 'Award', 'Claude', 'Gemini'],
    category: ['AI・アプリ開発'],
    link: 'https://note.com/tanasuke_ai/n/n22c0ff9d68f7',
    featured: true,
    icon: 'military_tech',
    accentColor: 'var(--google-blue)',
    details: {
      eventInfo: 'Google AI学生アンバサダー Weekly Challenge (2025年9月)',
      background: 'Geminiを筆頭とする「Google AI学生アンバサダー」に選出され、2025年に活動を行っておりました。\n活動の中で、毎週決まったテーマに関することをAIとともに行動するといった活動があり、9月に行われたSNS投稿部門において、MVPを受賞しました。\n\n内容は、「【実験】AIに「好きにしていいよ」とPCを渡したら何が起こる？―ClaudeとGeminiの自由研究ー」というものであり、普段AIに指示している私たちが何も指示しなかったら何をするのだろうか？という実験です。',
      links: [
        { url: 'https://note.com/tanasuke_ai/n/n22c0ff9d68f7', title: '受賞対象のNote記事（実験内容）' }
      ]
    }
  },
  {
    id: 'driving-school-notification',
    numericId: 4,
    title: '自動車学校 予約空き自動通知システム',
    shortTitle: '自動車学校 空き予約通知',
    description: '自動車学校の技能講習の予約空き状況を監視し、空きが出たらLINEへ自動通知するシステム。',
    tags: ['Python', 'Azure', 'Selenium', 'Automation'],
    category: ['AI・アプリ開発'],
    link: 'https://github.com/nekopath-dev/e-license-Automatic-Notification-System',
    featured: true,
    icon: 'directions_car',
    accentColor: 'var(--google-green)',
    details: {
      background: '自動車学校に通っていた際、長期休暇中で予約が難しく、キャンセル待ちを狙うしかありませんでした。\nそこで、Microsoft Azureの仮想マシン上でVisual Studio Codeを使い、Pythonのコードを継続的に実行することで、予約の空きを見つけ次第LINEに通知してくれるシステムを構築しました。',
      tools: ['Microsoft Azure (Virtual Machines)', 'Microsoft Visual Studio Code', 'Python', 'LINE Notify', 'selenium', 'chromedriver', 'requests', 'time'],
      flow: [
        'Chromeを立ち上げる',
        'ログインページを開く',
        '教習生IDとパスワードを入力する',
        'ログインして、予約ページが開く',
        'ページソースを読み込み、空きの文字列（"status1"）を見つけ出す',
        'あった場合は、LINE Notifyを経由してLINEに通知',
        'なかった場合は、ブラウザを閉じる（あった場合も通知後、ブラウザを閉じる）',
        'これを5分ごとに繰り返す'
      ],
      impressions: '正直、このシステムで予約が格段に楽になりました。\n早期卒業を目指していたため、送迎バスや技能予約の待ち時間に1分おきに確認していましたが、それは非常に手間がかかりました。\nLINEで通知が来るようになり、わざわざページを開いて確認する必要がなくなりました。\nただし、キャンセルが出て30分ほど空きが続くと、6回も通知が来てしまう欠点があり、一度検知したらタイムインターバルを設定すればよかったと反省しています。',
      future: '教習指導員にこのシステムについて説明すると、とても驚き、称賛されました。\n卒業後、システムの話が会社の上層部に伝わったようで、システム担当者から連絡がありオンラインミーティングを行いました。\nその際、「今後、仕事として何かお願いするかもしれません」と言われました。',
      images: ['/assets/projects/driving-school.png'],
      links: [
        { url: 'https://github.com/nekopath-dev/e-license-Automatic-Notification-System', title: 'GitHub Repository' }
      ]
    }
  },
  {
    id: 'irodori-wallpaper-app',
    numericId: 2,
    title: 'Irodori - AI Wallpaper App',
    shortTitle: 'Irodori (AI壁紙)',
    description: '法人登記前の「Fuwalief」という名義で、Claude Codeを活用して開発した生成AI壁紙アプリ。ユーザーの好みに合わせたアートワークを生成。現在クローズドベータテスト中。',
    tags: ['AI', 'App Development', 'Claude', 'Fuwalief'],
    category: ['AI・アプリ開発'],
    link: 'https://fuwalief.com/',
    featured: false,
    icon: 'palette',
    accentColor: 'var(--gemini-purple)',
    details: {
      background: '現在、法人登記前の「Fuwalief」という名義にて、生成AI壁紙アプリ「Irodori」を開発しています。\nClaude Codeを利用して開発を進め、現在はクローズドベータテストの段階です。',
      links: [
        { url: 'https://fuwalief.com/', title: 'Fuwalief ホームページ' }
      ]
    }
  },
  {
    id: 'hit-metaverse-voc',
    numericId: 1,
    title: 'HIT Metaverse - VIRTUAL OPEN CAMPUS',
    shortTitle: 'HIT Metaverse VOC',
    description: '大学公認のメタバースサークルを設立し、毎年600名以上を動員するバーチャルオープンキャンパスを主催。clusterを活用したステージ企画やキャンパスツアーを実施。',
    tags: ['Leadership', 'Event Planning', 'cluster', 'VR'],
    category: ['コミュニティ・組織'],
    link: 'https://monocuro.wixstudio.com/hit-metaverse',
    featured: true,
    icon: 'vrpano',
    accentColor: 'var(--google-yellow)',
    details: {
      eventInfo: '活動期間: 2022年04月 - 2025年03月',
      background: '【広島工業大学 VIRTUAL OPEN CAMPUS】\n広島工業大学の学内サークル「HIT Metaverse」の設立を行い、リーダーとして、40名ほどのメンバーと共にメタバース上でのオープンキャンパスを企画・運営しました。\n\n▼ 取り組んだこと\nメタバース（仮想）空間上に大学のキャンパスを再現し、遠方に住んでいてリアルなオープンキャンパスに来られない高校生や保護者の方に、大学の雰囲気を体感してもらえるイベントを企画しました。\nリアルのオープンキャンパスと日程を合わせて7月・8月の2回開催し、様々な企画を組み合わせてイベント内容を充実させることに注力しました。準備段階では「何をどうすれば良いのか」が全くわからない状態からスタートし、自分たちが高校生の時にどんな発見があればこの大学に行きたいと思えるか意見出しを行い、実現可能性ともすり合わせながら、課題を一つ一つ整理して進めました。',
      impressions: '▼ きっかけ・理由\n「せっかくなら、やってみよう」が全ての始まりでした。大学入学前、メタバース上で知り合った社会人の方から「せっかく大学生になるんだし、サークルを作ってみたら？」と声をかけてもらったのがきっかけです。\n\nサークルを立ち上げると決めてから、「遠くて大学に来られない人にも、このキャンパスの雰囲気を届けたい」というアイデアが浮かびました。私自身、広島に住んでいるわけではなかったので、遠方からわざわざ足を運ぶのが難しい高校生や保護者の方が多くいるのではないかと考えたためです。\n\n最終目標は、３つ設定しました。\n①来場者を300人以上にすること\n②VIRTUAL OPEN CAMPUSきっかけで入学した人を出すこと\n③大学公式で飾られた広報ではなく、学生が感じたままを伝えることで、少しでも高校生に安心感を与えること\n\nゼロの状態からのスタートでしたが、「自分たちにしかできないことをやっている」という感覚が行動を後押しし、仲間を巻き込みながら一歩ずつ形にしていきました。',
      future: '▼ 成果や得られた学び\n【チームで作り上げた、累計600名超の来場という結果】\n2日間のイベントで累計600名以上の来場者を迎え、大盛況となりました。大学側にもその成果が認められ、学生企画としてリアルのVR体験会の実施にもつながり、大学公認のサークルとなることができました。\n\nこの経験を通して、「他者を巻き込む力」と「自ら考えて動く行動力」を大きく養うことができました。また、この成功体験が自信となり、その後の全国大学メタバースサークル連盟（NUMA）の共同設立や、学生団体「Effector」の立ち上げなど、さらなる挑戦への原動力となりました。\n現在VIRTUAL OPEN CAMPUSは後輩に運営を引き継ぎ、私がいなくなっても毎年開催されています。',
      links: [
        { url: 'https://monocuro.wixstudio.com/hit-metaverse', title: 'HIT Metaverse ホームページ（記録用）' }
      ],
      relatedMediaIds: ['tv-metaverse', 'tv-kigyo']
    }
  },
  {
    id: 'nekokami',
    numericId: 3,
    title: '猫神様の言うとおり',
    shortTitle: '猫神様の言うとおり',
    description: '2025年8月にサポーターズ主催ハッカソンにて2名で開発した自己啓発型Androidアプリ。Google Playにてリリース済み。',
    tags: ['Android', 'Kotlin', 'Hackathon'],
    category: ['AI・アプリ開発'],
    link: 'https://github.com/momoice/nekokami',
    featured: false,
    icon: 'pets',
    accentColor: 'var(--google-red)',
    details: {
      eventInfo: 'サポーターズ｜【技育CAMP2024】ハッカソン Vol.12 制作作品',
      collaborators: 'momoice（ももあいす）',
      background: '共同制作経験が必要だと感じ、株式会社サポーターズが主催する「【技育CAMP2024】ハッカソン Vol.12」に参加しました。\nスマホを操作して１日が終わるような日を無くすため、猫神様が毎日課題を自動で与えてくれるアプリを作成しました。\n「ところで君、人生変える覚悟ある？まあ、選択肢なんて無いんだけどね♪」\n毎日猫神様から出される課題をこなすと、なんだか人生が好転していくかも？',
      impressions: '初めてAndroidアプリ＆共同制作を行い、とてもいい経験となりました。',
      images: ['/assets/projects/nekokami.png'],
      links: [
        { url: 'https://github.com/momoice/nekokami', title: 'GitHub Repository' },
        { url: 'https://docs.google.com/presentation/d/1qNaZEt9hDy2TX1t24dxWRoh6XAJCTA3CL-as3hb63Bg/preview?usp=sharing', title: '紹介スライド' },
        { url: 'https://www.notion.so/11642eb8fe3080c9b456d581f73a2a4f?pvs=21', title: 'クローズドベータテスト 参加方法' }
      ]
    }
  },
  {
    id: 'dx-monsterball',
    numericId: 5,
    title: 'DXモンスターボール',
    shortTitle: 'DXモンスターボール',
    description: '実際に投げてポケモンを捕まえることができるIoTデバイス。M5StickCと各種センサーを使用。',
    tags: ['Arduino', 'M5StickC', 'IoT', 'C++'],
    category: ['AI・アプリ開発'],
    link: 'https://github.com/nekopath-dev/dxmonsterball',
    featured: false,
    icon: 'sports_esports',
    accentColor: 'var(--google-red)',
    details: {
      eventInfo: 'スイッチサイエンス主催「M5Stack Japan Creativity Contest 2024」出品作品',
      background: '大学の「アプリケーションデザインB」という講義で、グループで自由に開発する最終課題がありました。\nグループ内で「どうせ作るのであれば、面白いものを作ろう」という話になり、投げたらポケモンを捕まえることができる「DXモンスターボール」を作ることになりました。',
      tools: ['Arduino IDE 2.3.3', 'M5StickC', 'M5StickC追加パーツ（スピーカー、モーター）', 'Poke API', 'LINE Notify', 'ArduinoJson', 'M5GFX', 'M5Unified', 'ServoESP32'],
      flow: [
        'M5StickCが入ったボールを投げる',
        'M5StickCが投げを検知する（加速度センサー）',
        '3回モーターが動き、ボールが振動する（ポケモンがボールに入った直後の揺れを再現）',
        '30%の確率で失敗し、「ブブー」と音がなる。同時にLINE Notifyで「逃げられてしまった…」と通知し、最初に戻る。',
        '60%で成功した場合は、M5StickCがWi-Fiを使ってPokeAPIにポケモンの名前をリクエスト。',
        'ポケモン名を取得できた場合は、LINE Notifyを使って「やった！〇〇（ポケモン名）を捕まえた！」と通知し、捕獲成功の音楽が鳴る。'
      ],
      impressions: '私はプログラム全般の開発を担当しました。途中で音楽とモーターを同時に動かす際に不具合が発生し解決に時間がかかりましたが、チームメンバーの協力のおかげで無事に完成させることができました。\n非常に面白いプロダクトを作り上げることができたと自負しており、友人たちも「伝説のポケモンが出るまでやる！」と熱中していました。',
      images: ['/assets/projects/dx-monsterball.png'],
      links: [
        { url: 'https://github.com/nekopath-dev/dxmonsterball', title: 'GitHub Repository' },
        { url: 'https://protopedia.net/prototype/5705', title: 'ProtoPedia' },
        { url: 'https://www.switch-science.com/pages/m5stack-japan-creativity-contest-2024', title: 'M5Stack Japan Creativity Contest 2024' }
      ]
    }
  },
  {
    id: 'student-number-recording',
    numericId: 6,
    title: '学生番号記録システム',
    shortTitle: '学生番号記録システム',
    description: 'NFCリーダーを用いて学生証から学生番号を読み取り、自動でExcelに記録する業務効率化システム。',
    tags: ['Python', 'NFC', 'Excel Automation'],
    category: ['AI・アプリ開発'],
    link: 'https://github.com/nekopath-dev/Student-Number-Recording-System',
    featured: false,
    icon: 'badge',
    accentColor: 'var(--google-blue)',
    details: {
      background: '大学で「ICTサポートセンター」のアルバイトをしています。\n個人用ブースの利用時に学生番号を手書きで記録する必要があり、この作業を自動化できないかと考え、学生証から学生番号を読み取り自動的に記録するシステムを構想しました。',
      tools: ['Microsoft Visual Studio Code', 'Python', 'NFCリーダー', 're', 'pygame', 'time', 'openpyxl', 'datetime'],
      flow: [
        '使用するPCにNFC通信リーダーを接続する',
        '学生証をかざす',
        '猫の鳴き声とともに、学生番号が指定されたExcelに出力される（Excel出力時は一番上から行を追加し、指定されたセルに書き込む）'
      ],
      links: [
        { url: 'https://github.com/nekopath-dev/Student-Number-Recording-System', title: 'GitHub Repository' }
      ],
      relatedMediaIds: ['reel-parttime', 'vlog-day']
    }
  },
  {
    id: 'mvsia',
    numericId: 7,
    title: 'MVSIA - 広報・デザイン',
    shortTitle: 'MVSIA 広報デザイン',
    description: 'メタバースの音楽ライブを盛り上げる団体の広報担当として、ポスター作成や広報デザインを担当。',
    tags: ['Design', 'PR', 'Metaverse'],
    category: ['コミュニティ・組織'],
    link: '#',
    featured: false,
    icon: 'music_note',
    accentColor: 'var(--gemini-pink)',
    details: {
      background: 'メタバース空間におけるバーチャル音楽ライブイベントを企画・推進する有志団体「MVSIA」において、イベントの魅力と臨場感を届けるためのキービジュアルや広報ポスター、SNS宣伝バナーのデザインを担当しました。',
      links: []
    }
  },
  {
    id: 'hit-effector',
    numericId: 9,
    title: 'HIT Effector - 大学公式学生団体の設立・代表',
    shortTitle: 'HIT Effector 設立・代表',
    description: '大学の新共創施設「nexus for.」誕生を機に設立した学生団体。ドローン動画制作やメディア発表会での登壇、学内イベント主催を行い、大学公認の公式学生団体へと成長・継承。',
    tags: ['Leadership', 'Community', 'PR / SNS', 'University Official', 'Drone Video'],
    category: ['コミュニティ・組織'],
    link: 'https://www.instagram.com/hit.effector/',
    featured: false,
    icon: 'campaign',
    accentColor: 'var(--google-blue)',
    details: {
      eventInfo: '活動期間: 2024年03月 - （設立後、後輩へ継承）',
      background: '2024年3月、広島工業大学に地域・企業との新たな共創空間「nexus for.（ネクサスフォー）」が誕生しました。\n「新設される魅力的な施設をただ眺めるのではなく、自分たちの手でフル活用し、大学をもっと盛り上げたい」「失敗を恐れず、何かに挑戦する学生をもっと増やしたい」という想いから、有志の仲間とともに設立。団体名は大学名（HIT）に「私たちが大学にエフェクト（変化・刺激）をかける」という決意を込めて名付けました。',
      flow: [
        '「nexus for.」メディアお披露目会に向け、ドローンを活用した施設紹介動画を空撮・編集し大型スクリーンで上映',
        '報道機関（テレビ局各社）のカメラの前に立ち、学生代表として新施設への期待と想いをスピーチ（広テレ！NEWS NNN等で報道）',
        '大学側の全面協力を得て、学生同士の交流や挑戦のきっかけとなる学内イベントを企画・開催',
        '公式Instagram（@hit.effector）を開設し、学生目線でのリール動画や学内情報発信基盤を構築'
      ],
      impressions: '【有志団体から大学公式の学生団体へ】\n学生有志からスタートした活動でしたが、その熱量と実績が大学に評価され、「大学公認の公式学生団体」へと昇格しました。\n現在も大学職員のサポートを受けながら後輩たちが運営を引き継ぎ、高頻度なSNS発信や新入生向けイベントの開催など、組織として自走し続けています。',
      future: '「自分が立ち上げた組織が、自分がいなくなっても大学の文化として定着し、発展していく」という貴重な組織マネジメントの成功体験となりました。',
      links: [
        { url: 'https://www.instagram.com/hit.effector/', title: 'HIT Effector 公式Instagram' },
        { url: 'https://www.instagram.com/p/DDb_BxMPhRB/', title: '初の大規模イベント投稿（Instagram）' },
        { url: 'https://news.ntv.co.jp/n/htv/category/society/ht3adb3119f41a47f693bcef3ac7388d3b', title: 'nexus for. メディアお披露目会報道（広テレ！NEWS NNN）' }
      ]
    }
  },
  {
    id: 'numa-alliance',
    numericId: 10,
    title: '全国大学メタバースサークル連盟（現：NUMA）- 共同設立',
    shortTitle: '全日本大学メタバース連盟',
    description: '全国の大学メタバースサークルを繋ぎ支援するため、北海道大学メタバース研究会と共に共同設立。全国約30名のネットワークを築き、現在は「NUMA」として約20団体が加盟。',
    tags: ['Co-founder', 'Metaverse', 'Alliance', 'Community', 'VR'],
    category: ['コミュニティ・組織'],
    link: 'https://numa-meta.com/',
    featured: false,
    icon: 'hub',
    accentColor: 'var(--google-green)',
    details: {
      eventInfo: '活動期間: 2023年 - （設立後、次世代へ継承）',
      collaborators: '瑠奈（北海道大学メタバース研究会 設立代表）',
      background: '当時、「メタバース」という言葉はバズワードとして広まりつつあったものの、各大学にメタバースを主目的に活動する公認サークルはほとんど存在しない状況でした。\n自大学で「HIT Metaverse」をゼロから立ち上げた経験から、「他大学でサークルを作りたいがノウハウがない学生を支援したい」「大学の垣根を越えて情報交換し、全国規模の仲間を集めたい」という課題意識を抱き、全国規模の連合組織の設立を決意しました。',
      flow: [
        '北海道大学メタバース研究会の設立者・リーダーである瑠奈氏と意気投合し、全国組織の構想を策定',
        '「全国大学メタバースサークル連盟」を共同設立し、Discordやオンライン交流会を中心としたコミュニティ基盤を整備',
        '全国約10大学・約30名の学生・サークルを巻き込み、ノウハウ共有や大学間での合同イベント企画を推進',
        '組織の立ち上げ基盤を確立した後、意欲溢れる後輩リーダーたちへバトンを引き継ぎ'
      ],
      impressions: '【大学の枠を越えた全国ネットワークの構築】\n異なる大学の学生リーダーと協働し、何もないゼロの状態から全国規模のコミュニティを立ち上げる推進力を培うことができました。',
      future: '【全日本大学メタバース連盟（NUMA）への発展】\n現在は名称を「全日本大学メタバース連盟（NUMA）」へと発展させ、全国から約20団体が加盟。\nコミックマーケットへの出展や企業とのタイアップ・交流など、学生メタバースシーンを牽引する組織として現在も力強く活動が継続されています。',
      links: [
        { url: 'https://numa-meta.com/', title: '全日本大学メタバース連盟（NUMA）公式HP' }
      ]
    }
  }
];
