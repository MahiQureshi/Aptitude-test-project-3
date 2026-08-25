// questions.js

const questions = {

  Quantitative: [
    {
      id: 1,
      difficulty: "Easy",
      question: "A salary is increased by 20% and then decreased by 10%. What is the overall percentage change?",
      options: [
        "8% increase",
        "10% increase",
        "8% decrease",
        "2% increase"
      ],
      answer: 0
    },

    {
      id: 2,
      difficulty: "Medium",
      question: "A shopkeeper buys an item for ₹800 and sells it for ₹960. What is his profit percentage?",
      options: [
        "15%",
        "20%",
        "25%",
        "30%"
      ],
      answer: 1
    },

    {
      id: 3,
      difficulty: "Hard",
      question: "A train 180 m long crosses a 270 m platform in 18 seconds. What is the speed of the train?",
      options: [
        "72 km/h",
        "80 km/h",
        "90 km/h",
        "100 km/h"
      ],
      answer: 2
    },

    {
      id: 4,
      difficulty: "Easy",
      question: "If 40% of a number is 72, what is the number?",
      options: [
        "160",
        "180",
        "200",
        "220"
      ],
      answer: 1
    },

    {
      id: 5,
      difficulty: "Medium",
      question: "A can complete a job in 12 days and B in 18 days. How many days will they take together?",
      options: [
        "6 days",
        "7.2 days",
        "8 days",
        "9 days"
      ],
      answer: 1
    },

    {
      id: 6,
      difficulty: "Hard",
      question: "A number is increased by 25% and then decreased by 20%. What is the overall change?",
      options: [
        "5% increase",
        "5% decrease",
        "No change",
        "10% increase"
      ],
      answer: 2
    },

    {
      id: 7,
      difficulty: "Easy",
      question: "A car travels 240 km in 4 hours. What is its average speed?",
      options: [
        "50 km/h",
        "55 km/h",
        "60 km/h",
        "65 km/h"
      ],
      answer: 2
    },

    {
      id: 8,
      difficulty: "Medium",
      question: "The average of 5 numbers is 24. If one number is removed, the average of the remaining four is 20. What was the removed number?",
      options: [
        "36",
        "40",
        "44",
        "48"
      ],
      answer: 1
    },

    {
      id: 9,
      difficulty: "Hard",
      question: "A person invests ₹20,000 at two different rates. One part earns 8% and the other 12%. If the total annual interest is ₹2,000, how much is invested at 8%?",
      options: [
        "₹8,000",
        "₹10,000",
        "₹12,000",
        "₹15,000"
      ],
      answer: 1
    },

    {
      id: 10,
      difficulty: "Easy",
      question: "What is the probability of getting an even number when a fair die is rolled?",
      options: [
        "1/6",
        "1/3",
        "1/2",
        "2/3"
      ],
      answer: 2
    },

    {
      id: 11,
      difficulty: "Medium",
      question: "The ratio of boys to girls in a class is 3:5. If there are 24 boys, how many girls are there?",
      options: [
        "32",
        "36",
        "40",
        "45"
      ],
      answer: 2
    },

    {
      id: 12,
      difficulty: "Hard",
      question: "A mixture contains milk and water in the ratio 5:2. If 14 litres of water are added, the ratio becomes 5:4. What was the original quantity of the mixture?",
      options: [
        "35 litres",
        "42 litres",
        "49 litres",
        "56 litres"
      ],
      answer: 2
    },

    {
      id: 13,
      difficulty: "Easy",
      question: "If 3 pens cost ₹45, how much will 8 pens cost?",
      options: [
        "₹100",
        "₹110",
        "₹120",
        "₹135"
      ],
      answer: 2
    },

    {
      id: 14,
      difficulty: "Medium",
      question: "A product marked at ₹2,500 is sold at a 20% discount. What is the selling price?",
      options: [
        "₹1,800",
        "₹2,000",
        "₹2,100",
        "₹2,200"
      ],
      answer: 1
    },

    {
      id: 15,
      difficulty: "Hard",
      question: "A boat travels 30 km downstream in 2 hours and the same distance upstream in 3 hours. What is the speed of the boat in still water?",
      options: [
        "10 km/h",
        "12.5 km/h",
        "15 km/h",
        "20 km/h"
      ],
      answer: 2
    },

    {
      id: 16,
      difficulty: "Easy",
      question: "If 15% of a number is 45, what is the number?",
      options: [
        "250",
        "300",
        "350",
        "400"
      ],
      answer: 1
    },

    {
      id: 17,
      difficulty: "Medium",
      question: "A person's income is ₹40,000 and they save 25%. How much do they spend?",
      options: [
        "₹25,000",
        "₹28,000",
        "₹30,000",
        "₹32,000"
      ],
      answer: 2
    },

    {
      id: 18,
      difficulty: "Hard",
      question: "A shopkeeper marks an item 40% above cost price and gives a 15% discount. What is his profit percentage?",
      options: [
        "15%",
        "19%",
        "21%",
        "25%"
      ],
      answer: 1
    },

    {
      id: 19,
      difficulty: "Medium",
      question: "A sum of money becomes ₹13,310 in 3 years at 10% compound interest. What was the principal?",
      options: [
        "₹9,000",
        "₹10,000",
        "₹11,000",
        "₹12,000"
      ],
      answer: 1
    },

    {
      id: 20,
      difficulty: "Hard",
      question: "A clock gains 5 minutes every hour. If it is correct at 8:00 AM, what will it show at actual 8:00 PM?",
      options: [
        "8:30 PM",
        "8:45 PM",
        "9:00 PM",
        "9:05 PM"
      ],
      answer: 2
    }
  ],


  // ============================================================
  // LOGICAL - 20 QUESTIONS
  // ============================================================

  Logical: [

    {
      id: 1,
      difficulty: "Easy",
      question: "Find the next number: 3, 6, 12, 24, ___",
      options: ["36", "42", "48", "54"],
      answer: 2
    },

    {
      id: 2,
      difficulty: "Medium",
      question: "Find the odd one out: 16, 25, 36, 49, 63, 81.",
      options: ["25", "36", "63", "81"],
      answer: 2
    },

    {
      id: 3,
      difficulty: "Hard",
      question: "A person walks 10 m north, 6 m east, 10 m south and 4 m west. How far is the person from the starting point?",
      options: ["2 m", "4 m", "6 m", "10 m"],
      answer: 1
    },

    {
      id: 4,
      difficulty: "Easy",
      question: "Find the missing number: 2, 5, 10, 17, 26, ___",
      options: ["35", "36", "37", "38"],
      answer: 2
    },

    {
      id: 5,
      difficulty: "Medium",
      question: "If CAT is coded as DBU, how will DOG be coded?",
      options: ["EPH", "EOG", "FPH", "DPH"],
      answer: 0
    },

    {
      id: 6,
      difficulty: "Hard",
      question: "A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?",
      options: ["Father", "Uncle", "Brother", "Grandfather"],
      answer: 1
    },

    {
      id: 7,
      difficulty: "Easy",
      question: "Find the next number: 1, 4, 9, 16, 25, ___",
      options: ["30", "32", "36", "49"],
      answer: 2
    },

    {
      id: 8,
      difficulty: "Medium",
      question: "Complete the series: AZ, BY, CX, DW, ___",
      options: ["EV", "FU", "EW", "EX"],
      answer: 0
    },

    {
      id: 9,
      difficulty: "Hard",
      question: "Five people P, Q, R, S and T sit in a row. P is left of Q but right of R. S is right of Q. T is between Q and S. Who sits in the middle?",
      options: ["P", "Q", "R", "T"],
      answer: 1
    },

    {
      id: 10,
      difficulty: "Easy",
      question: "If yesterday was Monday, what day will it be 100 days from today?",
      options: ["Wednesday", "Thursday", "Friday", "Saturday"],
      answer: 1
    },

    {
      id: 11,
      difficulty: "Medium",
      question: "All roses are flowers. Some flowers fade quickly. Can we conclude that some roses fade quickly?",
      options: [
        "Yes",
        "No, it does not necessarily follow",
        "Only if roses are red",
        "Always"
      ],
      answer: 1
    },

    {
      id: 12,
      difficulty: "Hard",
      question: "E is taller than C, C is taller than A, A is taller than B, and B is taller than D. Who is the shortest?",
      options: ["E", "C", "B", "D"],
      answer: 3
    },

    {
      id: 13,
      difficulty: "Easy",
      question: "If MOBILE is coded as ELIBOM, how will TABLET be coded?",
      options: ["TELBAT", "TABELT", "TBALTE", "ELBAT"],
      answer: 0
    },

    {
      id: 14,
      difficulty: "Medium",
      question: "Find the next pair: AB, DE, HI, MN, ___",
      options: ["RS", "ST", "TU", "QR"],
      answer: 0
    },

    {
      id: 15,
      difficulty: "Hard",
      question: "A man says, 'The woman in the photograph is the daughter of the only daughter of my mother.' How is the woman related to the man?",
      options: ["Sister", "Daughter", "Niece", "Mother"],
      answer: 2
    },

    {
      id: 16,
      difficulty: "Easy",
      question: "Which number does not belong? 2, 4, 8, 16, 31, 64",
      options: ["8", "16", "31", "64"],
      answer: 2
    },

    {
      id: 17,
      difficulty: "Medium",
      question: "Arrange logically: Application, Interview, Selection, Joining.",
      options: [
        "Application → Interview → Selection → Joining",
        "Interview → Application → Selection → Joining",
        "Selection → Application → Interview → Joining",
        "Joining → Selection → Interview → Application"
      ],
      answer: 0
    },

    {
      id: 18,
      difficulty: "Hard",
      question: "If all laptops are devices and some devices are expensive, which statement definitely follows?",
      options: [
        "All laptops are expensive",
        "Some laptops are expensive",
        "All laptops are devices",
        "No laptops are expensive"
      ],
      answer: 2
    },

    {
      id: 19,
      difficulty: "Medium",
      question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
      options: ["0°", "7.5°", "15°", "30°"],
      answer: 1
    },

    {
      id: 20,
      difficulty: "Hard",
      question: "Seven people stand in a line. A is 3rd from the left and B is 2nd from the right. If C stands exactly between A and B, what position does C occupy?",
      options: ["3rd", "4th", "5th", "6th"],
      answer: 1
    }
  ],


  // ============================================================
  // VERBAL - 20 QUESTIONS
  // ============================================================

  Verbal: [

    {
      id: 1,
      difficulty: "Easy",
      question: "Choose the synonym of 'Abundant'.",
      options: ["Scarce", "Plentiful", "Weak", "Limited"],
      answer: 1
    },

    {
      id: 2,
      difficulty: "Medium",
      question: "Choose the grammatically correct sentence.",
      options: [
        "Neither of the answers are correct.",
        "Neither of the answers is correct.",
        "Neither answers is correct.",
        "Neither of the answers were correct."
      ],
      answer: 1
    },

    {
      id: 3,
      difficulty: "Hard",
      question: "Choose the word closest in meaning to 'Pragmatic'.",
      options: ["Idealistic", "Practical", "Emotional", "Traditional"],
      answer: 1
    },

    {
      id: 4,
      difficulty: "Easy",
      question: "Choose the antonym of 'Reluctant'.",
      options: ["Unwilling", "Hesitant", "Willing", "Doubtful"],
      answer: 2
    },

    {
      id: 5,
      difficulty: "Medium",
      question: "She has been working here ___ 2022.",
      options: ["for", "since", "from", "by"],
      answer: 1
    },

    {
      id: 6,
      difficulty: "Hard",
      question: "A person who can speak many languages is called a:",
      options: ["Linguist", "Polyglot", "Orator", "Translator"],
      answer: 1
    },

    {
      id: 7,
      difficulty: "Easy",
      question: "Choose the correctly spelt word.",
      options: [
        "Accomodation",
        "Accommodation",
        "Acommodation",
        "Accommadation"
      ],
      answer: 1
    },

    {
      id: 8,
      difficulty: "Medium",
      question: "The new policy will ___ the way employees work.",
      options: ["effect", "affect", "effected", "affecting"],
      answer: 1
    },

    {
      id: 9,
      difficulty: "Hard",
      question: "What does 'Ambiguous' mean?",
      options: [
        "Very clear",
        "Having multiple possible meanings",
        "Completely false",
        "Extremely detailed"
      ],
      answer: 1
    },

    {
      id: 10,
      difficulty: "Easy",
      question: "What does the idiom 'Break the ice' mean?",
      options: [
        "Start a conversation",
        "End an argument",
        "Become angry",
        "Avoid someone"
      ],
      answer: 0
    },

    {
      id: 11,
      difficulty: "Medium",
      question: "Despite ___ tired, she completed the presentation.",
      options: ["being", "been", "be", "was"],
      answer: 0
    },

    {
      id: 12,
      difficulty: "Hard",
      question: "His explanation was so ___ that even a complex concept seemed easy to understand.",
      options: ["obscure", "lucid", "vague", "contradictory"],
      answer: 1
    },

    {
      id: 13,
      difficulty: "Easy",
      question: "Choose the synonym of 'Brief'.",
      options: ["Lengthy", "Concise", "Complicated", "Detailed"],
      answer: 1
    },

    {
      id: 14,
      difficulty: "Medium",
      question: "Identify the error: 'Each of the students have submitted their assignment.'",
      options: [
        "Each should be Every",
        "Have should be Has",
        "Students should be Student",
        "There is no error"
      ],
      answer: 1
    },

    {
      id: 15,
      difficulty: "Hard",
      question: "Choose the most professional sentence.",
      options: [
        "Send me the document ASAP.",
        "I need the document right now.",
        "Could you please share the document at your earliest convenience?",
        "Give me the document quickly."
      ],
      answer: 2
    },

    {
      id: 16,
      difficulty: "Easy",
      question: "Choose the antonym of 'Transparent'.",
      options: ["Clear", "Obvious", "Opaque", "Visible"],
      answer: 2
    },

    {
      id: 17,
      difficulty: "Medium",
      question: "Choose the grammatically correct sentence.",
      options: [
        "If I would have known, I would have helped.",
        "If I had known, I would have helped.",
        "If I knew, I would had helped.",
        "If I have known, I would help."
      ],
      answer: 1
    },

    {
      id: 18,
      difficulty: "Hard",
      question: "Remote work offers flexibility, but without proper communication, teams may experience delays. What is the central idea?",
      options: [
        "Remote work is always better.",
        "Remote work has benefits but requires effective communication.",
        "Communication is unnecessary.",
        "Teams should avoid remote work."
      ],
      answer: 1
    },

    {
      id: 19,
      difficulty: "Medium",
      question: "Choose the word that best completes the sentence: 'The manager's instructions were ___, so nobody was confused about what to do.'",
      options: ["vague", "ambiguous", "explicit", "uncertain"],
      answer: 2
    },

    {
      id: 20,
      difficulty: "Hard",
      question: "Which sentence best expresses a cause-and-effect relationship?",
      options: [
        "Although it rained, we went outside.",
        "It rained heavily, so the match was postponed.",
        "We went outside and played football.",
        "The match was exciting and competitive."
      ],
      answer: 1
    }

  ]
};


// ============================================================
// FUNCTION: Get 20 questions for selected category
// ============================================================

function getQuestions(category) {
  return questions[category] || [];
}


export { questions, getQuestions };
