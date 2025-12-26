const mock_pdf_1 = [

{
  q: "Computer network is:",
  options: [
    "Collection of hardware components and computers",
    "Interconnected by communication channels",
    "Sharing of resources and information",
    "All of the mentioned answers"
  ],
  answer: 3,
  keyword: "Computer Network",
  cheatSheet: [
    { term: "Computer Network", def: "Interconnection of devices capable of communication" }
  ]
},

{
  q: "Which of the following networks is considered as the first computer network?",
  options: ["CNNET", "NSFNET", "ASAPNET", "ARPANET"],
  answer: 3,
  keyword: "ARPANET",
  cheatSheet: [
    { term: "ARPANET", def: "The first computer network" }
  ]
},

{
  q: "How many layers does OSI Model have?",
  options: ["4", "5", "6", "7"],
  answer: 3,
  keyword: "OSI Model",
  cheatSheet: [
    { term: "OSI Model", def: "Seven-layer network architecture model" }
  ]
},

{
  q: "Which layers of the OSI model are host-to-host layers?",
  options: [
    "Transport, Session, Presentation, Application",
    "Network, Transport, Session, Presentation",
    "Data link, Network, Transport, Session",
    "Physical, Data link, Network, Transport"
  ],
  answer: 0,
  keyword: "OSI Host Layers",
  cheatSheet: [
    {
      term: "OSI Host Layers",
      def: "Transport, Session, Presentation, Application"
    }
  ]
},

{
  q: "How many layers are in the TCP/IP model?",
  options: ["4 layers", "5 layers", "6 layers", "7 layers"],
  answer: 0,
  keyword: "TCP/IP Model",
  cheatSheet: [
    { term: "TCP/IP Model", def: "Four-layer network architecture" }
  ]
},

{
  q: "A computer network operating spanning states, countries, or the whole world is:",
  options: ["PAN", "LAN", "MAN", "WAN"],
  answer: 3,
  keyword: "WAN",
  cheatSheet: [
    { term: "WAN", def: "Wide Area Network" }
  ]
},

{
  q: "A computer network operating within a building or campus is:",
  options: ["PAN", "LAN", "MAN", "WAN"],
  answer: 1,
  keyword: "LAN",
  cheatSheet: [
    { term: "LAN", def: "Local Area Network" }
  ]
},

{
  q: "Which layer in the OSI model is concerned with syntax and semantics of information?",
  options: ["Application", "Presentation", "Session", "Transport"],
  answer: 1,
  keyword: "Presentation Layer",
  cheatSheet: [
    { term: "Presentation Layer", def: "Concerned with syntax and semantics" }
  ]
},

{
  q: "Which layer in the OSI model determines how packets are routed?",
  options: ["Application", "Presentation", "Transport", "Network"],
  answer: 3,
  keyword: "Network Layer",
  cheatSheet: [
    { term: "Network Layer", def: "Determines packet routing" }
  ]
},

{
  q: "Which layers of OSI model work same as Application layer of TCP/IP model?",
  options: [
    "Transport, Session, Application",
    "Network, Transport, Presentation",
    "Network, Transport, Session",
    "Session, Presentation, Application"
  ],
  answer: 3,
  keyword: "OSI Application Layers",
  cheatSheet: [
    {
      term: "OSI Application Layers",
      def: "Session, Presentation, Application"
    }
  ]
},

{
  q: "Which OSI layer provides internetwork connectivity?",
  options: ["Physical", "Data Link", "Network", "Transport"],
  answer: 2,
  keyword: "Network Layer",
  cheatSheet: [
    { term: "Network Layer", def: "Provides internetwork connectivity" }
  ]
},

{
  q: "Which of the following is a function of Data Link layer?",
  options: [
    "Defines electrical characteristics",
    "Provides error detection and correction",
    "Selects path for data transfer",
    "None of the mentioned"
  ],
  answer: 1,
  keyword: "Data Link Layer",
  cheatSheet: [
    { term: "Data Link Layer", def: "Provides error detection and correction" }
  ]
},

{
  q: "Correct top-down arrangement of data units in OSI model is:",
  options: [
    "Data, Frame, Packet, Segment, Bit",
    "Data, Packet, Segment, Frame, Bit",
    "Data, Segment, Packet, Frame, Bit",
    "Data, Segment, Frame, Packet, Bit"
  ],
  answer: 2,
  keyword: "OSI Data Units",
  cheatSheet: [
    {
      term: "OSI Data Units",
      def: "Data, Segment, Packet, Frame, Bit"
    }
  ]
},

{
  q: "Which network types are classified by scale?",
  options: [
    "Peer-to-peer, Client-server",
    "Circuit switching",
    "PAN, LAN, MAN, WAN",
    "Wired, Wireless"
  ],
  answer: 2,
  keyword: "Scale Classification",
  cheatSheet: [
    {
      term: "Scale Classification",
      def: "PAN, LAN, MAN, WAN"
    }
  ]
},

{
  q: "Which network types are classified by function?",
  options: [
    "Peer-to-peer, Client-server",
    "Packet switching",
    "PAN, LAN, MAN, WAN",
    "Wired, Wireless"
  ],
  answer: 0,
  keyword: "Function Classification",
  cheatSheet: [
    {
      term: "Function Classification",
      def: "Peer-to-peer, Client-server"
    }
  ]
},

{
  q: "A communication network that transmits from one sender to all endpoints is:",
  options: ["Point-to-point", "Broadcast", "Multicast", "None"],
  answer: 1,
  keyword: "Broadcast",
  cheatSheet: [
    { term: "Broadcast", def: "One-to-all communication" }
  ]
},

{
  q: "A set of established rules for data transmission is called:",
  options: ["Host", "Protocol", "Application", "Server"],
  answer: 1,
  keyword: "Protocol",
  cheatSheet: [
    { term: "Protocol", def: "Set of rules for communication" }
  ]
},

{
  q: "Commonly used unit for measuring speed of data transmission is:",
  options: ["Byte", "Bit per second", "Nanosecond", "Megahertz"],
  answer: 1,
  keyword: "bps",
  cheatSheet: [
    { term: "bps", def: "Bits per second" }
  ]
},

{
  q: "Which switching technique is inflexible once path is established?",
  options: [
    "Circuit switching",
    "Packet switching",
    "Broadcast",
    "None"
  ],
  answer: 0,
  keyword: "Circuit Switching",
  cheatSheet: [
    { term: "Circuit Switching", def: "Dedicated fixed path" }
  ]
},

{
  q: "Which switching technique is flexible?",
  options: [
    "Circuit switching",
    "Packet switching",
    "Peer-to-peer",
    "None"
  ],
  answer: 1,
  keyword: "Packet Switching",
  cheatSheet: [
    { term: "Packet Switching", def: "Packets take different routes" }
  ]
}

];
