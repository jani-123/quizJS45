function ejercicio2(array)
{
	var arreglos = array.forEach(function (item, index) {
		    var pares =[];
		    var impares = [];
		
			if(index % 2 != 0)
			{
				impares.push(item);
				console.log("impares : " , impares )
			}
			else
			{
				pares.push(item);
			    console.log("pares : " , pares );
			}
		
   
    });

}
ejercicio2([0,1,0,1])