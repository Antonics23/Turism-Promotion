import React, { useState } from "react";
import Header from "./components/Header";
import HeroVideo from "./components/Video";
import AboutBarcelona from "./components/AboutBarcelona";
import Activities from "./components/Activities";
import Cart from "./components/Cart";
import AudioPlayer from "./components/AudioPlayer";


function App() {
const [cart, setCart] = useState([]);


const addToCart = (activity) => {
if (!cart.find(item => item.id === activity.id)) {
setCart([...cart, activity]);
}
};


const removeFromCart = (id) => {
setCart(cart.filter(item => item.id !== id));
};


return (
<div>
<Header />
<HeroVideo />
<AboutBarcelona />
<Activities addToCart={addToCart} />
<Cart cart={cart} removeFromCart={removeFromCart} />
<AudioPlayer />
</div>
);
}


export default App;