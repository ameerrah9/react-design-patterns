// Higher Order Component

export const printProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};
