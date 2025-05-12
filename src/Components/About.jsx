import Section from './Section';

const About = () => (
  <Section id="about" title="About Bandhavgarh">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-lg">
          Bandhavgarh National Park, located in Madhya Pradesh, is one of India’s premier tiger reserves. Established in 1968, it spans 1536 km² and is renowned for its high density of Royal Bengal Tigers. The park’s diverse landscape includes dense forests, grasslands, and the ancient Bandhavgarh Fort, offering a unique blend of wildlife and history.
        </p>
        <p className="text-lg mt-4">
          Home to over 50 species of mammals, 250 species of birds, and a variety of flora, Bandhavgarh is a biodiversity hotspot. It’s a must-visit for wildlife enthusiasts and nature lovers.
        </p>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTFvZTobMz8pG1l5rWtNpdnDfdMO9t23XjwF3tSXA6h7OjKB4ugVvBoyeb-oy4NQLsE0&usqp=CAU"
        alt="Bandhavgarh Landscape"
        className="rounded-lg shadow-lg"
      />
    </div>
  </Section>
);

export default About;