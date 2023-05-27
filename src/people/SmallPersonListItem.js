export const SmallPersonListItem = ({ person }) => {
  // Destructure the person object to get the name and age
  const { name, age } = person;

  return (
    <p>
      Name: {name}, Age: {age} years old{' '}
    </p>
  );
};
