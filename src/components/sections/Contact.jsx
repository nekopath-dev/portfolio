import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.target);

        // --- Web3Forms Access Key ---
        // TODO: Replace with your actual Access Key below!
        formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                e.target.reset(); // Clear the form
            } else {
                console.error("Error from Web3Forms:", data);
                setStatus('error');
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact-form-section" className="section contact-section">
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                    <div className="section-title-wrapper" style={{ justifyContent: 'center' }}>
                        <span className="material-symbols-outlined section-icon notranslate" translate="no" style={{ color: 'var(--md-sys-color-primary)' }}>mail</span>
                        <h2 className="section-title">Get in Touch</h2>
                    </div>
                    <p className="section-subtitle" style={{ maxWidth: '100%', marginTop: '16px' }}>
                        プロジェクトのご相談、技術的な質問、または単なるご挨拶など、いつでもお気軽にご連絡ください。<br />
                        以下のフォームから直接メッセージをお送りいただけます。
                    </p>
                </motion.div>

                <motion.div
                    className="contact-card-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="contact-card">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name / お名前</label>
                                <div className="input-wrapper">
                                    <span className="material-symbols-outlined input-icon notranslate" translate="no">person</span>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="例: 田中 太郎"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email / メールアドレス</label>
                                <div className="input-wrapper">
                                    <span className="material-symbols-outlined input-icon notranslate" translate="no">alternate_email</span>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="例: your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message / メッセージ内容</label>
                                <div className="input-wrapper align-top">
                                    <span className="material-symbols-outlined input-icon notranslate" translate="no">chat_bubble</span>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        className="form-input"
                                        placeholder="お問い合わせ内容をご自由にご記入ください。"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* Honeypot Spam Protection (Optional for Web3Forms) */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div className="form-actions" style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <motion.button
                                    className={`submit-btn ${status}`}
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    whileHover={{ scale: (status === '' || status === 'error') ? 1.02 : 1 }}
                                    whileTap={{ scale: (status === '' || status === 'error') ? 0.98 : 1 }}
                                >
                                    {(status === '' || status === 'error') && (
                                        <>
                                            <span className="material-symbols-outlined notranslate" translate="no">{status === 'error' ? 'refresh' : 'send'}</span>
                                            <span>{status === 'error' ? '再試行する' : 'メッセージを送信'}</span>
                                        </>
                                    )}
                                    {status === 'loading' && (
                                        <>
                                            <span className="material-symbols-outlined spin notranslate" translate="no">progress_activity</span>
                                            <span>送信中...</span>
                                        </>
                                    )}
                                    {status === 'success' && (
                                        <>
                                            <span className="material-symbols-outlined notranslate" translate="no">check_circle</span>
                                            <span>送信完了！</span>
                                        </>
                                    )}
                                </motion.button>

                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="form-status-message success-message"
                                    >
                                        <p>お問い合わせを正常に受け付けました！<br />2〜3日以内に折り返しご連絡いたします。</p>
                                    </motion.div>
                                )}

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="form-status-message error-message"
                                    >
                                        <p>送信に失敗しました。<br />ネットワークを確認するか、別の方法でご連絡ください。</p>
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
