function result(){
    let total_units = document.getElementById("units_no").value
    let unit_cost = document.getElementById("units_rate").value
    let output = 0;
    let tax =0;
    let fixed_govt_charge = 3000

    if(total_units<100)
    {
        tax = 0;
        output = (total_units*unit_cost) + fixed_govt_charge + (tax*total_units)
        document.getElementById("calculate").innerHTML = ("The bill is ")+ output 
    }

    if(total_units<300)
    {
        tax = 0.25;
        output = (total_units*unit_cost) + fixed_govt_charge + (tax*total_units)
        document.getElementById("calculate").innerHTML = ("The bill is ")+ output 
    }

    if(total_units >= 300)
    {
        tax = 0.5;
        output = (total_units*unit_cost) + fixed_govt_charge + (tax*total_units)
        document.getElementById("calculate").innerHTML = ("The bill is ")+ output 
    }
}




