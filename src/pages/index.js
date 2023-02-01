import React from 'react';
import './css/index.css'
// import Schedule from './schedule';
// import DateTime from '../components/date';
// import Footer from '../components/Footer';


const Home = () => {

return (
	<div>
	<div className='main'>
		<img src='leash.jpg' alt='clifford on a leash' />
		<h1>Nick's Dog Walking</h1>
		<p>
			Providing Professional Dog Walking, Cat Sitting, Pet sitting & House Sitting.
		</p>

		<section>
			<h2>Services:</h2>

			<h3>Dog Walking</h3>
			<p>
				Our dog walking visits are individualized, on-leash walks through your neighborhood. 
				This way we can tailor the walk to your dog’s interests and energy level.‍ 
				In addition, we also offer standard house sitting services to make your life easier.
			</p>
			<ul>
				<li>20 minute visit - $15</li>
				<li>40 minute visit - $20</li>
				<li>60 minute visit - $25</li>
			</ul>
			*Add $5 for each additional dog in the household per visit* 
			<h3>Cat Sitting</h3>
			<p>
				We offer reliable cat sitting services. 
				Our cat sitting visits include playtime, cuddle time, feeding, litter box cleaning, medication administration if needed, and some house sitting tasks when agreed upon (such as bringing in mail, watering plants, rotating lights, etc.) 
			</p>
			<ul>
				<li>20 minute visit - $15</li>
				<li>40 minute visit - $20</li>
				<li>60 minute visit - $25</li>
			</ul>
			<h3>Exotic Pet Sitting</h3>
			<p>
				We are happy to provide pet sitting services to many different exotic species.

				Due to the variety of their needs, we ask that you contact us to obtain an individualized quote.
			</p>
			<h3>House Sitting</h3>
			<p>
				Our house sitting visits include bringing in the mail, watering plants, checking heat and hot water, and checking that the house is secured.
				<ul>
					<li>Each visit - $20</li>
				</ul>
			</p>
		</section>

		<section>
			<h3>Get In Touch</h3>
			<p> Call or Text 504-251-2985</p>
			<p> Email: benmont667@gmail.com</p>
		</section>
	</div>
	</div>
);
};

export default Home;
