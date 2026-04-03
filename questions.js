const QUESTIONS = [
  {
    id: 1,
    text: "Prokaryotická bunka:",
    options: [
      { id: "a", text: "môže obsahovať tylakoidy", correct: true },
      { id: "b", text: "môže obsahovať chloroplasty, napr. sinice", correct: false },
      { id: "c", text: "obsahuje prokaryotické ribozómy", correct: true },
      { id: "d", text: "má cytoplazmatickú membránu", correct: true },
      { id: "e", text: "má nukleoid", correct: true },
      { id: "f", text: "má lineárne molekuly DNA uložené v cytoplazme", correct: false },
      { id: "g", text: "má vnútorný priestor rozčlenený membránami na štrukturne a funkčné celky", correct: false },
      { id: "h", text: "má homologické kruhové chromozómy uložené voľne v cytoplazme", correct: false }
    ]
  },
  {
    id: 2,
    text: "Prokaryotické bunky nemajú:",
    options: [
      { id: "a", text: "plastidy", correct: true },
      { id: "b", text: "vnútorný priestor rozčlenený membránami na štrukturne a funkčné celky", correct: true },
      { id: "c", text: "ribozómy", correct: false },
      { id: "d", text: "diktyozómy", correct: true },
      { id: "e", text: "cytoplazmatickú membránu", correct: false },
      { id: "f", text: "centriol", correct: true },
      { id: "g", text: "jadierko", correct: true },
      { id: "h", text: "mitochondrie", correct: true }
    ]
  },
  {
    id: 3,
    text: "Ktoré štruktúry prokaryotickej bunky sú zodpovedné za uvoľňovanie energie:",
    options: [
      { id: "a", text: "tylakoidy", correct: false },
      { id: "b", text: "bičíky", correct: false },
      { id: "c", text: "ribozómy", correct: false },
      { id: "d", text: "mitochondrie", correct: false },
      { id: "e", text: "plazmatická membrána", correct: true },
      { id: "f", text: "jadro", correct: false },
      { id: "g", text: "diktyozómy", correct: false },
      { id: "h", text: "vakuoly", correct: false }
    ]
  },
  {
    id: 4,
    text: "Cytológia sa zaoberá štúdiom:",
    options: [
      { id: "a", text: "živých sústav na úrovni molekúl", correct: false },
      { id: "b", text: "mikroskopickej stavby živočíšnych tkanív", correct: false },
      { id: "c", text: "javov na úrovni bunky", correct: true },
      { id: "d", text: "živých mikroorganizmov", correct: false },
      { id: "e", text: "živých sústav na úrovni ich základnej štrukturnej a funkčnej jednotky", correct: true },
      { id: "f", text: "vírusov", correct: false },
      { id: "g", text: "tvaru a štruktúry buniek a bunkových organel", correct: true },
      { id: "h", text: "makromolekulových látok", correct: false }
    ]
  },
  {
    id: 5,
    text: "Za najmenší systém schopný samostatného života sa považuje:",
    options: [
      { id: "a", text: "vírus", correct: false },
      { id: "b", text: "bunka", correct: true },
      { id: "c", text: "kolónia", correct: false },
      { id: "d", text: "biopolymér", correct: false },
      { id: "e", text: "mnohobunkový organizmus", correct: false },
      { id: "f", text: "populácia", correct: false },
      { id: "g", text: "nukleoproteínová častica", correct: false },
      { id: "h", text: "indivíduum vyššieho rádu", correct: false }
    ]
  },
  {
    id: 6,
    text: "Vírusy sú:",
    options: [
      { id: "a", text: "extracelulárne parazity", correct: false },
      { id: "b", text: "schopné uchovávať genetickú informáciu", correct: true },
      { id: "c", text: "nebunkové organizmy", correct: true },
      { id: "d", text: "najjednoduchšie jednobunkové prokaryotické organizmy", correct: false },
      { id: "e", text: "z hľadiska organizácie najjednoduchšie živé sústavy", correct: true },
      { id: "f", text: "schopné autoreprodukcie", correct: false },
      { id: "g", text: "schopné trvalo existovať len ako parazity buniek", correct: true },
      { id: "h", text: "rozmnožovaním viazané len na živé bunky", correct: true }
    ]
  },
  {
    id: 7,
    text: "Podľa všeobecnej štruktúry rozlišujeme dva základné typy buniek:",
    options: [
      { id: "a", text: "rastlinné a živočíšne", correct: false },
      { id: "b", text: "jadrové a bezjadrové", correct: false },
      { id: "c", text: "diferencované a nediferencované", correct: false },
      { id: "d", text: "prokaryotické a eukaryotické", correct: true },
      { id: "e", text: "mikroskopické a submikroskopické", correct: false },
      { id: "f", text: "jednoduché a zložené", correct: false },
      { id: "g", text: "membránové a nemembránové", correct: false },
      { id: "h", text: "telové a pohlavné", correct: false }
    ]
  },
  {
    id: 8,
    text: "Pravé individuá vyššieho rádu:",
    options: [
      { id: "a", text: "sú spoločenstvá tzv. sociálneho hmyzu", correct: true },
      { id: "b", text: "sú napr. svorky vlkov", correct: false },
      { id: "c", text: "sú spoločenstvá jedincov, ktorí môžu existovať aj samostatne", correct: false },
      { id: "d", text: "sú obligátne spoločenstvá organizmov", correct: true },
      { id: "e", text: "majú jedincov trvalo anatomicky a funkčne diferencovaných", correct: true },
      { id: "f", text: "sú spoločenstvá organizmov, v ktorých je funkčná špecializácia jedincov zameniteľná", correct: false },
      { id: "g", text: "sú spoločenstvá organizmov, v ktorých je funkčná špecializácia jedincov nezameniteľná", correct: false },
      { id: "h", text: "majú jedincov prechodne anatomicky a funkčne diferencovaných", correct: false }
    ]
  },
  {
    id: 9,
    text: "Bunky určitého funkčného a štrukturného typu sa spájajú do:",
    options: [
      { id: "a", text: "orgánov – pri rastlinách", correct: false },
      { id: "b", text: "špecializovaných buniek", correct: false },
      { id: "c", text: "pletív – pri rastlinách", correct: true },
      { id: "d", text: "organizmov", correct: false },
      { id: "e", text: "indivíduí vyššieho rádu – pri živočíchoch", correct: false },
      { id: "f", text: "tkanív – pri živočíchoch", correct: true },
      { id: "g", text: "tkanivových kultúr – pri rastlinách", correct: false },
      { id: "h", text: "bunkových organel", correct: false }
    ]
  },
  {
    id: 10,
    text: "Základom cytoplazmatickej membrány je:",
    options: [
      { id: "a", text: "bielkovinová dvojvrstva", correct: false },
      { id: "b", text: "celulózová dvojvrstva", correct: false },
      { id: "c", text: "dvojvrstva lipidov, do ktorej sú ponorené bielkoviny", correct: true },
      { id: "d", text: "cytosol", correct: false },
      { id: "e", text: "cytoplazmatická matrix", correct: false },
      { id: "f", text: "fosfolipidová dvojvrstva", correct: true },
      { id: "g", text: "plazmaléma", correct: false },
      { id: "h", text: "bielkovinová dvojvrstva, do ktorej sú ponorené fosfolipidy", correct: false }
    ]
  },
  {
    id: 11,
    text: "K základným bunkovým povrchom eukaryotickej bunky patria:",
    options: [
      { id: "a", text: "plazmaléma", correct: true },
      { id: "b", text: "jadrová membrána", correct: false },
      { id: "c", text: "kutikula", correct: false },
      { id: "d", text: "pelikula", correct: false },
      { id: "e", text: "bunková stena", correct: true },
      { id: "f", text: "cytoplazmatická membrána", correct: true },
      { id: "g", text: "slizové puzdro", correct: false },
      { id: "h", text: "karyoléma", correct: false }
    ]
  },
  {
    id: 12,
    text: "Cytoplazmatická membrána:",
    options: [
      { id: "a", text: "je väčšinou jedinou biomembránou v prokaryotických bunkách", correct: true },
      { id: "b", text: "reguluje príjem látok do bunky", correct: true },
      { id: "c", text: "sa nazýva plazmaléma", correct: true },
      { id: "d", text: "sa nazýva karyoléma", correct: false },
      { id: "e", text: "patrí k bunkovým povrchom", correct: true },
      { id: "f", text: "obsahuje receptory na zachytávanie signálov", correct: true },
      { id: "g", text: "tvorí prostredie pre život a metabolickú aktivitu bunkových organel", correct: false },
      { id: "h", text: "zabezpečuje predovšetkým mechanickú ochranu bunky", correct: false }
    ]
  },
  {
    id: 13,
    text: "Biomembrány sú zložené:",
    options: [
      { id: "a", text: "z dvojvrstvy bielkovín a molekúl sacharidov", correct: false },
      { id: "b", text: "z dvojvrstvy lipidov a integrálnych a periférnych bielkovín", correct: true },
      { id: "c", text: "z dvojvrstvy fosfolipidov a dvojvrstvy sacharidov", correct: false },
      { id: "d", text: "z jednej vrstvy fosfolipidov a dvoch vrstiev molekúl bielkovín", correct: false },
      { id: "e", text: "z molekúl fosfolipidov, ktoré tvoria dvojitú vrstvu a molekúl bielkovín", correct: true },
      { id: "f", text: "z vonkajšej bielkovinovej a vnútornej lipidovej vrstvy", correct: false },
      { id: "g", text: "z integrálnych a periférnych lipidov a molekúl bielkovín", correct: false },
      { id: "h", text: "z dvojvrstvy fosfolipidov, do ktorej sú ponorené molekuly bielkovín", correct: true }
    ]
  },
  {
    id: 14,
    text: "Eukaryotické bunky na rozdiel od prokaryotických:",
    options: [
      { id: "a", text: "majú membránové organely", correct: true },
      { id: "b", text: "nemajú membránové organely", correct: false },
      { id: "c", text: "majú karyoléma", correct: true },
      { id: "d", text: "nemajú jadrovú membránu", correct: false },
      { id: "e", text: "majú kruhové jadrové chromozómy", correct: false },
      { id: "f", text: "sú spravidla menšie", correct: false },
      { id: "g", text: "majú vnútorný priestor rozčlenený membránami na štrukturne a funkčné celky", correct: true },
      { id: "h", text: "majú vlastný genetický materiál", correct: false }
    ]
  },
  {
    id: 15,
    text: "Živočíšne bunky na rozdiel od rastlinných buniek:",
    options: [
      { id: "a", text: "sú od vonkajšieho prostredia oddelené cytoplazmatickou membránou", correct: false },
      { id: "b", text: "obsahujú lyzozómy, ktoré zabezpečujú rozkladné procesy v bunke", correct: true },
      { id: "c", text: "obsahujú vakuoly", correct: false },
      { id: "d", text: "majú na povrchu semipermeabilnú bunkovú stenu", correct: false },
      { id: "e", text: "sú navzájom pospájané plazmodezmami", correct: false },
      { id: "f", text: "nemajú bunkovú stenu", correct: true },
      { id: "g", text: "majú tonoplast", correct: false },
      { id: "h", text: "môžu obsahovať myofibrily, tonofibrily, neurofibrily", correct: true }
    ]
  },
  {
    id: 16,
    text: "Cytoskelet bunky:",
    options: [
      { id: "a", text: "zabezpečuje priestorové rozloženie organel v bunke", correct: true },
      { id: "b", text: "predstavuje statickú kostru bunky", correct: false },
      { id: "c", text: "uplatňuje sa pri realizácii difúzie", correct: false },
      { id: "d", text: "uplatňuje sa pri realizácii fagocytózy", correct: true },
      { id: "e", text: "uplatňuje sa pri realizácii pinocytózy", correct: true },
      { id: "f", text: "uplatňuje sa pri realizácii osmózy", correct: false },
      { id: "g", text: "je zložený z nukleoproteínových vlákien", correct: false },
      { id: "h", text: "má pohybovú, mechanickú a podpornú funkciu", correct: true }
    ]
  },
  {
    id: 17,
    text: "Cytoskeletová sústava bunky:",
    options: [
      { id: "a", text: "patrí k membránovým štruktúram", correct: false },
      { id: "b", text: "uplatňuje sa pri realizácii všetkých druhov pohybov, ktoré bunka vykonáva", correct: true },
      { id: "c", text: "predstavuje dynamickú kostru bunky", correct: true },
      { id: "d", text: "predstavuje statickú kostru bunky", correct: false },
      { id: "e", text: "patrí k fibrilárnym štruktúram", correct: true },
      { id: "f", text: "patrí medzi neživé súčasti bunky", correct: false },
      { id: "g", text: "je tvorená mikrotubulmi, mikrofilamentami a intermediárnymi filamentami", correct: true },
      { id: "h", text: "je tvorená nukleoproteinovými vláknami", correct: false }
    ]
  },
  {
    id: 18,
    text: "Drsná forma endoplazmatického retikula:",
    options: [
      { id: "a", text: "sa podieľa na syntéze vitamínu D", correct: false },
      { id: "b", text: "sa podieľa na syntéze lipidov", correct: false },
      { id: "c", text: "je bez ribozómov", correct: false },
      { id: "d", text: "sa podieľa na syntéze bielkovín", correct: true },
      { id: "e", text: "sa podieľa na syntéze proteínov", correct: true },
      { id: "f", text: "zabezpečuje vnútrobunkový transport látok", correct: true },
      { id: "g", text: "zabezpečuje medzibunkový transport látok", correct: true },
      { id: "h", text: "nepatrí k membránovým organelám bunky", correct: false }
    ]
  },
  {
    id: 19,
    text: "Hladká forma endoplazmatického retikula:",
    options: [
      { id: "a", text: "je bez ribozómov", correct: true },
      { id: "b", text: "je viditeľná v optickom mikroskope", correct: false },
      { id: "c", text: "sa podieľa na syntéze lipidov", correct: true },
      { id: "d", text: "sa podieľa na syntéze vitamínu D", correct: true },
      { id: "e", text: "obsahuje predovšetkým hydrolytické enzýmy", correct: false },
      { id: "f", text: "má ribozómy iba na vnútornej membráne", correct: false },
      { id: "g", text: "sa podieľa na syntéze bielkovín", correct: false },
      { id: "h", text: "zabezpečuje vnútrobunkový transport niektorých látok", correct: true }
    ]
  },
  {
    id: 20,
    text: "Lyzozómy obsahujú enzýmy:",
    options: [
      { id: "a", text: "ktoré sa zúčastňujú na lytických procesoch v bunke", correct: true },
      { id: "b", text: "ktoré sa zúčastňujú na vnútrobunkovom trávení", correct: true },
      { id: "c", text: "typu polymeráz", correct: false },
      { id: "d", text: "tráviace a vylučovacie", correct: false },
      { id: "e", text: "ktoré upravujú látky syntetizované na ribozómoch", correct: false },
      { id: "f", text: "uložené v matrix", correct: false },
      { id: "g", text: "hydrolytické", correct: true },
      { id: "h", text: "ktoré štiepia látky cudzorodé alebo nepotrebné", correct: true }
    ]
  },
  {
    id: 21,
    text: "Mitochondrie sú:",
    options: [
      { id: "a", text: "prítomné len v eukaryotických bunkách", correct: true },
      { id: "b", text: "od cytoplazmy oddelené dvojitou membránou", correct: true },
      { id: "c", text: "energetickým centrom bunky", correct: true },
      { id: "d", text: "prítomné v niektorých prokaryotických bunkách", correct: false },
      { id: "e", text: "metabolicko-respiračným centrom bunky", correct: true },
      { id: "f", text: "syntetickým centrom bunky", correct: false },
      { id: "g", text: "prítomné vo väčšom počte v bunkách, kde je veľká spotreba energie", correct: true },
      { id: "h", text: "bunkové organely, ktorými sa živočíšne bunky odlišujú od rastlinných", correct: false }
    ]
  },
  {
    id: 22,
    text: "Bunkové jadro:",
    options: [
      { id: "a", text: "sa označuje ako karyon", correct: true },
      { id: "b", text: "sa označuje ako nucleus", correct: true },
      { id: "c", text: "sa skladá predovšetkým z RNA a bielkovín", correct: false },
      { id: "d", text: "eukaryotických buniek obsahuje kruhové chromozómy", correct: false },
      { id: "e", text: "obsahuje DNA a bielkoviny, ktoré tvoria chromatín", correct: true },
      { id: "f", text: "má na povrchu karyoléma", correct: true },
      { id: "g", text: "má na povrchu plazmaléma", correct: false },
      { id: "h", text: "má na povrchu dve biomembrány", correct: true }
    ]
  },
  {
    id: 23,
    text: "Ribozómy:",
    options: [
      { id: "a", text: "patria k membránovým organelám bunky", correct: false },
      { id: "b", text: "sú mikroskopické častice", correct: false },
      { id: "c", text: "sú submikroskopické častice", correct: true },
      { id: "d", text: "nepatria k membránovým organelám bunky", correct: true },
      { id: "e", text: "sú viditeľné len elektrónovým mikroskopom", correct: true },
      { id: "f", text: "sú napojené na hladké endoplazmatické retikulum", correct: false },
      { id: "g", text: "sú nukleoproteínové častice zložené z DNA a bielkovín", correct: false },
      { id: "h", text: "sú nukleoproteínové častice zložené z RNA a bielkovín", correct: true }
    ]
  },
  {
    id: 24,
    text: "Mitochondrie sú membránové organely, ktoré:",
    options: [
      { id: "a", text: "sú od cytoplazmy oddelené jednou membránou", correct: false },
      { id: "b", text: "sú od cytoplazmy oddelené dvojitou membránou", correct: true },
      { id: "c", text: "si syntetizujú svoje špecifické bielkoviny", correct: true },
      { id: "d", text: "majú v matrix molekuly DNA", correct: true },
      { id: "e", text: "majú v matrix enzýmový komplex pre Krebsov cyklus", correct: true },
      { id: "f", text: "sú vyplnené bunkovou šťavou", correct: false },
      { id: "g", text: "predstavujú dynamickú kostru bunky", correct: false },
      { id: "h", text: "majú na mitochondriálnych kristách lokalizované enzýmy dýchacieho reťazca", correct: true }
    ]
  },
  {
    id: 25,
    text: "Koľko biomembrán majú mitochondrie:",
    options: [
      { id: "a", text: "jednu", correct: false },
      { id: "b", text: "dve – jednu zrnitú a jednu hladkú", correct: false },
      { id: "c", text: "dve", correct: true },
      { id: "d", text: "jednu alebo dve podľa energetických nárokov bunky", correct: false },
      { id: "e", text: "dve – vonkajšiu zriasnenú a vnútornú hladkú", correct: false },
      { id: "f", text: "dve s mitochondriálnymi pórmi", correct: false },
      { id: "g", text: "jednu alebo dve podľa typu bunky", correct: false },
      { id: "h", text: "dve – jednu priepustnú a jednu polopriepustnú", correct: false }
    ]
  },
  {
    id: 26,
    text: "Ktoré procesy sa uskutočňujú v Golgiho aparáte:",
    options: [
      { id: "a", text: "rozklad látok", correct: false },
      { id: "b", text: "úprava látok, ktoré sa vylučujú z bunky", correct: true },
      { id: "c", text: "tvorba lyzozómov", correct: true },
      { id: "d", text: "tvorba pektínov na stavbu bunkových stien", correct: true },
      { id: "e", text: "oxidácia bielkovín", correct: false },
      { id: "f", text: "syntéza hormónov, polysacharidov a nukleových kyselín", correct: false },
      { id: "g", text: "bunkové oxidácie", correct: false },
      { id: "h", text: "tvorba inklúzií", correct: false }
    ]
  },
  {
    id: 27,
    text: "Diktyozómy sú súčasťou:",
    options: [
      { id: "a", text: "chloroplastov", correct: false },
      { id: "b", text: "Golgiho aparátu", correct: true },
      { id: "c", text: "lyzozómov", correct: false },
      { id: "d", text: "endoplazmatického retikula", correct: false },
      { id: "e", text: "prokaryotických buniek", correct: false },
      { id: "f", text: "eukaryotických buniek", correct: true },
      { id: "g", text: "cytoskeletu", correct: false },
      { id: "h", text: "mitochondrií", correct: false }
    ]
  },
  {
    id: 28,
    text: "Nukleolus:",
    options: [
      { id: "a", text: "je v cytoplazme a je zložený z RNA a bielkovín", correct: false },
      { id: "b", text: "je v jadre a skladá sa z DNA a bielkovín", correct: false },
      { id: "c", text: "je stála štruktúra jadra", correct: false },
      { id: "d", text: "sa nachádza len v eukaryotických bunkách", correct: true },
      { id: "e", text: "je jadierko a je miestom syntézy rRNA", correct: true },
      { id: "f", text: "je štruktúra, ktorá zaniká počas jadrového delenia", correct: true },
      { id: "g", text: "má na povrchu karyoléma", correct: false },
      { id: "h", text: "je uložený v cytoplazme prokaryotických buniek", correct: false }
    ]
  },
  {
    id: 29,
    text: "Jadro eukaryotických buniek:",
    options: [
      { id: "a", text: "obsahuje chromatín", correct: true },
      { id: "b", text: "obsahuje centriol", correct: false },
      { id: "c", text: "je riadiace centrum bunky", correct: true },
      { id: "d", text: "je reprodukčné centrum bunky", correct: true },
      { id: "e", text: "je vyplnené bunkovou šťavou", correct: false },
      { id: "f", text: "je pohybové centrum bunky", correct: false },
      { id: "g", text: "je submikroskopická štruktúra", correct: false },
      { id: "h", text: "sa vyskytuje vo všetkých eukaryotických bunkách okrem niektorých vysokošpecializovaných buniek", correct: true }
    ]
  },
  {
    id: 30,
    text: "Bunkové organely, ktorých základom sú biomembrány, nazývame:",
    options: [
      { id: "a", text: "organelové štruktúry bunky", correct: false },
      { id: "b", text: "cytoplazmatické organely", correct: false },
      { id: "c", text: "membránové štruktúry bunky", correct: true },
      { id: "d", text: "biomembrány bunky", correct: false },
      { id: "e", text: "štrukturne organely bunky", correct: false },
      { id: "f", text: "membránové organely bunky", correct: true },
      { id: "g", text: "eukaryotické organely", correct: false },
      { id: "h", text: "vezikuly", correct: false }
    ]
  },
  {
    id: 31,
    text: "Medzi membránové organely nepatria:",
    options: [
      { id: "a", text: "ribozómy", correct: true },
      { id: "b", text: "lyzozómy", correct: false },
      { id: "c", text: "bakteriálne jadro", correct: true },
      { id: "d", text: "mitochondrie", correct: false },
      { id: "e", text: "centriol", correct: true },
      { id: "f", text: "cytoskelet", correct: true },
      { id: "g", text: "jadierko", correct: true },
      { id: "h", text: "vakuoly", correct: false }
    ]
  },
  {
    id: 32,
    text: "Medzi membránové organely patria:",
    options: [
      { id: "a", text: "centrioly", correct: false },
      { id: "b", text: "centrozómy", correct: false },
      { id: "c", text: "ribozómy", correct: false },
      { id: "d", text: "chromozómy", correct: false },
      { id: "e", text: "Golgiho aparát", correct: true },
      { id: "f", text: "jadierka", correct: false },
      { id: "g", text: "lyzozómy", correct: true },
      { id: "h", text: "vakuoly", correct: true }
    ]
  },
  {
    id: 33,
    text: "K mitotickému aparátu bunky patria:",
    options: [
      { id: "a", text: "centroméra", correct: false },
      { id: "b", text: "chromozómy", correct: false },
      { id: "c", text: "astrosféra", correct: true },
      { id: "d", text: "centrioly", correct: true },
      { id: "e", text: "pólové telieska", correct: false },
      { id: "f", text: "deliace vretienko", correct: true },
      { id: "g", text: "chromatídy", correct: false },
      { id: "h", text: "jadierkový organizátor", correct: false }
    ]
  },
  {
    id: 34,
    text: "Chromozómy:",
    options: [
      { id: "a", text: "sú viditeľné len počas delenia bunky", correct: true },
      { id: "b", text: "sú viditeľné v interfáze", correct: false },
      { id: "c", text: "homologické majú rovnaký tvar a vždy rovnaké alely", correct: false },
      { id: "d", text: "majú centroméru v mieste druhotného zúženia", correct: false },
      { id: "e", text: "sú tvorené nukleoproteinovými vláknami", correct: true },
      { id: "f", text: "majú ramená, ktoré sa spájajú v mieste centroméry", correct: true },
      { id: "g", text: "v metafáze mitózy sú zložené z dvoch chromatíd, ktoré sú geneticky identické", correct: true },
      { id: "h", text: "v jadre eukaryotických buniek môžu byť aj kruhové", correct: false }
    ]
  },
  {
    id: 35,
    text: "Obsah vody v bunkách:",
    options: [
      { id: "a", text: "je v priemere 65%", correct: true },
      { id: "b", text: "sa počas života organizmu nemení", correct: false },
      { id: "c", text: "závisí od ich prostredia", correct: true },
      { id: "d", text: "závisí od orgánu, v ktorom sa nachádzajú", correct: true },
      { id: "e", text: "závisí od ich veku", correct: true },
      { id: "f", text: "ontogeneticky starších je väčší", correct: false },
      { id: "g", text: "ontogeneticky mladších je menší", correct: false },
      { id: "h", text: "je v priemere 10 – 40 % ich celkovej hmotnosti", correct: false }
    ]
  },
  {
    id: 36,
    text: "Endocytóza:",
    options: [
      { id: "a", text: "je napr. pinocytóza", correct: true },
      { id: "b", text: "je proces, pri ktorom dochádza k štrukturálnej prestavbe plazmatickej membrány", correct: true },
      { id: "c", text: "je pasívny transport látok do bunky", correct: false },
      { id: "d", text: "je aktívny transport látok do bunky", correct: true },
      { id: "e", text: "je aktívny transport látok von z bunky", correct: false },
      { id: "f", text: "nevyžaduje spotrebu energie", correct: false },
      { id: "g", text: "sa uskutočňuje na báze difúzie a osmózy", correct: false },
      { id: "h", text: "je napr. fagocytóza", correct: true }
    ]
  },
  {
    id: 37,
    text: "Rastlinná bunka v hypertonickom prostredí:",
    options: [
      { id: "a", text: "stráca vodu", correct: true },
      { id: "b", text: "nasáva vodu", correct: false },
      { id: "c", text: "sa nemení", correct: false },
      { id: "d", text: "podlieha plazmolýze", correct: true },
      { id: "e", text: "podlieha plazmoptýze", correct: false },
      { id: "f", text: "zväčšuje svoj objem", correct: false },
      { id: "g", text: "zmenšuje svoj vnútorný objem", correct: true },
      { id: "h", text: "stráca vodu a cytoplazmatická membrána sa oddeľuje od bunkovej steny", correct: true }
    ]
  },
  {
    id: 38,
    text: "Živočíšna bunka v hypotonickom prostredí:",
    options: [
      { id: "a", text: "sa zmrští", correct: false },
      { id: "b", text: "praská", correct: true },
      { id: "c", text: "podlieha plazmoptýze", correct: true },
      { id: "d", text: "podlieha plazmolýze", correct: false },
      { id: "e", text: "sa nemení", correct: false },
      { id: "f", text: "osmoticky nasáva vodu", correct: true },
      { id: "g", text: "zväčšuje svoj objem", correct: true },
      { id: "h", text: "stráca vodu", correct: false }
    ]
  },
  {
    id: 39,
    text: "Živočíšna bunka v hypertonickom prostredí:",
    options: [
      { id: "a", text: "sa zmrští", correct: true },
      { id: "b", text: "praská", correct: false },
      { id: "c", text: "stráca vodu", correct: true },
      { id: "d", text: "podlieha plazmolýze", correct: false },
      { id: "e", text: "podlieha plazmoptýze", correct: false },
      { id: "f", text: "aktívne transportuje molekuly vody von z bunky", correct: false },
      { id: "g", text: "nasáva vodu z prostredia s vyššou koncentráciou osmoticky aktívnych častíc", correct: false },
      { id: "h", text: "zmenšuje svoj objem", correct: true }
    ]
  },
  {
    id: 40,
    text: "Difúzia a osmóza majú spoločné to, že:",
    options: [
      { id: "a", text: "ide o aktívny transport látok", correct: false },
      { id: "b", text: "vyžadujú spotrebu energie", correct: false },
      { id: "c", text: "ide o pasívny transport látok", correct: true },
      { id: "d", text: "ide o pohyb molekúl z miesta nižšej koncentrácie na miesto s vyššou koncentráciou", correct: false },
      { id: "e", text: "dochádza pri tom k štrukturálnej prestavbe plazmatickej membrány", correct: false },
      { id: "f", text: "ide o pohyb molekúl z miesta vyššej koncentrácie na miesto s nižšou koncentráciou", correct: true },
      { id: "g", text: "nevyžadujú spotrebu energie", correct: true },
      { id: "h", text: "nedochádza pri tom k štrukturálnej prestavbe plazmatickej membrány", correct: true }
    ]
  },
  {
    id: 41,
    text: "Bunkovou bariérou, ktorá selektívne prepúšťa potrebné látky do bunky a von z bunky, je:",
    options: [
      { id: "a", text: "jadrová membrána", correct: false },
      { id: "b", text: "plazmaléma", correct: true },
      { id: "c", text: "bunková stena", correct: false },
      { id: "d", text: "cytoplazmatická membrána", correct: true },
      { id: "e", text: "slizové puzdro", correct: false },
      { id: "f", text: "plazmatická membrána", correct: true },
      { id: "g", text: "fibrilárna štruktúra na povrchu bunky", correct: false },
      { id: "h", text: "cytoskelet", correct: false }
    ]
  },
  {
    id: 42,
    text: "Pasívny transport látok cez plazmatickú membránu:",
    options: [
      { id: "a", text: "nevyžaduje spotrebu energie", correct: true },
      { id: "b", text: "je napr. prenos glukózy a aminokyselín proti koncentračnému spádu", correct: false },
      { id: "c", text: "zabezpečuje prenos látok proti koncentračnému spádu", correct: false },
      { id: "d", text: "je napr. difúzia", correct: true },
      { id: "e", text: "je napr. osmóza", correct: true },
      { id: "f", text: "prebieha v smere koncentračného spádu danej látky", correct: true },
      { id: "g", text: "nezávisí od koncentračného spádu danej látky", correct: false },
      { id: "h", text: "je typický pre prechod molekúl vody, plynov, etanolu", correct: true }
    ]
  },
  {
    id: 43,
    text: "Hypotonické prostredie:",
    options: [
      { id: "a", text: "je prostredie s nižšou koncentráciou osmoticky aktívnych častíc", correct: true },
      { id: "b", text: "je prostredie s vyššou koncentráciou osmoticky aktívnych častíc", correct: false },
      { id: "c", text: "podmieňuje plazmolýzu rastlinných buniek", correct: false },
      { id: "d", text: "spôsobuje plazmoptýzu živočíšnych buniek", correct: true },
      { id: "e", text: "spôsobuje lýzu červených krviniek", correct: true },
      { id: "f", text: "spôsobuje oddeľovanie plazmatickej membrány od bunkovej steny", correct: false },
      { id: "g", text: "je napr. destilovaná voda", correct: true },
      { id: "h", text: "podmieňuje osmotické nasávanie vody bunkou", correct: true }
    ]
  },
  {
    id: 44,
    text: "Transportné bielkoviny plazmatickej membrány:",
    options: [
      { id: "a", text: "prenášajú látky vo forme vezikúl v smere ich koncentračného spádu", correct: false },
      { id: "b", text: "sú univerzálne pre všetky látky", correct: false },
      { id: "c", text: "špecificky viažu transportované látky", correct: true },
      { id: "d", text: "špecificky prenášajú niektoré látky do bunky", correct: true },
      { id: "e", text: "sú dôležité pri endocytóze", correct: false },
      { id: "f", text: "sa uplatňujú pri difúzii a osmóze", correct: false },
      { id: "g", text: "prenášajú do bunky tie látky, ktorým ich štruktúra umožní prechod cez cytoplazmatickú membránu", correct: false },
      { id: "h", text: "sa uplatňujú pri sprostredkovanej difúzii", correct: true }
    ]
  },
  {
    id: 45,
    text: "Nesprávne odpovede sú:",
    options: [
      { id: "a", text: "cytoskelet zabezpečuje funkciu pohybu len u riasiniek prvokov", correct: true },
      { id: "b", text: "vakuoly majú dôležitú úlohu pri metabolických pochodoch bunky", correct: false },
      { id: "c", text: "mikrotubuly obsahujú tubulín", correct: false },
      { id: "d", text: "mikrofilamenty obsahujú pektín", correct: true },
      { id: "e", text: "medzi centromérami vzniká deliace vretienko z mikrotubulov", correct: true },
      { id: "f", text: "jedným z typov chloroplastov sú plastidy", correct: true },
      { id: "g", text: "mikrofilamenty skracujú a mikrotubuly len naťahujú bunku", correct: true },
      { id: "h", text: "tylakoidy sa vyskytujú predovšetkým v chlorofyle a", correct: true }
    ]
  },
  {
    id: 46,
    text: "Difúziou môžu cez biomembránu prechádzať:",
    options: [
      { id: "a", text: "do bunky všetky látky", correct: false },
      { id: "b", text: "z bunky všetky látky", correct: false },
      { id: "c", text: "plyny", correct: true },
      { id: "d", text: "etanol", correct: true },
      { id: "e", text: "niektoré ióny", correct: true },
      { id: "f", text: "tie látky, ktorým ich štruktúra umožní prechod plazmatickou membránou", correct: true },
      { id: "g", text: "voda", correct: true },
      { id: "h", text: "niektoré látky proti smeru koncentračného spádu", correct: false }
    ]
  },
  {
    id: 47,
    text: "Rýchlosť jednoduchej difúzie cez cytoplazmatickú membránu závisí:",
    options: [
      { id: "a", text: "od štrukturálnej prestavby plazmatickej membrány", correct: false },
      { id: "b", text: "od množstva energie vo forme ATP", correct: false },
      { id: "c", text: "od aktivity transportných bielkovín", correct: false },
      { id: "d", text: "od teploty", correct: true },
      { id: "e", text: "od koncentračného spádu", correct: true },
      { id: "f", text: "od aktivity cytoskeletu bunky", correct: false },
      { id: "g", text: "od enzýmovej aktivity membrány", correct: false },
      { id: "h", text: "od stupňa diferenciácie bunky", correct: false }
    ]
  },
  {
    id: 48,
    text: "Bunka vytvára pseudopódie:",
    options: [
      { id: "a", text: "pri pinocytóze", correct: false },
      { id: "b", text: "pomocou cytoskeletu", correct: true },
      { id: "c", text: "pri fagocytóze", correct: true },
      { id: "d", text: "pri osmóze", correct: false },
      { id: "e", text: "pomocou mikrofilamentov", correct: true },
      { id: "f", text: "pričom uzatvára fagocytované čiastočky do fagocytovej vakuoly", correct: true },
      { id: "g", text: "pri exocytóze", correct: false },
      { id: "h", text: "pri pasívnom príjme látok do bunky", correct: false }
    ]
  },
  {
    id: 49,
    text: "Aktívny transport cez cytoplazmatickú membránu umožňuje prenos:",
    options: [
      { id: "a", text: "vody", correct: false },
      { id: "b", text: "plynov", correct: false },
      { id: "c", text: "etanolu", correct: false },
      { id: "d", text: "iónov vápnika do svalovej bunky", correct: true },
      { id: "e", text: "látok pomocou transportných bielkovín", correct: true },
      { id: "f", text: "iónov sodíka z bunky", correct: true },
      { id: "g", text: "iónov draslíka do bunky", correct: true },
      { id: "h", text: "látok spravidla proti koncentračnému spádu", correct: true }
    ]
  },
  {
    id: 50,
    text: "Bunkový cyklus:",
    options: [
      { id: "a", text: "sa označuje ako regeneračná doba bunky", correct: false },
      { id: "b", text: "je naprogramovaný geneticky", correct: true },
      { id: "c", text: "sa pri nedostatku živín v prostredí zastaví v S – fáze", correct: false },
      { id: "d", text: "je kontrolovaný mechanizmami pôsobiacimi hlavne v G₁ – fáze", correct: true },
      { id: "e", text: "môže byť narušený niektorými vírusmi", correct: true },
      { id: "f", text: "zahŕňa prípravné fázy G₁ - postmitotickú a G₂ - predmitotickú", correct: true },
      { id: "g", text: "prokaryotických buniek má G₁, S, G₂ a M – fázu", correct: false },
      { id: "h", text: "zahŕňa prípravné fázy G₁ - predmitotickú a G₂ - postmitotickú", correct: false }
    ]
  },
  {
    id: 51,
    text: "Poradie všetkých fáz bunkového cyklu je nasledujúce:",
    options: [
      { id: "a", text: "karyokinéza a cytokinéza", correct: false },
      { id: "b", text: "profáza, metafáza, anafáza, telofáza", correct: false },
      { id: "c", text: "heterotypické a homeotypické delenie", correct: false },
      { id: "d", text: "G₁, S, G₂, M", correct: true },
      { id: "e", text: "predmitotická fáza, S - fáza, postmitotická fáza, M- fáza", correct: false },
      { id: "f", text: "amitóza, mitóza, meióza", correct: false },
      { id: "g", text: "interfáza a M - fáza", correct: true },
      { id: "h", text: "postmitotická fáza, S – fáza, predmitotická fáza, M - fáza", correct: true }
    ]
  },
  {
    id: 52,
    text: "Generačná doba bunky:",
    options: [
      { id: "a", text: "je daná geneticky", correct: true },
      { id: "b", text: "je pre rozličné bunky rovnaká", correct: false },
      { id: "c", text: "je časové trvanie bunkového cyklu", correct: true },
      { id: "d", text: "je pre rozličné typy buniek rozdielna", correct: true },
      { id: "e", text: "nezávisí od množstva živín v prostredí", correct: false },
      { id: "f", text: "je časové trvanie interfázy", correct: false },
      { id: "g", text: "je časové trvanie regenerácie bunky", correct: false },
      { id: "h", text: "je ovplyvnená množstvom vhodných živín v prostredí", correct: true }
    ]
  },
  {
    id: 53,
    text: "Priebeh bunkového cyklu a jeho reguláciu možno dobre študovať:",
    options: [
      { id: "a", text: "na bunkách pestovaných in vivo", correct: false },
      { id: "b", text: "na vírusoch", correct: false },
      { id: "c", text: "na baktériách pestovaných in vivo", correct: false },
      { id: "d", text: "na bunkách pestovaných in vitro", correct: true },
      { id: "e", text: "na nádorových bunkách", correct: false },
      { id: "f", text: "na bunkách pestovaných mimo živého organizmu na živných pôdach", correct: true },
      { id: "g", text: "na bunkových a pletivových kultúrach", correct: true },
      { id: "h", text: "na diferencovaných bunkách", correct: false }
    ]
  },
  {
    id: 54,
    text: "Interfáza:",
    options: [
      { id: "a", text: "je obdobie, keď sa bunka nedelí", correct: true },
      { id: "b", text: "zahŕňa mitózu", correct: false },
      { id: "c", text: "sa označuje ako bunkový cyklus", correct: false },
      { id: "d", text: "sa označuje ako generačná doba bunky", correct: false },
      { id: "e", text: "zahŕňa profázu, metafázu, anafázu, telofázu", correct: false },
      { id: "f", text: "zahŕňa postmitotickú fázu, S – fázu a predmitotickú fázu", correct: true },
      { id: "g", text: "zahŕňa hlavný kontrolný uzol celého bunkového cyklu", correct: true },
      { id: "h", text: "je rastová fáza bunkového cyklu", correct: true }
    ]
  },
  {
    id: 55,
    text: "Pri nedostatku živín v prostredí sa generačná doba bunky:",
    options: [
      { id: "a", text: "nemení", correct: false },
      { id: "b", text: "zrýchľuje", correct: false },
      { id: "c", text: "predlžuje", correct: true },
      { id: "d", text: "zrýchľuje za vzniku nádorových buniek", correct: false },
      { id: "e", text: "skráti, pretože sa zastavuje priebeh G₁ fázy", correct: false },
      { id: "f", text: "nemení, pretože sa zastavuje priebeh bunkového cyklu", correct: false },
      { id: "g", text: "predlžuje, pretože sa zastavuje nielen priebeh G₁ – fázy, ale aj celého bunkového cyklu", correct: true },
      { id: "h", text: "zrýchľuje, pretože bunka urýchlene prechádza do M - fázy", correct: false }
    ]
  },
  {
    id: 56,
    text: "G₁ – fáza bunkového cyklu:",
    options: [
      { id: "a", text: "sa označuje ako predmitotická", correct: false },
      { id: "b", text: "sa označuje ako postmitotická", correct: true },
      { id: "c", text: "začína v okamihu vzniku dcérskej bunky", correct: true },
      { id: "d", text: "začína v okamihu zániku dcérskej bunky", correct: false },
      { id: "e", text: "je začiatkom vlastného bunkového cyklu dcérskej bunky", correct: true },
      { id: "f", text: "je charakterizovaná rastovými procesmi", correct: true },
      { id: "g", text: "z hľadiska časového trvania je najkratšia", correct: false },
      { id: "h", text: "z hľadiska časového trvania je najvariabilnejšia", correct: true }
    ]
  },
  {
    id: 57,
    text: "V G₁ – fáze:",
    options: [
      { id: "a", text: "prebieha syntéza bielkovín", correct: true },
      { id: "b", text: "sa nachádza hlavný kontrolný uzol bunkového cyklu", correct: true },
      { id: "c", text: "prebieha zdvojenie jadrových chromozómov", correct: false },
      { id: "d", text: "sa bunka pripravuje na rozdelenie jadra", correct: false },
      { id: "e", text: "sa nachádza kontrolný uzol karyokinézy", correct: false },
      { id: "f", text: "sa nachádza kontrolný uzol cytokinézy", correct: false },
      { id: "g", text: "dochádza k zmnoženiu bunkových štruktúr", correct: true },
      { id: "h", text: "neprebieha zdvojenie jadrových chromozómov", correct: true }
    ]
  },
  {
    id: 58,
    text: "Sesterské chromatídy:",
    options: [
      { id: "a", text: "vznikajú replikáciou DNA v S-fáze", correct: true },
      { id: "b", text: "sú homologické", correct: false },
      { id: "c", text: "sú spojené centromérou", correct: true },
      { id: "d", text: "sa rozchádzajú v anafáze mitózy", correct: true },
      { id: "e", text: "sa rozchádzajú v anafáze I. meiotického delenia", correct: false },
      { id: "f", text: "sa rozchádzajú v anafáze II. meiotického delenia", correct: true },
      { id: "g", text: "sa rozchádzajú v anafáze heterotypického delenia", correct: false },
      { id: "h", text: "sú geneticky identické", correct: true }
    ]
  },
  {
    id: 59,
    text: "Označte nesprávnu odpoveď:",
    options: [
      { id: "a", text: "v priebehu profázy sa chromozómy skracujú a hrubnú", correct: false },
      { id: "b", text: "v metafáze sa chromozómy zoraďujú do centrálnej roviny a priečne sa rozdeľujú v centromére", correct: true },
      { id: "c", text: "v S – fáze bunkového cyklu prebieha syntéza DNA", correct: false },
      { id: "d", text: "v profáze sa centrozóm rozdelí a obidva nové sa presunú oproti sebe v centre jadra", correct: true },
      { id: "e", text: "v priebehu telofázy zanikajú vlákna deliaceho vretienka", correct: false },
      { id: "f", text: "na začiatku anafázy sa v blízkosti každého centrozómu sústredí diploidný počet chromozómov", correct: true },
      { id: "g", text: "G₁ – fáza sa nazýva hlavný kontrolný uzol bunkového cyklu", correct: true },
      { id: "h", text: "v profáze I sa chromatídy homologických chromozómov prekrížia a vymenia si navzájom geneticky materiál", correct: false }
    ]
  },
  {
    id: 60,
    text: "Bielkoviny, ktoré sa syntetizujú v G₁ – fáze sa využívajú najmä:",
    options: [
      { id: "a", text: "na tvorbu mitotického aparátu", correct: false },
      { id: "b", text: "na tvorbu bunkových organel", correct: true },
      { id: "c", text: "na tvorbu jednochromatídových chromozómov", correct: false },
      { id: "d", text: "na rastové procesy v bunke", correct: true },
      { id: "e", text: "na znásobenie bunkových štruktúr", correct: true },
      { id: "f", text: "na tvorbu zásobných štruktúr", correct: false },
      { id: "g", text: "na tvorbu deliaceho vretienka", correct: false },
      { id: "h", text: "na tvorbu plazmatickej platničky", correct: false }
    ]
  },
  {
    id: 61,
    text: "Kľúčovým procesom S – fázy je:",
    options: [
      { id: "a", text: "syntéza DNA", correct: true },
      { id: "b", text: "zdvojenie jednochromatídových chromozómov", correct: true },
      { id: "c", text: "rozdelenie jadrových chromozómov", correct: false },
      { id: "d", text: "regenerácia jadra", correct: false },
      { id: "e", text: "zdvojenie bunkových organel", correct: false },
      { id: "f", text: "zdvojenie dvojchromatídových chromozómov", correct: false },
      { id: "g", text: "znásobenie genetického materiálu bunky", correct: true },
      { id: "h", text: "zdvojenie počtu homologických chromozómov", correct: false }
    ]
  },
  {
    id: 62,
    text: "Karyokinéza a cytokinéza prebiehajú:",
    options: [
      { id: "a", text: "v interfáze bunkového cyklu", correct: false },
      { id: "b", text: "v M – fáze bunkového cyklu", correct: true },
      { id: "c", text: "v telofáze mitózy", correct: true },
      { id: "d", text: "v G₂ – fáze bunkového cyklu", correct: false },
      { id: "e", text: "v telofáze II", correct: true },
      { id: "f", text: "v metafáze bunkového cyklu", correct: false },
      { id: "g", text: "v postmitotickej fáze", correct: false },
      { id: "h", text: "v telofáze I", correct: true }
    ]
  },
  {
    id: 63,
    text: "Do interfázy bunkového cyklu patrí:",
    options: [
      { id: "a", text: "G₂ – fáza", correct: true },
      { id: "b", text: "G₁ – fáza", correct: true },
      { id: "c", text: "M – fáza", correct: false },
      { id: "d", text: "meióza", correct: false },
      { id: "e", text: "mitóza", correct: false },
      { id: "f", text: "predmitotická G₁ - fáza", correct: false },
      { id: "g", text: "S – fáza", correct: true },
      { id: "h", text: "postmitotická G₂ – fáza", correct: false }
    ]
  },
  {
    id: 64,
    text: "Chemické regulačné mechanizmy bunkového cyklu:",
    options: [
      { id: "a", text: "môžu mať stimulačný účinok na bunkové delenie", correct: true },
      { id: "b", text: "môžu mať inhibičný účinok na bunkové delenie", correct: true },
      { id: "c", text: "sú napr. cytostatiká", correct: true },
      { id: "d", text: "sú účinné najmä v G₁ – fáze", correct: true },
      { id: "e", text: "sú účinné najmä v M – fáze, kde je hlavný kontrolný uzol bunkového cyklu", correct: false },
      { id: "f", text: "sú napr. vírusy, ktoré môžu spôsobiť nekoordinované delenie buniek", correct: false },
      { id: "g", text: "podmieňujú funkčné a tvarové odlíšenie buniek", correct: false },
      { id: "h", text: "sú účinné najmä na bunky, ktoré majú geneticky trvalo zablokovanú schopnosť sa deliť", correct: false }
    ]
  },
  {
    id: 65,
    text: "Reguláciu bunkového cyklu môžu ovplyvniť:",
    options: [
      { id: "a", text: "cytostatiká, ktoré spomaľujú alebo zastavujú bunkové delenie", correct: true },
      { id: "b", text: "cytostatiká, ktoré stimulujú bunkové delenie", correct: false },
      { id: "c", text: "vonkajšie faktory, napr. teplota", correct: true },
      { id: "d", text: "niektoré vírusy, za vzniku rakoviny", correct: true },
      { id: "e", text: "inhibítory – napr. kolchicín", correct: true },
      { id: "f", text: "rastové regulátory, ktoré sa môžu aplikovať aj zámerne", correct: true },
      { id: "g", text: "vonkajšie faktory, napr. dostatok živín v prostredí", correct: true },
      { id: "h", text: "rastové hormóny", correct: true }
    ]
  },
  {
    id: 66,
    text: "Stimulujúci účinok na bunkový cyklus:",
    options: [
      { id: "a", text: "majú cytostatiká", correct: false },
      { id: "b", text: "má napr. kolchicín", correct: false },
      { id: "c", text: "majú niektoré inhibítory rastu", correct: false },
      { id: "d", text: "má hlavný kontrolný uzol bunkového cyklu v G₁ – fáze", correct: false },
      { id: "e", text: "majú niektoré vírusy", correct: true },
      { id: "f", text: "majú rastové hormóny", correct: true },
      { id: "g", text: "majú niektoré rastové regulátory", correct: true },
      { id: "h", text: "majú antibiotiká", correct: false }
    ]
  },
  {
    id: 67,
    text: "V profáze mitózy:",
    options: [
      { id: "a", text: "sa centriol delí a každá polovica putuje na opačný pól jadra", correct: false },
      { id: "b", text: "sú chromozómy dvojchromatídové", correct: true },
      { id: "c", text: "sú chromozómy jednochromatídové", correct: false },
      { id: "d", text: "sa chromozómy skracujú", correct: true },
      { id: "e", text: "sa chromozómy špiralizujú", correct: true },
      { id: "f", text: "zaniká jadrová membrána", correct: true },
      { id: "g", text: "sa chromozómy dešpiralizujú", correct: false },
      { id: "h", text: "sa centrozómy oddelia a každý putuje na opačný pól bunky", correct: true }
    ]
  },
  {
    id: 68,
    text: "V metafáze mitózy:",
    options: [
      { id: "a", text: "sú chromozómy dvojchromatídové", correct: true },
      { id: "b", text: "sú chromozómy jednochromatídové", correct: false },
      { id: "c", text: "sa jednochromatídové chromozómy zdvojujú na dvojchromatídové", correct: false },
      { id: "d", text: "sú chromozómy zoradené do centrálnej roviny", correct: true },
      { id: "e", text: "sa chromozómy ďalej dešpiralizujú", correct: false },
      { id: "f", text: "sa rozchádzajú dcérske chromatídy na protiľahlé póly bunky", correct: false },
      { id: "g", text: "vrcholí špiralizácia chromozómov", correct: true },
      { id: "h", text: "sa mikrotubuly deliaceho vretienka upínajú na centroméru každého chromozómu", correct: true }
    ]
  },
  {
    id: 69,
    text: "V telofáze mitózy:",
    options: [
      { id: "a", text: "sa chromozómy postupne špiralizujú", correct: false },
      { id: "b", text: "sa chromozómy postupne dešpiralizujú", correct: true },
      { id: "c", text: "sú chromozómy dvojchromatídové", correct: false },
      { id: "d", text: "sú chromozómy jednochromatídové", correct: true },
      { id: "e", text: "zaniká deliace vretienko", correct: true },
      { id: "f", text: "sa rozpúšťa jadrová membrána", correct: false },
      { id: "g", text: "zaniká jadierko", correct: true },
      { id: "h", text: "sa obnovuje štruktúra jadra", correct: true }
    ]
  },
  {
    id: 70,
    text: "Cytokinéza:",
    options: [
      { id: "a", text: "je veda, ktorá skúma tvar a štruktúru buniek", correct: false },
      { id: "b", text: "sa začína a končí rozdelením jadra na dve dcérske", correct: false },
      { id: "c", text: "je pozdĺžne rozdelenie bunky a jadra", correct: false },
      { id: "d", text: "podmieňuje vznik viacjadrových buniek", correct: false },
      { id: "e", text: "je súčasťou interfázy", correct: false },
      { id: "f", text: "je obdobie rastu bunky", correct: false },
      { id: "g", text: "označuje pohyby bunky", correct: false },
      { id: "h", text: "je rozdelenie materskej bunky na dve samostatné dcérske bunky", correct: true }
    ]
  },
  {
    id: 71,
    text: "Telové bunky živočíchov:",
    options: [
      { id: "a", text: "sú haploidné", correct: false },
      { id: "b", text: "sú diploidné", correct: true },
      { id: "c", text: "majú 2n chromozómov", correct: true },
      { id: "d", text: "sú geneticky homologické", correct: false },
      { id: "e", text: "sú geneticky identické", correct: true },
      { id: "f", text: "sú geneticky odlišné", correct: false },
      { id: "g", text: "diferencované sú geneticky odlišné", correct: false },
      { id: "h", text: "vznikajú heterotypickým a homeotypickým delením", correct: false }
    ]
  },
  {
    id: 72,
    text: "Bivalenty vznikajú:",
    options: [
      { id: "a", text: "v profáze homeotypického delenia meiózy", correct: false },
      { id: "b", text: "v anafáze heterotypického delenia meiózy", correct: false },
      { id: "c", text: "v profáze heterotypického delenia meiózy", correct: true },
      { id: "d", text: "párovaním homologických chromozómov", correct: true },
      { id: "e", text: "párovaním geneticky identických chromozómov", correct: false },
      { id: "f", text: "párovaním heterologických chromozómov", correct: false },
      { id: "g", text: "v profáze I a zanikajú v anafáze I", correct: true },
      { id: "h", text: "v profáze heterotypického delenia mitózy", correct: false }
    ]
  },
  {
    id: 73,
    text: "Označte správnu odpoveď:",
    options: [
      { id: "a", text: "meiózou sa delia len diploidné bunky", correct: true },
      { id: "b", text: "meiózou sa delia len haploidné bunky", correct: false },
      { id: "c", text: "v anafáze I putujú k protiľahlým pólom bunky jednotlivé chromatídy", correct: false },
      { id: "d", text: "v anafáze I putujú k protiľahlým pólom bunky dvojchromatídové chromozómy", correct: true },
      { id: "e", text: "v metafáze I sa sústreďujú v centrálnej rovine jednotlivé chromozómy", correct: false },
      { id: "f", text: "v metafáze I sa sústreďujú v centrálnej rovine bivalenty", correct: true },
      { id: "g", text: "crossing-over prebieha v profáze homeotypického delenia", correct: false },
      { id: "h", text: "druhé meiotické delenie je charakteristické redukciou počtu chromozómov na polovicu", correct: false }
    ]
  },
  {
    id: 74,
    text: "Zygota:",
    options: [
      { id: "a", text: "je oplodnené vajíčko", correct: true },
      { id: "b", text: "vzniká redukčným delením", correct: false },
      { id: "c", text: "je zrelá pohlavná bunka", correct: false },
      { id: "d", text: "má vlastnosť totipotencie", correct: true },
      { id: "e", text: "je haploidná", correct: false },
      { id: "f", text: "je diploidná", correct: true },
      { id: "g", text: "obsahuje v jadre kompletnú genetickú informáciu a v cytoplazme mechanizmus na jej realizáciu", correct: true },
      { id: "h", text: "obsahuje v cytoplazme kompletnú genetickú informáciu a v jadre mechanizmus na jej realizáciu", correct: false }
    ]
  },
  {
    id: 75,
    text: "Karyokinéza je:",
    options: [
      { id: "a", text: "rozdelenie jadra na dve dcérske", correct: true },
      { id: "b", text: "rozdelenie bunky na dve dcérske", correct: false },
      { id: "c", text: "súčasťou interfázy bunkového cyklu", correct: false },
      { id: "d", text: "súčasťou bunkového cyklu", correct: true },
      { id: "e", text: "proces zdvojenia jadrovej hmoty", correct: false },
      { id: "f", text: "veda, ktorá študuje tvar a štruktúru jadra", correct: false },
      { id: "g", text: "reprodukcia buniek", correct: false },
      { id: "h", text: "rozdelenie centriolu na dva dcérske", correct: false }
    ]
  },
  {
    id: 76,
    text: "Bunkové delenie:",
    options: [
      { id: "a", text: "sa označuje ako karyokinéza", correct: false },
      { id: "b", text: "môže byť priame - mitóza", correct: false },
      { id: "c", text: "je zvyčajne súčasťou M – fázy bunkového cyklu", correct: true },
      { id: "d", text: "prebieha v interfáze bunkového cyklu", correct: false },
      { id: "e", text: "zabezpečuje regeneráciu poškodených tkanív a orgánov", correct: true },
      { id: "f", text: "zabezpečuje náhradu opotrebovaných buniek", correct: true },
      { id: "g", text: "znamená reprodukciu buniek", correct: true },
      { id: "h", text: "zahŕňa karyokinézu a cytokinézu", correct: true }
    ]
  },
  {
    id: 77,
    text: "Počet chromozómov v dcérskych bunkách vzniknutých mitotickým delením je vzhľadom k materskej bunke (2n):",
    options: [
      { id: "a", text: "rovnaký, lebo sa priečne rozdelí každý chromozóm podobne ako v II. meiotickom delení", correct: false },
      { id: "b", text: "rovnaký, lebo sa pozdĺžne rozdelí každý chromozóm podobne ako v I. meiotickom delení", correct: false },
      { id: "c", text: "rovnaký, lebo sa priečne rozdelí každý chromozóm podobne ako v I. meiotickom delení", correct: false },
      { id: "d", text: "polovičný, lebo sa pozdĺžne rozdelí každý chromozóm podobne ako v I. meiotickom delení", correct: false },
      { id: "e", text: "rovnaký, lebo sa pozdĺžne rozdelí každý chromozóm podobne ako v II. meiotickom delení", correct: true },
      { id: "f", text: "haploidný, lebo sa priečne rozdelí každý chromozóm podobne ako v II. meiotickom delení", correct: false },
      { id: "g", text: "polovičný, lebo sa priečne rozdelí každý chromozóm podobne ako v II. meiotickom delení", correct: false },
      { id: "h", text: "rovnaký, t. j. diploidný", correct: true }
    ]
  },
  {
    id: 78,
    text: "Bunky, ktoré vznikli meiózou:",
    options: [
      { id: "a", text: "sú geneticky zhodné s materskou bunkou", correct: false },
      { id: "b", text: "nie sú geneticky zhodné medzi sebou", correct: true },
      { id: "c", text: "majú jednu chromozómovú sadu", correct: true },
      { id: "d", text: "sú vždy geneticky zhodné medzi sebou", correct: false },
      { id: "e", text: "majú dve chromozómové sady", correct: false },
      { id: "f", text: "sú pohlavné bunky", correct: true },
      { id: "g", text: "nie sú geneticky identické s materskou bunkou", correct: true },
      { id: "h", text: "sú základom variability organizmov", correct: true }
    ]
  },
  {
    id: 79,
    text: "Heterotypické delenie:",
    options: [
      { id: "a", text: "sa priebehom podobá mitóze", correct: false },
      { id: "b", text: "je charakteristické redukciou počtu chromozómov na polovicu", correct: true },
      { id: "c", text: "je druhé meiotické delenie", correct: false },
      { id: "d", text: "nezaručuje rovnomerné rozdelenie genetického materiálu", correct: false },
      { id: "e", text: "končí vznikom štyroch dcérskych haploidných buniek", correct: false },
      { id: "f", text: "je prvé meiotické delenie", correct: true },
      { id: "g", text: "nemení počet chromozómov", correct: false },
      { id: "h", text: "je prvé mitotické delenie", correct: false }
    ]
  },
  {
    id: 80,
    text: "Redukčné delenie:",
    options: [
      { id: "a", text: "je priame bunkové delenie", correct: false },
      { id: "b", text: "je meiotické delenie", correct: true },
      { id: "c", text: "je špecializovaný spôsob delenia, výsledkom ktorého je vznik pohlavných buniek", correct: true },
      { id: "d", text: "je špecializovaný spôsob delenia, výsledkom ktorého je vznik diploidných gamét", correct: false },
      { id: "e", text: "je v prípade živočíchov jediný možný spôsob vzniku pohlavných buniek", correct: true },
      { id: "f", text: "nezaručuje rovnomerné rozdelenie genetického materiálu do dcérskych buniek", correct: false },
      { id: "g", text: "prebieha v dvoch po sebe nasledujúcich deleniach s odlišným priebehom", correct: true },
      { id: "h", text: "prebieha v dvoch po sebe nasledujúcich deleniach s rovnakým priebehom", correct: false }
    ]
  },
  {
    id: 81,
    text: "Homeotypické delenie:",
    options: [
      { id: "a", text: "je prvé meiotické delenie", correct: false },
      { id: "b", text: "je druhé meiotické delenie", correct: true },
      { id: "c", text: "má profázu I, metafázu I, anafázu I, telofázu I", correct: false },
      { id: "d", text: "má profázu II, metafázu II, anafázu II, telofázu II", correct: true },
      { id: "e", text: "je charakteristické zložitejším priebehom profázy, v ktorej dochádza ku crossing-overu", correct: false },
      { id: "f", text: "nasleduje po krátkej interfáze, kedy dochádza k replikácii DNA", correct: false },
      { id: "g", text: "nasleduje po krátkej interfáze, kedy nedochádza k replikácii DNA", correct: true },
      { id: "h", text: "redukuje počet chromozómov", correct: false }
    ]
  },
  {
    id: 82,
    text: "Proces postupného tvarového a funkčného odlíšenia buniek sa nazýva:",
    options: [
      { id: "a", text: "stimulácia", correct: false },
      { id: "b", text: "totipotencia a uskutočňuje sa už počas zárodočného vývinu", correct: false },
      { id: "c", text: "diferenciácia", correct: true },
      { id: "d", text: "špecializácia", correct: true },
      { id: "e", text: "reprodukcia", correct: false },
      { id: "f", text: "autoregulácia", correct: false },
      { id: "g", text: "autoreprodukcia a výsledkom sú špecializované bunky podľa tvaru a funkcie", correct: false },
      { id: "h", text: "diferenciácia a výsledkom sú špecializované bunky podľa tvaru a funkcie", correct: true }
    ]
  },
  {
    id: 83,
    text: "Bunkové kultúry sa získavajú:",
    options: [
      { id: "a", text: "kultiváciou buniek in vivo", correct: false },
      { id: "b", text: "kultiváciou buniek in vitro", correct: true },
      { id: "c", text: "bunkovou diferenciáciou", correct: false },
      { id: "d", text: "pestovaním buniek či tkanív mimo živého organizmu", correct: true },
      { id: "e", text: "pestovaním buniek či tkanív v živom organizme", correct: false },
      { id: "f", text: "priamym bunkovým delením in vivo", correct: false },
      { id: "g", text: "mitotickým delením buniek in vitro", correct: true },
      { id: "h", text: "mitotickým delením buniek in vivo", correct: false }
    ]
  },
  {
    id: 84,
    text: "Bunková diferenciácia znamená:",
    options: [
      { id: "a", text: "tvarové odlíšenie buniek", correct: true },
      { id: "b", text: "funkčné odlíšenie buniek", correct: true },
      { id: "c", text: "genetické odlíšenie somatických buniek", correct: false },
      { id: "d", text: "morfologické odlíšenie buniek", correct: true },
      { id: "e", text: "tvarové a funkčné odlíšenie buniek, ktoré začína už počas zárodočného vývinu organizmu", correct: true },
      { id: "f", text: "tvarové a funkčné odlíšenie buniek až po narodení jedinca ", correct: false },
      { id: "g", text: "realizáciu kompletnej genetickej informácie vo všetkých bunkách", correct: false },
      { id: "h", text: "špecializáciu buniek na určité základné funkcie v mnohobunkovom organizme", correct: true },
    ]
  }
];