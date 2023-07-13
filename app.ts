let cl= console.log;


type combine  = string | number
// + operator can not be applied in combine type


function add(n1:combine, n2:combine,resultOf:"as-string"){
    if(typeof n1 === "number" && typeof n2 === "number"){
        return n1 +n2 

    }else{
        return  n1.toString() + n2.toString
    }
}

cl(add (10,20,"as-number"))