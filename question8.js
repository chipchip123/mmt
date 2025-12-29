window.questionReview = [

  /* ================= SECTION 1: NETWORK BASICS & MODELS ================= */
  {
    section: "1. Network Basics & OSI/TCP Models",
    cheatSheet: [
      { term: "Packet Switching", def: "Shares network resources dynamically (bursty traffic)." },
      { term: "Circuit Switching", def: "Reserves fixed bandwidth/resources (guaranteed quality)." },
      { term: "Protocol", def: "Defines format, order, and actions of messages." },
      { term: "LAN", def: "Local Area Network (small geo area like an office)." },
      { term: "ISP", def: "Internet Service Provider (Network of networks)." }
    ],
    questions: [
      {
        q: "Which statement is correct about packet vs. circuit switching?",
        options: [
          "Circuit switching shares on demand only.",
          "Packet switching shares links among bursts.",
          "Packet switching reserves fixed bandwidth.",
          "Circuit switching drops idle calls."
        ],
        answer: 1,
        keyword: "Packet Switching"
      },
      {
        q: "Which statement is correct about protocol layers & service models?",
        options: [
          "Layers are cable colors.",
          "Layers are device brands.",
          "Layers define functions and service interfaces.",
          "Layers store user accounts."
        ],
        answer: 2,
        keyword: "Protocol Layers"
      },
      {
        q: "In OSI model, addressing and routing functions of the system are provided by ______",
        options: ["Application layer", "Transport layer", "Network layer", "Session layer"],
        answer: 2,
        keyword: "Routing Layer"
      },
      {
        q: "Which statement is correct about what is a protocol?",
        options: [
          "Format, order, and actions on messages.",
          "Physical plug shape only.",
          "Encryption keys only.",
          "MAC addresses only."
        ],
        answer: 0,
        keyword: "Protocol Definition"
      },
      {
        q: "Which statement is correct about Device behavior with Internet = network of networks?",
        options: [
          "Single central ISP runs all routers.",
          "Interconnected ISPs provide global reach.",
          "Only LANs, no WANs involved.",
          "Apps define routing, not IP."
        ],
        answer: 1,
        keyword: "Internet Structure"
      },
      {
        q: "The TCP/IP model does not have ______",
        options: ["Application layer", "Transport layer", "Network layer", "Session layer"],
        answer: 3,
        keyword: "TCP/IP Model"
      },
      {
        q: "Which type of network covers a small geographical area, such as an office or building?",
        options: ["Local area network (LAN)", "Metropolitan area network (MAN)", "Wide area network (WAN)", "Storage area network (SAN)"],
        answer: 0,
        keyword: "LAN"
      }
    ]
  },

  /* ================= SECTION 2: PHYSICAL LAYER & SIGNALS ================= */
  {
    section: "2. Physical Layer & Signals",
    cheatSheet: [
      { term: "Physical Layer", def: "Transmits raw bits, handles modulation and line coding." },
      { term: "Manchester Encoding", def: "Embeds a clock transition in each bit (for synchronization)." },
      { term: "Fiber Optic", def: "High bandwidth, immune to electromagnetic interference." },
      { term: "Multiplexing", def: "Sharing a channel (FDM: Frequency, TDM: Time)." },
      { term: "Hub", def: "Layer 1 device, broadcasts to all ports." }
    ],
    questions: [
      {
        q: "Which layer of the OSI model does Hub work in?",
        options: ["Physical layer", "Data link layer", "Network layer", "Transport layer"],
        answer: 0,
        keyword: "Hub Layer"
      },
      {
        q: "The physical layer translates logical communication requests from the ______ into hardware operations.",
        options: ["Data link layer", "Network layer", "Transport layer", "Application layer"],
        answer: 0,
        keyword: "Physical Layer Interaction"
      },
      {
        q: "Which statement is correct about Device behavior with FDM vs TDM in access?",
        options: [
          "TDM equals frequency bands.",
          "FDM equals packetization.",
          "FDM splits by frequency; TDM by time slots.",
          "Both require token ring."
        ],
        answer: 2,
        keyword: "Multiplexing"
      },
      {
        q: "When is the following true about period (T), frequency (f)?",
        options: [
          "f=T",
          "f=1/T",
          "T=2πf",
          "Phase sets data rate only."
        ],
        answer: 1,
        keyword: "Frequency Formula"
      },
      {
        q: "Which statement is correct about line coding: NRZ, Manchester?",
        options: [
          "Manchester changes frequency bands.",
          "NRZ always transitions.",
          "Line coding is for routing.",
          "Manchester embeds a clock transition each bit."
        ],
        answer: 3,
        keyword: "Manchester Encoding"
      },
      {
        q: "The Bluetooth technologies used in ______",
        options: ["Wireless keyboard", "Wireless mouse", "Headsets", "All of the mentioned"],
        answer: 3,
        keyword: "Bluetooth"
      },
      {
        q: "Which statement is correct about analog vs digital signal?",
        options: [
          "Analog uses packets only.",
          "Analog varies smoothly; digital has discrete levels.",
          "Digital has infinite amplitudes.",
          "Both need bit stuffing."
        ],
        answer: 1,
        keyword: "Analog vs Digital"
      },
      {
        q: "Which of the following statements is TRUE for optical fiber?",
        options: [
          "All of the mentioned", // Note: Refers to Bandwidth/Distance/Cost
          "Large bandwidth",
          "Long distance transmission",
          "The cost of communication is increasingly independent of distance"
        ],
        answer: 0,
        keyword: "Optical Fiber"
      },
      {
        q: "A single channel is shared by multiple sources of signals by ______",
        options: ["Analog modulation", "Digital modulation", "Multiplexing", "Phase modulation"],
        answer: 2,
        keyword: "Multiplexing Definition"
      },
      {
        q: "What type of cable is commonly used for Ethernet networks?",
        options: ["Coaxial cable", "Fiber optic cable", "Twisted pair cable", "Serial cable"],
        answer: 2,
        keyword: "Twisted Pair"
      }
    ]
  },

  /* ================= SECTION 3: DATA LINK LAYER ================= */
  {
    section: "3. Data Link Layer (Framing & Access)",
    cheatSheet: [
      { term: "Data Link Layer", def: "Framing, Error Control, Flow Control, MAC Addressing." },
      { term: "Switch", def: "Layer 2 device, breaks collision domains." },
      { term: "CSMA/CD", def: "Ethernet access method (Listen before talk, detect collisions)." },
      { term: "CRC", def: "Cyclic Redundancy Check (Error detection)." },
      { term: "Sublayers", def: "LLC (Logical Link Control) & MAC (Media Access Control)." }
    ],
    questions: [
      {
        q: "The Data Link Layer of the OSI model has ______ sublayers.",
        options: ["1", "2", "3", "4"],
        answer: 1,
        keyword: "Data Link Sublayers"
      },
      {
        q: "Which of the following tasks is NOT done by data link layer?",
        options: ["Framing", "Error control", "Flow control", "Routing"],
        answer: 3,
        keyword: "Data Link Functions"
      },
      {
        q: "Which OSI layer is dividing the transmitted packet into frames?",
        options: ["Data link layer", "Application layer", "Network layer", "Transport layer"],
        answer: 0,
        keyword: "Framing Layer"
      },
      {
        q: "Which statement is correct about LLC vs MAC service?",
        options: [
          "Both are L3.",
          "MAC above LLC.",
          "LLC provides service interface above MAC.",
          "They replace TCP."
        ],
        answer: 2,
        keyword: "LLC vs MAC"
      },
      {
        q: "Which statement is correct about collision vs broadcast domain?",
        options: [
          "Hubs split broadcasts.",
          "Switching reduces collisions; routers split broadcasts.",
          "Routers merge broadcasts.",
          "Switches merge collision domains."
        ],
        answer: 1,
        keyword: "Collision Domains"
      },
      {
        q: "Which statement is correct about parity & checksum?",
        options: [
          "Always correct bursts.",
          "Detect errors; do not correct bursts well.",
          "Unused in networks.",
          "Replace CRC in Wi-Fi."
        ],
        answer: 1,
        keyword: "Parity & Checksum"
      },
      {
        q: "Which statement is correct about stop-and-wait, ARQ?",
        options: [
          "Sender never waits.",
          "No ACKs are used.",
          "Only forward error correction.",
          "ACK/timeout trigger retransmissions."
        ],
        answer: 3,
        keyword: "ARQ"
      },
      {
        q: "Which flow control mechanism requires the sender to wait for an acknowledgment after sending each individual frame?",
        options: ["Go-Back-N", "Selective Repeat", "Stop-and-Wait", "Sliding Window"],
        answer: 2,
        keyword: "Stop-and-Wait"
      },
      {
        q: "CRC stands for ______",
        options: ["Cyclic redundancy check", "Code repeat check", "Cyclic repeat code", "Code redundancy check"],
        answer: 0,
        keyword: "CRC Definition"
      },
      {
        q: "Which of the following is a common method of accessing the network in the network access layer (Ethernet)?",
        options: ["CSMA/CD", "Circuit switching", "Message switching", "Packet switching"],
        answer: 0,
        keyword: "CSMA/CD"
      },
      {
        q: "Frame has error detection at the ______",
        options: ["Physical layer", "Data link layer", "Network layer", "Session layer"],
        answer: 1,
        keyword: "Error Detection Layer"
      }
    ]
  },

  /* ================= SECTION 4: NETWORK LAYER & ROUTING ================= */
  {
    section: "4. Network Layer (IP, ARP, Routing)",
    cheatSheet: [
      { term: "Router", def: "Layer 3 device, forwards packets based on IP, breaks broadcast domains." },
      { term: "ARP", def: "Resolves IP address to MAC address within a LAN." },
      { term: "ICMP", def: "Error reporting and diagnostics (Ping)." },
      { term: "Routing", def: "Determining best path for packets." },
      { term: "IPv4", def: "32-bit address (4 octets)." }
    ],
    questions: [
      {
        q: "Where does the following hold in practice for end systems vs. access networks?",
        options: [
          "Access networks connect end systems to edge routers.",
          "End systems route between ISPs.",
          "Core networks connect to mice.",
          "Access networks are only wireless."
        ],
        answer: 0,
        keyword: "Access Networks"
      },
      {
        q: "A ______ is a device that forwards packets between networks by processing the routing information.",
        options: ["Bridge", "Firewall", "Router", "Hub"],
        answer: 2,
        keyword: "Router Definition"
      },
      {
        q: "When is the following true about delay, loss, throughput?",
        options: [
          "Loss cannot happen in routers.",
          "Delay never depends on load.",
          "Throughput equals bandwidth always.",
          "Queueing can cause delay and packet loss."
        ],
        answer: 3,
        keyword: "Network Performance"
      },
      {
        q: "Which of the following device is used to connect two different networks?",
        options: ["Hub", "Switch", "Router", "Repeater"],
        answer: 2,
        keyword: "Connecting Device"
      },
      {
        q: "What is the primary function of the Address Resolution Protocol (ARP)?",
        options: [
          "To map an IP address to a MAC address",
          "To map a Domain Name to an IP address",
          "To route packets between different networks",
          "To manage flow control between two nodes"
        ],
        answer: 0,
        keyword: "ARP Function"
      },
      {
        q: "Where does the following hold in practice for ARP role on LAN?",
        options: [
          "Routes between ASes.",
          "Resolves names to IPs.",
          "Resolves IP to MAC within a LAN.",
          "Encrypts Ethernet frames."
        ],
        answer: 2,
        keyword: "ARP Role"
      },
      {
        q: "Which process does a router use to determine the best path for a packet to travel across multiple networks?",
        options: ["Forwarding", "Switching", "Routing", "Filtering"],
        answer: 2,
        keyword: "Routing Process"
      },
      {
        q: "What is the length of an IPv4 address in terms of octets?",
        options: ["2 octets", "4 octets", "6 octets", "8 octets"],
        answer: 1,
        keyword: "IPv4 Length"
      },
      {
        q: "Which statement is correct about ICMP function?",
        options: [
          "Address assignment.",
          "Reliable data delivery.",
          "Fragment reassembly.",
          "Error reporting and diagnostics (e.g., ping)."
        ],
        answer: 3,
        keyword: "ICMP"
      }
    ]
  },

  /* ================= SECTION 5: TRANSPORT & APPLICATION LAYER ================= */
  {
    section: "5. Transport & Application Layers",
    cheatSheet: [
      { term: "Transport Layer", def: "End-to-end communication, Reliability (TCP), Flow Control." },
      { term: "TCP Handshake", def: "SYN -> SYN-ACK -> ACK (3-way)." },
      { term: "DNS", def: "Domain Name System (Port 53), maps Names to IPs." },
      { term: "SMTP", def: "Simple Mail Transfer Protocol (Port 25)." },
      { term: "HTTPS", def: "Secure HTTP, uses TLS/SSL (Port 443)." }
    ],
    questions: [
      {
        q: "Which OSI layer is providing end-to-end communication with reliable service?",
        options: ["Session layer", "Transport layer", "Network layer", "Data link layer"],
        answer: 1,
        keyword: "Reliable Transport"
      },
      {
        q: "When is the following true about 3-way handshake?",
        options: [
          "UDP handshakes first.",
          "FIN starts connection.",
          "SYN, SYN-ACK, ACK establish TCP.",
          "ACK only."
        ],
        answer: 2,
        keyword: "3-Way Handshake"
      },
      {
        q: "Which of the following services uses TCP port 25?",
        options: ["FTP", "SSH", "SMTP", "DNS"],
        answer: 2,
        keyword: "SMTP Port"
      },
      {
        q: "Which statement is correct about cookies & sessions?",
        options: [
          "Transport-layer state.",
          "State via headers + client storage.",
          "Router stores sessions.",
          "TLS required for cookies."
        ],
        answer: 1,
        keyword: "Cookies & Sessions"
      },
      {
        q: "Which protection applies when using HTTPS for sessions?",
        options: ["Store IDs in routers", "Encrypt traffic with TLS", "Turn off cookies", "Change IP address"],
        answer: 1,
        keyword: "HTTPS Security"
      },
      {
        q: "Which port is used where DNS typically runs?",
        options: ["Port 21", "Port 25", "Port 53", "Port 80"],
        answer: 2,
        keyword: "DNS Port"
      }
    ]
  }

];
