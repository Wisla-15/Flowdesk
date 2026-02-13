import { useState } from 'react'
import styles from './styles/AddProject.module.css'

const AddProject = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [deadline, setDeadline] = useState('')

  const submitHandler = e => {
        e.preventDefault()
        if (!name.trim() || !deadline) return

        onAdd({
          id: Date.now(),
          name,
          deadline,
          tasks: [],
          team: [],
        })
    
        setName('')
        setDeadline('')
      };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        placeholder="Project name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="date"
        value={deadline}
        onChange={e => setDeadline(e.target.value)}
      />

      <button className="btn-primary">Add project</button>
    </form>
  );
};

export default AddProject;