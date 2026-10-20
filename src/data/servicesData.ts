export interface DetailedService {
  id: string;
  slug: string;
  title: string;
  badge: string;
  shortDescription: string;
  icon: string;
  overview: string[];
  cases: string[];
  features: {
    title: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: DetailedService[] = [
  {
    id: 'gayrimenkul-hukuku',
    slug: 'gayrimenkul-hukuku',
    title: 'Gayrimenkul ve Kira Hukuku',
    badge: 'KİRA & TAŞINMAZ UYUŞMAZLIKLARI',
    shortDescription: 'Kiracı tahliyesi, kira bedeli tespiti, tapu iptal ve tescil davaları ile gayrimenkul hukuku danışmanlığı.',
    icon: 'Home',
    overview: [
      "Gayrimenkul ve Kira Hukuku; mülkiyet hakkının korunması, taşınmaz alım-satım ve devir işlemleri, kiralayan ile kiracı arasındaki hukuki ihtilafların çözümü ve ayni hakların tesisini kapsayan son derece teknik ve şekil şartlarına sıkı sıkıya bağlı bir hukuk disiplinidir.",
      "D&S Hukuk Bürosu olarak Erzurum merkez ve çevre illerde; konut ve çatılı işyeri kira sözleşmelerinden kaynaklanan tahliye davaları, kira bedeli tespit ve uyarlama davaları, muris muvazaasına dayalı tapu iptal ve tescil davaları ile ortaklığın giderilmesi (izale-i şüyu) davalarında müvekkillerimize sonuç odaklı hukuki temsil sağlamaktayız.",
      "7445 sayılı Kanun ile kira uyuşmazlıklarında zorunlu hale getirilen dava şartı arabuluculuk sürecinde müvekkillerimizin hak ve menfaatlerini koruyor; anlaşma sağlanamadığı takdirde Sulh Hukuk ve Asliye Hukuk Mahkemeleri nezdinde dava sürecini titizlikle yürütüyoruz."
    ],
    cases: [
      "İhtiyaç, tahliye taahhüdü ve temerrüt sebebiyle kiralananın tahliyesi davaları",
      "Kira bedeli tespiti (5 yılı aşan sözleşmeler) ve kira uyarlama davaları",
      "Muris muvazaası (mirastan mal kaçırma) nedeniyle tapu iptal ve tescil davaları",
      "Ortaklığın giderilmesi (İzale-i Şüyu) davaları ve satış memurluğu süreçleri",
      "Elatmanın önlenmesi (Müdahalenin Men'i) ve ecrimisil (haksız işgal tazminatı) davaları",
      "Kamulaştırma ve kamulaştırmasız el atma davaları ile bedel artırımı",
      "Önalım (şufa) hakkı davaları ve gayrimenkul satış vaadi sözleşmelerinin düzenlenmesi",
      "Kat mülkiyeti kanunundan doğan uyuşmazlıklar ve yönetim planı ihtilafları"
    ],
    features: [
      {
        title: "Şekil Şartlarına ve Sürelere Tam Uyum",
        description: "Kira ihtarnameleri, tahliye taahhütnameleri ve tapu davalarında kanuni sürelerin kaçırılmaması için takvim titizlikle takip edilir."
      },
      {
        title: "Zorunlu Arabuluculuk Temsili",
        description: "Kira uyuşmazlıklarında arabuluculuk masasında müvekkillerimizin hak kaybına uğramadan en hızlı çözüme ulaşması hedeflenir."
      },
      {
        title: "Bilirkişi ve Keşif Aşamalarının Takibi",
        description: "Rayiç bedel ve tapu tescil davalarındaki keşifler avukatlarımız tarafından bizzat yerinde takip edilir."
      }
    ],
    faqs: [
      {
        question: "5 yılı dolduran kiracıya kira tespit davası nasıl açılır?",
        answer: "Kira sözleşmesinin başlangıcından itibaren 5 yıl geçtikten sonra, yeni kira yılında uygulanacak bedelin emsal rayiçlere göre belirlenmesi için Sulh Hukuk Mahkemesinde dava açılabilir. Dava açmadan önce zorunlu arabuluculuk başvurusu şarttır."
      },
      {
        question: "Tahliye taahhütnamesi ile kiracı ne kadar sürede tahliye edilir?",
        answer: "Kira sözleşmesinden sonraki bir tarihte geçerli olarak imzalanmış tahliye taahhütnamesine dayanılarak tahliye tarihinden itibaren 1 ay içinde icra takibi veya dava açılabilir."
      }
    ]
  },
  {
    id: 'ceza-hukuku',
    slug: 'ceza-hukuku',
    title: 'Ceza Hukuku & Ağır Ceza',
    badge: 'SORUŞTURMA VE KOVUŞTURMA SAVUNMASI',
    shortDescription: 'Ağır ceza, asliye ceza, soruşturma, gözaltı ve istinaf/temyiz aşamalarında etkin müdafilik ve vekillik.',
    icon: 'Scale',
    overview: [
      "Ceza Hukuku, kişi özgürlüğü ve temel insan haklarını doğrudan ilgilendiren, soruşturmanın ilk anından hükmün kesinleşmesine kadar her aşamasında en yüksek hukuki dikkati ve tecrübeyi gerektiren hayati bir alandır.",
      "D&S Hukuk Bürosu kurucu avukatları Av. Onur Demirceylan ve Av. Muhammed Melih Şahin; kolluk ve savcılık ifade alma işlemlerinden itibaren, Sulh Ceza Hakimliği sorguları, Ağır Ceza ve Asliye Ceza Mahkemeleri duruşmaları ile Bölge Adliye Mahkemesi (İstinaf) ve Yargıtay kanun yolu başvurularında şüpheli, sanık ve mağdurlara profesyonel müdafilik ve vekillik hizmeti vermektedir.",
      "Dosyadaki tüm delillerin hukuka uygunluğu, HTS ve kamera kayıtlarının analizi, kriminal ekspertiz raporlarına itirazlar ve savunma stratejisi mevzuat ve emsal içtihatlar ışığında yapılandırılır."
    ],
    cases: [
      "Ağır Ceza Mahkemesi görev alanına giren nitelikli suçlar ve cinayet/yaralama davaları",
      "Uyuşturucu veya uyarıcı madde imal, ithal ve ticareti ile kullanım davaları",
      "Dolandırıcılık, nitelikli dolandırıcılık, güveni kötüye kullanma ve hırsızlık davaları",
      "Kollukta gözaltı, ifade alma ve savcılık sorgularında avukat refakati",
      "Sulh Ceza Hakimliği tutuklama taleplerine itiraz ve tahliye başvuruları",
      "Memur suçları, zimmet, irtikap, rüşvet ve görevi kötüye kullanma davaları",
      "Bilişim suçları, yasa dışı bahis ve internet üzerinden işlenen suçlar",
      "İstinaf (Bölge Adliye Mahkemesi) ve Yargıtay temyiz kanun yolu başvuruları"
    ],
    features: [
      {
        title: "24/7 Acil Gözaltı ve İfade Desteği",
        description: "Gözaltı ve ifade alma süreçlerinde şüphelinin yasal haklarının eksiksiz korunması için ivedilikle müdahale edilir."
      },
      {
        title: "Hukuka Aykırı Delil Tespiti",
        description: "Ceza Muhakemesi Kanunu'na aykırı biçimde toplanan delillerin dosyadan çıkarılması için etkin itirazlar sunulur."
      },
      {
        title: "Kapsamlı Duruşma Temsili",
        description: "Erzurum ve tüm Türkiye adliyelerindeki duruşmalarda sözlü ve yazılı savunma kararlılıkla icra edilir."
      }
    ],
    faqs: [
      {
        question: "Gözaltına alınan bir kişi için avukat ne zaman devreye girmelidir?",
        answer: "Kolluk (polis/jandarma) tarafından gözaltına alındığı ilk andan itibaren hiçbir ifade vermeden önce avukatla görüşme hakkı vardır. İfadeye mutlaka avukat eşliğinde girilmelidir."
      },
      {
        question: "Tutuklama kararına itiraz süresi ne kadardır?",
        answer: "Sulh Ceza Hakimliği tarafından verilen tutuklama kararlarına karşı, kararın tefhim veya tebliğinden itibaren 7 gün içinde itiraz edilmelidir."
      }
    ]
  },
  {
    id: 'is-hukuku',
    slug: 'is-hukuku',
    title: 'İş ve Sosyal Güvenlik Hukuku',
    badge: 'İŞÇİ VE İŞVEREN UYUŞMAZLIKLARI',
    shortDescription: 'Kıdem ve ihbar tazminatı, işe iade davaları, fazla mesai alacakları ve zorunlu arabuluculuk süreçleri.',
    icon: 'Briefcase',
    overview: [
      "İş Hukuku; işçi ve işveren arasındaki çalışma ilişkilerini, sözleşme fesihlerini, işçilik alacaklarını ve iş sağlığı güvenliği standartlarını düzenleyen dinamik bir hukuk dalıdır.",
      "D&S Hukuk Bürosu; haksız işten çıkarmalarda işçilerin hak ettiği kıdem ve ihbar tazminatları, ödenmeyen fazla mesai ve resmi tatil ücretleri ile işe iade davalarında müvekkillerini temsil ederken; kurumsal işverenlere de iş sözleşmelerinin hazırlanması, özlük dosyası yönetimi ve iş hukuku danışmanlığı sağlamaktadır.",
      "Dava şartı zorunlu arabuluculuk müzakerelerinde müvekkillerimizin masadan maksimum hukuki kazanımla ayrılması için süreci bizzat yönetiyoruz."
    ],
    cases: [
      "Kıdem tazminatı, ihbar tazminatı ve kötüniyet tazminatı davaları",
      "İşe iade davaları ve boşta geçen süre ücreti talepleri",
      "Fazla çalışma (mesai), hafta tatili ve UBGT (resmi tatil) ücret alacağı davaları",
      "İş kazası ve meslek hastalığından kaynaklanan maddi ve manevi tazminat davaları",
      "Mobbing (psikolojik taciz) nedeniyle iş akdinin haklı feshi ve tazminat süreçleri",
      "Hizmet tespiti (sigortasız çalıştırılan günlerin SGK'ya bildirilmesi) davaları",
      "İş sözleşmelerinin, rekabet yasağı ve gizlilik taahhütnamelerinin hazırlanması",
      "İş Hukuku zorunlu arabuluculuk süreçlerinde taraf vekilliği"
    ],
    features: [
      {
        title: "Bilirkişi Hesap Raporlarına Hakimiyet",
        description: "İşçilik alacaklarında bilirkişi hesaplamaları güncel brüt-net ücretler ve emsal Yargıtay kararlarına göre denetlenir."
      },
      {
        title: "Haklı Fesih Delil Tespiti",
        description: "İşçinin ve işverenin haklı fesih gerekçeleri yazılı ihtarname ve delillerle güvence altına alınır."
      },
      {
        title: "Hızlı Arabuluculuk Müzakeresi",
        description: "Dava açılmadan önceki arabuluculuk toplantılarında en kısa sürede alacağın tahsili amaçlanır."
      }
    ],
    faqs: [
      {
        question: "İşten çıkarılan işçinin dava açma süresi nedir?",
        answer: "İşe iade talebinde fesih bildiriminden itibaren 1 ay içinde arabuluculuğa başvurulmalıdır. Kıdem ve ihbar tazminatı alacaklarında ise zamanaşımı süresi 5 yıldır."
      },
      {
        question: "İşçi haklı nedenle istifa ederse kıdem tazminatı alabilir mi?",
        answer: "Evet. Maaşın veya fazla mesainin ödenmemesi, sigortanın gerçek ücretten yatırılmaması gibi haklı nedenlerle iş sözleşmesini fesheden işçi kıdem tazminatına hak kazanır."
      }
    ]
  },
  {
    id: 'aile-hukuku',
    slug: 'aile-hukuku',
    title: 'Aile ve Boşanma Hukuku',
    badge: 'BOŞANMA, VELAYET VE MAL PAYLAŞIMI',
    shortDescription: 'Anlaşmalı ve çekişmeli boşanma, nafaka, velayet, maddi-manevi tazminat ve edinilmiş malların tasfiyesi.',
    icon: 'Users',
    overview: [
      "Aile Hukuku; taraflar arasındaki manevi ve psikolojik hassasiyetlerin en üst düzeyde olduğu, çocukların geleceğini ve tarafların mali haklarını belirleyen titiz bir alandır.",
      "D&S Hukuk Bürosu; anlaşmalı boşanma protokollerinin hazırlanmasından çekişmeli boşanma davalarının yürütülmesine, velayet tayininden iştirak ve yoksulluk nafakası taleplerine, ziynet eşyası alacağından evlilik birliği süresince edinilen malların tasfiyesine kadar kapsamlı hukuki danışmanlık sunmaktadır.",
      "Müvekkillerimizin özel hayatının gizliliğine ve sır saklama ilkesine tavizsiz riayet ederek süreçleri şeffaf ve kararlı biçimde neticelendiriyoruz."
    ],
    cases: [
      "Anlaşmalı boşanma davaları ve protokol tanzimi (tek celsede sonuçlanma)",
      "Çekişmeli boşanma davaları (zina, hayata kast, şiddetli geçimsizlik vb.)",
      "Çocukların velayeti, velayetin değiştirilmesi ve kişisel ilişki kurulması",
      "Tedbir nafakası, yoksulluk nafakası ve iştirak nafakası talepleri ile nafaka uyarlama",
      "Maddi ve manevi tazminat talepleri",
      "Ziynet eşyası (düğün takıları) ve mehir alacağı davaları",
      "Edinilmiş mallara katılma rejimi ve artık değer tasfiyesi (mal paylaşımı davaları)",
      "6284 sayılı Kanun kapsamında uzaklaştırma ve koruma tedbir kararları alınması"
    ],
    features: [
      {
        title: "Müvekkil Gizliliği ve Hassasiyet",
        description: "Aile mahremiyetine tam saygı gösterilerek dava dilekçeleri ve tanık anlatımları özenle yönetilir."
      },
      {
        title: "Çocuğun Üstün Yararı",
        description: "Velayet taleplerinde pedagog incelemeleri ve psikolojik rapor süreçleri yakından takip edilir."
      },
      {
        title: "Kapsamlı Mal Varlığı Tespiti",
        description: "Evlilik süresince edinilen gayrimenkul, araç ve banka hesaplarının kaçırılmasını önleyici ihtiyati tedbirler alınır."
      }
    ],
    faqs: [
      {
        question: "Anlaşmalı boşanma ne kadar sürer?",
        answer: "Eşlerin boşanma, velayet, nafaka ve tazminat konularında hazırlanan protokolü imzalaması durumunda anlaşmalı boşanma davası genellikle tek celsede (1-3 hafta içinde) sonuçlanır."
      },
      {
        question: "Düğünde takılan altınlar kime aittir?",
        answer: "Yargıtay'ın güncel yerleşik içtihatlarına göre, kime takıldığına bakılmaksızın kadına özgü ziynet eşyaları kural olarak kadının kişisel malı sayılır ve boşanmada iadesi talep edilebilir."
      }
    ]
  },
  {
    id: 'idare-ve-vergi-hukuku',
    slug: 'idare-ve-vergi-hukuku',
    title: 'İdare ve Vergi Hukuku',
    badge: 'İDARİ İPTAL VE TAM YARGI DAVALARI',
    shortDescription: 'Hukuka aykırı idari işlemlerin iptali, tam yargı (tazminat) ve vergi cezası uyuşmazlıkları.',
    icon: 'FileText',
    overview: [
      "İdare ve Vergi Hukuku; devlet ve kamu kurumlarının bireylere yönelik gerçekleştirdiği tek taraflı idari işlemler, disiplin cezaları, yıkım/ruhsat iptalleri ve vergi tarhiyatlarına karşı hak arama hürriyetini güvenceye alan alandır.",
      "D&S Hukuk Bürosu; kamu görevlilerinin atanma ve disiplin işlemlerinin iptali, idarenin kusurlu eylem ve işlemlerinden doğan zararların tazmini (tam yargı davası) ile vergi ziyaı ve usulsüzlük cezalarına karşı Vergi Mahkemeleri ve Danıştay nezdinde dava takibi yapmaktadır.",
      "İdari yargılama hukukunda dava açma süreleri katı kurallara bağlı olup (genel olarak 60 gün), sürelerin takibi uzman avukat kadromuzla güvenceye alınır."
    ],
    cases: [
      "Hukuka aykırı idari işlemlerin iptali davaları",
      "İdarenin hizmet kusurundan doğan zararlar için Tam Yargı (tazminat) davaları",
      "Memur ve kamu personelinin disiplin cezalarının iptali davaları",
      "Atama, tayin ve görevde yükselme işlemlerine karşı açılan davalar",
      "İmar para cezaları ve yapı tatil/yıkım kararlarının iptali davaları",
      "Vergi ziyaı, usulsüzlük ve özel usulsüzlük cezalarına karşı iptal davaları",
      "Vergi tarhiyatı öncesi ve sonrası uzlaşma komisyonu süreçleri",
      "Kamu ihaleleri ve Kamu İhale Kurumu (KİK) kararlarına itiraz ve dava süreçleri"
    ],
    features: [
      {
        title: "Yürütmenin Durdurulması Talepleri",
        description: "İdari işlemin uygulanması halinde telafisi güç zararlar doğacaksa ivedilikle yürütmeyi durdurma kararı alınır."
      },
      {
        title: "Katı Süre Takibi",
        description: "İYUK kapsamındaki 30 ve 60 günlük dava açma süreleri hak kaybı yaşanmaması için sıkı takip edilir."
      },
      {
        title: "Vergi Hukuku Mevzuatına Hakimiyet",
        description: "Vergi Usul Kanunu uyarınca tarh edilen vergi ve cezalarda teknik savunma metinleri kurgulanır."
      }
    ],
    faqs: [
      {
        question: "İdare Mahkemesinde dava açma süresi ne kadardır?",
        answer: "Genel kural olarak idari işlemin tebliğinden itibaren 60 gün içinde İdare Mahkemesinde iptal davası açılmalıdır."
      },
      {
        question: "Yürütmenin durdurulması kararı nedir?",
        answer: "İdari işlemin açıkça hukuka aykırı olması ve uygulanması halinde telafisi güç zararlar doğuracak olması şartlarının birlikte gerçekleşmesi durumunda mahkemece verilen geçici koruma kararıdır."
      }
    ]
  },
  {
    id: 'miras-hukuku',
    slug: 'miras-hukuku',
    title: 'Miras Hukuku',
    badge: 'VERASET, TENKİS VE MİRAS TAKSİMİ',
    shortDescription: 'Vasiyetname tanzimi, tenkis davaları, mirasın reddi, mirasçılık belgesi ve miras taksim sözleşmeleri.',
    icon: 'PenTool',
    overview: [
      "Miras Hukuku; bir kişinin vefatı sonrasında geride bıraktığı malvarlığının yasal ve atanmış mirasçılar arasında adil ve yasalara uygun biçimde intikalini düzenleyen temel bir hukuk dalıdır.",
      "D&S Hukuk Bürosu; mirasçılık belgesi (veraset ilamı) alınmasından saklı pay ihlallerinde tenkis davası açılmasına, mirasbırakanın borçları nedeniyle mirasın reddi (reddi miras) işlemlerinden miras taksim sözleşmelerine kadar her aşamada profesyonel destek sunmaktadır."
    ],
    cases: [
      "Veraset ilamı (mirasçılık belgesi) alınması ve intikal işlemleri",
      "Saklı pay ihlallerinde Tenkis Davaları",
      "Mirasta denkleştirme (iade) davaları",
      "Vasiyetname hazırlanması ve vasiyetnamenin iptali davaları",
      "Mirasın reddi (Reddi Miras) ve mirasın hükmen reddi davaları",
      "Miras taksim sözleşmelerinin hazırlanması ve miras ortaklığının giderilmesi",
      "Ölünceye kadar bakma sözleşmelerinin tanzimi ve ihtilafları",
      "Terekenin tespiti, mühürlenmesi ve resmi defter tutulması süreçleri"
    ],
    features: [
      {
        title: "Saklı Pay Hesaplamaları",
        description: "Türk Medeni Kanunu uyarınca altsoy, eş ve ana-babanın saklı pay oranları titizlikle hesaplanır."
      },
      {
        title: "3 Aylık Reddi Miras Süresi",
        description: "Mirasbırakanın borca batık olması durumunda yasal 3 aylık süre içinde mirasın reddi tescil edilir."
      },
      {
        title: "Uzlaşmacı Taksim Masası",
        description: "Mirasçılar arasında yıllar sürebilecek davalar yerine noter onaylı miras taksim sözleşmesiyle hızlı çözüm aranır."
      }
    ]
  },
  {
    id: 'cevre-hukuku',
    slug: 'cevre-hukuku',
    title: 'Çevre Hukuku',
    badge: 'ÇEVRESEL ETKİ VE İDARİ YAPTIRIMLAR',
    shortDescription: 'Çevre mevzuatından doğan uyuşmazlıklar, ÇED süreçleri ve idari para cezalarına karşı hukuki koruma.',
    icon: 'Scale',
    overview: [
      "Çevre Hukuku; sürdürülebilir kalkınma, çevre kirliliğinin önlenmesi, doğal kaynakların korunması ve işletmelerin çevresel mevzuata uyumu ile ilgili karmaşık idari ve cezai düzenlemeleri içerir.",
      "D&S Hukuk Bürosu; Çevre Kanunu kapsamında kesilen idari para cezalarına itirazlar, ÇED (Çevresel Etki Değerlendirmesi) raporu iptal davaları ve çevre kirliliğinden doğan tazminat süreçlerinde hukuki danışmanlık sağlamaktadır."
    ],
    cases: [
      "Çevre Kanunu uyarınca kesilen idari para cezalarına itiraz davaları",
      "ÇED Olumlu ve ÇED Gerekli Değildir kararlarının iptali davaları",
      "Çevre kirliliğinden kaynaklanan maddi ve manevi tazminat davaları",
      "Madencilik, enerji ve sanayi tesislerinin çevresel izin ve lisans danışmanlığı",
      "Atık yönetimi ve arıtma tesisi mevzuat uyum denetimleri"
    ],
    features: [
      {
        title: "Teknik Bilirkişi Rapor Analizi",
        description: "Çevre mühendisliği ve emisyon ölçüm raporları hukuki açıdan değerlendirilir."
      },
      {
        title: "İdari İptal Yolları",
        description: "Çevre ve Şehircilik Bakanlığı yaptırımlarına karşı İdare Mahkemelerinde iptal davaları açılır."
      }
    ]
  },
  {
    id: 'spor-hukuku',
    slug: 'spor-hukuku',
    title: 'Spor Hukuku',
    badge: 'KULÜP, SPORCU VE FEDERASYON UYUŞMAZLIKLARI',
    shortDescription: 'Profesyonel sporcu sözleşmeleri, kulüp alacakları ve TFF/tahkim kurulu nezdinde temsil.',
    icon: 'Users',
    overview: [
      "Spor Hukuku; profesyonel sporcular, spor kulüpleri, federasyonlar ve menajerler arasındaki hukuki ilişkileri, transfer süreçlerini ve disiplin cezalarını konu alan özel bir alandır.",
      "D&S Hukuk Bürosu; profesyonel futbolcu ve basketbolcu sözleşmelerinin hazırlanması, kulüplerden alacakların tahsili (Uyuşmazlık Çözüm Kurulu - UÇK başvuruları) ve TFF Tahkim Kurulu süreçlerinde temsil hizmeti sunmaktadır."
    ],
    cases: [
      "Profesyonel sporcu ve teknik adam sözleşmelerinin hazırlanması ve feshi",
      "TFF Uyuşmazlık Çözüm Kurulu (UÇK) nezdinde ücret alacağı davaları",
      "TFF Tahkim Kurulu ve Disiplin Kurulları itiraz süreçleri",
      "Spor kulüplerinin tüzük, dernek ve şirketleşme süreçleri danışmanlığı",
      "Menajerlik sözleşmeleri ve komisyon uyuşmazlıkları"
    ],
    features: [
      {
        title: "Federasyon Talimatlarına Hakimiyet",
        description: "TFF, FIBA ve ilgili spor federasyonlarının statü ve talimatları doğrultusunda dosya hazırlanır."
      },
      {
        title: "UÇK ve Tahkim Hızlı Takibi",
        description: "Spor yargısındaki kısa itiraz ve başvuru süreleri hassasiyetle gözetilir."
      }
    ]
  },
  {
    id: 'basin-hukuku',
    slug: 'basin-hukuku',
    title: 'Basın ve Medya Hukuku',
    badge: 'TEKZİP, TAZMİNAT VE KİŞİLİK HAKLARI',
    shortDescription: 'Medya yoluyla kişilik haklarına saldırı, tekzip metni yayınlatma, erişim engeli ve tazminat davaları.',
    icon: 'FileText',
    overview: [
      "Basın Hukuku; basın özgürlüğü ile bireylerin kişilik hakları, şeref ve haysiyetlerinin korunması arasındaki hassas dengeyi tesis eden hukuki kurallar bütünüdür.",
      "D&S Hukuk Bürosu; basılı veya dijital medya organlarında gerçeğe aykırı haber yapılması halinde tekzip (cevap ve düzeltme) hakkının kullanılması, 5651 sayılı Kanun uyarınca internetten içerik çıkarma ve erişim engelleme kararları alınması ile manevi tazminat davalarını yürütmektedir."
    ],
    cases: [
      "Basın yoluyla kişilik haklarına saldırı sebebiyle açılan manevi tazminat davaları",
      "Sulh Ceza Hakimliği nezdinde Tekzip (cevap ve düzeltme) kararı alınması",
      "İnternet haber sitelerinden haber kaldırma ve erişimin engellenmesi başvuruları",
      "Unutulma hakkı kapsamında arama motorlarından isim ve içerik silinmesi",
      "Gazetecilik faaliyetlerinden doğan ceza davalarında savunma (hakaret, iftira)"
    ],
    features: [
      {
        title: "24 Saat İçinde Erişim Engeli",
        description: "İnternette kişilik hakkını zedeleyen haber ve içeriklere karşı nöbetçi Sulh Ceza Hakimliği'nden ivedi karar alınır."
      },
      {
        title: "Yasal Tekzip Süreçleri",
        description: "Basın Kanunu'nda düzenlenen kısa süreli cevap ve düzeltme prosedürü noter ihtarnamesiyle başlatılır."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): DetailedService | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServices(): DetailedService[] {
  return servicesData;
}
