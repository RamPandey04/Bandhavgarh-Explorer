import Section from './Section';

const BestTime = () => (
  <Section id="best-time" title="Best Time to Visit">
    <div className="space-y-6">
      {[
        {
          season: 'Winter (November - February)',
          description: 'Cool and pleasant weather (5°C to 30°C). Ideal for wildlife spotting and birdwatching due to clear skies and active animals.',
        },
        {
          season: 'Summer (March - June)',
          description: 'Hotter months with thinner foliage, making tiger sightings easier during safaris.',
        },
        {
          season: 'Monsoon (July - September)',
          description: 'Heavy rainfall, some zones closed. Lush greenery but challenging for wildlife spotting.',
        },
      ].map((time) => (
        <div key={time.season} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">{time.season}</h3>
          <p>{time.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default BestTime;