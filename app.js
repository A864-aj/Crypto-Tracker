const form = document.querySelector('#searchForm');
var upd;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(upd){
        clearTimeout(upd);
    }
    const ctype = form.elements.coinType.value;
    console.log(ctype);
    fetchPrice(ctype);
})
const fetchPrice = async (ctype) => {
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const symbol = r.data.coin.symbol;
    const marketcap = r.data.coin.marketCap;
    const priceChange1H = r.data.coin.priceChange1h;
    const priceChange1D = r.data.coin.priceChange1d;
    const icon= r.data.coin.icon;

    const table = document.querySelector('#chart');



    table.innerHTML = ` <tr style="background-color:#7c2ccd; color:white; font-weight:700">
  <td style="background-color:#7c2ccd; color:white; font-weight:700">Property</td>
  <td style="background-color:#7c2ccd; color:white; font-weight:700">Value</td>
</tr><tr >
  <td>Symbol</td>
  <td >${symbol}</td>
</tr>
<tr>
  <td>Price</td>
  <td >${price}</td>
</tr>
<tr>
  <td>Volume</td>
  <td >${volume}</td>
</tr>
<tr>
  <td>Market Cap</td>
  <td >${marketcap}</td>
</tr>
<tr>
  <td>1H Change</td>
  <td >${priceChange1H}</td>
</tr>
<tr>
  <td>24H Change</td>
  <td>${priceChange1D}</td>
</tr>
<tr>
<td>Icon</td>
<td><img src="${icon}" alt=""></td>
</tr>`
upd = setTimeout(()=>fetchPrice(ctype),10000);
} 

