window.question5 = [

/* ================= SECTION 1 ================= */
{
  section: "1. Network Layer Overview",
  cheatSheet: [
    { term: "Network Layer", def: "Provides host-to-host packet delivery" },
    { term: "Packet", def: "Data unit at network layer" },
    { term: "Router", def: "Forwards packets between networks" },
    { term: "Forwarding", def: "Moving packets from input to output port" },
    { term: "Routing", def: "Determining path from source to destination" }
  ],
  questions: [
    {
      q: "Which OSI layer provides host-to-host packet delivery?",
      options: ["Data link layer", "Network layer", "Transport layer", "Application layer"],
      answer: 1,
      keyword: "Network Layer"
    },
    {
      q: "Data unit of the network layer is called:",
      options: ["Frame", "Packet", "Segment", "Bit"],
      answer: 1,
      keyword: "Packet"
    },
    {
      q: "Device that forwards packets between networks is:",
      options: ["Switch", "Router", "Hub", "Repeater"],
      answer: 1,
      keyword: "Router"
    },
    {
      q: "Moving packets from input port to output port is called:",
      options: ["Routing", "Forwarding", "Encapsulation", "Fragmentation"],
      answer: 1,
      keyword: "Forwarding"
    },
    {
      q: "Determining the path packets take is called:",
      options: ["Forwarding", "Routing", "Switching", "Framing"],
      answer: 1,
      keyword: "Routing"
    }
  ]
},

/* ================= SECTION 2 ================= */
{
  section: "2. IP Addressing",
  cheatSheet: [
    { term: "IP Address", def: "Logical address used to identify hosts" },
    { term: "IPv4", def: "32-bit IP addressing scheme" },
    { term: "IPv6", def: "128-bit IP addressing scheme" },
    { term: "Network Address", def: "Identifies network portion of IP" },
    { term: "Host Address", def: "Identifies host portion of IP" }
  ],
  questions: [
    {
      q: "Logical address used to identify a host is:",
      options: ["MAC address", "IP address", "Port number", "Socket"],
      answer: 1,
      keyword: "IP Address"
    },
    {
      q: "IPv4 uses address length of:",
      options: ["16 bits", "32 bits", "64 bits", "128 bits"],
      answer: 1,
      keyword: "IPv4"
    },
    {
      q: "IPv6 uses address length of:",
      options: ["32 bits", "64 bits", "128 bits", "256 bits"],
      answer: 2,
      keyword: "IPv6"
    },
    {
      q: "Part of IP address that identifies network is:",
      options: ["Host address", "Network address", "MAC address", "Port"],
      answer: 1,
      keyword: "Network Address"
    },
    {
      q: "Part of IP address that identifies host is:",
      options: ["Network address", "Host address", "Subnet mask", "Gateway"],
      answer: 1,
      keyword: "Host Address"
    }
  ]
},

/* ================= SECTION 3 ================= */
{
  section: "3. Routing Algorithms",
  cheatSheet: [
    { term: "Routing Algorithm", def: "Algorithm used to determine best path" },
    { term: "Link State", def: "Routing algorithm with global network view" },
    { term: "Distance Vector", def: "Routing algorithm using neighbor information" },
    { term: "Dijkstra Algorithm", def: "Link state shortest path algorithm" },
    { term: "Bellman-Ford Algorithm", def: "Distance vector routing algorithm" }
  ],
  questions: [
    {
      q: "Algorithm used to determine best path is:",
      options: ["Framing", "Routing algorithm", "Encapsulation", "Switching"],
      answer: 1,
      keyword: "Routing Algorithm"
    },
    {
      q: "Routing algorithm with global network information is:",
      options: ["Distance vector", "Link state", "Random access", "Flooding"],
      answer: 1,
      keyword: "Link State"
    },
    {
      q: "Routing algorithm based on neighbor information is:",
      options: ["Link state", "Distance vector", "Flooding", "Broadcast"],
      answer: 1,
      keyword: "Distance Vector"
    },
    {
      q: "Shortest path algorithm used in link state routing is:",
      options: [
        "Bellman-Ford algorithm",
        "Dijkstra algorithm",
        "CRC algorithm",
        "Backoff algorithm"
      ],
      answer: 1,
      keyword: "Dijkstra Algorithm"
    },
    {
      q: "Distance vector routing uses:",
      options: [
        "Dijkstra algorithm",
        "Bellman-Ford algorithm",
        "CRC",
        "Checksum"
      ],
      answer: 1,
      keyword: "Bellman-Ford Algorithm"
    }
  ]
},

/* ================= SECTION 4 ================= */
{
  section: "4. NAT and ICMP",
  cheatSheet: [
    { term: "NAT", def: "Network Address Translation" },
    { term: "Private IP", def: "IP address used within private network" },
    { term: "Public IP", def: "IP address used on Internet" },
    { term: "ICMP", def: "Internet Control Message Protocol" },
    { term: "Ping", def: "ICMP-based tool to test reachability" }
  ],
  questions: [
    {
      q: "NAT stands for:",
      options: [
        "Network Address Translation",
        "Node Access Technique",
        "Network Allocation Table",
        "Network Address Transfer"
      ],
      answer: 0,
      keyword: "NAT"
    },
    {
      q: "IP address used inside a private network is:",
      options: ["Public IP", "Private IP", "MAC address", "Gateway"],
      answer: 1,
      keyword: "Private IP"
    },
    {
      q: "IP address used on the Internet is:",
      options: ["Private IP", "Public IP", "MAC address", "Subnet mask"],
      answer: 1,
      keyword: "Public IP"
    },
    {
      q: "Protocol used for error reporting and diagnostics is:",
      options: ["TCP", "UDP", "ICMP", "ARP"],
      answer: 2,
      keyword: "ICMP"
    },
    {
      q: "Command used to test network reachability is:",
      options: ["ipconfig", "ping", "nslookup", "route"],
      answer: 1,
      keyword: "Ping"
    }
  ]
},

/* ================= SECTION 5 ================= */
{
  section: "5. Packet Fragmentation",
  cheatSheet: [
    { term: "Fragmentation", def: "Breaking packet into smaller pieces" },
    { term: "MTU", def: "Maximum Transmission Unit" },
    { term: "Reassembly", def: "Combining fragments at destination" },
    { term: "Datagram", def: "IP packet" },
    { term: "Header", def: "Control information of packet" }
  ],
  questions: [
    {
      q: "Breaking packets into smaller pieces is called:",
      options: ["Encapsulation", "Fragmentation", "Forwarding", "Routing"],
      answer: 1,
      keyword: "Fragmentation"
    },
    {
      q: "MTU stands for:",
      options: [
        "Maximum Transmission Unit",
        "Minimum Transfer Unit",
        "Media Transfer Unit",
        "Maximum Transport Utility"
      ],
      answer: 0,
      keyword: "MTU"
    },
    {
      q: "Combining fragments at destination is called:",
      options: ["Fragmentation", "Reassembly", "Forwarding", "Switching"],
      answer: 1,
      keyword: "Reassembly"
    },
    {
      q: "IP packet is also called:",
      options: ["Frame", "Segment", "Datagram", "Bit"],
      answer: 2,
      keyword: "Datagram"
    },
    {
      q: "Control information of a packet is stored in:",
      options: ["Payload", "Header", "Trailer", "Frame"],
      answer: 1,
      keyword: "Header"
    }
  ]
}

];

