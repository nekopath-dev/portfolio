import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import Card from '../ui/Card';
import Chip from '../ui/Chip';
import ProjectModal from '../ui/ProjectModal';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const categories = ['All', 'AI・自動化', 'アプリ・開発', 'コミュニティ・組織'];

    const projects = [
        {
            id: 8,
            title: 'Google AI学生アンバサダー MVP受賞',
            description: 'Google AI学生アンバサダーとして活動中、2025年9月に行われたSNS投稿部門（Weekly Challenge）においてMVPを受賞。',
            tags: ['Google AI', 'Award', 'Claude', 'Gemini'],
            category: ['AI・自動化'],
            link: 'https://note.com/tanasuke_ai/n/n22c0ff9d68f7',
            featured: true,
            details: {
                eventInfo: 'Google AI学生アンバサダー Weekly Challenge (2025年9月)',
                background: 'Geminiを筆頭とする「Google AI学生アンバサダー」に選出され、2025年に活動を行っておりました。\n活動の中で、毎週決まったテーマに関することをAIとともに行動するといった活動があり、9月に行われたSNS投稿部門において、MVPを受賞しました。\n\n内容は、「【実験】AIに「好きにしていいよ」とPCを渡したら何が起こる？―ClaudeとGeminiの自由研究ー」というものであり、普段AIに指示している私たちが何も指示しなかったら何をするのだろうか？という実験です。',
                links: [
                    { url: 'https://note.com/tanasuke_ai/n/n22c0ff9d68f7', title: '受賞対象のNote記事（実験内容）' }
                ]
            }
        },
        {
            id: 4,
            title: '自動車学校 予約空き自動通知システム',
            description: '自動車学校の技能講習の予約空き状況を監視し、空きが出たらLINEへ自動通知するシステム。',
            tags: ['Python', 'Azure', 'Selenium', 'Automation'],
            category: ['AI・自動化', 'アプリ・開発'],
            link: 'https://github.com/nekopath-dev/e-license-Automatic-Notification-System',
            featured: true,
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
            id: 2,
            title: 'Irodori - AI Wallpaper App',
            description: '法人登記前の「Fuwalief」という名義で、Claude Codeを活用して開発した生成AI壁紙アプリ。ユーザーの好みに合わせたアートワークを生成。現在クローズドベータテスト中。',
            tags: ['AI', 'App Development', 'Claude', 'Fuwalief'],
            category: ['AI・自動化', 'アプリ・開発'],
            link: 'https://fuwalief.com/',
            featured: false,
            details: {
                background: '現在、法人登記前の「Fuwalief」という名義にて、生成AI壁紙アプリ「Irodori」を開発しています。\nClaude Codeを利用して開発を進め、現在はクローズドベータテストの段階です。',
                links: [
                    { url: 'https://fuwalief.com/', title: 'Fuwalief ホームページ' }
                ]
            }
        },
        {
            id: 1,
            title: 'HIT Metaverse - VIRTUAL OPEN CAMPUS',
            description: '大学公認のメタバースサークルを設立し、毎年600名以上を動員するバーチャルオープンキャンパスを主催。clusterを活用したステージ企画やキャンパスツアーを実施。',
            tags: ['Leadership', 'Event Planning', 'cluster', 'VR'],
            category: ['コミュニティ・組織'],
            link: 'https://monocuro.wixstudio.com/hit-metaverse',
            featured: true,
            details: {
                eventInfo: '活動期間: 2022年04月 - 2025年03月',
                background: '【広島工業大学 VIRTUAL OPEN CAMPUS】\n広島工業大学の学内サークル「HIT Metaverse」の設立を行い、リーダーとして、40名ほどのメンバーと共にメタバース上でのオープンキャンパスを企画・運営しました。\n\n▼ 取り組んだこと\nメタバース（仮想）空間上に大学のキャンパスを再現し、遠方に住んでいてリアルなオープンキャンパスに来られない高校生や保護者の方に、大学の雰囲気を体感してもらえるイベントを企画しました。\nリアルのオープンキャンパスと日程を合わせて7月・8月の2回開催し、様々な企画を組み合わせてイベント内容を充実させることに注力しました。準備段階では「何をどうすれば良いのか」が全くわからない状態からスタートし、自分たちが高校生の時にどんな発見があればこの大学に行きたいと思えるか意見出しを行い、実現可能性ともすり合わせながら、課題を一つ一つ整理して進めました。',
                impressions: '▼ きっかけ・理由\n「せっかくなら、やってみよう」が全ての始まりでした。大学入学前、メタバース上で知り合った社会人の方から「せっかく大学生になるんだし、サークルを作ってみたら？」と声をかけてもらったのがきっかけです。\n\nサークルを立ち上げると決めてから、「遠くて大学に来られない人にも、このキャンパスの雰囲気を届けたい」というアイデアが浮かびました。私自身、広島に住んでいるわけではなかったので、遠方からわざわざ足を運ぶのが難しい高校生や保護者の方が多くいるのではないかと考えたためです。\n\n最終目標は、３つ設定しました。\n①来場者を300人以上にすること\n②VIRTUAL OPEN CAMPUSきっかけで入学した人を出すこと\n③大学公式で飾られた広報ではなく、学生が感じたままを伝えることで、少しでも高校生に安心感を与えること\n\nゼロの状態からのスタートでしたが、「自分たちにしかできないことをやっている」という感覚が行動を後押しし、仲間を巻き込みながら一歩ずつ形にしていきました。',
                future: '▼ 成果や得られた学び\n【チームで作り上げた、累計600名超の来場という結果】\n2日間のイベントで累計600名以上の来場者を迎え、大盛況となりました。大学側にもその成果が認められ、学生企画としてリアルのVR体験会の実施にもつながり、大学公認のサークルとなることができました。\n\nこの経験を通して、「他者を巻き込む力」と「自ら考えて動く行動力」を大きく養うことができました。また、この成功体験が自信となり、その後の全国大学メタバースサークル連盟（NUMA）の共同設立や、学生団体「Effector」の立ち上げなど、さらなる挑戦への原動力となりました。\n現在VIRTUAL OPEN CAMPUSは後輩に運営を引き継ぎ、私がいなくなっても毎年開催されています。',
                links: [
                    { url: 'https://monocuro.wixstudio.com/hit-metaverse', title: 'HIT Metaverse ホームページ（記録用）' }
                ]
            }
        },
        {
            id: 3,
            title: '猫神様の言うとおり',
            description: '2025年8月にサポーターズ主催ハッカソンにて2名で開発した自己啓発型Androidアプリ。Google Playにてリリース済み。',
            tags: ['Android', 'Kotlin', 'Hackathon'],
            category: ['アプリ・開発'],
            link: 'https://github.com/momoice/nekokami',
            featured: false,
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
            id: 5,
            title: 'DXモンスターボール',
            description: '実際に投げてポケモンを捕まえることができるIoTデバイス。M5StickCと各種センサーを使用。',
            tags: ['Arduino', 'M5StickC', 'IoT', 'C++'],
            category: ['アプリ・開発'],
            link: 'https://github.com/nekopath-dev/dxmonsterball',
            featured: false,
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
            id: 6,
            title: '学生番号記録システム',
            description: 'NFCリーダーを用いて学生証から学生番号を読み取り、自動でExcelに記録する業務効率化システム。',
            tags: ['Python', 'NFC', 'Excel Automation'],
            category: ['AI・自動化', 'アプリ・開発'],
            link: 'https://github.com/nekopath-dev/Student-Number-Recording-System',
            featured: false,
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
                ]
            }
        },
        {
            id: 7,
            title: 'MVSIA',
            description: 'メタバースの音楽ライブを盛り上げる団体の広報担当として、ポスター作成や広報デザインを担当。',
            tags: ['Design', 'PR', 'Metaverse'],
            category: ['コミュニティ・組織'],
            link: '#',
            featured: false,
        }
    ];

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category.includes(activeCategory));

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Projects & Works</h2>

                    <div className="projects-filter">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="projects-grid">
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.id}
                                    className={project.featured ? 'project-card-wrapper featured' : 'project-card-wrapper'}
                                >
                                    <Card 
                                        className="project-card" 
                                        hoverable={true} 
                                        onClick={() => openModal(project)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="project-image-container">
                                            {project.details?.images ? (
                                                <img src={project.details.images[0]} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <span className="material-symbols-outlined notranslate" translate="no">image</span>
                                            )}
                                        </div>
                                        <div className="project-content">
                                            <div className="project-header">
                                                <h3 className="project-title">{project.title}</h3>
                                                <div className="project-links">
                                                    {project.link !== '#' && (
                                                        <a href={project.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                                            <span className="material-symbols-outlined notranslate" translate="no">arrow_outward</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="project-description">{project.description}</p>

                                            <div className="project-tags">
                                                {project.tags.map(tag => (
                                                    <Chip key={tag} label={tag} className="project-tag" />
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>

            <ProjectModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                project={selectedProject} 
            />
        </section>
    );
};

export default Projects;
