// ==================== Slider Image ====================
class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
        React.createElement("p", { className: "slider__top-heading" }, "ภาพกิจกรรม"), /*#__PURE__*/
        React.createElement("div", { className: "slider__slides" },
          this.props.slides.map((slide, index) => /*#__PURE__*/
            React.createElement("div", {
              className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
              key: slide.city
            }, /*#__PURE__*/

              React.createElement("div", { className: "slider__slide-content" }, /*#__PURE__*/
                React.createElement("h3", { className: "slider__slide-subheading" }, slide.country || slide.city), /*#__PURE__*/
                React.createElement("h2", { className: "slider__slide-heading" },
                  slide.city.split('').map(l => /*#__PURE__*/React.createElement("span", null, l))), /*#__PURE__*/

                // React.createElement("p", { className: "slider__slide-readmore" }, "read more")), /*#__PURE__*/
                React.createElement("p", { className: "slider__slide-readmore" }, "")), /*#__PURE__*/

              React.createElement("div", { className: "slider__slide-parts" },
                [...Array(this.IMAGE_PARTS).fill()].map((x, i) => /*#__PURE__*/
                  React.createElement("div", { className: "slider__slide-part", key: i }, /*#__PURE__*/
                    React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))), /*#__PURE__*/
        React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }), /*#__PURE__*/
        React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })));


  }
}

// Image src

const slides = [
  {
    city: '2565',
    country: 'การประชุมผู้ครองนักเรียน ประจำปีการศึกษา',
    img: 'assets/images/preview4.jpg'
  },

  {
    city: '',
    img: 'assets/images/preview1.jpg'
  },

  {
    city: ' ',
    country: '',
    img: 'assets/images/preview2.jpg'
  },

  {
    city: '  ',
    country: '',
    img: 'assets/images/preview1.jpg'
  },

  {
    city: '   ',
    country: '',
    img: 'assets/images/preview5.jpg'
  },
];

ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));



// ==================== Navigation Bar ====================

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("navbar").style.paddingTop = "0px";
    document.getElementById("navbar").style.background = "#343A41";
  } else {
    // document.getElementById("navbar").style.paddingTop = "30px";
    document.getElementById("navbar").style.background = "#343a414b";
  }
}
