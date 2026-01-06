function Cart({ cart, removeFromCart }) {
return (
<section className="cart">
<h2>Your trip plan</h2>
{cart.length === 0 && <p>You didn't chose any activity.</p>}
<ul>
{cart.map(item => (
<li key={item.id}>
{item.name}
<button onClick={() => removeFromCart(item.id)}>x</button>
</li>
))}
</ul>
</section>
);
}


export default Cart