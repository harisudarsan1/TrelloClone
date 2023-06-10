import React from 'react'

type Props = {
    className?:string
}

const XCircleIcon = (props: Props) => {
  return (
    <svg className={props.className} height={20} width={20} aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
  )
}

export default XCircleIcon