const mock_pdf_3 = [

{
  q: "Data unit at data link layer is known as:",
  options: ["Bit", "Frame", "Packet", "Segment"],
  answer: 1,
  keyword: "Frame",
  cheatSheet: [
    { term: "Frame", def: "Data unit at data link layer" }
  ]
},

{
  q: "Which address is used in LAN for device identification?",
  options: ["IP address", "MAC address", "Port number", "Socket"],
  answer: 1,
  keyword: "MAC Address",
  cheatSheet: [
    { term: "MAC Address", def: "Physical address used in LAN" }
  ]
},

{
  q: "Which method is used to encapsulate packets into frames?",
  options: ["Routing", "Framing", "Switching", "Fragmentation"],
  answer: 1,
  keyword: "Framing",
  cheatSheet: [
    { term: "Framing", def: "Encapsulation of packets into frames" }
  ]
},

{
  q: "Which data link layer service controls transmission rate?",
  options: ["Error detection", "Flow control", "Routing", "Switching"],
  answer: 1,
  keyword: "Flow Control",
  cheatSheet: [
    { term: "Flow Control", def: "Controls transmission rate" }
  ]
},

{
  q: "Which technique detects errors using polynomial division?",
  options: ["Parity check", "Checksum", "CRC", "Bit stuffing"],
  answer: 2,
  keyword: "CRC",
  cheatSheet: [
    { term: "CRC", def: "Cyclic Redundancy Check" }
  ]
},

{
  q: "Which framing method inserts a 0 after five consecutive 1s?",
  options: ["Byte stuffing", "Bit stuffing", "Byte count", "Flag byte"],
  answer: 1,
  keyword: "Bit Stuffing",
  cheatSheet: [
    { term: "Bit Stuffing", def: "Inserts 0 after five consecutive 1s" }
  ]
},

{
  q: "Communication where both sides transmit but not simultaneously is:",
  options: ["Simplex", "Half duplex", "Full duplex", "Parallel"],
  answer: 1,
  keyword: "Half Duplex",
  cheatSheet: [
    { term: "Half Duplex", def: "Both directions but not at same time" }
  ]
},

{
  q: "Which MAC protocol divides channel into time slots?",
  options: ["FDMA", "TDMA", "CSMA/CD", "ALOHA"],
  answer: 1,
  keyword: "TDMA",
  cheatSheet: [
    { term: "TDMA", def: "Time Division Multiple Access" }
  ]
},

{
  q: "Which MAC protocol divides channel into frequency bands?",
  options: ["TDMA", "FDMA", "CSMA", "ALOHA"],
  answer: 1,
  keyword: "FDMA",
  cheatSheet: [
    { term: "FDMA", def: "Frequency Division Multiple Access" }
  ]
},

{
  q: "Which protocol allows nodes to transmit immediately without synchronization?",
  options: ["Slotted ALOHA", "Pure ALOHA", "CSMA/CD", "TDMA"],
  answer: 1,
  keyword: "Pure ALOHA",
  cheatSheet: [
    { term: "Pure ALOHA", def: "Unslotted random access protocol" }
  ]
},

{
  q: "Which protocol improves ALOHA by using time slots?",
  options: ["CSMA", "Pure ALOHA", "Slotted ALOHA", "FDMA"],
  answer: 2,
  keyword: "Slotted ALOHA",
  cheatSheet: [
    { term: "Slotted ALOHA", def: "ALOHA with time slots" }
  ]
},

{
  q: "CSMA/CD is mainly used in:",
  options: ["Wireless LAN", "Wired Ethernet", "Bluetooth", "Cellular network"],
  answer: 1,
  keyword: "CSMA/CD",
  cheatSheet: [
    { term: "CSMA/CD", def: "Used in wired Ethernet" }
  ]
},

{
  q: "CSMA/CA is mainly used in:",
  options: ["Wired Ethernet", "Wireless LAN", "Token Ring", "FDDI"],
  answer: 1,
  keyword: "CSMA/CA",
  cheatSheet: [
    { term: "CSMA/CA", def: "Used in wireless LAN" }
  ]
},

{
  q: "What does MAC stand for?",
  options: [
    "Media Access Control",
    "Multiple Access Channel",
    "Machine Address Code",
    "Main Access Control"
  ],
  answer: 0,
  keyword: "MAC",
  cheatSheet: [
    { term: "MAC", def: "Media Access Control" }
  ]
},

{
  q: "Which device uses MAC address to forward frames?",
  options: ["Router", "Switch", "Hub", "Repeater"],
  answer: 1,
  keyword: "Switch",
  cheatSheet: [
    { term: "Switch", def: "Uses MAC address to forward frames" }
  ]
},

{
  q: "Which layer is responsible for logical addressing?",
  options: ["Data link layer", "Network layer", "Transport layer", "Physical layer"],
  answer: 1,
  keyword: "Network Layer",
  cheatSheet: [
    { term: "Network Layer", def: "Provides logical addressing" }
  ]
},

{
  q: "Which protocol is used to map IP address to MAC address?",
  options: ["RARP", "DNS", "ARP", "ICMP"],
  answer: 2,
  keyword: "ARP",
  cheatSheet: [
    { term: "ARP", def: "Maps IP address to MAC address" }
  ]
},

{
  q: "Which algorithm is used in link-state routing?",
  options: ["Bellman-Ford", "CRC", "Dijkstra", "Backoff"],
  answer: 2,
  keyword: "Dijkstra Algorithm",
  cheatSheet: [
    { term: "Dijkstra Algorithm", def: "Shortest path algorithm" }
  ]
},

{
  q: "Which routing algorithm uses neighbor information?",
  options: ["Link state", "Distance vector", "Flooding", "Random"],
  answer: 1,
  keyword: "Distance Vector",
  cheatSheet: [
    { term: "Distance Vector", def: "Uses neighbor information" }
  ]
},

{
  q: "Which routing protocol is used within an autonomous system?",
  options: ["BGP", "RIP", "OSPF", "ICMP"],
  answer: 2,
  keyword: "OSPF",
  cheatSheet: [
    { term: "OSPF", def: "Intra-AS routing protocol" }
  ]
},

{
  q: "Which routing protocol is used between autonomous systems?",
  options: ["OSPF", "RIP", "BGP", "ICMP"],
  answer: 2,
  keyword: "BGP",
  cheatSheet: [
    { term: "BGP", def: "Inter-AS routing protocol" }
  ]
}

];
