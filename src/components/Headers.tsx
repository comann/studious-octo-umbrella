
export function Header({ children }: { children: React.ReactNode }) {
  return <h2 style={{ marginTop: 0 }}>{children}</h2>
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return <span style={{ fontWeight: 500, color: 'rgb(0,0,0,0.65)' }}>
    {children}
  </span>
}