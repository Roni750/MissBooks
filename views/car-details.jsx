export function CarDetails({ car, onBack }) {


    return (
        <section className="car-details">
            <h1>Car Vendor: {car.vendor}</h1>
            <h5>Max Speed: {car.maxSpeed}</h5>
            <img src={`../assets/img/${car.vendor}.png`} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit reiciendis sed optio eum saepe! Aliquid necessitatibus atque est quasi unde odit voluptate! Vero, dolor sunt molestiae possimus labore suscipit?</p>
            <button onClick={onBack}>Back</button>
        </section>
    )

}