import React, { useState, useEffect } from "react";
import './Robot.css'

interface Row {
  Id: number, Model: string, Protocol: number,
  Mode: string, Min: string, Max: string, Groups: string
}

export function Robot() {

  // const rows: Row[] = []
  const [rows, setRows] = useState<Row[]>([])

  function addRow() {
    const options: Row = {
      Id: 1,
      Protocol: 1,
      Mode: 'joint',
      Model: '',
      Min: '',
      Max: '',
      Groups: ''
    }

    setRows(prevRows => [...prevRows, options])
  }

  useEffect(() => {
    console.log(rows)
  }, [rows])

  const rowComponents = rows.map(({ Id, Model, Protocol, Mode, Min, Max, Groups }) => {
    return <TableRow Id={Id} Model={Model} Protocol={Protocol} Mode={Mode} Min={Min} Max={Max} Groups={Groups} />;
  })

  return (
    <>
      <select></select>
      <input type="text" />
      <button onClick={saveRobot}>Save Robot!</button>
      <button onClick={deleteRobot}>Delete Robot!</button>
      <button onClick={addRow}>Add Row</button>
      <table>
        <TableTitleRow />
        {rowComponents}
      </table>
    </>
  )
}

function EditableCell({ state, placeholder }: { state: any, placeholder: string }) {
  const [editable, setEditable] = useState(true)
  const [text, setText] = useState(state)

  function handleOnBlur() {
    if (text) {
      setEditable(false)
    }
  }

  if (editable) {
    return (
      <input value={text} onChange={(event) => setText(event.target.value)} onBlur={handleOnBlur} autoFocus placeholder={placeholder} />
    )
  } else {
    return (
      <p style={{ margin: 0 }} onClick={() => setEditable(true)}>{text}</p>
    )
  }
}

function TableRow({ Id, Model, Protocol, Mode, Min, Max, Groups }: Row) {
  return (
    <tr>
      <td><EditableCell placeholder="Id" state={Id} /></td>
      <td><EditableCell placeholder="Model" state={Model} /></td>
      <td><EditableCell placeholder="Protocol" state={Protocol} /></td>
      <td><EditableCell placeholder="Mode" state={Mode} /></td>
      <td><EditableCell placeholder="Min" state={Min} /></td>
      <td><EditableCell placeholder="Max" state={Max} /></td>
      <td><EditableCell placeholder="Groups" state={Groups} /></td>
      <td><button onClick={removeThisRow}>-</button></td>
    </tr>
  )
}

function TableTitleRow() {
  return (
    <tr>
      <th>Id</th>
      <th>Model</th>
      <th>Protocol</th>
      <th>Mode</th>
      <th>Min</th>
      <th>Max</th>
      <th>Groups</th>
    </tr>
  )
}

function saveRobot() {

}

function deleteRobot() {

}

function removeThisRow() {

}

function resetLastRow() {

}