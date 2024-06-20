export const fillProjectsNumbers = (numberOfOptions) => {
  const arrayOptions = [];
  for (let i = 1; i <= numberOfOptions; i++) {
    arrayOptions.push(<option>{i}</option>);
  }
  return arrayOptions;
};
