const categoriesAll = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesAll.length);


categoriesAll.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
});
