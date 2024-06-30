class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

const movies = [
    new Movie("The Lion King", "Disney", "PG"),
    new Movie("Avatar", "20th Century Fox", "PG-13"),
    new Movie("Finding Nemo", "Pixar", "PG"),
    casinoRoyale
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

console.log("--------------------------------------");

class Circle {
    #radius;
    #color;

    constructor(radius = 1.0, color = "red") {
        this.#radius = radius;
        this.#color = color;
    }

    getRadius() {
        return this.#radius;
    }

    setRadius(radius) {
        this.#radius = radius;
    }

    getColor() {
        return this.#color;
    }

    setColor(color) {
        this.#color = color;
    }

    toString() {
        return `Circle[radius=${this.#radius}, color=${this.#color}]`;
    }

    getArea() {
        return Math.PI * Math.pow(this.#radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.#radius;
    }
}

const circle1 = new Circle();
console.log(circle1.toString());
console.log(`Area: ${circle1.getArea()}`);
console.log(`Circumference: ${circle1.getCircumference()}`);

const circle2 = new Circle(2.5, "blue");
console.log(circle2.toString());
console.log(`Area: ${circle2.getArea()}`);
console.log(`Circumference: ${circle2.getCircumference()}`);

circle2.setRadius(3.0);
circle2.setColor("green");
console.log(circle2.toString());


console.log("--------------------------------------");



class Person {
    constructor(name, email, phone, website, address, degree, cgp, college, university, experiences) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = address;
        this.degree = degree;
        this.cgp = cgp;
        this.college = college;
        this.university = university;
        this.experiences = experiences;
    }

    getPersonalInfo() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
            website: this.website,
            address: this.address
        };
    }

    getEducationInfo() {
        return {
            degree: this.degree,
            cgp: this.cgp,
            college: this.college,
            university: this.university
        };
    }

    getExperienceInfo() {
        return this.experiences;
    }

    addExperience(role, company, duration) {
        this.experiences.push({ role, company, duration });
    }

    getAllDetails() {
        return {
            personal_info: this.getPersonalInfo(),
            education: this.getEducationInfo(),
            experience: this.getExperienceInfo()
        };
    }
}

const experiences = [
    { role: "Full Stack Developer", company: "Bug Hunt Technologies", duration: "1 year" },
    { role: "Hardware Technician", company: "ABC Tech", duration: "6 months" },
    { role: "UI/UX Designer", company: "Creative Designs", duration: "6 months" }
];

const person = new Person(
    "Vigneshwaran J",
    "venerablevignesh@gmail.com",
    "6380661438",
    "mastercodeaddict.me",
    "697/1, Thirupathi venkateshwara nagar, Manaveli, Thiruvanthipuram, Cuddalore",
    "Bachelor of Science in Information Technology",
    7.9,
    "Achariya Arts and Science college",
    "Pondicherry University",
    experiences
);

console.log("Personal Details");

person.addExperience("Project Manager", "XYZ Corp", "2 years");

console.log(person.getAllDetails());

console.log("--------------------------------------");


class UberRide {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee = 0, minimumFare = 0) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
        this.minimumFare = minimumFare;
    }

    calculatePrice(distance, duration) {
        const distanceCost = this.costPerMile * distance;
        const timeCost = this.costPerMinute * duration;
        const totalPrice = this.bookingFee+this.baseFare + distanceCost + timeCost;
        return Math.max(totalPrice, this.minimumFare);
    }
}

const uberRide = new UberRide(
    2.50, 0.35, 1.75, 1.2, 2.0, 5.0
);

const distance = 10;
const duration = 15;
console.log("Uber Ride Price calculatore");
const price = uberRide.calculatePrice(distance, duration);
console.log(`Total Uber ride price: $${price.toFixed(2)}`);
console.log("------------------------------");
