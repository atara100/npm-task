  const oneLinerJoke = require('one-liner-joke');
   const jokeArr=[];

module.exports={
  jokeArr,
  jokes: function (num){
  for(let i=0 ;i<num ;i++){
    jokeArr.push(oneLinerJoke.getRandomJoke());
   }
   console.log(jokeArr);
  }
}