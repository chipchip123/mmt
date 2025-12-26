const question6 = [

/* ================= SECTION 1 ================= */
{
  section: "1. Transport Layer Overview",
  cheatSheet: [
    { term: "Transport Layer", def: "Provides process-to-process communication" },
    { term: "Segment", def: "Data unit at transport layer" },
    { term: "Process", def: "Running program on a host" },
    { term: "End-to-End Communication", def: "Communication between processes on different hosts" },
    { term: "Port Number", def: "Identifies a process on a host" }
  ],
  questions: [
    {
      q: "Which OSI layer provides process-to-process communication?",
      options: [
        "Network layer",
        "Transport layer",
        "Application layer",
        "Data link layer"
      ],
      answer: 1,
      keyword: "Transport Layer"
    },
    {
      q: "Data unit at transport layer is called:",
      options: ["Frame", "Packet", "Segment", "Bit"],
      answer: 2,
      keyword: "Segment"
    },
    {
      q: "A running program on a host is called:",
      options: ["Protocol", "Process", "Thread", "Socket"],
      answer: 1,
      keyword: "Process"
    },
    {
      q: "Transport layer provides communication:",
      options: [
        "Host-to-host",
        "Process-to-process",
        "Network-to-network",
        "Link-to-link"
      ],
      answer: 1,
      keyword: "End-to-End Communication"
    },
    {
      q: "Process on a host is identified by:",
      options: ["IP address", "MAC address", "Port number", "Subnet mask"],
      answer: 2,
      keyword: "Port Number"
    }
  ]
},

/* ================= SECTION 2 ================= */
{
  section: "2. Multiplexing and Demultiplexing",
  cheatSheet: [
    { term: "Multiplexing", def: "Combining data from multiple processes" },
    { term: "Demultiplexing", def: "Delivering data to correct process" },
    { term: "Socket", def: "Endpoint for sending and receiving data" },
    { term: "Source Port", def: "Port number of sending process" },
    { term: "Destination Port", def: "Port number of receiving process" }
  ],
  questions: [
    {
      q: "Combining data from multiple processes is called:",
      options: [
        "Demultiplexing",
        "Multiplexing",
        "Encapsulation",
        "Fragmentation"
      ],
      answer: 1,
      keyword: "Multiplexing"
    },
    {
      q: "Delivering data to the correct process is called:",
      options: [
        "Multiplexing",
        "Demultiplexing",
        "Forwarding",
        "Routing"
      ],
      answer: 1,
      keyword: "Demultiplexing"
    },
    {
      q: "Endpoint used for sending and receiving data is:",
      options: ["Port", "Socket", "Segment", "Frame"],
      answer: 1,
      keyword: "Socket"
    },
    {
      q: "Port number of sending process is called:",
      options: [
        "Destination port",
        "Source port",
        "MAC address",
        "IP address"
      ],
      answer: 1,
      keyword: "Source Port"
    },
    {
      q: "Port number of receiving process is called:",
      options: [
        "Source port",
        "Destination port",
        "Socket",
        "Segment"
      ],
      answer: 1,
      keyword: "Destination Port"
    }
  ]
},

/* ================= SECTION 3 ================= */
{
  section: "3. UDP Protocol",
  cheatSheet: [
    { term: "UDP", def: "User Datagram Protocol" },
    { term: "Connectionless", def: "No connection establishment required" },
    { term: "Unreliable", def: "No guarantee of delivery or order" },
    { term: "Checksum", def: "Error detection mechanism in UDP" },
    { term: "Low Overhead", def: "Minimal protocol processing" }
  ],
  questions: [
    {
      q: "UDP stands for:",
      options: [
        "Universal Data Protocol",
        "User Datagram Protocol",
        "Unified Data Protocol",
        "User Data Process"
      ],
      answer: 1,
      keyword: "UDP"
    },
    {
      q: "UDP is a ______ protocol.",
      options: [
        "Connection-oriented",
        "Connectionless",
        "Reliable",
        "Stateful"
      ],
      answer: 1,
      keyword: "Connectionless"
    },
    {
      q: "UDP does not guarantee:",
      options: [
        "Low delay",
        "Delivery and order",
        "Low overhead",
        "Simple processing"
      ],
      answer: 1,
      keyword: "Unreliable"
    },
    {
      q: "UDP uses which mechanism for error detection?",
      options: ["CRC", "Checksum", "Parity", "ACK"],
      answer: 1,
      keyword: "Checksum"
    },
    {
      q: "UDP is preferred for applications requiring:",
      options: [
        "Reliability",
        "Low overhead",
        "Connection setup",
        "Guaranteed delivery"
      ],
      answer: 1,
      keyword: "Low Overhead"
    }
  ]
},

/* ================= SECTION 4 ================= */
{
  section: "4. TCP Protocol",
  cheatSheet: [
    { term: "TCP", def: "Transmission Control Protocol" },
    { term: "Connection-Oriented", def: "Connection established before data transfer" },
    { term: "Reliable", def: "Guarantees delivery and order" },
    { term: "Flow Control", def: "Prevents sender from overwhelming receiver" },
    { term: "Congestion Control", def: "Prevents network congestion" }
  ],
  questions: [
    {
      q: "TCP stands for:",
      options: [
        "Transfer Control Protocol",
        "Transmission Control Protocol",
        "Transport Connection Protocol",
        "Total Control Process"
      ],
      answer: 1,
      keyword: "TCP"
    },
    {
      q: "TCP is a ______ protocol.",
      options: [
        "Connectionless",
        "Connection-oriented",
        "Unreliable",
        "Stateless"
      ],
      answer: 1,
      keyword: "Connection-Oriented"
    },
    {
      q: "TCP guarantees:",
      options: [
        "Low delay",
        "Reliable delivery",
        "Low overhead",
        "No congestion"
      ],
      answer: 1,
      keyword: "Reliable"
    },
    {
      q: "Preventing sender from overwhelming receiver is:",
      options: [
        "Congestion control",
        "Flow control",
        "Routing",
        "Fragmentation"
      ],
      answer: 1,
      keyword: "Flow Control"
    },
    {
      q: "Preventing network congestion is:",
      options: [
        "Flow control",
        "Congestion control",
        "Multiplexing",
        "Encapsulation"
      ],
      answer: 1,
      keyword: "Congestion Control"
    }
  ]
},

/* ================= SECTION 5 ================= */
{
  section: "5. TCP vs UDP Comparison",
  cheatSheet: [
    { term: "TCP Reliability", def: "Provides reliable data transfer" },
    { term: "UDP Reliability", def: "Does not provide reliable delivery" },
    { term: "TCP Overhead", def: "Higher overhead due to control mechanisms" },
    { term: "UDP Overhead", def: "Lower overhead" },
    { term: "Application Requirement", def: "Determines choice of transport protocol" }
  ],
  questions: [
    {
      q: "Which protocol provides reliable delivery?",
      options: ["UDP", "TCP", "IP", "ICMP"],
      answer: 1,
      keyword: "TCP Reliability"
    },
    {
      q: "Which protocol has lower overhead?",
      options: ["TCP", "UDP", "ICMP", "ARP"],
      answer: 1,
      keyword: "UDP Overhead"
    },
    {
      q: "Which protocol is connection-oriented?",
      options: ["UDP", "TCP", "IP", "ICMP"],
      answer: 1,
      keyword: "TCP"
    },
    {
      q: "Which protocol is suitable for real-time applications?",
      options: ["TCP", "UDP", "FTP", "SMTP"],
      answer: 1,
      keyword: "Application Requirement"
    },
    {
      q: "Choice between TCP and UDP depends on:",
      options: [
        "Cable length",
        "Application requirement",
        "IP address",
        "MAC address"
      ],
      answer: 1,
      keyword: "Application Requirement"
    }
  ]
}

];
