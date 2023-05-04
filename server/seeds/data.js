const userSeeds= [
  {
    "name": "Carol",
    "email": "carol123@hotmail.com",
    "password": "password1",
    "animals": "645391eaca347f6165b56b80",
  },
  {
    "name": "Jack",
    "email": "jackychan@gmail.com",
    "password": "password1",
    "animals": "64538eebcfd9bafbe336727f",
  },
  {
    "name": "Rehana",
    "email": "Rehana666@hotmail.com",
    "password": "password1",
  }
]

const animalTypes= [
  {
    "_id": "64538f6821a3ee262155efe9",
    "name":"Cat",
  },
  {
    "_id": "645391163309c7e5d69a0d51",
    "name":"Dog",
  },
  { 
    "_id": "645391163309c7e5d69a0d11",
    "name":"Bird",
  },
  {
    "_id": "645391163309c7e5d69a0d12",
    "name":"Cattle",
  },
  {
    "_id": "645391163309c7e5d69a0d13",
    "name":"Ferret",
  },
  {
    "_id": "645391163309c7e5d69a0d14",
    "name":"Goat",
  },
  {
    "_id": "645391163309c7e5d69a0d15",
    "name":"Guinea Pig",
  },
  { 
    "_id": "645391163309c7e5d69a0d16",
    "name":"Horse",
  },
  {
    "_id": "645391163309c7e5d69a0d17",
    "name":"Marsupial",
  },
  {
    "_id": "645391163309c7e5d69a0d18",
    "name":"Pig",
  },
  {
    "_id": "645391163309c7e5d69a0d19",
    "name":"Rabbit",
  },
  {
    "_id": "645391163309c7e5d69a0d20",
    "name":"Reptile",
  },
  {
    "_id": "645391163309c7e5d69a0d30",
    "name":"Rodent",
  },
  {
    "_id": "645391163309c7e5d69a0d40",
    "name":"Sheep",
  },
  {
    "_id": "645391163309c7e5d69a0d50",
    "name":"Turtle",
  },
]

const animals= [
  {
    "_id": "645391eaca347f6165b56b80",
    "status": "Lost Pet",
    "name": "cookie",
    "location":"perth",
    "image":"cockatiel",
    "description":"Cookie is a lovely cockatiel with Grey body with yellow chest and orange cheeks. Please contact me if anyone has found our beloved Cookie at email: cookie@hotmail.com ",
    "postDate":"01/05/2023",
    "AnimalTypes":"645391163309c7e5d69a0d11",
  },
  {
    "_id": "64538eebcfd9bafbe336727f",
    "status": "Lost Pet",
    "name": "Ozzy",
    "location":"perth",
    "image":"cat",
    "description":"Ozzy is a Ginger Domestic Medium Hair and wears a light blue collar with a bell. He's microchips and is deed, and is a timid cat. Please help find our Ozzy, we're desperate to have our fur-baby back. If you spot him please keep him with you or in your area and we will come to you. Reward offered if he's found. Contact number:0410665788. ",
    "postDate":"01/05/2023",
    "AnimalTypes":"64538f6821a3ee262155efe9",
  }
]

const faqs= [
	{
		"question": "I have found or seen someone's lost pet, what do I do?",
		"answer": "Report your found pet or your sighting with us by clicking here. The sooner you do that, the sooner your found pet details become available for hundreds of lost pet owners to review on the website.",
	},
	{
		"question": "How do I remove my post?",
		"answer": "Login in first, and go to your profile then you will see all of your posts with delete buttons for each of the post.",
	},
]

module.exports = {
  userSeeds,
  animalTypes,
  animals,
  faqs,
};
