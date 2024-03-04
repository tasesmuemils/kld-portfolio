// ---
// const { images } = Astro.props;
// import { Image } from "astro:assets";
// ---

// <!-- {console.log(images)} -->
// <div class="embla">
//   <div class="embla__container">
//     {
//       images.map((img, index) => {
//         return <Image src={img} alt={`Carousel Image ${index.src}`} />;
//       })
//     }
//   </div>
// </div>

// <style>
//   .embla {
//     overflow: hidden;
//   }
//   .embla__container {
//     display: flex;
//     align-items: flex-start; /* Add this */
//   }
//   .embla__slide {
//     flex: 0 0 100%;
//     min-width: 0;
//   }
// </style>

// <script>
//   import EmblaCarousel from "embla-carousel";
//   import Autoplay from "embla-carousel-autoplay";
//   import AutoHeight from "embla-carousel-auto-height";

//   const emblaNode = document.querySelector(".embla");
//   const options = { loop: true };
//   const plugins = [Autoplay({ delay: 1000 }), AutoHeight()];
//   const emblaApi = EmblaCarousel(emblaNode, options, plugins);
//   console.log(emblaApi.slideNodes()); // Access API
// </script>
