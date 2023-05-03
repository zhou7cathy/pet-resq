const userSeeds= [
  {
    "name": "Carol",
    "email": "carol123@hotmail.com",
    "password": "password1",
  },
  {
    "name": "Jack",
    "email": "jackychan@gmail.com",
    "password": "password1",
  },
  {
    "name": "Rehana",
    "email": "Rehana666@hotmail.com",
    "password": "password1",
  }
]

const animalTypes= [
  {
    "name": ["Cat", "Dog", "Bird","Cattle","Ferret","Goat","Guinea Pig", "Horse", "Marsupial", "Pig","Rabbit","Reptile","Rodent","Sheep","Turtle"]
  }
]

const animals= [
  {
    "status": "Lost Pet",
    "name": "cookie",
    "location":"perth",
    "image":"cockatiel",
    "description":"Cookie is a lovely cockatiel with Grey body with yellow chest and orange cheeks. Please contact me if anyone has found our beloved Cookie at email: cookie@hotmail.com ",
    "postDate":"01/05/2023",
    "AnimalTypes":"bird",
  }
  {
    "status": "Lost Pet",
    "name": "Ozzy",
    "location":"perth",
    "image":"cat",
    "description":"Ozzy is a Ginger Domestic Medium Hair and wears a light blue collar with a bell. He's microchips and is deed, and is a timid cat. Please help find our Ozzy, we're desperate to have our fur-baby back. If you spot him please keep him with you or in your area and we will come to you. Reward offered if he's found. Contact number:0410665788. ",
    "postDate":"01/05/2023",
    "AnimalTypes":"cat",
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
  faqs,
  animals,
};
