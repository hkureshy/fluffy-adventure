import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { experiences } from '../../utils/experiences';

const Experience = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8 mb-8 md:mb-32">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">Experience</h2>
      <VerticalTimeline lineColor="#1F3A8A">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.period}
            iconStyle={{ background: 'rgb(249, 115, 22)' }}
            contentStyle={{ boxShadow: "0px 0px 15px 5px rgba(231,231,231,1)" }}
          >
            <h3 className="text-xl">{exp.position}</h3>
            <h4 className="text-lg mb-2 text-orange-500">{exp.company}</h4>
            <ul className='list-disc pl-4'>
              { exp.details.map((detail, i) => (
                <li key={i} className='mb-3'>{detail}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;