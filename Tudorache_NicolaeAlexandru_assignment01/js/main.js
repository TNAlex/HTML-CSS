// --- CONSTANTE INIȚIALE ---
const PRODUCT1_NAME = "Blazer";
const PRODUCT1_PRICE = 95;
const PRODUCT1_QTY = 1;

const PRODUCT2_NAME = "Boots";
const PRODUCT2_PRICE = 102;
const PRODUCT2_QTY = 1;

const VAT_RATE = 0.19;
const CURRENCY = "USD";
const USD_PER_EUR = 1.08;

// 1. Definirea șirului de cupoane valide (am eliminat RAW_COUPON)
const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

console.log("Tipul lui PRODUCT1_NAME:", typeof PRODUCT1_NAME);
console.log("Tipul lui PRODUCT1_PRICE:", typeof PRODUCT1_PRICE);
console.log("Tipul lui VAT_RATE:", typeof VAT_RATE);


function normalizeCoupon(code) {
    return code.trim().toUpperCase();
}


function isValidCoupon(code) {
    return VALID_COUPONS.includes(code);
}


function validateAndNotify() {
    const inputField = document.getElementById("promo-input");
    
    if (!inputField) return; 

    const code = inputField.value;
    const normalizedCode = normalizeCoupon(code);

    // Verificăm mai întâi dacă cuponul este valid
    if (isValidCoupon(normalizedCode)) {
        // Ramificare pentru mesaje specifice fiecărui cupon valid
        if (normalizedCode === "SAVE10") {
            alert("Cuponul dvs. oferă 10% reducere.");
        } else if (normalizedCode === "SAVE15") {
            alert("Cuponul dvs. oferă 15% reducere.");
        } else if (normalizedCode === "FREESHIP") {
            alert("Cuponul dvs. oferă livrare gratuită.");
        }
    } else {
        alert("Codul introdus nu este valid.");
    }
}

// --- LOGICĂ AUTENTIFICARE ---
function login(email, password) {
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();
    return (cleanEmail === "admin" && cleanPassword === "admin");
}

function handleLoginSubmit(event) {
    event.preventDefault(); 
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;

    if (login(emailValue, passwordValue)) {
        alert("Autentificare reușită!");
    } else {
        alert("Autentificare eșuată. Te rugăm să verifici datele introduse.");
    }
}


let suma = 0; // în $

function adaugaLaSuma(pret) {
    suma += pret;
    console.log("Produs adăugat. Suma totală curentă: $" + suma);
}

function afiseazaTotalCos(event) {
    event.preventDefault(); 
    alert("Suma totală curentă a comenzii este: $" + suma);
}

const allProducts = [
    { name: "Blazer", price: 95, qty: 15 },
    { name: "Boots", price: 102, qty: 5 },
    { name: "T-shirt", price: 12, qty: 50 },
    { name: "Retro Jeans", price: 70, qty: 8 },
    { name: "Leather Jacket", price: 150, qty: 3 },
    { name: "Summer Dress", price: 120, qty: 12 },
    { name: "Pleated Skirt", price: 45, qty: 20 },
    { name: "Sneakers", price: 85, qty: 7 },
    { name: "Crossbody Bag", price: 60, qty: 25 },
    { name: "Silk Scarf", price: 25, qty: 2 }
];


function calculateTotalStockValue() {
    let totalValue = 0;
    
    for (let product of allProducts) {
        totalValue += product.price * product.qty;
    }
    
    console.log("Valoarea totală a stocului: " + totalValue + " USD");
}


calculateTotalStockValue();

const lowStock = [];
for (let product of allProducts) {
    if (product.qty < 10) {
        lowStock.push(product);
    }
}

// Afișăm în consolă produsele cu stoc limitat
console.log("Produse cu stoc redus (sub 10 bucăți):", lowStock);


function findProductByName(list, searchName) {
    
    const normalizedSearch = searchName.toLowerCase().trim();
    
    for (let product of list) {
        // Normalizăm și numele produsului curent pentru o comparație corectă
        if (product.name.toLowerCase().trim() === normalizedSearch) {
            return product; 
        }
    }
    
    return null; 
}

// --- TESTARE CĂUTARE ÎN CONSOLĂ ---
console.log("--- Testare Căutare Produs ---");
// Căutare validă (cu litere mari, mici și spații)
console.log("Căutăm '  bOoTs  ':", findProductByName(allProducts, "  bOoTs  ")); 
// Căutare invalidă
console.log("Căutăm 'Geacă Iarnă':", findProductByName(allProducts, "Geacă Iarnă"));