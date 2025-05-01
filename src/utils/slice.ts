import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "mySlice",
  initialState: {
    spokenText: "",
    advancedSpeakingQuestions: [
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
  },
  reducers: {
    setSpokenText2: (state, action) => {
      state.spokenText = action.payload;
    },
    setQuestion: (state, action) => {
      state.advancedSpeakingQuestions = action.payload;
    },
  },
});

export const { setSpokenText2 } = mySlice.actions;
