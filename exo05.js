//1_ The open/closed principle.  should be able to add new features to a codebase while leaving existing code intact.

const questions = [
  {
    type: "boolean",
    description: "This tuto is useful",
  },
  {
    type: "mulipleChoice",
    description: "What is your favorite song",
    options: ["first", "seconde", "third"],
  },
  {
    type: "text",
    description: "Describe SOLID principles",
  },
  {
    type: "range",
    description: "What is the speed limit",
  },
];

class Quiz {
  constructor(questions) {
    this.questions = questions;
  }
  get quest() {
    this.handleBoolean();
    this.handleMultipleChoice();
    this.handleText();
    this.handleRange();
  }
  handleBoolean() {
    this.questions.forEach((question) => {
      if (question.type === "boolean") {
        console.log(question.description);
        console.log("1. True");
        console.log("2. False");
      }
    });
  }
  handleMultipleChoice() {
    this.questions.forEach((question) => {
      if (question.type === "mulipleChoice") {
        console.log(question.description);
        question.options.forEach((option, index) => {
          console.log(`${index + 1} - ${option}`);
        });
      }
    });
  }
  handleText() {
    this.questions.forEach((question) => {
      if (question.type === "text") {
        console.log(question.description);
        console.log("Answer: _________________________");
      }
    });
  }
  handleRange() {
    this.questions.forEach((question) => {
      if (question.type === "range") {
        console.log(question.description);
        console.log("Min: _________________________");
        console.log("Max: _________________________");
      }
    });
  }
}

const quiz = new Quiz(questions);
console.log(quiz.quest);
