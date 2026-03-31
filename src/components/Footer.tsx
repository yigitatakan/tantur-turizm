export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">T</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">TANTUR</h3>
                <p className="text-gold-light text-[10px] tracking-[0.2em] uppercase">Turizm</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              1999'dan bu yana İstanbul'dan dünyaya açılan güvenilir seyahat ortağınız.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Uçak Bileti</li>
              <li>Otel Rezervasyonu</li>
              <li>Vize İşlemleri</li>
              <li>Grup Turları</li>
              <li>Kurumsal Seyahat</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Popüler Rotalar</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Balkan Turu</li>
              <li>İtalya Turu</li>
              <li>Dubai & Abu Dhabi</li>
              <li>Kapadokya</li>
              <li>Uzak Doğu</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>📍 Beyoğlu, İstanbul</li>
              <li>📞 +90 212 243 07 57</li>
              <li>✉️ info@tantur.com.tr</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 Tantur Turizm. Tüm hakları saklıdır.</p>
          <div className="flex gap-4 text-slate-500 text-sm">
            <a href="#" className="hover:text-white">Gizlilik</a>
            <a href="#" className="hover:text-white">Şartlar</a>
            <a href="#" className="hover:text-white">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
