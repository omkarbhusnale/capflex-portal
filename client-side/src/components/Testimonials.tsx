import '../styles/Testimonials.css';

interface TestimonialData {
  id: number;
  content: string;
  userName: string;
  productType: string;
  date: string;
  rating: number;
}

const Testimonials = ({ showAll = true }: { showAll?: boolean }) => {
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      content:
        '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
      userName: 'James Pattinson',
      productType: 'Personal Loan',
      date: '14 September 2024',
      rating: 5,
    },
    {
      id: 2,
      content:
        '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
      userName: 'James Pattinson',
      productType: 'Personal Loan',
      date: '14 September 2024',
      rating: 4,
    },
    {
      id: 3,
      content:
        '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
      userName: 'James Pattinson',
      productType: 'Personal Loan',
      date: '14 September 2024',
      rating: 4,
    },
    {
      id: 4,
      content:
        '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
      userName: 'James Pattinson',
      productType: 'Personal Loan',
      date: '14 September 2024',
      rating: 4,
    },
    {
      id: 5,
      content:
        '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
      userName: 'James Pattinson',
      productType: 'Personal Loan',
      date: '14 September 2024',
      rating: 4,
    },
    {
      id: 6,
      content:
        '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
      userName: 'James Pattinson',
      productType: 'Personal Loan',
      date: '14 September 2024',
      rating: 4,
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Function to get user initials
  const getUserInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`;
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="container">
      <div className="testimonials-grid">
        {testimonials.slice(0, showAll ? testimonials.length : 3).map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-content">
              <p>{testimonial.content}</p>
            </div>
            <div className="testimonial-user">
              <div className="user-info">
                <div className="user-info-container">
                  <div className="user-avatar">
                    <span>{getUserInitials(testimonial.userName)}</span>
                  </div>
                  <h4>{testimonial.userName}</h4>
                </div>
                <div className="rating">{renderStars(testimonial.rating)}</div>
                <p>
                  {testimonial.productType} - {testimonial.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
