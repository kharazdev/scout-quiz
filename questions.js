// questions.js

// =========================================================================
// == Question Set for Cubs (Ages 8-10) - Use with ?set=2 in the URL ==
// =========================================================================
const allQuestions2 = [
    // -------------- EASY (For Cubs) --------------
    { question: "Part of the Cub promise is to be 'trustworthy'. What does this mean?", options: ["To be strong", "To always tell the truth", "To be the fastest", "To be funny"], answer: "To always tell the truth", difficulty: "easy" },
    { question: "If a friend tells you a secret, what is the respectful thing to do?", options: ["Tell everyone", "Keep it private", "Write it down", "Forget it"], answer: "Keep it private", difficulty: "easy" },
    { question: "What is the most important 'need' to pack for a cold camping trip?", options: ["A video game", "A warm sleeping bag", "A comic book", "A kite"], answer: "A warm sleeping bag", difficulty: "easy" },
    { question: "In Islam, which of these foods is generally considered 'Haram' (forbidden) to eat?", options: ["Chicken", "Fish", "Pork", "Beef"], answer: "Pork", difficulty: "easy" },
    { question: "What should you say before starting to eat your meal?", options: ["Allahu Akbar", "Alhamdulillah", "Bismillah", "I am hungry"], answer: "Bismillah", difficulty: "easy" },
    { question: "If you have 10 Pounds and you buy a juice for 4 Pounds, how much do you have left?", options: ["5 Pounds", "6 Pounds", "14 Pounds", "3 Pounds"], answer: "6 Pounds", difficulty: "easy" },
    // --- NEW QUESTIONS START HERE ---
    { question: "What should you wear on your head to stay safe when riding a bicycle?", options: ["A woolly hat", "A helmet", "A sun cap", "Your Scout scarf"], answer: "A helmet", difficulty: "easy" },
    { question: "Which Scout section comes before Cubs, for ages 6-8?", options: ["Scouts", "Explorers", "Squirrels", "Beavers"], answer: "Beavers", difficulty: "easy" },
    // --- NEW QUESTIONS END HERE ---

    // -------------- MEDIUM (For Cubs) --------------
    { question: "Which campfire is built by stacking logs up in a square shape, like a log cabin?", options: ["Tepee Fire", "Star Fire", "Pyramid Fire", "Hunter's Fire"], answer: "Pyramid Fire", difficulty: "medium" },
    { question: "Why is it important to respect someone's 'personal space'?", options: ["It's a game", "To make them feel safe and comfortable", "So they don't see you", "It is not important"], answer: "To make them feel safe and comfortable", difficulty: "medium" },
    { question: "At the store, you want candy (a 'want') but you need to buy bread for your family (a 'need'). What should you prioritize?", options: ["Buy the candy", "Buy both", "Buy the bread", "Buy nothing"], answer: "Buy the bread", difficulty: "medium" },
    { question: "A Cub respects others. What should you do when a leader is speaking to the group?", options: ["Talk to your friend", "Run around", "Listen quietly", "Sing a song"], answer: "Listen quietly", difficulty: "medium" },
    { question: "Which campfire has several logs pointing towards a central fire, like spokes on a wheel?", options: ["Pyramid Fire", "Star Fire", "Tepee Fire", "Log Cabin Fire"], answer: "Star Fire", difficulty: "medium" },
    { question: "If you see another Cub's backpack open, what is the respectful thing to do?", options: ["Look inside for snacks", "Tell them quietly their bag is open", "Take something as a joke", "Ignore it"], answer: "Tell them quietly their bag is open", difficulty: "medium" },
    // --- NEW QUESTIONS START HERE ---
    { question: "Who founded the Scout movement?", options: ["Lord Baden-Powell", "Bear Grylls", "Winston Churchill", "The King"], answer: "Lord Baden-Powell", difficulty: "medium" },
    { question: "What is the first thing you should do if you get a small cut?", options: ["Ignore it", "Put a leaf on it", "Tell an adult and wash it with clean water", "Wrap it in a tissue"], answer: "Tell an adult and wash it with clean water", difficulty: "medium" },
    { question: "Which Scout section is for young people older than Scouts, aged 14-18?", options: ["Beavers", "Cubs", "Explorer Scouts", "Senior Scouts"], answer: "Explorer Scouts", difficulty: "medium" },
    // --- NEW QUESTIONS END HERE ---

    // -------------- HARD (For Cubs) --------------
    { question: "Which campfire is shaped like a cone and is good for starting a fire quickly?", options: ["Star Fire", "Pyramid Fire", "Trench Fire", "Tepee Fire"], answer: "Tepee Fire", difficulty: "hard" },
    { question: "You have 20 Pounds. A healthy apple costs 3 Pounds and a sugary soda costs 5 Pounds. What is the best decision for your health and wallet?", options: ["Buy the soda", "Buy two apples and have change", "Don't buy anything", "Buy 4 sodas"], answer: "Buy two apples and have change", difficulty: "hard" },
    { question: "Honesty is a scout value. If you accidentally break a rule at camp, what is the best thing to do?", options: ["Blame someone else", "Pretend it didn't happen", "Tell a leader what happened", "Run away"], answer: "Tell a leader what happened", difficulty: "hard" },
    { question: "What is the key difference between a 'need' (like water) and a 'want' (like a new toy)?", options: ["Needs cost more", "Wants are more fun", "You must have needs to survive", "You can share wants but not needs"], answer: "You must have needs to survive", difficulty: "hard" },
    // --- NEW QUESTIONS START HERE ---
    { question: "If you get separated from your group on a hike, what is the safest thing to do?", options: ["Run to catch up", "Shout loudly for your friends", "Stay in one place so you are easy to find", "Follow a different path"], answer: "Stay in one place so you are easy to find", difficulty: "hard" },
    { question: "Which of these sentences is written correctly from the Cub Scout Promise?", options: ["...to help other people, and keep the Law.", "...to help my people, and to keep the Law.", "...to help other people, and to keep the Cub Scout Law.", "...to help other people, and to know the Cub Scout Law."], answer: "...to help other people, and to keep the Cub Scout Law.", difficulty: "hard" },
    // --- NEW QUESTIONS END HERE ---

    // -------------- VERY HARD (For Cubs) --------------
    { question: "Why is being honest, even when it's difficult, a core value in Scouts?", options: ["Because leaders say so", "To avoid getting in trouble", "Because it builds trust and character", "So you can win more badges"], answer: "Because it builds trust and character", difficulty: "veryHard" },
    { question: "A 'Square Fire' (also called a Pyramid Fire) is often used for ceremonies. What is its main advantage?", options: ["It burns the fastest", "It creates a long-lasting, stable fire", "It uses the least amount of wood", "It's easy to light in the rain"], answer: "It creates a long-lasting, stable fire", difficulty: "veryHard" },
    // -------------- VERY HARD (For Cubs) --------------
    { question: "When treating a minor burn, you should use cool running water. Why shouldn't you use ice?", options: ["Because ice is hard to find on a campout", "Because it melts too quickly", "Because ice can cause more damage to the skin", "Because it doesn't clean the wound"], answer: "Because ice can cause more damage to the skin", difficulty: "veryHard" },
    { question: "The 'Leave What You Find' principle is a key part of Leave No Trace. Why is it important to leave things like rocks, antlers, or flowers behind?", options: ["So your backpack isn't too heavy", "Because they might be dirty or have germs", "To let others enjoy them and not disturb the ecosystem", "Because a leader might take them away"], answer: "To let others enjoy them and not disturb the ecosystem", difficulty: "veryHard" },
    { question: "The Bowline knot is known as a rescue knot. What makes its loop so special for this purpose?", options: ["It's the easiest loop to untie", "The loop won't tighten or slip under load", "It's the quickest knot to tie in an emergency", "It uses the least amount of rope"], answer: "The loop won't tighten or slip under load", difficulty: "veryHard" },
    { question: "What does it truly mean when we say a Scout is 'Thrifty'?", options: ["A Scout never spends money", "A Scout always finds the cheapest option", "A Scout is not wasteful and is careful with resources", "A Scout only uses old or used equipment"], answer: "A Scout is not wasteful and is careful with resources", difficulty: "veryHard" },
    { question: "If you are lost without a compass on a sunny morning, how can the sun help you find the general direction of East?", options: ["The sun is in the East in the morning", "The sun is always in the South", "Shadows point towards the East in the morning", "The sun is in the West in the morning"], answer: "The sun is in the East in the morning", difficulty: "veryHard" }
];


// =========================================================================
// == Question Set for Beavers (Ages 5-7) - Default Set ==
// =========================================================================
const allQuestions = [
    // -------------- EASY (For Beavers) --------------
    { question: "If you find a toy that isn't yours, what is the honest thing to do?", options: ["Keep it", "Hide it", "Give it to a leader", "Throw it away"], answer: "Give it to a leader", difficulty: "easy" },
    { question: "What is a respectful way to get a leader's attention?", options: ["Shout their name", "Tug on their shirt", "Wait and raise your hand", "Run in front of them"], answer: "Wait and raise your hand", difficulty: "easy" },
    { question: "If you are thirsty at camp, what do you NEED to drink?", options: ["Soda pop", "Muddy water", "Clean water", "Juice"], answer: "Clean water", difficulty: "easy" },
    { question: "Is it okay to look inside someone else's bag without asking them first?", options: ["Yes, if you are curious", "Only if it's your friend", "No, we respect their things", "Yes, to find candy"], answer: "No, we respect their things", difficulty: "easy" },
    { question: "If you have 3 cookies and you eat 1, how many are left?", options: ["One", "Two", "Three", "Four"], answer: "Two", difficulty: "easy" },
    { question: "Your body is your own. Who should you tell if someone makes you feel uncomfortable?", options: ["Keep it a secret", "A friend", "Your parents or a trusted leader", "No one"], answer: "Your parents or a trusted leader", difficulty: "easy" },
    // --- NEW QUESTIONS START HERE ---
    { question: "What is the name of the Scout group for children aged 6 to 8?", options: ["Cubs", "Beavers", "Scouts", "Tigers"], answer: "Beavers", difficulty: "easy" },
    { question: "To stay safe when crossing a street with a grown-up, you should look...", options: ["Up and down", "Only left", "Left, right, and left again", "Only right"], answer: "Left, right, and left again", difficulty: "easy" },
    // --- NEW QUESTIONS END HERE ---

    // -------------- MEDIUM (For Beavers) --------------
    { question: "When we are getting ready to eat, we should always do what first?", options: ["Run around the table", "Start eating quickly", "Wash our hands", "Sing a song"], answer: "Wash our hands", difficulty: "medium" },
    { question: "To be helpful, what can you do at the end of a meeting?", options: ["Leave your mess", "Help tidy up the room", "Run out the door first", "Complain about cleaning"], answer: "Help tidy up the room", difficulty: "medium" },
    { question: "You have 5 Pounds. A water bottle costs 2 Pounds. Can you buy it?", options: ["Yes", "No", "Maybe", "I don't know"], answer: "Yes", difficulty: "medium" },
    { question: "If you want a new toy, but you need new shoes, what is more important?", options: ["The new toy", "The new shoes", "Both are the same", "Neither"], answer: "The new shoes", difficulty: "medium" },
    { question: "What is a key part of the Beaver Scout promise?", options: ["To be the strongest", "To be kind and helpful", "To play all day", "To be the fastest runner"], answer: "To be kind and helpful", difficulty: "medium" },
    // --- NEW QUESTIONS START HERE ---
    { question: "After you are a Beaver, which section do you move up to next?", options: ["Scouts", "Explorers", "Grown-ups", "Cubs"], answer: "Cubs", difficulty: "medium" },
    { question: "If your clothes accidentally catch on fire, what should you do?", options: ["Run to find water", "Scream and wave your arms", "Stop, drop, and roll", "Take your jumper off"], answer: "Stop, drop, and roll", difficulty: "medium" },
    // --- NEW QUESTIONS END HERE ---

    // -------------- HARD (For Beavers) --------------
    { question: "Which type of campfire is shaped like a tent or a triangle?", options: ["Star Fire", "Square Fire", "Pyramid Fire", "Tepee Fire"], answer: "Tepee Fire", difficulty: "hard" },
    { question: "Why do we promise to be kind and helpful in Scouts?", options: ["To get more badges", "To make our community a better place", "So others are kind to us", "Because leaders tell us to"], answer: "To make our community a better place", difficulty: "hard" },
    { question: "At the grocery store, which of these is a 'need' for your family?", options: ["Ice cream", "Milk", "Potato chips", "A magazine"], answer: "Milk", difficulty: "hard" },
    // --- NEW QUESTIONS START HERE ---
    { question: "Who started the Scouts a long, long time ago?", options: ["Lord Baden-Powell", "Your Beaver Leader", "The King", "Captain Jack"], answer: "Lord Baden-Powell", difficulty: "hard" },
    { question: "Which sentence is correctly written from the Beaver Scout Promise?", options: ["I promise to try my best...", "I promise to do my best...", "I promise to be the best...", "I promise I will do my best..."], answer: "I promise to do my best...", difficulty: "hard" },
    // --- NEW QUESTIONS END HERE ---
    
    // -------------- VERY HARD (For Beavers) - Added to prevent app from breaking. Difficulty is relative to a Beaver's age. --------------
    { question: "What is the very first, most important rule before you can build any campfire?", options: ["Gather lots of wood", "Make sure an adult is helping you", "Find a good spot", "Light a match"], answer: "Make sure an adult is helping you", difficulty: "veryHard" },
    { question: "Why is 'trying your best' more important than always winning a game?", options: ["So you get a prize", "Because it helps you learn and have fun", "So no one else feels sad", "Because winning is too easy"], answer: "Because it helps you learn and have fun", difficulty: "veryHard" },
    // -------------- VERY HARD (For Beavers) - Added to prevent app from breaking. Difficulty is relative to a Beaver's age. --------------
     { question: "If you get a small scrape on your knee while playing, what is the very first thing you should do?", options: ["Keep playing the game", "Put a bandage on it yourself", "Tell a leader about it right away", "Run to the bathroom"], answer: "Tell a leader about it right away", difficulty: "veryHard" },
    { question: "After you finish your snack on a hike, what is the 'Leave No Trace' way to handle your wrapper?", options: ["Leave it for the animals", "Bury it under a leaf", "Put it in your pocket to throw away later", "Throw it in a bush"], answer: "Put it in your pocket to throw away later", difficulty: "veryHard" },
    { question: "If you can't see your Beaver Colony anymore in the park, what is the safest thing to do?", options: ["Run around and look for them", "Hide behind a tree until they find you", "Stop, stay in one place, and yell for a leader", "Try to walk back to the car by yourself"], answer: "Stop, stay in one place, and yell for a leader", difficulty: "veryHard" },
    { question: "The Beaver motto is 'Sharing, Sharing, Sharing'. What is the best way to show this?", options: ["Sharing a story you know", "Sharing your toys with a friend who has none", "Sharing the answers to a game", "Sharing a secret"], answer: "Sharing your toys with a friend who has none", difficulty: "veryHard" },
    { question: "Why is it important to listen quietly when a leader or another Beaver is talking?", options: ["So they finish talking faster", "Because it's a rule", "To show respect and understand what they are saying", "So you don't get tired"], answer: "To show respect and understand what they are saying", difficulty: "veryHard" }
];