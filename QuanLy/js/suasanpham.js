document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products[index];

    if (product) {
        document.getElementById('productName').value = product.name;
        document.getElementById('category').value = product.category;
        document.getElementById('soLuong').value = product.quantity;
        document.getElementById('donGia').value = product.price;
    }

    const form = document.getElementById('editProductForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        product.name = document.getElementById('productName').value;
        product.category = document.getElementById('category').value;
        product.quantity = document.getElementById('soLuong').value;
        product.price = document.getElementById('donGia').value;

        products[index] = product;
        localStorage.setItem('products', JSON.stringify(products));
        window.location.href = 'quanlysanpham.html';
    });
});
