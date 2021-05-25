const fs = require('fs');

function renderTemplate(game_name, img_template) {
  return `
  <div class="fh5co-project masonry-brick">
        <a href="games/${game_name}">
          <img src="images/${img_template}" alt="${game_name} game">
          <h2>${game_name}</h2>
        </a>
  </div>`;
}

function getGames() {
  let dirs = fs.readdirSync('./games');
  console.log(dirs);
  let games_file = fs.readFileSync('./games.html', 'utf-8');
  
  let games = '';
  dirs.forEach((dir) => {
    let templ = renderTemplate(dir, 'game_img_template.jpg');
    games += templ;   
   
  });
  
  games_file = games_file.replace(new RegExp('\{\{ games_loop \}\}'), games);


  fs.writeFileSync('./games.html', games_file);
}

getGames();
