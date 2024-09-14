function showCategory(categoryId) {
    // Hide all categories
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(category => {
        category.style.display = 'none';
    });

    // Show the selected category
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}
