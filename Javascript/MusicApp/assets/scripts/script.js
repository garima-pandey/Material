window.addEventListener("load", initEvents);

var audio;

function initEvents()
{
    audio = document.getElementById("audio");
    var ul = document.getElementById("songList");
    for(var i = 0; i < songsArray.length; i++)
    {
        var li = document.createElement("li");
        var icon = document.createElement("img");
        icon.setAttribute('src', 'assets/images/play.png');
        li.innerHTML = songsArray[i].songName;
        li.appendChild(icon);
        li.className = 'list-group-item';
        ul.appendChild(li);
        li.addEventListener("click", playSong);
    }
}

function playSong(evt)
{
    var songName = evt.srcElement.innerText;
    var songUrl;

    for(var i = 0; i < songsArray.length; i++)
    {
        if(songsArray[i].songName == songName)
        {
            songUrl = songsArray[i].songUrl;
        }
    }
    audio.src = songUrl;
    audio.play();
}