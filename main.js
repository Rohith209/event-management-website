$(document).ready(function () {
  let userReviews = [
    {
      name: 'Uwimana Ange',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.',
      img: ''
    },
    {
      name: 'Niyonkuru Eric',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.',
      img: ''
    },
    {
      name: 'Nseng Farmer',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.',
      img: ''
    },
    {
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.',
      img: ''
    },
    {
      name: 'Maria Sherapova',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.',
      img: ''
    },
    {
      name: 'Jackson Williams',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.',
      img: ''
    }
  ];

  userReviews.forEach(function (user) {
    // Creating the structure for each card
    let card = `
          <div class="review-card">
            <div class="user-info">
              <img src="https://via.placeholder.com/50" alt="User Avatar">
              <div class="user-name">${ user.name }</div>
            </div>
            <div class="review-description">${ user.review }</div>
          </div>
        `;
    // Appending the card to the user-reviews div
    $('#user-reviews').append(card);
  });

  $('#user-reviews').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    dots: true,
    arrows: false
  });

})