document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('#from').onchange = () => {
        fetch('https://v6.exchangerate-api.com/v6/43abef0af5b6cf8d571df61d/latest/USD')
        .then(response => response.json())
        .then(data => {
                document.querySelector('#currency1_val').addEventListener('keyup', function(){
                    const currency1 = document.querySelector('#from').value;
                    const currency2 = document.querySelector('#to').value;
    
                    const rate1 = data.conversion_rates[currency1];
                    const rate2 = data.conversion_rates[currency2];
    
                    let d;
                    let e;
        
                    let currency1_val = document.querySelector('#currency1_val').value;

                        if(currency1_val.length > 0){
                            d = (1 / rate1) * Number(currency1_val);
                            e = (d * rate2).toFixed(2);

                            document.querySelector('#currency2_val').value = e;

                            let res = `${document.getElementById('currency1_val').value} ${currency1} is equal to ${e} ${currency2}`
                            document.getElementById('result').innerHTML = res;
                        }
                        else{
                            document.querySelector('#currency2_val').value = '';
                        }
                })
                
            }).catch(error => {
                console.log('Error: ', error);
        });
    };
    document.querySelector('#to').onchange = () => {
        fetch('https://v6.exchangerate-api.com/v6/43abef0af5b6cf8d571df61d/latest/USD')
        .then(response => response.json())
        .then(data => {
            document.addEventListener('keyup', function(){
                const currency1 = document.querySelector('#to').value;
                const currency2 = document.querySelector('#from').value;

                const rate1 = data.conversion_rates[currency1];
                const rate2 = data.conversion_rates[currency2];

                let d;
                let e;

                let currency2_val = document.querySelector('#currency2_val').value;

                if(currency2_val.length > 0){
                    d = (1 / rate1) * Number(currency2_val);
                    e = (d * rate2).toFixed(2);

                    document.querySelector('#currency1_val').value = e;

                    let res = `${document.getElementById('currency2_val').value} ${currency1} is equal to ${e} ${currency2}`
                    document.getElementById('result').innerHTML = res;
                }
                else{
                    document.querySelector('#currency1_val').value = '';
                }
            })  
            }).catch(error => {
                console.log('Error: ', error);
        });
    };
});