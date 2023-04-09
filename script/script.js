let urls = [{ url: 'images/Background-H.jpg' }, { url: 'images/background.jpg' }, { url: 'images/bg1.jpg' }]
    let img = document.getElementById('img');
    let index=0;
    img.innerHTML=`<img src=${urls[index].url} alt="">`
    setInterval(() => {
        index++;
        if(index==urls.length)
        {
            index=0;
        }
        img.innerHTML=`<img src=${urls[index].url} alt="">`
    }, 3000);