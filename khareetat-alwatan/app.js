const regionData = {
  "sa-ri": {
    name: "منطقة الرياض",
    capital: "الرياض",
    color: "#00894a",
    heritage: "تتميز بالتراث النجدي القائم على العمارة الطينية والأفنية الداخلية والزخارف الهندسية. وتبرز الدرعية وحي الطريف بوصفهما شاهدين على تاريخ الدولة السعودية الأولى، إلى جانب قصر المصمك وقصر المربع.",
    sources: [
      { label: "اليونسكو: حي الطريف", url: "https://whc.unesco.org/en/list/1329" },
      { label: "سعوديبيديا: منطقة الرياض", url: "https://saudipedia.com/منطقة-الرياض" }
    ],
    governorates: [
      "الدرعية", "الخرج", "الدوادمي", "المجمعة", "القويعية", "وادي الدواسر",
      "الأفلاج", "الزلفي", "شقراء", "حوطة بني تميم", "عفيف", "السليل",
      "ضرماء", "المزاحمية", "رماح", "ثادق", "حريملاء", "الحريق",
      "الغاط", "مرات", "الدلم", "الرين"
    ]
  },
  "sa-mk": {
    name: "منطقة مكة المكرمة",
    capital: "مكة المكرمة",
    color: "#0050af",
    heritage: "يجمع تراثها بين المكانة الدينية للحرمين والمشاعر المقدسة، وتراث الحج والتجارة البحرية. وتمثل جدة التاريخية العمارة الحجازية بالرواشين والمباني المشيدة بالحجر المرجاني، بينما يرتبط الطائف بسوق عكاظ وموروثه الأدبي والتجاري.",
    sources: [
      { label: "اليونسكو: جدة التاريخية", url: "https://whc.unesco.org/en/list/1361" },
      { label: "سعوديبيديا: منطقة مكة المكرمة", url: "https://saudipedia.com/منطقة-مكة-المكرمة" }
    ],
    governorates: [
      "جدة", "الطائف", "القنفذة", "الليث", "رابغ", "خليص", "الخرمة", "رنية",
      "تربة", "الجموم", "الكامل", "ميسان", "المويه", "أضم", "العرضيات", "بحرة"
    ]
  },
  "sa-md": {
    name: "منطقة المدينة المنورة",
    capital: "المدينة المنورة",
    color: "#607c4f",
    heritage: "يرتبط تراثها بالسيرة النبوية والمسجد النبوي ومسجد قباء وطرق الحج القديمة. كما تضم العلا وموقع الحجر، الذي يحفظ المقابر النبطية المنحوتة والنقوش والآبار الدالة على تطور العمارة وإدارة المياه قديمًا.",
    sources: [
      { label: "اليونسكو: موقع الحجر", url: "https://whc.unesco.org/en/list/1293" },
      { label: "سعوديبيديا: منطقة المدينة المنورة", url: "https://saudipedia.com/منطقة-المدينة-المنورة" }
    ],
    governorates: ["ينبع", "العلا", "المهد", "الحناكية", "بدر", "خيبر", "العيص", "وادي الفرع"]
  },
  "sa-qs": {
    name: "منطقة القصيم",
    capital: "بريدة",
    color: "#5aba1c",
    heritage: "يغلب على تراثها الطابع النجدي الريفي والتجاري، ويظهر في البيوت والأسواق الشعبية والقرى ذات العمارة الطينية، إضافة إلى الثقافة الزراعية المرتبطة بالمزارع والنخيل والمنتجات المحلية. ومن شواهده سوق المسوكف في عنيزة، المبني بأسلوب يحاكي بيوت المنطقة التقليدية.",
    sources: [
      { label: "سوق المسوكف - روح السعودية", url: "https://www.visitsaudi.com/ar/qassim/attractions/al-musawkaf-traditional-market-in-unaizah" },
      { label: "بوابة القصيم السياحية", url: "https://www.alqassim.gov.sa/QassimTourism" }
    ],
    governorates: [
      "عنيزة", "الرس", "البكيرية", "البدائع", "المذنب", "النبهانية", "الأسياح",
      "رياض الخبراء", "عيون الجواء", "ضرية", "عقلة الصقور", "الشماسية", "أبانات"
    ]
  },
  "sa-sh": {
    name: "المنطقة الشرقية",
    capital: "الدمام",
    color: "#06a132",
    heritage: "يجمع تراثها بين حياة الواحات والساحل والتجارة الخليجية. وتمثل واحة الأحساء نموذجًا لاستمرار الزراعة ونظم الري والعيون والنخيل، بينما تعكس موانئ العقير ودارين وقرى القطيف صلة السكان القديمة بالبحر والتجارة.",
    sources: [
      { label: "اليونسكو: واحة الأحساء", url: "https://whc.unesco.org/en/list/1563" },
      { label: "سعوديبيديا: المنطقة الشرقية", url: "https://saudipedia.com/المنطقة-الشرقية" }
    ],
    governorates: [
      "الأحساء", "حفر الباطن", "الجبيل", "القطيف", "الخبر", "الخفجي", "العديد",
      "رأس تنورة", "بقيق", "النعيرية", "قرية العليا", "البيضاء"
    ]
  },
  "sa-as": {
    name: "منطقة عسير",
    capital: "أبها",
    color: "#971a4d",
    heritage: "تشتهر بالقرى الجبلية والبيوت الحجرية والطينية متعددة الطوابق، ومن أبرزها قرية رجال ألمع. كما يتميز تراثها بـ«القَط العسيري»، وهو فن نسائي لتزيين جدران المنازل، وقد أدرجته اليونسكو ضمن التراث الثقافي غير المادي.",
    sources: [
      { label: "اليونسكو: القَط العسيري", url: "https://ich.unesco.org/en/RL/al-qatt-al-asiri-female-traditional-interior-wall-decoration-in-asir-saudi-arabia-01261" },
      { label: "سعوديبيديا: منطقة عسير", url: "https://saudipedia.com/منطقة-عسير" }
    ],
    governorates: [
      "خميس مشيط", "بيشة", "النماص", "محايل", "تثليث", "رجال ألمع", "ظهران الجنوب",
      "سراة عبيدة", "أحد رفيدة", "بلقرن", "المجاردة", "تنومة", "طريب", "بارق",
      "البرك", "الحرجة", "الأمواه", "الفرشة"
    ]
  },
  "sa-tb": {
    name: "منطقة تبوك",
    capital: "تبوك",
    color: "#6565e0",
    heritage: "يجمع تراثها بين آثار تيماء والنقوش الثمودية والنبطية والآرامية، وبين تراث المدن الساحلية مثل الوجه وضباء. وتتميز عمارة الساحل باستخدام الحجر المرجاني والخشب والجير الأبيض وفتحات التهوية الصغيرة الملائمة للبيئة البحرية.",
    sources: [
      { label: "سعوديبيديا: منطقة تبوك", url: "https://saudipedia.com/منطقة-تبوك" },
      { label: "عمارة ساحل تبوك", url: "https://architsaudi.dasc.gov.sa/ar/design-guidelines/عِمَارَة-ساحل-تبوك" }
    ],
    governorates: ["الوجه", "ضباء", "تيماء", "أملج", "حقل", "البدع"]
  },
  "sa-ha": {
    name: "منطقة حائل",
    capital: "حائل",
    color: "#7c5d21",
    heritage: "يرتبط تراثها ببيئة النفود والواحات وطرق العبور القديمة. وتضم جبة والشويمس مجموعات كبيرة من النقوش الصخرية التي تصور الإنسان والحيوان وتحولات الحياة والبيئة على امتداد نحو عشرة آلاف سنة.",
    sources: [
      { label: "اليونسكو: الفن الصخري في حائل", url: "https://whc.unesco.org/en/list/1472" }
    ],
    governorates: ["بقعاء", "الحائط", "الغزالة", "الشنان", "السليمي", "سميراء", "الشملي", "موقق"]
  },
  "sa-hs": {
    name: "منطقة الحدود الشمالية",
    capital: "عرعر",
    color: "#257ad6",
    heritage: "يعكس تراثها حياة البادية والرعي ومحطات المياه القديمة. وكانت المنطقة جزءًا من درب زبيدة التاريخي للحج والتجارة، وتضم قرى أثرية مثل لينة وزُبالا ولوقة ودوقرة، كما يمثل خط التابلاين جانبًا من تراثها الصناعي والاجتماعي الحديث.",
    sources: [
      { label: "سعوديبيديا: منطقة الحدود الشمالية", url: "https://saudipedia.com/منطقة-الحدود-الشمالية" }
    ],
    governorates: ["رفحاء", "طريف", "العويقيلة"]
  },
  "sa-jz": {
    name: "منطقة جازان",
    capital: "جازان",
    color: "#ce397a",
    heritage: "يتنوع تراثها بتنوع الجبال والسهول والجزر؛ ففي المرتفعات يظهر الموروث الزراعي، ولا سيما زراعة البن والنباتات العطرية، وعلى الساحل وجزر فرسان يظهر تراث الصيد والملاحة. ومن معالمها قصر ومسجد النجدي وقلعة الدوسرية والقرية التراثية.",
    sources: [
      { label: "سعوديبيديا: منطقة جازان", url: "https://saudipedia.com/منطقة-جازان" }
    ],
    governorates: [
      "صبيا", "أبو عريش", "صامطة", "بيش", "جزر فرسان", "الدرب", "الحرث", "ضمد",
      "الريث", "الدائر", "أحد المسارحة", "العيدابي", "العارضة", "هروب", "فيفا", "الطوال"
    ]
  },
  "sa-nj": {
    name: "منطقة نجران",
    capital: "نجران",
    color: "#8bdc46",
    heritage: "تشتهر بالبيوت والقصور الطينية وأبراج المراقبة، وبالحرف التقليدية مثل الفخار والنسيج والخوص وصناعة الجنبية. وتضم موقع الأخدود ومنطقة حِمى الثقافية، التي تحفظ نقوشًا ورسومًا صخرية توثق أساليب الحياة وطرق القوافل خلال آلاف السنين.",
    sources: [
      { label: "اليونسكو: منطقة حِمى الثقافية", url: "https://whc.unesco.org/en/list/1619" },
      { label: "سعوديبيديا: منطقة نجران", url: "https://saudipedia.com/منطقة-نجران" }
    ],
    governorates: ["شرورة", "حبونا", "بدر الجنوب", "يدمة", "ثار", "خباش"]
  },
  "sa-ba": {
    name: "منطقة الباحة",
    capital: "الباحة",
    color: "#a7a4ed",
    heritage: "يتميز تراثها بالقرى الحجرية والحصون والأسواق الشعبية والمدرجات الزراعية الجبلية. وتعد قرية ذي عين، المشيدة فوق جبل من الحجارة البيضاء، من أبرز شواهد العمارة التقليدية والتكيف مع البيئة الجبلية.",
    sources: [
      { label: "سعوديبيديا: منطقة الباحة", url: "https://saudipedia.com/منطقة-الباحة" }
    ],
    governorates: ["بلجرشي", "المندق", "المخواة", "قلوة", "العقيق", "القرى", "بني حسن", "غامد الزناد", "الحجرة"]
  },
  "sa-jf": {
    name: "منطقة الجوف",
    capital: "سكاكا",
    color: "#b19054",
    heritage: "يعكس تراثها تاريخ الواحات وطرق القوافل والاستيطان القديم في شمال الجزيرة العربية. ومن معالمها قلعة مارد وقلعة زعبل وقصر كاف ومسجد عمر بن الخطاب، إلى جانب موروثها الزراعي الذي يرتبط اليوم بالزيتون والمحاصيل المتنوعة.",
    sources: [
      { label: "سعوديبيديا: منطقة الجوف", url: "https://saudipedia.com/منطقة-الجوف" }
    ],
    governorates: ["القريات", "دومة الجندل", "طبرجل", "صوير"]
  }
};

const heritageProfiles = {
  "sa-ri": {
    image: {
      src: "./assets/heritage/sa-ri.jpg",
      alt: "حي الطريف التاريخي في الدرعية بمنطقة الرياض",
      caption: "حي الطريف في الدرعية",
      credit: "xiquinhosilva · CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File%3AAt-Turaif_District.jpg"
    },
    details: [
      { title: "الخلفية التاريخية", text: "تمثل المنطقة قلب نجد التاريخي، وترتبط بتاريخ الدولة السعودية؛ ففيها الدرعية عاصمة الدولة السعودية الأولى، والرياض عاصمة الدولة السعودية الثانية ثم المملكة العربية السعودية الحديثة." },
      { title: "العمارة التقليدية", text: "تعتمد العمارة النجدية على الطين واللبن والخشب ومواد البيئة المحلية، وتتميز بالجدران السميكة والأفنية الداخلية وقلة الفتحات الخارجية. ومن مكونات المنزل المجلس وموقد القهوة ومستودع التمور والفناء المركزي." },
      { title: "المعالم والتراث الحي", text: "يبرز حي الطريف وقصر المصمك وقصر المربع والبلدات النجدية التراثية، إلى جانب العرضة النجدية التي تجمع الشعر والطبول وحمل السيوف بوصفها رمزًا ثقافيًا وطنيًا." }
    ],
    sources: []
  },
  "sa-mk": {
    image: {
      src: "./assets/heritage/sa-mk.jpg",
      alt: "مباني جدة التاريخية ذات الرواشين الخشبية في منطقة مكة المكرمة",
      caption: "جدة التاريخية والرواشين",
      credit: "xiquinhosilva · CC BY 4.0",
      source: "https://commons.wikimedia.org/wiki/File%3AOld_Jeddah.jpg"
    },
    details: [
      { title: "التراث الديني", text: "تقوم هوية المنطقة على المسجد الحرام والكعبة المشرفة وشعائر الحج والعمرة، وأسهم توافد المسلمين من أنحاء العالم في تنوع أسواقها ومهنها وأطعمتها ولهجاتها وأساليب الضيافة فيها." },
      { title: "العمارة الحجازية", text: "تتميز جدة التاريخية بالحجر المرجاني والمنازل العالية والرواشين الخشبية التي تسمح بدخول الهواء وتحفظ الخصوصية، وقد ارتبطت المدينة بدورها بوابةً بحرية للحجاج والتجارة على البحر الأحمر." },
      { title: "الأسواق والفنون", text: "كان سوق عكاظ قرب الطائف ملتقى للتجارة والشعر والخطابة والمنافسات الأدبية، وتشتهر المنطقة كذلك بفنون المزمار والخبيتي والمجس وبعض الفنون البحرية في مدن الساحل." }
    ],
    sources: [
      { label: "سعوديبيديا: سوق عكاظ", url: "https://saudipedia.com/سوق-عكاظ" }
    ]
  },
  "sa-md": {
    image: {
      src: "./assets/heritage/sa-md.jpg",
      alt: "المقابر النبطية المنحوتة في موقع الحجر بالعلا",
      caption: "موقع الحجر الأثري في العلا",
      credit: "Prof. Mortel · CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File%3ALandscape_at_Hegra_%28Madain_Salih%29%2C_Saudi_Arabia.jpg"
    },
    details: [
      { title: "التراث الإسلامي", text: "ترتبط المنطقة بالسيرة النبوية والهجرة والمسجد النبوي ومسجد قباء ومواقع تاريخية عديدة، لذا يمثل تراثها سجلًا مهمًا لتاريخ الإسلام ونشأة المجتمع الإسلامي في المدينة." },
      { title: "العلا والحِجر", text: "يضم موقع الحِجر، أكبر موقع محفوظ للحضارة النبطية جنوب البتراء، 111 مقبرة؛ منها 94 مقبرة بواجهات مزخرفة، إضافة إلى الآبار والنقوش القديمة." },
      { title: "الطرق والمدن القديمة", text: "كانت المدينة والعلا محطتين على طرق البخور والتجارة والحج. وتتميز بلدة العلا القديمة بمبانيها الطينية المتلاصقة وأزقتها الضيقة، وعُرفت المنطقة بحرف النجارة والحدادة والنحاس وصناعة السلال والسروج." }
    ],
    sources: [
      { label: "سعوديبيديا: آثار المدينة المنورة", url: "https://saudipedia.com/الآثار-في-منطقة-المدينة-المنورة" }
    ]
  },
  "sa-qs": {
    image: {
      src: "./assets/heritage/sa-qs.jpg",
      alt: "سوق التمور في بريدة بمنطقة القصيم",
      caption: "سوق التمور في بريدة",
      credit: "Suliman Al-Kurishan · CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File%3ADate_City_in_Buraidah_3.JPG"
    },
    details: [
      { title: "التراث التجاري", text: "كانت القصيم محطة لطرق الحج والتجارة، واشتهرت برجال العقيلات الذين نقلوا الإبل والخيول والأغذية والملابس بين نجد والعراق والشام ومصر، ويحفظ متحف العقيلات وثائق وأدوات من تلك الرحلات." },
      { title: "البلدات الطينية", text: "تظهر العمارة النجدية في بلدة الخبراء التراثية والمذنب وبيت البسام في عنيزة، وكانت المنازل تضم غالبًا فناءً داخليًا ومجالس وغرفًا لحفظ التمور والحبوب." },
      { title: "الأسواق والمأكولات", text: "يمثل سوق المسوكف نموذجًا للسوق النجدي التقليدي الذي يعرض الحرف والمنتجات الزراعية، ومن أشهر المأكولات القصيمية الكليجا والحنيني والجريش والقرصان والمطازيز." }
    ],
    sources: [
      { label: "سعوديبيديا: متحف العقيلات", url: "https://saudipedia.com/ماذا-يضم-متحف-العقيلات-في-منطقة-القصيم؟" },
      { label: "سعوديبيديا: بيت البسام", url: "https://saudipedia.com/بيت-البسام-التراثي" }
    ]
  },
  "sa-sh": {
    image: {
      src: "./assets/heritage/sa-sh.jpg",
      alt: "نخيل واحة الأحساء في المنطقة الشرقية",
      caption: "واحة الأحساء",
      credit: "Ron Mader · CC BY-SA 2.0",
      source: "https://commons.wikimedia.org/wiki/File%3AAl-ahsa-oasis.jpg"
    },
    details: [
      { title: "تراث الواحة والبحر", text: "يجمع تراث المنطقة بين الزراعة في واحة الأحساء والحياة البحرية في القطيف وتاروت ودارين. وتضم الواحة عيونًا وآبارًا وقنوات ومزارع ومباني تاريخية وملايين أشجار النخيل." },
      { title: "التراث البحري", text: "عُرفت موانئ دارين والقطيف وتاروت بالتجارة وصيد الأسماك والغوص على اللؤلؤ وصناعة السفن، وكانت دارين تستقبل التوابل والمنسوجات والسلع القادمة عبر الخليج." },
      { title: "العمارة والحرف", text: "استخدمت المباني القديمة الطين والجص والحجر البحري وجذوع النخيل، ومن أشهر الحرف صناعة البشوت الأحسائية والفخار ومنتجات سعف النخيل وشباك الصيد وأقفاص الأسماك." }
    ],
    sources: [
      { label: "سعوديبيديا: وسط دارين التاريخي", url: "https://saudipedia.com/وسط-دارين-التاريخي" },
      { label: "سعوديبيديا: العمارة التقليدية بالشرقية", url: "https://saudipedia.com/العمارة-التقليدية-في-المنطقة-الشرقية" }
    ]
  },
  "sa-as": {
    image: {
      src: "./assets/heritage/sa-as.jpg",
      alt: "القصور الحجرية في قرية رجال ألمع بمنطقة عسير",
      caption: "قرية رجال ألمع التراثية",
      credit: "Shijan Kaakkara · CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File%3ARojal_Heritage_Village_-_Rijal_Almaa_Heritage_Village%2C_Asir%2C_Saudi_Arabia-1.jpg"
    },
    details: [
      { title: "العمارة الجبلية", text: "تتميز قرى عسير بمبانٍ حجرية مرتفعة ومتلاصقة تلائم التضاريس والأمطار، ومن أشهرها قرية رجال ألمع ذات القصور متعددة الطوابق والمتحف الغني بالقطع التراثية." },
      { title: "فن القَط العسيري", text: "فن نسائي تقليدي يعتمد الألوان والزخارف الهندسية في تزيين الجدران الداخلية والأبواب والمجالس، وتوارثته نساء المنطقة وأدرجته اليونسكو ضمن التراث الثقافي غير المادي." },
      { title: "الحرف وأنماط المعيشة", text: "تشمل الحرف الأواني الخشبية والنسيج والملابس التقليدية والفخار ومنتجات سعف النخيل والفضيات، كما ترتبط هوية المنطقة بالزراعة الجبلية وتربية النحل وإنتاج العسل." }
    ],
    sources: [
      { label: "سعوديبيديا: قرية رجال التراثية", url: "https://saudipedia.com/قرية-رُجال-التراثية" },
      { label: "سعوديبيديا: حرف منطقة عسير", url: "https://saudipedia.com/الحرف-اليدوية-في-منطقة-عسير" }
    ]
  },
  "sa-tb": {
    image: {
      src: "./assets/heritage/sa-tb.jpg",
      alt: "بئر هداج التاريخية في تيماء بمنطقة تبوك",
      caption: "بئر هداج في تيماء",
      credit: "X1700 · CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File%3A%D8%A8%D8%A6%D8%B1_%D9%87%D8%AF%D8%A7%D8%AC.png"
    },
    details: [
      { title: "التاريخ والآثار", text: "كانت تبوك ملتقى لطرق التجارة والحج، وتبرز تيماء بسورها التاريخي وقصر الحمراء وبئر هداج، كما تنتشر نقوش ثمودية وآرامية ولحيانية ونبطية ويونانية." },
      { title: "تراث طرق الحج", text: "مر بالمنطقة طريق الحج الشامي، وأقيمت عليه قلاع وبرك ومنشآت لخدمة المسافرين والحجاج، ومنها قلعة المعظم ومحطتها المائية." },
      { title: "العمارة الساحلية", text: "استخدمت مدن الوجه وضباء الحجر المرجاني والخشب والجير الأبيض، مع فتحات تهوية صغيرة وأسقف تناسب المناخ البحري، وتأثرت بالصيد والتجارة والاتصال بموانئ البحر الأحمر." }
    ],
    sources: [
      { label: "سعوديبيديا: آثار منطقة تبوك", url: "https://saudipedia.com/الآثار-في-منطقة-تبوك" },
      { label: "سعوديبيديا: موقع المعظم", url: "https://saudipedia.com/المعظم-موقع-أثري" }
    ]
  },
  "sa-ha": {
    image: {
      src: "./assets/heritage/sa-ha.jpg",
      alt: "رسوم صخرية في موقعي جبة والشويمس بمنطقة حائل",
      caption: "الفنون الصخرية في حائل",
      credit: "هيئة التراث · CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File%3A%D9%85%D9%86_%D8%A2%D8%AB%D8%A7%D8%B1_%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%85_%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D9%8A%D8%A9_%D9%81%D9%8A_%D9%85%D9%88%D9%82%D8%B9_%D8%AC%D8%A8%D8%A9_%D9%88%D8%A7%D9%84%D8%B4%D9%88%D9%8A%D9%85%D8%B3_%D8%A8%D8%AD%D8%A7%D8%A6%D9%84.jpg"
    },
    details: [
      { title: "النقوش الصخرية", text: "تضم جبة والشويمس مجموعات كبيرة من الرسوم والنقوش التي توثق الإنسان والحيوان والصيد والقتال والحياة اليومية عبر نحو عشرة آلاف سنة، وهي مدرجة في قائمة التراث العالمي." },
      { title: "العمارة والمعالم", text: "تظهر العمارة التقليدية في البيوت والقصور والقلاع الطينية ذات الجدران السميكة والأفنية الداخلية، ومن أبرز معالمها قلعة أعيرف القائمة على مرتفع للمراقبة والحماية." },
      { title: "الحرف والتراث الاجتماعي", text: "عرفت حائل الفخار والأبواب الخشبية والأدوات النحاسية والمنتجات الجلدية والنسيج وتجهيز أدوات السفر، وارتبط تراثها بالكرم وشعر البادية وقصص الرحلات في صحراء النفود." }
    ],
    sources: [
      { label: "سعوديبيديا: أيقونات حائل البصرية", url: "https://saudipedia.com/الأيقونات-البصرية-في-منطقة-حائل" }
    ]
  },
  "sa-hs": {
    image: {
      src: "./assets/heritage/sa-hs.jpg",
      alt: "صورة تاريخية في آثار زبالا بمنطقة الحدود الشمالية",
      caption: "زبالا التاريخية عام 1935م",
      credit: "Joseph D. Mountain · ملكية عامة",
      source: "https://commons.wikimedia.org/wiki/File%3AAz_Zobala%2C_Saudi_Arabia%2C_1935_03.jpg"
    },
    details: [
      { title: "التراث الصحراوي", text: "يعكس تراث المنطقة حياة البادية والتنقل والرعي وتربية الإبل والأغنام، ويظهر في بيوت الشعر والسدو والأزياء والأطعمة المعتمدة على منتجات الألبان والحبوب." },
      { title: "درب زبيدة", text: "يمر بالمنطقة جزء من طريق الحج التاريخي بين العراق ومكة، وتضم زبالا بقايا حصن وبركًا وقنوات ومئات الآبار التي خدمت الحجاج والقوافل، كما كانت لينة محطة تجارية بين نجد والعراق." },
      { title: "التراث الصناعي الحديث", text: "يمثل خط أنابيب التابلاين جانبًا حديثًا من تاريخ المنطقة؛ فقد نشأت حول محطاته تجمعات سكانية وأسهم في تحولات اقتصادية واجتماعية منذ منتصف القرن العشرين." }
    ],
    sources: [
      { label: "سعوديبيديا: قرية زبالا الأثرية", url: "https://saudipedia.com/قرية-زبالا-الأثرية" }
    ]
  },
  "sa-jz": {
    image: {
      src: "./assets/heritage/sa-jz.jpg",
      alt: "القلعة العثمانية في جزيرة فرسان بمنطقة جازان",
      caption: "القلعة العثمانية في فرسان",
      credit: "هيئة التراث · CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File%3A%D8%A7%D9%84%D9%82%D9%84%D8%B9%D8%A9_%D8%A7%D9%84%D8%B9%D8%AB%D9%85%D8%A7%D9%86%D9%8A%D8%A9.jpg"
    },
    details: [
      { title: "تنوع البيئة", text: "يجمع تراث جازان بين الجبال والسهول والساحل وفرسان؛ فتتنوع أنماط المعيشة بين زراعة البن والحبوب والفواكه في المرتفعات والزراعة في السهول والصيد والتجارة البحرية." },
      { title: "العمارة", text: "من أنماطها العشة الساحلية الدائرية المخروطية المصنوعة من الخشب والقش، والمباني الحجرية البرجية في الجبال، ومنازل فرسان المبنية من الحجر المرجاني والجص والمتأثرة بتجارة اللؤلؤ." },
      { title: "الحرف والعادات", text: "تشتهر المنطقة بالفخار، ومنها التنور أو الميفا وجرار المياه، وبمنتجات النخيل والجلد والحلي. ويعد الفل والكادي جزءًا من الزينة والاحتفالات، ويستخدم المغش الحجري في إعداد أطباق محلية." }
    ],
    sources: [
      { label: "سعوديبيديا: عمارة جازان التقليدية", url: "https://saudipedia.com/العمارة-التقليدية-في-منطقة-جازان" },
      { label: "سعوديبيديا: حرف جازان اليدوية", url: "https://saudipedia.com/قائمة-الحرف-اليدوية-في-منطقة-جازان" }
    ]
  },
  "sa-nj": {
    image: {
      src: "./assets/heritage/sa-nj.jpg",
      alt: "العمارة الطينية التقليدية في منطقة نجران",
      caption: "العمارة الطينية في نجران",
      credit: "Richard Mortel · CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File%3AMud_architecture_of_Najran%2C_Saudi_Arabia.jpg"
    },
    details: [
      { title: "العمق التاريخي", text: "تقع نجران على طريق قديم للقوافل، وتضم الأخدود ومنطقة حِمى الثقافية التي تحفظ رسومًا ونقوشًا صخرية وآبارًا تاريخية وخطوطًا متعددة تركها المسافرون عبر آلاف السنين." },
      { title: "العمارة الطينية", text: "تشتهر بالقصور والبيوت الطينية المرتفعة ذات الزخارف البيضاء. وكان البناء يتم على مراحل بالطين والحجر والأخشاب المحلية، مع طبقات للأسقف تعزل الماء والحرارة." },
      { title: "الحرف", text: "تعد صناعة الجنبية من أشهر الحرف، وتشمل تشكيل النصل والمقبض والغمد وتزيينه بالفضة أو الذهب، إلى جانب الأواني الحجرية والفخار والنسيج ومنتجات النخيل." }
    ],
    sources: [
      { label: "سعوديبيديا: الجنبية في نجران", url: "https://saudipedia.com/الجنبية-في-نجران" }
    ]
  },
  "sa-ba": {
    image: {
      src: "./assets/heritage/sa-ba.jpg",
      alt: "قرية ذي عين الحجرية في منطقة الباحة",
      caption: "قرية ذي عين التراثية",
      credit: "Richard Mortel · CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File%3AThi_Ain_village%2C_Baha_Region%2C_Saudi_Arabia.jpg"
    },
    details: [
      { title: "القرى الزراعية", text: "يرتبط تراث الباحة بجبال السروات ومدرجاتها الزراعية وقراها الحجرية، وتبرز ذي عين القائمة فوق جبل أبيض بما تحمله من تاريخ زراعي وعيون مياه ومبانٍ متلاصقة." },
      { title: "العمارة", text: "بنيت المنازل والحصون والمساجد من الحجر المحلي، واستخدم خشب العرعر والزيتون البري والطلح والسدر في الأسقف والأبواب والأعمدة، مع ارتفاع المباني وقلة فتحاتها بما يلائم المناخ الجبلي." },
      { title: "الحرف والفنون", text: "تشمل الحرف السدو والنجارة والفخار ودباغة الجلود وصناعة الجنابي وعصر زيت السمسم وتربية النحل، وتشتهر المنطقة بالعرضة والسامر واللعب والمشاباني." }
    ],
    sources: [
      { label: "سعوديبيديا: عمارة الباحة التقليدية", url: "https://saudipedia.com/العمارة-التقليدية-في-منطقة-الباحة" },
      { label: "سعوديبيديا: حرف الباحة اليدوية", url: "https://saudipedia.com/الحرف-اليدوية-في-منطقة-الباحة" }
    ]
  },
  "sa-jf": {
    image: {
      src: "./assets/heritage/sa-jf.jpg",
      alt: "قلعة مارد التاريخية في دومة الجندل بمنطقة الجوف",
      caption: "قلعة مارد في دومة الجندل",
      credit: "وكالة الأنباء السعودية · CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File%3A%D9%82%D9%84%D8%B9%D8%A9_%D9%85%D8%A7%D8%B1%D8%AF_%D8%A7%D9%84%D8%A3%D8%AB%D8%B1%D9%8A%D8%A9.jpg"
    },
    details: [
      { title: "التراث الحضاري", text: "تعد الجوف من مناطق الاستقرار البشري القديمة بفضل الواحات وطرق التجارة، ومن آثارها أعمدة الرجاجيل وقلعة مارد وحي الدرع وقلعة زعبل ومسجد عمر بن الخطاب." },
      { title: "العمارة", text: "بنيت القرى القديمة من الحجر والطين، واتسمت بتقارب المنازل وضيق الأزقة وتظليلها، وكان المسجد غالبًا مركز الحي وتوزعت حوله المساكن والأسواق." },
      { title: "الزراعة والحرف", text: "ارتبط تراث المنطقة بالنخيل ثم الزيتون، وبالسدو والبسط والحبال والسلال والأدوات الخشبية ومنتجات سعف النخيل، ومن مأكولاتها البكيلة والمليحية وخبز الصاج." }
    ],
    sources: [
      { label: "سعوديبيديا: أعمدة الرجاجيل", url: "https://saudipedia.com/أعمدة-الرجاجيل" },
      { label: "سعوديبيديا: حرف منطقة الجوف", url: "https://saudipedia.com/الحرف-اليدوية-في-منطقة-الجوف" }
    ]
  }
};

const regionOrder = [
  "sa-ri", "sa-mk", "sa-md", "sa-qs", "sa-sh", "sa-as", "sa-tb",
  "sa-ha", "sa-hs", "sa-jz", "sa-nj", "sa-ba", "sa-jf"
];

const svg = document.querySelector("#saudi-map");
const tooltip = document.querySelector("#map-tooltip");
const stage = document.querySelector("#map-stage");
const detailCard = document.querySelector(".detail-card");
const buttonsContainer = document.querySelector("#region-buttons");
const heritageVisual = document.querySelector("#heritage-visual");
const heritageImage = document.querySelector("#heritage-image");
const heritageImageCaption = document.querySelector("#heritage-image-caption");
const heritageImageCredit = document.querySelector("#heritage-image-credit");
const heritageMore = document.querySelector("#heritage-more");
const heritageDetails = document.querySelector("#heritage-details");
const regionValueEl = document.querySelector("#region-value");
const regionValueDescEl = document.querySelector("#region-value-desc");
const regionValueIconEl = document.querySelector("#region-value-icon");
const regionSymbolsEl = document.querySelector("#region-symbols");
const discoverHeritageBtn = document.querySelector("#discover-heritage-btn");
const valuesGridEl = document.querySelector("#values-grid");
const regionModal = document.querySelector("#region-modal");
const modalValueIcon = document.querySelector("#modal-value-icon");
const modalRegionIndex = document.querySelector("#modal-region-index");
const modalRegionName = document.querySelector("#modal-region-name");
const modalRegionCapital = document.querySelector("#modal-region-capital");
const modalRegionValue = document.querySelector("#modal-region-value");
const modalRegionValueDesc = document.querySelector("#modal-region-value-desc");
const modalRegionSymbols = document.querySelector("#modal-region-symbols");
const modalRegionHeritage = document.querySelector("#modal-region-heritage");
const modalMoreBtn = document.querySelector("#modal-more-btn");
const numberFormatter = new Intl.NumberFormat("ar-SA", { useGrouping: false });
let selectedKey = "sa-ri";
let detailMotionTimer;
let activeValueKey = null;
let lastFocusedBeforeModal = null;

heritageImage.addEventListener("load", () => {
  heritageVisual.classList.remove("is-loading", "is-error");
  heritageVisual.classList.add("is-ready");
  heritageVisual.setAttribute("aria-busy", "false");
});

heritageImage.addEventListener("error", () => {
  heritageVisual.classList.remove("is-loading", "is-ready");
  heritageVisual.classList.add("is-error");
  heritageVisual.setAttribute("aria-busy", "false");
});

function allPoints(coordinates, bucket = []) {
  if (typeof coordinates?.[0] === "number") {
    bucket.push(coordinates);
    return bucket;
  }
  coordinates?.forEach((item) => allPoints(item, bucket));
  return bucket;
}

function geometryRings(geometry) {
  if (geometry.type === "Polygon") return geometry.coordinates;
  if (geometry.type === "MultiPolygon") return geometry.coordinates.flat();
  return [];
}

const SVG_NS = "http://www.w3.org/2000/svg";

function ensureValuePatterns() {
  if (typeof VALUES_DATA === "undefined") return;
  let defs = svg.querySelector("defs");
  if (!defs) {
    defs = document.createElementNS(SVG_NS, "defs");
    svg.appendChild(defs);
  }
  Object.entries(VALUES_DATA).forEach(([valueKey, value]) => {
    if (!value.icon || defs.querySelector(`#value-pattern-${valueKey}`)) return;
    const pattern = document.createElementNS(SVG_NS, "pattern");
    pattern.setAttribute("id", `value-pattern-${valueKey}`);
    pattern.setAttribute("patternUnits", "objectBoundingBox");
    pattern.setAttribute("patternContentUnits", "objectBoundingBox");
    pattern.setAttribute("width", "1");
    pattern.setAttribute("height", "1");
    const image = document.createElementNS(SVG_NS, "image");
    image.setAttribute("href", value.icon);
    image.setAttribute("x", "0");
    image.setAttribute("y", "0");
    image.setAttribute("width", "1");
    image.setAttribute("height", "1");
    image.setAttribute("preserveAspectRatio", "xMidYMid slice");
    pattern.appendChild(image);
    defs.appendChild(pattern);
  });
}

function buildMap() {
  if (!window.SAUDI_MAP?.features?.length) {
    stage.innerHTML = '<p class="map-error">تعذّر تحميل الخريطة.</p>';
    return;
  }

  ensureValuePatterns();

  const points = allPoints(window.SAUDI_MAP.features.map((feature) => feature.geometry.coordinates));
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const bounds = {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys)
  };

  const canvas = { width: 760, height: 700, padding: 20 };
  const scale = Math.min(
    (canvas.width - canvas.padding * 2) / (bounds.maxX - bounds.minX),
    (canvas.height - canvas.padding * 2) / (bounds.maxY - bounds.minY)
  );
  const drawnWidth = (bounds.maxX - bounds.minX) * scale;
  const drawnHeight = (bounds.maxY - bounds.minY) * scale;
  const offsetX = (canvas.width - drawnWidth) / 2;
  const offsetY = (canvas.height - drawnHeight) / 2;

  const project = ([x, y]) => [
    offsetX + (x - bounds.minX) * scale,
    offsetY + (bounds.maxY - y) * scale
  ];

  window.SAUDI_MAP.features.forEach((feature) => {
    const key = feature.properties["hc-key"];
    const data = regionData[key];
    if (!data) return;

    const pathData = geometryRings(feature.geometry)
      .map((ring) => ring.map((point, index) => {
        const [x, y] = project(point);
        return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
      }).join(" ") + " Z")
      .join(" ");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("class", "region-shape");
    path.setAttribute("data-key", key);
    path.setAttribute("tabindex", "0");
    path.setAttribute("role", "button");
    path.setAttribute("aria-label", `${data.name}، ${data.governorates.length} محافظات`);
    path.style.setProperty("--region-color", data.color);
    path.style.setProperty("--path-delay", `${160 + (regionOrder.indexOf(key) * 55)}ms`);
    const regionValueInfo = typeof REGION_VALUES !== "undefined" ? REGION_VALUES[key] : null;
    if (regionValueInfo) {
      path.style.setProperty("--region-fill", `url(#value-pattern-${regionValueInfo.valueKey})`);
    }

    path.addEventListener("click", (event) => {
      createTapRipple(event);
      selectRegion(key);
    });
    path.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRegion(key);
      }
    });
    path.addEventListener("pointerenter", (event) => showTooltip(event, key));
    path.addEventListener("pointermove", (event) => positionTooltip(event));
    path.addEventListener("pointerleave", hideTooltip);
    path.addEventListener("focus", () => showFocusedTooltip(path, key));
    path.addEventListener("blur", hideTooltip);

    svg.appendChild(path);
  });

  buildRegionButtons();
  selectRegion(selectedKey, false);
}

function buildRegionButtons() {
  regionOrder.forEach((key) => {
    const data = regionData[key];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "region-button";
    button.dataset.key = key;
    button.textContent = data.name.replace("منطقة ", "");
    button.style.setProperty("--button-color", data.color);
    button.addEventListener("click", () => selectRegion(key));
    buttonsContainer.appendChild(button);
  });
}

function selectRegion(key, announce = true) {
  const data = regionData[key];
  const profile = heritageProfiles[key];
  if (!data) return;
  selectedKey = key;

  document.querySelectorAll(".region-shape").forEach((shape) => {
    const isSelected = shape.dataset.key === key;
    shape.classList.toggle("is-selected", isSelected);
    shape.setAttribute("aria-pressed", String(isSelected));
  });

  document.querySelectorAll(".region-button").forEach((button) => {
    const isSelected = button.dataset.key === key;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
    if (isSelected && announce && window.innerWidth <= 880) {
      button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  });

  const index = regionOrder.indexOf(key) + 1;
  const total = data.governorates.length;
  document.documentElement.style.setProperty("--selected", data.color);
  document.querySelector("#region-index").textContent = `المنطقة ${numberFormatter.format(index).padStart(2, "٠")}`;
  document.querySelector("#region-count").textContent = `${numberFormatter.format(total)} محافظة`;
  document.querySelector("#region-name").textContent = data.name;
  document.querySelector("#region-capital").textContent = data.capital;
  document.querySelector("#governorates-total").textContent = numberFormatter.format(total);

  const valueInfo = typeof REGION_VALUES !== "undefined" ? REGION_VALUES[key] : null;
  if (valueInfo && regionValueEl && regionValueDescEl && regionSymbolsEl) {
    const valueMeta = VALUES_DATA[valueInfo.valueKey];
    const valueRest = valueMeta.title.replace("عزّنا ", "");
    regionValueEl.innerHTML = `<span class="rv-prefix">عزّنا</span> <span class="rv-value">${valueRest}</span>`;
    regionValueDescEl.textContent = valueInfo.shortDescription;
    regionSymbolsEl.replaceChildren(...valueInfo.symbols.map((symbol) => {
      const chip = document.createElement("span");
      chip.className = "symbol-chip";
      chip.innerHTML = `<i class="symbol-dot" aria-hidden="true"></i><span>${symbol}</span>`;
      return chip;
    }));
    if (regionValueIconEl && valueMeta.icon) {
      regionValueIconEl.src = valueMeta.icon;
      regionValueIconEl.alt = valueMeta.iconAlt || "";
    }
  }

  document.querySelector("#heritage-text").textContent = data.heritage;
  heritageMore.open = false;
  heritageDetails.replaceChildren(...profile.details.map((detail) => {
    const item = document.createElement("article");
    item.className = "heritage-detail";
    const title = document.createElement("h4");
    title.textContent = detail.title;
    const text = document.createElement("p");
    text.textContent = detail.text;
    item.append(title, text);
    return item;
  }));

  heritageVisual.classList.remove("is-ready", "is-error");
  heritageVisual.classList.add("is-loading");
  heritageVisual.setAttribute("aria-busy", "true");
  heritageImage.alt = profile.image.alt;
  heritageImageCaption.textContent = profile.image.caption;
  heritageImageCredit.textContent = `الصورة: ${profile.image.credit}`;
  heritageImageCredit.href = profile.image.source;
  if (heritageImage.src !== profile.image.src) {
    heritageImage.src = profile.image.src;
  } else if (heritageImage.complete && heritageImage.naturalWidth > 0) {
    heritageVisual.classList.remove("is-loading");
    heritageVisual.classList.add("is-ready");
    heritageVisual.setAttribute("aria-busy", "false");
  }

  const heritageLinks = document.querySelector("#heritage-links");
  const sources = [...data.sources, ...profile.sources]
    .filter((source, index, items) => items.findIndex((item) => item.url === source.url) === index);
  heritageLinks.replaceChildren(...sources.map((source) => {
    const link = document.createElement("a");
    link.className = "heritage-link";
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.label;
    return link;
  }));

  const list = document.querySelector("#governorates-list");
  list.replaceChildren(...data.governorates.map((name, index) => {
    const chip = document.createElement("span");
    chip.className = "governorate-chip";
    chip.textContent = name;
    chip.style.setProperty("--chip-delay", `${180 + (index * 28)}ms`);
    return chip;
  }));
  list.scrollTop = 0;

  if (announce) {
    window.clearTimeout(detailMotionTimer);
    detailCard.classList.remove("is-refreshing");
    void detailCard.offsetWidth;
    detailCard.classList.add("is-refreshing");
    detailMotionTimer = window.setTimeout(() => detailCard.classList.remove("is-refreshing"), 900);
    openRegionModal(key);
  }
}

function openRegionModal(key) {
  if (!regionModal) return;
  const data = regionData[key];
  if (!data) return;

  const index = regionOrder.indexOf(key) + 1;
  modalRegionIndex.textContent = `المنطقة ${numberFormatter.format(index).padStart(2, "٠")} — ${numberFormatter.format(data.governorates.length)} محافظة`;
  modalRegionName.textContent = data.name;
  modalRegionCapital.textContent = data.capital;
  modalRegionHeritage.textContent = data.heritage;

  const valueInfo = typeof REGION_VALUES !== "undefined" ? REGION_VALUES[key] : null;
  if (valueInfo) {
    const valueMeta = VALUES_DATA[valueInfo.valueKey];
    const valueRest = valueMeta.title.replace("عزّنا ", "");
    modalRegionValue.innerHTML = `<span class="rv-prefix">عزّنا</span> <span class="rv-value">${valueRest}</span>`;
    modalRegionValueDesc.textContent = valueInfo.shortDescription;
    modalRegionSymbols.replaceChildren(...valueInfo.symbols.map((symbol) => {
      const chip = document.createElement("span");
      chip.className = "symbol-chip";
      chip.innerHTML = `<i class="symbol-dot" aria-hidden="true"></i><span>${symbol}</span>`;
      return chip;
    }));
    if (valueMeta.icon) {
      modalValueIcon.src = valueMeta.icon;
      modalValueIcon.alt = valueMeta.iconAlt || "";
    }
  }

  document.documentElement.style.setProperty("--selected", data.color);
  lastFocusedBeforeModal = document.activeElement;
  regionModal.classList.add("is-open");
  regionModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  regionModal.querySelector(".region-modal-close").focus({ preventScroll: true });
}

function closeRegionModal() {
  if (!regionModal) return;
  regionModal.classList.remove("is-open");
  regionModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedBeforeModal instanceof HTMLElement) {
    lastFocusedBeforeModal.focus({ preventScroll: true });
  }
}

if (regionModal) {
  regionModal.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", closeRegionModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && regionModal.classList.contains("is-open")) {
      closeRegionModal();
    }
  });
}

if (modalMoreBtn) {
  modalMoreBtn.addEventListener("click", () => {
    closeRegionModal();
    heritageMore.open = true;
    window.setTimeout(() => {
      document.querySelector(".heritage-section").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  });
}

function createTapRipple(event) {
  const rect = stage.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "tap-ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  stage.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 760);
}

function tooltipValueLine(key) {
  const info = typeof REGION_VALUES !== "undefined" ? REGION_VALUES[key] : null;
  return info ? `<em>${VALUES_DATA[info.valueKey].title}</em>` : "";
}

function showTooltip(event, key) {
  const data = regionData[key];
  tooltip.innerHTML = `<strong>${data.name}</strong><span>${numberFormatter.format(data.governorates.length)} محافظات · المقر: ${data.capital}</span>${tooltipValueLine(key)}`;
  tooltip.classList.add("is-visible");
  tooltip.setAttribute("aria-hidden", "false");
  positionTooltip(event);
}

function positionTooltip(event) {
  const rect = stage.getBoundingClientRect();
  tooltip.style.left = `${event.clientX - rect.left}px`;
  tooltip.style.top = `${event.clientY - rect.top}px`;
}

function showFocusedTooltip(path, key) {
  const pathRect = path.getBoundingClientRect();
  const stageRect = stage.getBoundingClientRect();
  const data = regionData[key];
  tooltip.innerHTML = `<strong>${data.name}</strong><span>${numberFormatter.format(data.governorates.length)} محافظات · المقر: ${data.capital}</span>${tooltipValueLine(key)}`;
  tooltip.style.left = `${pathRect.left - stageRect.left + pathRect.width / 2}px`;
  tooltip.style.top = `${pathRect.top - stageRect.top + pathRect.height / 2}px`;
  tooltip.classList.add("is-visible");
  tooltip.setAttribute("aria-hidden", "false");
}

function hideTooltip() {
  tooltip.classList.remove("is-visible");
  tooltip.setAttribute("aria-hidden", "true");
}

if (discoverHeritageBtn) {
  discoverHeritageBtn.addEventListener("click", () => {
    heritageMore.open = true;
    document.querySelector(".heritage-section").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function buildValuesGrid() {
  if (!valuesGridEl || typeof VALUES_DATA === "undefined") return;
  const numerals = ["١", "٢", "٣", "٤", "٥", "٦"];
  valuesGridEl.replaceChildren(...Object.keys(VALUES_DATA).map((valueKey, index) => {
    const value = VALUES_DATA[valueKey];
    const valueRest = value.title.replace("عزّنا ", "");
    const card = document.createElement("button");
    card.type = "button";
    card.className = "value-card";
    card.dataset.valueKey = valueKey;
    card.setAttribute("role", "listitem");
    card.setAttribute("aria-pressed", "false");
    card.innerHTML = `
      <span class="vc-num" aria-hidden="true">٠${numerals[index]}</span>
      ${value.icon ? `<img class="vc-icon" src="${value.icon}" alt="" aria-hidden="true" loading="lazy" />` : ""}
      <span class="vc-prefix">عزّنا</span>
      <span class="vc-title">${valueRest}</span>
      <span class="vc-tagline">${value.tagline}</span>
    `;
    card.addEventListener("click", () => toggleValueHighlight(valueKey, card));
    return card;
  }));
}

function toggleValueHighlight(valueKey, card) {
  const isSame = activeValueKey === valueKey;
  valuesGridEl.querySelectorAll(".value-card").forEach((btn) => {
    btn.classList.remove("is-active");
    btn.setAttribute("aria-pressed", "false");
  });
  document.querySelectorAll(".region-shape").forEach((shape) => {
    shape.classList.remove("is-value-highlighted");
  });

  if (isSame) {
    activeValueKey = null;
    return;
  }

  activeValueKey = valueKey;
  card.classList.add("is-active");
  card.setAttribute("aria-pressed", "true");
  Object.entries(REGION_VALUES).forEach(([key, info]) => {
    if (info.valueKey === valueKey) {
      const shape = document.querySelector(`.region-shape[data-key="${key}"]`);
      if (shape) shape.classList.add("is-value-highlighted");
    }
  });
}

buildMap();
buildValuesGrid();
