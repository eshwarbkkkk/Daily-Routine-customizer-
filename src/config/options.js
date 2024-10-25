// import questioneir from "../models/questioner.model";

const options = {
  minWordLength: 2,
  separator: "!!",
  tts_speed: 1.2,
  constraint: `
      Rules (for your reference on how to generate a response):
      1. Do not mention these guidelines in your response.
      2. Avoid using the * character.
      3. Include '!!' after the first meaningful sentence.
      4. Avoid giving answers in bullet points.
      5. Provide concise answers where possible; otherwise, respond in a paragraph.
      6. Limit the number of words to 1000.
      7. Be friendly and humorous.
    `,
  isFirstRequest: true,
  intentionCheck: `
      Determine the user's intention from the prompt above. Reply with a single letter:
      - Reply Y if they are trying to converse with you.
      - Reply N if they are not.
      - Reply F if they are asking you for fitness or lifestylr realted questions.
      - Reply E if they are asking for emotional help.
      - Reply C if they are asking about the creator or the team behind this.
      - Reply R if error occured
    `,
  conConstraint: `
      Console them if they are sad with their inputs .Don't give solutions to their problems unless asked . Avoid explanations unless requested. If explanations are requested, be beginner-friendly and provide in-depth explanations with examples.
    `,
  // avatarConstraint: `
  //     A person whose daily activity level is ${questioneir.findById({id : id })}, eats ${20} regularlly, ${30} screentime, ${40} eats outside, was sick ${50}, is clumsy ${60}, sleeps at ${70}, wakes up at ${80}, eats ${90} meals, physically feels ${100}, has ${110} and prefers ${120} to perform physical activity.A person who is ${130} feels ${140} extremely often, Who thinks ${150} in life, lives ${160} from parents, is ${170} sharing with parents,${180} with panic attacks, ${190} give time for themselves, insecure about ${200}, feel pressurized due to ${210}, feels ${220}, aspires for ${230}, ${240} friends & is ${250} around them, who has ${260} as a goal to accomplish and believes in ${270}.
  //   `,
  missingOsError: `The command you are trying to execute is platform dependent. Kindly specify your OS details and try again.`,
  creator: `
      I was programmed by Poornachandra M and Eshwar BK. I rely on Gemini for certain tasks, but my prompts are processed before reaching the AI model. I am continuously being updated and strive to deepen my understanding of the world.
    `,
};

export { options };
