window.question2 = [

/* ================= SECTION 1 ================= */
{
  section: "1. Physical Layer and Data Representation",
  cheatSheet: [
    { term: "Physical Layer", def: "Responsible for transmission of bits over physical medium" },
    { term: "Bit", def: "Smallest unit of data" },
    { term: "Analog Signal", def: "Signal with continuous variation over time" },
    { term: "Digital Signal", def: "Signal with discrete signal levels" },
    { term: "Signal", def: "Physical representation of data" }
  ],
  questions: [
    {
      q: "Which OSI layer is responsible for transmission of bits?",
      options: ["Physical layer", "Data link layer", "Network layer", "Transport layer"],
      answer: 0,
      keyword: "Physical Layer"
    },
    {
      q: "The smallest unit of data in physical layer is:",
      options: ["Frame", "Packet", "Segment", "Bit"],
      answer: 3,
      keyword: "Bit"
    },
    {
      q: "A signal that varies continuously over time is called:",
      options: ["Digital signal", "Analog signal", "Frame", "Packet"],
      answer: 1,
      keyword: "Analog Signal"
    },
    {
      q: "A signal that has discrete levels is called:",
      options: ["Analog signal", "Digital signal", "Bandwidth", "Frequency"],
      answer: 1,
      keyword: "Digital Signal"
    },
    {
      q: "Physical representation of data is known as:",
      options: ["Protocol", "Signal", "Frame", "Packet"],
      answer: 1,
      keyword: "Signal"
    }
  ]
},

/* ================= SECTION 2 ================= */
{
  section: "2. Bandwidth, Frequency and Data Rate",
  cheatSheet: [
    { term: "Bandwidth", def: "Range of frequencies used by a signal" },
    { term: "Frequency", def: "Number of signal cycles per second" },
    { term: "Data Rate", def: "Rate at which data is transmitted measured in bps" },
    { term: "Hertz", def: "Unit of frequency" },
    { term: "bps", def: "Bits per second" }
  ],
  questions: [
    {
      q: "Bandwidth represents:",
      options: [
        "Transmission delay",
        "Range of frequencies",
        "Cable length",
        "Packet size"
      ],
      answer: 1,
      keyword: "Bandwidth"
    },
    {
      q: "Frequency is measured in:",
      options: ["bps", "Byte", "Hertz", "Meter"],
      answer: 2,
      keyword: "Hertz"
    },
    {
      q: "Data rate is measured in:",
      options: ["Hertz", "bps", "Meter", "Second"],
      answer: 1,
      keyword: "Data Rate"
    },
    {
      q: "Frequency refers to:",
      options: [
        "Number of cycles per second",
        "Transmission speed",
        "Cable distance",
        "Signal strength"
      ],
      answer: 0,
      keyword: "Frequency"
    },
    {
      q: "bps stands for:",
      options: [
        "Bits per signal",
        "Bytes per second",
        "Bits per second",
        "Bandwidth per second"
      ],
      answer: 2,
      keyword: "bps"
    }
  ]
},

/* ================= SECTION 3 ================= */
{
  section: "3. Transmission Media Classification",
  cheatSheet: [
    { term: "Transmission Media", def: "Physical path for data transmission" },
    { term: "Guided Media", def: "Wired transmission media" },
    { term: "Unguided Media", def: "Wireless transmission media" },
    { term: "Wired Media", def: "Uses physical cables" },
    { term: "Wireless Media", def: "Uses electromagnetic waves" }
  ],
  questions: [
    {
      q: "Physical path used for data transmission is called:",
      options: ["Protocol", "Transmission media", "Signal", "Bandwidth"],
      answer: 1,
      keyword: "Transmission Media"
    },
    {
      q: "Wired transmission media is also called:",
      options: ["Unguided media", "Guided media", "Wireless media", "Optical media"],
      answer: 1,
      keyword: "Guided Media"
    },
    {
      q: "Wireless transmission media is also called:",
      options: ["Guided media", "Wired media", "Unguided media", "Optical media"],
      answer: 2,
      keyword: "Unguided Media"
    },
    {
      q: "Media that uses physical cables is:",
      options: ["Wireless media", "Unguided media", "Wired media", "Radio waves"],
      answer: 2,
      keyword: "Wired Media"
    },
    {
      q: "Media that uses electromagnetic waves is:",
      options: ["Wired media", "Guided media", "Wireless media", "Coaxial cable"],
      answer: 2,
      keyword: "Wireless Media"
    }
  ]
},

/* ================= SECTION 4 ================= */
{
  section: "4. Twisted Pair and Coaxial Cable",
  cheatSheet: [
    { term: "UTP", def: "Unshielded Twisted Pair cable" },
    { term: "STP", def: "Shielded Twisted Pair cable" },
    { term: "Coaxial Cable", def: "Cable with central conductor and shield" },
    { term: "Twisting", def: "Technique to reduce interference" },
    { term: "Cross-talk", def: "Interference between adjacent wires" }
  ],
  questions: [
    {
      q: "UTP stands for:",
      options: [
        "Unshielded Twisted Pair",
        "Universal Twisted Pair",
        "Unshielded Transmission Pair",
        "Unified Twisted Pair"
      ],
      answer: 0,
      keyword: "UTP"
    },
    {
      q: "STP stands for:",
      options: [
        "Shielded Twisted Pair",
        "Standard Twisted Pair",
        "Shielded Transmission Pair",
        "System Twisted Pair"
      ],
      answer: 0,
      keyword: "STP"
    },
    {
      q: "Purpose of twisting wires in UTP cable is to:",
      options: [
        "Increase bandwidth",
        "Reduce cross-talk",
        "Increase length",
        "Increase signal strength"
      ],
      answer: 1,
      keyword: "Twisting"
    },
    {
      q: "Interference between adjacent wires is called:",
      options: [
        "Attenuation",
        "Noise",
        "Cross-talk",
        "Distortion"
      ],
      answer: 2,
      keyword: "Cross-talk"
    },
    {
      q: "Cable used commonly for cable television is:",
      options: [
        "UTP",
        "Fiber optic cable",
        "Coaxial cable",
        "STP"
      ],
      answer: 2,
      keyword: "Coaxial Cable"
    }
  ]
},

/* ================= SECTION 5 ================= */
{
  section: "5. Fiber Optic Cable and EMI",
  cheatSheet: [
    { term: "Fiber Optic Cable", def: "Uses light for data transmission" },
    { term: "Electromagnetic Interference", def: "Disturbance caused by electromagnetic fields" },
    { term: "Total Internal Reflection", def: "Principle used in fiber optic transmission" },
    { term: "EMI", def: "Electromagnetic Interference" },
    { term: "Light Signal", def: "Signal used in fiber optics" }
  ],
  questions: [
    {
      q: "Fiber optic cable transmits data using:",
      options: [
        "Electrical signal",
        "Radio waves",
        "Light signal",
        "Magnetic signal"
      ],
      answer: 2,
      keyword: "Light Signal"
    },
    {
      q: "Fiber optic cable is immune to:",
      options: [
        "Attenuation",
        "Noise",
        "Electromagnetic interference",
        "Delay"
      ],
      answer: 2,
      keyword: "Electromagnetic Interference"
    },
    {
      q: "EMI stands for:",
      options: [
        "Electrical Media Interface",
        "Electromagnetic Interference",
        "Electronic Modulation Index",
        "Enhanced Media Interface"
      ],
      answer: 1,
      keyword: "EMI"
    },
    {
      q: "Principle used in fiber optic transmission is:",
      options: [
        "Refraction",
        "Diffraction",
        "Total internal reflection",
        "Scattering"
      ],
      answer: 2,
      keyword: "Total Internal Reflection"
    },
    {
      q: "Which cable is least affected by EMI?",
      options: [
        "UTP",
        "STP",
        "Coaxial cable",
        "Fiber optic cable"
      ],
      answer: 3,
      keyword: "Fiber Optic Cable"
    }
  ]
},

/* ================= SECTION 6 ================= */
{
  section: "6. Cable Length Limitations",
  cheatSheet: [
    { term: "UTP Cable Length", def: "Maximum 100 meters" },
    { term: "Coaxial Cable Length", def: "Maximum 500 meters" },
    { term: "Fiber Optic Cable Length", def: "Up to several kilometers" },
    { term: "Attenuation", def: "Loss of signal strength over distance" },
    { term: "Cable Limitation", def: "Maximum supported transmission distance" }
  ],
  questions: [
    {
      q: "Maximum length of UTP cable is:",
      options: ["50 m", "100 m", "200 m", "500 m"],
      answer: 1,
      keyword: "UTP Cable Length"
    },
    {
      q: "Maximum length of coaxial cable is:",
      options: ["100 m", "200 m", "300 m", "500 m"],
      answer: 3,
      keyword: "Coaxial Cable Length"
    },
    {
      q: "Fiber optic cable can transmit data up to:",
      options: [
        "100 meters",
        "500 meters",
        "Several kilometers",
        "10 meters"
      ],
      answer: 2,
      keyword: "Fiber Optic Cable Length"
    },
    {
      q: "Loss of signal strength over distance is called:",
      options: [
        "Noise",
        "Distortion",
        "Attenuation",
        "Interference"
      ],
      answer: 2,
      keyword: "Attenuation"
    },
    {
      q: "Cable length limitation exists mainly due to:",
      options: [
        "Protocol",
        "Attenuation",
        "Bandwidth",
        "Switching"
      ],
      answer: 1,
      keyword: "Cable Limitation"
    }
  ]
}

];

