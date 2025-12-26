const question7 = [

/* ================= SECTION 1 ================= */
{
  section: "1. Application Layer Overview",
  cheatSheet: [
    { term: "Application Layer", def: "Provides network services to end-user applications" },
    { term: "Network Application", def: "Application that communicates over a network" },
    { term: "End System", def: "Host running application processes" },
    { term: "Process", def: "Program running within a host" },
    { term: "Message", def: "Data exchanged between processes" }
  ],
  questions: [
    {
      q: "Which OSI layer provides services to end-user applications?",
      options: [
        "Transport layer",
        "Network layer",
        "Application layer",
        "Session layer"
      ],
      answer: 2,
      keyword: "Application Layer"
    },
    {
      q: "An application that communicates over a network is called:",
      options: [
        "Protocol",
        "Network application",
        "Process",
        "Socket"
      ],
      answer: 1,
      keyword: "Network Application"
    },
    {
      q: "Applications run on which system?",
      options: [
        "Router",
        "Switch",
        "End system",
        "Firewall"
      ],
      answer: 2,
      keyword: "End System"
    },
    {
      q: "A program running within a host is called:",
      options: ["Protocol", "Process", "Thread", "Socket"],
      answer: 1,
      keyword: "Process"
    },
    {
      q: "Data exchanged between processes is called:",
      options: ["Segment", "Message", "Frame", "Packet"],
      answer: 1,
      keyword: "Message"
    }
  ]
},

/* ================= SECTION 2 ================= */
{
  section: "2. Application Architectures",
  cheatSheet: [
    { term: "Client-Server Architecture", def: "Server provides services to clients" },
    { term: "Peer-to-Peer Architecture", def: "Peers communicate directly with each other" },
    { term: "Server", def: "Always-on host providing services" },
    { term: "Client", def: "Requests services from server" },
    { term: "Peer", def: "End system in P2P architecture" }
  ],
  questions: [
    {
      q: "Architecture where server provides services is:",
      options: [
        "Peer-to-peer",
        "Client-server",
        "Hybrid",
        "Broadcast"
      ],
      answer: 1,
      keyword: "Client-Server Architecture"
    },
    {
      q: "Architecture where peers communicate directly is:",
      options: [
        "Client-server",
        "Peer-to-peer",
        "Centralized",
        "Hierarchical"
      ],
      answer: 1,
      keyword: "Peer-to-Peer Architecture"
    },
    {
      q: "Always-on host that provides services is called:",
      options: ["Client", "Peer", "Server", "Router"],
      answer: 2,
      keyword: "Server"
    },
    {
      q: "Host that requests services is called:",
      options: ["Server", "Router", "Client", "Switch"],
      answer: 2,
      keyword: "Client"
    },
    {
      q: "End system participating in P2P is called:",
      options: ["Server", "Client", "Peer", "Gateway"],
      answer: 2,
      keyword: "Peer"
    }
  ]
},

/* ================= SECTION 3 ================= */
{
  section: "3. HTTP Protocol",
  cheatSheet: [
    { term: "HTTP", def: "HyperText Transfer Protocol" },
    { term: "Web Server", def: "Server that stores and serves web objects" },
    { term: "Web Client", def: "Browser that requests web objects" },
    { term: "Stateless", def: "Server maintains no client state" },
    { term: "Persistent Connection", def: "Multiple objects sent over single TCP connection" }
  ],
  questions: [
    {
      q: "HTTP stands for:",
      options: [
        "Hyper Transfer Text Protocol",
        "HyperText Transfer Protocol",
        "High Transfer Text Protocol",
        "Hyper Transport Transfer Protocol"
      ],
      answer: 1,
      keyword: "HTTP"
    },
    {
      q: "Browser acts as:",
      options: ["Web server", "Web client", "Proxy", "Router"],
      answer: 1,
      keyword: "Web Client"
    },
    {
      q: "HTTP server maintains no client state is called:",
      options: ["Stateful", "Reliable", "Stateless", "Persistent"],
      answer: 2,
      keyword: "Stateless"
    },
    {
      q: "Server that stores web objects is:",
      options: ["Web client", "Web server", "Proxy", "Gateway"],
      answer: 1,
      keyword: "Web Server"
    },
    {
      q: "Persistent HTTP means:",
      options: [
        "One object per connection",
        "Multiple objects per connection",
        "No TCP usage",
        "UDP-based HTTP"
      ],
      answer: 1,
      keyword: "Persistent Connection"
    }
  ]
},

/* ================= SECTION 4 ================= */
{
  section: "4. DNS Protocol",
  cheatSheet: [
    { term: "DNS", def: "Domain Name System" },
    { term: "Domain Name", def: "Human-readable host name" },
    { term: "IP Address Mapping", def: "Mapping domain names to IP addresses" },
    { term: "DNS Server", def: "Server that resolves domain names" },
    { term: "Hierarchical", def: "Distributed and hierarchical naming system" }
  ],
  questions: [
    {
      q: "DNS stands for:",
      options: [
        "Dynamic Name System",
        "Domain Name System",
        "Distributed Network Service",
        "Data Name Service"
      ],
      answer: 1,
      keyword: "DNS"
    },
    {
      q: "DNS maps domain names to:",
      options: [
        "MAC addresses",
        "IP addresses",
        "Port numbers",
        "URLs"
      ],
      answer: 1,
      keyword: "IP Address Mapping"
    },
    {
      q: "Human-readable host name is:",
      options: ["IP address", "Domain name", "Port", "Socket"],
      answer: 1,
      keyword: "Domain Name"
    },
    {
      q: "Server that resolves domain names is:",
      options: ["Web server", "DNS server", "Mail server", "Proxy"],
      answer: 1,
      keyword: "DNS Server"
    },
    {
      q: "DNS system structure is:",
      options: ["Centralized", "Flat", "Hierarchical", "Random"],
      answer: 2,
      keyword: "Hierarchical"
    }
  ]
},

/* ================= SECTION 5 ================= */
{
  section: "5. Email and File Transfer Protocols",
  cheatSheet: [
    { term: "SMTP", def: "Simple Mail Transfer Protocol" },
    { term: "POP3", def: "Post Office Protocol version 3" },
    { term: "IMAP", def: "Internet Message Access Protocol" },
    { term: "FTP", def: "File Transfer Protocol" },
    { term: "Mail Server", def: "Server that handles email services" }
  ],
  questions: [
    {
      q: "Protocol used to send email is:",
      options: ["POP3", "IMAP", "SMTP", "FTP"],
      answer: 2,
      keyword: "SMTP"
    },
    {
      q: "Protocol used to retrieve email from server is:",
      options: ["SMTP", "FTP", "POP3", "HTTP"],
      answer: 2,
      keyword: "POP3"
    },
    {
      q: "Protocol that allows managing emails on server is:",
      options: ["POP3", "IMAP", "SMTP", "DNS"],
      answer: 1,
      keyword: "IMAP"
    },
    {
      q: "Protocol used for file transfer is:",
      options: ["HTTP", "FTP", "SMTP", "DNS"],
      answer: 1,
      keyword: "FTP"
    },
    {
      q: "Email services are handled by:",
      options: ["Web server", "Mail server", "DNS server", "Proxy"],
      answer: 1,
      keyword: "Mail Server"
    }
  ]
}

];
