const testimonials = [
  {
    text: "This is an amazing product! Highly recommend.",
    author: "John Doe",
  },
  {
    text: "Great quality and excellent customer service.",
    author: "Jane Smith",
  },
  {
    text: "I'm very satisfied with my purchase.",
    author: "Alice Johnson",
  },
];

function renderTestimonials() {
  const testimonialContainer = document.getElementById("testimonial-content");
  testimonialContainer.innerHTML = testimonials
    .map(
      (testimonial, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
            <div class="card testimonial-card mx-auto" style="max-width: 500px;">
                <div class="card-body">
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div class="testimonial-author">- ${
                      testimonial.author
                    }</div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}
renderTestimonials();
