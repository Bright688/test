let max_num=0;
const arrays=[5, 6, 10, 55, 60, 1]        //list of arrays
arrays.map(num=> {                        //map the list of arrays     
    if(num>max_num){
        max_num=num;                       //store the highest numbes in max_num
    }
})

console.log(max_num)
