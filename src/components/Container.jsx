export default function Container({children, style, className}){
  return <div className={["container", className].filter(Boolean).join(" ")} style={style}>{children}</div>
}
