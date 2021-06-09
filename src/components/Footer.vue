<template>
  <footer class="footer bg-black mt-10 pt-6 pb-6">
    <div class="container mx-auto max-w-screen-lg">
      <div class="flex flex-col md:flex-row md:pt-6">
        <div class="footer-left px-3 md:px-0 py-8 md:py-0">
          <h3 class="text-xl text-white font-open-sans font-bold">LEARN</h3>
          <div class="learn-break w-12 h-1 mt-2 mb-4 bg-white"></div>
          <div class="footer-links flex flex-wrap justify-between">
            <a href="#" class="text-base text-lightGray font-open-sans">About Us</a>
            <a href="#" class="text-base text-lightGray font-open-sans">Dictionary</a>
            <a href="#" class="text-base text-lightGray font-open-sans">Events</a>
            <a href="#" class="text-base text-lightGray font-open-sans">Health &amp; Wellness</a>
            <a href="#" class="text-base text-lightGray font-open-sans">Sustainability</a>
            <a href="#" class="text-base text-lightGray font-open-sans">Facts &amp; Myths</a>
            <a href="#" class="text-base text-lightGray font-open-sans">Producers</a>
            <a href="#" class="text-base text-lightGray font-open-sans">Recipes</a>
            <a href="#" class="text-base text-lightGray font-open-sans">Resource Library</a>
          </div>
        </div>

        <div class="footer-right px-3 md:px-0">
          <div class="footer-social side-by-side flex flex-row justify-between items-center pt-6 pb-6">
            <a href="#" class="pr-6"><i class="fab fa-facebook-f fa-2x"></i></a>
            <a href="#" class="pr-6"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="#" class="pr-6"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="#" class="pr-6"><i class="fab fa-pinterest-p fa-2x"></i></a>
            <a href="#" class="pr-6"><i class="fas fa-rss fa-2x"></i></a>
          </div>

          <p class="footer-copy text-center text-lg text-lightGray font-brandon-grotesque">If you have any questions or comments about any of the content of this site, please contact us.</p>
          
          <div class="footer-button side-by-side text-center py-10 md:py-4"><a href="#" class="rounded-full border-white border-2 py-3 px-10 text-white text-lg font-open-sans font-bold">Contact Us</a></div>
          
          <p class="footer-copyright md:pt-4 text-center text-lg text-lightGray font-brandon-grotesque">
            &copy; 2021 CheeseWorld Inc. <a href="#" class="underline">Terms of Use</a> | <a href="#" class="underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style>
  .footer-links a {
    flex: 0 32%;
    height: 20px;
    margin-bottom: 20px;
  }
  .footer-social svg {
    color: #ffffff;
  }
  .footer-right {
    display: flex;
    flex-flow: column wrap;
  }
  @media screen and (min-width: 1024px) {
    .footer-copy {
      order: 1;
    }

    .footer-social {
      order: 2;
    }

    .footer-button {
      order: 3;
    }

    .footer-copyright {
      order: 4;
    }
  }
</style>