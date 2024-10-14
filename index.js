let os=document.getElementById('os')

function display(txt)
{
    os.value=os.value+txt;
}
function Clear()
{
    os.value="";
}

function del()
{

    os.value=os.value.slice(0,-1);

}

function cube()
{
    os.value=os.value*os.value*os.value;
}

function calculate()
{
    os.value=eval(os.value);
}

function memorysave()
{
    localStorage.setItem(key, JSON.stringify(value));
}
function memoryrecall()
{
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

