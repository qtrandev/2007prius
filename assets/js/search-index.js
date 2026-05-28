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
    icon: "🔋",
    title: "Hybrid Battery Replacement",
    url: "/repairs/hybrid-battery",
    description: "Replace the high-voltage hybrid traction battery. Covers reconditioning vs full replacement options.",
    keywords: "hybrid battery traction pack replacement P3000 P0A80 reconditioning refurbished cells NiMH HV battery red triangle power loss won't accelerate battery warning light modules Dr Prius"
  },
  {
    icon: "💧",
    title: "Inverter Coolant Pump Replacement",
    url: "/repairs/inverter-pump",
    description: "Replace the inverter water pump that cools the hybrid system. Failure causes an overheating warning.",
    keywords: "inverter coolant pump water pump hybrid overheating P0A93 triangle warning red SLLC pink coolant proactive preventive inverter water pump coolant flush Toyota Super Long Life"
  },
  // ── Brakes ──
  {
    icon: "🛑",
    title: "ABS Actuator Repair",
    url: "/repairs/abs-actuator",
    description: "Fix the three amigos: ABS, VSC, and brake warning lights together. Almost always the ABS actuator pump.",
    keywords: "ABS VSC brake warning light three amigos actuator pump C2227 C1252 C1253 skid control brakes brake pump noise spongy brakes soft pedal brake light on bleeding"
  },
  // ── Electrical & Instrument ──
  {
    icon: "🎛️",
    title: "Combination Meter Repair",
    url: "/repairs/combination-meter",
    description: "Fix a failing speedometer or dashboard instrument cluster.",
    keywords: "speedometer dashboard cluster instrument combination meter repair gauge needle odometer stopped fuel gauge stuck speedometer zero instrument panel broken capacitors dashboard lights gauges not working"
  },
  {
    icon: "📺",
    title: "MFD Screen Goes Dark",
    url: "/repairs/mfd-display",
    description: "Fix the multi-function display (MFD) going black. Usually a blown DOME fuse.",
    keywords: "MFD display screen dark black blank DOME fuse multi-function touchscreen navigation screen not working radio screen dark entertainment screen display off screen went black"
  },
  // ── Maintenance ──
  {
    icon: "🔌",
    title: "12V Auxiliary Battery",
    url: "/repairs/12v-battery",
    description: "Replace the 12V auxiliary battery. Failure causes the car not to start even with a full hybrid battery.",
    keywords: "12v battery auxiliary dead won't start click S46B24R Panasonic small battery under hood no power nothing works dead car locks not working no dash lights jump start Group 51R JIS"
  },
  {
    icon: "🔩",
    title: "Spark Plug Replacement",
    url: "/repairs/spark-plugs",
    description: "Replace spark plugs on the Gen 2 Prius. Iridium plugs only, torque specs, OEM part numbers, and step-by-step coil-on-plug access.",
    keywords: "spark plugs iridium NGK Denso IFR5T11 SK16R11 90919-01176 ignition coil tune up tuneup misfire P0301 P0302 P0303 P0304 60000 miles 1NZ-FXE rough idle hesitation"
  },
  // ── Diagnostics ──
  {
    icon: "💨",
    title: "P0420 Catalyst System Efficiency",
    url: "/repairs/p0420",
    description: "The most common check engine light on high-mileage Gen 2 Prius. Covers diagnosis, O2 sensor vs catalytic converter, replacement costs, and theft.",
    keywords: "P0420 catalytic converter catalyst efficiency check engine light CEL O2 sensor oxygen sensor exhaust emissions cat replacement stolen theft smog test fail CARB EPA aftermarket direct fit downstream sensor Bank 1"
  },
  {
    icon: "📟",
    title: "Clear Engine Fault Codes",
    url: "/repairs/clear-engine-codes",
    description: "How to read and clear OBD2 engine fault codes using a Bluetooth adapter and the Torque app.",
    keywords: "OBD2 clear engine light codes check engine CEL Torque app Bluetooth adapter reset scanner P0420 ELM327 diagnostic warning light scan tool"
  },
  // ── Lighting ──
  {
    icon: "💡",
    title: "Headlight Bulb Replacement",
    url: "/repairs/headlight-bulbs",
    description: "Replace headlight bulbs on the Gen 2 Prius. Covers bulb type and removal.",
    keywords: "headlight bulb replacement 9003 H4 HB2 high low beam headlamp burnt out Sylvania Silverstar dim lights flickering dark HID xenon D2R D4R fog light 9006"
  },
  // ── Tires ──
  {
    icon: "🏎️",
    title: "Tire Replacements",
    url: "/repairs/tires",
    description: "Tire replacement guide with recommended sizes, costs, and 17-year real-world data.",
    keywords: "tires wheels wheel rim replacement size 185/65R15 P185 cost Michelin Goodyear Bridgestone Defender alignment rotation tire pressure PSI flat tire tread wear Costco"
  },
  // ── Body & Exterior ──
  {
    icon: "🔨",
    title: "Hatch Lift Struts Replacement",
    url: "/repairs/hatch-struts",
    description: "Replace the rear hatch gas lift struts when the hatch won't stay open. Easy DIY, $30 for a pair.",
    keywords: "hatch struts lift supports trunk rear hatch falls won't stay open gas strut hatch support liftgate QiMox hatch prop trunk lid cargo area rear door tailgate"
  },
  {
    icon: "🚗",
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
    description: "Recommended tools, OBD2 scanners, and parts sources for Gen 2 Prius work.",
    keywords: "tools parts OBD2 scanner recommended torque wrench supplies Amazon part number RockAuto junkyard pull-a-part LKQ where to buy parts list tool list ELM327 Dr Prius Torque Pro"
  },
  {
    icon: "⚠️",
    title: "Error Codes",
    url: "/error-codes",
    description: "Common OBD2 and Toyota-specific fault codes for the Gen 2 Prius with plain-English explanations.",
    keywords: "error codes fault OBD2 P0420 P3000 C2227 P0A80 P0A93 C1252 C1336 diagnostic check engine triangle red triangle warning light hybrid codes fault codes list"
  }
];
