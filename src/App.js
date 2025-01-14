import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import moon from './img/moon.jpg';
import socrates from './img/header.jpg'
import lastSupper from './img/last-supper.jpg'
import aristotle from './img/aristotle.jpg'
import library from './img/library.jpg'
import service from './img/service.jpg'
import aurelius from './img/aurelius-bust.jpg'
import gandhi from './img/gandhi.jpg'
import universe from './img/universe-4.jpg'
import moses from './img/moses.jpg'
import chocolate from './img/chocolate.jpg'

import { useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FlipCard from './components/FlipCard';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function App() {
	
	const ref = useRef();
	
	const start = 0;
	const introDuration = 7;
	const learningDuration = 3.65;
	const masteryDuration = 7;
	const helpingDuration = 3.5;
	const conclusionDuration = 2.75;

	const buffer = 1;

	// computed values, with buffer
	const introStart = start + 0;
	const learningStart = introStart + introDuration + buffer;
	const masteryStart = learningStart + learningDuration + buffer;
	const helpingStart = masteryStart + masteryDuration + buffer;
	const conclusionStart = helpingStart + helpingDuration + buffer;
	const end = conclusionStart + conclusionDuration;

	const totalDuration = end - start;
	
	return (
		<div className="App">
		<Parallax pages={totalDuration} ref={ref}>

		{/* INTRODUCTION SECTION */}
		
		<ParallaxLayer
		offset={introStart}
		factor={1.05}
		style={{
			background: `rgba(0,0,0,0.325) url(${socrates})`,
			backgroundSize: 'cover',
			backgroundPosition: "center",
			backgroundBlendMode:"darken"
		}}
		>
		</ParallaxLayer>
		
		<ParallaxLayer
		offset={introStart}
		speed={0.5}
		className="flex-center flex-column blend-text"
		>
		<h1 className="display-1">Leaving the Cave</h1>
		</ParallaxLayer>
		
		<ParallaxLayer
		offset={introStart + 0.93}
		speed={-5}
		style={{display:"flex", justifyContent:"center"}}
		onClick={() => {
			console.log(ref);
			ref.current.scrollTo(3)
		}}
		>
		<h2 className="blend-text">By Josh Moody</h2>
		</ParallaxLayer>

		<ParallaxLayer
		offset={introStart + 1}
		factor={1.05}
		speed={0.05}
		style={{
			background: `rgba(0,0,0,0.35) url(${lastSupper})`,
			backgroundSize: 'cover',
			backgroundPosition: "center",
			backgroundBlendMode:"darken"
		}}
		>
		</ParallaxLayer>

		<ParallaxLayer
		offset={introStart + 1}
		speed={.18}
		className="flex-center flex-column p-5 blend-text"
		>
			<h1 className="mb-3">Religious Disclaimer</h1>
			<p style={{maxWidth:"70ch"}}>
				I don't talk about Christianity or religion very much in this project. This is intentional.
			</p>
			<p style={{maxWidth:"70ch"}}>
				My beliefs are centered in Christianity,
				but I want to articulate them using the language of philosophy
				instead of the language of the gospel of Jesus Christ.
			</p>
			<p style={{maxWidth:"70ch"}}>
				Otherwise, I fear I would take the easy way out
				and rely too heavily on my prior religious knowledge
				instead of what I learned in this class.
			</p>
		</ParallaxLayer>

		<ParallaxLayer
		offset={introStart + 2}
		factor={2.75}
		speed={0.01}
		className="bg-cover"
		style={{
			backgroundColor: `rgba(0,0,0,0.35)`,
			backgroundImage: `url(${universe})`,
			backgroundPosition:"center",
			backgroundBlendMode:"multiply",
			zIndex:-1,
		}}
		>
		</ParallaxLayer>

		<ParallaxLayer
		offset={2.43}
		speed={0.09}
		factor={0.5}
		style={{zIndex:1, maxWidth:"50em"}}
		className="p-5 flex-center flex-column mx-auto"
		>
		<OverlayTrigger placement="bottom" overlay={
			<Tooltip>An inner sense of being at perfect harmony with the universe. It is equivalent to a "fulness of joy."</Tooltip>
		}>
			<h1 className="display-1 text-center w-100 text-light">The Good: Inner Peace</h1>
		</OverlayTrigger>
		</ParallaxLayer>

		<ParallaxLayer
		offset={2.5}
		speed={0.18}
		className="p-5 flex-center flex-column"
		>
		<>
			<h2 className="display-5 text-center w-100 blend-text mt-5" style={{maxWidth:"32ch"}}>
			An inner sense of being at perfect harmony with the universe. It is equivalent to a "fulness of joy."
			</h2>
		</>
		</ParallaxLayer>

		<ParallaxLayer
		offset={2.92}
		speed={0.13}
		className="p-5 flex-center flex-column"
		>
		<>
			<h3 className="display-6 text-center w-100 blend-text mt-5" style={{maxWidth:"50ch"}}>
				How is inner peace achieved?
			</h3>
		</>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 3.5, end: introStart + 5.5}}
		className="flex-center"
		style={{ width: "33%"}}
		>
		<Card style={{
			borderRadius:0,
			width:"100%",
			height:"100%",
			background: `rgba(0,0,0,0.3) url(${library})`,
			backgroundPosition:"center",
			backgroundBlendMode: "darken",
			backgroundSize:"cover",
			color:"white",
			display:"flex",
			alignItems:"center",
			justifyContent:"center"}}
		>
		<strong className="display-6 text-center m-5">Learn as much as possible</strong>
		</Card>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 4, end: introStart + 6}}
		className="flex-center"
		style={{ width: "34%", marginLeft: "33%" }}
		>
		<Card style={{
			borderRadius:0,
			width:"100%",
			height:"100%",
			background: `rgba(0,0,0,0.3) url(${aristotle})`,
			backgroundPosition:"center",
			backgroundBlendMode: "darken",
			backgroundSize:"cover",
			color:"white",
			display:"flex",
			alignItems:"center",
			justifyContent:"center",
		}}
		>
		<strong className="display-6 text-center m-5">Develop self-mastery</strong>
		</Card>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 4.5, end: introStart + 6.5}}
		className="flex-center"
		style={{ width: "33%", marginLeft: "67%" }}
		>
		<Card style={{
			borderRadius:0,
			width:"100%",
			height:"100%",
			background: `rgba(0,0,0,0.3) url(${service})`,
			backgroundPosition:"bottom 50% right 25%",
			backgroundBlendMode: "darken",
			backgroundSize:"cover",
			color:"white",
			display:"flex",
			alignItems:"center",
			justifyContent:"center"}}
		>
		<strong className="display-6 text-center m-5">Help others learn and master themselves</strong>
		</Card>
		</ParallaxLayer>

		{/* LEARNING SECTION */}

		<ParallaxLayer
		sticky={{start: learningStart, end: learningStart + 1.95}}
		style={{zIndex: 2, pointerEvents:"none"}}
		className="p-4"
		>
		<h1 className="display-1 text-center w-100">1. Learn as much as possible</h1>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: learningStart + 0.5, end: learningStart + 1.5}}
		style={{zIndex:5}}
		className="flex-center text-light"
		>
		<FlipCard
			body={<p>The type of learning I'm talking about includes academic study, but goes far beyond it.
			Anything that increases one's <strong>knowledge</strong> or <strong>skills</strong> is a source of learning.
			Examples include academic study, personal experience,
			close relationships, and suffering.</p>}
			title="What is learning?"
			backQuote={true}
			bgColor="teal"
			backTitle="Simone Weil"
			backBody="[Academic students] are no nearer to goodness than their brothers working in fields and factories.
			Peasants and workmen possess a nearness to God of incomparable savor which is found in the depths of poverty,
			in the absence of social consideration and in the endurance of long drawn-out sufferings." /> 
		
		<FlipCard
			title="Learning is its own reward"
			body="Marcus Aurelius claims that learning
			always leads to a more satisfying, pleasing outlook on the universe."
			backQuote={true}
			bgColor="royalblue"
			backBody="[I]f a man should have a feeling and deeper insight with respect to the things which are provided in the universe,
			there is hardly one of those which follow by way of consquenece which will not seem to him to be in a manner
			disposed as to give pleasure&hellip;even the real gaping jaws of wild beasts."
			backTitle="Marcus Aurelius"
		/> 
		
		<FlipCard
			body="You can't learn if you assume others have nothing to teach you.
			Learning requires being aware of your own fallibility."
			title="Learning requires humility"
			backQuote={true}
			backTitle="Lao-tzu"
			bgColor="darkslateblue"
			backBody="To know and yet (think) we do not know is the highest (attaiment); not to know (and yet think) we do know is a disease"
		/> 
		
		</ParallaxLayer>

		<ParallaxLayer
		offset={learningStart + 2.39}
		speed={0.05}
		className="p-5"
		style={{zIndex:10, pointerEvents:"none"}}
		>
		<h1 className="display-1 text-center w-100">The importance of faith</h1>
		</ParallaxLayer>

		<ParallaxLayer
			offset={learningStart + 2.32}
			speed={.03}
			factor={1.28}
			style={{backgroundColor:"khaki", zIndex:5}}
			className="flex-center flex-column"
		>
		<p className="mt-4" style={{maxWidth:"70ch", width:"100%"}}>
			Learning as much as possible means attempting to learn <strong>all</strong> truth.
		</p>
		<p style={{maxWidth:"70ch", width:"100%"}}>
			This requires faith. Why?
		</p>
		<ol style={{maxWidth:"70ch", width:"100%"}}>
			<li>
				It is impossible to know anything with 100% certainty (other than the fact that&nbsp;
				<OverlayTrigger placement="right" overlay={
					<Tooltip>The statement "I am, I exist" is necessarily true every time it is uttered by me or conceived in my mind."<br />(René Descartes)</Tooltip>
				}>
					<a className="link text-dark">one's own consciousness exists</a>
				</OverlayTrigger>
				).
				Thus, to believe anything else requires some degree of
				faith—acting as though something is true without
				100% certainty.
			</li>
			<li>
				Some truths are created by belief itself, for example,&nbsp;
				<OverlayTrigger placement="right" overlay={
					<Tooltip>"If I stand aloof, and refuse to budge an inch until I have objective evidence [that you like me]&hellip;ten to one your liking never comes"<br />(William James)</Tooltip>
				}>
					<a className="link text-dark">friendship.</a>
				</OverlayTrigger>
			</li>
		</ol>		
		<div className="blockquote">
			<p>
				&ldquo;[A] rule of thinking which would absolutely prevent me
				<br />
				from acknowledging certain kinds of truth <em>if those kinds
				<br />
				of truth were really there,</em> would be an irrational rule.&rdquo;
			</p>
			<footer className="blockquote-footer text-dark fade-light">William James</footer>
		</div>

		<p style={{maxWidth:"70ch", width:"100%"}}>
			Because agnosticism is devoid of faith, it is incompatible with my philosophy.
		</p>
		</ParallaxLayer>

		<ParallaxLayer
		offset={learningStart + 3.52}
		speed={0.1}
		className="p-5"
		style={{zIndex:7}}
		>
		<h1 className="display-1 text-center w-100">Personal Example</h1>
		</ParallaxLayer>

		<ParallaxLayer
			offset={learningStart + 3.4}
			speed={.08}
			factor={1.18}
			style={{backgroundColor:"coral",zIndex:5}}
			className="flex-center p-5 flex-column"
		>
			<p className="good-width">
				If I had to describe myself in 3 words, I would choose "I love learning."
			</p>
			<p className="good-width">
			I consider it a moral responsibility to learn throughout life.
			My decision to attend Brigham Young University had
			nothing to do with getting a high-paying job.
			It was entirely motivated by my desire to gain knowledge and develop new skills.
			</p>
			<p className="good-width">
				For this reason, I am currently pursuing a master's degree,
				and will possibly pursue a ph.D. I would keep attending school my entire life
				if I could (although I doubt BYU would like that very much).
			</p>
			<p className="good-width">
				Even if I don't end up pursuing academic education that far,
				I will seek a career that requires constantly learning new concepts and skills. 
			</p>
		</ParallaxLayer>


		{/* SELF-MASTERY SECTION */}

		<ParallaxLayer
		offset={masteryStart}
		className="p-5"
		style={{zIndex:10, width:"70%"}}
		>
		<h1 className="display-1 text-center w-100">2. Develop self-mastery</h1>
		</ParallaxLayer>

		
		<ParallaxLayer
			offset={masteryStart}
			sticky={{start:masteryStart-0.2, end:masteryStart+3.2}}
			style={{
				backgroundColor:"transparent",
				width:"30%",
				left:"70%!important",
				marginLeft:"70%!important",
				float:"right",
				backgroundImage:`url(${aurelius})`,
				backgroundPosition:"center",
				backgroundSize:"cover",
				zIndex:-1
			}}
			className="flex-center p-5"
		>
		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart}
			speed={0.102}
			factor={1.11}
			style={{backgroundColor:"cornflowerblue", width: "70%", zIndex:5}}
			className="flex-center p-5"
		>
			<blockquote className="blockquote" style={{fontSize:"1.5rem",zIndex:6}}>
				<p>&ldquo;No longer talk at all about the kind of man that a good man ought to be, but be such.&rdquo;</p>
				<footer className="blockquote-footer text-dark fade-light">Marcus Aurelius</footer>
			</blockquote>

		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart + 1}
			speed={0.1}
			factor={1.11}
			style={{backgroundColor:"mediumaquamarine", width: "70%"}}
			className="flex-center flex-column p-5"
		>
			<h2>Apply What You Learn</h2>
			<p className="good-width">
				Learning by itself is not sufficient to produce inner peace and harmony. Knowledge and skills must be used properly.
				Another way of phrasing "self-mastery" might be "the proper application of what you know."
			</p>
			<p className="good-width">
				By nature of being imperfect beings, humans have to wrestle with desires and behaviors that contradict what we know to be true.
				In order to properly apply knowledge, we must develop control over our passions so we can act in accordance with our knowledge.
			</p>

		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart + 2}
			speed={0.1}
			factor={1.25}
			style={{backgroundColor:"mediumslateblue", width: "70%"}}
			className="flex-center flex-column p-5"
		>
			<h2>Disregard Pain and Pleasure</h2>
			<p style={{maxWidth:"70ch"}}>
				Humans are predisposed to seek pleasure while avoiding pain. However, Aurelius makes the case that pleasure and pain have no intrinsic
				value: "[P]ain and pleasure... eqully happen to good men and bad, being things which make us neither better nor worse.
				Therefore they are neither good nor evil."
			</p>
			<p className="good-width">
				In other words, the degree to which we experience pain and pleasure is almost entirely out of our control.
				For this reason, pain and pleasure are irrelevant to our personal growth and should be treated with indifference.
			</p>
			<p style={{maxWidth:"70ch"}}>
				I agree with Aurelius' overall sentiment with one caveat.
				I would argue that pain actually can "make us better" if we
				allow it to do so. Pain can be a powerful teaching tool that helps us avoid harmful behaviors.
				It can also increase our empathy for others. Avoiding pain increases our chances of living longer.
				Living longer enables us to learn more things and help more people.
			</p>
			
		</ParallaxLayer>


		<ParallaxLayer
			offset={masteryStart + 3}
			speed={0.125}
			factor={1.2}
			style={{backgroundColor:"#9e3df6", width: "70%"}}
			className="flex-center flex-column p-5"
		>
			<h2>Avoid Complaint and Judgement</h2>
			<p className="good-width">
			Complaining is another natural human tendency.
			Aurelius encourages us to avoid complaining and accept those things which are out of our control:
			"Take away the complaint, 'I have been harmed,' and the harm is taken away."
			</p>

			<p className="good-width">
			Closely related to complaint is judgment, or the labeling of things as "good" or "bad."
			Aurelius claims that judgement is the cause of suffering:
			"If thou art pained by any external thing, it is not this thing that disturbs thee, but thy own judgement about it.
			And it is in they power to wipe out this judgement now."
			</p>

			<p style={{maxWidth:"70ch"}}>
			We cannot control most things that happen to us.
			The philosophy of stoicism encourages us to simply accept these events without passing judgement.
			If we do this, our quality of life improves.
			However, if something <em>is</em> within our control, we should "rather act than complain" (Aurelius).
			</p>

			<div className="blockquote" style={{maxWidth:"46ch"}}>
				<p>
				&ldquo;Let there be freedom from perturbations with respect
				to the things which come from the external cause;
				and let there be justice in the things done by virtue
				of the internal cause.&rdquo;
				</p>
				<footer className="blockquote-footer text-dark fade-light">Marcus Aurelius</footer>
			</div>


			<p className="good-width">
			Does "freedom from perturbations" sounds like "inner peace" to you? I think it does.
			</p>
		</ParallaxLayer>


		<ParallaxLayer
			sticky={{start:masteryStart+4, end:masteryStart+4.5,}}
			style={{
				backgroundColor:"transparent",
				width:"30%",
				backgroundImage:`url(${gandhi})`,
				backgroundSize:"cover",
				backgroundPosition:"center",
			}}
			className="flex-center p-5"
		>
		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart + 4}
			speed={0.1}
			factor={1.35}
			style={{backgroundColor:"tan", width:"70%", left:"70%!important", marginLeft:"70%!important", float:"right", zIndex:5}}
			className="flex-center flex-column p-5"
		>
			<h2>A Second Witness</h2>
			<p style={{maxWidth:"70ch"}}>
			Gandhi is another individual who championed the principle of self-mastery. His concept of "self-purification" is quite similar to what
we have discussed so far, but with a subtle difference.

			</p>

			<blockquote className="blockquote">
				<p>
					&ldquo;God [Truth] can never be realized by one who is not pure of heart....
					<br />
					But the path of self-purification is hard and steep.
					<br />
					To attain to perfect purity one has to become absolutely
					<br />
					passion-free in thought, speech, and action.&rdquo;</p>
				<footer className="blockquote-footer fade-light text-dark">Mahatma Gandhi</footer>
			</blockquote>

			<p style={{maxWidth:"70ch", width:"100%"}}>
				Gandhi's philosophy has many things in common with Aurelius' stoicism.
				However, Gandhi believes passion is inherently <em>immoral</em> (bad),
				while Aurelius believes passion is <em>amoral</em> (neither good nor bad).
			</p>
			<p style={{maxWidth:"70ch"}}>
				I side with Aurelius on this one. I believe that having desires is perfectly fine so long as they are controlled properly.
			</p>

			<blockquote className="blockquote">
				<p>
					&ldquo;[S]ee that ye bridle all your passions, that ye may be filled with love&rdquo;</p>
				<footer className="blockquote-footer fade-light text-dark">Alma 38:12</footer>
			</blockquote>
		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart + 5.5}
			speed={0.01}
			factor={2}
			style={{
				backgroundImage:`url(${chocolate})`,
				backgroundSize:"cover",
				backgroundPosition:"center",
				backgroundBlendMode:"darken",
				backgroundColor:"rgba(0,0,0,.5)"
			}}
		>
		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart+6}
			style={{backgroundColor:"transparent"}}
			speed={0.05}
			className="flex-center p-5 flex-column blend-text"
		>
			<h2>Personal Example</h2>
			<p className="good-width">
				The summer after high school, I began my Latter-day Saint mission.
			</p>
			<p className="good-width">
				I had never lived on my own before my mission. 
				Once I got into the field, I was faced with more freedom than ever before.
			</p>
			<p className="good-width">
				I abused this freedom by eating an <em>enourmous</em> quantity of candy every day,
				to the point where my companion tried to have an intervention, but it failed.
			</p>
			<p className="good-width">
				I intellectually knew that eating all this candy was harmful, but my human weakness
				overpowered my sense of reason and I went on destroying my health.
			</p>
			<p className="good-width">
				Eventually, I realized the error of my ways. It took a lot of time and willpower,
				but I eventually conquered my candy addiction and now I eat quite healthily.
			</p>
			<p className="good-width">
				What's the moral of the story? 
			</p>
			<p className="good-width">
				Knowing something is great, but it's even better to <em>be true to what you know.</em>
			</p>
		</ParallaxLayer>




		{/* HELPING OTHERS SECTION */}
		<ParallaxLayer
		sticky={{start: helpingStart -0.5, end: helpingStart + helpingDuration}}
		className="p-5 mx-auto flex-center"
		style={{maxWidth:"52em", zIndex:-100}}
		>
		<h1 className="display-1 text-center w-100">3. Help Others Learn &amp; Master Themselves</h1>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 0.75}
		speed={0.3}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft:"13%"}}
		>
			<FlipCard
				backQuote={true}
				backBody={<>Judging others makes us blind,<br />whereas love is illuminating.</>}
				backTitle="Dietrich Bonhoeffer"
				body="If it is in one's power to help others, it is morally necessary to do so. This help
				should be given in a spirit of nonjudgmental love."
				title="Judge not"
				blur={"6px"}
				bgColor="#a337"
			>
			</FlipCard>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 1.15}
		speed={.05}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft:"60%"}}
		>
			<FlipCard
				body="Helping others helps us grow personally as well.
				Loving and serving others enables all people to grow individually and collectively towards living the good life."
				title="Virtuous cycle"
				backQuote={true}
				backTitle="Dietrich Bonhoeffer"
				backBody="To serve our brother, to please him, to allow him his due and to let him live, is the way of self-denial, the way of the cross.
				Greater love hath no man that this, that a man lay down his life for his friends."
				bgColor="#a917"
				blur="6px"
			>
			</FlipCard>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 1.45}
		speed={.75}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft:"20%"}}
		>
			<FlipCard
				title="Don't overdo it"
				body="Don't stress about helping people who are outside of your control. Yes, care about them. But don't beat yourelf up for 
				for having limited means."
				backQuote={true}
				backTitle="Anne Lindbergh"
				backBody="We are asked today to feel compassionately for everyone in the world; to digest intellectually all the information spread
				out in public print; and to implement in action every ethical impulse aroused by our hearts and minds. The inter-relatednss of the world
				link us constantly with more people than the our hearts can hold. Or rather—for I believe the hart is infinite—modern communication
				loads us with more problems than the human frame can carry."
				height={430}
				width={430}
				bgColor="#33a7"
				blur="6px"
			>
			</FlipCard>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 1.98}
		speed={0.61}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft: "65.5%"}}
		>
			<FlipCard
				title="What if they don't want help?"
				body={<>People often resist exiting the cave until they adjust to the light.
				We should always strive, without forcing, to help others live the good life.
				However, we should respect the beliefs of others.</>}
				backQuote={true}
				backTitle="William James"
				backBody="We ought... delicately and profoundly to respect one another's mental freedom:
				then only shall we bring about the intellectual republic."
				blur="6px"
				bgColor="#2a37"

			>
			</FlipCard>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 2.35}
		speed={.1}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft: "19%"}}
		>
			<FlipCard
				height="500px"
				width="500px"
				title="Personal Experience"
				body={<>After returning home from my mission, I felt a constant pressure to help others in every way I could.
				I would constantly receive impressions to reach out to people in my ward,
				call old friends, and donate money to charitable causes.
				However, these impressions came so frequently that I struggled to keep up with them.
				Additionally, I discovered many new social issues to care about and felt the need to contribute
				despite lacking the time or resources to do so. I became discouraged at my inability to help others to the extent I wanted.
				<br /><br /><span className="text-center">(continued on back)</span></>}
				backTitle="Personal Experience Continued"
				backBody="
				This changed one day as I was reading The Screwtape Letters by C.S. Lewis.
				In this book, a devil explains that one of the most effective ways to keep
				a person out of heaven is to convince him to
				“thrust his benevolence out to the remote circumference, to people he does not
				know…thus…the benevolence [becomes] largely imaginary.” This hit me hard.
				I was feeling a distant pseudo-love for people I hardly knew,
				but I was neglecting the people I was closest to, especially my immediate
				family and closest friends. I decided to prioritize the people who were in my life at that very moment.
				This change in mindset allowed me to serve others much more effectively. It also improved my mental well-being considerably."
				bgColor="#7177"
				blur="7px"
			>
			</FlipCard>
		</ParallaxLayer>

		
		{/* CONCLUSION SECTION */}

		<ParallaxLayer
			offset={conclusionStart}
			speed={0.01}
			factor={1.8}
			style={{
				backgroundImage:`url(${moses})`,
				backgroundSize:"cover",
				backgroundPosition:"50% 45%",
				backgroundBlendMode:"darken",
				backgroundColor:"rgba(0,0,0,.5)"
			}}
		>

		</ParallaxLayer>

		<ParallaxLayer
		sticky={{start: conclusionStart + 0.1, end: conclusionStart + .7}}
		className="p-5 d-flex flex-column text-light"
		>
		<h1 className="display-1 text-center w-100">A scriptural conclusion</h1>
		<div className="flex-center my-auto flex-column">
			<ol id="scripture-list">
			<li>
				God's glory is "the immortality and eternal life of man" (Moses 1:39).
			</li>
			<li className="good-width">
				God's work is "<em>bring[ing] to pass</em>" his glory (Moses 1:39).
			</li>
			<li className="good-width">
				"The glory of God is intelligence" (D&C 93:36).
			</li>
			<li className="good-width">
				Intelligence is the combination of knowledge and acting on that knowledge (D&C 93:24-30)
			</li>
			<li className="good-width">
				Learning = increasing knowledge
			</li>
			<li className="good-width">
				Developing self-mastery = increasing one's ability to act on knowledge
			</li>
			<li className="good-width">
				Therefore, the work and glory of God is:
				<ol>
					<li>Learning as much as possible</li>
					<li>Developing self-mastery</li>
					<li>Helping others learn and develop self-mastery</li>
				</ol>
			</li>
			</ol>
		</div>
		</ParallaxLayer>

		<ParallaxLayer
		offset={end-1}
		className="flex-center"
		style={{backgroundColor:"tomato"}}
		>
			<h2 style={{fontSize:"64px", color:"white"}}>Thank you!</h2>
		</ParallaxLayer>

		
		</Parallax>
		</div>
		);
	}
	
	export default App;
	