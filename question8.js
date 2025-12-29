window.question8 = [

/* ================= SECTION 1 ================= */
{
  section: "1. Networking Basics & OSI Model",
  cheatSheet: [
    { term: "Packet Switching", def: "Shares links dynamically among packets" },
    { term: "Circuit Switching", def: "Reserves resources for entire session" },
    { term: "Protocol", def: "Rules for message format, order, actions" },
    { term: "OSI Model", def: "7-layer network architecture" }
  ],
  questions: [
    {
      q: "Which statement is correct about packet vs. circuit switching?",
      options: [
        "Circuit switching shares on demand only",
        "Packet switching shares links among bursts",
        "Packet switching reserves fixed bandwidth",
        "Circuit switching drops idle calls"
      ],
      answer: 1,
      keyword: "Packet Switching"
    },
    {
      q: "Which statement is correct about protocol layers & service models?",
      options: [
        "Layers are cable colors",
        "Layers are device brands",
        "Layers define functions and service interfaces",
        "Layers store user accounts"
      ],
      answer: 2,
      keyword: "Protocol"
    },
    {
      q: "In OSI model, addressing and routing functions are provided by:",
      options: [
        "Application layer",
        "Transport layer",
        "Network layer",
        "Session layer"
      ],
      answer: 2,
      keyword: "Network Layer"
    },
    {
      q: "A device that forwards packets between networks is:",
      options: ["Bridge", "Firewall", "Router", "Hub"],
      answer: 2,
      keyword: "Router"
    },
    {
      q: "Which layer of the OSI model does Hub work in?",
      options: [
        "Physical layer",
        "Data link layer",
        "Network layer",
        "Transport layer"
      ],
      answer: 0,
      keyword: "Hub"
    },
    {
      q: "Which device is used to connect two different networks?",
      options: ["Hub", "Switch", "Router", "Repeater"],
      answer: 2,
      keyword: "Router"
    }
  ]
},

/* ================= SECTION 2 ================= */
{
  section: "2. Physical Layer",
  cheatSheet: [
    { term: "Physical Layer", def: "Transmits raw bits" },
    { term: "Line Coding", def: "Represents bits on medium" },
    { term: "Signal", def: "Physical representation of data" }
  ],
  questions: [
    {
      q: "The physical layer translates logical communication requests from the:",
      options: [
        "Data link layer",
        "Network layer",
        "Transport layer",
        "Application layer"
      ],
      answer: 0,
      keyword: "Physical Layer"
    },
    {
      q: "Which statement is correct about period, frequency, phase?",
      options: [
        "f = T",
        "f = 1/T; phase shifts waveform",
        "T = 2πf",
        "Phase sets data rate only"
      ],
      answer: 1,
      keyword: "Signal"
    },
    {
      q: "Which statement is correct about line coding?",
      options: [
        "Manchester changes frequency bands",
        "NRZ always transitions",
        "Line coding is for routing",
        "Manchester embeds a clock transition each bit"
      ],
      answer: 3,
      keyword: "Line Coding"
    },
    {
      q: "Bluetooth technologies are used in:",
      options: [
        "Wireless keyboard",
        "Wireless mouse",
        "Headsets",
        "All of the mentioned"
      ],
      answer: 3,
      keyword: "Bluetooth"
    }
  ]
},

/* ================= SECTION 3 ================= */
{
  section: "3. Signals & Transmission Media",
  cheatSheet: [
    { term: "Analog Signal", def: "Continuously varying" },
    { term: "Digital Signal", def: "Discrete levels" },
    { term: "Optical Fiber", def: "High bandwidth guided media" }
  ],
  questions: [
    {
      q: "Which statement is correct about analog vs digital signals?",
      options: [
        "Analog uses packets only",
        "Analog varies smoothly; digital has discrete levels",
        "Digital has infinite amplitudes",
        "Both need bit stuffing"
      ],
      answer: 1,
      keyword: "Signals"
    },
    {
      q: "Which statement is TRUE for optical fiber?",
      options: [
        "All of the mentioned",
        "Large bandwidth",
        "Long distance transmission",
        "Cost increasingly independent of distance"
      ],
      answer: 0,
      keyword: "Optical Fiber"
    },
    {
      q: "Which is NOT a characteristic of digital signals?",
      options: [
        "Continuous wave",
        "Discrete levels",
        "Binary values",
        "More immune to noise"
      ],
      answer: 0,
      keyword: "Digital Signal"
    }
  ]
},

/* ================= SECTION 4 ================= */
{
  section: "4. Multiplexing & Access",
  cheatSheet: [
    { term: "Multiplexing", def: "Sharing channel among sources" },
    { term: "TDM", def: "Time Division Multiplexing" },
    { term: "FDM", def: "Frequency Division Multiplexing" }
  ],
  questions: [
    {
      q: "A single channel is shared by multiple sources by:",
      options: [
        "Analog modulation",
        "Digital modulation",
        "Multiplexing",
        "Phase modulation"
      ],
      answer: 2,
      keyword: "Multiplexing"
    },
    {
      q: "Which statement is correct about FDM vs TDM?",
      options: [
        "TDM equals frequency bands",
        "FDM equals packetization",
        "FDM splits by frequency; TDM by time",
        "Both require token ring"
      ],
      answer: 2,
      keyword: "FDM/TDM"
    }
  ]
},

/* ================= SECTION 5 ================= */
{
  section: "5. Data Link Layer",
  cheatSheet: [
    { term: "Framing", def: "Encapsulating packets into frames" },
    { term: "CRC", def: "Detects burst errors" },
    { term: "MAC", def: "Medium Access Control" }
  ],
  questions: [
    {
      q: "Which OSI layer divides packets into frames?",
      options: [
        "Data link layer",
        "Application layer",
        "Network layer",
        "Transport layer"
      ],
      answer: 0,
      keyword: "Data Link Layer"
    },
    {
      q: "Which task is NOT done by data link layer?",
      options: [
        "Framing",
        "Error control",
        "Flow control",
        "Channel coding"
      ],
      answer: 3,
      keyword: "Data Link Layer"
    },
    {
      q: "CRC is:",
      options: [
        "Cyclic redundancy check",
        "Collision routing code",
        "Channel rate control",
        "Central routing check"
      ],
      answer: 0,
      keyword: "CRC"
    }
  ]
},

/* ================= SECTION 6 ================= */
{
  section: "6. Error & Flow Control",
  cheatSheet: [
    { term: "Stop-and-Wait", def: "Send one frame, wait ACK" },
    { term: "ARQ", def: "Automatic Repeat reQuest" }
  ],
  questions: [
    {
      q: "Which statement is correct about parity & checksum?",
      options: [
        "Always correct burst errors",
        "Detect errors but not correct bursts",
        "Unused in networks",
        "Replace CRC"
      ],
      answer: 1,
      keyword: "Error Detection"
    },
    {
      q: "Which flow control waits for ACK after each frame?",
      options: [
        "Go-Back-N",
        "Selective Repeat",
        "Stop-and-Wait",
        "Sliding Window"
      ],
      answer: 2,
      keyword: "Stop-and-Wait"
    }
  ]
},

/* ================= SECTION 7 ================= */
{
  section: "7. Network & Transport Layer",
  cheatSheet: [
    { term: "ARP", def: "Maps IP to MAC" },
    { term: "ICMP", def: "Error reporting" },
    { term: "TCP", def: "Reliable transport" }
  ],
  questions: [
    {
      q: "What is the primary function of ARP?",
      options: [
        "Map IP address to MAC address",
        "Map domain name to IP",
        "Route packets",
        "Manage flow control"
      ],
      answer: 0,
      keyword: "ARP"
    },
    {
      q: "Which statement is correct about ICMP?",
      options: [
        "Address assignment",
        "Reliable delivery",
        "Fragment reassembly",
        "Error reporting and diagnostics"
      ],
      answer: 3,
      keyword: "ICMP"
    },
    {
      q: "Which statement is correct about TCP 3-way handshake?",
      options: [
        "UDP handshakes first",
        "FIN starts connection",
        "SYN, SYN-ACK, ACK establish TCP",
        "ACK only"
      ],
      answer: 2,
      keyword: "TCP"
    }
  ]
},

/* ================= SECTION 8 ================= */
{
  section: "8. Application Layer & Ports",
  cheatSheet: [
    { term: "SMTP", def: "Email sending protocol" },
    { term: "DNS", def: "Domain name resolution" },
    { term: "HTTPS", def: "Secure HTTP using TLS" }
  ],
  questions: [
    {
      q: "Which service uses TCP port 25?",
      options: ["FTP", "SSH", "SMTP", "DNS"],
      answer: 2,
      keyword: "SMTP"
    },
    {
      q: "Which port does DNS typically use?",
      options: ["21", "25", "53", "80"],
      answer: 2,
      keyword: "DNS"
    },
    {
      q: "Which protection applies when using HTTPS?",
      options: [
        "Store IDs in routers",
        "Encrypt traffic with TLS",
        "Turn off cookies",
        "Change IP address"
      ],
      answer: 1,
      keyword: "HTTPS"
    }
  ]
}

];
