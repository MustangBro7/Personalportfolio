import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'DDoS Detection and Mitigation System',
        description: 'Developed a DDoS detection and mitigation system using a machine learning model within the Ryu SDN Controller. Analyzed network traffic patterns to detect DDoS attacks, and utilized Mininet to simulate network topologies and attack scenarios. Implemented automated blocking of malicious traffic while ensuring legitimate traffic passes through.',
        tools: ['Python', 'Ryu SDN Controller', 'Mininet', 'Machine Learning'],
        role: 'Developer',
        code: '',
        demo: '',
        image: 'ddos_system_image', // Replace with actual image reference
    },
    {
        id: 2,
        name: 'Amazebot - Amazon Price Tracker',
        description: 'Engineered an Amazon price tracker using React and Flask, automating price monitoring and enhancing user savings. Implemented a backend system using Selenium and BeautifulSoup to scrape product prices, running cron jobs twice daily.',
        tools: ['React', 'Flask', 'Selenium', 'BeautifulSoup'],
        role: 'Developer',
        code: '',
        demo: '',
        image: 'amazebot_image', // Replace with actual image reference
    },
    {
        id: 3,
        name: 'Jaundice Detection in Newborns',
        description: 'Developed a deep learning model to accurately detect jaundice in newborns through image processing, achieving over 90% accuracy. Utilized a lightweight MobileNet model, matching the performance of traditional deep learning models while being resource-efficient.',
        tools: ['Python', 'TensorFlow', 'MobileNet'],
        role: 'Developer',
        code: '',
        demo: '',
        image: 'jaundice_detection_image', // Replace with actual image reference
    },
    {
        id: 5,
        name: 'File Combiner',
        description: 'Developed a CLI tool in Go to seamlessly combine PDFs and PPTs, streamlining document management.',
        tools: ['Go'],
        role: 'Developer',
        code: '',
        demo: '',
        image: 'file_combiner_image', // Replace with actual image reference
    }
];
// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },