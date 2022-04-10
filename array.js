let arr= new myArray("a", "b", "c");

function myArray()
{
    Object.defineProperty(this, "length",
    {
        value:0,
        writable:true,
        enumerable:false,
    });
    this.length= arguments.length;
    for(let i=0; i<arguments.length; i++)
    {
        this[i]=arguments[i];
    }
}


myArray.prototype.धकेलो= function(value)
{
    let index=this.length;
    this[index]=value;
    this.length++;
}


myArray.prototype.हटाओ=function(value)
{
    let index=this.length-1;
    delete this[index];
    this.length--;
}

myArray.prototype.सबसेपहले=function(value)
{
    let index=this.length-1;
    return this[index];
}

myArray.prototype.छापोपुरी=function(value)
{
    let bag="";
    for(let i=0; i<this.length; i++)
    {
        bag=bag+this[i]+" ";
    }
    return bag;
}

myArray.prototype.उलटापुलटा=function(value)
{
    let bag="";
    for(let i=this.length-1; i>=0; i--)
    {
        bag=bag+this[i]+" ";
    }
    return bag;
}

myArray.prototype.लंबाई=function(value)
{
    return this.length;
}

console.log("My Original Array:", Object.values(arr))
arr.धकेलो("d");
console.log("धकेलो d:",Object.values(arr));
arr.धकेलो("e");
console.log("धकेलो e:",Object.values(arr));
arr.हटाओ();
console.log("हटाओ:",Object.values(arr))
let x=arr.सबसेपहले();
console.log("सबसे पहले:",x);
let y="["+arr.छापोपुरी()+"]";
console.log("छापो पुरी ऐरे",y)
let z="["+arr.उलटापुलटा()+"]";
console.log("उलटा छापो", z);
let f=arr.लंबाई();
console.log("ऐरे की लंबाई:", f);
