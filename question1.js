window.question1 = [

/* ================= SECTION 1 ================= */
{
  section: "1. Computer Network Definition",
  cheatSheet: [
    { term: "Computer Network", def: "Interconnection of devices capable of communication" },
    { term: "Host", def: "End system such as PC, laptop, server" },
    { term: "Connecting Device", def: "Router, switch, modem used to connect networks" },
    { term: "Communication Channel", def: "Wired or wireless medium used to transmit data" },
    { term: "Resource Sharing", def: "Sharing data, hardware, and software resources" }
  ],
  questions: [
    {
      q: "Computer network is:",
      options: [
        "Interconnection of devices capable of communication",
        "Collection of standalone computers",
        "Only wireless devices",
        "Only Internet"
      ],
      answer: 0,
      keyword: "Computer Network"
    },
    {
      q: "A computer or device connected to a network is called:",
      options: ["Protocol", "Host", "Channel", "Bandwidth"],
      answer: 1,
      keyword: "Host"
    },
    {
      q: "Router and switch are examples of:",
      options: ["Hosts", "Protocols", "Connecting Devices", "Applications"],
      answer: 2,
      keyword: "Connecting Device"
    },
    {
      q: "Wired cable and wireless air are examples of:",
      options: [
        "Protocols",
        "Communication Channels",
        "Resources",
        "Hosts"
      ],
      answer: 1,
      keyword: "Communication Channel"
    },
    {
      q: "Sharing printers, files, and data refers to:",
      options: [
        "Routing",
        "Resource Sharing",
        "Switching",
        "Encapsulation"
      ],
      answer: 1,
      keyword: "Resource Sharing"
    }
  ]
},

/* ================= SECTION 2 ================= */
{
  section: "2. Network Classification by Scale",
  cheatSheet: [
    { term: "PAN", def: "Personal Area Network" },
    { term: "LAN", def: "Local Area Network" },
    { term: "MAN", def: "Metropolitan Area Network" },
    { term: "WAN", def: "Wide Area Network" },
    { term: "Scale Classification", def: "Classification based on network size" }
  ],
  questions: [
    {
      q: "A network operating within a building or campus is called:",
      options: ["PAN", "LAN", "MAN", "WAN"],
      answer: 1,
      keyword: "LAN"
    },
    {
      q: "A network spanning states or countries is called:",
      options: ["PAN", "LAN", "MAN", "WAN"],
      answer: 3,
      keyword: "WAN"
    },
    {
      q: "PAN, LAN, MAN, WAN are classified based on:",
      options: [
        "Function",
        "Topology",
        "Scale",
        "Transmission"
      ],
      answer: 2,
      keyword: "Scale Classification"
    },
    {
      q: "Metropolitan Area Network is abbreviated as:",
      options: ["PAN", "LAN", "MAN", "WAN"],
      answer: 2,
      keyword: "MAN"
    },
    {
      q: "Personal Area Network is abbreviated as:",
      options: ["PAN", "LAN", "MAN", "WAN"],
      answer: 0,
      keyword: "PAN"
    }
  ]
},

/* ================= SECTION 3 ================= */
{
  section: "3. Network Classification by Function",
  cheatSheet: [
    { term: "Peer-to-Peer", def: "Each host can act as client and server" },
    { term: "Client-Server", def: "Dedicated server provides services to clients" },
    { term: "Function Classification", def: "Classification based on role of hosts" },
    { term: "Server", def: "Provides services to clients" },
    { term: "Client", def: "Requests services from server" }
  ],
  questions: [
    {
      q: "In which architecture hosts act as both client and server?",
      options: ["Client-Server", "Peer-to-Peer", "WAN", "LAN"],
      answer: 1,
      keyword: "Peer-to-Peer"
    },
    {
      q: "In client-server architecture, services are provided by:",
      options: ["Clients", "Routers", "Servers", "Switches"],
      answer: 2,
      keyword: "Server"
    },
    {
      q: "Client-server and peer-to-peer are classified based on:",
      options: [
        "Scale",
        "Topology",
        "Function",
        "Transmission"
      ],
      answer: 2,
      keyword: "Function Classification"
    },
    {
      q: "A client in a network primarily:",
      options: [
        "Routes packets",
        "Requests services",
        "Provides services",
        "Controls traffic"
      ],
      answer: 1,
      keyword: "Client"
    },
    {
      q: "Which architecture uses a dedicated server?",
      options: [
        "Peer-to-Peer",
        "Client-Server",
        "PAN",
        "MAN"
      ],
      answer: 1,
      keyword: "Client-Server"
    }
  ]
},

/* ================= SECTION 4 ================= */
{
  section: "4. Switching Techniques",
  cheatSheet: [
    { term: "Circuit Switching", def: "Dedicated path established for entire session" },
    { term: "Packet Switching", def: "Packets may take different routes to destination" },
    { term: "Dedicated Path", def: "Fixed route reserved for communication" },
    { term: "Flexible Routing", def: "Packets can follow different paths" },
    { term: "Switching Technique", def: "Method used to transmit data across network" }
  ],
  questions: [
    {
      q: "Which switching technique establishes a dedicated path?",
      options: [
        "Packet Switching",
        "Circuit Switching",
        "Broadcast",
        "Peer-to-Peer"
      ],
      answer: 1,
      keyword: "Circuit Switching"
    },
    {
      q: "Which switching technique is flexible?",
      options: [
        "Circuit Switching",
        "Packet Switching",
        "LAN",
        "MAN"
      ],
      answer: 1,
      keyword: "Packet Switching"
    },
    {
      q: "In packet switching, packets:",
      options: [
        "Use a fixed path",
        "May take different routes",
        "Require dedicated channel",
        "Are not routed"
      ],
      answer: 1,
      keyword: "Flexible Routing"
    },
    {
      q: "A fixed route reserved during communication is called:",
      options: [
        "Flexible routing",
        "Dedicated path",
        "Encapsulation",
        "Protocol"
      ],
      answer: 1,
      keyword: "Dedicated Path"
    },
    {
      q: "Circuit switching is ______ once a path is established.",
      options: [
        "Flexible",
        "Inflexible",
        "Random",
        "Wireless"
      ],
      answer: 1,
      keyword: "Circuit Switching"
    }
  ]
},

/* ================= SECTION 5 ================= */
{
  section: "5. Network Devices and OSI Layers",
  cheatSheet: [
    { term: "Hub", def: "Physical layer device" },
    { term: "Switch", def: "Data link layer device" },
    { term: "Router", def: "Network layer device" },
    { term: "Physical Layer", def: "Transmits bits over medium" },
    { term: "Data Link Layer", def: "Handles framing and MAC addressing" }
  ],
  questions: [
    {
      q: "Hub operates at which OSI layer?",
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
      q: "Switch operates at which OSI layer?",
      options: [
        "Physical layer",
        "Data link layer",
        "Network layer",
        "Transport layer"
      ],
      answer: 1,
      keyword: "Switch"
    },
    {
      q: "Router operates at which OSI layer?",
      options: [
        "Physical layer",
        "Data link layer",
        "Network layer",
        "Application layer"
      ],
      answer: 2,
      keyword: "Router"
    },
    {
      q: "Which layer is responsible for transmitting bits?",
      options: [
        "Physical layer",
        "Data link layer",
        "Network layer",
        "Transport layer"
      ],
      answer: 0,
      keyword: "Physical Layer"
    },
    {
      q: "Framing and MAC addressing belong to:",
      options: [
        "Physical layer",
        "Data link layer",
        "Network layer",
        "Transport layer"
      ],
      answer: 1,
      keyword: "Data Link Layer"
    }
  ]
}

];

