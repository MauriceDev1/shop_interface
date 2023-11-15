interface ButtonProps {
    title: any;
}

function Button({title}: ButtonProps) {
  return (
    <button className="bg-white border border-gary-400">
        {title}
    </button>
  )
}

export default Button
