import { Clock, MapPin, MessageCircle, Instagram, Smile, AlertCircle, Map } from 'lucide-react'
import styles from './Schedule.module.css'

export default function Schedule() {
  return (
    <section id="horario" className={`section ${styles.schedule}`}>
      <div className="section-inner">
        <h2 className="section-title">Horário & Localização</h2>
        <p className="section-subtitle">
          Venha nos visitar! Estamos esperando você com um sorriso <Smile size={20} color="var(--teal)" style={{ display: 'inline', verticalAlign: 'top', marginLeft: '4px' }} />
        </p>

        <div className={styles.grid}>
          {/* Schedule Card */}
          <div className={`glass-card ${styles.card}`}>
            <div className={styles.cardIcon}>
              <Clock size={40} color="var(--teal)" strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Horário de Funcionamento</h3>
            <div className={styles.scheduleList}>
              <div className={styles.scheduleRow}>
                <span className={styles.day}>Seg. a Sex.</span>
                <span className={styles.time}>11:00 às 19:00</span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.day}>Sábado</span>
                <span className={styles.time}>09:00 às 15:00</span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.day}>Domingo</span>
                <span className={styles.time}>09:00 às 13:00</span>
              </div>
            </div>
            <p className={styles.note}>
              <AlertCircle size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} /> 
              Horários podem variar em feriados. 
              Consulte nossas redes sociais!
            </p>
          </div>

          {/* Location Card */}
          <div className={`glass-card ${styles.card}`}>
            <div className={styles.cardIcon}>
              <MapPin size={40} color="var(--pink-dark)" strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Onde Estamos</h3>
            <div className={styles.locationInfo}>
              <div className={styles.addressRow}>
                <MapPin size={24} color="var(--teal)" className={styles.addressIcon} />
                <div>
                  <p className={styles.addressText}>
                    R. dos Cravos, 90
                  </p>
                  <p className={styles.addressSub}>
                    Feu Rosa — Serra - ES
                  </p>
                  <p className={styles.addressRef}>
                    CEP: 29172-105
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Cravos+90+Feu+Rosa+Serra+ES"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Map size={20} /> Ver no Google Maps
            </a>
          </div>

          {/* Contact Card */}
          <div className={`glass-card ${styles.card}`}>
            <div className={styles.cardIcon}>
              <MessageCircle size={40} color="var(--teal)" strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Fale Conosco</h3>
            <div className={styles.contactList}>
              <a
                href="https://wa.me/5527995031064"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactRow}
              >
                <MessageCircle size={24} color="var(--teal)" className={styles.contactIcon} />
                <div>
                  <p className={styles.contactLabel}>WhatsApp</p>
                  <p className={styles.contactValue}>(27) 99503-1064</p>
                </div>
              </a>
              <a
                href="https://instagram.com/afetto.vita"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactRow}
              >
                <Instagram size={24} color="var(--pink-dark)" className={styles.contactIcon} />
                <div>
                  <p className={styles.contactLabel}>Instagram</p>
                  <p className={styles.contactValue}>@afetto.vita</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
