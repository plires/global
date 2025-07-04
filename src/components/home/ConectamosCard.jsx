const ConectamosCard = ({ img, altImg, title, col }) => {
  return (
    <div data-aos='fade-up' className={col}>
      <div className='contentCard'>
        <img className='img-fluid' src={img} alt={altImg} />
        <p dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  )
}
export default ConectamosCard
