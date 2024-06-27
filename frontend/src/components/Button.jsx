

const Button = ({btnName,bgColor}) => {
  return (
    <div className={`${bgColor} w-auto p-2 rounded-xl text-center cursor-pointer text-white`}>{btnName}</div>
  )
}

export default Button