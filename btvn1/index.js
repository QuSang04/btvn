//tinh binh phuong
let num = [3,4,5,6,7,77];
for (let i = 0; i < num.length; i++) {
    console.log( "ket qua binh phuong", num[i], "la  :",num[i]**2)
}

    
//tim so nguyen to
let num2 = [3,5,6,7,8,9,10,11,12,13,14,15,16,33];
for (let j = 0; j < num2.length; j++) {
    if ( num2[j] %2 != 0) { 
        if (num2[j]>3, num2[j]%3 !=0) {
            if (num2[j]>5, num2[j]%5 !=0) {
                console.log("so nguyen to la:", num2[j])
            }
            
        }
    }  
    
}
if (num2 =3) {
    console.log("so nguyen to la:", num2)    
}
if (num2=5) {
    console.log("so nguyen to la:", num2)
}

/*tao 1 gio hang hoa qua
STT: ???
Tên sản phẩm: ???
Giá: ???
Ngày hết hạn: ???
Đơn vị phân phối: tên đơn - địa  chỉ 
*/
const fruit1 = {
    number : 1,
    naMe : "apple",
    price : 18000,
    Date : "hsd",
    inFormation :{
        city:"hanoi",
        company:"sang"
    }
};
const fruit2 = {
    number : 2,
    naMe : "orange",
    price : 19000,
    Date : "hsd",
    inFormation :{
        city:"haiphong",
        company:"xin"
    }
};
const fruit3 ={
    number : 3,
    naMe : "coconut",
    price : 13000,
    Date : "hsd",
    inFormation :{
        city:"danang",
        company:"min"
    }
};
let cart =[]
cart.push(fruit1, fruit2, fruit3);
for (let i = 0; i < cart.length; i++) {
  console.log("STT: " + (i + 1));
  console.log("Tên sản phẩm: " + cart[i].naMe);
  console.log("Giá: " + cart[i].price);
  console.log("Ngày hết hạn: " + cart[i].Date);
  console.log("Đơn vị phân phối: " + cart[i].inFormation.city + "-" + cart[i].inFormation.company);
}
for(var i = 0; i < cart.length; i++) {    
    let updateDate = prompt("Ngay het han moi cua tung san pham : ");
    cart[i].Date = updateDate;
    console.log("Ngay het han moi cua:" + cart[i].naMe  +" la "+ cart[i].Date)    
}
