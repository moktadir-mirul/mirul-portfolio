import "./StarBorder.css";

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "red",
  speed = "10s",
  thickness = 10,
  children,
  ...rest
}) => {
    console.log(Component);
  return (
    <Component 
      className={`star-border-container ${className}`} 
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;


