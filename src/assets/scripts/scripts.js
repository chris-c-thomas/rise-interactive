const seeMore = document.getElementById('seeMore');
seeMore.addEventListener('click', e => {
  for (let i=0; i < 4; i++) {
    const card = document.createElement('div');
    card.className = 'card card-11 card-hidden shadow-lg mt-4 mb-4';

    const cards = document.getElementById('cards');
    card.innerHTML = `
    <img src="../img/img-11.jpg" alt="Pepperoni Pizza">
    <h3 class="text-center text-sm text-darkGray font-brandon-grotesque font-bold pt-4 pb-1">ARTICLE</h3>
    <div class="card-break w-8 h-1 mx-auto m-2 bg-green"></div>
    <h2 class="text-lg text-black text-center font-brandon-grotesque font-bold p-2 mb-4">Cheesy Pasta The Will Blow Your Mind</h2>
    `
    cards.appendChild(card);
  }
});
