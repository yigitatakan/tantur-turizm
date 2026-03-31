const services = [
  { icon: '✈️', title: 'Uçak Bileti', desc: 'Dünya genelinde 500+ havayolu ile en uygun fiyatlı uçak bileti. İç ve dış hatlarda özel indirimler.' },
  { icon: '🏨', title: 'Otel Rezervasyonu', desc: '5 yıldızlı resort\'lardan butik otellere, bütçenize uygun konaklama seçenekleri.' },
  { icon: '🛂', title: 'Vize İşlemleri', desc: 'Schengen, ABD, İngiltere ve daha fazlası. Vize sürecinizi baştan sona yönetiyoruz.' },
  { icon: '🗺️', title: 'Grup Turları', desc: 'Rehberli kültür turları, gastronomi turları ve macera seyahatleri. Her ay yeni rotalar.' },
  { icon: '🚗', title: 'Transfer & Araç Kiralama', desc: 'Havalimanından otele, şehir içi veya şehirlerarası konforlu transfer hizmeti.' },
  { icon: '💼', title: 'Kurumsal Seyahat', desc: 'Şirket seyahatleri, konferans organizasyonları ve incentive turları için özel çözümler.' },
]

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-2">Neler Yapıyoruz?</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">Hizmetlerimiz</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-slate-100">
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{s.icon}</span>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
