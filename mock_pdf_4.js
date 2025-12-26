const mock_pdf_4 = [

{
  q: "Which layer provides process-to-process communication?",
  options: ["Network layer", "Transport layer", "Application layer", "Data link layer"],
  answer: 1,
  keyword: "Transport Layer",
  cheatSheet: [
    { term: "Transport Layer", def: "Provides process-to-process communication" }
  ]
},

{
  q: "Data unit at transport layer is called:",
  options: ["Bit", "Frame", "Packet", "Segment"],
  answer: 3,
  keyword: "Segment",
  cheatSheet: [
    { term: "Segment", def: "Data unit at transport layer" }
  ]
},

{
  q: "Which transport protocol is connection-oriented?",
  options: ["UDP", "TCP", "IP", "ICMP"],
  answer: 1,
  keyword: "TCP",
  cheatSheet: [
    { term: "TCP", def: "Connection-oriented transport protocol" }
  ]
},

{
  q: "Which transport protocol is connectionless?",
  options: ["TCP", "UDP", "FTP", "HTTP"],
  answer: 1,
  keyword: "UDP",
  cheatSheet: [
    { term: "UDP", def: "Connectionless transport protocol" }
  ]
},

{
  q: "Which protocol guarantees reliable data delivery?",
  options: ["UDP", "IP", "TCP", "ICMP"],
  answer: 2,
  keyword: "TCP Reliability",
  cheatSheet: [
    { term: "TCP Reliability", def: "Guarantees reliable data delivery" }
  ]
},

{
  q: "Which mechanism prevents sender from overwhelming receiver?",
  options: ["Congestion control", "Flow control", "Routing", "Multiplexing"],
  answer: 1,
  keyword: "Flow Control",
  cheatSheet: [
    { term: "Flow Control", def: "Controls sender transmission rate" }
  ]
},

{
  q: "Which mechanism prevents network congestion?",
  options: ["Flow control", "Congestion control", "Error control", "Framing"],
  answer: 1,
  keyword: "Congestion Control",
  cheatSheet: [
    { term: "Congestion Control", def: "Prevents network congestion" }
  ]
},

{
  q: "Which field is used in TCP/UDP to identify processes?",
  options: ["IP address", "MAC address", "Port number", "Sequence number"],
  answer: 2,
  keyword: "Port Number",
  cheatSheet: [
    { term: "Port Number", def: "Identifies process on host" }
  ]
},

{
  q: "Which transport protocol has lower overhead?",
  options: ["TCP", "UDP", "ICMP", "FTP"],
  answer: 1,
  keyword: "UDP Overhead",
  cheatSheet: [
    { term: "UDP Overhead", def: "Lower overhead compared to TCP" }
  ]
},

{
  q: "Which protocol is suitable for real-time applications?",
  options: ["TCP", "UDP", "FTP", "SMTP"],
  answer: 1,
  keyword: "Application Requirement",
  cheatSheet: [
    { term: "Application Requirement", def: "Determines protocol choice" }
  ]
},

{
  q: "Which application protocol is used to transfer web pages?",
  options: ["FTP", "SMTP", "HTTP", "DNS"],
  answer: 2,
  keyword: "HTTP",
  cheatSheet: [
    { term: "HTTP", def: "HyperText Transfer Protocol" }
  ]
},

{
  q: "Which application protocol translates domain names to IP addresses?",
  options: ["HTTP", "FTP", "DNS", "SMTP"],
  answer: 2,
  keyword: "DNS",
  cheatSheet: [
    { term: "DNS", def: "Domain Name System" }
  ]
},

{
  q: "Which protocol is used to send emails?",
  options: ["POP3", "IMAP", "SMTP", "FTP"],
  answer: 2,
  keyword: "SMTP",
  cheatSheet: [
    { term: "SMTP", def: "Simple Mail Transfer Protocol" }
  ]
},

{
  q: "Which protocol is used to retrieve emails from server?",
  options: ["SMTP", "FTP", "POP3", "HTTP"],
  answer: 2,
  keyword: "POP3",
  cheatSheet: [
    { term: "POP3", def: "Post Office Protocol version 3" }
  ]
},

{
  q: "Which protocol allows managing emails directly on server?",
  options: ["POP3", "IMAP", "SMTP", "FTP"],
  answer: 1,
  keyword: "IMAP",
  cheatSheet: [
    { term: "IMAP", def: "Internet Message Access Protocol" }
  ]
},

{
  q: "Which protocol is used for file transfer?",
  options: ["HTTP", "FTP", "SMTP", "DNS"],
  answer: 1,
  keyword: "FTP",
  cheatSheet: [
    { term: "FTP", def: "File Transfer Protocol" }
  ]
},

{
  q: "HTTP is a ______ protocol.",
  options: ["Stateful", "Stateless", "Connectionless", "Unreliable"],
  answer: 1,
  keyword: "Stateless",
  cheatSheet: [
    { term: "Stateless", def: "Server maintains no client state" }
  ]
},

{
  q: "Which HTTP connection allows multiple objects per TCP connection?",
  options: ["Non-persistent", "Persistent", "UDP-based", "Stateless"],
  answer: 1,
  keyword: "Persistent Connection",
  cheatSheet: [
    { term: "Persistent Connection", def: "Multiple objects per TCP connection" }
  ]
},

{
  q: "Which architecture has no always-on server?",
  options: ["Client-server", "Peer-to-peer", "Centralized", "Hierarchical"],
  answer: 1,
  keyword: "Peer-to-Peer Architecture",
  cheatSheet: [
    { term: "Peer-to-Peer Architecture", def: "No always-on server" }
  ]
},

{
  q: "Which host in client-server architecture provides services?",
  options: ["Client", "Peer", "Server", "Router"],
  answer: 2,
  keyword: "Server",
  cheatSheet: [
    { term: "Server", def: "Provides services to clients" }
  ]
},

{
  q: "Which host requests services in client-server architecture?",
  options: ["Server", "Client", "Peer", "Router"],
  answer: 1,
  keyword: "Client",
  cheatSheet: [
    { term: "Client", def: "Requests services from server" }
  ]
},

{
  q: "Which system resolves domain names?",
  options: ["HTTP", "FTP", "DNS", "SMTP"],
  answer: 2,
  keyword: "DNS Server",
  cheatSheet: [
    { term: "DNS Server", def: "Resolves domain names" }
  ]
},

{
  q: "Which application layer protocol uses TCP port 80?",
  options: ["FTP", "SMTP", "HTTP", "DNS"],
  answer: 2,
  keyword: "HTTP Port",
  cheatSheet: [
    { term: "HTTP Port", def: "Uses TCP port 80" }
  ]
},

{
  q: "Which application layer protocol uses TCP port 25?",
  options: ["FTP", "SMTP", "HTTP", "DNS"],
  answer: 1,
  keyword: "SMTP Port",
  cheatSheet: [
    { term: "SMTP Port", def: "Uses TCP port 25" }
  ]
},

{
  q: "Which protocol is used for name resolution?",
  options: ["ARP", "DNS", "ICMP", "BGP"],
  answer: 1,
  keyword: "DNS",
  cheatSheet: [
    { term: "DNS", def: "Used for name resolution" }
  ]
},

{
  q: "Which layer is responsible for application protocols?",
  options: ["Transport", "Network", "Application", "Session"],
  answer: 2,
  keyword: "Application Layer",
  cheatSheet: [
    { term: "Application Layer", def: "Responsible for application protocols" }
  ]
},

{
  q: "Which protocol is used for remote file access?",
  options: ["SMTP", "FTP", "HTTP", "DNS"],
  answer: 1,
  keyword: "FTP",
  cheatSheet: [
    { term: "FTP", def: "Used for remote file access" }
  ]
}

];
