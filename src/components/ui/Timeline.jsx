import React from 'react';
import { motion } from 'framer-motion';
import { FiCircle } from 'react-icons/fi';
import './Timeline.css';

const Timeline = () => {
    const history = [
        {
            date: '2024年 4月', // 仮入力、大学入学年
            title: '広島工業大学 入学',
            description: '情報学部 情報コミュニケーション学科に所属。'
        },
        {
            date: '2024年 4月', // 仮入力
            title: 'VRソーシャルサークル「HIT Metaverse」設立',
            description: '全国初（自称）のメタバース・ソーシャルVRを舞台としたサークルを設立。現在40名ほどが在籍。'
        },
        {
            date: '毎年 7・8月',
            title: 'VIRTUAL OPEN CAMPUS 主催',
            description: 'clusterを活用。リアルでのVR体験会や、メタバース内でのパフォーマンスステージ、キャンパスツアー等を企画し、毎年600名程度を動員。'
        },
        {
            date: '2025年 8月',
            title: '自己啓発型Androidアプリ「猫神様の言うとおり」リリース',
            description: 'サポーターズ主催のハッカソンに2名で参加し開発。Google Playにて公開。'
        },
        {
            date: '〜 2025年 12月',
            title: 'Google AI Student Ambassador (Lead)',
            description: '広島工業大学のリードアンバサダーに就任し、「Weekly Challenge MVP」を獲得。'
        },
        {
            date: '現在',
            title: '生成AI壁紙アプリ「Irodori」開発中',
            description: 'Claude Codeを利用して開発。現在はクローズドベータテスト中。'
        },
        {
            date: '2026年 4月 (予定)',
            title: '法政大学大学院 進学',
            description: '情報科学研究科へ進学予定。'
        }
    ];

    return (
        <div className="timeline-container">
            {history.map((item, index) => (
                <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="timeline-dot">
                        <FiCircle />
                    </div>
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
