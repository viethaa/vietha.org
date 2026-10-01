export default function Logo({ size = 20 }: { size?: number }) {
  return (
    <span
      className="font-display inline-flex items-baseline italic leading-none normal-case tracking-normal"
      style={{ fontSize: size }}
    >
      Viet Ha
      <span style={{ color: 'var(--accent)' }}>.</span>
    </span>
  )
}
