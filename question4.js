window.question4 = [

/* ================= SECTION 1 ================= */
{
  section: "1. Multiple Access Problem",
  cheatSheet: [
    { term: "Multiple Access", def: "Multiple nodes share a single broadcast channel" },
    { term: "Broadcast Channel", def: "Shared communication medium" },
    { term: "Collision", def: "Occurs when two nodes transmit simultaneously" },
    { term: "Interference", def: "Overlapping signals on a shared channel" },
    { term: "MAC Protocol", def: "Rules that determine how nodes share channel" }
  ],
  questions: [
    {
      q: "When multiple nodes share a single channel, it is called:",
      options: [
        "Point-to-point",
        "Multiple access",
        "Circuit switching",
        "Routing"
      ],
      answer: 1,
      keyword: "Multiple Access"
    },
    {
      q: "A shared communication medium is called:",
      options: [
        "Link",
        "Broadcast channel",
        "Router",
        "Frame"
      ],
      answer: 1,
      keyword: "Broadcast Channel"
    },
    {
      q: "When two nodes transmit at the same time, it causes:",
      options: [
        "Delay",
        "Collision",
        "Routing",
        "Encapsulation"
      ],
      answer: 1,
      keyword: "Collision"
    },
    {
      q: "Overlapping signals on a shared channel cause:",
      options: [
        "Framing",
        "Interference",
        "Encapsulation",
        "Flow control"
      ],
      answer: 1,
      keyword: "Interference"
    },
    {
      q: "Rules that determine how nodes share the channel are called:",
      options: [
        "Routing protocol",
        "MAC protocol",
        "Transport protocol",
        "Application protocol"
      ],
      answer: 1,
      keyword: "MAC Protocol"
    }
  ]
},

/* ================= SECTION 2 ================= */
{
  section: "2. Channel Partitioning Protocols",
  cheatSheet: [
    { term: "Channel Partitioning", def: "Divides channel into smaller pieces" },
    { term: "TDMA", def: "Time Division Multiple Access" },
    { term: "FDMA", def: "Frequency Division Multiple Access" },
    { term: "Time Slot", def: "Fixed time interval in TDMA" },
    { term: "Frequency Band", def: "Fixed frequency range in FDMA" }
  ],
  questions: [
    {
      q: "Dividing a channel into smaller pieces is called:",
      options: [
        "Random access",
        "Channel partitioning",
        "Collision avoidance",
        "Switching"
      ],
      answer: 1,
      keyword: "Channel Partitioning"
    },
    {
      q: "TDMA stands for:",
      options: [
        "Time Division Multiple Access",
        "Transmission Data Multiple Access",
        "Total Data Media Access",
        "Time Dependent Media Access"
      ],
      answer: 0,
      keyword: "TDMA"
    },
    {
      q: "FDMA stands for:",
      options: [
        "Frequency Division Multiple Access",
        "Frame Division Media Access",
        "Fast Data Media Access",
        "Fixed Data Multiple Access"
      ],
      answer: 0,
      keyword: "FDMA"
    },
    {
      q: "In TDMA, each node is assigned a:",
      options: [
        "Frequency band",
        "Time slot",
        "MAC address",
        "Frame"
      ],
      answer: 1,
      keyword: "Time Slot"
    },
    {
      q: "In FDMA, each node is assigned a:",
      options: [
        "Time slot",
        "Frequency band",
        "Frame",
        "Packet"
      ],
      answer: 1,
      keyword: "Frequency Band"
    }
  ]
},

/* ================= SECTION 3 ================= */
{
  section: "3. Random Access Protocols",
  cheatSheet: [
    { term: "Random Access", def: "Nodes transmit at full rate without coordination" },
    { term: "ALOHA", def: "Random access protocol with collisions" },
    { term: "Slotted ALOHA", def: "ALOHA with time slots" },
    { term: "Collision Detection", def: "Detecting collisions during transmission" },
    { term: "Retransmission", def: "Resending data after collision" }
  ],
  questions: [
    {
      q: "In random access protocols, nodes transmit:",
      options: [
        "Only in fixed slots",
        "At full rate without coordination",
        "Using dedicated channels",
        "Without collisions"
      ],
      answer: 1,
      keyword: "Random Access"
    },
    {
      q: "ALOHA is an example of:",
      options: [
        "Channel partitioning",
        "Random access protocol",
        "Circuit switching",
        "Routing protocol"
      ],
      answer: 1,
      keyword: "ALOHA"
    },
    {
      q: "Slotted ALOHA improves efficiency by:",
      options: [
        "Eliminating collisions",
        "Using time slots",
        "Using frequency bands",
        "Using routing tables"
      ],
      answer: 1,
      keyword: "Slotted ALOHA"
    },
    {
      q: "Detecting collisions during transmission is called:",
      options: [
        "Collision detection",
        "Collision avoidance",
        "Flow control",
        "Framing"
      ],
      answer: 0,
      keyword: "Collision Detection"
    },
    {
      q: "Resending data after collision is called:",
      options: [
        "Encapsulation",
        "Retransmission",
        "Multiplexing",
        "Fragmentation"
      ],
      answer: 1,
      keyword: "Retransmission"
    }
  ]
},

/* ================= SECTION 4 ================= */
{
  section: "4. CSMA/CD and CSMA/CA",
  cheatSheet: [
    { term: "CSMA", def: "Carrier Sense Multiple Access" },
    { term: "CSMA/CD", def: "CSMA with Collision Detection" },
    { term: "CSMA/CA", def: "CSMA with Collision Avoidance" },
    { term: "Carrier Sense", def: "Listening to channel before transmitting" },
    { term: "Backoff", def: "Waiting before retransmission" }
  ],
  questions: [
    {
      q: "CSMA stands for:",
      options: [
        "Carrier Sense Multiple Access",
        "Central Signal Media Access",
        "Controlled Switching Media Access",
        "Carrier Signal Mode Access"
      ],
      answer: 0,
      keyword: "CSMA"
    },
    {
      q: "CSMA/CD is mainly used in:",
      options: [
        "Wireless LAN",
        "Wired Ethernet",
        "Bluetooth",
        "Cellular networks"
      ],
      answer: 1,
      keyword: "CSMA/CD"
    },
    {
      q: "CSMA/CA is mainly used in:",
      options: [
        "Wired Ethernet",
        "Wireless LAN",
        "Fiber networks",
        "Token Ring"
      ],
      answer: 1,
      keyword: "CSMA/CA"
    },
    {
      q: "Listening to channel before transmitting is called:",
      options: [
        "Backoff",
        "Carrier sense",
        "Collision detection",
        "Encapsulation"
      ],
      answer: 1,
      keyword: "Carrier Sense"
    },
    {
      q: "Waiting before retransmission after collision is:",
      options: [
        "Routing",
        "Backoff",
        "Encapsulation",
        "Switching"
      ],
      answer: 1,
      keyword: "Backoff"
    }
  ]
},

/* ================= SECTION 5 ================= */
{
  section: "5. LAN Technologies",
  cheatSheet: [
    { term: "LAN", def: "Local Area Network" },
    { term: "Ethernet", def: "Wired LAN technology" },
    { term: "MAC Address", def: "Physical address used in LAN" },
    { term: "WiFi", def: "Wireless LAN technology based on IEEE 802.11" },
    { term: "IEEE 802.11", def: "Standard for wireless LAN" }
  ],
  questions: [
    {
      q: "LAN stands for:",
      options: [
        "Local Area Network",
        "Logical Access Network",
        "Large Area Network",
        "Linked Area Network"
      ],
      answer: 0,
      keyword: "LAN"
    },
    {
      q: "Ethernet is a:",
      options: [
        "Wireless LAN technology",
        "Wired LAN technology",
        "Routing protocol",
        "Transport protocol"
      ],
      answer: 1,
      keyword: "Ethernet"
    },
    {
      q: "Physical address used in LAN is:",
      options: [
        "IP address",
        "MAC address",
        "Port number",
        "Socket"
      ],
      answer: 1,
      keyword: "MAC Address"
    },
    {
      q: "WiFi is based on standard:",
      options: [
        "IEEE 802.3",
        "IEEE 802.11",
        "IEEE 802.15",
        "IEEE 802.16"
      ],
      answer: 1,
      keyword: "IEEE 802.11"
    },
    {
      q: "Wireless LAN technology is:",
      options: [
        "Ethernet",
        "WiFi",
        "Token Ring",
        "FDDI"
      ],
      answer: 1,
      keyword: "WiFi"
    }
  ]
}

];

