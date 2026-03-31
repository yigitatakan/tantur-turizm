export default function About() {
  return (
    <section id="hakkimizda" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1596627288847-5bbcc2c7d51b?w=800&q=80"
              alt="Ofisimiz"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -right-5 bg-gold text-white p-5 rounded-xl shadow-xl hidden sm:block">
              <p className="font-display text-3xl font-bold">1999</p>
              <p className="text-sm opacity-90">Kuruluş Yılı</p>
            </div>
          </div>
          <div>
            <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-2">Hakkımızda</p>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">
              25 Yıldır Güvenin Adresi
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Tantur Turizm, 1999 yılında İstanbul'da kurulmuş, Türkiye'nin önde gelen seyahat acentalarından biridir.
              IATA akreditasyonuna sahip acentemiz, dünya genelinde 120'den fazla ülkede hizmet vermektedir.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Bireysel tatillerden kurumsal seyahat organizasyonlarına, vize danışmanlığından
              uçak bileti rezervasyonuna kadar tüm seyahat ihtiyaçlarınızda yanınızdayız.
              Müşteri memnuniyeti odaklı yaklaşımımızla 50.000'den fazla mutlu müşteriye hizmet verdik.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏆', text: 'IATA Akredite' },
                { icon: '🛡️', text: 'TURSAB Üyesi' },
                { icon: '🌍', text: '120+ Ülke' },
                { icon: '⭐', text: '4.8 Google Puanı' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-slate-800 font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
