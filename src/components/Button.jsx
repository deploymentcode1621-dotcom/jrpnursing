import './Button.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <Tag
      className={`btn btn-${variant} btn-${size} ${className}`}
      href={href}
      onClick={onClick}
      type={Tag === 'button' ? type : undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </Tag>
  )
}
