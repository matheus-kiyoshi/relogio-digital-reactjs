interface Props {
  name: string;
  num: string;
}

export default function Hours(props: Props) {
  return (
    <div className="cont bs border-orange-400">
      <p className='text-2xl'>{props.name}</p>
      <div className='text-9xl '>
        {props.num}
      </div>
    </div>
  )
}