# itu-bc-mektup-projesi

Bu proje, kullanıcıdan terminal üzerinden alınan mektupları sırayla bloklara ekleyen küçük bir **Blockchain simülasyonu** içerir.  
Her mektup, belirlenen **açılma tarihine** göre görüntülenir. Açılma tarihi gelmemiş mektuplar gizli kalır.


## 🚀 Özellikler

- Kullanıcıdan terminal üzerinden mektup alma
- Her mektubun blockchain içinde yeni bir blok olarak saklanması
- Hash oluşturma
- Önceki hash kontrolü
- Açılma tarihi gelmeyen mektupların gizlenmesi
- Tüm zinciri terminalde görüntüleme


## 📂 Proje Yapısı

├── blockchain.js
├── block.js
├── index.js
└── input.js
├── package.json
└── package-lock.json


## 🧱 Block Yapısı

Her blok şu bilgileri içerir:

{
  blockNumber: Number,
  timestamp: Date,
  data: {
    letter: String,
    sender: String,
    openDate: "YYYY-MM-DD HH:MM"
  },
  previousHash: String,
  hash: String
}


📚Gerekli kütüphaneleri yükle:

npm install inquirer
npm install chalk
npm install crypto


▶️Projeyi başlat:
node index.js


🔧Kullanım:
İlk önce kullanıcıdan şifre istenir bu şifreyi daha sonra tüm blockları görmek istediğinde kullanıcıdan istenecektir ve şifrelerin eşleşmesi gerekmektedir.
Birinci bloğumuz Genesis Block ve orada veri kaydedilmiyor 
İkinci bloğumuz ilk mektubunuzun verilerini kaydeder
Veriler:
 Mektup,
 Gönderen,
 Açılma tarihi,
 
Açılma tarihi geldiğinde o blok görünür fakat tarih gelmediğinde veriler gözükmez
İlk mektubunuzu yazdıktan sonra size "Yeni veri eklemek ister misiniz?" sorusunu soracaktır
Evet denirse yeni mektup sonraki bloğa kaydolur
Hayır denilirse sizden ilk girdiğiniz şifre istenir doğru şifre girilirse girdiğiniz mektupların:

Mektup girilme saati,
Mektup Hash'i,
Önceki mektup Hash'i,
Tarih gelmişse veriler gözükür.
