export type CompanyName =
  | "Apple"
  | "Barclays"
  | "BP"
  | "Cisco"
  | "Carnegie Mellon University"
  | "DeepMind"
  | "D. E. Shaw"
  | "Google"
  | "Hewlett-Packard"
  | "Intuit"
  | "J.P. Morgan"
  | "Microsoft"
  | "Morgan Stanley"
  | "Michigan State University"
  | "Rensselaer Polytechnic Institute"
  | "Stanford University"
  | "Sun Microsystems"
  | "University of Chicago"
  | "U.S. Department of Homeland Security"
  | "Oracle Corporation"
  | "University of Virginia"
  | "Netflix"
  | "CompuServe";

export interface Company {
  name: CompanyName;
  file: string;
  homepage: string;
}

export const Companies: Record<CompanyName, Company> = {
  Apple: {
    name: "Apple",
    file: "apple.svg",
    homepage: "https://www.apple.com",
  },
  Barclays: {
    name: "Barclays",
    file: "barclays.svg",
    homepage: "https://www.barclays.com",
  },
  BP: { name: "BP", file: "bp.svg", homepage: "https://www.bp.com" },
  Cisco: {
    name: "Cisco",
    file: "cisco.svg",
    homepage: "https://www.cisco.com",
  },
  "Carnegie Mellon University": {
    name: "Carnegie Mellon University",
    file: "cmu.svg",
    homepage: "https://www.cmu.edu",
  },
  DeepMind: {
    name: "DeepMind",
    file: "deepmind.svg",
    homepage: "https://www.deepmind.com",
  },
  "D. E. Shaw": {
    name: "D. E. Shaw",
    file: "deshaw.svg",
    homepage: "https://www.deshaw.com",
  },
  Google: {
    name: "Google",
    file: "google.svg",
    homepage: "https://www.google.com",
  },
  "Hewlett-Packard": {
    name: "Hewlett-Packard",
    file: "hp.png",
    homepage: "https://www.hp.com",
  },
  Intuit: {
    name: "Intuit",
    file: "intuit.svg",
    homepage: "https://www.intuit.com",
  },
  "J.P. Morgan": {
    name: "J.P. Morgan",
    file: "jp.svg",
    homepage: "https://www.jpmorgan.com",
  },
  Microsoft: {
    name: "Microsoft",
    file: "microsoft.svg",
    homepage: "https://www.microsoft.com",
  },
  "Morgan Stanley": {
    name: "Morgan Stanley",
    file: "morganstanley.svg",
    homepage: "https://www.morganstanley.com",
  },
  "Michigan State University": {
    name: "Michigan State University",
    file: "msu.svg",
    homepage: "https://www.msu.edu",
  },
  "Rensselaer Polytechnic Institute": {
    name: "Rensselaer Polytechnic Institute",
    file: "rpi.png",
    homepage: "https://www.rpi.edu",
  },
  "Stanford University": {
    name: "Stanford University",
    file: "sta.svg",
    homepage: "https://www.stanford.edu",
  },
  "Sun Microsystems": {
    name: "Sun Microsystems",
    file: "sun.svg",
    homepage: "https://www.oracle.com/sun",
  },
  "University of Chicago": {
    name: "University of Chicago",
    file: "uchicago.svg",
    homepage: "https://www.uchicago.edu",
  },
  "U.S. Department of Homeland Security": {
    name: "U.S. Department of Homeland Security",
    file: "usa.svg",
    homepage: "https://www.dhs.gov/",
  },
  "Oracle Corporation": {
    name: "Oracle Corporation",
    file: "oracle.svg",
    homepage: "https://www.oracle.com",
  },
  "University of Virginia": {
    name: "University of Virginia",
    file: "uva.svg",
    homepage: "https://www.virginia.edu",
  },
  Netflix: {
    name: "Netflix",
    file: "netflix.svg",
    homepage: "https://www.netflix.com",
  },
  CompuServe: {
    name: "CompuServe",
    file: "compuserve.svg",
    homepage: "https://www.compuserve.com",
  },
};
