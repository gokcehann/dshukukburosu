export interface FAQItem {
  id: string;
  category: 'genel' | 'ceza' | 'is' | 'aile' | 'gayrimenkul' | 'idare';
  categoryTitle: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  { id: 'all', title: 'Tüm Sorular' },
  { id: 'genel', title: 'Genel & Vekaletname' },
  { id: 'ceza', title: 'Ceza Hukuku' },
  { id: 'is', title: 'İş & Sosyal Güvenlik' },
  { id: 'aile', title: 'Aile & Boşanma' },
  { id: 'gayrimenkul', title: 'Kira & Gayrimenkul' },
  { id: 'idare', title: 'İdare & Vergi' },
] as const;

export const allFaqs: FAQItem[] = [
  // Genel & Vekaletname
  {
    id: 'g1',
    category: 'genel',
    categoryTitle: 'Genel & Vekaletname',
    question: "D&S Hukuk Bürosu'ndan nasıl hukuki danışmanlık veya dava randevusu alabilirim?",
    answer: "Web sitemizdeki iletişim formunu doldurarak, +90 532 681 43 45 veya +90 532 563 10 73 numaralı telefonlarımızdan doğrudan arayarak ya da WhatsApp hattımız üzerinden kurucu avukatlarımızla hızlıca irtibat kurarak Erzurum ofisimiz için randevunuzu oluşturabilirsiniz."
  },
  {
    id: 'g2',
    category: 'genel',
    categoryTitle: 'Genel & Vekaletname',
    question: "Avukata vekaletname nasıl ve nereden çıkarılır?",
    answer: "Vekaletname, Türkiye sınırları içerisinde herhangi bir noterlikten; yurt dışında bulunuyorsanız Türkiye Cumhuriyeti Konsolosluklarından çıkarılabilmektedir. Kurucu avukatlarımız Av. Onur Demirceylan (Erzurum Barosu Sicil No: 903) ve Av. Muhammed Melih Şahin (Erzurum Barosu Sicil No: 911) adına 'Genel Dava Vekaletnamesi' düzenletebilirsiniz. Boşanma ve taşınmaz satış/devir davalarında iki adet vesikalık fotoğraf ile notere başvurulması ve vekaletnamede özel yetki bulunması gerekmektedir."
  },
  {
    id: 'g3',
    category: 'genel',
    categoryTitle: 'Genel & Vekaletname',
    question: "Avukatlık ve hukuki danışmanlık vekalet ücreti nasıl belirlenir?",
    answer: "Avukatlık ücretleri; davanın hukuki niteliği, dava konusu uyuşmazlığın büyüklüğü ve sarf edilecek hukuki mesai göz önünde bulundurularak, Türkiye Barolar Birliği (TBB) ve Erzurum Barosu tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi esas alınarak müvekkil ile serbestçe kararlaştırılır."
  },
  {
    id: 'g4',
    category: 'genel',
    categoryTitle: 'Genel & Vekaletname',
    question: "Erzurum dışındaki çevre illerde ve Türkiye genelinde dava takibi yapıyor musunuz?",
    answer: "Evet. D&S Hukuk Bürosu merkez olarak Erzurum'da bulunmakla birlikte; Doğu Anadolu Bölgesi'ndeki çevre iller (Erzincan, Kars, Ağrı, Muş, Van, Ardahan) başta olmak üzere Türkiye genelindeki yetkili adliyelerde dava, duruşma, keşif ve icra takiplerini müvekkilleri adına bizzat yürütmektedir."
  },
  {
    id: 'g5',
    category: 'genel',
    categoryTitle: 'Genel & Vekaletname',
    question: "Online veya uzaktan hukuki danışmanlık hizmetiniz var mı?",
    answer: "Evet. Erzurum dışında veya yurt dışında ikamet eden müvekkillerimiz için Zoom, Google Meet, telefon ve WhatsApp üzerinden randevulu online hukuki danışmanlık hizmeti sunmaktayız. Belgeleriniz güvenli dijital kanallardan incelenerek hukuki yol haritanız şeffaf biçimde sunulur."
  },
  {
    id: 'g6',
    category: 'genel',
    categoryTitle: 'Genel & Vekaletname',
    question: "Dava dosyamın ve hukuki sürecimin aşamalarını nasıl takip edebilirim?",
    answer: "Müvekkillerimiz, e-Devlet ve UYAP Vatandaş Portalı üzerinden dosyalarındaki tüm tensip zaptı, duruşma tutanakları ve bilirkişi raporlarını anlık inceleyebildikleri gibi; büromuz avukatları her duruşma ve tebligat sonrasında müvekkillerine şeffaf ve düzenli bilgi aktarımı yapmaktadır."
  },

  // Ceza Hukuku
  {
    id: 'c1',
    category: 'ceza',
    categoryTitle: 'Ceza Hukuku',
    question: "Gözaltına alınma veya karakol ifade sürecinde avukatın rolü nedir?",
    answer: "Gözaltı sürecinde şüpheli veya sanığın ilk andan itibaren avukat yardımından faydalanma hakkı anayasal bir güvencedir. Avukat; kolluk veya savcılık ifadesinde bizzat hazır bulunur, hukuka aykırı delil toplanmasını engeller, susma hakkının kullanımını değerlendirir ve sulh ceza hakimliği sorgusunda tutuklama taleplerine karşı serbest bırakılma veya adli kontrol savunması yapar."
  },
  {
    id: 'c2',
    category: 'ceza',
    categoryTitle: 'Ceza Hukuku',
    question: "Tutuklama kararına nasıl ve hangi sürede itiraz edilir?",
    answer: "Sulh Ceza Hakimliği tarafından verilen tutuklama kararlarına karşı, kararın öğrenilmesinden veya tefhiminden itibaren 7 gün içinde bir üst Sulh Ceza Hakimliğine veya Asliye Ceza Mahkemesine itiraz dilekçesi verilmelidir. İtirazda delil durumu, adli kontrol tedbirlerinin yeterliliği ve kaçma/delil karartma şüphesinin bulunmadığı hukuki dayanaklarla açıklanır."
  },
  {
    id: 'c3',
    category: 'ceza',
    categoryTitle: 'Ceza Hukuku',
    question: "Ağır Ceza Mahkemesi davalarında savunma süreci nasıl yürütülür?",
    answer: "Ağır ceza davalarında (kasten öldürme, yağma, uyuşturucu ticareti, nitelikli dolandırıcılık vb.) dosya kapsamındaki HTS kayıtları, kamera görüntüleri, kriminal raporlar ve tanık ifadeleri ayrıntılı analiz edilir. Savunma stratejisi, beraat veya lehe olan yasal indirim maddelerinin uygulanması amacıyla titizlikle hazırlanır."
  },

  // İş & Sosyal Güvenlik
  {
    id: 'i1',
    category: 'is',
    categoryTitle: 'İş & Sosyal Güvenlik',
    question: "İş davalarında zorunlu arabuluculuk süreci nasıl işler?",
    answer: "7036 sayılı İş Mahkemeleri Kanunu uyarınca; kıdem tazminatı, ihbar tazminatı, fazla mesai, yıllık izin alacakları ve işe iade taleplerinde dava açmadan önce arabuluculuk başvurusu zorunlu dava şartıdır. Anlaşma sağlanamaması durumunda düzenlenen son tutanak ile birlikte yetkili İş Mahkemesinde dava açılır."
  },
  {
    id: 'i2',
    category: 'is',
    categoryTitle: 'İş & Sosyal Güvenlik',
    question: "Kıdem ve ihbar tazminatına hak kazanma şartları nelerdir?",
    answer: "Aynı işverene bağlı işyerinde en az 1 tam yıl çalışan işçi, haklı bir neden olmaksızın işten çıkarılması veya İş Kanunu'nun 24. maddesi gereğince haklı bir nedenle (ücretin ödenmemesi, mobbing, SGK priminin eksik yatırılması) iş sözleşmesini feshetmesi durumunda kıdem tazminatına hak kazanır. İhbar tazminatı ise yasal bildirim sürelerine uyulmadan yapılan fesihlerde talep edilir."
  },
  {
    id: 'i3',
    category: 'is',
    categoryTitle: 'İş & Sosyal Güvenlik',
    question: "İşe iade davası açma süresi ve şartları nelerdir?",
    answer: "İşe iade davası açabilmek için işyerinde en az 30 işçinin çalışıyor olması ve işçinin en az 6 aylık kıdeminin bulunması gerekir. Fesih bildiriminin tebliğinden itibaren 1 ay içinde zorunlu arabuluculuğa başvurulmalı, anlaşma sağlanamazsa arabuluculuk son tutanağının düzenlendiği tarihten itibaren 2 hafta içinde İş Mahkemesinde dava açılmalıdır."
  },

  // Aile & Boşanma
  {
    id: 'a1',
    category: 'aile',
    categoryTitle: 'Aile & Boşanma',
    question: "Anlaşmalı boşanma ile çekişmeli boşanma arasındaki farklar nelerdir?",
    answer: "En az 1 yıl süren evliliklerde eşlerin boşanma, nafaka, velayet ve mal paylaşımı hususlarında tam mutabakata vararak protokol imzalaması halinde tek celsede anlaşmalı boşanma gerçekleşir. Tarafların uzlaşamadığı durumlarda ise delillerin toplandığı, tanıkların dinlendiği ve kusur araştırmasının yapıldığı çekişmeli boşanma davası yürütülür."
  },
  {
    id: 'a2',
    category: 'aile',
    categoryTitle: 'Aile & Boşanma',
    question: "Boşanma davalarında velayet neye göre kararlaştırılır?",
    answer: "Mahkeme velayeti belirlerken öncelikle 'çocuğun üstün yararını' gözetir. Çocuğun yaşı, anne şefkatine olan ihtiyacı, eğitim durumu, alıştığı sosyal çevre, ebeveynlerin yaşam standartları ve pedagog/psikolog tarafından hazırlanan Sosyal İnceleme Raporu (SİR) esas alınır."
  },
  {
    id: 'a3',
    category: 'aile',
    categoryTitle: 'Aile & Boşanma',
    question: "Nafaka türleri nelerdir ve sonradan artırılabilir mi?",
    answer: "Dava sürecinde bağlanan 'Tedbir Nafakası', boşanma sonrası yoksulluğa düşecek eş lehine bağlanan 'Yoksulluk Nafakası' ve ortak çocuğun bakımı için ödenen 'İştirak Nafakası' olmak üzere üç tür nafaka bulunur. Enflasyon, ekonomik şartlar ve tarafların gelir durumunun değişmesi halinde Aile Mahkemesinde 'Nafakanın Artırılması Davası' açılabilir."
  },

  // Kira & Gayrimenkul
  {
    id: 'k1',
    category: 'gayrimenkul',
    categoryTitle: 'Kira & Gayrimenkul',
    question: "Kiracının tahliyesi hangi hukuki gerekçelerle talep edilebilir?",
    answer: "Türk Borçlar Kanunu kapsamında; geçerli bir tahliye taahhütnamesinin varlığı, kira bedelinin ödenmemesi nedeniyle iki haklı ihtar çekilmesi, kiraya verenin veya birinci derece yakınının konut/işyeri gereksinimi (ihtiyaç sebebiyle tahliye) ve taşınmazın yeniden inşası veya imarı hallerinde tahliye davası açılabilir. Tahliye davalarından önce zorunlu arabuluculuk süreci işletilmelidir."
  },
  {
    id: 'k2',
    category: 'gayrimenkul',
    categoryTitle: 'Kira & Gayrimenkul',
    question: "Kira tespit (uyarlama) davası ne zaman açılabilir?",
    answer: "5 yılı dolduran kira sözleşmelerinde, kira bedelinin emsal rayiçlere ve hakkaniyete uygun olarak yeniden belirlenmesi amacıyla Sulh Hukuk Mahkemesinde kira tespit davası açılabilir. Mahkemece tayin edilen bilirkişi heyeti emsal taşınmazları inceleyerek yeni kira bedelini tespit eder."
  },
  {
    id: 'k3',
    category: 'gayrimenkul',
    categoryTitle: 'Kira & Gayrimenkul',
    question: "Muris muvazaası (mirastan mal kaçırma) davası nedir?",
    answer: "Mirasbırakanın diğer mirasçıları miras hakkından mahrum bırakmak amacıyla gerçekte bağışladığı taşınmazı tapuda satış gibi göstermesi durumunda açılan davadır. Saklı paylı olsun veya olmasın tüm mirasçılar zamanaşımına tabi olmaksızın tapu iptal ve tescil talebinde bulunabilir."
  },

  // İdare & Vergi
  {
    id: 'id1',
    category: 'idare',
    categoryTitle: 'İdare & Vergi',
    question: "İdari işlemin iptali davası açma süresi ne kadardır?",
    answer: "İdari Yargılama Usulü Kanunu (İYUK) uyarınca, idare mahkemelerinde genel dava açma süresi işlemin tebliğinden itibaren 60 gün; vergi mahkemelerinde ise 30 gündür. Sürelerin kaçırılması hak kaybına yol açacağından idari tebligatın yapıldığı tarih son derece kritiktir."
  },
  {
    id: 'id2',
    category: 'idare',
    categoryTitle: 'İdare & Vergi',
    question: "Tam yargı (idareden tazminat) davası hangi durumlarda açılır?",
    answer: "İdarenin işlem veya eylemleri sonucunda kişilerin can, mal veya manevi varlıklarında meydana gelen zararların tazmini için açılan davadır. Hizmet kusuru veya kusursuz sorumluluk ilkelerine dayanılarak idareden maddi ve manevi tazminat talep edilir."
  }
];
