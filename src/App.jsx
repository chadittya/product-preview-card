import bgImageProductDesktop from "./assets/images/image-product-desktop.jpg";
import bgImageProductMobile from "./assets/images/image-product-mobile.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen box-border">
        <div className="bg-bgWhite rounded-xl md:w-[600px] mobile:w-[345px] md:h-auto mobile:h-[611px]">
          <div className="flex md:flex-row mobile:flex-col">
            <div className="md:w-1/2">
              <img
                src={bgImageProductDesktop}
                alt="image-product-desktop"
                className="md:h-full rounded-l-xl mobile:hidden md:block"
              />
              <img
                src={bgImageProductMobile}
                alt="image-product-desktop"
                className="md:hidden rounded-t-xl"
              />
            </div>
            <div className="px-6 md:w-1/2 py-6">
              <p className="font-Montserrat text-gray-400 tracking-[4px] text-sm mobile:text-[13px]">
                PERFUME
              </p>
              <p className="font-Fraunces font-bold text-4xl text-[37px] py-5 w-auto mobile:text-[32px]">
                Gabriele Essense Eau De Parfum
              </p>
              <p className="font-Montserrat text-gray-400 mobile:text-sm">
                A floral, solar and voluptuous interpretation composed by Oliver
                Polge, Perfumer-Creator for the House of CHANEL
              </p>
              <div className="flex flex-row gap-6 md:py-5 content-center mobile:py-3">
                <p className="font-Fraunces font-bold text-bgDarkCyan text-4xl mobile:text-3xl">
                  $149.99
                </p>
                <p className="flex items-center font-Montserrat text-gray-400 line-through text-sm">
                  $169.99
                </p>
              </div>
              <button className="flex items-center justify-center bg-bgDarkCyan rounded-lg text-center w-full h-12 gap-2 text-white font-Montserrat font-semibold hover:bg-bgDarkGrayishBlue mobile:h10 mobile:text-sm">
                <AiOutlineShoppingCart />
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
