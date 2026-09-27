import './Button.css'

interface ButtonProps {
  variant?: 'default' | 'filter'
  icon?: React.ReactNode
  active?: boolean
  href?: string
  target?: string
  rel?: string
  onClick?: React.MouseEventHandler
  disabled?: boolean
  className?: string
  'aria-label'?: string
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  variant = 'default',
  icon,
  active = false,
  href,
  target,
  rel,
  onClick,
  disabled,
  className,
  children,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = [
    'btn',
    `btn--${variant}`,
    icon ? 'btn--has-icon' : '',
    active ? 'btn--active' : '',
    className ?? '',
  ].filter(Boolean).join(' ')

  if (href !== undefined) {
    return (
      <a href={href} target={target} rel={rel} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} aria-label={ariaLabel}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  )
}
