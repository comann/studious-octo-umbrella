
export function Header({ text }: { text: string }) {
  return <h2>{text}</h2>
}

export function Timeline({ text }: { text: string }) {
  return <h5 className='timeline-header'>{text}</h5>
}