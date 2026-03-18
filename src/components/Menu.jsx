import Image from 'next/image'
import { Heart, Sparkles, MessageCircle } from 'lucide-react'
import styles from './Menu.module.css'

const CATEGORIES = [
  {
    id: 'sorvetes',
    emoji: '🍨',
    title: 'Sorvetes',
    description: 'Sabores artesanais cremosos e irresistíveis. Do clássico ao surpreendente!',
    image: '/images/sorvetes.png',
    items: ['Morango', 'Chocolate', 'Ninho', 'Pistache', 'Manga', 'Açaí', 'Coco', 'Flocos'],
    color: 'var(--pink)',
  },
  {
    id: 'cafes',
    emoji: '☕',
    title: 'Cafés & Cappuccinos',
    description: 'Cafés quentinhos e cappuccinos cremosos para aquecer seu dia.',
    image: '/images/cafe.png',
    items: ['Cappuccino Tradicional', 'Chocolate Quente', 'Café Espresso', 'Cappuccino Light'],
    color: '#8B6F47',
  },
  {
    id: 'donuts',
    emoji: '🍩',
    title: 'Donuts',
    description: 'Donuts fresquinhos todo dia! Massa fofinha, opções clássicas e gourmets.',
    image: '/images/donuts.png',
    items: ['Tradicional com Açúcar', 'Cobertura Rosa', 'Red Velvet', 'Ninho com Morango'],
    color: '#E5AAC0',
  },
  {
    id: 'salgados',
    emoji: '🥟',
    title: 'Salgados',
    description: 'Salgados crocantes e quentinhos, fresquinhos do forno pra você!',
    image: '/images/salgados.png',
    items: ['Coxinha', 'Empada', 'Pão de Queijo', 'Coxinha Fitness', 'Kibe', 'Salgado Assado'],
    color: '#D4A574',
  },
  {
    id: 'doces',
    emoji: '🧁',
    title: 'Doces',
    description: 'Docinhos artesanais que derretem na boca. Feitos com muito amor!',
    image: '/images/doces.png',
    items: ['Brigadeiro', 'Beijinho', 'Ninho com Nutella', 'Brownie', 'Bolo no Pote'],
    color: 'var(--pink-dark)',
  },
  {
    id: 'refeicoes',
    emoji: '🍽️',
    title: 'Mini Refeições',
    description: 'Refeições práticas e saborosas para o almoço. Caseiro de verdade!',
    image: '/images/refeicoes.png',
    items: ['Lasanha de Frango', 'Escondidinho', 'Lasanha de Carne', 'Macarrão'],
    color: 'var(--teal)',
  },
]

export default function Menu() {
  return (
    <section id="cardapio" className={`section ${styles.menu}`}>
      <div className={styles.bgDecor} />
      <div className="section-inner">
        <h2 className="section-title">Nosso Cardápio</h2>
        <p className="section-subtitle">
          Descubra tudo que preparamos com carinho para você <Heart size={20} fill="#D4A574" color="#D4A574" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
        </p>

        <div className={styles.grid}>
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              className={styles.card}
              style={{ '--accent': cat.color, animationDelay: `${index * 0.12}s` }}
            >
              <div className={styles.cardImageWrapper}>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={400}
                  height={280}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardEmoji}>{cat.emoji}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <p className={styles.cardDesc}>{cat.description}</p>
                <div className={styles.itemsList}>
                  {cat.items.map((item) => (
                    <span key={item} className={styles.item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Quer saber mais sobre nossos preços e promoções? <Sparkles size={20} color="var(--teal)" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
          </p>
          <a
            href="https://wa.me/5527995031064?text=Ol%C3%A1!%20Gostaria%20de%20ver%20o%20card%C3%A1pio%20completo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <MessageCircle size={20} /> Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
