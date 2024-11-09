const items = [
  {
    name: "A Diamond-Encrusted Smartphone",
    price: 500000,
    image: "resources/diamondencrustedphone.webp",
  },
  {
    name: "Neymar Jr Transfer Fee",
    price: 200000000,
    image: "resources/neymar.webp",
  },
  {
    name: "A Lifetime of Living off of Benefits",
    price: 1200000,
    image: "resources/lifeexpenditure.webp",
  },

  {
    name: "Ferrari LaFerrari",
    price: 1200000,
    image: "resources/laferrari.webp",
  },
  { name: "Private Jet", price: 70000000, image: "resources/privatejet.webp" },
  {
    name: "A Dinner at Nusr-Et (for 10 People)",
    price: 5000,
    image: "resources/saltbae.webp",
  },
  {
    name: "Cost of Building 1,000 Houses in the UK",
    price: 100000000,
    image: "resources/houseconstruction.webp",
  },
  {
    name: "A UK Visa for an Immigrant (Annual Cost)",
    price: 1500,
    image: "resources/ukvisa.webp",
  },
  {
    name: "A First-Class Plane Ticket to Rwanda",
    price: 5000,
    image: "resources/firstclasstickets.webp",
  },
  {
    name: "Bugatti Chiron",
    price: 3000000,
    image: "resources/bugattichiron.webp",
  },
  {
    name: "Renting a Mansion for a Month in Central London",
    price: 250000,
    image: "resources/centrallondonmansion.webp",
  },
  {
    name: "Cost of All Immigrants' NHS Care",
    price: 500000000,
    image: "resources/hospital.webp",
  },
  {
    name: "A Luxury Yacht for a Week",
    price: 500000,
    image: "resources/Yacht.webp",
  },
  {
    name: "A Rare 1960s Ferrari 250 GTO",
    price: 70000000,
    image: "resources/ferrarigto.webp",
  },
  {
    name: "A Week Stay in a 5-Star Resort in Dubai",
    price: 20000,
    image: "resources/burjalarab.webp",
  },
  {
    name: "Annual Fees for a Private School in the UK",
    price: 45000,
    image: "resources/privateschooluk.webp",
  },
  {
    name: "Sponsoring an Athlete for the Olympics",
    price: 100000,
    image: "resources/runners.webp",
  },
  {
    name: "The World’s Most Expensive Painting (e.g., Salvator Mundi)",
    price: 450300000,
    image: "resources/salvatormundi.webp",
  },

  {
    name: "A Year's Living Cost in London",
    price: 300000,
    image: "resources/london.webp",
  },
  {
    name: "Jeff Bezos' Beverley Hills Home",
    price: 175000000,
    image: "resources/bezos.webp",
  },
  {
    name: "Michael Jackson's Estate",
    price: 115000000,
    image: "resources/mj.webp",
  },
  {
    name: "Angela Rayner's DJ Booth Appearance",
    price: 836,
    image: "resources/angela.webp",
  },
  {
    name: "Keir Starmer's Corporate Arsenal tickets",
    price: 35000,
    image: "resources/keirstarmer.webp",
  },
  {
    name: "Sending 1 person to the International Space Station",
    price: 55000000,
    image: "resources/iss.webp",
  },

  {
    name: "Deporting Every Illegal Immigrant in the UK",
    price: 10000000000,
    image: "resources/deport.webp",
  },
  {
    name: "The Development of the Lockheed Martin F-35 Jet",
    price: 1300000000000,
    image: "resources/f35.webp",
  },
  {
    name: "A Yacht",
    price: 250000000,
    image: "resources/Yacht.webp",
  },
  {
    name: "The Daily Telegraph",
    price: 600000000,
    image: "resources/telegraph.webp",
  },
  {
    name: "A Cullnian Diamond",
    price: 400000000,
    image: "resources/cullnian.webp",
  },
  {
    name: "Elon Musk's Net Worth",
    price: 280000000000, // $250 billion USD
    image: "resources/elonmusk.webp", // Add an image URL here
  },

  {
    name: "A Mile of HS2",
    price: 100000000, // £100 million
    image: "resources/hs2.webp", // Replace with an image URL
  },
  {
    name: "The Manchester United Squad",
    price: 1200000000, // £1.2 billion
    image: "resources/manunited.webp", // Replace with an image URL
  },
  {
    name: "A Rolex Watch",
    price: 8000, // £8,000
    image: "resources/rolex.webp", // Replace with an image URL
  },
  {
    name: "A Dinosaur Skeleton",
    price: 15000000, // £15 million (average for a good specimen like T. rex)
    image: "resources/dinosaur-skeleton.jpg", // Replace with an image URL
  },
  {
    name: "GDP of Tuvalu",
    price: 50000000,
    image: "resources/tuvalu.webp",
  },
  {
    name: "GDP of Nauru",
    price: 120000000,
    image: "resources/nauru.webp",
  },
  {
    name: "GDP of Kiribati",
    price: 200000000,
    image: "resources/kiribati.webp",
  },
  {
    name: "GDP of Marshall Islands",
    price: 250000000,
    image: "resources/marshallislands.webp",
  },
  {
    name: "GDP of Micronesia",
    price: 350000000,
    image: "resources/micronesia.webp",
  },
  {
    name: "GDP of São Tomé and Príncipe",
    price: 500000000,
    image: "resources/saotome.webp",
  },
  {
    name: "GDP of Dominica",
    price: 600000000,
    image: "resources/dominica.webp",
  },
  {
    name: "GDP of Saint Vincent and the Grenadines",
    price: 800000000,
    image: "resources/saintvincent.webp",
  },
  {
    name: "GDP of Samoa",
    price: 1100000000,
    image: "resources/samoaflag.webp",
  },
  {
    name: "GDP of Vanuatu",
    price: 1200000000,
    image: "resources/vanuatu.webp",
  },
  {
    name: "GDP of Saint Kitts and Nevis",
    price: 1300000000,
    image: "resources/saintkitts.webp",
  },
  {
    name: "GDP of Comoros",
    price: 1400000000,
    image: "resources/comoros.webp",
  },
];

export default items;
