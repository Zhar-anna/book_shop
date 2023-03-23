import picImage from '../images/ДамаПик.png'

const init = () => {
  const pic = document.querySelectorAll('.pic');
  pic.forEach((p) => p.src = picImage);
};

export default init;
