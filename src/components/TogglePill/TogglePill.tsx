import './TogglePill.css'

interface TogglePillProps {
  checked: boolean
  onChange: () => void
  label: string
  knobIcon?: React.ReactNode
}

export function TogglePill({ checked, onChange, label, knobIcon }: TogglePillProps) {
  return (
    <div className="toggle-wrap">
      <button
        className={`toggle-pill${checked ? ' toggle-pill--on' : ''}`}
        onClick={onChange}
        aria-label="Toggle energy efficient mode"
        aria-pressed={checked}
      >
        <span className="toggle-knob">
          {knobIcon}
        </span>
      </button>
      <p className="toggle-label">{label}</p>
    </div>
  )
}
