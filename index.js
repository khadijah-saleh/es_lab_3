
////////////////////////////////////// task1 ///////////////////////////////////////////////

let fruits = ["apple", "strawberry", "banana", "orange", "mango", 2011]

let fruitsFilter = fruits.filter(function (item, index) {
    let x = 'is a string'
    return isNaN(item)

})

// console.log(fruitsFilter)


let fruitsFilter2 = fruits.filter(function (item, index) {
    if (isNaN(item)) {
        return item.startsWith('a')
    }
})

// console.log(fruitsFilter2)

let newarr = fruits.filter(function (item, index) {
    if (isNaN(item)) {
        if (item.startsWith('b') || item.startsWith('s'))
            return item
    }
})


// console.log(newarr)

/////////////////////////////////////////////////////



let newarr2 = fruits.reduce(function(value , item)
{
    value = 'I love '

    // console.log(value, item)
    return value + item
},'I love ')

// console.log(newarr2)

// console.log(fruits.reduce())
///////////////////////////////

let newarr3 = fruits.reduce(function (value, item) {
   
    // value = 'I love '
       value.push('i love '+item)
    return value ;
  }, []);
  
  console.log(newarr3); // [ 18, 21, 1, 51, 5, 7, 10 ]


/////////////////////////////////////////////////////// task2 ////////////////////////////////////////////////

function changeFun() {

    var in1 = document.getElementById('in').value
   
     fetch('https://jsonplaceholder.typicode.com/posts?id='+in1).then(function(data)
     {

        // console.log(in1)
            data.json().then(function(parsed)
            {
                // console.log(parsed)
            })

     })

//     async function getData()
//     {
//         let data = await fetch('https://jsonplaceholder.typicode.com/posts?id='+in1)

//         let newpro = await data.json()
//         console.log(newpro)
    
//     }
    
// getData()
}


///////////////////////////////////////////////////////////////////////////////////////


async function getData2() {
    let data2 = await fetch('https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products')

    let newpro = await data2.json()

    for(var i = 0 ; i < newpro.length ; i++){

        var newdiv = document.createElement("div") ;
        newdiv.style.border = '1px solid green'
        newdiv.style.width = '40%'
        newdiv.style.textAlign = 'center'
        // var atr = document.createAttribute("class") ;
        // newdiv.setAttributeNodeNS(atr)
        // atr.value = "divstyle" ;

        var img=document.createElement("img");
        img.setAttribute("src" , newpro[i].image)
        img.setAttribute("width","200px")
        img.setAttribute("height","200px")

        var p1 = document.createElement("p") ;
        p1.innerText = newpro[i].name ;
        p1.style.color = "gray"

        var p2 = document.createElement("p") ;
        p2.innerText = newpro[i].price ;
        p2.style.color = "red"

      
       
      
       newdiv.appendChild(p1) ;
       newdiv.appendChild(img) ;
       newdiv.appendChild(p2) ;
       document.body.appendChild(newdiv)

    }
}

getData2()

/////////////////////////////////////////////////////////////////////////////////////////////////


