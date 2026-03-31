import { useState } from 'react'

const links = [
  { href: '#hizmetler', label: 'Hizmetlerimiz' },
  { href: '#turlar', label: 'Turlar' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&q=80"
          alt="İstanbul"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/70 to-brand-900/50" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 lg:px-16 py-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl">T</span>
          </div>
          <div>
            <h1 className="text-white font-display text-xl font-bold tracking-wide">TANTUR</h1>
            <p className="text-gold-light text-[10px] tracking-[0.25em] uppercase">Turizm & Seyahat</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-gold text-sm font-medium transition-colors">{l.label}</a>
          ))}
          <a href="#rezervasyon" className="bg-gold hover:bg-gold-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg">
            Rezervasyon
          </a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden relative z-40 bg-brand-900/95 backdrop-blur-lg px-6 py-6 space-y-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-white/90 text-lg">{l.label}</a>
          ))}
          <a href="#rezervasyon" onClick={() => setMenuOpen(false)} className="block bg-gold text-white text-center py-3 rounded-full font-semibold">Rezervasyon</a>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] px-6 lg:px-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm">25 Yıllık Güvenilir Deneyim</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Dünyayı Keşfetmenin<br />
            <span className="text-gold">En Kolay Yolu</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
            Tantur Turizm olarak 1999'dan bu yana İstanbul'dan dünyaya açılan kapınız.
            Uçak bileti, otel rezervasyonu, vize işlemleri ve özel turlarla hayalinizdeki
            tatili gerçeğe dönüştürüyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#turlar" className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-gold/30 text-center">
              Turları Keşfet
            </a>
            <a href="#iletisim" className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-white/10 text-center">
              Bize Ulaşın
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            {[
              { num: '25+', label: 'Yıl Deneyim' },
              { num: '50K+', label: 'Mutlu Müşteri' },
              { num: '120+', label: 'Ülke' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-gold font-display text-3xl font-bold">{s.num}</p>
                <p className="text-white/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
