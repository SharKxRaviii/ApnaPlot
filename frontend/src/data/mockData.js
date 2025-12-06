
export const plots = [
  {
    id: "plot-101",
    title: "Scenic Riverfront Escape",
    description: "A breathtaking 5-acre parcel located right on the banks of the Clear Creek River. Perfect for a weekend getaway cabin or fishing retreat. Features mature trees and direct water access.",
    price: 125000,
    area: 5.2,
    areaUnit: "acres",
    type: "Recreational",
    location: {
      region: "Highland Valley",
      address: "124 River Bend Rd",
      coordinates: { lat: 34.56, lng: -112.45 }
    },
    features: ["Riverfront", "Mature Trees", "Road Access", "Fishing"],
    status: "Available",
    images: [
      "https://images.unsplash.com/photo-1609089896222-b92ddc42e7d8",
      "https://images.unsplash.com/photo-1726699698329-580274efad8f"
    ],
    agent: {
      name: "Sarah Jenkins",
      phone: "(555) 123-4567",
      email: "sarah@landventures.com"
    }
  },
  {
    id: "plot-102",
    title: "Rolling Green Pastures",
    description: "15 acres of lush, rolling green hills suitable for grazing or building your dream farmhouse. Panoramic views of the surrounding valley.",
    price: 250000,
    area: 15.0,
    areaUnit: "acres",
    type: "Agricultural",
    location: {
      region: "Highland Valley",
      address: "450 Green Hills Ln",
      coordinates: { lat: 34.60, lng: -112.50 }
    },
    features: ["Pasture", "Panoramic Views", "Fenced"],
    status: "Available",
    images: [
      "https://images.unsplash.com/photo-1506260408121-e353d10b87c7",
      "https://images.unsplash.com/photo-1681902354400-9e9fd5e944ee"
    ],
    agent: {
      name: "Mike Ross",
      phone: "(555) 987-6543",
      email: "mike@landventures.com"
    }
  },
  {
    id: "plot-103",
    title: "Wooded Mountain Retreat",
    description: "Dense forest land backing up to national forest. Ultimate privacy and seclusion. abundant wildlife including deer and turkey.",
    price: 89000,
    area: 3.5,
    areaUnit: "acres",
    type: "Residential",
    location: {
      region: "Pine Ridge",
      address: "777 Timber Trail",
      coordinates: { lat: 34.65, lng: -112.40 }
    },
    features: ["Wooded", "Privacy", "Hunting Allowed"],
    status: "Pending",
    images: [
      "https://images.unsplash.com/photo-1726699698329-580274efad8f",
      "https://images.unsplash.com/photo-1653177394290-49e3df333e82"
    ],
    agent: {
      name: "Sarah Jenkins",
      phone: "(555) 123-4567",
      email: "sarah@landventures.com"
    }
  },
  {
    id: "plot-104",
    title: "Sunny Desert Acreage",
    description: "Affordable 10-acre desert plot with stunning sunsets and mountain views. Level topography, ready for off-grid living or solar projects.",
    price: 45000,
    area: 10.0,
    areaUnit: "acres",
    type: "Residential",
    location: {
      region: "Sun Valley",
      address: "88 Cactus Bloom Way",
      coordinates: { lat: 34.45, lng: -112.60 }
    },
    features: ["Mountain Views", "Level", "Off-grid Potential"],
    status: "Available",
    images: [
      "https://images.unsplash.com/photo-1659586554522-51e50bd6bd35",
      "https://images.unsplash.com/photo-1659586555029-d80feb54c015"
    ],
    agent: {
      name: "David Chen",
      phone: "(555) 456-7890",
      email: "david@landventures.com"
    }
  },
  {
    id: "plot-105",
    title: "Prime Commercial Corner",
    description: "High visibility 2-acre lot at the intersection of Hwy 9 and County Rd 12. Zoned for commercial use. Great potential for retail or gas station.",
    price: 450000,
    area: 2.0,
    areaUnit: "acres",
    type: "Commercial",
    location: {
      region: "Highland Valley",
      address: "100 Highway 9",
      coordinates: { lat: 34.55, lng: -112.48 }
    },
    features: ["Highway Access", "Utilities Available", "High Traffic"],
    status: "Sold",
    images: [
       "https://images.unsplash.com/photo-1758461479768-bdbce375e005",
       "https://images.unsplash.com/photo-1598209082112-ca535e1f1095"
    ],
    agent: {
      name: "Mike Ross",
      phone: "(555) 987-6543",
      email: "mike@landventures.com"
    }
  }
];

export const locations = ["Highland Valley", "Pine Ridge", "Sun Valley"];
export const types = ["Residential", "Agricultural", "Commercial", "Recreational"];
