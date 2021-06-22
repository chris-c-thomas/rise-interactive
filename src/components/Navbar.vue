<template>
  <nav class="w-full">
    <div class="navbar shadow-lg">
      <i class="nav-bars self-center fas fa-bars fa-2x cursor-pointer"></i>

      <img src="../assets/img/CheeseWorld.png" alt="Cheese World Logo" class="cursor-pointer self-center w-36">

      <a href="#" class="nav-links self-center text-lg text-black font-open-sans font-bold">Health &amp; Wellness</a>
      <a href="#" class="nav-links self-center text-lg text-black font-open-sans font-bold">Sustainability</a>
      <a href="#" class="nav-links self-center text-lg text-black font-open-sans font-bold">Facts &amp; Myths</a>
      <a href="#" class="nav-links self-center text-lg text-black font-open-sans font-bold">Producers</a>
      <a href="#" class="nav-links self-center text-lg text-black font-open-sans font-bold">Recipes</a>

      <div class="search-input self-center">
        <i class="fas fa-search"></i>
        <input type="text" class="self-center border-darkGray border-2 rounded-full w-52 h-8">
      </div>

      <i class="nav-search-icon self-center fas fa-search fa-2x cursor-pointer"></i>
    </div>
  </nav>
</template>

<script>

</script>

<style>
  .navbar {
    display: flex;
    flex-wrap: row;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-links:hover,
  .nav-links:focus {
    text-decoration: underline;
  }

  .nav-links,
  .search-input{
    display: none;
  }

  .search-input .fas {
    position: absolute;
    margin-left: 12px;
    margin-top: 8px;
  }

  .search-input input,
  .search-input:focus {
    outline: none;
  }

  .fas {
    color: #333333;
  }

  @media screen and (min-width: 1024px) {
    .nav-links,
    .search-input {
      display: block;
    }

    .nav-bars,
    .nav-search-icon {
      display: none;
    }
  }
</style>


