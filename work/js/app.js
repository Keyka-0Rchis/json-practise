document.addEventListener('DOMContentLoaded',() => {
    fetch('data/product.json')
    .then(response => response.json())
    .then(products => {
        const productTable = document.getElementById('productTable');
        for(let i = 0 ; i < products.length ; i++){
            //行を取り出し
            const product = products[i];
            //しまうtrを要素として用意
            const tr = document.createElement('tr');

            //tdにid列を用意
            const tdId = document.createElement('td');
            //id列に取り出した行のidの値をセット
            tdId.textContent = product.id;
            const tdName = document.createElement('td');
            tdName.textContent = product.name;
            const tdPrice = document.createElement('td');
            tdPrice.textContent = product.price;
            const tdDescription = document.createElement('td');
            tdDescription.textContent = product.description;
            //trの子要素をセット
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdDescription);
            //Tableにtrを子要素としてセット
            productTable.appendChild(tr);

////この書き方だと、stringを渡してしまって、構造を渡せない。
//            productTable.appendChild(`
//                ${product.id},
//                ${product.name},
//                ${product.price},
//                ${product.description}
//            `);
        }
    })
    .catch(
        error => console.error('エラー：'+error)
    );
});