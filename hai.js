
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.product-card button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Item added to cart!');
            });
        });
    });
