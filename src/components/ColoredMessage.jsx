export const ColoredMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };
  
  return <p style={contentStyle}>タグで囲むルール</p>;
};