(function () {
  window.EXAM_MASTER_LESSONS =
    window.EXAM_MASTER_LESSONS || {};

  window.EXAM_MASTER_LESSONS["JSS 1"] =
    window.EXAM_MASTER_LESSONS["JSS 1"] || {};

  window.EXAM_MASTER_LESSONS["JSS 1"]["First Term"] =
    window.EXAM_MASTER_LESSONS["JSS 1"]["First Term"] || {};

  window.EXAM_MASTER_LESSONS["JSS 1"]["First Term"]["Mathematics"] = [
    {
      week: 1,
      title: "Number Bases and Place Value",
      objectives: [
        "Understand place value.",
        "Read and write whole numbers.",
        "Identify the value of digits."
      ],
      introduction: "Numbers are made up of digits. The position of each digit determines its value.",
      sections: [
        {
          heading: "Place Value",
          content: "In the number 4,582, 4 represents thousands, 5 represents hundreds, 8 represents tens and 2 represents units."
        },
        {
          heading: "Expanded Form",
          content: "4,582 = 4,000 + 500 + 80 + 2."
        },
        {
          heading: "Number Bases",
          content: "A number base tells us how many different digits are used in a number system. The decimal system uses base 10 and the binary system uses base 2."
        }
      ],
      workedExamples: [
        {
          question: "What is the value of 7 in 3,754?",
          solution: "The digit 7 is in the hundreds position. Its value is 700."
        },
        {
          question: "Write 6,321 in expanded form.",
          solution: "6,000 + 300 + 20 + 1."
        }
      ],
      keyTerms: ["Digit", "Place value", "Expanded form", "Number base"],
      classExercises: [
        "State the place value of 5 in 5,234.",
        "Write 8,419 in expanded form.",
        "What is the value of 6 in 2,641?"
      ],
      summary: "The position of a digit determines its place value. Expanded form separates a number according to the values of its digits.",
      examinationPractice: [
        {
          question: "What is the value of 8 in 4,825?",
          answer: "800",
          explanation: "8 is in the hundreds position."
        }
      ]
    },
    {
      week: 2,
      title: "Factors and Multiples",
      objectives: [
        "Define factors and multiples.",
        "Find factors of whole numbers.",
        "List multiples of given numbers."
      ],
      introduction: "Factors and multiples help us understand how numbers are related through multiplication and division.",
      sections: [
        {
          heading: "Factors",
          content: "A factor is a whole number that divides another number exactly, without leaving a remainder. For example, the factors of 12 are 1, 2, 3, 4, 6 and 12."
        },
        {
          heading: "Multiples",
          content: "A multiple is the result of multiplying a number by a whole number. Multiples of 4 include 4, 8, 12, 16 and 20."
        }
      ],
      workedExamples: [
        {
          question: "List all factors of 18.",
          solution: "1, 2, 3, 6, 9 and 18."
        },
        {
          question: "Write the first five positive multiples of 7.",
          solution: "7, 14, 21, 28 and 35."
        }
      ],
      keyTerms: ["Factor", "Multiple", "Division", "Multiplication"],
      classExercises: [
        "List all factors of 20.",
        "Write the first six multiples of 5.",
        "Is 4 a factor of 28? Explain."
      ],
      summary: "Factors divide a number exactly, while multiples are obtained by multiplying a number by whole numbers."
    },
    {
      week: 3,
      title: "Prime and Composite Numbers",
      objectives: [
        "Define prime numbers.",
        "Define composite numbers.",
        "Distinguish prime numbers from composite numbers."
      ],
      introduction: "Numbers can be classified according to how many factors they have.",
      sections: [
        {
          heading: "Prime Numbers",
          content: "A prime number has exactly two different factors: 1 and itself. Examples are 2, 3, 5, 7, 11 and 13."
        },
        {
          heading: "Composite Numbers",
          content: "A composite number has more than two factors. Examples include 4, 6, 8, 9, 10 and 12."
        },
        {
          heading: "Special Case",
          content: "The number 1 is neither prime nor composite. The number 2 is the only even prime number."
        }
      ],
      workedExamples: [
        {
          question: "Is 13 a prime number?",
          solution: "Yes. Its only factors are 1 and 13."
        },
        {
          question: "Is 15 a composite number?",
          solution: "Yes. Its factors include 1, 3, 5 and 15."
        }
      ],
      keyTerms: ["Prime number", "Composite number", "Factor"],
      classExercises: [
        "Classify 7, 9, 11 and 15.",
        "Explain why 1 is neither prime nor composite.",
        "Write five prime numbers."
      ],
      summary: "Prime numbers have exactly two factors. Composite numbers have more than two factors."
    },
    {
      week: 4,
      title: "Highest Common Factor (HCF)",
      objectives: [
        "Explain the meaning of HCF.",
        "Find common factors.",
        "Calculate the HCF of whole numbers."
      ],
      introduction: "The Highest Common Factor is the greatest number that divides two or more numbers exactly.",
      sections: [
        {
          heading: "Finding HCF by Listing Factors",
          content: "List the factors of each number, identify the common factors and select the greatest one."
        },
        {
          heading: "Example of Common Factors",
          content: "Factors of 12 are 1, 2, 3, 4, 6 and 12. Factors of 18 are 1, 2, 3, 6, 9 and 18. Their HCF is 6."
        }
      ],
      workedExamples: [
        {
          question: "Find the HCF of 8 and 12.",
          solution: "Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. The HCF is 4."
        }
      ],
      keyTerms: ["HCF", "Common factor", "Greatest"],
      classExercises: [
        "Find the HCF of 6 and 9.",
        "Find the HCF of 10 and 15.",
        "Find the HCF of 12 and 20."
      ],
      summary: "The HCF is the greatest factor shared by two or more numbers."
    },
    {
      week: 5,
      title: "Lowest Common Multiple (LCM)",
      objectives: [
        "Explain the meaning of LCM.",
        "List multiples of numbers.",
        "Calculate the LCM of whole numbers."
      ],
      introduction: "The Lowest Common Multiple is the smallest positive number that is a multiple of two or more numbers.",
      sections: [
        {
          heading: "Finding LCM by Listing Multiples",
          content: "List the multiples of each number and identify the smallest positive multiple they share."
        },
        {
          heading: "Example",
          content: "Multiples of 3 are 3, 6, 9, 12, 15. Multiples of 4 are 4, 8, 12, 16. Their LCM is 12."
        }
      ],
      workedExamples: [
        {
          question: "Find the LCM of 5 and 10.",
          solution: "Multiples of 5: 5, 10, 15, 20. Multiples of 10: 10, 20, 30. The LCM is 10."
        }
      ],
      keyTerms: ["LCM", "Multiple", "Common multiple"],
      classExercises: [
        "Find the LCM of 2 and 3.",
        "Find the LCM of 4 and 6.",
        "Find the LCM of 5 and 15."
      ],
      summary: "The LCM is the smallest positive common multiple of two or more numbers."
    },
    {
      week: 6,
      title: "Introduction to Fractions",
      objectives: [
        "Define a fraction.",
        "Identify numerators and denominators.",
        "Recognise proper, improper and mixed fractions."
      ],
      introduction: "A fraction represents part of a whole or part of a group.",
      sections: [
        {
          heading: "Parts of a Fraction",
          content: "In 3/5, the numerator is 3 and the denominator is 5. The numerator tells us how many parts are considered, while the denominator tells us the total number of equal parts."
        },
        {
          heading: "Types of Fractions",
          content: "A proper fraction has a numerator smaller than its denominator. An improper fraction has a numerator equal to or greater than its denominator. A mixed number contains a whole number and a fraction."
        }
      ],
      workedExamples: [
        {
          question: "Identify the numerator and denominator in 4/7.",
          solution: "Numerator = 4. Denominator = 7."
        },
        {
          question: "Convert 7/3 to a mixed number.",
          solution: "7 divided by 3 gives 2 remainder 1. Therefore, 7/3 = 2 1/3."
        }
      ],
      keyTerms: ["Fraction", "Numerator", "Denominator", "Proper fraction", "Improper fraction", "Mixed number"],
      classExercises: [
        "Identify the numerator in 5/8.",
        "State whether 3/7 is proper or improper.",
        "Convert 9/4 to a mixed number."
      ],
      summary: "Fractions represent parts of a whole. The numerator is above the fraction line and the denominator is below it."
    },
    {
      week: 7,
      title: "Equivalent Fractions",
      objectives: [
        "Explain equivalent fractions.",
        "Generate equivalent fractions.",
        "Simplify fractions."
      ],
      introduction: "Equivalent fractions have different numerators and denominators but represent the same value.",
      sections: [
        {
          heading: "Generating Equivalent Fractions",
          content: "Multiply or divide both the numerator and denominator by the same non-zero number."
        },
        {
          heading: "Simplifying Fractions",
          content: "Divide the numerator and denominator by their greatest common factor to obtain a fraction in its simplest form."
        }
      ],
      workedExamples: [
        {
          question: "Find a fraction equivalent to 2/3.",
          solution: "Multiply the numerator and denominator by 2. The result is 4/6."
        },
        {
          question: "Simplify 8/12.",
          solution: "Divide both 8 and 12 by 4. The answer is 2/3."
        }
      ],
      keyTerms: ["Equivalent fractions", "Simplest form", "Numerator", "Denominator"],
      classExercises: [
        "Write two fractions equivalent to 1/2.",
        "Simplify 6/9.",
        "Simplify 10/15."
      ],
      summary: "Equivalent fractions represent the same quantity. Simplification produces an equivalent fraction in its simplest form."
    },
    {
      week: 8,
      title: "Addition and Subtraction of Fractions",
      objectives: [
        "Add fractions with common denominators.",
        "Subtract fractions with common denominators.",
        "Work with fractions having different denominators."
      ],
      introduction: "Fractions can be added or subtracted by following rules for their denominators.",
      sections: [
        {
          heading: "Same Denominators",
          content: "When denominators are the same, add or subtract the numerators and keep the denominator unchanged."
        },
        {
          heading: "Different Denominators",
          content: "Find a common denominator, convert the fractions to equivalent fractions, and then add or subtract."
        }
      ],
      workedExamples: [
        {
          question: "Calculate 2/7 + 3/7.",
          solution: "Add the numerators: 2 + 3 = 5. Answer = 5/7."
        },
        {
          question: "Calculate 3/4 - 1/4.",
          solution: "3 - 1 = 2. Therefore 2/4 = 1/2."
        },
        {
          question: "Calculate 1/2 + 1/3.",
          solution: "The common denominator is 6. 1/2 = 3/6 and 1/3 = 2/6. Answer = 5/6."
        }
      ],
      keyTerms: ["Addition", "Subtraction", "Common denominator"],
      classExercises: [
        "Calculate 1/5 + 2/5.",
        "Calculate 5/8 - 2/8.",
        "Calculate 1/3 + 1/6."
      ],
      summary: "Use a common denominator before adding or subtracting fractions with different denominators."
    },
    {
      week: 9,
      title: "Multiplication and Division of Fractions",
      objectives: [
        "Multiply fractions.",
        "Divide fractions.",
        "Simplify answers."
      ],
      introduction: "Multiplication and division of fractions use different rules from addition and subtraction.",
      sections: [
        {
          heading: "Multiplication",
          content: "Multiply the numerators together and multiply the denominators together. Simplify the answer where possible."
        },
        {
          heading: "Division",
          content: "To divide by a fraction, multiply by its reciprocal. The reciprocal is obtained by interchanging the numerator and denominator."
        }
      ],
      workedExamples: [
        {
          question: "Calculate 2/3 × 3/4.",
          solution: "Multiply: 2 × 3 = 6 and 3 × 4 = 12. Simplify 6/12 to get 1/2."
        },
        {
          question: "Calculate 1/2 ÷ 1/4.",
          solution: "Change division to multiplication by the reciprocal: 1/2 × 4/1 = 4/2 = 2."
        }
      ],
      keyTerms: ["Multiplication", "Division", "Reciprocal", "Simplification"],
      classExercises: [
        "Calculate 1/2 × 2/3.",
        "Calculate 3/5 × 5/6.",
        "Calculate 1/3 ÷ 1/6."
      ],
      summary: "Multiply fractions straight across. For division, multiply by the reciprocal of the second fraction."
    },
    {
      week: 10,
      title: "Introduction to Decimals",
      objectives: [
        "Explain decimal numbers.",
        "Identify decimal place values.",
        "Convert simple fractions to decimals."
      ],
      introduction: "Decimals are another way of representing parts of a whole. They use a decimal point to separate whole numbers from fractional parts.",
      sections: [
        {
          heading: "Decimal Place Values",
          content: "The first digit after the decimal point represents tenths, the second represents hundredths and the third represents thousandths."
        },
        {
          heading: "Fractions and Decimals",
          content: "A fraction with denominator 10, 100 or 1000 can be written as a decimal by placing the digits in the appropriate decimal positions."
        }
      ],
      workedExamples: [
        {
          question: "What is the value of 7 in 3.75?",
          solution: "The digit 7 is in the tenths position. Its value is 0.7."
        },
        {
          question: "Convert 25/100 to a decimal.",
          solution: "25/100 = 0.25."
        }
      ],
      keyTerms: ["Decimal", "Decimal point", "Tenths", "Hundredths", "Thousandths"],
      classExercises: [
        "State the place value of 4 in 2.45.",
        "Convert 5/10 to a decimal.",
        "Write 0.75 as a fraction out of 100."
      ],
      summary: "Decimal place value depends on the position of digits after the decimal point."
    },
    {
      week: 11,
      title: "Addition and Subtraction of Decimals",
      objectives: [
        "Add decimal numbers.",
        "Subtract decimal numbers.",
        "Arrange decimal points correctly."
      ],
      introduction: "Decimal numbers can be added and subtracted using place value.",
      sections: [
        {
          heading: "Adding Decimals",
          content: "Write the numbers vertically with decimal points directly below each other. Add zeros where needed and add normally."
        },
        {
          heading: "Subtracting Decimals",
          content: "Align the decimal points, add zeros where needed and subtract carefully, borrowing when necessary."
        }
      ],
      workedExamples: [
        {
          question: "Calculate 2.35 + 1.20.",
          solution: "2.35 + 1.20 = 3.55."
        },
        {
          question: "Calculate 5.60 - 2.25.",
          solution: "5.60 - 2.25 = 3.35."
        }
      ],
      keyTerms: ["Decimal addition", "Decimal subtraction", "Place value"],
      classExercises: [
        "Calculate 1.25 + 2.50.",
        "Calculate 4.75 - 1.25.",
        "Calculate 3.60 + 0.45."
      ],
      summary: "Always align decimal points when adding or subtracting decimal numbers."
    },
    {
      week: 12,
      title: "First Term Revision and Assessment",
      objectives: [
        "Review the topics covered during the term.",
        "Solve mixed mathematics questions.",
        "Identify topics that need more practice."
      ],
      introduction: "Revision helps learners remember important ideas and prepare for assessment.",
      sections: [
        {
          heading: "Topics to Revise",
          content: "Revise place value, number bases, factors, multiples, prime and composite numbers, HCF, LCM, fractions and decimals."
        },
        {
          heading: "Revision Advice",
          content: "Read each topic, study worked examples, attempt exercises independently and check your answers."
        }
      ],
      workedExamples: [
        {
          question: "Find the HCF of 12 and 18.",
          solution: "The common factors are 1, 2, 3 and 6. The HCF is 6."
        },
        {
          question: "Calculate 1/2 + 1/4.",
          solution: "1/2 = 2/4. Therefore 2/4 + 1/4 = 3/4."
        }
      ],
      keyTerms: ["Revision", "Assessment", "Practice"],
      classExercises: [
        "List the factors of 24.",
        "Find the LCM of 3 and 5.",
        "Simplify 12/16.",
        "Calculate 2/5 + 1/5.",
        "Calculate 3.5 + 2.25."
      ],
      summary: "Regular practice and revision improve mathematical understanding and problem-solving skills."
    }
  ];
})();
