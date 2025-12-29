window.question8 = [

  /* ================= SECTION 1: NETWORK BASICS & SWITCHING ================= */
  {
    section: "1. Network Basics & Switching",
    cheatSheet: [
      { term: "Packet Switching", def: "Data is split into packets, sharing links dynamically (flexible)." },
      { term: "Circuit Switching", def: "Reserves resources (bandwidth) for the entire session (fixed)." },
      { term: "Protocol", def: "Set of rules governing data communication." },
      { term: "OSI Model", def: "Open Systems Interconnection model with 7 layers." }
    ],
    questions: [
      {
        q: "Packet switching is best described as:",
        options: [
          "Reserving resources for the entire session",
          "Sharing network links among packets dynamically",
          "Using fixed bandwidth per connection",
          "Dropping idle connections"
        ],
        answer: 1,
        keyword: "Packet Switching"
      },
      {
        q: "Circuit switching differs from packet switching because it:",
        options: [
          "Shares links dynamically",
          "Reserves dedicated resources",
          "Uses packets only",
          "Does not require setup"
        ],
        answer: 1,
        keyword: "Circuit Switching"
      },
      {
        q: "A protocol defines:",
        options: [
          "Cable length",
          "Rules for message format and order",
          "Device manufacturers",
          "User permissions"
        ],
        answer: 1,
        keyword: "Protocol"
      },
      {
        q: "The OSI model consists of how many layers?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        keyword: "OSI Model"
      }
    ]
  },

  /* ================= SECTION 2: PHYSICAL LAYER & SIGNALS ================= */
  {
    section: "2. Physical Layer & Signals",
    cheatSheet: [
      { term: "Physical Layer", def: "Transmits raw bits over a medium." },
      { term: "Bandwidth", def: "Measured in Hertz (Hz), the range of frequencies." },
      { term: "Multiplexing", def: "Sharing a channel (FDM: Frequency, TDM: Time)." },
      { term: "Digital Signal", def: "Discrete levels (0s and 1s)." },
      { term: "Manchester Encoding", def: "Line coding with a transition in the middle of each bit." }
    ],
    questions: [
      {
        q: "The physical layer is responsible for:",
        options: ["Routing", "Framing", "Transmitting raw bits", "Encryption"],
        answer: 2,
        keyword: "Physical Layer"
      },
      {
        q: "Which layer converts data into signals suitable for transmission?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 0,
        keyword: "Signal Conversion"
      },
      {
        q: "Line coding refers to:",
        options: ["Mapping bits to signals", "Encrypting data", "Routing packets", "Detecting errors"],
        answer: 0,
        keyword: "Line Coding"
      },
      {
        q: "Manchester encoding is characterized by:",
        options: ["No transitions", "A transition in the middle of each bit", "Frequency hopping", "Phase-only modulation"],
        answer: 1,
        keyword: "Manchester Encoding"
      },
      {
        q: "Analog signals are:",
        options: ["Discrete", "Continuous", "Binary", "Packet-based"],
        answer: 1,
        keyword: "Analog Signal"
      },
      {
        q: "Digital signals are characterized by:",
        options: ["Infinite values", "Discrete levels", "Continuous waveforms", "Noise only"],
        answer: 1,
        keyword: "Digital Signal"
      },
      {
        q: "Bandwidth is measured in:",
        options: ["Bytes", "Seconds", "Hertz", "Volts"],
        answer: 2,
        keyword: "Bandwidth"
      },
      {
        q: "Multiplexing is used to:",
        options: ["Encrypt data", "Share a single channel among multiple signals", "Detect errors", "Route packets"],
        answer: 1,
        keyword: "Multiplexing"
      },
      {
        q: "Frequency Division Multiplexing (FDM) separates signals by:",
        options: ["Time slots", "Frequency bands", "Packet size", "Voltage levels"],
        answer: 1,
        keyword: "FDM"
      },
      {
        q: "Time Division Multiplexing (TDM) separates signals by:",
        options: ["Frequency", "Time slots", "Phase", "Amplitude"],
        answer: 1,
        keyword: "TDM"
      },
      {
        q: "Which medium provides the highest bandwidth?",
        options: ["Twisted pair", "Coaxial cable", "Optical fiber", "Radio waves"],
        answer: 2,
        keyword: "Optical Fiber"
      }
    ]
  },

  /* ================= SECTION 3: DATA LINK LAYER ================= */
  {
    section: "3. Data Link Layer (Framing & Error Control)",
    cheatSheet: [
      { term: "Data Link Layer", def: "Handles framing, MAC addressing, and error detection." },
      { term: "MAC Address", def: "Physical address used at Data Link layer." },
      { term: "CRC", def: "Cyclic Redundancy Check, used for error detection." },
      { term: "ARQ", def: "Automatic Repeat reQuest for retransmission." },
      { term: "Go-Back-N", def: "Retransmits all frames after an error." }
    ],
    questions: [
      {
        q: "Which layer performs framing?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 1,
        keyword: "Framing"
      },
      {
        q: "Which task is NOT handled by the Data Link layer?",
        options: ["Error detection", "Flow control", "Routing", "Framing"],
        answer: 2,
        keyword: "Data Link Layer"
      },
      {
        q: "Which address is used at the Data Link layer?",
        options: ["IP address", "Port number", "MAC address", "Domain name"],
        answer: 2,
        keyword: "MAC Address"
      },
      {
        q: "CRC is primarily used for:",
        options: ["Error correction", "Error detection", "Encryption", "Routing"],
        answer: 1,
        keyword: "CRC"
      },
      {
        q: "Parity checking can reliably detect:",
        options: ["All burst errors", "Single-bit errors", "All errors", "No errors"],
        answer: 1,
        keyword: "Parity Bit"
      },
      {
        q: "Checksum is used to:",
        options: ["Correct errors", "Detect errors", "Encrypt data", "Route packets"],
        answer: 1,
        keyword: "Checksum"
      },
      {
        q: "Automatic Repeat reQuest (ARQ) is used for:",
        options: ["Flow control", "Error detection only", "Retransmission of lost or corrupted frames", "Encryption"],
        answer: 2,
        keyword: "ARQ"
      },
      {
        q: "Stop-and-Wait protocol requires:",
        options: ["No acknowledgments", "Acknowledgment after each frame", "Multiple frames sent without ACK", "Sliding window"],
        answer: 1,
        keyword: "Stop-and-Wait"
      },
      {
        q: "Which ARQ protocol retransmits all frames after an error?",
        options: ["Selective Repeat", "Stop-and-Wait", "Go-Back-N", "Sliding Window"],
        answer: 2,
        keyword: "Go-Back-N"
      },
      {
        q: "Selective Repeat differs from Go-Back-N because it:",
        options: ["Retransmits only erroneous frames", "Retransmits all frames", "Does not use ACK", "Is used only in UDP"],
        answer: 0,
        keyword: "Selective Repeat"
      }
    ]
  },

  /* ================= SECTION 4: NETWORK LAYER ================= */
  {
    section: "4. Network Layer (IP & Routing)",
    cheatSheet: [
      { term: "Network Layer", def: "Routing and logical addressing (IP)." },
      { term: "Router", def: "Device that forwards packets between networks." },
      { term: "IP", def: "Connectionless, best-effort delivery protocol." },
      { term: "ARP", def: "Maps IP address to MAC address." },
      { term: "ICMP", def: "Used for error reporting and diagnostics (Ping)." }
    ],
    questions: [
      {
        q: "Which OSI layer is responsible for routing packets?",
        options: ["Data Link", "Transport", "Network", "Session"],
        answer: 2,
        keyword: "Network Layer"
      },
      {
        q: "Which device forwards packets between different networks?",
        options: ["Hub", "Switch", "Router", "Repeater"],
        answer: 2,
        keyword: "Router"
      },
      {
        q: "The Network layer is responsible for:",
        options: ["End-to-end delivery", "Routing and logical addressing", "Framing", "Physical transmission"],
        answer: 1,
        keyword: "Network Layer"
      },
      {
        q: "Which layer is responsible for logical addressing?",
        options: ["Data Link", "Network", "Transport", "Application"],
        answer: 1,
        keyword: "Logical Addressing"
      },
      {
        q: "IP provides which type of service?",
        options: ["Reliable and connection-oriented", "Reliable and connectionless", "Best-effort and connectionless", "Encrypted delivery"],
        answer: 2,
        keyword: "IP"
      },
      {
        q: "Which protocol maps an IP address to a MAC address?",
        options: ["DNS", "ICMP", "ARP", "RARP"],
        answer: 2,
        keyword: "ARP"
      },
      {
        q: "ICMP is mainly used for:",
        options: ["Data transfer", "Error reporting and diagnostics", "Routing updates", "Address resolution"],
        answer: 1,
        keyword: "ICMP"
      },
      {
        q: "Which utility uses ICMP messages?",
        options: ["FTP", "Ping", "SMTP", "DNS"],
        answer: 1,
        keyword: "Ping"
      }
    ]
  },

  /* ================= SECTION 5: TRANSPORT LAYER ================= */
  {
    section: "5. Transport Layer (TCP & UDP)",
    cheatSheet: [
      { term: "Transport Layer", def: "End-to-end communication and reliability." },
      { term: "TCP", def: "Reliable, connection-oriented, uses 3-way handshake." },
      { term: "UDP", def: "Unreliable, connectionless, faster than TCP." },
      { term: "Port Number", def: "Identifies a specific process/application on a host." },
      { term: "Flow Control", def: "Prevents sender from overwhelming receiver." }
    ],
    questions: [
      {
        q: "The Transport layer provides:",
        options: ["Physical addressing", "End-to-end communication", "Routing", "Framing"],
        answer: 1,
        keyword: "Transport Layer"
      },
      {
        q: "Which layer ensures reliable end-to-end delivery?",
        options: ["Network", "Transport", "Data Link", "Application"],
        answer: 1,
        keyword: "Reliable Delivery"
      },
      {
        q: "Which field identifies a process at the transport layer?",
        options: ["IP address", "MAC address", "Port number", "Sequence number"],
        answer: 2,
        keyword: "Port Number"
      },
      {
        q: "Which address uniquely identifies a process on a host?",
        options: ["MAC address", "IP address", "Port number", "Sequence number"],
        answer: 2,
        keyword: "Process Identification"
      },
      {
        q: "TCP is best described as:",
        options: ["Unreliable and connectionless", "Reliable and connection-oriented", "Unreliable and connection-oriented", "Reliable and connectionless"],
        answer: 1,
        keyword: "TCP"
      },
      {
        q: "UDP differs from TCP because UDP:",
        options: ["Provides reliability", "Uses acknowledgments", "Is connectionless", "Uses congestion control"],
        answer: 2,
        keyword: "UDP"
      },
      {
        q: "TCP connection establishment uses:",
        options: ["Two-way handshake", "Three-way handshake", "Four-way handshake", "No handshake"],
        answer: 1,
        keyword: "TCP Handshake"
      },
      {
        q: "Which protocol is faster but unreliable?",
        options: ["TCP", "UDP", "ICMP", "ARP"],
        answer: 1,
        keyword: "UDP Speed"
      },
      {
        q: "Which mechanism prevents a sender from overwhelming a receiver?",
        options: ["Routing", "Flow control", "Multiplexing", "Line coding"],
        answer: 1,
        keyword: "Flow Control"
      },
      {
        q: "Congestion control deals with:",
        options: ["Receiver speed", "Network overload", "Bit errors", "Address resolution"],
        answer: 1,
        keyword: "Congestion Control"
      },
      {
        q: "Which TCP mechanism handles congestion control?",
        options: ["CRC", "Sliding window", "Slow start", "ARP"],
        answer: 2,
        keyword: "TCP Congestion Control"
      },
      {
        q: "Which protocol uses sequence numbers and acknowledgments?",
        options: ["UDP", "IP", "TCP", "ICMP"],
        answer: 2,
        keyword: "TCP Reliability"
      },
      {
        q: "Which TCP flag is used to initiate a connection?",
        options: ["ACK", "FIN", "SYN", "RST"],
        answer: 2,
        keyword: "TCP SYN"
      },
      {
        q: "Which TCP flag is used to terminate a connection?",
        options: ["ACK", "FIN", "SYN", "PSH"],
        answer: 1,
        keyword: "TCP FIN"
      },
      {
        q: "Which protocol provides reliable, ordered delivery?",
        options: ["UDP", "IP", "TCP", "ICMP"],
        answer: 2,
        keyword: "Reliable Transport"
      }
    ]
  },

  /* ================= SECTION 6: APPLICATION LAYER (WEB & DNS) ================= */
  {
    section: "6. Application Layer (Web & DNS)",
    cheatSheet: [
      { term: "DNS", def: "Domain Name System, maps Names to IP addresses." },
      { term: "HTTP", def: "HyperText Transfer Protocol, stateless, Port 80." },
      { term: "HTTPS", def: "Secure HTTP using TLS/SSL, Port 443." },
      { term: "Session Layer", def: "Manages sessions." },
      { term: "Presentation Layer", def: "Handles encryption and compression." }
    ],
    questions: [
      {
        q: "HTTP is classified as:",
        options: ["Stateful protocol", "Stateless protocol", "Connectionless protocol", "Routing protocol"],
        answer: 1,
        keyword: "HTTP"
      },
      {
        q: "HTTP typically uses which transport protocol?",
        options: ["UDP", "ICMP", "TCP", "ARP"],
        answer: 2,
        keyword: "HTTP Transport"
      },
      {
        q: "Which port number is used by HTTP?",
        options: ["21", "25", "80", "443"],
        answer: 2,
        keyword: "HTTP Port"
      },
      {
        q: "HTTPS differs from HTTP because it:",
        options: ["Uses UDP", "Uses encryption (TLS/SSL)", "Is faster", "Uses port 21"],
        answer: 1,
        keyword: "HTTPS"
      },
      {
        q: "Which port is used by HTTPS?",
        options: ["80", "21", "25", "443"],
        answer: 3,
        keyword: "HTTPS Port"
      },
      {
        q: "Which protocol is used for secure web communication?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        answer: 2,
        keyword: "Secure Web"
      },
      {
        q: "DNS is used to:",
        options: ["Map IP to MAC", "Map domain names to IP addresses", "Transfer files", "Send email"],
        answer: 1,
        keyword: "DNS"
      },
      {
        q: "Which protocol is used for name resolution?",
        options: ["ARP", "ICMP", "DNS", "FTP"],
        answer: 2,
        keyword: "Name Resolution"
      },
      {
        q: "Which DNS server is the first point of contact for a client?",
        options: ["Root server", "Authoritative server", "Local DNS server", "Top-level domain server"],
        answer: 2,
        keyword: "Local DNS"
      },
      {
        q: "Which DNS server maintains mappings for a specific domain?",
        options: ["Root DNS server", "Local DNS server", "Authoritative DNS server", "Caching DNS server"],
        answer: 2,
        keyword: "Authoritative DNS"
      },
      {
        q: "Which layer is responsible for encryption and compression in OSI?",
        options: ["Application", "Presentation", "Session", "Transport"],
        answer: 1,
        keyword: "Presentation Layer"
      },
      {
        q: "Which OSI layer establishes, manages, and terminates sessions?",
        options: ["Transport", "Network", "Session", "Presentation"],
        answer: 2,
        keyword: "Session Layer"
      }
    ]
  },

  /* ================= SECTION 7: APPLICATION LAYER (EMAIL & MGMT) ================= */
  {
    section: "7. Application Layer (Email, File & Management)",
    cheatSheet: [
      { term: "SMTP", def: "Sending email." },
      { term: "POP3/IMAP", def: "Retrieving email (IMAP manages on server)." },
      { term: "FTP", def: "File Transfer Protocol." },
      { term: "SSH", def: "Secure Shell for remote login (Encrypted)." },
      { term: "SNMP", def: "Simple Network Management Protocol." }
    ],
    questions: [
      {
        q: "SMTP is mainly used for:",
        options: ["Retrieving email", "Sending email", "Resolving domain names", "File transfer"],
        answer: 1,
        keyword: "SMTP"
      },
      {
        q: "Which protocol is used by a mail client to retrieve emails from a server?",
        options: ["SMTP", "FTP", "POP3", "SNMP"],
        answer: 2,
        keyword: "POP3"
      },
      {
        q: "IMAP differs from POP3 because IMAP:",
        options: ["Deletes emails after download", "Allows managing emails on the server", "Is used only for sending mail", "Uses UDP"],
        answer: 1,
        keyword: "IMAP"
      },
      {
        q: "FTP is mainly used for:",
        options: ["Web browsing", "Email delivery", "File transfer", "Name resolution"],
        answer: 2,
        keyword: "FTP"
      },
      {
        q: "Which protocol is used to transfer files over the Internet?",
        options: ["SMTP", "DNS", "FTP", "SNMP"],
        answer: 2,
        keyword: "FTP"
      },
      {
        q: "Which protocol is used to securely transfer files?",
        options: ["FTP", "HTTP", "SFTP", "SMTP"],
        answer: 2,
        keyword: "SFTP"
      },
      {
        q: "Which application layer protocol is used for remote login?",
        options: ["HTTP", "FTP", "SSH", "DNS"],
        answer: 2,
        keyword: "SSH"
      },
      {
        q: "Telnet differs from SSH because Telnet:",
        options: ["Uses encryption", "Is faster", "Transmits data in plaintext", "Uses UDP"],
        answer: 2,
        keyword: "Telnet"
      },
      {
        q: "Which protocol is commonly used for network management?",
        options: ["SMTP", "SNMP", "FTP", "HTTP"],
        answer: 1,
        keyword: "SNMP"
      }
    ]
  }

];
