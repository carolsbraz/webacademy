const lorems = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Orci ac auctor augue mauris. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Pellentesque elit eget gravida cum sociis. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Ac tincidunt vitae semper quis lectus nulla at volutpat. Lorem ipsum dolor sit amet consectetur adipiscing. Tellus rutrum tellus pellentesque eu tincidunt.',
  'Etiam convallis sit amet elit non rutrum. Aliquam fermentum fringilla lectus, et faucibus mauris aliquet non. Phasellus mi velit, pretium nec venenatis eu, vestibulum a odio. Cras fringilla ullamcorper lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tincidunt, dolor nec facilisis efficitur, sapien dolor efficitur arcu, pretium maximus mauris augue non est. Proin blandit nisl dolor, ut vulputate diam ullamcorper eu. Integer fermentum est vel mattis dignissim. Aenean et lacus dui. In non velit vitae augue semper pellentesque id a augue. Sed vel tellus lectus. ',
  'Tristique senectus et netus et malesuada fames ac. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Nisl vel pretium lectus quam id leo. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Vestibulum rhoncus est pellentesque elit. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt ornare massa eget egestas purus viverra accumsan. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Euismod in pellentesque massa placerat duis ultricies. Quam quisque id diam vel quam elementum pulvinar etiam non. Phasellus vestibulum lorem sed risus ultricies. Mauris commodo quis imperdiet massa. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Quis risus sed vulputate odio ut.',
  'Sit amet massa vitae tortor condimentum. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Velit aliquet sagittis id consectetur. Habitant morbi tristique senectus et netus et malesuada fames. In massa tempor nec feugiat. Pretium viverra suspendisse potenti nullam. Integer feugiat scelerisque varius morbi enim. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. At augue eget arcu dictum varius duis at consectetur. Quisque sagittis purus sit amet. Ultrices sagittis orci a scelerisque purus semper eget duis at. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.',
  'Sed tristique gravida felis non tristique. Sed interdum mi quis viverra eleifend. Nam at viverra sapien, vel bibendum ipsum. Maecenas vel viverra ante. Vestibulum dictum feugiat velit, non volutpat eros vulputate sit amet. Proin id sodales neque. Quisque dui nulla, tristique at erat ut, iaculis posuere diam. Donec quis aliquam diam. Mauris in risus a tortor mollis sagittis. Phasellus tincidunt lacinia rutrum. Vivamus venenatis sollicitudin arcu, sit amet fringilla metus rhoncus vitae. Nunc arcu felis, fermentum a tempus a, mollis ac urna. Nulla a enim sit amet massa egestas auctor a at urna. Quisque dapibus, quam vitae pharetra consequat, lorem sem luctus ex, porta vulputate justo libero vel elit. Sed in accumsan nunc. Nulla facilisi. ',
  'Ut tellus elementum sagittis vitae. Sit amet purus gravida quis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Phasellus egestas tellus rutrum tellus pellentesque eu. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. A diam sollicitudin tempor id eu nisl nunc. Lacus luctus accumsan tortor posuere ac ut consequat semper. In fermentum posuere urna nec. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Sed risus ultricies tristique nulla. Pellentesque massa placerat duis ultricies.',
  'Libero id faucibus nisl tincidunt eget nullam non nisi. Amet massa vitae tortor condimentum lacinia quis vel eros. Maecenas pharetra convallis posuere morbi leo urna molestie at. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Lectus proin nibh nisl condimentum id venenatis a. A lacus vestibulum sed arcu non odio euismod. Sodales ut eu sem integer vitae justo eget magna. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Aliquam eleifend mi in nulla posuere. Ac feugiat sed lectus vestibulum. Ut ornare lectus sit amet. Scelerisque in dictum non consectetur a erat. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Neque sodales ut etiam sit amet nisl purus in mollis. Interdum varius sit amet mattis vulputate enim nulla aliquet. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Adipiscing elit duis tristique sollicitudin nibh.',
  'In in volutpat dui. Phasellus vehicula euismod vehicula. Sed placerat molestie ligula nec congue. Donec facilisis quis tellus et imperdiet. Maecenas vehicula orci eget massa pretium, et dapibus elit semper. Phasellus malesuada magna ullamcorper tincidunt hendrerit. Proin at odio ut nunc convallis ornare sit amet id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas posuere sit amet est ut venenatis. Sed convallis nulla turpis, consectetur euismod erat elementum eu. Pellentesque lobortis mattis nunc, nec auctor nisi dictum ac. Cras vitae massa et magna facilisis mattis quis ac dolor. Morbi nec nisi lacus. ',
  'Quisque egestas diam in arcu cursus. Condimentum vitae sapien pellentesque habitant morbi tristique. Duis at consectetur lorem donec. Id nibh tortor id aliquet lectus proin nibh. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Risus pretium quam vulputate dignissim suspendisse in est. In tellus integer feugiat scelerisque varius morbi enim. Massa sed elementum tempus egestas sed sed risus. Nunc consequat interdum varius sit amet mattis vulputate enim. Et sollicitudin ac orci phasellus egestas tellus rutrum. Velit egestas dui id ornare arcu odio. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. At lectus urna duis convallis convallis.',
  'Duis lobortis id felis eget dapibus. Suspendisse eu sem at risus molestie porta. Sed feugiat, turpis quis tincidunt placerat, elit lorem viverra risus, at feugiat enim dui a elit. In a turpis felis. Fusce eu orci ac massa dictum tincidunt sed eget sapien. Morbi suscipit nibh et eros ullamcorper sagittis. Aenean in est diam. Fusce aliquam augue erat. Phasellus vel turpis aliquam, varius turpis finibus, elementum eros. Donec ante tortor, feugiat id justo sed, fermentum congue sem. Vivamus sit amet scelerisque sem. Nullam ac magna quis lacus sagittis auctor. Vivamus consectetur elit ac justo pellentesque, non dictum neque accumsan.'
]

const generate = document.getElementById('generate')
const paragraphs = document.getElementById('paragraphs')
const lorem = document.getElementById('lorem')

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

generate.addEventListener('click', ()=>{
  let i = 0;
  let lenght = paragraphs.value;

  lorem.innerHTML = "";
  
  for(i == 0; i < lenght; i++){
    let loremRandom = random(0,9);
    console.log(lorems[loremRandom]);

    lorem.innerHTML += "<p>" + lorems[loremRandom] +"</p>";
  }
})


console.log("oi")