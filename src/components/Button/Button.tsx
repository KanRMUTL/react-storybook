import "./button.css";

interface ButtonProps {
  label: string;
  color: "primary" | "secondary" | "success" | "warning";
  border: "solid" | "rounded";
  size: "small" | "medium" | "large";
}

const Button = ({
  label = "",
  color = "primary",
  border = "solid",
  size = "small",
}: ButtonProps) => {
  return (
    <button className={`button ${color} ${border} ${size}`}>{label}</button>
  );
};

export default Button;
