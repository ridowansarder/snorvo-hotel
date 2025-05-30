const Testimonial = () => {
    const testimonials = [
        { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!" },
        { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!" },
        { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results." }
    ];

    const Star = ({ filled }: {filled: boolean}) => (
        <svg className="w-4 h-4 text-yellow-400" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" />
        </svg>
    );

    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-white py-20">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-[40px] font-bold">What Our Guests Say</h1>
                <p className="text-sm md:text-base text-foreground/90 mt-2 max-w-[696px]">Discover why discerning travelers consistently choose Snorvo for their exclusive and luxurious accommodations around the world.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 mb-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-background p-6 rounded-xl shadow-lg max-w-5xl">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className=" text-xl">{testimonial.name}</p>
                                <p className="text-foreground">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <Star key={index} filled={testimonial.rating > index} />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Testimonial;