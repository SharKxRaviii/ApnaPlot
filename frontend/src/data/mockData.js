export const plots = [
  {
    id: "plot-101",
    title: "Rourkela Riverside Farmland",
    description:
      "A peaceful 5-acre farmland located near the rural outskirts of Rourkela close to the Brahmani river belt. Ideal for a small farmhouse, weekend stay, or fishing spot. Surrounded by mango trees with calm village surroundings.",
    price: 125000,
    area: 5.2,
    areaUnit: "acres",
    type: "Recreational",
    location: {
      region: "Rourkela",
      address: "Near Jhirpani Village, Rourkela Rural",
      coordinates: { lat: 22.20, lng: 84.80 }
    },
    features: ["Riverside", "Village Road Access", "Mango Trees", "Fishing"],
    status: "Available",
    images: ["/plot 2-a.JPG", "/plot 2-b.JPG"],
    agent: {
      name: "Surendra Behera",
      phone: "90789-12345",
      email: "surendra@odishaland.com"
    }
  },

  {
    id: "plot-102",
    title: "Jeypore Agricultural Farmland",
    description:
      "15 acres of lush green agricultural land on the outskirts of Jeypore. Best suited for paddy, seasonal vegetables, or cattle grazing. The land has mild slopes and open village views.",
    price: 250000,
    area: 15.0,
    areaUnit: "acres",
    type: "Agricultural",
    location: {
      region: "Jeypore",
      address: "Kunduli Road, Jeypore Rural",
      coordinates: { lat: 18.86, lng: 82.57 }
    },
    features: ["Fertile Soil", "Village Access", "Hill Views"],
    status: "Available",
    images: ["/agriculture-1.jpg"],
    agent: {
      name: "Manoj Patra",
      phone: "98612-54321",
      email: "manoj@odishaland.com"
    }
  },

  {
    id: "plot-103",
    title: "Angul Forest Edge Plot",
    description:
      "A 3.5-acre forest-adjacent plot located near the rural edges of Angul. Filled with sal trees and perfect for a quiet house, nature retreat, or farming. Deer and peacocks are commonly seen.",
    price: 89000,
    area: 3.5,
    areaUnit: "acres",
    type: "Residential",
    location: {
      region: "Angul",
      address: "Jarapada Forest Road, Angul",
      coordinates: { lat: 20.84, lng: 85.15 }
    },
    features: ["Forest Area", "Privacy", "Rich Greenery"],
    status: "Available",
    images: ["/plot 1-a.jpg", "/plot 1-b.jpg"],
    agent: {
      name: "Surendra Behera",
      phone: "90789-12345",
      email: "surendra@odishaland.com"
    }
  },

  {
    id: "plot-104",
    title: "Balangir Open Dryland Plot",
    description:
      "10 acres of open dryland in a typical Balangir countryside setting. Perfect for solar setup, goat farming, poultry, and rural homestead construction. Wide open sky and sunset-friendly location.",
    price: 45000,
    area: 10.0,
    areaUnit: "acres",
    type: "Residential",
    location: {
      region: "Balangir",
      address: "Patnagarh Village Line, Balangir",
      coordinates: { lat: 20.70, lng: 83.15 }
    },
    features: ["Open Land", "Level Ground", "Off-grid Potential"],
    status: "Available",
    images: ["/plot 3-a.jpg"],
    agent: {
      name: "Subrat Biswal",
      phone: "94378-67890",
      email: "subrat@odishaland.com"
    }
  },

  {
    id: "plot-105",
    title: "Angul Roadside Commercial Spot",
    description:
      "A 2-acre roadside commercial plot located near the Angul–Banarpal truck route. Ideal for dhaba, parking zone, warehouse or petrol pump. Very high vehicle movement.",
    price: 450000,
    area: 2.0,
    areaUnit: "acres",
    type: "Commercial",
    location: {
      region: "Angul",
      address: "Banarpal Main Road, Angul",
      coordinates: { lat: 20.85, lng: 85.10 }
    },
    features: ["Highway Access", "High Traffic", "Utilities Available"],
    status: "Sold",
    images: ["/plot 4-a.jpg", "/plot 4-b.jpg"],
    agent: {
      name: "Manoj Patra",
      phone: "98612-54321",
      email: "manoj@odishaland.com"
    }
  },

  {
    id: "plot-106",
    title: "Rourkela Bypass Commercial Plot",
    description:
      "2-acre commercial plot along the Rourkela Vedvyas bypass route. Excellent for showroom, workshop, godown, or small-scale industry. Located close to village settlements.",
    price: 750000,
    area: 2.0,
    areaUnit: "acres",
    type: "Commercial",
    location: {
      region: "Rourkela",
      address: "Vedvyas Bypass Road, Rourkela",
      coordinates: { lat: 22.27, lng: 84.82 }
    },
    features: ["High Traffic Zone", "Village Access", "Utilities Ready"],
    status: "Available",
    images: ["/plot 5-a.jpg", "/plot 5-b.jpg"],
    agent: {
      name: "Manoj Patra",
      phone: "98612-54321",
      email: "manoj@odishaland.com"
    }
  }
];

export const locations = ["Rourkela", "Jeypore", "Angul", "Balangir"];

export const types = ["Residential", "Agricultural", "Commercial", "Recreational"];
