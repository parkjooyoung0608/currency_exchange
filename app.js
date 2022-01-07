
// 3. 환율정보 들고오기
// 4. 드랍다운 리스트ㅔㅇ서 아이템을 선택하면 아이템이 바뀜 
// 5. 금액을 입력하면 환전이 된다.
// 6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 된다.
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
    }));

document
    .querySelectorAll("#to-currency-list a")
    .forEach(menu => menu.addEventListener("click", function(){
        document.getElementById("to-button").textContent = this.textContent;
        toCurrency = this.textContent;
    }));