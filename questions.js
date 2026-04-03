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
      { id: "g", text: "sú spoločenstvá organizmov, v ktorých je funkčná špecializácia jedincov nezameniteľná", correct: true },
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
      { id: "g", text: "zaniká jadierko", correct: false },
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
  },
  {
    id: 85,
    text: "Diferencovaná bunka:",
    options: [
      { id: "a", text: "má aktivované iba niektoré gény", correct: true },
      { id: "b", text: "má aktivované všetky gény v jadre", correct: false },
      { id: "c", text: "má vlastnosť totipotencie", correct: false },
      { id: "d", text: "obsahuje kompletnú genetickú informáciu", correct: true },
      { id: "e", text: "obsahuje iba tú časť genetickej informácie, ktorá je potrebná pre jej tvarové a funkčné odlíšenie", correct: false },
      { id: "f", text: "je bunka embryonálna", correct: false },
      { id: "g", text: "je bunka svalová", correct: true },
      { id: "h", text: "má typický tvar a je funkčne špecializovaná", correct: true }
    ]
  },
  {
    id: 86,
    text: "Bunková stena:",
    options: [
      { id: "a", text: "je selektívne priepustná", correct: false },
      { id: "b", text: "je permeabilná pre vodu a v nej rozpustené látky", correct: true },
      { id: "c", text: "tvori osmotickú bariéru rastlinnej bunky", correct: false },
      { id: "d", text: "je produktom protoplastu rastlinnej bunky", correct: true },
      { id: "e", text: "má vyživovaciu funkciu", correct: false },
      { id: "f", text: "udržiava tvar bunky", correct: true },
      { id: "g", text: "je semipermeabilná", correct: false },
      { id: "h", text: "bakteriálnych buniek obsahuje pektíny", correct: false }
    ]
  },
  {
    id: 87,
    text: "Rozkladné procesy v živočíšnych bunkách zabezpečujú:",
    options: [
      { id: "a", text: "amyloplasty", correct: false },
      { id: "b", text: "Golgiho aparát", correct: false },
      { id: "c", text: "centrálna vakuola", correct: false },
      { id: "d", text: "cytoplazma", correct: false },
      { id: "e", text: "hladké endoplazmatické retikulum", correct: false },
      { id: "f", text: "zrnité endoplazmatické retikulum", correct: false },
      { id: "g", text: "lyzozómy", correct: true },
      { id: "h", text: "membránové organely obsahujúce hydrolytické enzýmy", correct: true }
    ]
  },
  {
    id: 88,
    text: "Rozkladné procesy v rastlinných bunkách zabezpečujú hlavne:",
    options: [
      { id: "a", text: "amyloplasty", correct: false },
      { id: "b", text: "lyzozómy", correct: false },
      { id: "c", text: "vakuoly", correct: true },
      { id: "d", text: "tonoplasty", correct: false },
      { id: "e", text: "plastidové ribozómy", correct: false },
      { id: "f", text: "hladké endoplazmatické retikulum", correct: false },
      { id: "g", text: "ribozómy", correct: false },
      { id: "h", text: "hydrolytické enzýmy naviazané na mitochondrie", correct: false }
    ]
  },
  {
    id: 89,
    text: "Ktoré procesy sa uskutočňujú v chloroplastoch:",
    options: [
      { id: "a", text: "fotosyntéza", correct: true },
      { id: "b", text: "rozklad nepotrebných látok", correct: false },
      { id: "c", text: "syntéza bielkovín", correct: true },
      { id: "d", text: "glykolýza", correct: false },
      { id: "e", text: "Krebsov cyklus", correct: false },
      { id: "f", text: "syntéza polysacharidov tvoriacich bunkovú stenu", correct: false },
      { id: "g", text: "syntéza nukleových kyselín", correct: true },
      { id: "h", text: "Calvinov cyklus", correct: true }
    ]
  },
  {
    id: 90,
    text: "Rastlinné bunky sú navzájom pospájané:",
    options: [
      { id: "a", text: "sústavou pletiv", correct: false },
      { id: "b", text: "mikrotubulmi", correct: false },
      { id: "c", text: "cytoskeletom", correct: false },
      { id: "d", text: "plazmodezmami", correct: true },
      { id: "e", text: "amyloplastami", correct: false },
      { id: "f", text: "plazmidmi", correct: false },
      { id: "g", text: "tonoplastami", correct: false },
      { id: "h", text: "pórmi", correct: false }
    ]
  },
  {
    id: 91,
    text: "Vakuoly:",
    options: [
      { id: "a", text: "sú obalené permeabilným tonoplastom", correct: false },
      { id: "b", text: "sú vyplnené bunkovou šťavou", correct: true },
      { id: "c", text: "sú vyplnené cytoplazmou", correct: false },
      { id: "d", text: "obsahujú hydrolytické enzýmy", correct: true },
      { id: "e", text: "majú na povrchu tonoplast", correct: true },
      { id: "f", text: "sú od cytoplazmy oddelené semipermeabilnou membránou", correct: true },
      { id: "g", text: "sú produktom protoplastu rastlinných buniek", correct: true },
      { id: "h", text: "vypĺňa stróma", correct: false }
    ]
  },
  {
    id: 92,
    text: "V jadrovom obale sú:",
    options: [
      { id: "a", text: "mikrotubuly", correct: false },
      { id: "b", text: "otvory", correct: true },
      { id: "c", text: "plazmodezmy", correct: false },
      { id: "d", text: "protoplasty", correct: false },
      { id: "e", text: "peptidoglykan", correct: false },
      { id: "f", text: "pektíny", correct: false },
      { id: "g", text: "lignín", correct: false },
      { id: "h", text: "jadrové póry", correct: true }
    ]
  },
  {
    id: 93,
    text: "Rastlinná bunka sa odlišuje od živočíšnej tým, že má:",
    options: [
      { id: "a", text: "mitochondrie", correct: false },
      { id: "b", text: "plastidy", correct: true },
      { id: "c", text: "ribozómy", correct: false },
      { id: "d", text: "vakuoly", correct: true },
      { id: "e", text: "zrnité endoplazmatické retikulum", correct: false },
      { id: "f", text: "bunkovú stenu", correct: true },
      { id: "g", text: "lyzozómy", correct: false },
      { id: "h", text: "mikrotubuly", correct: false }
    ]
  },
  {
    id: 94,
    text: "Tylakoidy sú:",
    options: [
      { id: "a", text: "súčasťou mitochondrií", correct: false },
      { id: "b", text: "v stróme chloroplastov", correct: true },
      { id: "c", text: "v cytoplazme všetkých baktérií", correct: false },
      { id: "d", text: "membránové organely eukaryotickej bunky", correct: false },
      { id: "e", text: "malé mechúriky Golgiho aparátu", correct: false },
      { id: "f", text: "súčasťou chloroplastov", correct: true },
      { id: "g", text: "sploštené mechúriky viažuce molekuly chlorofylu", correct: true },
      { id: "h", text: "v cytoplazme cyanobaktérií", correct: true }
    ]
  },
  {
    id: 95,
    text: "Bičíky eukaryotických buniek:",
    options: [
      { id: "a", text: "sa skladajú z deväť trojíc mikrotubulov", correct: false },
      { id: "b", text: "majú na povrchu plazmatickú membránu", correct: true },
      { id: "c", text: "sú zakotvené v bunkovej stene", correct: false },
      { id: "d", text: "sa skladajú z mikrotubulov", correct: true },
      { id: "e", text: "obsahujú kolagén", correct: false },
      { id: "f", text: "sú zakotvené v bazálnom teliesku", correct: true },
      { id: "g", text: "majú na povrchu vždy pružnú pelikulu", correct: false },
      { id: "h", text: "sú pohybové organely niektorých prvokov", correct: true }
    ]
  },
  {
    id: 96,
    text: "Bunky všetkých živočíchov:",
    options: [
      { id: "a", text: "sú eukaryotické", correct: true },
      { id: "b", text: "v niektorých prípadoch prokaryotické", correct: false },
      { id: "c", text: "majú membránové organely", correct: true },
      { id: "d", text: "majú lyzozómy", correct: true },
      { id: "e", text: "majú pelikulu", correct: false },
      { id: "f", text: "sú pospájané plazmodezmami", correct: false },
      { id: "g", text: "obsahujú melanin", correct: false },
      { id: "h", text: "sa rozmnožujú priamym delením", correct: false }
    ]
  },
  {
    id: 97,
    text: "K vysokošpecializovaným fibrilárnym štruktúram živočíšnych buniek patria:",
    options: [
      { id: "a", text: "nervové vlákna", correct: false },
      { id: "b", text: "mikrofilamenty", correct: false },
      { id: "c", text: "cytoskeletová sústava", correct: false },
      { id: "d", text: "myofibrily", correct: true },
      { id: "e", text: "mikrotubuly", correct: false },
      { id: "f", text: "tonofibrily", correct: true },
      { id: "g", text: "brvy", correct: true },
      { id: "h", text: "bičíky", correct: true }
    ]
  },
  {
    id: 98,
    text: "Pre lyzozómy je charakteristické, že:",
    options: [
      { id: "a", text: "regulujú príjem a výdaj látok bunkou", correct: false },
      { id: "b", text: "predstavujú transportné vezikuly", correct: false },
      { id: "c", text: "majú vysoký obsah tráviacich enzýmov", correct: true },
      { id: "d", text: "sú charakteristické pre živočíšne bunky", correct: true },
      { id: "e", text: "sú charakteristické pre rastlinné bunky", correct: false },
      { id: "f", text: "zúčastňujú sa na bunkovom trávení v prokaryotických bunkách", correct: false },
      { id: "g", text: "rozkladajú cudzorodé látky v bunke", correct: true },
      { id: "h", text: "rozkladajú nepotrebné látky v bunke", correct: true }
    ]
  },
  {
    id: 99,
    text: "Mikrotubuly sú v bičíku usporiadané:",
    options: [
      { id: "a", text: "do deväť trojíc po obvode", correct: false },
      { id: "b", text: "priečne", correct: false },
      { id: "c", text: "podľa schémy 9+2", correct: true },
      { id: "d", text: "do deväť dvojíc po obvode a jedného centrálneho páru", correct: true },
      { id: "e", text: "do jedenásť obvodových dvojíc", correct: false },
      { id: "f", text: "náhodne", correct: false },
      { id: "g", text: "podľa schémy 9+3", correct: false },
      { id: "h", text: "v centrálnej rovine", correct: false }
    ]
  },
  {
    id: 100,
    text: "V rastlinných bunkách sa nenachádzajú:",
    options: [
      { id: "a", text: "lyzozómy", correct: true },
      { id: "b", text: "neurofibrily", correct: true },
      { id: "c", text: "tonofibrily", correct: true },
      { id: "d", text: "hydrolytické enzýmy", correct: false },
      { id: "e", text: "tonoplast", correct: false },
      { id: "f", text: "jadierka", correct: false },
      { id: "g", text: "plazmodezmy", correct: false },
      { id: "h", text: "myofibrily", correct: true }
    ]
  },
  {
    id: 101,
    text: "Tonoplast:",
    options: [
      { id: "a", text: "je na povrchu leukoplastov", correct: false },
      { id: "b", text: "je priepustná membrána na povrchu vakuol", correct: false },
      { id: "c", text: "je polopriepustná membrána na povrchu vakuol", correct: true },
      { id: "d", text: "je semipermeabilný", correct: true },
      { id: "e", text: "je na povrchu lyzozómov", correct: false },
      { id: "f", text: "obaľuje vakuoly", correct: true },
      { id: "g", text: "je na povrchu transportných vezikulov", correct: false },
      { id: "h", text: "oddeľuje obsah vakuol od cytoplazmy", correct: true }
    ]
  },
  {
    id: 102,
    text: "V stróme chloroplastov sa nachádzajú:",
    options: [
      { id: "a", text: "tylakoidy", correct: true },
      { id: "b", text: "kruhové molekuly DNA", correct: true },
      { id: "c", text: "chromatín", correct: false },
      { id: "d", text: "lineárne molekuly DNA", correct: false },
      { id: "e", text: "hydrolytické enzýmy", correct: false },
      { id: "f", text: "bunková šťava", correct: false },
      { id: "g", text: "karotenoidy", correct: true },
      { id: "h", text: "plastidové ribozómy", correct: true }
    ]
  },
  {
    id: 103,
    text: "Podľa bunkovej teórie:",
    options: [
      { id: "a", text: "z hľadiska organizácie predstavujú bunky najjednoduchšie živé sústavy", correct: false },
      { id: "b", text: "všetky bunky pozostávajú z tých istých prvkov a molekúl", correct: false },
      { id: "c", text: "každá bunka vzniká len delením už existujúcej bunky", correct: true },
      { id: "d", text: "živé bunky sú zložené z rovnakej hmoty ako neživé objekty", correct: false },
      { id: "e", text: "základom každého organizmu rastlín a živočíchov je bunka", correct: true },
      { id: "f", text: "každá bunka pozostáva predovšetkým z anorganických makromolekúl", correct: false },
      { id: "g", text: "bunky sú štruktúrované, stupňovito usporiadané, otvorené nukleoproteínové sústavy", correct: false },
      { id: "h", text: "všetky bunky majú schopnosť uchovávať a replikovať genetickú informáciu", correct: false }
    ]
  },
  {
    id: 104,
    text: "Prvú ucelenú evolučnú teóriu živých organizmov sformuloval:",
    options: [
      { id: "a", text: "nemecký lekár G. Trevirana", correct: false },
      { id: "b", text: "Ch. Darwin", correct: false },
      { id: "c", text: "J. B. Lamarck", correct: true },
      { id: "d", text: "L. Pasteur", correct: false },
      { id: "e", text: "C. Linné", correct: false },
      { id: "f", text: "C. Woese", correct: false },
      { id: "g", text: "anglický prírodovedec W. Harvey", correct: false },
      { id: "h", text: "francúzsky prírodovedec J. B. Lamarck v roku 1809", correct: true }
    ]
  },
  {
    id: 105,
    text: "Ktoré tvrdenie je správne:",
    options: [
      { id: "a", text: "J. B. Lamarck je autorom binomickej nomenklatúry", correct: false },
      { id: "b", text: "L. Pasteur definitívne vyvrátil možnosť samoplodenia i tých najmenších organizmov", correct: true },
      { id: "c", text: "M. J. Schleiden je zakladateľom modernej systematiky organizmov", correct: false },
      { id: "d", text: "T. Schwann patrí k autorom bunkovej teórie", correct: true },
      { id: "e", text: "C. Woese je autorom dvojmenného pomenovania organizmov", correct: false },
      { id: "f", text: "pre skúmanie biologických objektov použil mikroskop medzi prvými R. Hooke", correct: true },
      { id: "g", text: "J. G. Mendel objasnil, že molekuly DNA sú materiálnym nositeľom genetickej informácie", correct: false },
      { id: "h", text: "autorstvo pojmu biológia sa pripisuje A. Leeuwenhoekovi", correct: false }
    ]
  },
  {
    id: 106,
    text: "Bunkovú teóriu formulovali:",
    options: [
      { id: "a", text: "R. Hooke", correct: false },
      { id: "b", text: "A. Leewenhoek", correct: false },
      { id: "c", text: "M. J. Schleiden", correct: true },
      { id: "d", text: "L. Pasteur", correct: false },
      { id: "e", text: "J. E. Purkyně", correct: true },
      { id: "f", text: "T. Schwann", correct: true },
      { id: "g", text: "M. Malpighi", correct: false },
      { id: "h", text: "Ch. L. Treviranus", correct: false }
    ]
  },
  {
    id: 107,
    text: "Základy novodobej anatómie ľudského tela položil:",
    options: [
      { id: "a", text: "W. Harvey", correct: false },
      { id: "b", text: "Aristoteles", correct: false },
      { id: "c", text: "R. Hooke", correct: false },
      { id: "d", text: "J. E. Purkyňe", correct: false },
      { id: "e", text: "A. Vesalius", correct: true },
      { id: "f", text: "Galenos", correct: false },
      { id: "g", text: "R. Virchow", correct: false },
      { id: "h", text: "M. Malpighi", correct: false }
    ]
  },
  {
    id: 108,
    text: "Medzi fyziologické vedy patria:",
    options: [
      { id: "a", text: "fyziológia človeka", correct: true },
      { id: "b", text: "fyziológia prvkov", correct: false },
      { id: "c", text: "histológia", correct: false },
      { id: "d", text: "embryológia", correct: false },
      { id: "e", text: "vedy, ktoré študujú funkciu jednotlivých orgánov živých sústav", correct: true },
      { id: "f", text: "fyziológia živočíchov", correct: true },
      { id: "g", text: "vedy, ktoré študujú funkciu jednotlivých bunkových organel", correct: false },
      { id: "h", text: "fyziológia rastlín", correct: true }
    ]
  },
  {
    id: 109,
    text: "Parazitológia študuje:",
    options: [
      { id: "a", text: "správanie mikroorganizmov", correct: false },
      { id: "b", text: "cudzopasné organizmy", correct: true },
      { id: "c", text: "vzťahy živých sústav k prostrediu", correct: false },
      { id: "d", text: "cudzopasné mikroorganizmy", correct: true },
      { id: "e", text: "dedičnosť a premenlivosť mikroorganizmov", correct: false },
      { id: "f", text: "vzťahy medzi hostiteľom a parazitom", correct: true },
      { id: "g", text: "zárodočný vývoj mikroorganizmov", correct: false },
      { id: "h", text: "a definuje biologické zákonitosti vzťahov medzi parazitom a hostiteľom", correct: true }
    ]
  },
  {
    id: 110,
    text: "Dvojzávitnicovú štruktúru DNA a jej význam pre prenos genetickej informácie objasnili:",
    options: [
      { id: "a", text: "C. Woese", correct: false },
      { id: "b", text: "v roku 1944", correct: false },
      { id: "c", text: "v roku 1953", correct: true },
      { id: "d", text: "F. H. Crick", correct: true },
      { id: "e", text: "J. G. Mendel", correct: false },
      { id: "f", text: "v roku 1866", correct: false },
      { id: "g", text: "J. D. Watson", correct: true },
      { id: "h", text: "v roku 1966", correct: false }
    ]
  },
  {
    id: 111,
    text: "Voda v bunkách má funkciu:",
    options: [
      { id: "a", text: "zásobnú", correct: false },
      { id: "b", text: "konštrukčnú", correct: false },
      { id: "c", text: "ako zdroj energie", correct: false },
      { id: "d", text: "substrátovú - vytvára vhodné prostredie pre chemické deje", correct: true },
      { id: "e", text: "ako účinné rozpúšťadlo", correct: true },
      { id: "f", text: "regulačnú - reguluje príjem a výdaj látok bunkou", correct: false },
      { id: "g", text: "ako dôležitý faktor tepelného hospodárenia", correct: true },
      { id: "h", text: "ako základná stavebná jednotka makromolekulových látok", correct: false }
    ]
  },
  {
    id: 112,
    text: "Monomérom bielkovín sú:",
    options: [
      { id: "a", text: "nukleotidy", correct: false },
      { id: "b", text: "peptidy", correct: false },
      { id: "c", text: "aminoskupiny", correct: false },
      { id: "d", text: "atómy uhlíka a dusíka", correct: false },
      { id: "e", text: "aminokyseliny", correct: true },
      { id: "f", text: "dusíkaté organické bázy", correct: false },
      { id: "g", text: "monosacharidy", correct: false },
      { id: "h", text: "nukleozidy", correct: false }
    ]
  },
  {
    id: 113,
    text: "Jednotlivé aminokyseliny sú v bielkovinovom reťazci pospájané väzbou:",
    options: [
      { id: "a", text: "esterovou", correct: false },
      { id: "b", text: "fosfodiesterovou", correct: false },
      { id: "c", text: "glykozidovou", correct: false },
      { id: "d", text: "peptidovou", correct: true },
      { id: "e", text: "vodíkovými mostíkmi", correct: false },
      { id: "f", text: "peptidovou medzi dusíkatými bázami", correct: false },
      { id: "g", text: "kovalentnou", correct: true },
      { id: "h", text: "nekovalentnou", correct: false }
    ]
  },
  {
    id: 114,
    text: "Bielkoviny majú funkciu:",
    options: [
      { id: "a", text: "informačnú", correct: true },
      { id: "b", text: "ako najhospodárnejší zdroj energie", correct: false },
      { id: "c", text: "metabolickú - fibrilárne bielkoviny", correct: false },
      { id: "d", text: "metabolickú - globulárne bielkoviny", correct: true },
      { id: "e", text: "mechanickú - fibrilárne bielkoviny", correct: true },
      { id: "f", text: "mechanickú - globulárne bielkoviny", correct: false },
      { id: "g", text: "v živočíšnych bunkách hlavne zásobnú", correct: false },
      { id: "h", text: "štruktúrnu", correct: true }
    ]
  },
  {
    id: 115,
    text: "Monomérom nukleových kyselín sú:",
    options: [
      { id: "a", text: "aminokyseliny", correct: false },
      { id: "b", text: "adenín, guanín, tymín, cytozín", correct: false },
      { id: "c", text: "nukleotidy", correct: true },
      { id: "d", text: "chromatin", correct: false },
      { id: "e", text: "dusíkaté bázy", correct: false },
      { id: "f", text: "nukleozidy", correct: false },
      { id: "g", text: "ribonukleotidy alebo deoxyribonukleotidy", correct: true },
      { id: "h", text: "pentózy", correct: false }
    ]
  },
  {
    id: 116,
    text: "Z chemického hľadiska sú nukleové kyseliny:",
    options: [
      { id: "a", text: "polypeptidy", correct: false },
      { id: "b", text: "estery vyšších mastných kyselín a glycerolu", correct: false },
      { id: "c", text: "polynukleotidy", correct: true },
      { id: "d", text: "makromolekulové látky", correct: true },
      { id: "e", text: "biopolyméry", correct: true },
      { id: "f", text: "pentózy", correct: false },
      { id: "g", text: "monoméry", correct: false },
      { id: "h", text: "dlhé reťazce zložené z aminokyselín", correct: false }
    ]
  },
  {
    id: 117,
    text: "Lipidy:",
    options: [
      { id: "a", text: "môžu byť súčasťou vitamínov", correct: true },
      { id: "b", text: "sú súčasťou niektorých hormónov", correct: true },
      { id: "c", text: "katalyzujú chemické reakcie v bunke", correct: false },
      { id: "d", text: "sú hlavnou zložkou protilátok", correct: false },
      { id: "e", text: "sa podieľajú na regulačných procesoch v bunke", correct: true },
      { id: "f", text: "sú najhospodárnejším zdrojom energie", correct: true },
      { id: "g", text: "sú súčasťou biomembrán", correct: true },
      { id: "h", text: "majú ochrannú funkciu, napr. vosky", correct: true }
    ]
  },
  {
    id: 118,
    text: "Mikroorganizmy:",
    options: [
      { id: "a", text: "sú archeóny", correct: true },
      { id: "b", text: "sú všetky baktérie", correct: true },
      { id: "c", text: "študuje mikrobiológia", correct: true },
      { id: "d", text: "majú mikroskopické rozmery", correct: true },
      { id: "e", text: "sú onkogénne vírusy", correct: true },
      { id: "f", text: "sú len eukaryotické organizmy", correct: false },
      { id: "g", text: "sú jednobunkové organizmy mikroskopických rozmerov", correct: true },
      { id: "h", text: "sú viditeľné aj voľným okom", correct: false }
    ]
  },
  {
    id: 119,
    text: "Medzi prokaryota patria:",
    options: [
      { id: "a", text: "jednobunkové riasy", correct: false },
      { id: "b", text: "baktérie", correct: true },
      { id: "c", text: "niektoré mikroorganizmy", correct: true },
      { id: "d", text: "bakteriofágy", correct: false },
      { id: "e", text: "bičíkovce", correct: false },
      { id: "f", text: "archeóny", correct: true },
      { id: "g", text: "vírusy", correct: false },
      { id: "h", text: "jednobunkové rastliny", correct: false }
    ]
  },
  {
    id: 120,
    text: "Medzi nebunkové organizmy patria:",
    options: [
      { id: "a", text: "sinice", correct: false },
      { id: "b", text: "onkovírusy", correct: true },
      { id: "c", text: "spirily", correct: false },
      { id: "d", text: "červené krvinky", correct: false },
      { id: "e", text: "bakteriofágy", correct: true },
      { id: "f", text: "spirochéty", correct: false },
      { id: "g", text: "vírusy", correct: true },
      { id: "h", text: "molekulárne vnútrobunkové parazity", correct: true }
    ]
  },
  {
    id: 121,
    text: "Vírusy sú:",
    options: [
      { id: "a", text: "vnútrobunkové parazity", correct: true },
      { id: "b", text: "nebunkové organizmy", correct: true },
      { id: "c", text: "mimobunkové parazity", correct: false },
      { id: "d", text: "nukleoproteínové častice", correct: true },
      { id: "e", text: "organizmy s jednoduchým metabolizmom", correct: false },
      { id: "f", text: "bez vlastného metabolizmu", correct: true },
      { id: "g", text: "prokaryotické organizmy", correct: false },
      { id: "h", text: "schopné vyvolať infekčné ochorenia", correct: true }
    ]
  },
  {
    id: 122,
    text: "Vírusy spôsobujú u človeka:",
    options: [
      { id: "a", text: "besnotu", correct: true },
      { id: "b", text: "žltačku", correct: true },
      { id: "c", text: "chrípku", correct: true },
      { id: "d", text: "krívačku a slintačku", correct: false },
      { id: "e", text: "kiahne", correct: true },
      { id: "f", text: "tuberkulózu", correct: false },
      { id: "g", text: "kvapavku", correct: false },
      { id: "h", text: "Downov syndróm", correct: false }
    ]
  },
  {
    id: 123,
    text: "Rozmnožovanie vírusov:",
    options: [
      { id: "a", text: "má štyri fázy - profáza, metafáza, anafáza, telofáza", correct: false },
      { id: "b", text: "má tri fázy", correct: false },
      { id: "c", text: "prebieha amitózou", correct: false },
      { id: "d", text: "prebieha len v živých bunkách", correct: true },
      { id: "e", text: "prebieha len v eukaryotických bunkách", correct: false },
      { id: "f", text: "prebieha delením", correct: false },
      { id: "g", text: "prebieha aj mimo bunky", correct: false },
      { id: "h", text: "môže prebiehať aj v bunkových kultúrach", correct: true }
    ]
  },
  {
    id: 124,
    text: "Pôvodcom detskej obrny je:",
    options: [
      { id: "a", text: "vírus", correct: true },
      { id: "b", text: "bakteriofág", correct: false },
      { id: "c", text: "nukleoproteínová častica", correct: true },
      { id: "d", text: "baktéria", correct: false }
    ]
  },
  {
    id: 125,
    text: "Bielkovinový obal vírusu sa nazýva:",
    options: [
      { id: "a", text: "kapsid a je zložený z tukových monomérov", correct: false },
      { id: "b", text: "cysta", correct: false },
      { id: "c", text: "puzdro", correct: false },
      { id: "d", text: "virión", correct: false },
      { id: "e", text: "bielkovinový plášť", correct: true },
      { id: "f", text: "spóra", correct: false },
      { id: "g", text: "nukleoid", correct: false },
      { id: "h", text: "kapsid", correct: true }
    ]
  },
  {
    id: 126,
    text: "Vírusy spôsobujú u človeka:",
    options: [
      { id: "a", text: "syfilis", correct: false },
      { id: "b", text: "osýpky", correct: true },
      { id: "c", text: "infekčné ochorenia", correct: true },
      { id: "d", text: "nádchu", correct: true },
      { id: "e", text: "herpes simplex", correct: true },
      { id: "f", text: "zhubné nádory", correct: true },
      { id: "g", text: "mozaikovú chorobu", correct: true },
      { id: "h", text: "AIDS", correct: true }
    ]
  },
  {
    id: 127,
    text: "Vírusy sa rozmnožujú:",
    options: [
      { id: "a", text: "meiózou", correct: false },
      { id: "b", text: "mitózou", correct: false },
      { id: "c", text: "amitózou", correct: false },
      { id: "d", text: "v živočíšnych bunkách tak, že do nich prenikajú pinocytózou", correct: true },
      { id: "e", text: "pučaním", correct: false },
      { id: "f", text: "nepriamym delením", correct: false },
      { id: "g", text: "v hostiteľskej bunke, ktorá vytvára nové virióny", correct: true },
      { id: "h", text: "tak, že v hostiteľskej bunke prebieha replikácia a realizácia ich genetickej informácie", correct: true }
    ]
  },
  {
    id: 128,
    text: "Vírusy sa odlišujú od ostatných mikroorganizmov tým, že:",
    options: [
      { id: "a", text: "majú len jeden typ nukleovej kyseliny", correct: true },
      { id: "b", text: "sú najmenšie prokaryotické organizmy", correct: false },
      { id: "c", text: "sú to najmenšie infekčné častice - majú rozmery 15-300 nm", correct: true },
      { id: "d", text: "sú to najmenšie infekčné častice - majú rozmery 15 – 300 μm", correct: false },
      { id: "e", text: "sú to nebunkové organizmy", correct: true },
      { id: "f", text: "spôsobujú infekčné ochorenia", correct: false },
      { id: "g", text: "majú bičíky", correct: false },
      { id: "h", text: "nemajú vlastný genetický materiál", correct: false }
    ]
  },
  {
    id: 129,
    text: "Bakteriofág je:",
    options: [
      { id: "a", text: "baktéria so schopnosťou fagocytózy", correct: false },
      { id: "b", text: "špeciálny makrofág", correct: false },
      { id: "c", text: "bakteriálny vírus", correct: true },
      { id: "d", text: "druh baktérie", correct: false },
      { id: "e", text: "baktéria pohlcujúca vírusy", correct: false },
      { id: "f", text: "druh vírusu", correct: true },
      { id: "g", text: "vírus napádajúci baktérie", correct: true },
      { id: "h", text: "rozmnožovaním viazaný na eukaryotické bunky", correct: false }
    ]
  },
  {
    id: 130,
    text: "Každý virión obsahuje:",
    options: [
      { id: "a", text: "bielkovinový kapsid", correct: true },
      { id: "b", text: "DNA alebo RNA a bielkoviny", correct: true },
      { id: "c", text: "nukleovú kyselinu a bielkoviny", correct: true },
      { id: "d", text: "tukový obal", correct: false },
      { id: "e", text: "tukový kapsid", correct: false },
      { id: "f", text: "hlavičku a bičík", correct: false },
      { id: "g", text: "bielkovinový plášť", correct: true },
      { id: "h", text: "oba typy nukleových kyselín a bielkoviny", correct: false }
    ]
  },
  {
    id: 131,
    text: "Vírusy:",
    options: [
      { id: "a", text: "majú jednoduchú prokaryotickú bunku", correct: false },
      { id: "b", text: "sú najjednoduchšie jednobunkové organizmy", correct: false },
      { id: "c", text: "sú vnútrobunkové parazity", correct: true },
      { id: "d", text: "sú zložené z nukleových kyselín a lipidového kapsidu", correct: false },
      { id: "e", text: "študuje mikrobiológia", correct: true },
      { id: "f", text: "študuje virológia", correct: true },
      { id: "g", text: "sú nebunkové organizmy", correct: true },
      { id: "h", text: "majú ako prirodzený rezervoár niektoré bezstavovcе", correct: true }
    ]
  },
  {
  id: 132,
  text: "Vírus chrípky:",
  options: [
    { id: "a", text: "má veľkosť 50 - 80 nm", correct: true },
    { id: "b", text: "môžeme pozorovať len elektrónovým mikroskopom", correct: true },
    { id: "c", text: "má kapsid zložený z bielkovinových monomérov", correct: true },
    { id: "d", text: "môžeme pozorovať optickým mikroskopom", correct: false },
    { id: "e", text: "má veľkosť 15 - 300 nm", correct: false },
    { id: "f", text: "má tukový obal", correct: true },
    { id: "g", text: "má nukleoid zložený z bielkovinových monomérov", correct: false },
    { id: "h", text: "má nukleokapsid uzavretý v tukovom obale", correct: true }
  ]
},
{
  id: 133,
  text: "Medzi vírusové ochorenia patrí:",
  options: [
    { id: "a", text: "angína", correct: false },
    { id: "b", text: "žltačka", correct: true },
    { id: "c", text: "zápal príušných žliaz", correct: true },
    { id: "d", text: "zápal mozgových blán", correct: true },
    { id: "e", text: "tuberkulóza", correct: false },
    { id: "f", text: "malária", correct: false },
    { id: "g", text: "mor hydiny", correct: true },
    { id: "h", text: "ochorenie tabakových listov", correct: true }
  ]
},
{
  id: 134,
  text: "Rastlinné vírusy:",
  options: [
    { id: "a", text: "obsahujú obvykle RNA molekuly", correct: true },
    { id: "b", text: "sa nazývajú cyanofágy", correct: false },
    { id: "c", text: "obsahujú obvykle DNA molekuly", correct: false },
    { id: "d", text: "nie sú infekčné", correct: false },
    { id: "e", text: "sa rozmnožujú v siniciach", correct: false },
    { id: "f", text: "napr. vírus tabakovej mozaiky má dvojvláknovú molekulu RNA", correct: false },
    { id: "g", text: "spôsobujú rôzne virózy rastlín", correct: true },
    { id: "h", text: "sa rozmnožujú v rastlinných bunkách", correct: true }
  ]
},
{
  id: 135,
  text: "Baktérie:",
  options: [
    { id: "a", text: "sú autotrofné alebo heterotrofné", correct: true },
    { id: "b", text: "majú za optimálnych podmienok generačnú dobu 15 - 30 minút", correct: true },
    { id: "c", text: "fototrofné sú cyanobaktérie", correct: true },
    { id: "d", text: "sa rozmnožujú nepriamym bunkovým delením", correct: false },
    { id: "e", text: "môžu žiť ako saprofyty v pôdach", correct: true },
    { id: "f", text: "môžu žiť v symbióze s človekom", correct: true },
    { id: "g", text: "majú v plazmatickej membráne peptidoglykan", correct: false },
    { id: "h", text: "majú submikroskopické rozmery", correct: false }
  ]
},
{
  id: 136,
  text: "Kokovité baktérie:",
  options: [
    { id: "a", text: "majú bičíky", correct: false },
    { id: "b", text: "nemajú bičíky", correct: true },
    { id: "c", text: "nevykonávajú aktívny pohyb", correct: true },
    { id: "d", text: "vykonávajú aktívny pohyb pomocou bičíka", correct: false },
    { id: "e", text: "môžu vytvárať súbory buniek strapcovitého charakteru", correct: true },
    { id: "f", text: "môžu vytvárať súbory buniek retiazkovitého charakteru", correct: true },
    { id: "g", text: "spôsobujú tuberkulózu", correct: false },
    { id: "h", text: "sa rozmnožujú nepriamym delením", correct: false }
  ]
},
{
  id: 137,
  text: "Streptokoky vytvárajú:",
  options: [
    { id: "a", text: "strapce", correct: false },
    { id: "b", text: "dvojice", correct: false },
    { id: "c", text: "špirály", correct: false },
    { id: "d", text: "paličky", correct: false },
    { id: "e", text: "retiazky", correct: true },
    { id: "f", text: "rozvetvené vláknité štruktúry", correct: false },
    { id: "g", text: "organické látky len chemosyntézou", correct: false },
    { id: "h", text: "špecifické rozmnožovacie štruktúry - spóry", correct: false }
  ]
},
{
  id: 138,
  text: "Stafylokoky vytvárajú:",
  options: [
    { id: "a", text: "strapce", correct: true },
    { id: "b", text: "dvojice", correct: false },
    { id: "c", text: "špirály", correct: false },
    { id: "d", text: "paličky", correct: false },
    { id: "e", text: "retiazky", correct: false },
    { id: "f", text: "rozvetvené vláknité štruktúry", correct: false },
    { id: "g", text: "organické látky len chemosyntézou", correct: false },
    { id: "h", text: "špecifické rozmnožovacie štruktúry - spóry", correct: false }
  ]
},
{
  id: 139,
  text: "Baktérie sa rozmnožujú:",
  options: [
    { id: "a", text: "väčšinou priečnym delením", correct: true },
    { id: "b", text: "priamym delením", correct: true },
    { id: "c", text: "replikáciou", correct: false },
    { id: "d", text: "väčšinou pozdĺžnym delením", correct: false },
    { id: "e", text: "nepohlavne", correct: true },
    { id: "f", text: "nepriamym delením bunky", correct: false },
    { id: "g", text: "tak, že si dve baktérie vymenia chromozómy", correct: false },
    { id: "h", text: "aj rozpadom - vláknité baktérie", correct: true }
  ]
},
{
  id: 140,
  text: "Každá bakteriálna bunka má:",
  options: [
    { id: "a", text: "bičík", correct: false },
    { id: "b", text: "ribozómy", correct: true },
    { id: "c", text: "cytoplazmu", correct: true },
    { id: "d", text: "nukleoid", correct: true },
    { id: "e", text: "puzdro", correct: false },
    { id: "f", text: "schopnosť fotosyntézy", correct: false },
    { id: "g", text: "bunkovú stenu", correct: true },
    { id: "h", text: "jeden kruhový chromozóm", correct: true }
  ]
},
{
  id: 141,
  text: "Špirálovito stočené bunky majú:",
  options: [
    { id: "a", text: "aktinomycéty", correct: false },
    { id: "b", text: "rod Streptococcus", correct: false },
    { id: "c", text: "rod Stafylococcus", correct: false },
    { id: "d", text: "bacily", correct: false },
    { id: "e", text: "spirily", correct: true },
    { id: "f", text: "spirochéty", correct: true },
    { id: "g", text: "Rhodospirillum rubrum", correct: true },
    { id: "h", text: "virióny", correct: false }
  ]
},
{
  id: 142,
  text: "Bakteriálny chromozóm:",
  options: [
    { id: "a", text: "je lineárny", correct: false },
    { id: "b", text: "je od cytoplazmy oddelený membránou", correct: false },
    { id: "c", text: "nie je od cytoplazmy ohraničený žiadnou membránou", correct: true },
    { id: "d", text: "je zložený z chromatínu", correct: false },
    { id: "e", text: "je pripejený k vnútornej strane cytoplazmatickej membrány", correct: true },
    { id: "f", text: "má kruhovitý tvar", correct: true },
    { id: "g", text: "je kruhová dvojreťazcová molekula DNA", correct: true },
    { id: "h", text: "je pripojený k vnútornej strane jadrovej membrány", correct: false }
  ]
},
{
  id: 143,
  text: "Medzi živočíšne vírusy patria:",
  options: [
    { id: "a", text: "bakteriofágy", correct: false },
    { id: "b", text: "vírus mozaiky zemiakov", correct: false },
    { id: "c", text: "onkovírusy", correct: true },
    { id: "d", text: "vírus spôsobujúci slintačku a krívačku", correct: true },
    { id: "e", text: "vírusy spôsobujúce závažné ochorenia človeka", correct: true },
    { id: "f", text: "onkogénne vírusy", correct: true },
    { id: "g", text: "vírusy Escherichia coli", correct: false },
    { id: "h", text: "fág", correct: false }
  ]
},
{
  id: 144,
  text: "V prostredí s obsahom až 20 – 26 % NaCl sú schopné rásť:",
  options: [
    { id: "a", text: "patogénne baktérie", correct: false },
    { id: "b", text: "Halobacterium", correct: true },
    { id: "c", text: "Halococcus", correct: true },
    { id: "d", text: "termoarcheóny", correct: false },
    { id: "e", text: "metanoarcheóny", correct: false },
    { id: "f", text: "Pseudomonas", correct: false },
    { id: "g", text: "Thermoproteus", correct: false },
    { id: "h", text: "haloarcheóny", correct: true }
  ]
},
{
  id: 145,
  text: "Archeóny sa odlišujú od baktérií tým, že:",
  options: [
    { id: "a", text: "majú mikroskopické rozmery", correct: false },
    { id: "b", text: "majú jadro obalené jadrovou membránou", correct: false },
    { id: "c", text: "sa rozmnožujú priečnym delením", correct: false },
    { id: "d", text: "v bunkovej stene neobsahujú peptidoglykan", correct: true },
    { id: "e", text: "žijú vo fyziologicky extrémnych podmienkach", correct: true },
    { id: "f", text: "sú to jednobunkové organizmy", correct: false },
    { id: "g", text: "sú to patogénne organizmy", correct: false },
    { id: "h", text: "nie sú patogénne organizmy", correct: true }
  ]
},
{
  id: 146,
  text: "Význam baktérií v prirodzených ekologických systémoch spočíva v tom, že:",
  options: [
    { id: "a", text: "produkujú do atmosféry kyslík", correct: false },
    { id: "b", text: "spôsobujú infekčné ochorenia", correct: false },
    { id: "c", text: "sú schopné žiť vo fyziologicky extrémnych podmienkach", correct: false },
    { id: "d", text: "rozkladajú odumreté telá rastlín a živočíchov", correct: true },
    { id: "e", text: "obohacujú pôdu o organické zlúčeniny potrebné k fotosyntéze rastlín", correct: false },
    { id: "f", text: "zohrávajú nezastupiteľnú úlohu pri cyklickej premene látok v prírode", correct: true },
    { id: "g", text: "mineralizujú organický materiál", correct: true },
    { id: "h", text: "pomáhajú pri samočistení vodných tokov", correct: true }
  ]
},
{
  id: 147,
  text: "Chemoautotrofné baktérie:",
  options: [
    { id: "a", text: "získavajú energiu pomocou chlorofylov", correct: false },
    { id: "b", text: "využívajú ako primárny zdroj uhlíka CO2", correct: true },
    { id: "c", text: "sú fotosyntetizujúce prokaryota", correct: false },
    { id: "d", text: "sú heterotrofné organizmy", correct: false },
    { id: "e", text: "sú saprofyty", correct: false },
    { id: "f", text: "získavajú energiu oxidáciou anorganických zlúčenín", correct: true },
    { id: "g", text: "sú autotrofné organizmy bez pigmentov", correct: true },
    { id: "h", text: "získavajú energiu redukciou organických látok, napr. glukózy", correct: false }
  ]
},
{
  id: 148,
  text: "Fototrofné prokaryota:",
  options: [
    { id: "a", text: "sa považujú za predchodcov chloroplastov rastlín", correct: true },
    { id: "b", text: "ako zdroj uhlíka využívajú organické zlúčeniny", correct: false },
    { id: "c", text: "sú sinice", correct: true },
    { id: "d", text: "sú cyanobaktérie", correct: true },
    { id: "e", text: "sú saprofyty", correct: false },
    { id: "f", text: "sú jednobunkové rastliny", correct: false },
    { id: "g", text: "sú schopné pomocou chlorofylu premieňať svetelnú energiu na chemickú", correct: true },
    { id: "h", text: "sa využívajú v mliekárenstve pri výrobe syrov", correct: false }
  ]
},
{
  id: 149,
  text: "Patogénne baktérie:",
  options: [
    { id: "a", text: "sa rozmnožujú nepriamym delením", correct: false },
    { id: "b", text: "spôsobujú ochorenia človeka", correct: true },
    { id: "c", text: "sú schopné žiť vo fyziologicky extrémnych podmienkach", correct: false },
    { id: "d", text: "spôsobujú ochorenia rastlín", correct: true },
    { id: "e", text: "spôsobujú ochorenia živočíchov", correct: true },
    { id: "f", text: "sa rozmnožujú priamym bunkovým delením", correct: true },
    { id: "g", text: "sa využívajú v mliekárenstve pri výrobe syrov, kefírov a jogurtov", correct: false },
    { id: "h", text: "spôsobujú pohlavné choroby u človeka", correct: true }
  ]
},
{
  id: 150,
  text: "Baktérie spôsobujú u človeka:",
  options: [
    { id: "a", text: "kvapavku - Treponema pallidum", correct: false },
    { id: "b", text: "vírusové ochorenia", correct: false },
    { id: "c", text: "kiahne - Shigella", correct: false },
    { id: "d", text: "besnotu - Vibrio", correct: false },
    { id: "e", text: "slintačku - Klebsiella", correct: false },
    { id: "f", text: "respiračné infekcie – Streptococcus", correct: true },
    { id: "g", text: "hnačky - Salmonella", correct: true },
    { id: "h", text: "tuberkulózu - Mycobacterium tuberculosis", correct: true }
  ]
},
{
  id: 151,
  text: "Ktorú z uvedených chorôb nespôsobujú vírusy:",
  options: [
    { id: "a", text: "mozgovú encefalitídu", correct: false },
    { id: "b", text: "detskú obrnu", correct: false },
    { id: "c", text: "tuberkulózu", correct: true },
    { id: "d", text: "kvapavku", correct: true },
    { id: "e", text: "syfilis", correct: true },
    { id: "f", text: "chrípku", correct: false },
    { id: "g", text: "opar", correct: false },
    { id: "h", text: "besnotu", correct: false }
  ]
},
{
  id: 152,
  text: "Pozitívne vlastnosti baktérií sa využívajú:",
  options: [
    { id: "a", text: "pri infekčných chorobách", correct: false },
    { id: "b", text: "v mliekárenstve pri výrobe syrov a kefírov", correct: true },
    { id: "c", text: "pri mineralizácii organických zvyškov - pôdne baktérie", correct: true },
    { id: "d", text: "pri fotosyntéze", correct: false },
    { id: "e", text: "vo farmaceutickom priemysle", correct: true },
    { id: "f", text: "v kvasnom priemysle", correct: true },
    { id: "g", text: "pri ekologických haváriách, napr. kontaminácii pôdy ropnými derivátmi", correct: true },
    { id: "h", text: "pri chemosyntéze", correct: false }
  ]
},
{
  id: 153,
  text: "Základné pletivo je v rastline lokalizované:",
  options: [
    { id: "a", text: "na rastovom vrchole stonky", correct: false },
    { id: "b", text: "na rastovom vrchole koreňa", correct: false },
    { id: "c", text: "v lykovej časti stoniek", correct: false },
    { id: "d", text: "v prieduchoch", correct: false },
    { id: "e", text: "v drevnej časti cievnych zväzkov", correct: false },
    { id: "f", text: "medzi krycím a vodivým pletivom", correct: true },
    { id: "g", text: "medzi parenchýmom a kolenchýmom", correct: false },
    { id: "h", text: "medzi kaulomom a fylomom", correct: false }
  ]
},
{
  id: 154,
  text: "Podľa spôsobu zhrubnutia bunkovej steny sa pletivá rozdeľujú na:",
  options: [
    { id: "a", text: "krycie, vodivé, základné", correct: false },
    { id: "b", text: "parenchým, kolenchým, sklerenchým", correct: true },
    { id: "c", text: "delivé a trváce", correct: false },
    { id: "d", text: "primárne, latentné, sekundárne", correct: false },
    { id: "e", text: "pericykel, kambium, felogén", correct: false },
    { id: "f", text: "kolaterálne, bikolaterálne, koncentrické, radiálne", correct: false },
    { id: "g", text: "mechanické, zásobné, vylučovacie", correct: false },
    { id: "h", text: "parenchymatické a mechanické", correct: true }
  ]
},
{
  id: 155,
  text: "Označte správnu odpoveď:",
  options: [
    { id: "a", text: "parenchým a kolenchým tvoria živé bunky", correct: true },
    { id: "b", text: "sklerenchým má rovnomerne zhrubnuté bunkové steny", correct: true },
    { id: "c", text: "bunky sklerenchýmu sú prestúpené plazmodezmami", correct: true },
    { id: "d", text: "bunky parenchýmu majú na hranách zhrubnuté bunkové steny", correct: false },
    { id: "e", text: "kolenchým je mechanické pletivo", correct: true },
    { id: "f", text: "pokožka nadzemných orgánov sa nazýva rizoderma", correct: false },
    { id: "g", text: "pokožka v koreni rastlín sa nazýva epiderma", correct: false },
    { id: "h", text: "pŕhľava dvojdomá má emergencie na ochranu", correct: false }
  ]
},
{
  id: 156,
  text: "Prieduchy:",
  options: [
    { id: "a", text: "sú viacbunkové útvary z podpokožkových buniek", correct: false },
    { id: "b", text: "môžu byť krycie a žľaznaté", correct: false },
    { id: "c", text: "tvoria dve zatváravé obličkovité bunky", correct: true },
    { id: "d", text: "obsahujú v bunkách chloroplasty", correct: true },
    { id: "e", text: "zabezpečujú výdaj vody vo forme kvapôčiek", correct: false },
    { id: "f", text: "zabezpečujú výdaj vody vo forme vodnej pary", correct: true },
    { id: "g", text: "zabezpečujú príjem CO2", correct: true },
    { id: "h", text: "sa nachádzajú v rizoderme", correct: false }
  ]
},
{
  id: 157,
  text: "Hydatódy:",
  options: [
    { id: "a", text: "vylučujú vodu a soli z pokožkových pletív", correct: true },
    { id: "b", text: "sú trvalo otvorené", correct: true },
    { id: "c", text: "tvoria dve zatváravé podpokožkové bunky", correct: false },
    { id: "d", text: "sprostredkúvajú výmenu plynov medzi rastlinou a vonkajším prostredím", correct: false },
    { id: "e", text: "sú prieduchy, ktoré stratili zatváraciu schopnosť", correct: true },
    { id: "f", text: "sú trichómy, ktoré stratili zatváraciu schopnosť", correct: false },
    { id: "g", text: "sú napr. v rizoderme", correct: false },
    { id: "h", text: "pri nadbytku vodných pár v ovzduší vylučujú vodu a soli z pokožkových pletív", correct: true }
  ]
},
{
  id: 158,
  text: "Emergencie majú:",
  options: [
    { id: "a", text: "egreš obyčajný", correct: true },
    { id: "b", text: "muškát", correct: false },
    { id: "c", text: "pŕhľava dvojdomá", correct: false },
    { id: "d", text: "mäsožravé rastliny", correct: true },
    { id: "e", text: "ruža šípová", correct: true },
    { id: "f", text: "vodné rastliny", correct: false },
    { id: "g", text: "korene rastlín", correct: false },
    { id: "h", text: "ochrannú funkciu najmä pred bylinožravými živočíchmi", correct: true }
  ]
},
{
  id: 159,
  text: "V xyléme vedú vodu:",
  options: [
    { id: "a", text: "prieduchy", correct: false },
    { id: "b", text: "kapiláry", correct: false },
    { id: "c", text: "sitkovice", correct: false },
    { id: "d", text: "cievy", correct: true },
    { id: "e", text: "cievice", correct: true },
    { id: "f", text: "tracheidy", correct: true },
    { id: "g", text: "trachey", correct: true },
    { id: "h", text: "trichómy", correct: false }
  ]
},
{
  id: 160,
  text: "Sitkovice:",
  options: [
    { id: "a", text: "tvoria živé bunky, ktorých priečne bunkové steny sú perforované", correct: true },
    { id: "b", text: "tvoria mŕtve bunky s priečnymi priehradkami", correct: false },
    { id: "c", text: "vedú vodu a v nej rozpustené anorganické látky", correct: false },
    { id: "d", text: "vedú asimiláty na miesta spotreby", correct: true },
    { id: "e", text: "vodivú činnosť vykonávajú zväčša jedno až dve vegetačné obdobia", correct: true },
    { id: "f", text: "sú v xyléme", correct: false },
    { id: "g", text: "sú vo floéme", correct: true },
    { id: "h", text: "sú súvislé trubice z pôvodne nad sebou uložených odumretých buniek, ktorým sa priečne priehradky čiastočne alebo úplne rozpadli", correct: false }
  ]
},
{
  id: 161,
  text: "Transpiračný prúd:",
  options: [
    { id: "a", text: "stúpa drevnou časťou cievnych zväzkov", correct: true },
    { id: "b", text: "stúpa cievami a/alebo cievicami", correct: true },
    { id: "c", text: "stúpa lykovou časťou cievnych zväzkov", correct: false },
    { id: "d", text: "stúpa sitkovicami", correct: false },
    { id: "e", text: "stúpa od koreňa k listom", correct: true },
    { id: "f", text: "stúpa základným pletivom", correct: false },
    { id: "g", text: "stúpa floémom", correct: false },
    { id: "h", text: "stúpa xylémom", correct: true }
  ]
},
{
  id: 162,
  text: "Asimilačný prúd:",
  options: [
    { id: "a", text: "prúdi drevnou časťou cievnych zväzkov", correct: false },
    { id: "b", text: "prúdi lykovou časťou cievnych zväzkov", correct: true },
    { id: "c", text: "prúdi xylémom", correct: false },
    { id: "d", text: "prúdi smerom od listov na miesto spotreby", correct: true },
    { id: "e", text: "rozvádza hotové asimiláty", correct: true },
    { id: "f", text: "začína v koreňoch a končí v listoch", correct: false },
    { id: "g", text: "prúdi sitkovicami", correct: true },
    { id: "h", text: "stúpa cievami a cievicami", correct: false }
  ]
},
{
  id: 163,
  text: "Koreň má funkciu:",
  options: [
    { id: "a", text: "vyživovaciu", correct: true },
    { id: "b", text: "mechanickú", correct: true },
    { id: "c", text: "vylučovaciu", correct: false },
    { id: "d", text: "pri pohlavnom rozmnožovaní rastlín", correct: false },
    { id: "e", text: "metabolickú", correct: true },
    { id: "f", text: "transpiračnú", correct: false },
    { id: "g", text: "asimilačnú", correct: false },
    { id: "h", text: "pri vegetatívnom rozmnožovaní rastlín", correct: true }
  ]
},
{
  id: 164,
  text: "Koreňový vrchol chráni:",
  options: [
    { id: "a", text: "pericykel", correct: false },
    { id: "b", text: "primárna kôra", correct: false },
    { id: "c", text: "presýpací škrob", correct: false },
    { id: "d", text: "statolit", correct: false },
    { id: "e", text: "škrobové zrná v amyloplastoch", correct: false },
    { id: "f", text: "kambium", correct: false },
    { id: "g", text: "koreňová čiapočka", correct: true },
    { id: "h", text: "súbor buniek, ktorých bunkové steny slizovatejú a tým umožňujú lepšie prenikanie koreňa medzi pôdne častice", correct: true }
  ]
},
{
  id: 165,
  text: "Akú funkciu má presýpací škrob v koreňovej čiapočke:",
  options: [
    { id: "a", text: "vyživovaciu", correct: false },
    { id: "b", text: "metabolickú", correct: false },
    { id: "c", text: "podmieňuje pozitívny geotropický rast koreňa", correct: true },
    { id: "d", text: "zásobnú", correct: false },
    { id: "e", text: "podmieňuje rast koreňa v smere zemskej tiaže", correct: true },
    { id: "f", text: "vylučovaciu", correct: false },
    { id: "g", text: "asimilačnú", correct: false },
    { id: "h", text: "je to statolitový aparát", correct: true }
  ]
},
  {
    id: 166,
    text: "Aké typy koreňových sústav sa rozlišujú pri rastlinách:",
    options: [
      { id: "a", text: "homorízia", correct: true },
      { id: "b", text: "primárna koreňová sústava", correct: true },
      { id: "c", text: "meristematická koreňová sústava", correct: false },
      { id: "d", text: "alorízia", correct: true },
      { id: "e", text: "vedľajšia koreňová sústava", correct: true },
      { id: "f", text: "adventívna koreňová sústava", correct: true },
      { id: "g", text: "vegetativna koreňová sústava", correct: false },
      { id: "h", text: "generativna koreňová sústava", correct: false }
    ]
  },
  {
    id: 167,
    text: "Koreňové vlásky vyrastajú z:",
    options: [
      { id: "a", text: "koreňovej čiapočky", correct: false },
      { id: "b", text: "rizodermy", correct: true },
      { id: "c", text: "kutikuly", correct: false },
      { id: "d", text: "koreňovej pokožky", correct: true },
      { id: "e", text: "primárnej kôry", correct: false },
      { id: "f", text: "pericyklu", correct: false },
      { id: "g", text: "felogénu", correct: false },
      { id: "h", text: "rizodermy a podstatne zvyšujú absorpčný povrch koreňa", correct: true }
    ]
  },
  {
    id: 168,
    text: "Podľa usporiadania dreva voči lyku môžu byť cievne zväzky:",
    options: [
      { id: "a", text: "bikolaterálne", correct: true },
      { id: "b", text: "asimilačné", correct: false },
      { id: "c", text: "koncentrické", correct: true },
      { id: "d", text: "lúčovité", correct: false },
      { id: "e", text: "transpiračné", correct: false },
      { id: "f", text: "radiálne", correct: true },
      { id: "g", text: "kolaterálne", correct: true },
      { id: "h", text: "mechanické", correct: false }
    ]
  },
  {
    id: 169,
    text: "Postavenie listov na stonke môže byť:",
    options: [
      { id: "a", text: "perovité", correct: true },
      { id: "b", text: "zložené", correct: false },
      { id: "c", text: "vidlicovité", correct: true },
      { id: "d", text: "dlaňovité", correct: true },
      { id: "e", text: "striedavé", correct: false },
      { id: "f", text: "protistojné", correct: true },
      { id: "g", text: "praslenovité", correct: true },
      { id: "h", text: "strapcovité", correct: false }
    ]
  },
  {
    id: 170,
    text: "Aký je rozdiel medzi jarným a letným drevom:",
    options: [
      { id: "a", text: "letné drevo je svetlejšie", correct: false },
      { id: "b", text: "letné drevo je zložené z veľkých a tenkých buniek", correct: false },
      { id: "c", text: "jarné drevo je tmavšie a pevnejšie", correct: false },
      { id: "d", text: "jarné drevo je svetlejšie", correct: true },
      { id: "e", text: "letné drevo je tmavšie a pevnejšie", correct: true },
      { id: "f", text: "letné drevo sa označuje ako beľ", correct: false },
      { id: "g", text: "jarné drevo sa označuje ako jadro", correct: false },
      { id: "h", text: "jarné drevo je zložené z veľkých buniek s tenkou bunkovou stenou, letné drevo z malých buniek s hrubou bunkovou stenou", correct: true }
    ]
  },
  {
    id: 171,
    text: "Vek stromov určíme podľa:",
    options: [
      { id: "a", text: "počtu lenticel", correct: false },
      { id: "b", text: "letokruhov", correct: true },
      { id: "c", text: "borky", correct: false },
      { id: "d", text: "rozdielnej štruktúry a farby sekundárneho dreva na jar a v lete", correct: true },
      { id: "e", text: "rozdielnej štruktúry a farby primárneho dreva na jar a v lete", correct: false },
      { id: "f", text: "kruhov, ktoré vytvára jarné drevo a letné drevo na priereze", correct: true },
      { id: "g", text: "počtu stržňových lúčov", correct: false },
      { id: "h", text: "nerovnomernej tvorby sekundárneho dreva na jar a v lete", correct: true }
    ]
  },
  {
    id: 172,
    text: "Tvarovo a funkčne premenená stonka môže byť:",
    options: [
      { id: "a", text: "poplaz", correct: true },
      { id: "b", text: "borka", correct: false },
      { id: "c", text: "úponok", correct: true },
      { id: "d", text: "bulva", correct: true },
      { id: "e", text: "brachyblast", correct: true },
      { id: "f", text: "korok", correct: false },
      { id: "g", text: "podzemok", correct: true },
      { id: "h", text: "stvol", correct: false }
    ]
  },
  {
    id: 173,
    text: "K základným fyziologickým funkciám typického zeleného listu patrí:",
    options: [
      { id: "a", text: "výmena plynov", correct: true },
      { id: "b", text: "rozvádzať vodu a v nej rozpustené minerálne látky", correct: false },
      { id: "c", text: "vyparovanie vody", correct: true },
      { id: "d", text: "transpirácia", correct: true },
      { id: "e", text: "rozvádzať produkty fotosyntézy", correct: false },
      { id: "f", text: "spevňovat rastlinu", correct: false },
      { id: "g", text: "fotosyntetická asimilácia", correct: true },
      { id: "h", text: "v prípade kaktusov zadržiavať značné množstvo vody", correct: false }
    ]
  },
  {
    id: 174,
    text: "Gutácia sa uskutočňuje cez:",
    options: [
      { id: "a", text: "hydatódy", correct: true },
      { id: "b", text: "prieduchy", correct: false },
      { id: "c", text: "lenticely", correct: false },
      { id: "d", text: "prieduchy v kvapalnom stave", correct: false },
      { id: "e", text: "prieduchy, ktoré stratili zatváraciu schopnosť, preto sú trvalo otvorené", correct: true },
      { id: "f", text: "póry", correct: false },
      { id: "g", text: "tentakuly", correct: false },
      { id: "h", text: "hydatódy v podobe vodnej pary", correct: false }
    ]
  },
  {
    id: 175,
    text: "Výmenu plynov pri drevinách zabezpečujú modifikované prieduchy:",
    options: [
      { id: "a", text: "lenticely", correct: true },
      { id: "b", text: "tentakuly", correct: false },
      { id: "c", text: "póry", correct: false },
      { id: "d", text: "fylomy", correct: false },
      { id: "e", text: "metamorfózy", correct: false },
      { id: "f", text: "nódy", correct: false },
      { id: "g", text: "púčiky", correct: false },
      { id: "h", text: "emergencie", correct: false }
    ]
  },
  {
    id: 176,
    text: "Opadávanie listov:",
    options: [
      { id: "a", text: "urýchľuje kyselina abscisová", correct: true },
      { id: "b", text: "urýchľuje v niektorých prípadoch vrstva korku, ktorá spôsobí oddelenie listu", correct: true },
      { id: "c", text: "v prípade listnatých stromov je v intervale 2 až 3 roky", correct: false },
      { id: "d", text: "urýchľuje kratšia životnosť stonky", correct: false },
      { id: "e", text: "spôsobuje na báze listu parenchymatická odlučovacia vrstva", correct: true },
      { id: "f", text: "urýchľuje kratšia životnosť čepele listov", correct: false },
      { id: "g", text: "ihličnanov je zvyčajne v intervale 2 až 3 roky", correct: true },
      { id: "h", text: "ihličnanov je niekedy až v intervale 9 rokov", correct: true }
    ]
  },
  {
    id: 177,
    text: "Medzi vegetatívne orgány patrí:",
    options: [
      { id: "a", text: "kvet", correct: false },
      { id: "b", text: "stonka", correct: true },
      { id: "c", text: "koreň", correct: true },
      { id: "d", text: "radix", correct: true },
      { id: "e", text: "kaulom", correct: true },
      { id: "f", text: "listy", correct: true },
      { id: "g", text: "flos", correct: false },
      { id: "h", text: "semená", correct: false }
    ]
  },
  {
    id: 178,
    text: "Reprodukčné orgány:",
    options: [
      { id: "a", text: "nahosemennych rastlín sá uložené v kvétach, ktoré vytvárajú jednopohlavnć samičie a samčie šižtičky", correct: true },
      { id: "b", text: "semenných rastlín sú listového póvodu", correct: true },
      { id: "c", text: "nahosemenných rastlin sú uložené v samčích šištičkách", correct: true },
      { id: "d", text: "nahosemenných tastlín sú uložené v samičích šištičkách", correct: true },
      { id: "e", text: "krytosemenných rastlín sú uložené v kvetoch", correct: true },
      { id: "f", text: "magnóliorastov sú uložené v kvetoch", correct: true },
      { id: "g", text: "sú výsledkom opelenia a oplodnenia", correct: true },
      { id: "h", text: "majú za úlohu produkovať pohlavné bunky", correct: true }
    ]
  },
  {
    id: 179,
    text: "Základné rozmnožovacie častice rastlín sú:",
    options: [
      { id: "a", text: "listy", correct: false },
      { id: "b", text: "stonky", correct: false },
      { id: "c", text: "korene", correct: false },
      { id: "d", text: "výtrusy", correct: true },
      { id: "e", text: "cibule", correct: false },
      { id: "f", text: "semená", correct: true },
      { id: "g", text: "kvety", correct: false },
      { id: "h", text: "výtrusy, ktoré sú výsledkom procesu opelenia a oplodnenia", correct: false }
    ]
  },
  {
    id: 180,
    text: "Výtrusy:",
    options: [
      { id: "a", text: "sú výsledkom opelenia", correct: false },
      { id: "b", text: "sú výsledkom oplodnenia", correct: false },
      { id: "c", text: "sú listového pôvodu", correct: false },
      { id: "d", text: "patria k rozmnožovacím časticiam", correct: true },
      { id: "e", text: "sú uložené v šištičkách", correct: false },
      { id: "f", text: "vznikajú len z telových buniek rastliny", correct: false },
      { id: "g", text: "vznikajú len zo somatických buniek materského organizmu", correct: false },
      { id: "h", text: "sú nepohlavné rozmnožovacie častice, ktoré sú výsledkom redukčného delenia vo výtrusniciach", correct: true }
    ]
  },
  {
    id: 181,
    text: "Príkladom vrcholíkového súkvetia je:",
    options: [
      { id: "a", text: "skrutec", correct: true },
      { id: "b", text: "chocholík", correct: false },
      { id: "c", text: "papraslen", correct: false },
      { id: "d", text: "okolík", correct: false },
      { id: "e", text: "hlávka", correct: false },
      { id: "f", text: "kosáčik", correct: false },
      { id: "g", text: "úbor", correct: true },
      { id: "h", text: "závinok", correct: false }
    ]
  },
  {
    id: 182,
    text: "Príkladom strapcovitého súkvetia je:",
    options: [
      { id: "a", text: "klas", correct: false },
      { id: "b", text: "okolík", correct: false },
      { id: "c", text: "vrcholík", correct: false },
      { id: "d", text: "kosáčik", correct: false },
      { id: "e", text: "šúľok", correct: false },
      { id: "f", text: "závinok", correct: false },
      { id: "g", text: "jahňada", correct: true },
      { id: "h", text: "hlávka", correct: false }
    ]
  },
  {
    id: 183,
    text: "Dvojité oplodnenie je typické pre:",
    options: [
      { id: "a", text: "nahosemenné rastliny", correct: false },
      { id: "b", text: "magnóliorasty", correct: false },
      { id: "c", text: "borinicorasty", correct: false },
      { id: "d", text: "krytosemenné rastliny", correct: true },
      { id: "e", text: "rýniorasty", correct: false },
      { id: "f", text: "všetky cievnaté rastliny", correct: false },
      { id: "g", text: "stielkaté rastliny", correct: false },
      { id: "h", text: "výtrusné rastliny", correct: false }
    ]
  },
  {
    id: 184,
    text: "Perigón je:",
    options: [
      { id: "a", text: "nerozlišený kvetný obal", correct: true },
      { id: "b", text: "rôznotvarý kvetný obal", correct: false },
      { id: "c", text: "kvetný obal rozlíšený farebne aj funkčne", correct: false },
      { id: "d", text: "vnútorná farebná koruna", correct: false },
      { id: "e", text: "okvetie", correct: true },
      { id: "f", text: "zložený iba z okvetných lístkov", correct: true },
      { id: "g", text: "kvetný obal borinicorastov", correct: false },
      { id: "h", text: "vonkajší zelený kalich", correct: false }
    ]
  },
  {
  id: 185,
  text: "Gynaeceum sú:",
  options: [
    { id: "a", text: "plodolisty borovicorastov", correct: false },
    { id: "b", text: "samičie šištičky borovicorastov", correct: false },
    { id: "c", text: "plodolisty", correct: true },
    { id: "d", text: "tyčinky", correct: false },
    { id: "e", text: "samčie pohlavné orgány", correct: false },
    { id: "f", text: "samičie pohlavné orgány", correct: true },
    { id: "g", text: "piestiky pri vývojovo pokročilejších magnóliorastoch", correct: true },
    { id: "h", text: "integumenty", correct: false }
  ]
},
{
  id: 186,
  text: "Medzi katabolické procesy v rastlinách patria:",
  options: [
    { id: "a", text: "rozklad cukrov", correct: true },
    { id: "b", text: "vznik energeticky bohatých látok - asimilátov", correct: false },
    { id: "c", text: "rozklad bielkovín a aminokyselín", correct: true },
    { id: "d", text: "vznik glukózy pri fotosyntéze z CO2 a vody", correct: false },
    { id: "e", text: "oxidácia glukózy na vodu a oxid uhličitý", correct: true },
    { id: "f", text: "replikácia DNA", correct: false },
    { id: "g", text: "také, pri ktorých sa uvoľňuje energia chemických väzieb", correct: true },
    { id: "h", text: "napr. dýchanie", correct: true }
  ]
},
{
  id: 187,
  text: "Ktoré metabolické procesy v rastlinách sú spojené so spotrebou energie:",
  options: [
    { id: "a", text: "anabolické", correct: true },
    { id: "b", text: "asimilačné", correct: true },
    { id: "c", text: "disimilačné", correct: false },
    { id: "d", text: "dýchanie", correct: false },
    { id: "e", text: "fotosyntéza", correct: true },
    { id: "f", text: "endergonické", correct: true },
    { id: "g", text: "oxidácia glukózy na vodu a oxid uhličitý", correct: false },
    { id: "h", text: "vznik glukózy pri fotosyntéze z CO2 a vody", correct: true }
  ]
},
{
  id: 188,
  text: "Ktoré metabolické procesy v rastlinách sú spojené s uvoľňovaním energie:",
  options: [
    { id: "a", text: "exergonické reakcie", correct: true },
    { id: "b", text: "dýchanie", correct: true },
    { id: "c", text: "anabolické", correct: false },
    { id: "d", text: "katabolické", correct: true },
    { id: "e", text: "asimilačné", correct: false },
    { id: "f", text: "disimilačné", correct: true },
    { id: "g", text: "vznik energeticky bohatých látok - asimilátov", correct: false },
    { id: "h", text: "syntéza nových organických látok", correct: false }
  ]
},
{
  id: 189,
  text: "Primárnym produktom asimilácie autotrofných rastlín sú:",
  options: [
    { id: "a", text: "tuky", correct: false },
    { id: "b", text: "cukry", correct: true },
    { id: "c", text: "bielkoviny", correct: false },
    { id: "d", text: "katalytické organické látky", correct: false },
    { id: "e", text: "regulačné organické látky", correct: false },
    { id: "f", text: "voda a oxid uhličitý", correct: false },
    { id: "g", text: "asimiláty", correct: true },
    { id: "h", text: "glukóza", correct: true }
  ]
},
{
  id: 190,
  text: "Autotrofné organizmy sú:",
  options: [
    { id: "a", text: "konzumenty organickej hmoty", correct: false },
    { id: "b", text: "fotosyntetizujúce baktérie", correct: true },
    { id: "c", text: "odkázané na prísun organických látok z prostredia", correct: false },
    { id: "d", text: "producenty organickej hmoty", correct: true },
    { id: "e", text: "zelené rastliny", correct: true },
    { id: "f", text: "všetky saprofyty", correct: false },
    { id: "g", text: "huby", correct: false },
    { id: "h", text: "poloparazitické rastliny", correct: false }
  ]
},
{
  id: 191,
  text: "K mixotrofným rastlinám patria:",
  options: [
    { id: "a", text: "rosička", correct: true },
    { id: "b", text: "bublinatka", correct: true },
    { id: "c", text: "tučnica", correct: true },
    { id: "d", text: "mucholapka", correct: true },
    { id: "e", text: "imelo biele", correct: false },
    { id: "f", text: "kukučina", correct: false },
    { id: "g", text: "mäsožravé rastliny", correct: true },
    { id: "h", text: "hemiparazitické rastliny", correct: false }
  ]
},
{
  id: 192,
  text: "Bôbovité rastliny poskytujú hlúzkovitým baktériám:",
  options: [
    { id: "a", text: "dusík", correct: false },
    { id: "b", text: "hľúzky", correct: false },
    { id: "c", text: "bielkoviny", correct: false },
    { id: "d", text: "sacharidy", correct: true },
    { id: "e", text: "vodu a minerálne látky", correct: false },
    { id: "f", text: "oxid uhličitý a vodu", correct: false },
    { id: "g", text: "nitráty", correct: false },
    { id: "h", text: "asimilačné pigmenty", correct: false }
  ]
},
{
  id: 193,
  text: "Prvá etapa biologickej oxidácie:",
  options: [
    { id: "a", text: "prebieha v mitochondriách", correct: false },
    { id: "b", text: "prebieha v cytoplazme buniek", correct: true },
    { id: "c", text: "prebieha v eukaryotických bunkách v mitochondriách a v prokaryotických v cytoplazme", correct: false },
    { id: "d", text: "je enzymatické štiepenie glukózy", correct: true },
    { id: "e", text: "sa označuje ako pravé kvasenie", correct: false },
    { id: "f", text: "je proces nazývaný glykolýza", correct: true },
    { id: "g", text: "je proces glukoneogenézy", correct: false },
    { id: "h", text: "je štiepenie glukózy až na kyselinu pyrohroznovú", correct: true }
  ]
},
{
  id: 194,
  text: "Proces odbúravania glukózy až po kyselinu pyrohroznovú:",
  options: [
    { id: "a", text: "je úplná oxidácia", correct: false },
    { id: "b", text: "je glykolýza", correct: true },
    { id: "c", text: "je neúplná oxidácia", correct: true },
    { id: "d", text: "je aeróbne dýchanie", correct: false },
    { id: "e", text: "dáva čistý energetický zisk 36 molekuly ATP z jednej molekuly glukózy", correct: false },
    { id: "f", text: "dáva čistý energetický zisk 2 molekuly ATP z jednej molekuly glukózy", correct: true },
    { id: "g", text: "je mliečne kvasenie", correct: false },
    { id: "h", text: "je katabolický proces", correct: true }
  ]
},
[
  {
    "id": 195,
    "text": "Haustóriá majú:",
    "options": [
      { "id": "a", "text": "reducenty", "correct": false },
      { "id": "b", "text": "hemiparazity", "correct": true },
      { "id": "c", "text": "parazitické živočíchy", "correct": false },
      { "id": "d", "text": "mäsožravé rastliny", "correct": false },
      { "id": "e", "text": "poloparazity", "correct": true },
      { "id": "f", "text": "korene vyšších rastlín ako spojenie s mykoríznymi hubami", "correct": false },
      { "id": "g", "text": "parazitické rastliny", "correct": true },
      { "id": "h", "text": "konzumenty", "correct": false }
    ]
  },
  {
    "id": 196,
    "text": "Z hľadiska výživy baktérie môžu byť:",
    "options": [
      { "id": "a", "text": "iba heterotrofné organizmy", "correct": false },
      { "id": "b", "text": "autotrofno-heterotrofné organizmy", "correct": false },
      { "id": "c", "text": "iba autotrofné organizmy", "correct": false },
      { "id": "d", "text": "mixotrofné organizmy", "correct": false },
      { "id": "e", "text": "autotrofné organizmy", "correct": true },
      { "id": "f", "text": "heterotrofné organizmy", "correct": true },
      { "id": "g", "text": "fototrofné organizmy", "correct": true },
      { "id": "h", "text": "chemotrofné organizmy", "correct": true }
    ]
  },
  {
    "id": 197,
    "text": "Fylogeneticky najstarší spôsob tvorby organických látok je:",
    "options": [
      { "id": "a", "text": "prototrofia", "correct": true },
      { "id": "b", "text": "fotoautotrofia", "correct": false },
      { "id": "c", "text": "chemosyntéza", "correct": true },
      { "id": "d", "text": "fotosyntéza", "correct": false },
      { "id": "e", "text": "mixotrofia", "correct": false },
      { "id": "f", "text": "metabióza", "correct": false },
      { "id": "g", "text": "autotrofia na báze fotosyntézy", "correct": false },
      { "id": "h", "text": "chemoautotrofia", "correct": true }
    ]
  },
  {
    "id": 198,
    "text": "Pri mykoríze rastlina poskytuje hube predovšetkým:",
    "options": [
      { "id": "a", "text": "vodu", "correct": false },
      { "id": "b", "text": "asimilačné pigmenty", "correct": false },
      { "id": "c", "text": "minerálne látky", "correct": false },
      { "id": "d", "text": "sacharidy", "correct": true },
      { "id": "e", "text": "rastové látky", "correct": false },
      { "id": "f", "text": "vzdušný dusík", "correct": false },
      { "id": "g", "text": "kyslík", "correct": false },
      { "id": "h", "text": "glukózu", "correct": true }
    ]
  },
  {
    "id": 199,
    "text": "Mixotrofia:",
    "options": [
      { "id": "a", "text": "je autotrofno-heterotrofný spôsob výživy", "correct": true },
      { "id": "b", "text": "je prispôsobenie sa rastlín stanovišťu s výrazným deficitom dusíka", "correct": true },
      { "id": "c", "text": "je parazitický spôsob života", "correct": false },
      { "id": "d", "text": "je schopnosť niektorých rastlin získavať molekulárny dusík zo vzduchu", "correct": false },
      { "id": "e", "text": "je špecifický spôsob symbiózy", "correct": false },
      { "id": "f", "text": "je autotrofno-saprofytický spôsob výživy", "correct": false },
      { "id": "g", "text": "je typická pre mäsožravé rastliny", "correct": true },
      { "id": "h", "text": "znamená, že rastliny sa vyživujú anorganickými látkami a môžu súčasne prijímať aj organické látky", "correct": true }
    ]
  },
  {
    "id": 200,
    "text": "Medzi poloparazity patria:",
    "options": [
      { "id": "a", "text": "zelené rastliny, ktoré odoberajú vodu a minerálne látky odumretej rastline", "correct": false },
      { "id": "b", "text": "živočíchy odoberajúce vodu a minerálne živiny hostiteľskému organizmu", "correct": false },
      { "id": "c", "text": "imelo biele", "correct": true },
      { "id": "d", "text": "zelené rastliny, ktoré čerpajú vodu a minerálne látky z hostiteľa", "correct": true },
      { "id": "e", "text": "zelené rastliny, ktoré haustóriami odoberajú hostiteľovi organické látky", "correct": false },
      { "id": "f", "text": "mäsožravé rastliny", "correct": false },
      { "id": "g", "text": "kukučina, ktorá škodí d'ateline", "correct": false },
      { "id": "h", "text": "choroboplodné baktérie", "correct": false }
    ]
  },
  {
    "id": 201,
    "text": "Mykoríza je:",
    "options": [
      { "id": "a", "text": "symbióza húb s koreňmi vyšších rastlín", "correct": true },
      { "id": "b", "text": "symbióza húb s baktériami", "correct": false },
      { "id": "c", "text": "lichenizmus", "correct": false },
      { "id": "d", "text": "spolužitie húb so zelenými riasami", "correct": false },
      { "id": "e", "text": "nasadenie parazita na cudzopasiacu hubu", "correct": false },
      { "id": "f", "text": "typ mykózy", "correct": false },
      { "id": "g", "text": "nasadenie cudzopasiacej huby na parazita", "correct": false },
      { "id": "h", "text": "spôsob symbiózy", "correct": true }
    ]
  },
  {
    "id": 202,
    "text": "Chemosyntéza:",
    "options": [
      { "id": "a", "text": "je autotrofný spôsob výživy baktérií", "correct": true },
      { "id": "b", "text": "je heterotrofný spôsob výživy baktérií", "correct": false },
      { "id": "c", "text": "je spôsob tvorby organických látok nitrifikačných baktérií", "correct": true },
      { "id": "d", "text": "je zmiešaná autotrofno-heterotrofná výživa", "correct": false },
      { "id": "e", "text": "využíva ako zdroj uhlíka CO2", "correct": true },
      { "id": "f", "text": "využíva ako zdroj uhlíka glukózu", "correct": false },
      { "id": "g", "text": "je vývojovo mladšia ako fotosyntéza", "correct": false },
      { "id": "h", "text": "vyskytuje sa hlavne pri mikroorganizmoch bez asimilačných pigmentov", "correct": true }
    ]
  },
  {
    "id": 203,
    "text": "Poloparazity získavajú organické látky:",
    "options": [
      { "id": "a", "text": "fotosyntézou", "correct": true },
      { "id": "b", "text": "chemosyntézou", "correct": false },
      { "id": "c", "text": "z mŕtvych organizmov", "correct": false },
      { "id": "d", "text": "zo živých organizmov", "correct": false },
      { "id": "e", "text": "haustóriami, ktoré prenikajú do drevných častí cievnych zväzkov", "correct": false },
      { "id": "f", "text": "mykorízou", "correct": false },
      { "id": "g", "text": "haustóriami, ktoré prenikajú do lykových častí cievnych zväzkov", "correct": false },
      { "id": "h", "text": "tentakulami", "correct": false }
    ]
  }
],
];
