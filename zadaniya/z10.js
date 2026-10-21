function bingo(ticket, win){
  let miniwin=0,a=false;
  for(let i=0;i<ticket.length;i++){
    a=false;
    for(let j=0;j<ticket[i][0].length;j++){
      if(ticket[i][0][j].charCodeAt(0)==ticket[i][1] && a==false){
        miniwin++;
        a=true;
        }
    }
  }
  return (miniwin>=win)?"Winner!":"Loser!";
}