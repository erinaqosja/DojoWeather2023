
function remove(item)
{
    var item = document.querySelector("#cookies");
    item.remove();
}


function changeTemp(el)

{ 
    for (var i = 1; i <= 8; i++)
    {
        var temp = document.querySelector("#t" + i); 
        var int = parseInt(temp.innerText);  //parses a value as a string

        if (el.value == "°F")
        { temp.innerText = (Math.round((int*1.8) + 32) + "°"); }

        else if (el.value == "°C")
        { temp.innerText = (Math.round((int-32) / 1.8) + "°"); }
    }

}

