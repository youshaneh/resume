import Head from 'next/head'
import Link from 'next/link'

export function Switch({ id, state, setState }) {
  return (
    <div className="switch">
      <input type="checkbox" id={id} value={state} onChange={e => setState(e.target.checked)} />
      <label htmlFor={id}></label>
    </div>
  )
}