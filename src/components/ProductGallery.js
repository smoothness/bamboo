function ProductGallery({selectedColor, colors}) {
  return (
    <div className="product__gallery">
      <img src={`/images/sofa-${colors[selectedColor]}.jpeg`} alt="this is a text for accesibility and SEO" />
    </div>
  )
}

export default ProductGallery