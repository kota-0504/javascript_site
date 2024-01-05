// JavaScript

// const show = (entries) => {
//   entries.forEach((entry) => {
//       const keyframes = {
//         opacity: [0, 1],
//         translate: ['200px 0',0]
//       }
//       entry.target.animate(keyframes,600);
//   });
// }

//交差しているときだけ
// const show = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting){
//       const keyframes = {
//         opacity: [0, 1],
//         translate: ['200px 0',0]
//       }
//       entry.target.animate(keyframes,600);
//     }
//   });
// }

//一度表示したら動作を止める
const show = (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        const keyframes = {
          opacity: [0, 1],
          translate: ['200px 0',0]
        }
        entry.target.animate(keyframes,600);
  
        //一度表示されたら止める
        obs.unobserve(entry.target);
      }
    });
  }
  
  const observer = new IntersectionObserver(show);
  
  //監視対象
  const images = document.querySelectorAll('.img');
  images.forEach(img =>{
    observer.observe(img);
  });
  // JavaScript

const items = document.querySelectorAll('.img-item');

// console.log(items);
// console.log(items.length);

// for文
for(let i = 0; i < items.length; i++){

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
    filter: ['blur(10px)', 'blur(0)'],
  };
  
  const options = {
    duration: 600,
    delay: i * 400,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}

// forEach文
// items.forEach((item, i) => {

//   const keyframes = {
//     opacity: [0, 1],
//     translate: ['0 50px', 0],
//     filter: ['blur(10px)', 'blur(0)'],
//   };
  
//   const options = {
//     duration: 600,
//     delay: i * 400,
//     fill: 'forwards',
//   };

//   item.animate(keyframes, options);
// });