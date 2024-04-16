document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll('.blog__article').length > 0 ? blogArticlePosition() : false
});


function blogArticlePosition() {
  if (window.innerWidth >= 750) {
      const articles = document.querySelectorAll('.blog__article');
      const container = document.querySelector('.blog__articles');
  
      let translateYOdd = 0;
      let translateYEven = 0;
  
      
      articles.forEach(function (article, index) {
        // Устанавливаем right: 0 для четных элементов и left: 0 для нечетных
        article.style.left = index % 2 === 0 ? '0' : '';
        article.style.right = index % 2 !== 0 ? '0' : '';
  
        // Применяем смещение для каждого элемента по оси Y
        article.style.transform = 'translateY(' + (index % 2 === 0 ? translateYEven : translateYOdd) + 'px)';
  
        // Увеличиваем значение translateY для следующего элемента в зависимости от его четности
        if (index % 2 === 0) {
          translateYEven += article.offsetHeight + 35;           
        } else {
          translateYOdd += article.offsetHeight + 35;           
        }
      });
  
      // Сравниваем translateY последних двух элементов
    let lastElement1 = articles[articles.length - 2];
    let lastElement2 = articles[articles.length - 1];

    let lastElement1TransformY = Number(lastElement1.style.transform.slice(11, -3))
    let lastElement2TransformY = Number(lastElement2.style.transform.slice(11, -3))
      
    // Определяем максимальное значение translateY
    let maxTransformY = Math.max(lastElement1TransformY, lastElement2TransformY);

    // Устанавливаем получившееся значение как высоту для элемента blog__articles
    container.style.height = maxTransformY + lastElement2.offsetHeight + 'px';
    }
}
