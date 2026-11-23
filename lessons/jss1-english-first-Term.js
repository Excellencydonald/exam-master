
(function () {
  "use strict";

  const library = window.EXAM_MASTER && window.EXAM_MASTER.library;

  if (!library || typeof library.addLesson !== "function") {
    console.error("EXAM MASTER lesson library must load before this lesson file.");
    return;
  }

  const lessons = [
    {
      week: 1,
      title: "Introduction to Comprehension and Simple Passages",
      objectives: [
        "Explain what reading comprehension means.",
        "Identify the main idea and supporting details in a short passage.",
        "Answer direct questions using information from a passage."
      ],
      introduction: "Comprehension means understanding what we read. A reader should not only pronounce words but also understand the message, facts and ideas in a passage.",
      sections: [
        { heading: "Reading for meaning", content: "Read the passage carefully from beginning to end. Notice who or what it is about, what happens, where and when events take place, and why they happen. Read a second time when an idea is unclear." },
        { heading: "Main idea and supporting details", content: "The main idea is the central message of a passage. Supporting details explain, describe or provide evidence for that main idea. Ask: What is the passage mostly about?" },
        { heading: "Answering comprehension questions", content: "Read each question and identify the part of the passage that contains the answer. Use your own words when asked, but do not change the meaning. Make sure your answer is supported by the passage." },
        { heading: "Practice passage", content: "Amina lives near her school. Every morning, she arranges her books before leaving home. She walks with her younger brother and they arrive before the bell. Amina enjoys reading because books help her learn new things." }
      ],
      keyTerms: [
        "Comprehension: understanding a text.",
        "Passage: a piece of writing.",
        "Main idea: the central message.",
        "Supporting detail: information that explains the main idea."
      ],
      workedExamples: [
        { question: "What is the passage mainly about?", solution: "It is mainly about Amina's morning routine and her interest in reading." },
        { question: "Why does Amina enjoy reading?", solution: "She enjoys reading because books help her learn new things." }
      ],
      classExercises: [
        { question: "Who walks with Amina?", answer: "Her younger brother." },
        { question: "State one detail that shows Amina is organised.", answer: "She arranges her books before leaving home." },
        { question: "Explain comprehension in your own words.", answer: "It is understanding the meaning and message of what we read." }
      ],
      commonMistakes: [
        "Copying a sentence that does not answer the question.",
        "Guessing instead of using information in the passage.",
        "Confusing the main idea with a small supporting detail."
      ],
      summary: "Good comprehension involves careful reading, identifying the main idea, noticing supporting details and answering questions from the text.",
      examinationPractice: [
        { question: "What is the main idea of a passage?", answer: "The central message or most important point.", explanation: "Other details in the passage usually support this central point." }
      ]
    },
    {
      week: 2,
      title: "Parts of Speech: Nouns and Pronouns",
      objectives: [
        "Define nouns and pronouns.",
        "Identify common types of nouns.",
        "Use pronouns correctly to replace nouns."
      ],
      introduction: "Words perform different jobs in sentences. Nouns name people, places, animals, objects or ideas. Pronouns are used in place of nouns to avoid unnecessary repetition.",
      sections: [
        { heading: "Nouns", content: "A noun names a person (teacher), place (Lagos), animal (goat), thing (book) or idea (honesty). Common nouns name general things, while proper nouns name particular people or places and begin with capital letters. Collective nouns name groups, such as team, class and flock. Abstract nouns name qualities or ideas, such as courage and kindness." },
        { heading: "Pronouns", content: "A pronoun takes the place of a noun. Personal pronouns include I, you, he, she, it, we and they. Object forms include me, him, her, us and them. Possessive forms include mine, yours, his, hers, ours and theirs. Demonstrative pronouns include this, that, these and those." },
        { heading: "Agreement and clear reference", content: "A pronoun should agree with the noun it replaces. In 'Bola has a bag. She keeps it safely', she refers to Bola and it refers to the bag. Make sure readers can tell which noun a pronoun refers to." }
      ],
      keyTerms: [
        "Noun: a naming word.",
        "Pronoun: a word used instead of a noun.",
        "Proper noun: the special name of a person or place.",
        "Collective noun: a noun naming a group.",
        "Abstract noun: a noun naming an idea or quality."
      ],
      workedExamples: [
        { question: "Identify the nouns in: 'The farmer feeds the chickens.'", solution: "Farmer and chickens are nouns." },
        { question: "Replace 'Tunde and I' with a pronoun.", solution: "We." },
        { question: "Choose the correct pronoun: 'Mary said ___ was ready.'", solution: "She: 'Mary said she was ready.'" }
      ],
      classExercises: [
        { question: "Identify the proper nouns: 'Kemi visited Abuja.'", answer: "Kemi and Abuja." },
        { question: "Give a collective noun for a group of players.", answer: "Team." },
        { question: "Replace 'the children' with a pronoun.", answer: "They." }
      ],
      commonMistakes: [
        "Writing proper nouns without capital letters.",
        "Using a pronoun whose reference is unclear.",
        "Confusing possessive pronouns with ordinary personal pronouns."
      ],
      summary: "Nouns name people, places, things and ideas. Pronouns replace nouns and should agree with the nouns they refer to.",
      examinationPractice: [
        { question: "What type of noun is 'honesty'?", answer: "Abstract noun.", explanation: "Honesty names a quality rather than a physical object." }
      ]
    },
    {
      week: 3,
      title: "Verbs, Tenses and Subject–Verb Agreement",
      objectives: [
        "Identify verbs in sentences.",
        "Recognise present, past and future time forms.",
        "Make subjects and verbs agree."
      ],
      introduction: "A verb expresses an action, occurrence or state. Tense helps show when an action happens. A complete sentence normally has a subject and a verb that agree.",
      sections: [
        { heading: "Verbs", content: "Action verbs show what someone or something does: run, write, carry and sing. Linking verbs connect a subject to information about it: is, are, was and seem. In 'The soup tastes good', tastes links soup to a description." },
        { heading: "Basic tenses", content: "The simple present describes habits and facts: 'She reads every evening.' The simple past describes completed actions: 'She read yesterday.' The simple future can be formed with will: 'She will read tomorrow.' Some verbs change form irregularly, such as go/went and eat/ate." },
        { heading: "Subject–verb agreement", content: "A singular subject normally takes a singular present-tense verb: 'The boy plays.' A plural subject takes a plural verb: 'The boys play.' The verb agrees with the main subject, not simply the nearest noun." }
      ],
      keyTerms: [
        "Verb: a word expressing an action or state.",
        "Tense: the verb form showing time.",
        "Subject: the person or thing the sentence is about.",
        "Agreement: matching the verb to its subject."
      ],
      workedExamples: [
        { question: "Identify the verb: 'The pupils cleaned the classroom.'", solution: "Cleaned." },
        { question: "Change 'I walk to school' to past tense.", solution: "I walked to school." },
        { question: "Choose: 'The girls (sings/sing) well.'", solution: "Sing, because girls is plural." }
      ],
      classExercises: [
        { question: "Identify the verb: 'Dad repaired the chair.'", answer: "Repaired." },
        { question: "Change 'She cooks rice' to future tense.", answer: "She will cook rice." },
        { question: "Choose: 'The teacher (explain/explains) the lesson.'", answer: "Explains." }
      ],
      commonMistakes: [
        "Using a plural verb with a singular subject.",
        "Using the wrong past form of an irregular verb.",
        "Changing tense without considering the time in the sentence."
      ],
      summary: "Verbs express actions or states. Tense shows time, and subject–verb agreement keeps sentences grammatically correct.",
      examinationPractice: [
        { question: "Choose the correct sentence: 'The dog bark/barks loudly.'", answer: "The dog barks loudly.", explanation: "Dog is a singular subject, so the present-tense verb takes -s." }
      ]
    },
    {
      week: 4,
      title: "Adjectives and Adverbs",
      objectives: [
        "Define adjectives and adverbs.",
        "Identify what adjectives and adverbs describe.",
        "Use comparative and superlative forms correctly."
      ],
      introduction: "Adjectives and adverbs add useful information. An adjective describes a noun or pronoun, while an adverb commonly describes a verb, adjective or another adverb.",
      sections: [
        { heading: "Adjectives", content: "An adjective tells us more about a noun: a tall building, three oranges, a careful driver. Adjectives may describe quality, size, colour, number or ownership. Comparative adjectives compare two things (taller); superlative adjectives compare three or more (tallest)." },
        { heading: "Adverbs", content: "An adverb can tell how, when, where or how often an action happens. Examples: carefully (how), yesterday (when), outside (where), and always (how often). Many adverbs end in -ly, but not all do." },
        { heading: "Choosing the correct word", content: "In 'The careful girl writes neatly', careful describes girl and is an adjective; neatly describes writes and is an adverb. Do not assume every word ending in -ly is an adverb or every adverb ends in -ly." }
      ],
      keyTerms: [
        "Adjective: a word that describes a noun or pronoun.",
        "Adverb: a word that modifies a verb, adjective or adverb.",
        "Comparative: a form used to compare two.",
        "Superlative: a form used to compare three or more."
      ],
      workedExamples: [
        { question: "Identify the adjective: 'We saw a beautiful garden.'", solution: "Beautiful describes garden." },
        { question: "Identify the adverb: 'The baby slept peacefully.'", solution: "Peacefully describes how the baby slept." },
        { question: "Give the comparative and superlative of small.", solution: "Smaller; smallest." }
      ],
      classExercises: [
        { question: "Find the adjective: 'The red bus stopped.'", answer: "Red." },
        { question: "Find the adverb: 'He answered politely.'", answer: "Politely." },
        { question: "Complete: good, better, ___.", answer: "Best." }
      ],
      commonMistakes: [
        "Using an adjective where an adverb is needed.",
        "Forming double comparisons such as more taller.",
        "Confusing the noun being described with the describing word."
      ],
      summary: "Adjectives describe nouns and pronouns. Adverbs give more information about verbs, adjectives and other adverbs.",
      examinationPractice: [
        { question: "In 'The athlete ran quickly', which word is the adverb?", answer: "Quickly.", explanation: "It tells how the athlete ran." }
      ]
    },
    {
      week: 5,
      title: "Comprehension and Vocabulary Development",
      objectives: [
        "Use context to understand unfamiliar words.",
        "Identify synonyms and antonyms.",
        "Infer simple meanings from a passage."
      ],
      introduction: "Vocabulary is the collection of words we understand and use. Reading widely helps learners meet new words and understand how meaning changes with context.",
      sections: [
        { heading: "Context clues", content: "Context clues are hints around an unfamiliar word. A definition, example, contrast or explanation in the same sentence or nearby sentences may help reveal its meaning. Read the whole sentence before deciding." },
        { heading: "Synonyms and antonyms", content: "Synonyms are words with similar meanings, such as begin and start. Antonyms have opposite meanings, such as early and late. The best synonym depends on how a word is used in its sentence." },
        { heading: "Using a dictionary", content: "A dictionary gives spelling, pronunciation, meanings and sometimes examples or word classes. Check the correct meaning for the context rather than choosing the first meaning listed." }
      ],
      keyTerms: [
        "Vocabulary: words known and used by a person.",
        "Context clue: nearby information that helps explain a word.",
        "Synonym: a word with a similar meaning.",
        "Antonym: a word with an opposite meaning."
      ],
      workedExamples: [
        { question: "In 'The path was narrow, so only one person could walk on it', what does narrow mean?", solution: "Not wide; having little width." },
        { question: "Give a synonym for happy.", solution: "Glad or joyful." },
        { question: "Give an antonym for ancient.", solution: "Modern or new." }
      ],
      classExercises: [
        { question: "Give an antonym for generous.", answer: "Stingy." },
        { question: "Give a synonym for silent.", answer: "Quiet." },
        { question: "What can a dictionary help you find?", answer: "Meanings, spelling, pronunciation and word information." }
      ],
      commonMistakes: [
        "Choosing a synonym that does not fit the sentence.",
        "Ignoring clues in nearby sentences.",
        "Confusing words that look alike but have different meanings."
      ],
      summary: "Build vocabulary by reading, using context clues, comparing synonyms and antonyms, and checking a dictionary.",
      examinationPractice: [
        { question: "What is an antonym?", answer: "A word with an opposite meaning.", explanation: "For example, hot and cold are antonyms." }
      ]
    },
    {
      week: 6,
      title: "Informal Letter Writing",
      objectives: [
        "Explain the purpose of an informal letter.",
        "Identify the parts of an informal letter.",
        "Write a clear friendly letter using suitable language."
      ],
      introduction: "An informal letter is a personal letter written to someone we know, such as a friend or relative. Its language is friendly and natural but should still be clear and respectful.",
      sections: [
        { heading: "Parts of an informal letter", content: "A typical informal letter includes the writer's address and date, a greeting such as 'Dear Ada', an opening paragraph, the main message, a closing paragraph, a complimentary close such as 'Your friend', and the writer's first name. Follow the format taught by your school." },
        { heading: "Planning the message", content: "Think about the person receiving the letter and the reason for writing. Arrange ideas in a sensible order. Each paragraph should focus on one main point. Answer any questions the recipient asked and include details that make the message clear." },
        { heading: "Language and presentation", content: "Use a friendly tone, correct sentences, paragraphs and punctuation. Avoid text-message abbreviations in a formal school exercise. Read the letter again to check spelling, grammar and whether the purpose is clear." }
      ],
      keyTerms: [
        "Address: the writer's location written at the top.",
        "Greeting: words used to address the reader.",
        "Body: the main message of the letter.",
        "Complimentary close: polite words used before the writer's name."
      ],
      workedExamples: [
        { question: "Who might receive an informal letter?", solution: "A friend, cousin, parent or another person the writer knows personally." },
        { question: "Suggest a suitable greeting to a friend named Musa.", solution: "Dear Musa," }
      ],
      classExercises: [
        { question: "List four parts of an informal letter.", answer: "Address and date, greeting, body and complimentary close with the writer's name." },
        { question: "Write two friendly opening sentences to a cousin.", answer: "Example: How are you and everyone at home? I hope you are doing well." }
      ],
      commonMistakes: [
        "Leaving out the date or greeting.",
        "Writing the whole message as one long paragraph.",
        "Using unclear abbreviations and careless punctuation."
      ],
      summary: "An informal letter has a clear purpose, friendly language, organised paragraphs and the expected letter parts.",
      examinationPractice: [
        { question: "State one difference between an informal and a formal letter.", answer: "An informal letter is usually written to someone known personally and uses a friendlier tone.", explanation: "A formal letter follows a more official structure and tone." }
      ]
    },
    {
      week: 7,
      title: "Reading and Summary Writing",
      objectives: [
        "Identify important points in a passage.",
        "Distinguish main points from examples and repetition.",
        "Write a short summary in clear sentences."
      ],
      introduction: "A summary gives the important ideas of a longer passage in fewer words. It should keep the original meaning while leaving out unnecessary details.",
      sections: [
        { heading: "Finding key points", content: "Read the passage carefully and ask what each paragraph contributes. Underline important facts or ideas. Leave out repeated statements, minor examples and decorative descriptions unless they are essential to the meaning." },
        { heading: "Writing the summary", content: "Combine related points in your own words where possible. Use complete sentences and a logical order. Keep the summary shorter than the original passage and follow any word limit in the question." },
        { heading: "Checking your work", content: "Compare your summary with the passage. Check that all important points are included, no new opinion has been added, grammar is correct and the writing is concise." }
      ],
      keyTerms: [
        "Summary: a brief account of the main points.",
        "Key point: an important idea.",
        "Concise: expressed clearly in few words.",
        "Paraphrase: express an idea using different words without changing its meaning."
      ],
      workedExamples: [
        { question: "Passage idea: 'Rain fills rivers, waters crops and supplies homes. Heavy rain can also cause floods.' Give a concise summary.", solution: "Rain provides useful water but can also cause flooding." }
      ],
      classExercises: [
        { question: "Why should repeated details be removed from a summary?", answer: "They are unnecessary and make the summary longer without adding a new main point." },
        { question: "Should a summary add the writer's personal opinion?", answer: "No. It should report the important ideas in the passage." }
      ],
      commonMistakes: [
        "Copying the entire passage.",
        "Including personal opinions not found in the text.",
        "Leaving out the central message while keeping minor examples."
      ],
      summary: "A good summary is short, accurate, complete and written in clear language.",
      examinationPractice: [
        { question: "Mention two qualities of a good summary.", answer: "It is concise and accurate.", explanation: "It keeps the important meaning without unnecessary details." }
      ]
    },
    {
      week: 8,
      title: "Idioms and Figurative Expressions",
      objectives: [
        "Explain the meaning of an idiom.",
        "Distinguish literal and figurative meaning.",
        "Interpret common figurative expressions from context."
      ],
      introduction: "An idiom is an expression whose meaning is different from the ordinary meaning of the individual words. Figurative language helps speakers and writers communicate ideas vividly.",
      sections: [
        { heading: "Idioms", content: "'A piece of cake' means something is easy. 'Once in a blue moon' means very rarely. The meaning cannot always be worked out by taking each word literally, so learn the expression as a whole." },
        { heading: "Simile and metaphor", content: "A simile compares two things using words such as like or as: 'The child is as brave as a lion.' A metaphor describes one thing as another to create an image: 'Time is a thief.'" },
        { heading: "Personification and hyperbole", content: "Personification gives human qualities to non-human things: 'The wind whispered.' Hyperbole is deliberate exaggeration for emphasis: 'I have told you a thousand times.'" }
      ],
      keyTerms: [
        "Idiom: an expression with a special meaning.",
        "Simile: a comparison using like or as.",
        "Metaphor: a direct figurative comparison.",
        "Personification: giving human qualities to non-human things.",
        "Hyperbole: deliberate exaggeration."
      ],
      workedExamples: [
        { question: "What does 'once in a blue moon' mean?", solution: "Very rarely." },
        { question: "Identify the figure of speech: 'The stars danced in the sky.'", solution: "Personification." },
        { question: "Identify the simile: 'Her voice is like music.'", solution: "'Like music' makes it a simile." }
      ],
      classExercises: [
        { question: "Explain 'a piece of cake'.", answer: "Something very easy." },
        { question: "Name the figure of speech: 'He is a shining star.'", answer: "Metaphor." },
        { question: "Give one example of personification.", answer: "Example: The leaves danced in the breeze." }
      ],
      commonMistakes: [
        "Interpreting every idiom literally.",
        "Calling every comparison a simile even when like or as is absent.",
        "Confusing exaggeration with a factual statement."
      ],
      summary: "Idioms and figurative expressions communicate meanings beyond literal words. Context helps readers interpret them.",
      examinationPractice: [
        { question: "What figure of speech is used in 'The classroom was a zoo'?", answer: "Metaphor.", explanation: "The classroom is described directly as a zoo to suggest noise or disorder." }
      ]
    },
    {
      week: 9,
      title: "Descriptive Essay Writing",
      objectives: [
        "Explain the purpose of a descriptive essay.",
        "Use sensory details and suitable vocabulary.",
        "Organise a description into clear paragraphs."
      ],
      introduction: "A descriptive essay helps readers imagine a person, place, object or experience. Good description uses accurate details and an organised structure.",
      sections: [
        { heading: "Planning a description", content: "Choose what you are describing and list details a reader should notice. Consider appearance, sound, smell, touch and, where relevant, taste. Select details that help create a clear picture rather than listing everything." },
        { heading: "Organisation", content: "Begin with an introduction that identifies the subject. Arrange the body paragraphs in a clear order, such as from near to far or from general appearance to specific features. End with a conclusion that gives a final impression." },
        { heading: "Language choices", content: "Use precise nouns, vivid but suitable adjectives and strong verbs. Avoid repeating the same describing words. Keep sentences clear and check that comparisons make sense." }
      ],
      keyTerms: [
        "Descriptive essay: writing that creates a clear picture of a subject.",
        "Sensory detail: information connected to the senses.",
        "Paragraph: a group of sentences about one main idea.",
        "Conclusion: the final part that brings the writing to a close."
      ],
      workedExamples: [
        { question: "Improve the description 'The market was nice.'", solution: "The busy market was filled with colourful stalls, lively voices and the fresh smell of fruit." }
      ],
      classExercises: [
        { question: "List three things you could describe about your classroom.", answer: "Possible answers: desks, windows, lighting, wall charts, sounds or arrangement." },
        { question: "Write two sentences describing a rainy morning.", answer: "Example: Dark clouds covered the sky. Gentle rain tapped against the roof." }
      ],
      commonMistakes: [
        "Listing adjectives without forming clear sentences.",
        "Changing from one idea to another without paragraph order.",
        "Using exaggerated descriptions that do not fit the subject."
      ],
      summary: "A descriptive essay uses organised paragraphs, precise vocabulary and relevant sensory details to help readers imagine a subject.",
      examinationPractice: [
        { question: "Mention three senses that may provide details in a descriptive essay.", answer: "Sight, hearing and smell (also touch and taste where suitable).", explanation: "Sensory details help readers imagine the subject." }
      ]
    },
    {
      week: 10,
      title: "Revision and First-Term Assessment",
      objectives: [
        "Review the term's grammar and writing topics.",
        "Apply comprehension and vocabulary skills.",
        "Complete a short revision assessment."
      ],
      introduction: "This lesson reviews the main English Studies skills covered during the term. Read each question carefully and explain answers where required.",
      sections: [
        { heading: "Topics to revise", content: "Review comprehension, main ideas and supporting details; nouns and pronouns; verbs and tenses; subject–verb agreement; adjectives and adverbs; vocabulary; informal letters; summary writing; idioms; and descriptive essays." },
        { heading: "Revision method", content: "Read your notes, practise examples without looking at solutions, mark your work honestly and revisit topics you find difficult. For writing tasks, check organisation, grammar, spelling and punctuation." }
      ],
      keyTerms: [
        "Revision: reviewing previously learned work.",
        "Assessment: a task used to check learning."
      ],
      workedExamples: [
        { question: "Correct the sentence: 'The boys plays football.'", solution: "The boys play football. The plural subject boys takes play." },
        { question: "Identify the figure of speech: 'The moon smiled at us.'", solution: "Personification." }
      ],
      classExercises: [
        { question: "Give a synonym for rapid.", answer: "Fast or quick." },
        { question: "Change to past tense: 'They visit the library.'", answer: "They visited the library." },
        { question: "Name the word class of 'bright' in 'a bright light'.", answer: "Adjective." }
      ],
      commonMistakes: [
        "Rushing through instructions.",
        "Failing to check subject–verb agreement.",
        "Ignoring punctuation and paragraphing in writing tasks."
      ],
      summary: "Use this revision to identify strengths and topics that need more practice before the term assessment.",
      examinationPractice: [
        { question: "Write one sentence containing a noun, a verb and an adverb.", answer: "Example: The child laughed happily.", explanation: "Child is a noun, laughed is a verb and happily is an adverb." }
      ]
    }
  ];

  lessons.forEach(function (lesson) {
    if (!library.getWeek("JSS 1", "First Term", "English Studies", lesson.week)) {
      library.addLesson("JSS 1", "First Term", "English Studies", lesson);
    }
  });
})();
