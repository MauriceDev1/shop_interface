interface ButtonProps {
    title: any;
}

function Button({title}: ButtonProps) {
  return (
    <button className="bg-white border border-gary-400 px-10 rounded h-10 w-full">
        {title}
    </button>
  )
}

export default Button
