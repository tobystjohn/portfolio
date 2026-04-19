export type ProjectSection = {
  heading: string;
  body: string[];
  list?: string[];
  table?: { label: string; value: string }[];
  image?: string;
  imageCaption?: string;
};

export type SidebarCard = {
  title: string;
  rows?: { label: string; value: string }[];
  tags?: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  tagline: string;
  category: string;
  status: "In Development" | "In Progress" | "Completed";
  hero: {
    type: "video" | "image" | "gradient" | "scroll-video" | "gallery";
    src?: string;
    poster?: string;
    images?: string[];
  };
  meta: { label: string; value: string }[];
  sections: ProjectSection[];
  sidebar: SidebarCard[];
  tags: string[];
  accent: string;
  cardBlurb: string;
};

export const projects: Project[] = [
  {
    slug: "fixed-wing-drone",
    title: "VTOL Drone",
    subtitle: "Autonomous Aerial Intelligence for Remote Operations",
    tagline:
      "A custom-engineered, long-endurance VTOL UAV for autonomous surveillance and agricultural survey across the Australian landscape — combining multirotor flexibility with fixed-wing efficiency.",
    category: "Aeronautics / Autonomy",
    status: "In Development",
    hero: {
      type: "scroll-video",
      src: "/drone.mp4",
      poster: "/Stallion_VTOL_drone_202604181717.jpeg",
    },
    meta: [
      { label: "Platform", value: "Flightory Stallion" },
      { label: "Flight Stack", value: "ArduPilot" },
      { label: "Target Endurance", value: "4+ Hours" },
      { label: "AUW (target)", value: "< 3 kg" },
    ],
    sections: [
      {
        heading: "Overview",
        body: [
          "The VTOL Drone is a custom-engineered, long-endurance unmanned aerial vehicle purpose-built for autonomous surveillance and agricultural survey missions across the Australian landscape. Combining the vertical take-off and landing flexibility of a multirotor with the aerodynamic efficiency of a fixed-wing aircraft, the platform delivers extended operational range without the need for runways or launch infrastructure.",
          "Developed around the Flightory Stallion airframe and powered by the open-source ArduPilot flight stack, the aircraft is engineered for professional remote-sensing applications in environments where conventional aviation is impractical or uneconomical.",
        ],
      },
      {
        heading: "Mission Capabilities",
        body: [
          "Early-Stage Bushfire Detection — The platform is designed to support autonomous fire spotting across remote and high-risk terrain. A dual-sensor AI payload enables detection of thermal anomalies before visible ignition, providing actionable intelligence to land managers and emergency response agencies.",
          "Agricultural Survey & Crop Intelligence — A secondary commercial application is pyrethrum crop maturity assessment. Using a Flower Maturity Index derived from high-resolution aerial imagery, the system provides growers with precise harvest-timing data — reducing waste, improving yield quality, and optimising agronomic decision-making.",
        ],
      },
      {
        heading: "Airframe & Configuration",
        body: [
          "The aircraft uses two tilting front rotors for vertical lift and forward thrust, paired with a fixed rear motor for attitude control during hover. Transition to forward flight is managed autonomously by the flight controller, with the twin-boom V-tail providing stable cruise performance at low power.",
        ],
        list: [
          "Configuration: Tilt-rotor tricopter with V-tail",
          "Wingspan: 1,340 mm",
          "Length: 990 mm",
          "Wing area: 26.5 dm²",
          "Airfoil: Eppler E205",
          "All-up weight (target): Under 3 kg",
          "Optimal cruise speed: 60–70 km/h",
          "Target endurance: 4+ hours",
        ],
      },
      {
        heading: "Propulsion & Power",
        body: [
          "The power system is architected for a staged commissioning process: initial flight validation on 4S hardware, transitioning to higher-voltage 6S configurations as the airframe is proven.",
        ],
        list: [
          "Motors: BrotherHobby Avenger 2806.5 1300KV (×3)",
          "ESCs: Lumenier 51A BLHeli_32 (6S-capable, DShot1200)",
          "Propellers: HQ 7×4.5 2-blade",
          "Tilt servos: GDW DS041MG metal-gear digital servos",
          "Battery (staged): 4S 5000 mAh LiPo → 6S Li-Ion for extended endurance",
        ],
      },
      {
        heading: "Flight Controller & Avionics",
        body: [
          "The Matek H743-WING is an industrial-grade H7-based controller offering the processing overhead required for complex autonomous missions, redundant sensor fusion, and companion-computer integration.",
        ],
        list: [
          "Flight controller: Matek H743-WING V3",
          "GPS / Compass: Matek M10Q-5883",
          "RC link: Matek R24-D ELRS 2.4 GHz",
          "Firmware: ArduPilot (MAVLink)",
          "Ground control: Mission Planner / QGroundControl",
        ],
      },
      {
        heading: "Airframe Construction",
        body: [
          "The airframe is manufactured using a multi-material additive manufacturing strategy, selected specifically for durability under Australian environmental conditions. This hybrid approach balances structural integrity with the low mass required to achieve long-endurance performance targets.",
        ],
        list: [
          "Wing skins: ASA Aero foaming filament — lightweight, UV-stable, heat-resistant",
          "Structural nodes: PAHT-CF (carbon-fibre-reinforced polyamide)",
          "Vibration mounts and hinges: TPU 95A flexible elastomer",
          "Primary spars and tail booms: Pre-manufactured carbon fibre tubing",
        ],
      },
      {
        heading: "Autonomous Payload Architecture",
        body: [
          "The payload bay is designed to accommodate a dual-camera artificial intelligence system for real-time onboard analysis, enabling detection, classification, and geotagging in flight — reducing post-mission processing time and enabling near-real-time situational awareness.",
        ],
        list: [
          "Thermal imaging: FLIR Boson 640 long-wave infrared sensor",
          "Visible-spectrum imaging: Arducam IMX477 HQ camera + 16 mm C-mount optics",
          "Companion computer: NVIDIA Jetson Orin Nano Super",
          "AI inference: YOLOv8n + MobileNetV3-Small, TensorRT on JetPack 6.2",
          "Post-flight: Georeferenced mapping via rasterio and QGIS pipelines",
        ],
      },
      {
        heading: "Communications & Command Link",
        body: [
          "The communications stack is designed for progressive deployment from line-of-sight test flights through to beyond visual line of sight (BVLOS) operations.",
        ],
        list: [
          "Primary long-range telemetry: RFD900x (915–928 MHz, ACMA-compliant)",
          "Secondary link: 4G LTE via Telstra SIM for metropolitan / regional coverage",
          "Emergency failsafe: Iridium RockBLOCK 9603 satellite modem via ArduPilot Lua",
        ],
      },
      {
        heading: "Operational Roadmap",
        body: [
          "The aircraft is being brought into service through a structured, risk-managed commissioning programme.",
        ],
        list: [
          "Bench configuration — parameter tuning and pre-flight validation via USB-tethered ground station",
          "Initial hover and transition testing — low-altitude flights on 4S power with default ArduPilot tuning",
          "Endurance testing — migration to 6S Li-Ion power system and aerodynamic optimisation",
          "Mission payload integration — installation and calibration of dual-sensor AI system",
          "BVLOS certification pathway — long-range telemetry, LTE backup, satellite failsafe",
        ],
      },
      {
        heading: "Regulatory Compliance",
        body: [
          "All operations are designed to comply with Australian civil aviation and radio-frequency regulations, including CASA (Civil Aviation Safety Authority) for airspace and operational compliance, and ACMA (Australian Communications and Media Authority) for radio spectrum licensing.",
        ],
      },
      {
        heading: "Project Status",
        body: [
          "The VTOL Drone is currently in the build and commissioning phase, with core propulsion, avionics, and flight control hardware acquired and the airframe entering the 3D printing stage. Initial flight testing is planned on 4S power, with progressive upgrades to the full mission configuration scheduled in line with the operational roadmap.",
        ],
      },
    ],
    sidebar: [
      {
        title: "Airframe",
        rows: [
          { label: "Config", value: "Tilt-rotor Tricopter" },
          { label: "Wingspan", value: "1,340 mm" },
          { label: "Length", value: "990 mm" },
          { label: "Wing area", value: "26.5 dm²" },
          { label: "Airfoil", value: "Eppler E205" },
          { label: "AUW (target)", value: "< 3 kg" },
          { label: "Cruise", value: "60–70 km/h" },
        ],
      },
      {
        title: "Propulsion",
        rows: [
          { label: "Motors", value: "BH Avenger 2806.5 1300KV" },
          { label: "ESCs", value: "Lumenier 51A BLHeli_32" },
          { label: "Props", value: "HQ 7×4.5" },
          { label: "Tilt servos", value: "GDW DS041MG" },
          { label: "Battery", value: "4S → 6S Li-Ion" },
        ],
      },
      {
        title: "Avionics",
        rows: [
          { label: "FC", value: "Matek H743-WING V3" },
          { label: "GPS", value: "Matek M10Q-5883" },
          { label: "RC", value: "Matek R24-D ELRS" },
          { label: "Firmware", value: "ArduPilot" },
          { label: "GCS", value: "Mission Planner" },
        ],
      },
      {
        title: "AI Payload",
        rows: [
          { label: "Thermal", value: "FLIR Boson 640" },
          { label: "RGB", value: "Arducam IMX477" },
          { label: "Compute", value: "Jetson Orin Nano" },
          { label: "Inference", value: "YOLOv8n + TensorRT" },
        ],
      },
      {
        title: "Comms",
        rows: [
          { label: "Primary", value: "RFD900x 915 MHz" },
          { label: "Secondary", value: "4G LTE (Telstra)" },
          { label: "Failsafe", value: "Iridium 9603" },
        ],
      },
      {
        title: "Technologies",
        tags: [
          "ArduPilot",
          "VTOL",
          "Tilt-Rotor",
          "Jetson Orin",
          "YOLOv8",
          "TensorRT",
          "FLIR",
          "LoRa",
          "MAVLink",
          "3D Printing",
          "CAD",
        ],
      },
    ],
    tags: ["Aerospace", "Autonomy", "AI", "VTOL"],
    accent: "from-amber-500/20 to-amber-500/0",
    cardBlurb:
      "Custom long-endurance tilt-rotor VTOL UAV for bushfire detection and agricultural survey — ArduPilot, Jetson Orin, 4+ hour endurance.",
  },
  {
    slug: "morphing-wing",
    title: "Morphing Wing Aerofoil",
    subtitle: "Dual-Surface Morphing with Live Stall Monitoring",
    tagline:
      "A dual-surface morphing aerofoil — rack-and-gear lower surface coupled with cam-and-gear camber control — wind-tunnel validated to a 14.24 lift-to-drag ratio at cruise, with an onboard tri-axis tilt sensor and live web dashboard.",
    category: "Aerodynamics / Controls",
    status: "Completed",
    hero: {
      type: "image",
      src: "/morphing-wing/wing-on-stand.png",
    },
    meta: [
      { label: "Course", value: "DESN1000 — Stream 2, Group S" },
      { label: "Institution", value: "UNSW Sydney" },
      { label: "My Role", value: "Problem Definition + Final Model (Mechanics)" },
      { label: "Cruise L/D", value: "14.24 @ 5° morph" },
    ],
    sections: [
      {
        heading: "Problem Definition",
        body: [
          "Modern aircraft rely on a broken flap system integrated into the trailing edge. The discontinuity in the surface during flap extension produces unnecessary drag and promotes early flow separation. A morphing system replaces that break with a continuous, deformable surface — maintaining attached flow and improving the lift-to-drag ratio across the flight envelope.",
          "The project brief was to design, build, and test a morphing aerofoil that outperforms a traditional flap system, assessed primarily on lift-to-drag ratio across takeoff, cruise, and landing configurations.",
        ],
      },
      {
        heading: "Design Constraints",
        body: [],
        list: [
          "Chord: 150 mm · Span: 90 mm (wind-tunnel geometry)",
          "Test speed: 17 m/s · Reynolds number ≈ 1.7 × 10⁵",
          "Manufacturing limited to 3D printing, laser cutting, and hand tools",
          "Structure must withstand servo torque and airflow loads, remain repairable",
          "Must clearly demonstrate morphing under live airflow",
        ],
      },
      {
        heading: "Concept Generation",
        body: [
          "The team explored compliant mechanisms first — spine-based structures and fishbone-inspired skeletons — prototyping each to test feasibility. The spine concept offered excellent flexibility but demanded SLA resin printing we couldn't access. The fishbone design forced a strict trade-off between flex and strength; PLA prints couldn't do both.",
          "We pivoted to treating the skin itself as part of the compliant mechanism. By pulling the lower surface inward toward the leading edge, the upper surface is pulled down in sympathy — producing a smooth, continuous morph. A rack-and-gear actuator drives the lower skin; a second servo adjusts camber thickness, letting a single aerofoil sweep through a family of NACA profiles.",
        ],
        image: "/morphing-wing/prototype-stack.jpg",
        imageCaption:
          "Iteration stack — nearly every component was redesigned at least once. CAD predictions rarely survived contact with a print bed.",
      },
      {
        heading: "Final Design — Dual-Surface Morphing",
        body: [
          "The final model (nicknamed 'The DEVIL') couples two independent mechanisms to decouple camber from thickness:",
        ],
        list: [
          "Lower surface: rack-and-gear driven by a servo, pulling the lower skin inward to create a continuous camber morph up to 40°",
          "Upper surface: cam-and-gear mechanism with a slotted cam, actuated by a second servo to vary maximum thickness across NACA 4415 → 4422",
          "Track-and-bearing system guiding the lower rack's translation — added after early prototypes showed binding, friction, and twisting under load",
          "Return-pin slot in the cam — resolved the upper surface failing to return to its original position after thickness changes",
          "PLA 3D-printed structural parts — balancing stiffness, repairability, and rapid iteration",
        ],
        image: "/morphing-wing/morph-comparison.png",
        imageCaption:
          "NACA 4415 in neutral cruise (left) and morphed to maximum for landing (right) — continuous surface, no flap break.",
      },
      {
        heading: "Electronics & Live Stall Monitor",
        body: [
          "Once the mechanical system was proven, we integrated an MMA8452Q tri-axis digital tilt sensor (0.02° accuracy) at the wing root to measure angle of attack in real time. The sensor data feeds a locally-hosted web application that visualises attitude, max camber, and flap morph on a custom dashboard, and triggers an audible stall alert when the measured angle exceeds the empirically-derived stall limit for the current configuration.",
          "The dashboard migrated from a Python/gauge prototype to a styled HTML/CSS web app for a cleaner, more immersive pilot interface.",
        ],
        image: "/morphing-wing/dashboard-ui.png",
        imageCaption:
          "Live stall-monitor dashboard — attitude indicator, max camber, and flap morph, sourced from the MMA8452Q at 0.02° accuracy.",
      },
      {
        heading: "Wind Tunnel Validation",
        body: [
          "Testing in UNSW's wind tunnel characterised the wing across morph angle, max thickness, and angle of attack, with the data cross-referenced against XFLR5 CFD predictions.",
          "Final configuration testing confirmed the design thesis:",
        ],
        list: [
          "Takeoff (0° morph): 88 mN lift, 22 mN drag, L/D = 4.00",
          "Cruise (5° morph): 541 mN lift, 38 mN drag, L/D = 14.24",
          "Landing (15° morph): 514 mN lift, 53 mN drag, L/D = 9.70",
        ],
        image: "/morphing-wing/wind-tunnel-test.png",
        imageCaption:
          "UNSW wind tunnel — 17 m/s, Re ≈ 1.7 × 10⁵. Cruise configuration at 5° morph produced L/D 14.24.",
      },
      {
        heading: "Results & Reflection",
        body: [
          "The 5° cruise configuration optimised both lift and drag, producing an aerodynamically efficient aerofoil for long-endurance cruising. Landing intentionally traded efficiency for controlled drag increase — desirable for deceleration and approach stability.",
          "A key limitation surfaced during the final full-sweep angle-of-attack test: the aerofoil generated enough lift to unscrew itself from the threaded mounting system, rotating progressively during extended runs and skewing the continuous-sweep results. Three-condition point measurements remained valid because each held the aerofoil fixed for long enough to gather clean data before the mount loosened.",
          "Servo torque limits capped the achievable morph at ~40° rather than the 60–90° range predicted by the material and mechanical models — a reminder that actuator specification, not geometry, often sets the real performance ceiling.",
        ],
      },
      {
        heading: "Future Work",
        body: [],
        list: [
          "Elastic skin material for full aerofoil enclosure and smoother morph geometry",
          "Leading-edge morphing mechanism to complement the trailing-edge system",
          "Higher-torque servos within a stricter weight budget",
          "Modular mechanism design allowing subsystem swaps without reprinting the wing",
          "Closed-loop feedback between tilt sensor and actuator limits",
        ],
      },
    ],
    sidebar: [
      {
        title: "Geometry",
        rows: [
          { label: "Chord", value: "150 mm" },
          { label: "Span", value: "90 mm" },
          { label: "Base profile", value: "NACA 4415" },
          { label: "Morph range", value: "NACA 4415–4422" },
          { label: "Flap morph", value: "0°–40°" },
        ],
      },
      {
        title: "Wind Tunnel Results",
        rows: [
          { label: "Re", value: "~1.7 × 10⁵" },
          { label: "Airspeed", value: "17 m/s" },
          { label: "Takeoff L/D", value: "4.00" },
          { label: "Cruise L/D", value: "14.24" },
          { label: "Landing L/D", value: "9.70" },
        ],
      },
      {
        title: "Mechanisms",
        rows: [
          { label: "Lower surface", value: "Rack & Gear" },
          { label: "Upper surface", value: "Cam & Gear" },
          { label: "Guide", value: "Track & Bearing" },
          { label: "Actuation", value: "Dual Servo" },
        ],
      },
      {
        title: "Electronics",
        rows: [
          { label: "Tilt Sensor", value: "MMA8452Q" },
          { label: "Accuracy", value: "0.02°" },
          { label: "Dashboard", value: "HTML/CSS Web App" },
          { label: "Alert", value: "Live Stall Alarm" },
        ],
      },
      {
        title: "Manufacturing",
        rows: [
          { label: "Structure", value: "PLA (FDM)" },
          { label: "Validation", value: "XFLR5 + Wind Tunnel" },
          { label: "CAD", value: "SolidWorks" },
        ],
      },
      {
        title: "Technologies",
        tags: [
          "SolidWorks",
          "XFLR5",
          "Wind Tunnel",
          "3D Printing",
          "MMA8452Q",
          "Arduino",
          "Web App",
          "Rack & Gear",
          "Cam Mechanism",
        ],
      },
    ],
    tags: ["Aerodynamics", "Mechanisms", "R&D", "Controls"],
    accent: "from-violet-500/20 to-violet-500/0",
    cardBlurb:
      "Dual-surface morphing aerofoil — rack-and-gear camber + cam-and-gear thickness, wind-tunnel validated to L/D 14.24, with a live stall-monitor web dashboard.",
  },
  {
    slug: "weather-station",
    title: "Multi-Sensor Agricultural Weather Station",
    subtitle: "LoRa-connected microclimate monitoring for plant disease prediction",
    tagline:
      "A LoRa-connected environmental monitoring system engineered for plant disease prediction in viticulture and horticulture, with a live web dashboard for team-wide access.",
    category: "IoT / Environmental Sensing",
    status: "In Development",
    hero: {
      type: "gallery",
      images: [
        "/weather-station/Weather_station_in_202604181747.jpeg",
        "/weather-station/Weather_station_in_202604181747-2.jpeg",
        "/weather-station/Image_of_weather_202604181750.jpeg",
      ],
    },
    meta: [
      { label: "Remote Node", value: "ESP32 + LoRa" },
      { label: "Gateway", value: "TTGO LoRa32 ESP32" },
      { label: "RF Link", value: "LoRa 915 MHz" },
      { label: "Reference Sensor", value: "Sensirion SHT85" },
    ],
    sections: [
      {
        heading: "Overview",
        body: [
          "A custom-designed wireless weather station that captures microclimate data at the plant canopy level and transmits it over long-range radio to a networked gateway, where it is logged, processed, and served through a dedicated web platform.",
          "Built from the ground up — hardware selection, firmware, RF link, data pipeline, and front-end dashboard — with a focus on reliability in remote outdoor deployments and modular expansion as new sensors come online.",
          "The system is purpose-built to support downy mildew risk modelling, correlating leaf wetness duration, canopy temperature, and humidity against established infection thresholds to give growers actionable disease forecasts — delivered through a shared web interface the entire team can access from anywhere.",
        ],
      },
      {
        heading: "Key Features",
        body: [],
        list: [
          "Long-range wireless link — LoRa 915 MHz radio between remote sensor node and gateway, enabling deployment hundreds of metres from mains power and Wi-Fi",
          "Plant-level sensing — leaf surface temperature and humidity measured directly at the canopy, not just ambient air, for accurate wetness-duration modelling",
          "Live web dashboard — all sensor data, historical trends, and disease-risk outputs published to a custom website accessible to the whole team",
          "Integrated disease detection — downy mildew risk calculated continuously from live inputs and surfaced on the dashboard alongside raw environmental data",
          "Modular sensor architecture — shared I²C bus and expandable binary packet format lets additional sensors be added without redesigning the core",
          "Edge-optimised data flow — raw ADC values transmitted by sender; unit conversion and calibration handled on receiver, keeping node firmware minimal",
          "Cross-referenced calibration — every analog sensor validated against a laboratory-grade SHT85 reference before deployment",
          "Cloud-ready gateway — ESP32-based receiver decodes packets and uploads to Wi-Fi for logging, visualisation, and downstream disease modelling",
        ],
      },
      {
        heading: "Primary Use Case: Downy Mildew Forecasting",
        body: [
          "Downy mildew (Plasmopara viticola in grapevines) requires specific combinations of leaf wetness duration and temperature to initiate infection. Commercial weather stations capable of modelling this risk typically cost several thousand dollars.",
          "This build delivers the same core measurement capability — canopy-level temperature, humidity, and derived leaf wetness — at a fraction of the cost, with open firmware, a modular design, and a team-accessible web dashboard that surfaces live disease-risk assessments. The platform can be extended to any crop-specific disease model (powdery mildew, botrytis, black spot, etc.).",
        ],
      },
      {
        heading: "Technical Specifications",
        body: [],
        list: [
          "Remote node MCU: ESP32 (LoRa-integrated, SX1262 / SX1276)",
          "Gateway MCU: TTGO LoRa32 ESP32 (SX1276)",
          "RF link: LoRa 915 MHz ISM band, matched SF/BW/CR",
          "Packet format: 6-byte compact binary (start byte, sensor data, checksum); expandable",
          "Wind sensor: UICPAL 0–5 V anemometer (0–60 m/s) + 16-point direction vane",
          "Leaf sensor: CWT LEAF-TH-V5, 0–5 V output, leaf surface T & RH",
          "Reference sensor: Sensirion SHT85 precision T/RH (±0.1 °C, ±1.5 % RH)",
          "Analog interfacing: voltage divider network for 5 V → 3.3 V ADC compatibility",
          "Gateway uplink: Wi-Fi 802.11 b/g/n",
          "Front-end: custom web dashboard with multi-user team access",
          "Power: ESP32 deep-sleep cycling for long-term battery / solar operation",
        ],
      },
      {
        heading: "Engineering Highlights",
        body: [],
        list: [
          "Full-stack solo build: hardware selection, RF protocol design, firmware, sensor calibration, gateway integration, and web dashboard",
          "End-to-end data pipeline from leaf surface to browser — sensor → LoRa → gateway → cloud → team-accessible dashboard with live disease detection",
          "Empirical validation approach — sensor output formulas cross-checked against reference instruments rather than trusted on datasheet faith alone",
          "Designed for Australian supply constraints, with component selection optimised for locally available stock",
          "Ongoing expansion roadmap: lightning detection (AS3935), particulate matter (PMS5003), soil temperature (DS18B20), tipping-bucket rain gauge, solar radiation",
        ],
      },
    ],
    sidebar: [
      {
        title: "Remote Node",
        rows: [
          { label: "MCU", value: "ESP32 (LoRa)" },
          { label: "Radio", value: "SX1262 / SX1276" },
          { label: "Freq", value: "915 MHz" },
          { label: "Power", value: "Deep-sleep cycling" },
        ],
      },
      {
        title: "Gateway",
        rows: [
          { label: "MCU", value: "TTGO LoRa32" },
          { label: "Radio", value: "LoRa + Wi-Fi" },
          { label: "Output", value: "Web Dashboard" },
        ],
      },
      {
        title: "Sensors",
        rows: [
          { label: "Leaf T/RH", value: "CWT LEAF-TH-V5" },
          { label: "Wind", value: "UICPAL 0–60 m/s" },
          { label: "Reference", value: "Sensirion SHT85" },
          { label: "Expandable", value: "I²C bus" },
        ],
      },
      {
        title: "Technologies",
        tags: [
          "ESP32",
          "LoRa",
          "SX1276",
          "Arduino",
          "Wi-Fi",
          "I²C",
          "SPI",
          "Dashboard",
          "Disease Model",
        ],
      },
    ],
    tags: ["IoT", "LoRa", "Sensors", "Firmware", "Dashboard"],
    accent: "from-sky-500/20 to-sky-500/0",
    cardBlurb:
      "LoRa-connected vineyard microclimate station — leaf-level T/RH, wind, and live downy mildew risk on a team dashboard.",
  },
  {
    slug: "solenoid",
    title: "Solenoid Actuator",
    tagline:
      "Design, construction, and testing of a solenoid actuator — exploring electromagnetic principles, coil winding techniques, and force-displacement characteristics.",
    category: "Electromagnetics",
    status: "In Progress",
    hero: { type: "gradient" },
    meta: [
      { label: "Type", value: "Personal Project" },
      { label: "Discipline", value: "Electromagnetics" },
      { label: "Methods", value: "Build & Test" },
    ],
    sections: [
      {
        heading: "Overview",
        body: [
          "A solenoid is one of the most fundamental electromagnetic devices. This project focuses on designing, winding, and testing one from scratch to develop practical understanding of electromagnetic principles.",
        ],
      },
      {
        heading: "Design & Construction",
        body: [
          "Designed in CAD considering bobbin geometry, coil parameters (wire gauge, turns, layers), core material, and housing. Coil winding done by hand with careful layer management. Mild steel plunger machined for good magnetic permeability.",
        ],
      },
      {
        heading: "Electromagnetic Principles",
        body: [
          "Explores core electromagnetic concepts hands-on: Ampere's law relating current to magnetic field strength, how inductance varies with turns and core material, force-displacement curves at different voltages, and duty cycle thermal limits to prevent coil overheating.",
        ],
      },
      {
        heading: "Testing",
        body: [
          "Characterising force-displacement at various voltages, measuring transient response, and observing thermal behaviour. Measurements are compared against theoretical predictions to validate the design methodology.",
        ],
      },
    ],
    sidebar: [
      {
        title: "Design",
        rows: [
          { label: "Type", value: "Linear Pull" },
          { label: "Core", value: "Mild Steel" },
          { label: "Winding", value: "Hand Wound" },
          { label: "Tool", value: "CAD" },
        ],
      },
      {
        title: "Concepts",
        rows: [
          { label: "Theory", value: "Ampere's Law" },
          { label: "Analysis", value: "Force vs. Disp." },
          { label: "Thermal", value: "Duty Cycle" },
        ],
      },
      {
        title: "Technologies",
        tags: ["Electromagnetics", "CAD", "Coil Winding", "Machining", "Circuits", "Testing"],
      },
    ],
    tags: ["Electromagnetics", "CAD", "Testing"],
    accent: "from-rose-500/20 to-rose-500/0",
    cardBlurb:
      "Hand-wound linear-pull solenoid — CAD, machining, coil winding, and force-displacement characterisation.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
