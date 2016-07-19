module.exports = (data, hora)=>{
  let date = data.split('/');
  let time = hora.split('h');
  return new Date('20'+date[2], date[1]-1, date[0], time[0], time[1],0,0);
}
