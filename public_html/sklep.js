function dodajproduktt(i)
{ //utworzenie obiektu o odpowiednich atrybutach:
var item = {};
item.nazwa=document.getElementsByClassName('card-title')[i].textContent;
item.cena=document.getElementsByClassName('cena')[i].textContent;
item.ilosc = document.getElementsByClassName('ilosc')[i].value+"szt.";
//odczyt listy obiektów z localStorage (jeśli już istnieje):
//dodaj nowy obiekt do listy
var itemki = JSON.parse(localStorage.getItem('storczyki'));
if (itemki===null) itemki=[]; //pracujemy z tablicą obiektów
if(item.ilosc==="szt.") alert("Ustaw ilość sztuk!");
else itemki.push(item); //dodaj nowy obiekt do listy
localStorage.setItem('storczyki', JSON.stringify(itemki));
 //zapisz nową listę
} 

function pokazkoszyk()
{ var itemki = JSON.parse(localStorage.getItem('storczyki'));
var el=document.getElementById('koszyk');
var str="<table border=1>";
if (itemki===null) el.innerHTML=str+"<p>Koszyk jest pusty</p>";
else {
for(i=0;i<itemki.length;i++) //pobierz informacje o zadaniach z listy
{
    str+='<tr>'+'<td>'+"<button class='btn btn-danger btn-sm' onclick='usunprzedmiot("+i+")' >X </button>"+'</td>'+'<td>'+ 
            itemki[i].nazwa+'</td>' +'<td>'+ itemki[i].cena +'</td>'+
        '<td>'+itemki[i].ilosc + '</td>'+'</tr>';
}
str+="</table>";
str+='<br/> <button class="btn btn-primary btn-sm" onclick="zamow()">Zamów</button>';
el.innerHTML=str;
}
}

function usunkoszyk()
{
localStorage.clear(); //usuń całą listę z localStorage
pokazkoszyk(); //zaktualizuj widok na stronie
}

function zamow()
{
var pom=document.getElementById('forma');
$("#forma").fadeIn('slow');

//pom.style.display="block";

}

function usunprzedmiot(i)
{ var itemki = JSON.parse(localStorage.getItem('storczyki'));
//usuń i-ty element z listy zadań:
if (confirm("Usunąć przedmiot?")) itemki.splice(i,1);
//zapisz zaktualizowaną listę w localStorage:
localStorage.setItem('storczyki', JSON.stringify(itemki)); //zapisz listę
pokazkoszyk(); //zaktualizuj widok na stronie
}


function czygit()
{
    var imie=document.getElementById('imie').checkValidity();
    var nazwisko=document.getElementById('nazwisko').checkValidity();
    var kodpoczt=document.getElementById('kodpoczt').checkValidity();
    var miejscowosc=document.getElementById('miejscowosc').checkValidity();
    var ulica=document.getElementById('ulica').checkValidity();
    var email=document.getElementById('email').checkValidity();
    var telefon=document.getElementById('telefon').checkValidity();
    var numerkarty=document.getElementById('numerkarty').checkValidity();
    var miesiac=document.getElementById('miesiac').checkValidity();
    var rok=document.getElementById('rok').checkValidity();
    var kodcvv=document.getElementById('kodcvv').checkValidity();

    if(!imie)
    {
        alert("Imię złe!");
    return false;
    }
    
    if(!nazwisko)
    {
        alert("Nazwisko złe!");
    return false;
    }
    
    if(!kodpoczt)
    {
        alert("Kod pocztowy zły!");
    return false;
    }
    
    if(!miejscowosc)
    {
        alert("Miejscowość zła!");
    return false;
    }
    
    if(!ulica)
    {
        alert("Ulica zła!");
    return false;
    }
    
    if(!email)
    {
        alert("E-mail zły!");
    return false;
    }
    
    if(!telefon)
    {
        alert("Telefon zły!");
    return false;
    }
    
    if(!numerkarty)
    {
        alert("Numer karty zły!");
    return false;
    }
    
    if(!miesiac)
    {
        alert("Miesiąc zły!");
    return false;
    }
    
    if(!rok)
    {
        alert("Rok zły!");
    return false;
    }
    
    if(!kodcvv)
    {
    alert("Kod CVV zły!");
    return false;
    }
    
    return true;
    
    
}