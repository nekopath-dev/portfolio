import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiCircle } from 'react-icons/fi';
import './Timeline.css';

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const history = [
        {
            date: '2022年 4月',
            title: '広島工業大学 入学',
            description: '情報学部 情報コミュニケーション学科に所属。'
        },
        {
            date: '2022年 夏',
            title: 'メタバースサークル「HIT Metaverse」設立',
            description: '全国初（自称）のメタバース・ソーシャルVRを舞台としたサークルを設立し、初代リーダーに就任。約30名から約50名規模へ拡大。'
        },
        {
            date: '2022年 6月 〜 2026年 3月',
            title: '広島工業大学 ICTサポートセンター（学内アルバイト）',
            description: 'PC・ネットワークのトラブル対応を担当。紙マニュアルのデジタル化を起案し、Notion導入プロジェクトを主導。'
        },
        {
            date: '毎年 7・8月',
            title: 'VIRTUAL OPEN CAMPUS 主催',
            description: 'clusterを活用。リアルVR体験会やメタバースツアー等を企画し、初年度は600名以上を動員。後輩へ継承し、2025年も約400名が参加。'
        },
        {
            date: '2023年',
            title: '「全国大学メタバースサークル連盟（現：NUMA）」共同設立',
            description: '北大メタバース研究会と共に立ち上げ、約10大学規模の連合組織へ。現在はNUMAとして約20団体が加盟。'
        },
        {
            date: '2024年 3月',
            title: '学生団体「HIT Effector」設立・代表',
            description: '新施設「nexus for.」誕生を機に発足。ドローン動画制作やメディア発表会登壇を経て、大学公式団体へと昇格。'
        },
        {
            date: '2024年 7月',
            title: 'IoTデバイス「DXモンスターボール」制作',
            description: '3名チームでプログラム全般を担当。講義「アプリケーションデザインB」で作品最優秀賞を受賞。'
        },
        {
            date: '2024年 8月',
            title: '株式会社MOTEX セキュリティインターン',
            description: 'SOCの運用監視業務を体験。アラートを時系列でつなげて調査し、インシデント報告書にまとめた。'
        },
        {
            date: '2024年 11月',
            title: '自己啓発型Androidアプリ「猫神様の言うとおり」リリース',
            description: '技育CAMP2024 ハッカソン Vol.12に2名で参加し開発。Google Playにて公開し、累計DL約30件。'
        },
        {
            date: '2025年 9月 〜 2026年 3月',
            title: 'Google AI Student Ambassador (Lead)',
            description: 'リードアンバサダーに就任し、「Weekly Challenge MVP」を獲得。'
        },
        {
            date: '2026年 1月 〜',
            title: '生成AI壁紙アプリ「Irodori」開発',
            description: '法人登記準備中の「Fuwalief」名義にて、Flutter / Dart と Claude Code で個人開発。クローズドベータテストまで実施。'
        },
        {
            date: '2026年 4月 〜 現在',
            title: '法政大学大学院 入学 / Google AIコミュニティアンバサダー',
            description: '情報科学研究科に進学し、馬研究室で生体センサを用いた集中度推定を研究。Google AIコミュニティアンバサダーとしても活動中。'
        },
        {
            date: '2026年 8月 〜 現在',
            title: '株式会社MetaMoJi 長期インターン',
            description: '開発系の長期インターンとしてフルリモートで参加。'
        },
        {
            date: '2026年 9月 〜 現在',
            title: '株式会社BaseMe 長期インターン（PdM）',
            description: '学生向けAIキャリアパートナー「Ken」の改善を担当。データ分析・企画から実装・効果検証までを一貫して進める。'
        }
    ];

    return (
        <div className="timeline-container" ref={containerRef}>
            <div className="timeline-line-bg" />
            <motion.div
                className="timeline-line-filled"
                style={{ scaleY }}
            />

            {history.map((item, index) => (
                <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                    <motion.div
                        className="timeline-dot active"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <FiCircle size={10} />
                    </motion.div>
                    <div className="timeline-content">
                        <span className="timeline-date">{item.date}</span>
                        <h4 className="timeline-title">{item.title}</h4>
                        <p className="timeline-description">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
