window.question3 = [

/* ================= SECTION 1 ================= */
{
  section: "1. Data Link Layer Overview",
  cheatSheet: [
    { term: "Data Link Layer", def: "Transfers data between adjacent network nodes" },
    { term: "Frame", def: "Data unit at data link layer" },
    { term: "Node", def: "Host or router connected by a link" },
    { term: "Link", def: "Communication channel connecting nodes" },
    { term: "Encapsulation", def: "Wrapping network layer packet into frame" }
  ],
  questions: [
    {
      q: "Data link layer is responsible for:",
      options: [
        "End-to-end delivery",
        "Transmission between adjacent nodes",
        "Routing packets",
        "Process communication"
      ],
      answer: 1,
      keyword: "Data Link Layer"
    },
    {
      q: "Data unit of data link layer is called:",
      options: ["Bit", "Frame", "Packet", "Segment"],
      answer: 1,
      keyword: "Frame"
    },
    {
      q: "A device connected by a link is called:",
      options: ["Protocol", "Node", "Frame", "Signal"],
      answer: 1,
      keyword: "Node"
    },
    {
      q: "Communication channel connecting two nodes is called:",
      options: ["Frame", "Link", "Socket", "Port"],
      answer: 1,
      keyword: "Link"
    },
    {
      q: "Wrapping a packet into a frame is called:",
      options: ["Routing", "Encapsulation", "Fragmentation", "Switching"],
      answer: 1,
      keyword: "Encapsulation"
    }
  ]
},

/* ================= SECTION 2 ================= */
{
  section: "2. Services of Data Link Layer",
  cheatSheet: [
    { term: "Framing", def: "Encapsulating packets into frames" },
    { term: "Flow Control", def: "Controls transmission rate between nodes" },
    { term: "Error Detection", def: "Detects errors in transmitted frames" },
    { term: "Error Correction", def: "Corrects bit errors without retransmission" },
    { term: "Reliable Delivery", def: "Ensures correct frame delivery" }
  ],
  questions: [
    {
      q: "Encapsulation of packets into frames is called:",
      options: ["Routing", "Framing", "Switching", "Multiplexing"],
      answer: 1,
      keyword: "Framing"
    },
    {
      q: "Controlling transmission rate between sender and receiver is:",
      options: ["Error detection", "Flow control", "Routing", "Switching"],
      answer: 1,
      keyword: "Flow Control"
    },
    {
      q: "Detecting errors in frames is responsibility of:",
      options: [
        "Network layer",
        "Error detection",
        "Transport layer",
        "Physical layer"
      ],
      answer: 1,
      keyword: "Error Detection"
    },
    {
      q: "Correcting bit errors without retransmission is called:",
      options: [
        "Error detection",
        "Error correction",
        "Flow control",
        "Framing"
      ],
      answer: 1,
      keyword: "Error Correction"
    },
    {
      q: "Ensuring correct frame delivery between adjacent nodes is:",
      options: [
        "Routing",
        "Reliable delivery",
        "Multiplexing",
        "Fragmentation"
      ],
      answer: 1,
      keyword: "Reliable Delivery"
    }
  ]
},

/* ================= SECTION 3 ================= */
{
  section: "3. Framing Methods",
  cheatSheet: [
    { term: "Byte Count", def: "Frame length specified in header" },
    { term: "Byte Stuffing", def: "Escape character inserted before flag byte" },
    { term: "Bit Stuffing", def: "Inserts 0 after five consecutive 1s" },
    { term: "Flag Byte", def: "Special byte indicating start and end of frame" },
    { term: "Physical Layer Violation", def: "Uses invalid physical signals for framing" }
  ],
  questions: [
    {
      q: "Framing method that specifies frame length in header is:",
      options: [
        "Byte count",
        "Byte stuffing",
        "Bit stuffing",
        "Flag byte"
      ],
      answer: 0,
      keyword: "Byte Count"
    },
    {
      q: "In byte stuffing, an escape character is inserted:",
      options: [
        "After every bit",
        "Before flag byte",
        "At end of frame",
        "Before every frame"
      ],
      answer: 1,
      keyword: "Byte Stuffing"
    },
    {
      q: "In bit stuffing, a 0 is inserted after:",
      options: [
        "Three 1s",
        "Four 1s",
        "Five consecutive 1s",
        "Every 1"
      ],
      answer: 2,
      keyword: "Bit Stuffing"
    },
    {
      q: "Special byte used to indicate frame boundaries is:",
      options: ["Flag byte", "Escape byte", "Header byte", "Control byte"],
      answer: 0,
      keyword: "Flag Byte"
    },
    {
      q: "Using invalid physical signals for framing is called:",
      options: [
        "Byte stuffing",
        "Bit stuffing",
        "Physical layer violation",
        "Encapsulation"
      ],
      answer: 2,
      keyword: "Physical Layer Violation"
    }
  ]
},

/* ================= SECTION 4 ================= */
{
  section: "4. Error Detection and Correction",
  cheatSheet: [
    { term: "Parity Check", def: "Adds parity bit for error detection" },
    { term: "CRC", def: "Cyclic Redundancy Check for error detection" },
    { term: "Checksum", def: "Sum of data for error detection" },
    { term: "Redundancy", def: "Extra bits added to detect errors" },
    { term: "Error", def: "Bit alteration during transmission" }
  ],
  questions: [
    {
      q: "Adding extra bits to detect errors is called:",
      options: [
        "Encapsulation",
        "Redundancy",
        "Routing",
        "Switching"
      ],
      answer: 1,
      keyword: "Redundancy"
    },
    {
      q: "Technique that adds a parity bit is:",
      options: ["CRC", "Checksum", "Parity check", "Bit stuffing"],
      answer: 2,
      keyword: "Parity Check"
    },
    {
      q: "CRC stands for:",
      options: [
        "Cyclic Redundancy Check",
        "Central Routing Control",
        "Cross Redundancy Code",
        "Coded Routing Check"
      ],
      answer: 0,
      keyword: "CRC"
    },
    {
      q: "Checksum is used for:",
      options: [
        "Routing",
        "Error detection",
        "Flow control",
        "Framing"
      ],
      answer: 1,
      keyword: "Checksum"
    },
    {
      q: "A bit alteration during transmission is called:",
      options: ["Noise", "Error", "Delay", "Loss"],
      answer: 1,
      keyword: "Error"
    }
  ]
},

/* ================= SECTION 5 ================= */
{
  section: "5. Duplex Modes",
  cheatSheet: [
    { term: "Simplex", def: "One-way communication only" },
    { term: "Half Duplex", def: "Both directions but not at same time" },
    { term: "Full Duplex", def: "Simultaneous two-way communication" },
    { term: "Transmission Direction", def: "Direction of data flow" },
    { term: "Communication Mode", def: "Method of data transmission" }
  ],
  questions: [
    {
      q: "One-way communication is called:",
      options: ["Simplex", "Half duplex", "Full duplex", "Multiplex"],
      answer: 0,
      keyword: "Simplex"
    },
    {
      q: "Communication where both sides transmit but not simultaneously is:",
      options: [
        "Simplex",
        "Half duplex",
        "Full duplex",
        "Parallel"
      ],
      answer: 1,
      keyword: "Half Duplex"
    },
    {
      q: "Simultaneous two-way communication is:",
      options: [
        "Simplex",
        "Half duplex",
        "Full duplex",
        "Serial"
      ],
      answer: 2,
      keyword: "Full Duplex"
    },
    {
      q: "Direction of data flow refers to:",
      options: [
        "Bandwidth",
        "Transmission direction",
        "Encapsulation",
        "Framing"
      ],
      answer: 1,
      keyword: "Transmission Direction"
    },
    {
      q: "Simplex, half duplex, full duplex are types of:",
      options: [
        "Communication mode",
        "Error control",
        "Routing",
        "Switching"
      ],
      answer: 0,
      keyword: "Communication Mode"
    }
  ]
}

];

