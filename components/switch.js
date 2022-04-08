import Head from 'next/head'
import Link from 'next/link'

export function Switch({ id, state, setState }) {
  return (
    <div className="switch">
      <input type="checkbox" id={id} checked={state} onChange={e => {
        setState(e.target.checked)
        window.localStorage.darkmode = e.target.checked
      }} />
      <label htmlFor={id}></label>
    </div>
  )
}