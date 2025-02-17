
function functionforadd(balanceid, addingid) {
    const mybalanceElement = document.getElementById(balanceid);
    const mybalance = parseFloat(mybalanceElement.innerText) || 0; 

    const jaAddKorbo = functionfornumber(addingid);
    
    if (isNaN(jaAddKorbo)) {
        alert("Please enter a valid number.");
        return;
    }

 
    const mycurElement = document.getElementById('my-balance');
    const mycurvalue = parseFloat(mycurElement.innerText) || 0;

    
    const newbalance = mycurvalue - jaAddKorbo;
    if (newbalance < 0) {
        alert('Insufficient balance');
        return;
    }

    
    const totalbalance = mybalance + jaAddKorbo;
    mybalanceElement.innerText = totalbalance;
    mycurElement.innerText = newbalance; 

    document.getElementById(addingid).value = '';
    document.getElementById('my_modal_1').showModal();


    
    

    
}







function functionfornumber(id) {
    const value_string = document.getElementById(id).value.trim();
    

    if (!/^\d+(\.\d+)?$/.test(value_string)) {
        
        return NaN;
    }

    return parseFloat(value_string);
}





