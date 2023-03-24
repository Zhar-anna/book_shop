import picImage from '../images/ДамаПик.png';
import rul from '../images/Линейка.png';
import star from '../images/star.png';
import dialog from '../images/dialog.png';
import restart from '../images/restart.png';
import rubles from '../images/rubles.png';
import heart from '../images/heart.png';
import ellips from '../images/Ellipse 3.png';
import gift from '../images/gift.png';

const init = () => {
  const pic = document.querySelectorAll('.pic');
  pic.forEach((p) => {
    p.src = picImage;
    p.style.height = 242 + 'px';
    p.style.width = 192 + 'px';
  });

  const ruler = document.querySelector('.ruler');
  ruler.src = rul;
  const stars = document.querySelectorAll('.star');
  stars.forEach((s) => {
    s.src = star;
    s.style.width = 16 + 'px';
    s.style.height = 15 + 'px';
  });
  const talks = document.querySelectorAll('.talk');
  talks.forEach((t) => {
    t.src = dialog;
    t.style.height = 14.17 + 'px';
    t.style.width = 'auto';
  });
  const res = document.querySelectorAll('.restart');
  res.forEach((r) => r.src = restart);
  const rub = document.querySelectorAll('.rubles');
  rub.forEach((r) => r.src = rubles);
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((h) => h.src = heart);
  const ellipses = document.querySelectorAll('.ellipse');
  ellipses.forEach((e) => e.src = ellips);
  const gifts = document.querySelectorAll('.gift');
  gifts.forEach((g) => g.src = gift);
};

export default init;
