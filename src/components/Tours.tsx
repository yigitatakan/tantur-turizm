const tours = [
  {
    name: 'Balkan Turu',
    duration: '7 Gece / 8 Gün',
    price: '€599',
    cities: 'Belgrad → Saraybosna → Dubrovnik → Ohrid',
    tag: 'En Popüler',
    gradient: 'from-emerald-800 to-teal-600',
    emoji: '🏔️',
  },
  {
    name: 'İtalya Turu',
    duration: '6 Gece / 7 Gün',
    price: '€899',
    cities: 'Roma → Floransa → Venedik → Milano',
    tag: null,
    gradient: 'from-rose-800 to-red-600',
    emoji: '🏛️',
  },
  {
    name: 'Dubai & Abu Dhabi',
    duration: '4 Gece / 5 Gün',
    price: '€749',
    cities: 'Dubai → Abu Dhabi → Çöl Safari',
    tag: 'Yeni',
    gradient: 'from-amber-700 to-yellow-500',
    emoji: '🏙️',
  },
  {
    name: 'Kapadokya Hafta Sonu',
    duration: '2 Gece / 3 Gün',
    price: '€299',
    cities: 'Göreme → Ürgüp → Avanos → Derinkuyu',
    tag: null,
    gradient: 'from-orange-800 to-amber-600',
    emoji: '🎈',
  },
]

export default function Tours() {
  return (
    <section id="turlar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-2">Nereye Gidelim?</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">Popüler Turlar</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
              <div className={`relative h-48 bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-125 transition-transform duration-500">{t.emoji}</span>
                {t.tag && <span className="absolute top-3 right-3 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">{t.tag}</span>}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-slate-900">{t.name}</h3>
                <p className="text-slate-500 text-xs mt-1">{t.duration}</p>
                <p className="text-slate-600 text-sm mt-2">{t.cities}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-brand-600 font-bold text-xl">{t.price}</span>
                  <a href="#rezervasyon" className="text-gold hover:text-gold-dark text-sm font-semibold">Detay →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
