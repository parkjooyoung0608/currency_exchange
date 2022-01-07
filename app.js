// 7. 숫자를 한국어로 읽어준다.
// 8. 밑에 박스에서 숫자를 바꿔도 위에 환율이 적용 된다.

let currencyRatio = {
    USD: {
        KRW: 1198.04,
        USD: 1,
        VND: 22690.00,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00083,
        VND: 18.94,
        unit: "원"
    },
    VND: {
        KRW: 0.053,
        USD: 0.000044,
        VND: 1,
        unit: "동"
    },
}

let fromCurrency = 'USD';
let toCurrency = 'USD';

document
    .querySelectorAll("#from-currency-list a")
    .forEach(menu => menu.addEventListener("click", function(){
        document.getElementById("from-button").textContent = this.textContent;
        fromCurrency = this.textContent;
        convert();
    }));

document
    .querySelectorAll("#to-currency-list a")
    .forEach(menu => menu.addEventListener("click", function(){
        document.getElementById("to-button").textContent = this.textContent;
        toCurrency = this.textContent;
        convert();
    }));

function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    
    document.getElementById("to-input").value = convertedAmount;
}

