window.question8= [

  /* ================= SECTION 1: TỔNG QUAN MẠNG & MÔ HÌNH OSI/TCP ================= */
  {
    section: "1. Tổng quan & Mô hình OSI/TCP",
    cheatSheet: [
      { term: "Packet Switching", def: "Chuyển mạch gói: Chia sẻ đường truyền động, hiệu quả cho dữ liệu đột ngột (bursty)." },
      { term: "Circuit Switching", def: "Chuyển mạch kênh: Dành riêng tài nguyên (băng thông cố định), lãng phí nếu không dùng." },
      { term: "Protocol", def: "Giao thức: Định dạng, thứ tự và hành động của các thông điệp." },
      { term: "OSI Model", def: "7 tầng: Physical -> Data Link -> Network -> Transport -> Session -> Presentation -> Application." },
      { term: "Router", def: "Thiết bị tầng Network (L3), định tuyến gói tin giữa các mạng khác nhau." }
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
        q: "In OSI model, addressing and routing functions of the system are provided by ______",
        options: ["Application layer", "Transport layer", "Network layer", "Session layer"],
        answer: 2,
        keyword: "OSI Routing"
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
        q: "The Data Link Layer of the OSI model has ______ sublayers.",
        options: ["1", "2", "3", "4"],
        answer: 1,
        keyword: "Data Link Sublayers"
      },
      {
        q: "A ______ is a device that forwards packets between networks by processing the routing information included in the packet.",
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
        keyword: "Delay & Loss"
      },
      {
        q: "Which layer of the OSI model does Hub work in?",
        options: ["Physical layer.", "Data link layer.", "Network layer.", "Transport layer."],
        answer: 0,
        keyword: "Hub Layer"
      },
      {
        q: "Which of the following device is used to connect two different networks?",
        options: ["Hub", "Switch", "Router (Gateway)", "Repeater"],
        answer: 2,
        keyword: "Connecting Device"
      },
      {
        q: "The physical layer translates logical communication requests from the ______ into hardware operations.",
        options: ["Data link layer", "Network layer", "Transport layer", "Application layer"],
        answer: 0,
        keyword: "Physical-DataLink Interface"
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
        keyword: "TCP/IP vs OSI"
      },
      {
        q: "In OSI model, addressing and routing functions of the system are provided by ______ (Duplicate)",
        options: ["Application layer", "Transport layer", "Network layer", "Session layer"],
        answer: 2,
        keyword: "Routing Function"
      }
    ]
  },

  /* ================= SECTION 2: TẦNG VẬT LÝ & TÍN HIỆU (PHYSICAL LAYER) ================= */
  {
    section: "2. Tầng Vật lý & Tín hiệu",
    cheatSheet: [
      { term: "Tín hiệu số (Digital)", def: "Rời rạc (Discrete), mức 0 và 1." },
      { term: "Tín hiệu tương tự (Analog)", def: "Liên tục (Continuous), ví dụ sóng âm." },
      { term: "Cáp quang (Optical Fiber)", def: "Băng thông lớn, truyền xa, ít nhiễu, giá giảm theo khoảng cách." },
      { term: "Multiplexing", def: "Dồn kênh: FDM (Tần số), TDM (Thời gian)." },
      { term: "Manchester Encoding", def: "Mã hóa dòng: Luôn có chuyển đổi giữa bit để đồng bộ đồng hồ." }
    ],
    questions: [
      {
        q: "Which statement is correct about Device behavior with FDM vs TDM in access?",
        options: [
          "TDM equals frequency bands.",
          "FDM equals packetization.",
          "FDM splits by frequency; TDM by time slots.",
          "Both require token ring."
        ],
        answer: 2,
        keyword: "Multiplexing FDM/TDM"
      },
      {
        q: "When is the following true about period, frequency, phase?",
        options: [
          "f=T; phase is amplitude.",
          "f=1/T; phase shifts waveform alignment.",
          "T=2πf; phase is time.",
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
        keyword: "Manchester Coding"
      },
      {
        q: "The Bluetooth technologies used in ______",
        options: ["Wireless keyboard", "Wireless mouse", "Headsets", "All of the mentioned"],
        answer: 3,
        keyword: "Bluetooth"
      },
      {
        q: "Where does the following hold in practice for guided vs unguided media?",
        options: [
          "Fiber is unguided.",
          "Copper/fiber are guided; radio is unguided.",
          "Radio is guided.",
          "Copper is unguided."
        ],
        answer: 1,
        keyword: "Transmission Media"
      },
      {
        q: "The physical layer is responsible for ______",
        options: ["Line coding", "Channel coding", "Modulation", "All of the mentioned"],
        answer: 3,
        keyword: "Physical Layer Tasks"
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
          "All of the mentioned",
          "Large bandwidth",
          "Long distance transmission",
          "The cost of communication is increasingly independent of distance"
        ],
        answer: 0,
        keyword: "Optical Fiber"
      },
      {
        q: "Which of the following is NOT a characteristic of digital signals?",
        options: ["Continuous wave", "Discrete levels", "Binary values", "More immune to noise"],
        answer: 0,
        keyword: "Digital Signal Char"
      },
      {
        q: "Which of the following is NOT a factor that affects the quality of a signal?",
        options: ["Attenuation", "Interference", "Crosstalk", "Bandwidth"],
        answer: 3,
        keyword: "Signal Quality Factors"
      },
      {
        q: "A single channel is shared by multiple sources of signals by ______",
        options: ["Analog modulation", "Digital modulation", "Multiplexing", "Phase modulation"],
        answer: 2,
        keyword: "Multiplexing Definition"
      }
    ]
  },

  /* ================= SECTION 3: TẦNG LIÊN KẾT DỮ LIỆU (DATA LINK) ================= */
  {
    section: "3. Tầng Liên kết dữ liệu & Ethernet",
    cheatSheet: [
      { term: "Framing", def: "Đóng gói dữ liệu thành khung (Frame)." },
      { term: "MAC Address", def: "Địa chỉ vật lý (48-bit/6 octets)." },
      { term: "CSMA/CD", def: "Cơ chế truy cập Ethernet: Nghe trước khi nói, phát hiện xung đột." },
      { term: "Switch", def: "Thiết bị L2: Giảm xung đột (collision), nhưng không chặn quảng bá (broadcast)." },
      { term: "Stop-and-Wait", def: "Gửi 1 khung, chờ ACK rồi mới gửi tiếp." }
    ],
    questions: [
      {
        q: "Which of the following tasks is NOT done by data link layer?",
        options: ["Framing", "Error control", "Flow control", "Routing"],
        answer: 3,
        keyword: "Data Link NOT Task"
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
        keyword: "LLC & MAC"
      },
      {
        q: "Which type of network covers a small geographical area, such as an office or building?",
        options: ["LAN", "MAN", "WAN", "SAN"],
        answer: 0,
        keyword: "LAN Definition"
      },
      {
        q: "What type of cable is commonly used for Ethernet networks?",
        options: ["Coaxial cable", "Fiber optic cable", "Twisted pair cable", "Serial cable"],
        answer: 2,
        keyword: "Ethernet Cable"
      },
      {
        q: "What is the color code for the T568A standard?",
        options: [
          "Green/White - Green - Orange/White - Blue...",
          "Orange/White - Orange - Green/White - Blue...",
          "Blue - Blue/White...",
          "Brown - Brown/White..."
        ],
        answer: 0,
        keyword: "T568A Standard"
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
        keyword: "Error Detection"
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
        keyword: "ARQ Mechanism"
      },
      {
        q: "Which statement is correct about framing methods?",
        options: [
          "Framing uses IP only.",
          "Byte/bit stuffing and coding violations mark frames.",
          "Framing removes headers.",
          "Framing encrypts payloads."
        ],
        answer: 1,
        keyword: "Framing Methods"
      },
      {
        q: "Which statement is correct about CRC purpose?",
        options: [
          "Allocates IPs.",
          "Detects burst errors via generator polynomial.",
          "Controls congestion.",
          "Finds shortest paths."
        ],
        answer: 1,
        keyword: "CRC Purpose"
      },
      {
        q: "Which flow control mechanism requires the sender to wait for an acknowledgment after sending each individual frame?",
        options: ["Go-Back-N", "Selective Repeat", "Stop-and-Wait", "Sliding Window"],
        answer: 2,
        keyword: "Stop-and-Wait Flow"
      },
      {
        q: "CRC is ______",
        options: ["Cyclic redundancy check", "Code repeat check", "Cyclic repeat code", "Code redundancy check"],
        answer: 0,
        keyword: "CRC Fullname"
      },
      {
        q: "Which of the following is a common method of accessing the network in the network access layer?",
        options: ["CSMA/CD", "Circuit switching", "Message switching", "Packet switching"],
        answer: 0,
        keyword: "CSMA/CD Access"
      },
      {
        q: "Which of the following is NOT a characteristic of the Ethernet protocol?",
        options: [
          "Uses carrier sense multiple access with collision detection (CSMA/CD)",
          "Supports half-duplex and full-duplex transmission",
          "Operates at the physical and data link layers",
          "Uses a token-passing access method"
        ],
        answer: 3,
        keyword: "Ethernet Characteristics"
      },
      {
        q: "Which of the following tasks is NOT done by data link layer? (Duplicate Check)",
        options: ["Framing", "Error control", "Flow control", "Channel coding"],
        answer: 3,
        keyword: "Data Link vs Physical"
      },
      {
        q: "Which of the following is NOT a function of the network access layer?",
        options: ["Flow control", "Error control", "Access control", "Packet routing"],
        answer: 3,
        keyword: "Network Access Func"
      },
      {
        q: "Frame has error detection at the ______",
        options: ["Physical layer", "Data link layer", "Network layer", "Session layer"],
        answer: 1,
        keyword: "Frame Error Detect"
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
        keyword: "Collision/Broadcast Domain"
      }
    ]
  },

  /* ================= SECTION 4: TẦNG MẠNG (NETWORK LAYER - IP/ARP) ================= */
  {
    section: "4. Tầng Mạng (IP, ARP, Routing)",
    cheatSheet: [
      { term: "ARP", def: "Address Resolution Protocol: Ánh xạ IP -> MAC." },
      { term: "IPv4", def: "Địa chỉ 32-bit (4 octets)." },
      { term: "ICMP", def: "Internet Control Message Protocol: Báo lỗi và chẩn đoán (Ping)." },
      { term: "Routing", def: "Định tuyến: Tìm đường đi tốt nhất." },
      { term: "Forwarding", def: "Chuyển tiếp: Đẩy gói tin từ đầu vào sang đầu ra." }
    ],
    questions: [
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
        q: "Where does the following hold in practice for Device behavior with ARP role on LAN?",
        options: [
          "Resolves IP to MAC within a LAN.",
          "Resolves names to IPs.",
          "Routes between ASes.",
          "Encrypts Ethernet frames."
        ],
        answer: 0,
        keyword: "Device ARP"
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
        keyword: "ICMP Function"
      }
    ]
  },

  /* ================= SECTION 5: TẦNG GIAO VẬN & ỨNG DỤNG (TRANSPORT/APP) ================= */
  {
    section: "5. Tầng Giao vận & Ứng dụng",
    cheatSheet: [
      { term: "TCP", def: "Giao thức tin cậy, hướng kết nối, bắt tay 3 bước (SYN, SYN-ACK, ACK)." },
      { term: "UDP", def: "Giao thức không kết nối, nhanh nhưng không đảm bảo." },
      { term: "Ports", def: "FTP(20/21), SSH(22), SMTP(25), DNS(53), HTTP(80), HTTPS(443)." },
      { term: "Cookies/Session", def: "Duy trì trạng thái người dùng (Stateful) trên nền HTTP (Stateless)." },
      { term: "HTTPS", def: "Bảo mật HTTP bằng mã hóa TLS/SSL." }
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
        keyword: "TCP 3-Way Handshake"
      },
      {
        q: "Which of the following services uses TCP port 25?",
        options: ["FTP", "SSH", "SMTP", "DNS"],
        answer: 2,
        keyword: "Port 25 (SMTP)"
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
        keyword: "Cookies/Sessions"
      },
      {
        q: "Which protection applies when using HTTPS for sessions?",
        options: [
          "Store IDs in routers",
          "Encrypt traffic with TLS",
          "Turn off cookies",
          "Change IP address"
        ],
        answer: 1,
        keyword: "HTTPS Security"
      },
      {
        q: "Which port is used where DNS typically runs?",
        options: ["Port 21", "Port 25", "Port 53", "Port 80"],
        answer: 2,
        keyword: "Port 53 (DNS)"
      }
    ]
  }

];
