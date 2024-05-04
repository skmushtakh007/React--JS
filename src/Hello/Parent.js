import React from 'react'
import { useState } from 'react'

export default function Parent(props) {
  const [name, setName] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    props.getdata(name);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}
