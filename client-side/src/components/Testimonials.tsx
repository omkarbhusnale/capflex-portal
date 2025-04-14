import "../styles/Testimonials.css";

interface TestimonialData {
  id: number;
  content: string;
  userName: string;
  productName: string;
  date: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus sit amet risus tincidunt consectetur. Phasellus imperdiet neque non justo condimentum feugiat.",
      userName: "User Name",
      productName: "Product Name",
      date: "Posted Date",
      rating: 5,
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus sit amet risus tincidunt consectetur. Phasellus imperdiet neque non justo condimentum feugiat.",
      userName: "User Name",
      productName: "Product Name",
      date: "Posted Date",
      rating: 4,
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus sit amet risus tincidunt consectetur. Phasellus imperdiet neque non justo condimentum feugiat.",
      userName: "User Name",
      productName: "Product Name",
      date: "Posted Date",
      rating: 5,
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-grid">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <div className="testimonial-content">
            <p>{testimonial.content}</p>
          </div>
          <div className="testimonial-user">
            <div className="user-avatar">
              <span>UN</span>
            </div>
            <div className="user-info">
              <h4>{testimonial.userName}</h4>
              <p>
                {testimonial.productName} - {testimonial.date}
              </p>
              <div className="rating">{renderStars(testimonial.rating)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
