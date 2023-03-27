export default function Message(props: any) {
  const userMessageStyle = 'bg-violet-900 rounded-l-2xl rounded-br-2xl ml-auto text-white'
  const aiMessageStyle = 'bg-slate-100 rounded-r-2xl rounded-bl-2xl mr-auto'

  return (
    <p key={props.id}
      className={`p-5 max-w-[70%] ${props.agent === 'USER' ? userMessageStyle : aiMessageStyle}`}
    >
      {props.message}
    </p>
  )
}
