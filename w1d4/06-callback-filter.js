// Check for grades

// Parent sciency

const grade = {
  subject: "math",
  score: 90,
};

const grades = [
  {
    subject: "math",
    score: 90,
  },
  {
    subject: "science",
    score: 50,
  },
  {
    subject: "history",
    score: 80,
  },
];

const sciencyParentEvaluation = (grade) => {
  if (grade.subject === "math" || grade.subject === "science") {
    return grade.score >= 90;
  }

  return grade.score >= 70;
};

const randomParentEvaluation = () => {
  return Math.random() > 0.5;
};

const filterBadGrades = (grades, parentCB) => {
  const output = [];

  for (const grade of grades) {
    const isHappy = parentCB(grade);
    if (isHappy) {
      output.push(grade);
    }
  }

  return output;
};

// const goodGrades = filterBadGrades(grades, sciencyParentEvaluation);
const goodGrades = filterBadGrades(grades, randomParentEvaluation);

console.log(`You have ${goodGrades.length} grades that your parents are happy about`);

// When do we want to use HOFs ?

// Repetitive tasks: .map(), .forEach(), .filter()

// Build when refactoring
