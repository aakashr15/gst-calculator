// GST calculation


function  calcgst (){

    var emp1 = document.getElementById('cost').value;
    var emp2 = document.getElementById('gst').value;
    var msg = document.querySelector('.alertText');

    if (emp1 != "" && emp2 != "") {

        msg.classList.add('d-none')

        var cost = parseInt(document.getElementById('cost').value);
        var gst = parseInt(document.getElementById('gst').value);
        
        var tax1 = (cost*(gst/100));
            tax = tax1.toFixed(2);
        var total = cost + tax1;
        
        document.getElementById('tax').value = tax;
        document.getElementById('total').value = total;
    
        // Recent table
        bringRecent = document.querySelector('.recent');
        bringRecent.classList.remove('d-none');
    
        const Trecent = document.getElementById("recent");
    
        // Create new row
        const newRow = document.createElement("tr");
        const Tamount = document.createElement("td");
        const Tgst = document.createElement("td");
        const Ttax = document.createElement("td");
        const Ttotal = document.createElement("td");
        Tamount.textContent = cost;
        Tgst.textContent = gst;
        Ttax.textContent = tax;
        Ttotal.textContent = total;
        Ttotal.textContent = total;
        newRow.appendChild(Tamount);
        newRow.appendChild(Tgst);
        newRow.appendChild(Ttax);
        newRow.appendChild(Ttotal);
        
        // Add new row to table
        Trecent.insertBefore(newRow, Trecent.firstChild);

    } else {
        
        msg.classList.remove('d-none')

        if (emp1 == "" && emp2 == "") {
            let err = "Enter the Amount & GST Rate"
            msg.innerHTML = err;
        } else if (emp2 == "") {
            let err = "Enter the GST Rate"
            msg.innerHTML = err;
        } else {
            let err = "Enter the Amount"
            msg.innerHTML = err;
        }
    }
    

};

