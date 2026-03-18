import Image from 'next/image'
import { Coffee, Heart, BookOpen, MessageCircle } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Background decorative elements */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />

      {/* Sparkles */}
      <div className={`${styles.sparkle} ${styles.s1}`} />
      <div className={`${styles.sparkle} ${styles.s2}`} />
      <div className={`${styles.sparkle} ${styles.s3}`} />
      <div className={`${styles.sparkle} ${styles.s4}`} />
      <div className={`${styles.sparkle} ${styles.s5}`} />
      <div className={`${styles.sparkle} ${styles.s6}`} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.badge} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Coffee size={16} /> Sorveteria & Cafeteria
          </div>
          <h1 className={styles.title}>
            <span className={styles.brand}>Afetto</span>
          </h1>
          <p className={styles.tagline}>O doce encontro do dia</p>
          <p className={styles.description}>
            Sorvetes artesanais, cafés especiais, salgados quentinhos 
            e doces irresistíveis. Tudo feito com muito carinho para 
            adoçar o seu dia! <Heart size={18} fill="var(--pink)" color="var(--pink)" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
          </p>
          <div className={styles.actions}>
            <a href="#cardapio" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={20} /> Ver Cardápio
            </a>
            <a
              href="https://wa.me/5527995031064"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <MessageCircle size={20} /> Fale Conosco
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageGlow} />
          <Image
            src="/images/hero-icecream.png"
            alt="Sorvetes artesanais da Afetto"
            width={520}
            height={520}
            priority
            className={styles.heroImage}
          />
        </div>
      </div>

      {/* Bottom wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60C240 0 480 120 720 60C960 0 1200 120 1440 60V120H0V60Z" fill="var(--off-white)" />
        </svg>
      </div>
    </section>
  )
}
