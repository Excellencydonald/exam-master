
(function () {
  "use strict";

  window.EXAM_MASTER_LESSONS = window.EXAM_MASTER_LESSONS || {};

  const className = "JSS 1";
  const termName = "First Term";

  window.EXAM_MASTER_LESSONS[className] =
    window.EXAM_MASTER_LESSONS[className] || {};

  window.EXAM_MASTER_LESSONS[className][termName] =
    window.EXAM_MASTER_LESSONS[className][termName] || {};

  window.EXAM_MASTER_LESSONS[className][termName]["Mathematics"] = [

    {
      week: 1,
      title: "Number Bases and Place Value",
      objectives: [
        "Explain the meaning of a number base.",
        "Identify the place value of digits.",
        "Identify digits used in different number bases."
      ],
      introduction: "A number base tells us how many different digits are used in a number system. The number system commonly used in everyday life is base ten, also called the decimal system.",
      sections: [
        {
          heading: "1. The decimal number system",
          content: "Base ten uses ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. After 9, we move to the next place value and write 10."
        },
        {
          heading: "2. Place value",
          content: "The value of a digit depends on its position. From right to left, the places are ones, tens, hundreds, thousands and ten thousands. In 364, 4 represents 4 ones, 6 represents 60 and 3 represents 300."
        },
        {
          heading: "3. Other number bases",
          content: "Base two uses 0 and 1. Base five uses 0, 1, 2, 3 and 4. Base eight uses digits from 0 to 7. A digit must always be smaller than its base."
        }
      ],
      workedExamples: [
        {
          question: "What is the place value of 6 in 364?",
          answer: "6 is in the tens position. Its value is 6 × 10 = 60."
        },
        {
          question: "Which digits are allowed in base five?",
          answer: "0, 1, 2, 3 and 4."
        }
      ],
      keyTerms: [
        "Number base: The number of different digits used in a number system.",
        "Digit: A symbol used to write numbers.",
        "Place value: The value of a digit because of its position."
      ],
      classExercises: [
        {
          question: "How many digits are used in base ten?",
          answer: "Ten."
        },
        {
          question: "What is the place value of 7 in 572?",
          answer: "70."
        },
        {
          question: "Is 5 allowed in base five?",
          answer: "No."
        }
      ],
      summary: "Number bases describe number systems. Base ten uses ten digits, and the position of a digit determines its place value.",
      examinationPractice: [
        {
          question: "Which of these digits is not used in base two?",
          options: ["0", "1", "2", "Both 0 and 1"],
          answer: "2",
          explanation: "Base two uses only 0 and 1."
        }
      ]
    },

    {
      week: 2,
      title: "Factors and Multiples",
      objectives: [
        "Define factors and multiples.",
        "Find factors of whole numbers.",
        "Identify common factors and common multiples."
      ],
      introduction: "Factors and multiples help us understand how numbers are related. They are useful in simplifying fractions and solving mathematical problems.",
      sections: [
        {
          heading: "1. Factors",
          content: "A factor divides a number exactly without leaving a remainder. The factors of 12 are 1, 2, 3, 4, 6 and 12."
        },
        {
          heading: "2. Multiples",
          content: "A multiple is obtained by multiplying a number by a whole number. The first five positive multiples of 4 are 4, 8, 12, 16 and 20."
        },
        {
          heading: "3. Common factors",
          content: "Common factors are numbers that divide two or more numbers exactly. The common factors of 8 and 12 are 1, 2 and 4."
        },
        {
          heading: "4. Common multiples",
          content: "Common multiples are multiples shared by two or more numbers. The first positive common multiple of 3 and 4 is 12."
        }
      ],
      workedExamples: [
        {
          question: "List all the factors of 18.",
          answer: "1, 2, 3, 6, 9 and 18."
        },
        {
          question: "Write the first five positive multiples of 6.",
          answer: "6, 12, 18, 24 and 30."
        }
      ],
      keyTerms: [
        "Factor: A number that divides another number exactly.",
        "Multiple: A number obtained through multiplication.",
        "Common factor: A factor shared by two or more numbers.",
        "Common multiple: A multiple shared by two or more numbers."
      ],
      classExercises: [
        {
          question: "List the factors of 10.",
          answer: "1, 2, 5 and 10."
        },
        {
          question: "Write the first four positive multiples of 7.",
          answer: "7, 14, 21 and 28."
        },
        {
          question: "Find the common factors of 6 and 9.",
          answer: "1 and 3."
        }
      ],
      summary: "Factors divide numbers exactly, while multiples are obtained through multiplication.",
      examinationPractice: [
        {
          question: "Which of these is a factor of 20?",
          options: ["3", "6", "5", "7"],
          answer: "5",
          explanation: "20 divided by 5 gives 4 without a remainder."
        }
      ]
    },

    {
      week: 3,
      title: "Prime Numbers and Composite Numbers",
      objectives: [
        "Define prime and composite numbers.",
        "Identify prime numbers.",
        "Distinguish prime numbers from composite numbers."
      ],
      introduction: "Numbers can be classified according to the number of factors they have. Two important groups are prime numbers and composite numbers.",
      sections: [
        {
          heading: "1. Prime numbers",
          content: "A prime number is a whole number greater than 1 that has exactly two factors: 1 and itself. Examples include 2, 3, 5, 7, 11 and 13."
        },
        {
          heading: "2. Composite numbers",
          content: "A composite number has more than two factors. Examples include 4, 6, 8, 9, 10 and 12."
        },
        {
          heading: "3. The number one",
          content: "The number 1 is neither prime nor composite because it has only one factor."
        }
      ],
      workedExamples: [
        {
          question: "Is 7 prime or composite?",
          answer: "Prime. Its only factors are 1 and 7."
        },
        {
          question: "Is 12 prime or composite?",
          answer: "Composite. Its factors include 1, 2, 3, 4, 6 and 12."
        }
      ],
      keyTerms: [
        "Prime number: A number with exactly two factors.",
        "Composite number: A number with more than two factors."
      ],
      classExercises: [
        {
          question: "Is 11 prime or composite?",
          answer: "Prime."
        },
        {
          question: "Is 15 prime or composite?",
          answer: "Composite."
        }
      ],
      summary: "Prime numbers have exactly two factors. Composite numbers have more than two factors. One is neither prime nor composite."
    },

    {
      week: 4,
      title: "Highest Common Factor (HCF)",
      objectives: [
        "Explain the meaning of HCF.",
        "Find factors of given numbers.",
        "Calculate the HCF of two or more numbers."
      ],
      introduction: "The Highest Common Factor is the greatest number that divides two or more numbers exactly.",
      sections: [
        {
          heading: "1. Finding the HCF by listing factors",
          content: "List the factors of each number. Identify the factors they share and select the greatest one."
        },
        {
          heading: "2. Example",
          content: "Factors of 12 are 1, 2, 3, 4, 6 and 12. Factors of 18 are 1, 2, 3, 6, 9 and 18. Their HCF is 6."
        },
        {
          heading: "3. Uses of HCF",
          content: "HCF helps us divide quantities into the largest possible equal groups without leaving anything."
        }
      ],
      workedExamples: [
        {
          question: "Find the HCF of 8 and 12.",
          answer: "Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. HCF = 4."
        }
      ],
      keyTerms: [
        "HCF: The greatest factor shared by two or more numbers.",
        "Common factor: A factor shared by different numbers."
      ],
      classExercises: [
        {
          question: "Find the HCF of 10 and 15.",
          answer: "5."
        },
        {
          question: "Find the HCF of 9 and 12.",
          answer: "3."
        }
      ],
      summary: "To find HCF, list the factors of the numbers and choose the greatest common factor."
    },

    {
      week: 5,
      title: "Lowest Common Multiple (LCM)",
      objectives: [
        "Explain the meaning of LCM.",
        "List multiples of numbers.",
        "Find the LCM of two or more numbers."
      ],
      introduction: "The Lowest Common Multiple is the smallest positive number that is a multiple of two or more given numbers.",
      sections: [
        {
          heading: "1. Finding multiples",
          content: "Multiples are found by multiplying a number by 1, 2, 3 and so on."
        },
        {
          heading: "2. Finding the LCM",
          content: "List the multiples of each number. Find the smallest positive number that appears in all the lists."
        },
        {
          heading: "3. Example",
          content: "Multiples of 3 are 3, 6, 9, 12, 15. Multiples of 4 are 4, 8, 12, 16. The LCM is 12."
        }
      ],
      workedExamples: [
        {
          question: "Find the LCM of 2 and 5.",
          answer: "Multiples of 2 include 2, 4, 6, 8, 10. Multiples of 5 include 5, 10, 15. LCM = 10."
        }
      ],
      keyTerms: [
        "LCM: The smallest positive common multiple of given numbers.",
        "Multiple: A product obtained by multiplying a number by a whole number."
      ],
      classExercises: [
        {
          question: "Find the LCM of 3 and 5.",
          answer: "15."
        },
        {
          question: "Find the LCM of 4 and 6.",
          answer: "12."
        }
      ],
      summary: "LCM is the smallest positive number that is a multiple of all the given numbers."
    },

    {
      week: 6,
      title: "Fractions",
      objectives: [
        "Define a fraction.",
        "Identify the numerator and denominator.",
        "Recognise proper, improper and mixed fractions."
      ],
      introduction: "A fraction represents part of a whole or part of a group. It is written using two numbers separated by a line.",
      sections: [
        {
          heading: "1. Numerator and denominator",
          content: "The numerator is the number above the fraction line. The denominator is the number below it. In 3/5, 3 is the numerator and 5 is the denominator."
        },
        {
          heading: "2. Proper fractions",
          content: "A proper fraction has a numerator smaller than its denominator. Example: 2/5."
        },
        {
          heading: "3. Improper fractions",
          content: "An improper fraction has a numerator equal to or greater than its denominator. Example: 7/4."
        },
        {
          heading: "4. Mixed numbers",
          content: "A mixed number contains a whole number and a proper fraction. Example: 1 3/4."
        }
      ],
      workedExamples: [
        {
          question: "Identify the numerator and denominator in 4/9.",
          answer: "Numerator = 4; denominator = 9."
        },
        {
          question: "Classify 3/8.",
          answer: "Proper fraction."
        }
      ],
      keyTerms: [
        "Fraction: Part of a whole.",
        "Numerator: The top number in a fraction.",
        "Denominator: The bottom number in a fraction."
      ],
      classExercises: [
        {
          question: "What is the denominator in 5/8?",
          answer: "8."
        },
        {
          question: "Is 9/4 proper or improper?",
          answer: "Improper."
        }
      ],
      summary: "Fractions represent parts of a whole. The numerator is above the line and the denominator is below it."
    },

    {
      week: 7,
      title: "Equivalent Fractions",
      objectives: [
        "Explain equivalent fractions.",
        "Generate equivalent fractions.",
        "Simplify fractions."
      ],
      introduction: "Equivalent fractions are fractions that have the same value even though their numerators and denominators may be different.",
      sections: [
        {
          heading: "1. Meaning of equivalent fractions",
          content: "One half, 1/2, is equal to 2/4 and 3/6. These fractions represent the same amount."
        },
        {
          heading: "2. Generating equivalent fractions",
          content: "Multiply or divide both the numerator and denominator by the same non-zero number."
        },
        {
          heading: "3. Simplifying fractions",
          content: "Divide the numerator and denominator by their highest common factor to obtain the simplest form."
        }
      ],
      workedExamples: [
        {
          question: "Write an equivalent fraction for 2/3 by multiplying by 2.",
          answer: "2/3 × 2/2 = 4/6."
        },
        {
          question: "Simplify 6/8.",
          answer: "Divide both numbers by 2. The answer is 3/4."
        }
      ],
      keyTerms: [
        "Equivalent fractions: Fractions with equal values.",
        "Simplest form: A fraction that cannot be reduced further."
      ],
      classExercises: [
        {
          question: "Give an equivalent fraction for 1/3.",
          answer: "2/6."
        },
        {
          question: "Simplify 4/8.",
          answer: "1/2."
        }
      ],
      summary: "Equivalent fractions have the same value. Simplify a fraction by dividing its numerator and denominator by a common factor."
    },

    {
      week: 8,
      title: "Addition and Subtraction of Fractions",
      objectives: [
        "Add fractions with the same denominator.",
        "Subtract fractions with the same denominator.",
        "Work with fractions having different denominators."
      ],
      introduction: "Fractions can be added and subtracted. The method depends on whether their denominators are the same or different.",
      sections: [
        {
          heading: "1. Same denominators",
          content: "Add or subtract the numerators and keep the denominator unchanged. For example, 2/7 + 3/7 = 5/7."
        },
        {
          heading: "2. Different denominators",
          content: "Find a common denominator, convert the fractions into equivalent fractions, then add or subtract."
        },
        {
          heading: "3. Example with different denominators",
          content: "1/2 + 1/4 = 2/4 + 1/4 = 3/4."
        }
      ],
      workedExamples: [
        {
          question: "Calculate 3/8 + 2/8.",
          answer: "5/8."
        },
        {
          question: "Calculate 3/4 - 1/4.",
          answer: "2/4 = 1/2."
        }
      ],
      keyTerms: [
        "Common denominator: A denominator shared by fractions.",
        "Addition: Combining quantities.",
        "Subtraction: Finding the difference between quantities."
      ],
      classExercises: [
        {
          question: "Calculate 2/9 + 4/9.",
          answer: "6/9 = 2/3."
        },
        {
          question: "Calculate 5/6 - 2/6.",
          answer: "3/6 = 1/2."
        }
      ],
      summary: "For fractions with the same denominator, work with the numerators. For different denominators, first find a common denominator."
    },

    {
      week: 9,
      title: "Multiplication and Division of Fractions",
      objectives: [
        "Multiply two fractions.",
        "Divide one fraction by another.",
        "Simplify answers."
      ],
      introduction: "Multiplication and division are important operations used when working with fractions.",
      sections: [
        {
          heading: "1. Multiplication",
          content: "Multiply the numerators together and multiply the denominators together. Simplify the result where possible."
        },
        {
          heading: "2. Division",
          content: "To divide by a fraction, multiply by its reciprocal. The reciprocal is obtained by interchanging the numerator and denominator."
        },
        {
          heading: "3. Example",
          content: "1/2 × 2/3 = 2/6 = 1/3. For division, 1/2 ÷ 1/4 = 1/2 × 4/1 = 2."
        }
      ],
      workedExamples: [
        {
          question: "Calculate 2/3 × 3/4.",
          answer: "6/12 = 1/2."
        },
        {
          question: "Calculate 3/5 ÷ 1/2.",
          answer: "3/5 × 2/1 = 6/5 = 1 1/5."
        }
      ],
      keyTerms: [
        "Reciprocal: A fraction obtained by interchanging the numerator and denominator.",
        "Product: The result of multiplication.",
        "Quotient: The result of division."
      ],
      classExercises: [
        {
          question: "Calculate 1/2 × 1/3.",
          answer: "1/6."
        },
        {
          question: "Calculate 2/3 ÷ 1/3.",
          answer: "2."
        }
      ],
      summary: "Multiply fractions by multiplying their numerators and denominators. Divide by multiplying by the reciprocal of the second fraction."
    },

    {
      week: 10,
      title: "Decimals",
      objectives: [
        "Explain decimal numbers.",
        "Identify decimal place values.",
        "Convert simple fractions to decimals."
      ],
      introduction: "Decimals are another way of writing fractions. A decimal point separates the whole-number part from the fractional part.",
      sections: [
        {
          heading: "1. Decimal place values",
          content: "The first digit after the decimal point represents tenths. The second represents hundredths, and the third represents thousandths."
        },
        {
          heading: "2. Reading decimals",
          content: "0.5 is read as five tenths or zero point five. 0.25 is twenty-five hundredths."
        },
        {
          heading: "3. Fractions and decimals",
          content: "A fraction with denominator 10, 100 or 1000 can be written as a decimal by using the appropriate decimal places."
        }
      ],
      workedExamples: [
        {
          question: "Write 5/10 as a decimal.",
          answer: "0.5."
        },
        {
          question: "What is the value of 7 in 3. seventy-five?",
          answer: "The 7 is in the tenths position, so its value is 0.7."
        }
      ],
      keyTerms: [
        "Decimal: A number written using a decimal point.",
        "Tenths: The first place after the decimal point.",
        "Hundredths: The second place after the decimal point."
      ],
      classExercises: [
        {
          question: "Write 25/100 as a decimal.",
          answer: "0.25."
        },
        {
          question: "What is the tenths digit in 4.68?",
          answer: "6."
        }
      ],
      summary: "Decimals use a decimal point. Digits after the point represent tenths, hundredths, thousandths and smaller parts."
    },

    {
      week: 11,
      title: "Addition and Subtraction of Decimals",
      objectives: [
        "Add decimal numbers.",
        "Subtract decimal numbers.",
        "Arrange decimal points correctly."
      ],
      introduction: "Decimal numbers can be added and subtracted using place value. The decimal points must be aligned correctly.",
      sections: [
        {
          heading: "1. Adding decimals",
          content: "Write the numbers so that their decimal points are directly under one another. Add the numbers as with whole numbers."
        },
        {
          heading: "2. Subtracting decimals",
          content: "Align the decimal points and subtract. Add zeros at the end when necessary to make the decimal places equal."
        }
      ],
      workedExamples: [
        {
          question: "Calculate 2.5 + 1.3.",
          answer: "3.8."
        },
        {
          question: "Calculate 5.7 - 2.4.",
          answer: "3.3."
        }
      ],
      keyTerms: [
        "Decimal point: The point separating whole numbers from decimal parts.",
        "Place value: The value of a digit according to its position."
      ],
      classExercises: [
        {
          question: "Calculate 3.2 + 4.5.",
          answer: "7.7."
        },
        {
          question: "Calculate 8.6 - 3.1.",
          answer: "5.5."
        }
      ],
      summary: "Always align decimal points when adding or subtracting decimals."
    },

    {
      week: 12,
      title: "Revision and First Term Assessment",
      objectives: [
        "Review the topics covered during the term.",
        "Solve questions on number operations.",
        "Identify areas that need further practice."
      ],
      introduction: "This week is for revising the major topics studied during the first term and practising assessment questions.",
      sections: [
        {
          heading: "1. Number concepts",
          content: "Revise number bases, place value, factors, multiples, prime numbers, composite numbers, HCF and LCM."
        },
        {
          heading: "2. Fractions",
          content: "Revise types of fractions, equivalent fractions, simplification, addition, subtraction, multiplication and division."
        },
        {
          heading: "3. Decimals",
          content: "Revise decimal place values, conversion between simple fractions and decimals, and decimal addition and subtraction."
        }
      ],
      workedExamples: [
        {
          question: "Find the HCF of 12 and 18.",
          answer: "6."
        },
        {
          question: "Calculate 1/2 + 1/4.",
          answer: "3/4."
        },
        {
          question: "Calculate 2.4 + 1.5.",
          answer: "3.9."
        }
      ],
      keyTerms: [
        "Revision: Reviewing previously learned topics.",
        "Assessment: An exercise used to check learning."
      ],
      classExercises: [
        {
          question: "List the prime numbers between 1 and 10.",
          answer: "2, 3, 5 and 7."
        },
        {
          question: "Find the LCM of 4 and 6.",
          answer: "12."
        },
        {
          question: "Simplify 8/12.",
          answer: "2/3."
        }
      ],
      summary: "Revision helps learners remember important concepts and prepare for assessment.",
      examinationPractice: [
        {
          question: "What is the HCF of 8 and 12?",
          options: ["2", "4", "6", "8"],
          answer: "4",
          explanation: "The common factors are 1, 2 and 4. The greatest is 4."
        },
        {
          question: "Calculate 1/2 + 1/4.",
          options: ["1/4", "2/4", "3/4", "1"],
          answer: "3/4",
          explanation: "Convert 1/2 to 2/4, then add 2/4 + 1/4."
        }
      ]
    }

  ];

})();
