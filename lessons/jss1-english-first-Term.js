
(function () {
  "use strict";

  const library = window.EXAM_MASTER && window.EXAM_MASTER.library;

  if (!library || typeof library.addLesson !== "function") {
    console.error("Load lesson-library.js before this file.");
    return;
  }

  const lessons = [
    {
      week: 1,
      title: "Comprehension: Reading for Meaning",
      objectives: [
        "Explain reading comprehension.",
        "Identify the main idea and supporting details.",
        "Answer questions using information in a passage."
      ],
      introduction: "Comprehension is the ability to read, understand and explain the meaning of a written passage. A good reader understands not only individual words but also the message communicated by the writer.",
      sections: [
        {
          heading: "Meaning of comprehension",
          content: "Reading comprehension involves understanding facts, ideas, events and opinions in a passage. It requires attention, vocabulary knowledge and the ability to connect information."
        },
        {
          heading: "Main idea",
          content: "The main idea is the most important point in a passage or paragraph. Ask yourself: What is this passage mostly about? The main idea may be stated directly or understood from several details."
        },
        {
          heading: "Supporting details",
          content: "Supporting details explain or provide evidence for the main idea. They may include examples, reasons, descriptions, facts and events."
        },
        {
          heading: "Practice passage",
          content: "Amina lives near her school. Every morning, she arranges her books before leaving home. She walks with her younger brother and they arrive before the bell. Amina enjoys reading because books help her learn new things."
        },
        {
          heading: "How to answer questions",
          content: "Read the passage carefully. Read each question and locate the relevant information. Answer in a complete sentence when required. Do not introduce information that is not supported by the passage."
        }
      ],
      keyTerms: [
        "Comprehension: understanding a written or spoken message.",
        "Passage: a section of written material.",
        "Main idea: the central message.",
        "Supporting detail: information that explains the main idea."
      ],
      workedExamples: [
        {
          question: "What is the passage mainly about?",
          solution: "It is about Amina's morning routine and her interest in reading."
        },
        {
          question: "Why does Amina enjoy reading?",
          solution: "She enjoys reading because books help her learn new things."
        }
      ],
      classExercises: [
        {
          question: "Who walks with Amina?",
          answer: "Her younger brother."
        },
        {
          question: "State one detail that shows Amina is organised.",
          answer: "She arranges her books before leaving home."
        },
        {
          question: "Explain comprehension in your own words.",
          answer: "It is understanding the meaning and message of what we read."
        }
      ],
      commonMistakes: [
        "Guessing answers without reading the passage.",
        "Confusing the main idea with a minor detail.",
        "Writing an answer that does not address the question."
      ],
      summary: "Good comprehension requires careful reading, identifying the main idea, understanding supporting details and answering questions accurately.",
      examinationPractice: [
        {
          question: "What is the main idea of a passage?",
          answer: "The central message or most important point.",
          explanation: "Supporting details explain the central message."
        }
      ]
    },

    {
      week: 2,
      title: "Parts of Speech: Nouns and Pronouns",
      objectives: [
        "Define nouns and pronouns.",
        "Identify different types of nouns.",
        "Use pronouns correctly in sentences."
      ],
      introduction: "Words perform different functions in sentences. Nouns name people, places, animals, objects and ideas. Pronouns take the place of nouns.",
      sections: [
        {
          heading: "Meaning of nouns",
          content: "A noun is a naming word. Examples include teacher, Lagos, goat, table, school, honesty and happiness."
        },
        {
          heading: "Types of nouns",
          content: "Common nouns name general things, such as boy and city. Proper nouns give special names, such as Musa and Abuja. Collective nouns name groups, such as team, class and flock. Abstract nouns name qualities or ideas, such as courage and kindness. Concrete nouns name things that can be experienced through the senses, such as stone and orange."
        },
        {
          heading: "Pronouns",
          content: "A pronoun replaces a noun to prevent unnecessary repetition. Examples include I, you, he, she, it, we and they. Object pronouns include me, him, her, us and them."
        },
        {
          heading: "Possessive and demonstrative pronouns",
          content: "Possessive pronouns show ownership: mine, yours, his, hers, ours and theirs. Demonstrative pronouns point to things: this, that, these and those."
        },
        {
          heading: "Using pronouns correctly",
          content: "A pronoun should refer clearly to the noun it replaces. In 'Bola has a bag. She keeps it safely', she refers to Bola and it refers to the bag."
        }
      ],
      keyTerms: [
        "Noun: a naming word.",
        "Pronoun: a word used instead of a noun.",
        "Proper noun: the special name of a person or place.",
        "Collective noun: a noun naming a group.",
        "Abstract noun: a noun naming an idea or quality."
      ],
      workedExamples: [
        {
          question: "Identify the nouns in: The farmer feeds the chickens.",
          solution: "Farmer and chickens."
        },
        {
          question: "Replace Tunde and I with one pronoun.",
          solution: "We."
        },
        {
          question: "Mary said ___ was ready. Choose the correct pronoun.",
          solution: "She. The sentence becomes: Mary said she was ready."
        }
      ],
      classExercises: [
        {
          question: "Identify the proper nouns: Kemi visited Abuja.",
          answer: "Kemi and Abuja."
        },
        {
          question: "Give a collective noun for a group of players.",
          answer: "Team."
        },
        {
          question: "Replace the children with a pronoun.",
          answer: "They."
        }
      ],
      commonMistakes: [
        "Writing proper nouns without capital letters.",
        "Using a pronoun whose reference is unclear.",
        "Confusing a common noun with a proper noun."
      ],
      summary: "Nouns name people, places, things and ideas. Pronouns replace nouns and should refer clearly to the correct person or thing.",
      examinationPractice: [
        {
          question: "What type of noun is honesty?",
          answer: "Abstract noun.",
          explanation: "Honesty is a quality rather than a physical object."
        }
      ]
    },

    {
      week: 3,
      title: "Verbs, Tenses and Subject-Verb Agreement",
      objectives: [
        "Define and identify verbs.",
        "Recognise present, past and future tenses.",
        "Use subject-verb agreement correctly."
      ],
      introduction: "A verb expresses an action, occurrence or state. Tense shows when an action happens. Subject-verb agreement means using a verb form that matches its subject.",
      sections: [
        {
          heading: "Meaning and types of verbs",
          content: "Action verbs show activities: run, write, sing and jump. Linking verbs connect a subject to information about it: is, are, was and seem. Helping verbs assist the main verb, such as has, have, will and can."
        },
        {
          heading: "Present tense",
          content: "The simple present tense describes habits, repeated actions and facts. Examples: I read every day. The sun rises in the east. She plays football."
        },
        {
          heading: "Past tense",
          content: "The simple past tense describes completed actions. Regular verbs commonly take -ed: walk becomes walked. Irregular verbs change differently: go becomes went; eat becomes ate."
        },
        {
          heading: "Future tense",
          content: "The simple future can be formed with will and the base form of a verb. Example: She will visit her aunt tomorrow."
        },
        {
          heading: "Subject-verb agreement",
          content: "A singular subject normally takes a singular present-tense verb: The boy plays. A plural subject takes a plural verb: The boys play. The verb must agree with the actual subject."
        }
      ],
      keyTerms: [
        "Verb: a word expressing an action or state.",
        "Tense: the form showing the time of an action.",
        "Subject: the person or thing a sentence is about.",
        "Agreement: matching the verb to its subject."
      ],
      workedExamples: [
        {
          question: "Identify the verb: The pupils cleaned the classroom.",
          solution: "Cleaned."
        },
        {
          question: "Change I walk to school to past tense.",
          solution: "I walked to school."
        },
        {
          question: "Choose: The girls (sings/sing) well.",
          solution: "Sing, because girls is plural."
        }
      ],
      classExercises: [
        {
          question: "Identify the verb: Dad repaired the chair.",
          answer: "Repaired."
        },
        {
          question: "Change She cooks rice to future tense.",
          answer: "She will cook rice."
        },
        {
          question: "Choose: The teacher (explain/explains) the lesson.",
          answer: "Explains."
        }
      ],
      commonMistakes: [
        "Using a singular verb with a plural subject.",
        "Using the wrong form of an irregular verb.",
        "Changing tense without considering the time of the action."
      ],
      summary: "Verbs express actions or states. Tense shows time, and subject-verb agreement helps sentences remain grammatically correct.",
      examinationPractice: [
        {
          question: "Choose the correct sentence: The dog bark/barks loudly.",
          answer: "The dog barks loudly.",
          explanation: "Dog is a singular subject."
        }
      ]
    },

    {
      week: 4,
      title: "Adjectives and Adverbs",
      objectives: [
        "Define adjectives and adverbs.",
        "Identify adjectives and adverbs in sentences.",
        "Use comparison correctly."
      ],
      introduction: "Adjectives and adverbs provide additional information. An adjective describes a noun or pronoun, while an adverb commonly modifies a verb, adjective or another adverb.",
      sections: [
        {
          heading: "Adjectives",
          content: "An adjective describes a noun or pronoun. Examples: a tall building, a red bag, three oranges and a careful driver. Adjectives may describe colour, size, quality, number or ownership."
        },
        {
          heading: "Comparison of adjectives",
          content: "The comparative form compares two things: taller, smaller and more careful. The superlative form compares three or more: tallest, smallest and most careful. Some adjectives change irregularly: good, better, best."
        },
        {
          heading: "Adverbs",
          content: "Adverbs can tell how, when, where or how often an action happens. Examples: carefully, yesterday, outside and always. Many adverbs end in -ly, but not all do."
        },
        {
          heading: "Using adjectives and adverbs",
          content: "In 'The careful girl writes neatly', careful describes girl and neatly describes how she writes."
        }
      ],
      keyTerms: [
        "Adjective: a word that describes a noun or pronoun.",
        "Adverb: a word that modifies a verb, adjective or adverb.",
        "Comparative: a form used to compare two.",
        "Superlative: a form used to compare three or more."
      ],
      workedExamples: [
        {
          question: "Identify the adjective: We saw a beautiful garden.",
          solution: "Beautiful describes garden."
        },
        {
          question: "Identify the adverb: The baby slept peacefully.",
          solution: "Peacefully describes how the baby slept."
        },
        {
          question: "Give the comparative and superlative of small.",
          solution: "Smaller and smallest."
        }
      ],
      classExercises: [
        {
          question: "Find the adjective: The red bus stopped.",
          answer: "Red."
        },
        {
          question: "Find the adverb: He answered politely.",
          answer: "Politely."
        },
        {
          question: "Complete: good, better, ____.",
          answer: "Best."
        }
      ],
      commonMistakes: [
        "Using an adjective where an adverb is required.",
        "Writing double comparisons such as more taller.",
        "Confusing the word being described with the describing word."
      ],
      summary: "Adjectives describe nouns and pronouns. Adverbs provide additional information about verbs, adjectives and other adverbs.",
      examinationPractice: [
        {
          question: "In The athlete ran quickly, identify the adverb.",
          answer: "Quickly.",
          explanation: "Quickly explains how the athlete ran."
        }
      ]
    },

    {
      week: 5,
      title: "Vocabulary Development and Word Meaning",
      objectives: [
        "Explain vocabulary development.",
        "Identify synonyms and antonyms.",
        "Use context clues to understand unfamiliar words."
      ],
      introduction: "Vocabulary refers to the words a person knows and uses. A good vocabulary improves speaking, reading, listening and writing.",
      sections: [
        {
          heading: "Context clues",
          content: "Context clues are hints found around an unfamiliar word. A definition, example, contrast or explanation in the surrounding sentence may help you understand it."
        },
        {
          heading: "Synonyms",
          content: "Synonyms are words with similar meanings. Examples include begin and start, happy and joyful, and silent and quiet. The best synonym depends on how the word is used."
        },
        {
          heading: "Antonyms",
          content: "Antonyms are words with opposite meanings. Examples include hot and cold, early and late, generous and stingy, and ancient and modern."
        },
        {
          heading: "Using a dictionary",
          content: "A dictionary provides spelling, pronunciation, meanings and sometimes examples. Check the meaning that fits the sentence rather than selecting the first meaning automatically."
        },
        {
          heading: "Building vocabulary",
          content: "Read books, listen carefully, learn new words, use them in sentences and check their meanings. Keep a vocabulary notebook for unfamiliar words."
        }
      ],
      keyTerms: [
        "Vocabulary: words known and used by a person.",
        "Context clue: nearby information that helps explain a word.",
        "Synonym: a word with a similar meaning.",
        "Antonym: a word with an opposite meaning."
      ],
      workedExamples: [
        {
          question: "Give a synonym for happy.",
          solution: "Glad or joyful."
        },
        {
          question: "Give an antonym for ancient.",
          solution: "Modern."
        },
        {
          question: "In 'The path was narrow, so only one person could walk on it', what does narrow mean?",
          solution: "Not wide; having little width."
        }
      ],
      classExercises: [
        {
          question: "Give an antonym for generous.",
          answer: "Stingy."
        },
        {
          question: "Give a synonym for silent.",
          answer: "Quiet."
        },
        {
          question: "Mention two things a dictionary can help you find.",
          answer: "Meanings and spelling. It can also provide pronunciation and word information."
        }
      ],
      commonMistakes: [
        "Choosing a synonym that does not fit the sentence.",
        "Ignoring clues in nearby sentences.",
        "Confusing words that look alike but have different meanings."
      ],
      summary: "Build vocabulary by reading widely, using context clues, learning synonyms and antonyms, and consulting a dictionary.",
      examinationPractice: [
        {
          question: "What is an antonym?",
          answer: "A word with an opposite meaning.",
          explanation: "For example, hot and cold are antonyms."
        }
      ]
    },

    {
      week: 6,
      title: "Informal Letter Writing",
      objectives: [
        "Explain an informal letter.",
        "Identify its main parts.",
        "Write a friendly and organised letter."
      ],
      introduction: "An informal letter is a personal letter written to someone the writer knows, such as a friend or relative. It uses a friendly tone but should still be clear and respectful.",
      sections: [
        {
          heading: "Parts of an informal letter",
          content: "A typical informal letter includes the writer's address, date, greeting, introduction, body, conclusion, complimentary close and writer's name. Follow the exact layout taught by your school."
        },
        {
          heading: "Address and date",
          content: "The writer's address tells the reader where the letter was written. The date shows when it was written. These are usually placed at the top."
        },
        {
          heading: "Greeting and introduction",
          content: "A greeting such as Dear Ada begins the letter. The opening paragraph may ask about the reader's welfare and introduce the reason for writing."
        },
        {
          heading: "The body",
          content: "The body contains the main message. Arrange ideas in logical paragraphs. Each paragraph should deal with a particular point."
        },
        {
          heading: "Conclusion and closing",
          content: "The final paragraph brings the message to a close. A suitable complimentary close may be Your friend, Yours sincerely or another friendly expression appropriate to the relationship."
        }
      ],
      keyTerms: [
        "Address: the writer's location.",
        "Greeting: words used to address the reader.",
        "Body: the main message of a letter.",
        "Complimentary close: polite words used before the writer's name."
      ],
      workedExamples: [
        {
          question: "Suggest a suitable greeting to a friend named Musa.",
          solution: "Dear Musa,"
        },
        {
          question: "Who might receive an informal letter?",
          solution: "A friend, cousin, parent or another person known personally."
        }
      ],
      classExercises: [
        {
          question: "List four parts of an informal letter.",
          answer: "Address and date, greeting, body and complimentary close with the writer's name."
        },
        {
          question: "Write two friendly opening sentences to a cousin.",
          answer: "Example: How are you and everyone at home? I hope you are doing well."
        },
        {
          question: "Why should a letter be divided into paragraphs?",
          answer: "Paragraphs organise related ideas and make the letter easier to read."
        }
      ],
      commonMistakes: [
        "Leaving out the date or greeting.",
        "Writing the whole message as one long paragraph.",
        "Using unclear abbreviations and careless punctuation."
      ],
      summary: "An informal letter has a clear purpose, friendly language, organised paragraphs and the expected letter parts.",
      examinationPractice: [
        {
          question: "State one difference between a formal and an informal letter.",
          answer: "An informal letter is usually written to someone known personally and uses a friendlier tone.",
          explanation: "A formal letter is generally written for official or professional purposes."
        }
      ]
    },

    {
      week: 7,
      title: "Reading and Summary Writing",
      objectives: [
        "Identify important points in a passage.",
        "Distinguish main points from minor details.",
        "Write a short and accurate summary."
      ],
      introduction: "A summary gives the important ideas of a longer passage in fewer words. It should keep the original meaning while leaving out unnecessary information.",
      sections: [
        {
          heading: "Finding key points",
          content: "Read the passage carefully. Ask what each paragraph contributes. Identify important facts and ideas. Leave out repeated statements and minor examples unless they are necessary."
        },
        {
          heading: "Writing a summary",
          content: "Combine related points in your own words where possible. Use complete sentences and a logical order. Keep the summary shorter than the original passage and follow any word limit given."
        },
        {
          heading: "Checking your work",
          content: "Compare your summary with the passage. Check that important points are included, the meaning has not changed and no personal opinion has been added."
        },
        {
          heading: "Example",
          content: "Passage: Rain fills rivers, waters crops and supplies homes. Heavy rain can also cause floods. Summary: Rain provides useful water but can also cause flooding."
        }
      ],
      keyTerms: [
        "Summary: a brief account of the main points.",
        "Key point: an important idea.",
        "Concise: expressed clearly in few words.",
        "Paraphrase: expressing an idea in different words without changing its meaning."
      ],
      workedExamples: [
        {
          question: "Why should repeated details be removed from a summary?",
          solution: "They are unnecessary and make the summary longer without adding a new main point."
        },
        {
          question: "Should a summary include the writer's personal opinion?",
          solution: "No. It should report the important ideas in the passage."
        }
      ],
      classExercises: [
        {
          question: "Mention two qualities of a good summary.",
          answer: "It should be concise and accurate."
        },
        {
          question: "What should you identify before writing a summary?",
          answer: "The main ideas and important supporting points."
        },
        {
          question: "Why should a summary not change the writer's meaning?",
          answer: "Because a summary must preserve the original message."
        }
      ],
      commonMistakes: [
        "Copying the entire passage.",
        "Adding personal opinions.",
        "Leaving out the central message.",
        "Including unnecessary examples and repetition."
      ],
      summary: "A good summary is short, accurate, complete and written in clear language.",
      examinationPractice: [
        {
          question: "What is a summary?",
          answer: "A brief account of the main points of a longer text.",
          explanation: "It presents the important ideas without unnecessary details."
        }
      ]
    },

    {
      week: 8,
      title: "Idioms and Figures of Speech",
      objectives: [
        "Explain idioms.",
        "Distinguish literal and figurative meanings.",
        "Identify common figures of speech."
      ],
      introduction: "Writers and speakers sometimes use expressions whose meanings go beyond the ordinary meanings of individual words. These expressions make communication more interesting and effective.",
      sections: [
        {
          heading: "Idioms",
          content: "An idiom is an expression with a special meaning that may be different from the literal meanings of its words. A piece of cake means something is easy. Once in a blue moon means very rarely."
        },
        {
          heading: "Simile",
          content: "A simile compares two different things using like or as. Example: Her voice is as sweet as honey."
        },
        {
          heading: "Metaphor",
          content: "A metaphor describes one thing as another to create a direct comparison. Example: Time is a thief."
        },
        {
          heading: "Personification",
          content: "Personification gives human qualities or actions to non-human things. Example: The wind whispered through the trees."
        },
        {
          heading: "Hyperbole",
          content: "Hyperbole is deliberate exaggeration for emphasis. Example: I have told you a thousand times."
        }
      ],
      keyTerms: [
        "Idiom: an expression with a special meaning.",
        "Simile: a comparison using like or as.",
        "Metaphor: a direct figurative comparison.",
        "Personification: giving human qualities to non-human things.",
        "Hyperbole: deliberate exaggeration."
      ],
      workedExamples: [
        {
          question: "What does once in a blue moon mean?",
          solution: "Very rarely."
        },
        {
          question: "Identify the figure of speech: The stars danced in the sky.",
          solution: "Personification."
        },
        {
          question: "Identify the simile: Her voice is like music.",
          solution: "Like music makes it a simile."
        }
      ],
      classExercises: [
        {
          question: "Explain a piece of cake.",
          answer: "Something very easy."
        },
        {
          question: "Name the figure of speech: He is a shining star.",
          answer: "Metaphor."
        },
        {
          question: "Give an example of personification.",
          answer: "Example: The leaves danced in the breeze."
        }
      ],
      commonMistakes: [
        "Interpreting every idiom literally.",
        "Calling every comparison a simile.",
        "Confusing exaggeration with a factual statement."
      ],
      summary: "Idioms and figures of speech communicate meanings beyond literal words. Context helps readers interpret them.",
      examinationPractice: [
        {
          question: "What figure of speech is used in The classroom was a zoo?",
          answer: "Metaphor.",
          explanation: "The classroom is described as a zoo to suggest noise or disorder."
        }
      ]
    },

    {
      week: 9,
      title: "Descriptive Essay Writing",
      objectives: [
        "Explain descriptive essay writing.",
        "Use sensory details and suitable vocabulary.",
        "Organise a description into paragraphs."
      ],
      introduction: "A descriptive essay helps readers imagine a person, place, object or experience. Good description uses accurate details and an organised structure.",
      sections: [
        {
          heading: "Meaning of descriptive essay",
          content: "A descriptive essay gives a detailed picture of a subject. It may describe a person, place, object, event or experience."
        },
        {
          heading: "Planning",
          content: "Choose the subject and list important details. Consider sight, hearing, smell, touch and, where appropriate, taste. Select details that help the reader form a clear picture."
        },
        {
          heading: "Organisation",
          content: "Begin with an introduction that identifies the subject. Arrange the body paragraphs in a logical order, such as from near to far or from general appearance to specific features. End with a suitable conclusion."
        },
        {
          heading: "Language",
          content: "Use precise nouns, suitable adjectives and strong verbs. Avoid unnecessary repetition. Make sure comparisons are clear and appropriate."
        },
        {
          heading: "Sample description",
          content: "The school library is a quiet and welcoming place. Neatly arranged shelves hold books of different sizes and colours. Sunlight enters through the wide windows, while pupils read quietly at their desks."
        }
      ],
      keyTerms: [
        "Descriptive essay: writing that creates a clear picture of a subject.",
        "Sensory detail: information connected to the senses.",
        "Paragraph: a group of sentences about one main idea.",
        "Conclusion: the final part of a piece of writing."
      ],
      workedExamples: [
        {
          question: "Improve the sentence: The market was nice.",
          solution: "The busy market was filled with colourful stalls, lively voices and the fresh smell of fruit."
        }
      ],
      classExercises: [
        {
          question: "List three things you could describe about your classroom.",
          answer: "Possible answers include desks, windows, lighting, wall charts, sounds and arrangement."
        },
        {
          question: "Write two sentences describing a rainy morning.",
          answer: "Example: Dark clouds covered the sky. Gentle rain tapped against the roof."
        },
        {
          question: "Mention three senses that can help in descriptive writing.",
          answer: "Sight, hearing and smell. Touch and taste may also be used where suitable."
        }
      ],
      commonMistakes: [
        "Listing adjectives without forming clear sentences.",
        "Changing from one idea to another without paragraph order.",
        "Repeating the same describing words.",
        "Using details that do not relate to the subject."
      ],
      summary: "A descriptive essay uses organised paragraphs, precise vocabulary and relevant sensory details to help readers imagine a subject.",
      examinationPractice: [
        {
          question: "Mention three features of a good descriptive essay.",
          answer: "Clear organisation, relevant details and suitable descriptive vocabulary.",
          explanation: "These features help readers form a clear picture."
        }
      ]
    },

    {
      week: 10,
      title: "Revision of First-Term English Studies",
      objectives: [
        "Review grammar and writing topics.",
        "Apply comprehension and vocabulary skills.",
        "Identify areas requiring further practice."
      ],
      introduction: "This lesson reviews important English Studies topics covered during the term. Learners should attempt the questions independently before checking the answers.",
      sections: [
        {
          heading: "Comprehension",
          content: "Revise main ideas, supporting details, direct questions and the use of context clues."
        },
        {
          heading: "Grammar",
          content: "Revise nouns, pronouns, verbs, tenses, subject-verb agreement, adjectives and adverbs."
        },
        {
          heading: "Writing",
          content: "Revise informal letters, summary writing and descriptive essays. Pay attention to organisation, paragraphs, grammar, spelling and punctuation."
        },
        {
          heading: "Vocabulary and figurative language",
          content: "Revise synonyms, antonyms, idioms, similes, metaphors, personification and hyperbole."
        }
      ],
      keyTerms: [
        "Revision: reviewing previously learned work.",
        "Assessment: a task used to check learning.",
        "Proofreading: checking writing for errors."
      ],
      workedExamples: [
        {
          question: "Correct: The boys plays football.",
          solution: "The boys play football. Boys is plural, so the verb is play."
        },
        {
          question: "Identify the figure of speech: The moon smiled at us.",
          solution: "Personification."
        }
      ],
      classExercises: [
        {
          question: "Give a synonym for rapid.",
          answer: "Fast or quick."
        },
        {
          question: "Change to past tense: They visit the library.",
          answer: "They visited the library."
        },
        {
          question: "Identify the word class of bright in a bright light.",
          answer: "Adjective."
        }
      ],
      commonMistakes: [
        "Rushing through instructions.",
        "Failing to check subject-verb agreement.",
        "Ignoring punctuation and paragraphing.",
        "Not reviewing corrected answers."
      ],
      summary: "Use revision to identify strengths and topics that need more practice before assessment.",
      examinationPractice: [
        {
          question: "Write a sentence containing a noun, a verb and an adverb.",
          answer: "Example: The child laughed happily.",
          explanation: "Child is a noun, laughed is a verb and happily is an adverb."
        }
      ]
    },

    {
      week: 11,
      title: "Speech Work: Vowels, Consonants and Syllables",
      objectives: [
        "Distinguish vowel sounds from consonant sounds.",
        "Recognise short and long vowel sounds.",
        "Identify syllables in common words.",
        "Practise clear pronunciation."
      ],
      introduction: "Speech work helps learners pronounce English words clearly. English spelling and pronunciation do not always match, so listening and speaking practice are important.",
      sections: [
        {
          heading: "Vowel sounds",
          content: "Vowel sounds are produced with relatively open airflow through the mouth. Examples of words containing different vowel sounds include sit, seat, cup, cat, pot and food. The vowel letters are a, e, i, o and u, but the same letter may represent different sounds."
        },
        {
          heading: "Consonant sounds",
          content: "Consonant sounds involve some narrowing or blockage of airflow. Examples include /b/ in book, /m/ in man, /t/ in table and /s/ in sun. Some consonants are voiced, while others are voiceless."
        },
        {
          heading: "Short and long vowel sounds",
          content: "English has short and long vowel sounds. Compare the vowel sounds in sit and seat, ship and sheep, and full and fool. Listen carefully because the difference is a difference in sound, not simply the length of the written word."
        },
        {
          heading: "Syllables",
          content: "A syllable is a beat or unit of pronunciation in a word. Cat has one syllable, teacher has two syllables, and computer has three syllables. Say a word slowly to hear its syllables."
        },
        {
          heading: "Word stress and pronunciation",
          content: "Word stress means giving one syllable greater prominence. Speak at a steady pace, pronounce word endings and use a reliable dictionary or teacher's pronunciation model when unsure."
        }
      ],
      keyTerms: [
        "Vowel sound: a speech sound made with relatively open airflow.",
        "Consonant sound: a speech sound involving some narrowing or blockage of airflow.",
        "Syllable: a beat or unit in a spoken word.",
        "Word stress: extra prominence given to one syllable.",
        "Pronunciation: the way a word is spoken."
      ],
      workedExamples: [
        {
          question: "How many syllables are in teacher?",
          solution: "Two: teach-er."
        },
        {
          question: "Is the first sound in book a vowel or consonant sound?",
          solution: "A consonant sound: /b/."
        },
        {
          question: "How many syllables are in computer?",
          solution: "Three: com-pu-ter."
        }
      ],
      classExercises: [
        {
          question: "Count the syllables in beautiful.",
          answer: "Three: beau-ti-ful."
        },
        {
          question: "State one difference between vowel and consonant sounds.",
          answer: "Vowel sounds are produced with relatively open airflow, while consonants involve some narrowing or blockage."
        },
        {
          question: "Give two words beginning with consonant sounds.",
          answer: "Examples: book and table."
        }
      ],
      commonMistakes: [
        "Assuming every vowel letter represents the same sound.",
        "Confusing the number of letters with the number of syllables.",
        "Ignoring word endings when pronouncing words.",
        "Relying only on spelling to determine pronunciation."
      ],
      summary: "Speech work develops clear pronunciation. Learners should distinguish vowel and consonant sounds, recognise syllables and practise word stress.",
      examinationPractice: [
        {
          question: "What is a syllable?",
          answer: "A beat or unit of pronunciation in a word.",
          explanation: "A word may contain one or more syllables."
        },
        {
          question: "How many syllables are in computer?",
          answer: "Three.",
          explanation: "The word can be divided as com-pu-ter."
        }
      ]
    },

    {
      week: 12,
      title: "End-of-Term Revision and Assessment",
      objectives: [
        "Revise the major language and literacy skills taught during the term.",
        "Answer comprehension, grammar and vocabulary questions.",
        "Apply speech-work and writing skills."
      ],
      introduction: "This final lesson consolidates the term's work. Attempt the questions independently before checking the answers. Review any mistakes and practise the topics that are difficult.",
      sections: [
        {
          heading: "Comprehension practice",
          content: "Read the passage carefully. Jide and his classmates cleaned their classroom and planted flowers near the entrance during the school environmental week. Their teacher explained that a clean environment helps people stay comfortable and reduces the spread of some diseases. The pupils agreed to take turns watering the flowers and keeping the area tidy."
        },
        {
          heading: "Comprehension skills",
          content: "Identify the main idea, supporting details and meanings of unfamiliar words. Answer only what each question asks and support your answers with information from the passage."
        },
        {
          heading: "Grammar revision",
          content: "Revise nouns, pronouns, verbs, tenses, subject-verb agreement, adjectives and adverbs. Check that pronouns have clear references and verbs agree with their subjects."
        },
        {
          heading: "Writing revision",
          content: "For an informal letter, include the expected address, date, greeting, organised message and closing. For a descriptive essay, plan the subject, arrange details in paragraphs and use precise vocabulary."
        },
        {
          heading: "Speech work and figurative language",
          content: "Revise syllables, vowel sounds, consonant sounds, word stress, idioms, similes, metaphors, personification and hyperbole."
        }
      ],
      keyTerms: [
        "Revision: careful review of previously learned work.",
        "Assessment: a task used to check understanding.",
        "Proofreading: checking writing for errors.",
        "Paragraph: a group of related sentences about one main idea."
      ],
      workedExamples: [
        {
          question: "What is the main idea of the comprehension passage?",
          solution: "The passage describes pupils taking part in a school environmental activity."
        },
        {
          question: "Identify the verb in: The pupils planted flowers.",
          solution: "Planted."
        },
        {
          question: "Correct: The pupil keep the area tidy.",
          solution: "The pupil keeps the area tidy. The singular subject pupil takes keeps."
        }
      ],
      classExercises: [
        {
          question: "Why did the pupils clean their classroom?",
          answer: "They were taking part in the school environmental week."
        },
        {
          question: "What did the pupils plant?",
          answer: "Flowers."
        },
        {
          question: "Give an antonym for comfortable.",
          answer: "Uncomfortable."
        },
        {
          question: "Choose the correct word: The girls (is/are) ready.",
          answer: "Are."
        },
        {
          question: "Identify the adjective: The tidy classroom looked pleasant.",
          answer: "Tidy describes classroom, and pleasant describes the classroom."
        }
      ],
      commonMistakes: [
        "Answering comprehension questions without reading carefully.",
        "Confusing adjectives with adverbs.",
        "Forgetting paragraph structure in extended writing.",
        "Failing to proofread spelling, punctuation and agreement."
      ],
      summary: "Use the revision questions to check comprehension, grammar, vocabulary, speech work and writing. Review every correction and practise weak areas.",
      examinationPractice: [
        {
          question: "What is a synonym?",
          answer: "A word with a similar meaning to another word.",
          explanation: "For example, begin and start have similar meanings."
        },
        {
          question: "Identify the figure of speech: The wind whispered through the trees.",
          answer: "Personification.",
          explanation: "The wind is given the human action of whispering."
        },
        {
          question: "Change to past tense: She writes a letter.",
          answer: "She wrote a letter.",
          explanation: "Wrote is the past form of write."
        },
        {
          question: "State two features of a good descriptive essay.",
          answer: "Any two: clear organisation, relevant sensory details, precise vocabulary and a suitable conclusion.",
          explanation: "These features help readers form a clear picture."
        }
      ]
    }
  ];

  lessons.forEach(function (lesson) {
    if (!library.getWeek(
      "JSS 1",
      "First Term",
      "English Studies",
      lesson.week
    )) {
      library.addLesson(
        "JSS 1",
        "First Term",
        "English Studies",
        lesson
      );
    }
  });

})();
