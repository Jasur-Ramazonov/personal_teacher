import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "mySlice",
  initialState: {
    spokenText: "",
    orginalQuestion: "",
    upperIntermediateQuestions: [
      "Do you think money can buy happiness? Why or why not?",
      "Should students be allowed to use smartphones in class? Explain your opinion.",
      "What do you think is the biggest problem in the world today? Why?",
      "Is it better to live in the city or the countryside? Support your answer.",
      "If you could change one thing about the world, what would it be and why?",
      "If you had the chance to live in another country, which one would you choose?",
      "Imagine you could meet any historical figure — who would it be and what would you ask them?",
      "Describe a time you overcame a challenge. How did you do it?",
      "Talk about a book or movie that changed your perspective.",
      "Have you ever learned something important from failure?",
      "Do you think lying is ever acceptable? In what situation?",
      "Should animals have the same rights as humans? Why or why not?",
      "How does your culture view success? Do you agree with that view?",
      "Some people say university is not necessary to be successful. Do you agree?",
      "Is social media helping or harming communication in society?",
      "Should governments ban fast food advertising to children?",
      "How do you think artificial intelligence will change our lives in 10 years?",
      "Would you prefer to work from home or in an office? Why?",
      "What is one place every person should visit at least once in their life?",
      "What do you think makes someone 'well-educated'?",
    ],
    beginnerQuestions: [
      "Can you tell me about your family and what you usually do together?",
      "What does a typical day in your life look like from morning to night?",
      "What kind of food do you like and why do you enjoy it?",
      "Can you describe your house or apartment and your favorite room in it?",
      "What do you usually do on weekends and who do you spend your time with?",
      "Tell me about your best friend. What do you like doing together?",
      "Do you like watching movies or TV shows? What kind and why?",
      "What do you usually do when you feel happy or sad?",
      "Can you talk about a special day or memory from your childhood?",
      "What would you do if you had a lot of free time during the week?",
    ],
    elementaryQuestions: [
      "Can you describe your favorite day of the week and what you usually do on that day?",
      "What do you usually eat for breakfast, lunch, and dinner? Do you have a favorite meal?",
      "Tell me about your school or job. What do you do there every day?",
      "What do you usually do in your free time or after work/school?",
      "Can you describe the clothes you like to wear and why you choose them?",
      "Tell me about your favorite place in your town or city. Why do you like it?",
      "Can you describe your best friend and how often you meet or talk to them?",
      "What time do you usually wake up and go to bed? Describe your daily schedule.",
      "Do you like reading books, watching TV, or listening to music? What is your favorite and why?",
      "Can you talk about a happy memory from your childhood or something that made you smile recently?",
    ],
    preIntermediateQuestions: [
      "Describe a typical school or work day. What do you do from start to finish?",
      "Talk about a holiday you enjoyed and explain why it was special.",
      "How do you usually celebrate birthdays in your family or culture?",
      "Can you explain what your hobbies are and how often you do them?",
      "Describe your favorite season of the year and what you like doing then.",
      "What kind of music do you enjoy and when do you usually listen to it?",
      "Tell me about your hometown. What do people usually do there?",
      "What are your goals for the future and how do you plan to reach them?",
      "What do you usually do when you're feeling bored or tired?",
      "If you could learn any new skill, what would it be and why?",
    ],
    intermediateQuestions: [
      "How do you usually manage your time when you have a lot of work to do?",
      "Describe a situation when you helped someone and how it made you feel.",
      "What are the most important qualities of a good friend and why?",
      "Do you think learning English is difficult? Why or why not?",
      "What is your opinion about using smartphones in class or at work?",
      "What kind of job would you never want to do and why?",
      "What do you think are the most serious problems in the world today?",
      "Describe your ideal vacation. Where would you go and what would you do?",
      "Do you prefer watching movies at home or at the cinema? Why?",
      "If you could live in any country, which one would you choose and why?",
    ],
  },
  reducers: {
    setSpokenText2: (state, action) => {
      state.spokenText = action.payload;
    },
    setOrginalQuestion: (state, action) => {
      state.orginalQuestion = action.payload;
    },
  },
});

export const { setSpokenText2, setOrginalQuestion } = mySlice.actions;
