const activities = [
{ id: 1, name: "Visit the Sagrada Familia" },
{ id: 2, name: "Walk on Las Ramblas" },
{ id: 3, name: "A beach day in the Barceloneta" },
{ id: 4, name: "Tour in the Parc Güell" }
];


function Activities({ addToCart }) {
return (
<section className="activities">
<h2>Turism Activities</h2>
{activities.map(activity => (
<button key={activity.id} onClick={() => addToCart(activity)}>
Add: {activity.name}
</button>
))}
</section>
);
}


export default Activities;