window.question8 = [

/* ================= SECTION 1 ================= */
{
  section: "1. Networking Basics & OSI Model",
  cheatSheet: [
    { term: "Packet Switching", def: "Shares network resources dynamically among packets" },
    { term: "Circuit Switching", def: "Reserves dedicated bandwidth for entire session" },
    { term: "Protocol", def: "Rules defining message format, order, and actions" },
    { term: "OSI Model", def: "Seven-layer reference model for network communication" }
  ],
  questions: [
    {
      q: "Which characteristic best describes packet switching?",
      options: [
        "Dedicated bandwidth for entire session",
        "Resources shared dynamically among packets",
        "No buffering is required",
        "Uses fixed paths only"
      ],
      answer: 1,
      keyword: "Packet Switching"
    },
    {
      q: "Which OSI layer is responsible for routing and logical addressing?",
      options: [
        "Transport layer",
        "Network layer",
        "Data Link layer",
        "Session layer"
      ],
      answer: 1,
      keyword: "Network Layer"
    },
    {
      q: "Which device forwards packets between different networks?",
      options: [
        "Hub",
        "Switch",
        "Router",
        "Repeater"
      ],
      answer: 2,
      keyword: "Router"
    },
    {
      q: "Protocols are best described as:",
      options: [
        "Hardware specifications",
        "Rules governing communication",
        "Physical connectors",
        "Routing tables"
      ],
      answer: 1,
      keyword: "Protocol"
    }
  ]
},

/* ================= SECTION 2 ================= */
{
  section: "2. Physical & Data Link Layer",
  cheatSheet: [
    { term: "Physical Layer", def: "Transmits raw bits over physical medium" },
    { term: "Data Link Layer", def: "Provides framing, error detection, and flow control" },
    { term: "Framing", def: "Encapsulating bits into frames" },
    { term: "Line Coding", def: "Representation of bits as signals" }
  ],
  questions: [
    {
      q: "Which layer handles framing and error detection?",
      options: [
        "Physical layer",
        "Network layer",
        "Transport layer",
        "Data Link layer"
      ],
      answer: 3,
      keyword: "Data Link Layer"
    },
    {
      q: "Which task does NOT belong to the data link layer?",
      options: [
        "Framing",
        "Error control",
        "Flow control",
        "Routing"
      ],
      answer: 3,
      keyword: "Routing"
    },
    {
      q: "Manchester encoding is an example of:",
      options: [
        "Routing algorithm",
        "Line coding",
        "Error correction",
        "Multiplexing"
      ],
      answer: 1,
      keyword: "Line Coding"
    }
  ]
},

/* ================= SECTION 3 ================= */
{
  section: "3. Signals, Transmission & Multiplexing",
  cheatSheet: [
    { term: "Analog Signal", def: "Continuously varying signal" },
    { term: "Digital Signal", def: "Discrete signal levels" },
    { term: "Bandwidth", def: "Range of frequencies used by signal" },
    { term: "Multiplexing", def: "Sharing one channel among multiple signals" }
  ],
  questions: [
    {
      q: "Which statement correctly compares analog and digital signals?",
      options: [
        "Digital signals vary continuously",
        "Analog signals have discrete levels",
        "Analog signals vary continuously",
        "Both are identical"
      ],
      answer: 2,
      keyword: "Analog Signal"
    },
    {
      q: "Technique that allows multiple signals to share a single channel is:",
      options: [
        "Switching",
        "Routing",
        "Multiplexing",
        "Modulation"
      ],
      answer: 2,
      keyword: "Multiplexing"
    }
  ]
},

/* ================= SECTION 4 ================= */
{
  section: "4. Error Detection & Flow Control",
  cheatSheet: [
    { term: "Parity Bit", def: "Simple error detection method" },
    { term: "Checksum", def: "Error detection using sum of bits" },
    { term: "CRC", def: "Cyclic Redundancy Check using polynomial division" },
    { term: "ARQ", def: "Automatic Repeat reQuest" }
  ],
  questions: [
    {
      q: "Which error detection method is most powerful?",
      options: [
        "Parity bit",
        "Checksum",
        "CRC",
        "Hamming code"
      ],
      answer: 2,
      keyword: "CRC"
    },
    {
      q: "Stop-and-Wait protocol requires:",
      options: [
        "Multiple frames without ACK",
        "ACK for each transmitted frame",
        "Sliding window",
        "No retransmission"
      ],
      answer: 1,
      keyword: "Stop-and-Wait"
    },
    {
      q: "ARQ is used for:",
      options: [
        "Routing packets",
        "Error detection only",
        "Error recovery via retransmission",
        "Flow control only"
      ],
      answer: 2,
      keyword: "ARQ"
    }
  ]
},

/* ================= SECTION 5 ================= */
{
  section: "5. Network & Transport Layer Protocols",
  cheatSheet: [
    { term: "IP", def: "Provides logical addressing and packet delivery" },
    { term: "ARP", def: "Maps IP addresses to MAC addresses" },
    { term: "ICMP", def: "Reports errors and diagnostics" },
    { term: "TCP", def: "Reliable, connection-oriented transport protocol" },
    { term: "UDP", def: "Unreliable, connectionless transport protocol" }
  ],
  questions: [
    {
      q: "What is the main function of ARP?",
      options: [
        "Routing packets",
        "Mapping IP to MAC address",
        "Error reporting",
        "Flow control"
      ],
      answer: 1,
      keyword: "ARP"
    },
    {
      q: "Which protocol is used for error reporting and diagnostics?",
      options: [
        "IP",
        "TCP",
        "UDP",
        "ICMP"
      ],
      answer: 3,
      keyword: "ICMP"
    },
    {
      q: "Which sequence establishes a TCP connection?",
      options: [
        "ACK, SYN, FIN",
        "SYN, SYN-ACK, ACK",
        "FIN, ACK, SYN",
        "ACK only"
      ],
      answer: 1,
      keyword: "TCP Three-Way Handshake"
    },
    {
      q: "Which transport protocol provides reliability?",
      options: [
        "UDP",
        "IP",
        "TCP",
        "ICMP"
      ],
      answer: 2,
      keyword: "TCP"
    }
  ]
}

];
