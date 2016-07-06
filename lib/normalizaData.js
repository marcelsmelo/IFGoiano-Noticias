let normaliza = (data, hora)=>{
  let date = data.split('/');
  let time = hora.split('h');
  console.log(new Date('20'+date[2], date[1]-1, date[0], time[0], time[1],0,0));
}

normaliza('18/06/16', '11h40');
