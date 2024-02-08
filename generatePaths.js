export function generatePaths(questionnaire) {
  const paths = [];
  const stack = [{ path: [], currentQuestion: questionnaire[0] }];

  while (stack.length > 0) {
    const { path, currentQuestion } = stack.pop();
    const { question, options, next } = currentQuestion;

    if (next !== null ) {
      for (const option of options) {
        const newPath = [...path, { [question]: option }];
        const newNext = next ? next[option] : null;

        if (newNext && newNext.options) {
          stack.push({ path: newPath, currentQuestion: newNext });
        } else {
          paths.push(newPath);
        }
      }
    } else {
      paths.push([...path, { [question]: options.join("/") }]);
    }
  }

  return paths;
}
