import { Heart, Award, Sparkles } from 'lucide-react'
import styles from './About.module.css'

const VALUES = [
  {
    icon: Heart,
    title: 'Carinho',
    description: 'Cada receita é preparada com amor e dedicação, como se fosse para a nossa família.',
    color: 'var(--pink-dark)',
  },
  {
    icon: Award,
    title: 'Qualidade',
    description: 'Ingredientes selecionados e frescos para garantir o melhor sabor em cada mordida.',
    color: 'var(--teal)',
  },
  {
    icon: Sparkles,
    title: 'Sabor',
    description: 'Variedade de sabores irresistíveis que vão fazer você voltar sempre por mais!',
    color: '#D4A574',
  },
]

export default function About() {
  return (
    <section id="sobre" className={`section ${styles.about}`}>
      <div className="section-inner">
        <h2 className="section-title">Sobre a Afetto</h2>
        <p className="section-subtitle">
          Mais do que uma sorveteria, somos o lugar onde cada sabor 
          é feito com afeto de verdade 💕
        </p>

        <div className={styles.content}>
          <div className={styles.story}>
            <div className={styles.storyCard}>
              <h3 className={styles.storyTitle}>Nossa História</h3>
              <p className={styles.storyText}>
                A <strong>Afetto Sorveteria & Cafeteria</strong> nasceu do sonho de 
                criar um espaço acolhedor onde as pessoas pudessem encontrar 
                muito mais do que sorvetes deliciosos — um lugar para criar 
                memórias doces.
              </p>
              <p className={styles.storyText}>
                Localizada no coração de Feu Rosa, Serra - ES, nossa loja 
                colorida e cheia de vida é o ponto de encontro perfeito para 
                quem busca sorvetes artesanais, cafés quentinhos, salgados 
                crocantes e docinhos irresistíveis.
              </p>
              <p className={styles.storyText}>
                Cada produto é preparado com ingredientes de qualidade e 
                muito carinho, porque acreditamos que comida boa é feita 
                com <em>afeto</em>. 🧡
              </p>
            </div>
          </div>

          <div className={styles.values}>
            {VALUES.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className={`glass-card ${styles.valueCard}`}
                  style={{ animationDelay: `${0.2 + index * 0.15}s`, '--accent': value.color }}
                >
                  <div className={styles.valueEmoji}>
                    <Icon size={32} color={value.color} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueDesc}>{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
