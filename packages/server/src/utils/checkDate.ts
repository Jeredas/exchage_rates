export const  checkDate = (date:string) =>{
    console.log(date);
    const dateDay = date.split('T')[0].split('-')[2];
    console.log(dateDay);
    const today = new Date().getDate().toString();
    console.log(today);
    return dateDay === today;
}