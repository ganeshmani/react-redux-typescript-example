import uuid from "uuid/v4";

let inventory = [
  {
    name: "Timber Gray Sofa",
    price: "1000",
    image: "../images/products/couch1.png",
    description: "This is a Test Description",
    brand: "Jason Bourne",
    currentInventory: 4,
    id: "fb94f208-6d34-425f-a3f8-e5b87794aef1"
  },
  {
    name: "Carmel Brown Sofa",
    price: "1000",
    image: "../images/products/couch5.png",
    description: "This is a test description",
    brand: "Jason Bourne",
    currentInventory: 2,
    id: "4c95788a-1fa2-4f5c-ab97-7a98c1862584"
  },
  {
    name: "Mod Leather Sofa",
    price: "800",
    image: "../images/products/couch6.png",
    description:
      "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
    brand: "Jason Bourne",
    currentInventory: 8,
    id: "8338db8c-91c5-4341-81e1-fa350c6baa70"
  },
  {
    name: "Thetis Gray Love Seat",
    price: "900",
    image: "../images/products/couch7.png",
    description:
      "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.",
    brand: "Jason Bourne",
    currentInventory: 10,
    id: "d414f81e-0f34-49ca-8fb6-a4b47f622eb9"
  },
  {
    name: "Sven Tan Matte",
    price: "1200",
    image: "./images/products/couch8.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 7,
    id: "f193961b-7716-48f9-9c81-8720224dccbf"
  },
  {
    name: "Otis Malt Sofa",
    price: "500",
    image: "./images/products/couch9.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 13,
    id: "7bbdc630-ff67-4897-ba43-1bcc7919fc6c"
  },
  {
    name: "Ceni Brown 3 Seater",
    price: "650",
    image: "../images/products/couch10.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 9,
    id: "4b7c67b3-0c65-47a4-b7e9-b99f07dfabc2"
  },
  {
    name: "Jameson Jack Lounger",
    price: "1230",
    image: "../images/products/couch11.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 24,
    id: "e31876fe-34fb-4721-a6ac-7fc3938a352e"
  },
  {
    name: "Galaxy Blue Sofa",
    price: "800",
    image: "../images/products/couch2.png",
    description:
      "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
    brand: "Jason Bourne",
    currentInventory: 43,
    id: "e60a4f85-4899-431d-816d-72134cae07a0"
  },
  {
    name: "Markus Green Love Seat",
    price: "900",
    image: "../images/products/couch3.png",
    description:
      "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.",
    brand: "Jason Bourne",
    currentInventory: 2,
    id: "69cdde2b-17f3-411c-a5af-7c552fc6648e"
  },
  {
    name: "Dabit Matte Black",
    price: "1200",
    image: "../images/products/couch4.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    currentInventory: 14,
    id: "0008c6dd-725a-4eac-b13e-795808cfeedc"
  },
  {
    name: "Embrace Blue",
    price: "300",
    image: "../images/products/chair1.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 12,
    id: "8baefb38-6ff4-462d-880a-b192f972d939"
  },
  {
    name: "Nord Lounger",
    price: "825",
    image: "./images/products/chair2.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 13,
    id: "91067165-7135-4310-b5f9-e99eb2b7410e"
  },
  {
    name: "Ceni Matte Oranve",
    price: "720",
    image: "./images/products/chair3.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 33,
    id: "ab149e2a-7421-4012-b341-1309f8bdc417"
  },
  {
    name: "Abisko Green Recliner",
    price: "2000",
    image: "./images/products/chair4.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 23,
    id: "8eac7c82-e095-49a3-b4f7-c2df518ca1d4"
  },
  {
    name: "Denim on Denim Single",
    price: "1100",
    image: "./images/products/chair5.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 13,
    id: "e2b84bfb-2b60-4b82-b899-fe9483d5d2e8"
  },
  {
    name: "Levo Tan Lounge Chair",
    price: "600",
    image: "./images/products/chair6.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 15,
    id: "994d33fb-7ee3-43a6-ae51-1687f9cd7c15"
  },
  {
    name: "Anime Tint Recliner",
    price: "775",
    image: "./images/products/chair7.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 44,
    id: "7f390c3f-f59b-4dfd-9d79-03e6f5d3c096"
  },
  {
    name: "Josh Jones Red Chair",
    price: "1200",
    image: "./images/products/chair8.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 17,
    id: "e6995bf1-3a50-4934-8777-22c2043fc3f9"
  },
  {
    name: "Black Sand Lounge",
    price: "1600",
    image: "./images/products/chair9.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 28,
    id: "77b98369-c6e3-4ebf-86a3-8d0e52024631"
  },
  {
    name: "Mint Beige Workchair",
    price: "550",
    image: "./images/products/chair10.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 31,
    id: "af65a773-9243-4e9e-b192-5eb3b22b0571"
  }
];

export default inventory;
