import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.className = 'about-card-wrapper';
    const cardBodyEle = row.children[1];
    cardBodyEle.className = 'about-card-body';
    const div = document.createElement('div');
    const p = document.createElement('p');
    const span = document.createElement('span');
    div.className = 'rating-div';
    span.className = 'fa fa-star';
    // check if header/ratings count is available
    if (
      cardBodyEle.children[1] === null ||
      cardBodyEle.children[1] === undefined
    ) {
      p.innerText = cardBodyEle.innerText;
      cardBodyEle.innerHTML = '';
      cardBodyEle.append(p);
      return;
    }
    // if count available plot ratings/star inside card body element
    const starCount = parseInt(cardBodyEle.children[1].innerText);
    if (cardBodyEle.classList.contains('about-card-body')) {
      cardBodyEle.children[1].remove();
      for (let i = 0; i < 5; i++) {
        span.classList.add('checked');
        if (starCount <= i || isNaN(starCount)) {
          span.classList.remove('checked');
        }
        div.appendChild(span.cloneNode(true));
      }
      cardBodyEle.append(div);
    }
    // block
    //   .querySelectorAll('img')
    //   .forEach((img) =>
    //     img
    //       .closest('picture')
    //       .replaceWith(
    //         createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])
    //       )
    //   );
  });
}
