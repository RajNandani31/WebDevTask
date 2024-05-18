

fetch('https://coding-week-2024-api.onrender.com/api/data').then((response)=>{
    console.log('resolved',response);
    return response.json();
}).then(data=>{
    function date_convert(date) {
        var year =date[0]+date[1]+date[2]+date[3];
        var month =date[5]+date[6];
        var day =date[8]+date[9];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        switch (month) {
            case '01':
                var output = months[0]+" "+day+", "+year;
                break;
            case '02':
                var output = months[1]+" "+day+", "+year;
                break;
            case '03':
                var output = months[2]+" "+day+", "+year;
                break;
            case '04':
                var output = months[3]+" "+day+", "+year;
                break;
            case '05':
                var output = months[4]+" "+day+", "+year;
                break;
            case '06':
                var output = months[5]+" "+day+", "+year;
                break;
            case '07':
                var output = months[6]+" "+day+", "+year;
                break;
            case '08':
                var output = months[7]+" "+day+", "+year;
                break;
            case '09':
                var output = months[8]+" "+day+", "+year;
                break;
            case '10':
                var output = months[9]+" "+day+", "+year;
                break;
            case '11':
                var output = months[10]+" "+day+", "+year;
                break;
            case '12':
                var output = months[11]+" "+day+", "+year;
                break; 
            default:
                break;
        }
        return(output);
        }

   
    var abc=document.querySelector(".Image1");
    abc.innerHTML+=`<p class="Head1">${data[0].headline}<\p>`;
    abc.innerHTML+=`<button class="Type1">${data[0].type}<\p>`;
    abc.innerHTML+=`<p class="Date">${date_convert(data[0].date)}<\p>`;
    abc.innerHTML+=`<p class="Author1">${data[0].author}<\p>`;

    var abc=document.querySelector(".Image2");
    abc.innerHTML+=`<p class="Head2">${data[2].headline}<\p>`;
    abc.innerHTML+=`<button class="Type2">${data[2].type}<\p>`;
    abc.innerHTML+=`<p class="Date">${date_convert(data[2].date)}<\p>`;
    abc.innerHTML+=`<p class="Author2">${data[2].author}<\p>`;


    var abc=document.querySelector(".Image3");
    abc.innerHTML+=`<p class="Head3">${data[1].headline}<\p>`;
    abc.innerHTML+=`<button class="Type3">${data[1].type}<\p>`;
    abc.innerHTML+=`<p class="Date">${date_convert(data[1].date)}<\p>`;
    abc.innerHTML+=`<p class="Author3">${data[1].author}<\p>`;


    var abc=document.querySelector(".Image4");
    abc.innerHTML+=`<p class="Head4">${data[4].headline}<\p>`;
    abc.innerHTML+=`<button class="Type4">${data[4].type}<\p>`;
    abc.innerHTML+=`<p class="Date">${date_convert(data[4].date)}<\p>`;
    abc.innerHTML+=`<p class="Author4">${data[4].author}<\p>`;

    

    var abc=document.querySelector(".Headline1_")
    abc.innerHTML+=`${data[3].headline}`;
    var abc=document.querySelector(".Date1")
    abc.innerHTML+=`${date_convert(data[3].date)}`;

    var abc=document.querySelector(".Headline2_")
    abc.innerHTML+=`${data[5].headline}`;
    var abc=document.querySelector(".Date2")
    abc.innerHTML+=`${date_convert(data[5].date)}`;

    var abc=document.querySelector(".Headline3_")
    abc.innerHTML+=`${data[6].headline}`;
    var abc=document.querySelector(".Date3")
    abc.innerHTML+=`${date_convert(data[6].date)}`;

    var abc=document.querySelector(".Headline4_")
    abc.innerHTML+=`${data[7].headline}`;
    var abc=document.querySelector(".Date4")
    abc.innerHTML+=`${date_convert(data[7].date)}`;

    var abc=document.querySelector(".Headline5_")
    abc.innerHTML+=`${data[8].headline}`;
    var abc=document.querySelector(".Date5")
    abc.innerHTML+=`${date_convert(data[8].date)}`;

    var abc=document.querySelector(".Headline6_")
    abc.innerHTML+=`${data[9].headline}`;
    var abc=document.querySelector(".Date6")
    abc.innerHTML+=`${date_convert(data[9].date)}`;

    

    const style=document.querySelector("style")
    style.innerHTML+=`.Image1{background-image: url(${data[0].image})}`;
    style.innerHTML+=`.Image2{background-image: url(${data[2].image})}`;
    style.innerHTML+=`.Image3{background-image: url(${data[1].image})}`;
    style.innerHTML+=`.Image4{background-image: url(${data[4].image})}`;
    style.innerHTML+=`.img1{background-image: url(${data[3].image})}`;
    style.innerHTML+=`.img2{background-image: url(${data[5].image})}`;
    style.innerHTML+=`.img3{background-image: url(${data[6].image})}`;
    style.innerHTML+=`.img4{background-image: url(${data[7].image})}`;
    style.innerHTML+=`.img5{background-image: url(${data[8].image})}`;
    style.innerHTML+=`.img6{background-image: url(${data[9].image})}`;
    

    

}).catch((err)=>{

    console.log('rejected',err);
})

