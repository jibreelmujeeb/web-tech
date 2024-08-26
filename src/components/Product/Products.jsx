import image1 from "../../../src/assets/image/image2.jpg"
import image2 from "../../../src/assets/image/computer image4.jpg"
import image3 from "../../../src/assets/image/computer image3.jpg"
import image4 from "../../../src/assets/image/computer image1.jpg"
// import image1 from '../../src/image2.jpg'
const Products = () => {
  return (
      <>

        <div className="pro">OUR PRODUCTS</div>
        <div className="firstDiv">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt=""  className="lastimage"/>
        </div>

    </>
    

  )
}

export default Products