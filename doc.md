# Kişisel Portfolyo ve AI Deney Alanı Projesi

Bu doküman, TypeScript ve React ile geliştirilen modern, interaktif ve çok dilli kişisel portfolyo web sitesinin proje planını, mimarisini ve yol haritasını içerir.

## Proje Özeti

Bu proje, sadece tamamlanmış işleri sergileyen statik bir "dijital CV" olmanın ötesinde, geliştiricinin düşünce yapısını, problem çözme yeteneğini ve yapay zeka alanındaki yetkinliğini interaktif bir şekilde kanıtlayan dinamik bir platform olmayı hedefler. Proje, Vite üzerine kurulu bir React (TypeScript) uygulamasıdır ve GitHub Pages üzerinden yayınlanacaktır.

### Temel Felsefe

*   **Göster, Anlatma (Show, Don't Tell):** Yetenekleri sadece listelemek yerine, projeler ve interaktif demolar aracılığıyla canlı olarak sergilemek.
*   **Hikaye Anlatıcılığı:** Ziyaretçiye, geliştiricinin profesyonel yolculuğunu, motivasyonunu ve problem çözme yaklaşımını anlatan bir deneyim sunmak.
*   **Modüler ve Ölçeklenebilir Mimari:** Temiz, yönetilebilir ve gelecekteki özellik eklemelerine açık bir kod tabanı oluşturmak.
*   **Kullanıcı Odaklılık:** Özellikle işe alım uzmanları ve teknik liderlerin aradığı bilgilere en hızlı ve en net şekilde ulaşmasını sağlamak.

## Sayfa Mimarisi

Proje, ziyaretçiyi net bir yolculuğa çıkaran 4 ana pencereden oluşur:

1.  **Ana Sayfa (`/`):** Sitenin kalbi. Geliştiricinin dijital özeti, vitrini ve en önemli bilgilerin (CV, öne çıkan projeler/yazılar) bulunduğu merkezi bölüm.
2.  **Vaka Analizleri (`/projects`):** Projelerin sadece listelendiği bir galeri değil, seçilmiş projelerin "problem, yaklaşım, zorluklar ve sonuç" formatında derinlemesine incelendiği bir bölüm.
3.  **Tüm Yazılar (`/blog`):** Geliştiricinin teknik bilgi birikimini, öğrenme sürecini ve iletişim yeteneğini gösterdiği blog arşivi.
4.  **İletişim (`/contact`):** Potansiyel işveren veya müşterilerin kolayca bağlantı kurabilmesi için tasarlanmış, amaca yönelik bir sayfa.

## Özellikler

### Mevcut ve Planlanan Özellikler

*   **Modern Frontend Mimarisi:** Vite ile oluşturulmuş, TypeScript tabanlı React (SPA).
*   **Modüler ve Kapsüllenmiş Stil:** Her bileşenin kendi stilini barındırdığı CSS Modules yapısı.
*   **Uluslararasılaştırma (i18n):** `react-i18next` ile en az iki dilli (TR/EN) destek.
*   **Tek Sayfada CV Deneyimi:** Ana sayfada ziyaretçinin ihtiyaç duyacağı tüm temel bilgilerin (Hakkımda, Deneyim, Beceriler, Öne Çıkan İşler) mantıksal bölümler halinde sunulması.
*   **Derinlemesine Proje Sunumu:** Projelerin sadece link ve açıklama ile değil, detaylı vaka analizleri şeklinde sunulması.
*   **Backend'siz Form Entegrasyonu:** `Formspree` kullanarak sunucuya ihtiyaç duymayan bir iletişim formu.
*   **Ücretsiz Hosting:** `gh-pages` ile GitHub Pages üzerinde yayınlanma.
*   **(Planlanan) İnteraktif AI Playground:** `TensorFlow.js` kullanarak, sunucuya ihtiyaç duymadan doğrudan tarayıcıda çalışan yapay zeka demoları.
*   **(Planlanan) Akıllı Blog Arama:** Anahtar kelime eşleşmesi yerine anlamsal arama yapabilen bir arama motoru entegrasyonu.

## Teknoloji Yığını

*   **Frontend:** React, TypeScript, Vite
*   **Yönlendirme (Routing):** React Router
*   **Dil Desteği (i18n):** i18next & react-i18next
*   **Stil:** CSS Modules
*   **Form Yönetimi:** Formspree
*   **Versiyon Kontrol:** Git & GitHub
*   **Dağıtım (Deployment):** GitHub Pages
*   **İstemci Taraflı AI:** TensorFlow.js

---

## Yapılacaklar Listesi (To-Do List)

### Faz 1: Temel Kurulum ve MVP (Minimum Viable Product)

-   [ ] `Vite` ile TypeScript tabanlı React projesini oluştur.
-   [ ] Proje için `GitHub` reposu oluştur ve ilk commit'i at.
-   [ ] Konuşulan nihai dosya yapısını (`src/components`, `src/pages` vb.) oluştur.
-   [ ] `React Router` kurulumunu yap ve 4 ana sayfa için boş bileşenler (`HomePage`, `ProjectsPage`, `BlogPage`, `ContactPage`) oluştur.
-   [ ] Ana `App.tsx` dosyasında sayfa rotalarını tanımla.
-   [ ] Paylaşılan `Navbar` ve `Footer` bileşenlerini oluştur ve `PageLayout` içine yerleştir.
-   [ ] `gh-pages` paketini kur ve ilk "Merhaba Dünya" versiyonunu GitHub Pages'e deploy et.

### Faz 2: İçerik Geliştirme ve Stil

-   [ ] Ana sayfanın bölümlerini (`Hero`, `About`, `Experience`, `TechStack` vb.) ayrı bileşenler olarak oluştur.
-   [ ] Proje verileri için `projects.data.ts` dosyasını ve `Project` tipini oluştur.
-   [ ] Paylaşılan `Card` ve `Button` gibi temel UI bileşenlerini tasarla.
-   [ ] Ana sayfadaki "Öne Çıkan Projeler" ve "Son Yazılar" bölümlerini statik verilerle doldur.
-   [ ] `ContactPage`'e `Formspree` entegrasyonu ile çalışan bir iletişim formu ekle.
-   [ ] Genel site stilini (renk paleti, tipografi) `main.css` içinde belirle ve uygula.

### Faz 3: İleri Fonksiyonellik ve Vaka Analizleri

-   [ ] `i18next` ve `react-i18next` kütüphanelerini kur.
-   [ ] `i18n/` klasör yapısını ve dil (TR/EN) JSON dosyalarını oluştur.
-   [ ] `LanguageSwitcher` bileşenini oluştur ve Navbar'a ekle.
-   [ ] Sitedeki tüm statik metinleri `t()` fonksiyonu ile çeviriye uygun hale getir.
-   [ ] `ProjectsPage`'i "Vaka Analizleri" sayfasına dönüştür. En az 1 proje için detaylı analiz sayfası oluştur.
-   [ ] `BlogPage`'i statik blog yazıları listesiyle doldur.

### Faz 4: AI Entegrasyonları ve Son Dokunuşlar (Gelecek Planı)

-   [ ] Siteye ayrı bir "AI Playground" (`/playground`) sayfası ekle.
-   [ ] `TensorFlow.js`'i projeye dahil et.
-   [ ] Python'da eğitilmiş basit bir modeli (örn: resim sınıflandırıcı) web formatına dönüştür.
-   [ ] Dönüştürülmüş modeli `Playground` sayfasında çalıştıran bir React bileşeni oluştur.
-   [ ] (Opsiyonel) Blog yazıları için anlamsal arama fonksiyonu üzerinde çalışmaya başla.
-   [ ] Sitenin mobil uyumluluğunu ve performansını test et.
-   [ ] Final `README.md` dosyasını proje detayları ve ekran görüntüleriyle güncelle.