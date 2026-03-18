import { Heart, Instagram, MapPin, Phone } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.topWave}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="var(--teal-dark)" />
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <img src="/images/logo-round.webp" alt="Afetto Sorveteria" className={styles.brandLogo} width="80" height="80" />
            <h3 className={styles.brandName}>Afetto</h3>
            <p className={styles.brandTagline}>Sorveteria & Cafeteria</p>
            <p className={styles.brandSlogan}>O doce encontro do dia <Heart size={16} fill="var(--pink)" color="var(--pink)" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} /></p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Navegação</h4>
            <a href="#inicio" className={styles.link}>Início</a>
            <a href="#sobre" className={styles.link}>Sobre</a>
            <a href="#cardapio" className={styles.link}>Cardápio</a>
            <a href="#horario" className={styles.link}>Horário</a>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.linksTitle}>Contato</h4>
            <a
              href="https://wa.me/5527995031064"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Phone size={16} /> (27) 99503-1064
            </a>
            <a
              href="https://instagram.com/afetto.vita"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Instagram size={16} /> @afetto.vita
            </a>
            <p className={styles.address} style={{ display: 'flex', gap: '8px' }}>
              <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                R. dos Cravos, 90<br />
                Feu Rosa — Serra - ES<br />
                CEP: 29172-105
              </span>
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Afetto Sorveteria & Cafeteria. 
            Todos os direitos reservados.
          </p>
          <p className={styles.madeWith}>
            Feito com <Heart size={14} fill="var(--pink-dark)" color="var(--pink-dark)" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 4px' }} /> e muito sorvete
          </p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5527995031064?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Afetto"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  )
}
