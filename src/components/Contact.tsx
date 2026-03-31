import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mesajınız alınmıştır! En kısa sürede size dönüş yapacağız.')
  }

  return (
    <section id="iletisim" className="py-20 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-2">İletişim</p>
            <h2 className="font-display text-4xl font-bold mb-6">Bize Ulaşın</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Seyahat planlarınızı birlikte yapalım. Uzman ekibimiz size en uygun seçenekleri sunmak için hazır.
            </p>
            <div className="space-y-6">
              {[
                { icon: '📍', label: 'Merkez Ofis', value: 'Beyoğlu, İstanbul' },
                { icon: '📞', label: 'Telefon', value: '+90 212 243 07 57' },
                { icon: '✉️', label: 'E-posta', value: 'info@tantur.com.tr' },
                { icon: '🕐', label: 'Çalışma Saatleri', value: 'Pazartesi - Cumartesi: 09:00 - 18:00' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-white/50 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="rezervasyon">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 text-slate-800">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">Teklif İsteyin</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-slate-600 text-sm mb-1 block">Ad Soyad</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none" placeholder="Adınız Soyadınız" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-600 text-sm mb-1 block">E-posta</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none" placeholder="ornek@email.com" />
                  </div>
                  <div>
                    <label className="text-slate-600 text-sm mb-1 block">Telefon</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none" placeholder="+90 5XX XXX XX XX" />
                  </div>
                </div>
                <div>
                  <label className="text-slate-600 text-sm mb-1 block">Hizmet</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-white">
                    <option value="">Hizmet seçiniz</option>
                    <option>Uçak Bileti</option>
                    <option>Otel Rezervasyonu</option>
                    <option>Vize İşlemleri</option>
                    <option>Grup Turu</option>
                    <option>Kurumsal Seyahat</option>
                    <option>Transfer & Araç Kiralama</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-600 text-sm mb-1 block">Mesajınız</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none resize-none"
                    placeholder="Seyahat planınızı kısaca anlatın..." />
                </div>
              </div>
              <button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white py-4 rounded-xl font-semibold text-lg mt-6 transition-all hover:shadow-xl hover:shadow-gold/30">
                Teklif İste
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
