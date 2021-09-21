function Thumb({color, setColor, i}) {
  return (
    <div onClick={() => setColor(i)}>
      <img src={`/images/sofa-${color}.jpeg`} alt={`${color} this is a text for accesibility and SEO`} />
      <p>{color}</p>
    </div>
  )
}

export default Thumb