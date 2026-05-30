var SEARCH_INDEX = [
  // ── Nav pages ──
  {
    icon: "🚗",
    title: "Home",
    url: "/",
    description: "Gen 2 Toyota Prius (2004–2009) repair and ownership archive. 17 years of real repairs, real costs.",
    keywords: "2007 prius gen 2 toyota repair guide ownership 2004 2005 2006 2008 2009 community wiki archive"
  },
  {
    icon: "🔧",
    title: "Repair Guides",
    url: "/repairs/",
    description: "All repair guides for the Gen 2 Toyota Prius.",
    keywords: "repairs guides all list index diy how to fix maintenance service"
  },
  // ── Hybrid System ──
  {
    icon: "⚡",
    title: "Hybrid Battery Replacement",
    url: "/repairs/hybrid-battery",
    description: "Replace the high-voltage hybrid traction battery. Covers reconditioning vs full replacement options.",
    keywords: "hybrid battery traction pack replacement P3000 P0A80 p3000 p0a80 0a80 reconditioning refurbished cells NiMH HV battery red triangle triangle warning power loss won't accelerate sluggish barely moving car slow bad mpg poor fuel economy poor mileage battery warning light modules Dr Prius how much does it cost"
  },
  {
    icon: "💧",
    title: "Inverter Coolant Pump Replacement",
    url: "/repairs/inverter-pump",
    description: "Replace the inverter water pump that cools the hybrid system. Failure causes an overheating warning.",
    keywords: "inverter coolant pump water pump hybrid overheating P0A93 p0a93 0a93 triangle warning red triangle SLLC pink coolant proactive preventive replace before it fails prevent inverter failure inverter overheating inverter water pump coolant flush Toyota Super Long Life"
  },
  // ── Brakes ──
  {
    icon: "🛑",
    title: "ABS Actuator Repair",
    url: "/repairs/abs-actuator",
    description: "Fix the three amigos: ABS, VSC, and brake warning lights together. Almost always the ABS actuator pump.",
    keywords: "ABS VSC brake warning light three amigos 3 amigos 3amigos all three lights three lights on dashboard three warning lights actuator pump C1252 C1253 c1252 c1253 skid control brakes brake pump noise pump running constantly pump won't stop draining battery overnight spongy brakes soft pedal brake light on bleeding"
  },
  // ── Electrical & Instrument ──
  {
    icon: "🎛️",
    title: "Combination Meter Repair",
    url: "/repairs/combination-meter",
    description: "Fix a failing speedometer or dashboard instrument cluster.",
    keywords: "speedometer dashboard cluster instrument combination meter repair gauge needle odometer stopped fuel gauge stuck speedometer zero speedometer drops instrument panel broken capacitors dashboard lights gauges not working speedo stepper motor gauge drop cluster dark cluster went dark cluster black cluster off 12v battery disconnect reset cluster speedometer not working gauges stopped gauges dead cluster not working instrument cluster dead"
  },
  {
    icon: "📺",
    title: "MFD Screen — Fuse Reset & Replacement",
    url: "/repairs/mfd-display",
    description: "Fix the MFD touchscreen going dark. DOME fuse reset is free and takes 5 minutes. Full physical replacement guide with compatibility, delamination risk, and vent clip warning.",
    keywords: "MFD display screen dark black blank DOME fuse dome fuse out pull fuse out remove fuse reseat fuse fuse trick fuse fix fuse reset multi-function touchscreen navigation screen not working radio screen dark entertainment screen display off screen suddenly black screen won't come on delamination vent clip center dash trim 2006 2007 2008 2009 replacement used eBay junkyard"
  },
  // ── Maintenance ──
  {
    icon: "🔋",
    title: "12V Auxiliary Battery",
    url: "/repairs/12v-battery",
    description: "Replace the 12V auxiliary battery. Failure causes the car not to start even with a full hybrid battery.",
    keywords: "12v battery auxiliary dead won't start won't turn on click S46B24R Panasonic small battery under hood no power nothing works dead car locks not working no dash lights jump start Group 51R JIS twelve volt 12 volt car dead completely dead no response car totally dead nothing turns on car won't do anything"
  },
  {
    icon: "🔩",
    title: "Spark Plug Replacement",
    url: "/repairs/spark-plugs",
    description: "Replace spark plugs on the Gen 2 Prius. Iridium plugs only, torque specs, OEM part numbers, and step-by-step coil-on-plug access.",
    keywords: "spark plugs iridium NGK Denso IFR5T11 SK16R11 90919-01176 ignition coil tune up tuneup misfire P0301 P0302 P0303 P0304 120000 miles 120k 60000 miles 1NZ-FXE rough idle hesitation engine rough misfiring rough cold start engine hesitation plug replacement scheduled maintenance"
  },
  // ── Comfort & Climate ──
  {
    icon: "❄️",
    title: "AC Recharge — Adding Refrigerant",
    url: "/repairs/ac-recharge",
    description: "AC stops blowing cold after 10+ years. How to recharge with a consumer R-134a can. Low-side port procedure, electric compressor notes, and what diminishing results mean.",
    keywords: "AC air conditioning recharge refrigerant R-134a freon AC Pro Walmart not cold warm air blowing hot AC not working AC stopped working AC weak AC recharge low side port AC can evaporator compressor leak AC Pro Arctic Freeze R134a 134a air conditioning not cold AC stopped working air not cold hot car summer heat"
  },
  // ── Diagnostics ──
  {
    icon: "💨",
    title: "P0420 Catalyst System Efficiency",
    url: "/repairs/p0420",
    description: "The most common check engine light on high-mileage Gen 2 Prius. Covers diagnosis, O2 sensor vs catalytic converter, replacement costs, and theft.",
    keywords: "P0420 p0420 p420 0420 420 catalytic converter cat converter catalyst efficiency check engine light CEL O2 sensor oxygen sensor exhaust emissions cat replacement stolen theft smog test fail CARB EPA aftermarket direct fit downstream sensor Bank 1"
  },
  {
    icon: "🌡️",
    title: "P1121 — Coolant Flow Control Valve",
    url: "/repairs/p1121",
    description: "Replace the coolant flow control valve on a Gen 2 Prius. Fixes P1121 code, no cabin heat, and cold-start fuel economy loss.",
    keywords: "P1121 p1121 coolant flow control valve CFCV no heat cabin heat heater not working cold P1120 P1122 P1123 16670-21010 three way valve coolant bypass valve heater core heat storage thermos TSB EG001-08 stuck valve position sensor"
  },
  {
    icon: "📟",
    title: "Clear Engine Fault Codes",
    url: "/repairs/clear-engine-codes",
    description: "How to read and clear OBD2 engine fault codes using a Bluetooth adapter and the Torque app.",
    keywords: "OBD2 clear engine light codes check engine CEL Torque app Bluetooth adapter reset scanner P0420 p0420 ELM327 diagnostic warning light scan tool read codes how to clear codes erase codes turn off check engine light how to reset codes engine light reset"
  },
  // ── Lighting ──
  {
    icon: "💡",
    title: "Headlight Bulb Replacement",
    url: "/repairs/headlight-bulbs",
    description: "Replace headlight bulbs on the Gen 2 Prius. Covers bulb type and removal.",
    keywords: "headlight bulb replacement 9003 H4 HB2 high low beam headlamp burnt out Sylvania Silverstar dim lights flickering dark HID xenon D2R D4R fog light 9006 headlight out headlight not working one headlight dim bulb burned out replace headlight"
  },
  // ── Tires ──
  {
    icon: "🏎️",
    title: "Tire Replacements",
    url: "/repairs/tires",
    description: "Tire replacement guide with recommended sizes, costs, and 17-year real-world data.",
    keywords: "tires wheels wheel rim replacement size 185/65R15 P185 cost Michelin Goodyear Bridgestone Defender alignment rotation tire pressure PSI flat tire tread wear Costco"
  },
  {
    icon: "🌬️",
    title: "Cabin Air Filter Replacement",
    url: "/repairs/cabin-air-filter",
    description: "Replace the cabin air filter behind the glovebox. No tools, $10–15, done in 10 minutes. Easy DIY most owners skip for years.",
    keywords: "cabin air filter HVAC air quality dust pollen glovebox filter replacement air flow vents weak airflow musty smell bad smell AC air conditioning heat defrost 15000 miles maintenance cabin filter change filter replace filter how to change cabin filter glove box filter air filter inside car"
  },
  {
    icon: "🔑",
    title: "Key Fob Battery Replacement",
    url: "/repairs/key-fob-battery",
    description: "Replace the Gen 2 Prius smart key fob battery. CR2032, how to open the fob, and emergency start if the battery is completely dead.",
    keywords: "key fob battery smart key CR2032 coin battery remote key fob dead battery won't start key battery low warning smart key battery low RFID transponder emergency start fob not working door won't unlock key remote dead key not working remote not working key doesn't work car not recognizing key push to start not working can't unlock car"
  },
  {
    icon: "🛢️",
    title: "Oil Consumption — Monitor & Manage",
    url: "/repairs/oil-consumption",
    description: "High-mileage Gen 2 engines burn oil between changes. How to check the dipstick, symptoms of low oil, and options for managing consumption.",
    keywords: "oil consumption low oil dipstick check engine knocking ticking weak acceleration oil level monitor burning oil 5W-30 synthetic add oil filler cap piston rings valve seals high mileage oil pressure warning Seafoam engine treatment adding oil between changes how to add oil oil running low check oil level oil keeps going down"
  },
  // ── Body & Exterior ──
  {
    icon: "🔒",
    title: "Rear Hatch Latch Replacement",
    url: "/repairs/hatch-latch",
    description: "Fix a Gen 2 Prius rear hatch that won't open, won't stay closed, or triggers false alarms.",
    keywords: "hatch latch rear latch hatch won't open hatch won't close hatch stuck alarm false alarm door ajar warning latch assembly 69350-47030 interior trim panel latch replacement hatch latch broken hatch latch stuck power lock actuator door ajar switch overnight alarm"
  },
  {
    icon: "🔨",
    title: "Hatch Lift Struts Replacement",
    url: "/repairs/hatch-struts",
    description: "Replace the rear hatch gas lift struts when the hatch won't stay open. Easy DIY, $30 for a pair.",
    keywords: "hatch struts lift supports trunk rear hatch falls won't stay open gas strut hatch support liftgate QiMox hatch prop trunk lid cargo area rear door tailgate"
  },
  {
    icon: "🌧️",
    title: "Trunk Water Leak — Find & Seal",
    url: "/repairs/trunk-water-leak",
    description: "Find and seal water leaks in the Gen 2 Prius cargo area. Three common sources: tail light gaskets, roof weld seams, and hatch weatherstripping. Covers rust treatment.",
    keywords: "trunk water leak cargo area wet trunk rust spare tire well tail light gasket weld seam silicone sealant hatch weatherstrip leak water intrusion rain water in trunk 12v battery corrosion rust treatment water in my car trunk wet leaking when raining water getting in back of car cargo wet after rain"
  },
  {
    icon: "🚙",
    title: "Window Weatherstrip Replacement",
    url: "/repairs/weatherstrip",
    description: "Replace door window weatherstrip seals to stop wind noise and rattling.",
    keywords: "weatherstrip door seal window rattle wind noise whistle OEM part rubber trim water leak leaking drafty rubber falling off rain coming in 75720-47010 75710-47010 window seal peeling"
  },
  // ── Section pages ──
  {
    icon: "📅",
    title: "Failure Timeline",
    url: "/timeline",
    description: "Chronological log of every repair and failure on a high-mileage 2007 Prius.",
    keywords: "timeline failure history repairs chronological log mileage when breaks 200000 maintenance schedule service schedule what breaks when to replace high mileage preventive"
  },
  {
    icon: "🛠️",
    title: "Tools & Parts",
    url: "/tools",
    description: "Recommended tools, OBD2 scanners, parts sources, fluids, and fuse quick reference for Gen 2 Prius work.",
    keywords: "tools parts OBD2 scanner recommended torque wrench supplies Amazon part number RockAuto junkyard pull-a-part LKQ where to buy parts list tool list ELM327 Dr Prius Torque Pro fuse fuses AM2 am2 DOME dome CIG cig GAUGE gauge ABS fuse cigarette lighter 12v outlet accessory port power outlet not working fuse box engine compartment interior fuse box ECU reset hard reset electrical reset fluids 5W-30 oil coolant SLLC brake fluid"
  },
  {
    icon: "⚠️",
    title: "Error Codes",
    url: "/error-codes",
    description: "Common OBD2 and Toyota-specific fault codes for the Gen 2 Prius with plain-English explanations.",
    keywords: "error codes fault OBD2 P0420 p420 P3000 p3000 P0A80 p0a80 P0A93 p0a93 P3004 p3004 C1241 c1241 C1252 c1252 C1253 c1253 C1336 c1336 C0200 C0215 P0301 P0171 P0441 P1121 p1121 P3006 p3006 P3009 p3009 P0A0F P0A94 diagnostic check engine triangle red triangle warning light hybrid codes fault codes list what does code mean what does this code mean warning light meaning code explanation"
  }
];
