
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

    
    const modal = document.getElementById('my_modal_1');
    if (modal && typeof modal.showModal === 'function') {
        modal.showModal();
    }

    





    const historyContainer = document.getElementById('history-here');
    const now = new Date();
    const dateTime = now.toLocaleDateString() + " " + now.toLocaleTimeString();

   
    const entryDiv = document.createElement('div');
    entryDiv.classList.add("border", "border-gray-300", "p-2.5", "my-1", "rounded-md", "bg-gray-50", "font-bold");

    
    const entryText = document.createElement('p');
    if (balanceid === 'noakhali-balance' || balanceid === 'noakhali2-balance') {
        entryText.textContent = `Donated ${jaAddKorbo} taka for flood-affected people in Noakhali on ${dateTime}`;
    } else if (balanceid === 'andolon-balance') {
        entryText.textContent = `Donated ${jaAddKorbo} taka for injured people in the quota movement on ${dateTime}`;
    }

    
    entryDiv.appendChild(entryText);
    historyContainer.appendChild(entryDiv);

   
    const historyData = localStorage.getItem('donationHistory') ? JSON.parse(localStorage.getItem('donationHistory')) : [];
    historyData.push(entryDiv.innerHTML); 
    localStorage.setItem('donationHistory', JSON.stringify(historyData));
}


function loadHistory() {
    const historyContainer = document.getElementById('history-here');
    const historyData = localStorage.getItem('donationHistory') ? JSON.parse(localStorage.getItem('donationHistory')) : [];

    historyData.forEach(entryHTML => {
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = entryHTML;
        entryDiv.classList.add("border", "border-gray-300", "p-2.5", "my-1", "rounded-md", "bg-gray-50", "font-bold");
        historyContainer.appendChild(entryDiv);
    });
}


document.addEventListener('DOMContentLoaded', loadHistory);







function functionfornumber(id) {
    const value_string = document.getElementById(id).value.trim();
    

    if (!/^\d+(\.\d+)?$/.test(value_string)) {
        
        return NaN;
    }

    return parseFloat(value_string);
}




  

